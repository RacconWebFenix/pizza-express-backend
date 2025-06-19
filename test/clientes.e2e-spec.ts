import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { PrismaClient } from '@prisma/client';
import { waitForClienteApi } from './utils';

type Cliente = {
  id: number;
  email: string;
  nome: string;
  telefone: string;
  endereco: string;
};
type ErrorResponse = { message: string[] };

jest.setTimeout(8000); // Timeout global de 8 segundos para o arquivo

describe('ClientesController (e2e)', () => {
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

  // Helper para obter o server tipado corretamente para o supertest
  function getServer() {
    return app.getHttpServer() as unknown as import('http').Server;
  }

  afterAll(async () => {
    await app.close();
    await prisma.$disconnect();
  });

  beforeEach(async () => {
    // Removido deleteMany para preservar dados do seed
  });

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
    console.log('Register status:', resRegister.status, resRegister.body);
    if (resRegister.status !== 201)
      throw new Error('Falha ao registrar cliente');
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

  it('/clientes (GET) deve retornar clientes', async () => {
    jest.setTimeout(30000); // aumenta timeout para 30s
    const email = randomEmail();
    const token = await createAndLoginCliente(email);
    const res = await request(getServer())
      .get('/clientes')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    const clientes = res.body as Cliente[];
    expect(Array.isArray(clientes)).toBe(true);
    expect(clientes.length).toBeGreaterThan(0);
    expect(clientes[0]).toHaveProperty('id');
    expect(clientes[0]).toHaveProperty('email');
  });

  function randomEmail() {
    return `test${Date.now()}${Math.floor(Math.random() * 10000)}@mail.com`;
  }

  it('/auth/register (POST) deve retornar 400 se nome for muito curto', async () => {
    const res = await request(getServer()).post('/auth/register').send({
      nome: 'A',
      email: randomEmail(),
      password: '123456',
      endereco: 'Rua Teste',
    });
    expect(res.status).toBe(400);
    const body = res.body as ErrorResponse;
    expect(Array.isArray(body.message)).toBe(true);
    expect(body.message.some((msg: string) => msg.includes('nome'))).toBe(true);
  });

  it('/auth/register (POST) deve retornar 400 se email for inválido', async () => {
    const res = await request(getServer()).post('/auth/register').send({
      nome: 'Cliente Teste',
      email: 'email-invalido',
      password: '123456',
      endereco: 'Rua Teste',
    });
    expect(res.status).toBe(400);
    const body = res.body as ErrorResponse;
    expect(Array.isArray(body.message)).toBe(true);
    expect(body.message.some((msg: string) => msg.includes('email'))).toBe(
      true,
    );
  });

  it('/auth/register (POST) deve retornar 400 se senha for curta', async () => {
    const res = await request(getServer()).post('/auth/register').send({
      nome: 'Cliente Teste',
      email: randomEmail(),
      password: '123',
      endereco: 'Rua Teste',
    });
    expect(res.status).toBe(400);
    const body = res.body as ErrorResponse;
    expect(Array.isArray(body.message)).toBe(true);
    expect(body.message.some((msg: string) => msg.includes('password'))).toBe(
      true,
    );
  });

  it('/auth/register (POST) deve retornar 400 se endereco for curto', async () => {
    const res = await request(getServer()).post('/auth/register').send({
      nome: 'Cliente Teste',
      email: randomEmail(),
      password: '123456',
      endereco: 'Rua',
    });
    expect(res.status).toBe(400);
    const body = res.body as ErrorResponse;
    expect(Array.isArray(body.message)).toBe(true);
    expect(body.message.some((msg: string) => msg.includes('endereco'))).toBe(
      true,
    );
  });
});
