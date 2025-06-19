import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { PrismaClient } from '@prisma/client';

describe('EntregadoresController (e2e)', () => {
  jest.setTimeout(40000);
  let app: INestApplication;
  let prisma: PrismaClient;

  beforeAll(async () => {
    prisma = new PrismaClient();
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
    await prisma.$disconnect();
  });

  beforeEach(async () => {
    // Removido deleteMany para preservar dados do seed
  });

  // Helper para obter o server tipado corretamente para o supertest
  function getServer() {
    return app.getHttpServer() as unknown as import('http').Server;
  }

  async function waitForClienteApi(
    app: INestApplication,
    email: string,
    maxRetries = 50,
    delayMs = 300,
  ): Promise<void> {
    for (let i = 0; i < maxRetries; i++) {
      const res = await request(getServer()).get('/clientes').query({ email });
      if (
        Array.isArray(res.body) &&
        res.body.some((c: { email: string }) => c.email === email)
      )
        return;
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
    throw new Error(
      `Cliente com email ${email} não encontrado via API após registro.`,
    );
  }

  async function createAndLoginCliente(
    email: string,
    password = process.env.TEST_CLIENTE_PASSWORD!,
  ): Promise<string> {
    const resRegister = await request(getServer()).post('/auth/register').send({
      nome: 'João Silva',
      email,
      password,
      telefone: '11999999999',
      endereco: 'Rua das Flores, 123',
    });
    if (resRegister.status >= 400)
      throw new Error(
        'Falha ao registrar cliente: ' + JSON.stringify(resRegister.body),
      );
    await waitForClienteApi(app, email);
    const res = await request(getServer())
      .post('/auth/login')
      .send({ email, password });
    const token = (res.body as { access_token?: string }).access_token;
    if (!token) {
      throw new Error('Token de acesso não retornado ou inválido');
    }
    return token;
  }

  function randomEmail() {
    return `test${Date.now()}${Math.floor(Math.random() * 10000)}@mail.com`;
  }

  it('/entregadores (GET) deve retornar entregadores', async () => {
    const email = randomEmail();
    const token = await createAndLoginCliente(email);
    // Cria entregador
    await prisma.entregador.create({
      data: {
        nome: 'Carlos Motoboy',
        telefone: '11988888888',
      },
    });
    const res = await request(getServer())
      .get('/entregadores')
      .set('Authorization', `Bearer ${token}`);
    type Entregador = { id: number; nome: string };
    const body = res.body as Entregador[];
    expect(res.status).toBe(200);
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty('id');
    expect(body[0]).toHaveProperty('nome');
  });

  it('/entregadores (POST) seguido de (GET) deve retornar o entregador criado', async () => {
    const email = randomEmail();
    const token = await createAndLoginCliente(email);
    const entregadorData = {
      nome: 'Teste Diagnóstico',
      telefone: '11999990000',
    };
    // Cria um entregador
    const resPost = await request(getServer())
      .post('/entregadores')
      .set('Authorization', `Bearer ${token}`)
      .send(entregadorData);
    type PostResponse = { data: { id: number } };
    const postBody = resPost.body as PostResponse;
    expect(resPost.status).toBe(201);
    expect(postBody.data).toHaveProperty('id');
    // Busca todos entregadores
    const resGet = await request(getServer())
      .get('/entregadores')
      .set('Authorization', `Bearer ${token}`);
    type Entregador = { nome: string };
    const getBody = resGet.body as Entregador[];
    const nomes = getBody.map((e) => e.nome);
    expect(nomes).toContain('Teste Diagnóstico');
  });
});
