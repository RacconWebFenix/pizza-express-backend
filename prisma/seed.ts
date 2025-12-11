import { PrismaClient, StatusPedido } from '@prisma/client';
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
  await prisma.user.deleteMany();

  // === USUÁRIOS DE TESTE ===
  const senha = process.env.TEST_CLIENTE_PASSWORD;
  const senhaHash = await bcrypt.hash(senha, 10);

  // 1. ADMIN
  const adminUser = await prisma.user.create({
    data: {
      nome: 'Admin Sistema',
      email: 'admin@pizza.com',
      password: senhaHash,
      telefone: '11999999999',
      role: 'ADMIN',
      enderecos: {
        create: {
          cep: '01000-000',
          tipo: 'comercial',
          logradouro: 'Rua Admin',
          numero: '100',
          bairro: 'Centro',
          cidade: 'São Paulo',
          estado: 'SP',
          principal: true,
        },
      },
    },
  });

  // 2. FUNCIONARIO
  const funcionarioUser = await prisma.user.create({
    data: {
      nome: 'Maria Funcionária',
      email: 'funcionario@pizza.com',
      password: senhaHash,
      telefone: '11888888888',
      role: 'FUNCIONARIO',
      enderecos: {
        create: {
          cep: '02000-000',
          tipo: 'residencial',
          logradouro: 'Rua Funcionário',
          numero: '200',
          bairro: 'Vila Funcionário',
          cidade: 'São Paulo',
          estado: 'SP',
          principal: true,
        },
      },
    },
  });

  // 3. CLIENTE
  const clienteUser = await prisma.user.create({
    data: {
      nome: 'João Cliente',
      email: 'cliente@pizza.com',
      password: senhaHash,
      telefone: '11777777777',
      role: 'CLIENTE',
      enderecos: {
        create: [
          {
            cep: '03000-000',
            tipo: 'residencial',
            logradouro: 'Rua Cliente',
            numero: '300',
            bairro: 'Vila Cliente',
            cidade: 'São Paulo',
            estado: 'SP',
            principal: true,
          },
          {
            cep: '03100-000',
            tipo: 'comercial',
            logradouro: 'Av Cliente Trabalho',
            numero: '400',
            bairro: 'Centro Comercial',
            cidade: 'São Paulo',
            estado: 'SP',
            principal: false,
            complemento: 'Sala 101',
          },
        ],
      },
    },
  });
  console.log('Usuários de teste criados: ADMIN, FUNCIONARIO, CLIENTE');

  // Usuários para cada role diferente

  await prisma.user.create({
    data: {
      nome: 'Funcionário Exemplo',
      email: 'funcionario@example.com',
      password: senhaHash,
      role: 'FUNCIONARIO',
    },
  });
  console.log('Usuário FUNCIONARIO criado');
  await prisma.user.create({
    data: {
      nome: 'Administrador Exemplo',
      email: 'admin@example.com',
      password: senhaHash,
      role: 'ADMIN',
    },
  });
  console.log('Usuário ADMIN criado');
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

  // Pedidos de exemplo
  const enderecoAdmin = await prisma.endereco.findFirst({
    where: { userId: adminUser.id, principal: true },
  });
  const enderecoCliente = await prisma.endereco.findFirst({
    where: { userId: clienteUser.id, principal: true },
  });

  if (!enderecoAdmin || !enderecoCliente) {
    throw new Error('Endereços principais não encontrados para os usuários.');
  }

  await prisma.pedido.create({
    data: {
      user: { connect: { id: clienteUser.id } },
      endereco: { connect: { id: enderecoCliente.id } },
      pizzas: { connect: [{ id: pizza1.id }, { id: pizza2.id }] },
      status: StatusPedido.EM_PREPARO, // Usando o Enum
      entregador: { connect: { id: entregador1.id } },
      latitude: -23.55052,
      longitude: -46.633308,
    },
  });
  console.log('Pedido 1 criado (EM_PREPARO)');

  await prisma.pedido.create({
    data: {
      user: { connect: { id: adminUser.id } },
      endereco: { connect: { id: enderecoAdmin.id } },
      pizzas: { connect: [{ id: pizza3.id }] },
      status: StatusPedido.ENTREGUE,
      entregador: { connect: { id: entregador2.id } },
    },
  });
  console.log('Pedido 2 criado para ADMIN (ENTREGUE)');

  // Logs para diagnóstico
  const usuarios = await prisma.user.count();
  const entregadores = await prisma.entregador.count();
  const pizzas = await prisma.pizza.count();
  const pedidos = await prisma.pedido.count();
  console.log('Seed concluído:', { usuarios, entregadores, pizzas, pedidos });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
