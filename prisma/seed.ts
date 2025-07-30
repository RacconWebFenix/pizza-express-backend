import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('DATABASE_URL:', process.env.DATABASE_URL);
  console.log('TEST_CLIENTE_PASSWORD:', process.env.TEST_CLIENTE_PASSWORD);
  if (!process.env.TEST_CLIENTE_PASSWORD) {
    throw new Error(
      'A variável TEST_CLIENTE_PASSWORD não está definida no .env!',
    );
  }

  // Limpa o banco antes de popular
  await prisma.pedido.deleteMany();
  await prisma.pizza.deleteMany();
  await prisma.entregador.deleteMany();
  await prisma.endereco.deleteMany();
  await prisma.cliente.deleteMany();

  // Clientes
  const senha = process.env.TEST_CLIENTE_PASSWORD;
  const senhaHash = await bcrypt.hash(senha, 10);
  const cliente1 = await prisma.cliente.create({
    data: {
      nome: 'João Silva',
      email: 'joao@email.com',
      password: senhaHash,
      telefone: '11999999999',
      enderecos: {
        create: [
          {
            cep: '12345-678',
            tipo: 'residencial',
            logradouro: 'Rua das Flores',
            numero: '123',
            bairro: 'Centro',
            cidade: 'São Paulo',
            estado: 'SP',
            principal: true,
          },
          {
            cep: '22222-222',
            tipo: 'comercial',
            logradouro: 'Rua dos Patos',
            numero: '99',
            bairro: 'Centro',
            cidade: 'São Paulo',
            estado: 'SP',
            principal: false,
            complemento: 'Sala 101',
          },
        ],
      },
    },
  });
  console.log('Cliente 1 criado');
  const cliente2 = await prisma.cliente.create({
    data: {
      nome: 'Maria Souza',
      email: 'maria@email.com',
      password: senhaHash,
      telefone: '11988887777',
      enderecos: {
        create: [
          {
            cep: '98765-432',
            tipo: 'comercial',
            logradouro: 'Av. Paulista',
            numero: '1000',
            bairro: 'Jardins',
            cidade: 'São Paulo',
            estado: 'SP',
            principal: true,
          },
        ],
      },
    },
  });
  console.log('Cliente 2 criado');
  await prisma.cliente.create({
    data: {
      nome: 'Carlos Lima',
      email: 'carlos@email.com',
      password: senhaHash,
      telefone: '11977776666',
      enderecos: {
        create: [
          {
            cep: '54321-987',
            tipo: 'residencial',
            logradouro: 'Rua Verde',
            numero: '321',
            bairro: 'Vila Nova',
            cidade: 'São Paulo',
            estado: 'SP',
            principal: true,
          },
        ],
      },
    },
  });
  console.log('Cliente 3 criado');

  // Entregadores
  const entregador1 = await prisma.entregador.create({
    data: {
      nome: 'Carlos Motoboy',
      telefone: '11988888888',
    },
  });
  console.log('Entregador 1 criado');
  const entregador2 = await prisma.entregador.create({
    data: {
      nome: 'Ana Entregadora',
      telefone: '11999997777',
    },
  });
  console.log('Entregador 2 criado');

  // Pizzas
  const pizza1 = await prisma.pizza.create({
    data: {
      nome: 'Margherita',
      descricao: 'Molho de tomate, mussarela, manjericão',
      preco: 39.9,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    },
  });
  console.log('Pizza 1 criada');
  const pizza2 = await prisma.pizza.create({
    data: {
      nome: 'Calabresa',
      descricao: 'Calabresa, cebola, mussarela',
      preco: 44.9,
      image: 'https://images.unsplash.com/photo-1548365328-8b849e6c7b8b',
    },
  });
  console.log('Pizza 2 criada');
  const pizza3 = await prisma.pizza.create({
    data: {
      nome: 'Quatro Queijos',
      descricao: 'Mussarela, parmesão, provolone, gorgonzola',
      preco: 49.9,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
    },
  });
  console.log('Pizza 3 criada');

  // Pedidos
  await prisma.pedido.create({
    data: {
      cliente: { connect: { id: cliente1.id } },
      pizzas: { connect: [{ id: pizza1.id }, { id: pizza2.id }] },
      status: 'em preparo',
      entregador: { connect: { id: entregador1.id } },
      latitude: -23.55052,
      longitude: -46.633308,
    },
  });
  console.log('Pedido 1 criado');
  await prisma.pedido.create({
    data: {
      cliente: { connect: { id: cliente2.id } },
      pizzas: { connect: [{ id: pizza3.id }] },
      status: 'entregue',
      entregador: { connect: { id: entregador2.id } },
      latitude: -23.55111,
      longitude: -46.634444,
    },
  });
  console.log('Pedido 2 criado');

  // Logs para diagnóstico
  const clientes = await prisma.cliente.count();
  const entregadores = await prisma.entregador.count();
  const pizzas = await prisma.pizza.count();
  const pedidos = await prisma.pedido.count();
  console.log('Seed concluído:', { clientes, entregadores, pizzas, pedidos });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
