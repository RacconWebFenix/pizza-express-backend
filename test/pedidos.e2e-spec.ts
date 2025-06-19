import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { PrismaClient } from '@prisma/client';

describe('PedidosController (e2e)', () => {
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

  it('/pedidos (GET) deve retornar pedidos', async () => {
    const email = randomEmail();
    const token = await createAndLoginCliente(email);
    // Cria entregador
    const entregador = await prisma.entregador.create({
      data: {
        nome: 'Carlos Motoboy',
        telefone: '11988888888',
      },
    });
    // Cria pizzas
    const pizza1 = await prisma.pizza.create({
      data: {
        nome: 'Margherita',
        descricao: 'Molho de tomate, mussarela, manjericão',
        preco: 39.9,
      },
    });
    const pizza2 = await prisma.pizza.create({
      data: {
        nome: 'Calabresa',
        descricao: 'Calabresa, cebola, mussarela',
        preco: 44.9,
      },
    });
    // Aguarda cliente via API
    await waitForClienteApi(app, email);
    const clientes = await request(getServer())
      .get('/clientes')
      .query({ email });
    const clientesBody = clientes.body as { id: number }[];
    const clienteId = clientesBody[0].id;
    // Cria pedido via API
    const pedidoRes = await request(getServer())
      .post('/pedidos')
      .set('Authorization', `Bearer ${token}`)
      .send({
        clienteId,
        pizzasIds: [pizza1.id, pizza2.id],
        status: 'em preparo',
        entregadorId: entregador.id,
        latitude: -23.55052,
        longitude: -46.633308,
      });
    expect(pedidoRes.status).toBe(201);
    const res = await request(getServer())
      .get('/pedidos')
      .set('Authorization', `Bearer ${token}`);
    type Pedido = { id: number; status: string };
    const pedidosBody = res.body as Pedido[];
    expect(res.status).toBe(200);
    expect(Array.isArray(pedidosBody)).toBe(true);
    expect(pedidosBody.length).toBeGreaterThan(0);
    expect(pedidosBody[0]).toHaveProperty('id');
    expect(pedidosBody[0]).toHaveProperty('status');
  });

  it('/pedidos/:id (GET) deve retornar um pedido', async () => {
    const email = randomEmail();
    const token = await createAndLoginCliente(email);
    // Cria entregador
    const entregador = await prisma.entregador.create({
      data: {
        nome: 'Carlos Motoboy',
        telefone: '11988888888',
      },
    });
    // Cria pizzas
    const pizza1 = await prisma.pizza.create({
      data: {
        nome: 'Margherita',
        descricao: 'Molho de tomate, mussarela, manjericão',
        preco: 39.9,
      },
    });
    const pizza2 = await prisma.pizza.create({
      data: {
        nome: 'Calabresa',
        descricao: 'Calabresa, cebola, mussarela',
        preco: 44.9,
      },
    });
    // Aguarda cliente via API
    await waitForClienteApi(app, email);
    const clientes = await request(getServer())
      .get('/clientes')
      .query({ email });
    const clientesBody = clientes.body as { id: number }[];
    const clienteId = clientesBody[0].id;
    // Cria pedido via API
    const pedidoRes = await request(getServer())
      .post('/pedidos')
      .set('Authorization', `Bearer ${token}`)
      .send({
        clienteId,
        pizzasIds: [pizza1.id, pizza2.id],
        status: 'em preparo',
        entregadorId: entregador.id,
        latitude: -23.55052,
        longitude: -46.633308,
      });
    expect(pedidoRes.status).toBe(201);
    const pedidoId = (pedidoRes.body as { data: { id: number } }).data.id;
    const res = await request(getServer())
      .get(`/pedidos/${pedidoId}`)
      .set('Authorization', `Bearer ${token}`);
    const pedidoBody = res.body as { id: number; status: string };
    expect(res.status).toBe(200);
    expect(pedidoBody).toHaveProperty('id', pedidoId);
    expect(pedidoBody).toHaveProperty('status');
  });
});
