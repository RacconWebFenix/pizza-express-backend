import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { PrismaClient } from '@prisma/client';

describe('OrdersController (e2e)', () => {
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

  function getServer() {
    return app.getHttpServer() as unknown as import('http').Server;
  }

  async function waitForClienteApi(
    app: INestApplication,
    email: string,
    password: string,
    maxRetries = 10,
    delayMs = 300,
  ): Promise<void> {
    for (let i = 0; i < maxRetries; i++) {
      try {
        const res = await request(getServer())
          .post('/auth/login')
          .send({ email, password });
        if (res.status === 201 && res.body.access_token) {
          return; // Usuário pode fazer login, então foi criado com sucesso
        }
      } catch (error) {
        // Ignorar erro e tentar novamente
      }
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
    throw new Error(
      `Cliente com email ${email} não conseguiu fazer login após registro.`,
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
    });
    if (resRegister.status >= 400)
      throw new Error(
        'Falha ao registrar cliente: ' + JSON.stringify(resRegister.body),
      );
    await waitForClienteApi(app, email, password);
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

  it('/orders (GET) deve retornar pedidos', async () => {
    const email = randomEmail();
    const token = await createAndLoginCliente(email);

    // Cria categoria (ou usa existente)
    let category = await prisma.category.findUnique({
      where: { name: 'Pizzas' },
    });
    if (!category) {
      category = await prisma.category.create({
        data: {
          name: 'Pizzas',
          slug: 'pizzas',
        },
      });
    }

    // Cria produtos
    const product1 = await prisma.product.create({
      data: {
        name: 'Margherita Test',
        description: 'Molho de tomate, mussarela, manjericão',
        price: 39.9,
        categoryId: category.id,
        active: true,
      },
    });

    const product2 = await prisma.product.create({
      data: {
        name: 'Calabresa Test',
        description: 'Calabresa, cebola, mussarela',
        price: 44.9,
        categoryId: category.id,
        active: true,
      },
    });

    // Busca endereço existente do usuário cliente
    const address = await prisma.endereco.findFirst({
      where: { userId: 12 }, // ID do usuário CLIENTE criado no seed
    });

    if (!address) {
      throw new Error('Endereço do usuário cliente não encontrado');
    }

    // Cria pedido de delivery via API
    const orderRes = await request(getServer())
      .post('/orders')
      .set('Authorization', `Bearer ${token}`)
      .send({
        type: 'DELIVERY',
        items: [
          { productId: product1.id, quantity: 1 },
          { productId: product2.id, quantity: 2 },
        ],
        addressId: address.id,
        observations: 'Sem cebola na calabresa',
      });

    expect(orderRes.status).toBe(201);
    expect(orderRes.body).toHaveProperty('id');
    expect(orderRes.body.type).toBe('DELIVERY');
    expect(orderRes.body.status).toBe('PENDENTE');
    expect(orderRes.body.total).toBeGreaterThan(0);

    // Verifica se o pedido foi criado
    const getOrdersRes = await request(getServer())
      .get('/orders')
      .set('Authorization', `Bearer ${token}`);

    expect(getOrdersRes.status).toBe(200);
    expect(Array.isArray(getOrdersRes.body)).toBe(true);
    expect(getOrdersRes.body.length).toBeGreaterThan(0);
  });

  it('/orders/:id (GET) deve retornar um pedido', async () => {
    const email = randomEmail();
    const token = await createAndLoginCliente(email);

    // Cria categoria (ou usa existente)
    let category = await prisma.category.findUnique({
      where: { name: 'Pizzas' },
    });
    if (!category) {
      category = await prisma.category.create({
        data: {
          name: 'Pizzas',
          slug: 'pizzas',
        },
      });
    }

    // Cria produto
    const product = await prisma.product.create({
      data: {
        name: 'Margherita Test 2',
        description: 'Molho de tomate, mussarela, manjericão',
        price: 39.9,
        categoryId: category.id,
        active: true,
      },
    });

    // Busca endereço existente do usuário cliente
    const address = await prisma.endereco.findFirst({
      where: { userId: 12 }, // ID do usuário CLIENTE criado no seed
    });

    if (!address) {
      throw new Error('Endereço do usuário cliente não encontrado');
    }

    // Cria pedido de delivery via API
    const orderRes = await request(getServer())
      .post('/orders')
      .set('Authorization', `Bearer ${token}`)
      .send({
        type: 'DELIVERY',
        items: [{ productId: product.id, quantity: 1 }],
        addressId: address.id,
      });

    expect(orderRes.status).toBe(201);
    const orderId = orderRes.body.id;

    // Busca o pedido específico
    const getOrderRes = await request(getServer())
      .get(`/orders/${orderId}`)
      .set('Authorization', `Bearer ${token}`);

    expect(getOrderRes.status).toBe(200);
    expect(getOrderRes.body).toHaveProperty('id', orderId);
    expect(getOrderRes.body).toHaveProperty('type', 'DELIVERY');
    expect(getOrderRes.body).toHaveProperty('status');
    expect(getOrderRes.body).toHaveProperty('items');
    expect(Array.isArray(getOrderRes.body.items)).toBe(true);
  });
});
