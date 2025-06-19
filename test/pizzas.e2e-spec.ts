import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { PrismaClient } from '@prisma/client';

describe('PizzasController (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaClient;

  jest.setTimeout(40000);

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

  it('/pizzas (GET) deve retornar pizzas', async () => {
    const email = randomEmail();
    const token = await createAndLoginCliente(email);
    // Cria pizzas
    await prisma.pizza.create({
      data: {
        nome: 'Margherita',
        descricao: 'Molho de tomate, mussarela, manjericão',
        preco: 39.9,
      },
    });
    await prisma.pizza.create({
      data: {
        nome: 'Calabresa',
        descricao: 'Calabresa, cebola, mussarela',
        preco: 44.9,
      },
    });
    const res = await request(getServer())
      .get('/pizzas')
      .set('Authorization', `Bearer ${token}`);
    type Pizza = { id: number; nome: string };
    const pizzasBody = res.body as Pizza[];
    expect(res.status).toBe(200);
    expect(Array.isArray(pizzasBody)).toBe(true);
    expect(pizzasBody.length).toBeGreaterThan(0);
    expect(pizzasBody[0]).toHaveProperty('id');
    expect(pizzasBody[0]).toHaveProperty('nome');
  });
});
