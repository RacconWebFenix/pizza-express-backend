import { PrismaClient, StatusPedido } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando seed do banco de dados...');

  // Limpa o banco antes de popular
  await prisma.pedido.deleteMany();
  await prisma.pizza.deleteMany();
  await prisma.entregador.deleteMany();
  await prisma.endereco.deleteMany();
  await prisma.user.deleteMany();

  // === CRIANDO USUÁRIOS SOLICITADOS ===
  const senha = '123'; // Senha fixa como solicitado
  const senhaHash = await bcrypt.hash(senha, 10);

  console.log('Criando usuário ADMIN...');
  // 1. ADMIN
  const adminUser = await prisma.user.create({
    data: {
      nome: 'Administrador',
      email: 'admin@admin.com',
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
  console.log('✅ Usuário ADMIN criado: admin@admin.com / senha: 123');

  console.log('Criando funcionários...');
  // 2. FUNCIONARIO 1
  const funcionario1 = await prisma.user.create({
    data: {
      nome: 'Funcionário 1',
      email: 'funcionario1',
      password: senhaHash,
      telefone: '11888888881',
      role: 'FUNCIONARIO',
      enderecos: {
        create: {
          cep: '02000-001',
          tipo: 'residencial',
          logradouro: 'Rua Funcionário 1',
          numero: '201',
          bairro: 'Vila Funcionário',
          cidade: 'São Paulo',
          estado: 'SP',
          principal: true,
        },
      },
    },
  });

  // 3. FUNCIONARIO 2
  const funcionario2 = await prisma.user.create({
    data: {
      nome: 'Funcionário 2',
      email: 'funcionario2',
      password: senhaHash,
      telefone: '11888888882',
      role: 'FUNCIONARIO',
      enderecos: {
        create: {
          cep: '02000-002',
          tipo: 'residencial',
          logradouro: 'Rua Funcionário 2',
          numero: '202',
          bairro: 'Vila Funcionário',
          cidade: 'São Paulo',
          estado: 'SP',
          principal: true,
        },
      },
    },
  });

  // 4. FUNCIONARIO 3
  const funcionario3 = await prisma.user.create({
    data: {
      nome: 'Funcionário 3',
      email: 'funcionario3',
      password: senhaHash,
      telefone: '11888888883',
      role: 'FUNCIONARIO',
      enderecos: {
        create: {
          cep: '02000-003',
          tipo: 'residencial',
          logradouro: 'Rua Funcionário 3',
          numero: '203',
          bairro: 'Vila Funcionário',
          cidade: 'São Paulo',
          estado: 'SP',
          principal: true,
        },
      },
    },
  });

  console.log('✅ Funcionários criados:');
  console.log('   - funcionario1 / senha: 123');
  console.log('   - funcionario2 / senha: 123');
  console.log('   - funcionario3 / senha: 123');

  // === CRIANDO ALGUNS DADOS BÁSICOS PARA TESTE ===

  console.log('Criando entregadores de exemplo...');
  // Entregadores
  const entregador1 = await prisma.entregador.create({
    data: {
      nome: 'Carlos Motoboy',
      telefone: '11988888888',
    },
  });

  const entregador2 = await prisma.entregador.create({
    data: {
      nome: 'Ana Entregadora',
      telefone: '11999997777',
    },
  });
  console.log('✅ Entregadores criados');

  console.log('Criando pizzas de exemplo...');
  // Pizzas
  const pizza1 = await prisma.pizza.create({
    data: {
      nome: 'Margherita',
      descricao: 'Molho de tomate, mussarela, manjericão',
      preco: 39.9,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    },
  });

  const pizza2 = await prisma.pizza.create({
    data: {
      nome: 'Calabresa',
      descricao: 'Calabresa, cebola, mussarela',
      preco: 44.9,
      image: 'https://images.unsplash.com/photo-1548365328-8b849e6c7b8b',
    },
  });
  console.log('✅ Pizzas criadas');

  // Logs para diagnóstico
  const usuarios = await prisma.user.count();
  const entregadores = await prisma.entregador.count();
  const pizzas = await prisma.pizza.count();
  const pedidos = await prisma.pedido.count();

  console.log('\n🎉 SEED CONCLUÍDO COM SUCESSO!');
  console.log('=====================================');
  console.log('📊 Dados criados:');
  console.log(`   👥 Usuários: ${usuarios}`);
  console.log(`   🏍️  Entregadores: ${entregadores}`);
  console.log(`   🍕 Pizzas: ${pizzas}`);
  console.log(`   📦 Pedidos: ${pedidos}`);
  console.log('');
  console.log('🔐 Credenciais de acesso:');
  console.log('   ADMIN: admin@admin.com / 123');
  console.log('   FUNC1: funcionario1 / 123');
  console.log('   FUNC2: funcionario2 / 123');
  console.log('   FUNC3: funcionario3 / 123');
  console.log('=====================================');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
