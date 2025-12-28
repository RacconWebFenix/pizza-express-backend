import { PrismaClient, StatusPedido } from '@prisma/client';

const prisma = new PrismaClient();

const statuses: StatusPedido[] = [
  'PENDENTE',
  'EM_PREPARO',
  'A_CAMINHO',
  'ENTREGUE',
  'CANCELADO',
];

const nomes = [
  'João Silva',
  'Maria Santos',
  'Carlos Oliveira',
  'Ana Costa',
  'Pedro Ferreira',
  'Juliana Souza',
  'Roberto Alves',
  'Fernanda Lima',
  'Marcos Cesar Domingues',
];

async function main() {
  console.log('🍕 Iniciando seed de pedidos...\n');

  // Buscar usuários clientes existentes (role = CLIENT ou não ADMIN/FUNCIONARIO)
  const usuarios = await prisma.user.findMany({
    where: {
      role: {
        notIn: ['ADMIN', 'FUNCIONARIO'],
      },
    },
    include: {
      enderecos: true,
    },
  });

  if (usuarios.length === 0) {
    console.log('❌ Nenhum usuário cliente encontrado no banco');
    process.exit(1);
  }

  console.log(`✅ Encontrados ${usuarios.length} usuários\n`);

  // Buscar pizzas
  const pizzas = await prisma.pizza.findMany();

  if (pizzas.length === 0) {
    console.log('❌ Nenhuma pizza encontrada no banco');
    process.exit(1);
  }

  console.log(`✅ Encontradas ${pizzas.length} pizzas\n`);

  // Criar 10 pedidos
  for (let i = 0; i < 10; i++) {
    const usuarioAleatorio =
      usuarios[Math.floor(Math.random() * usuarios.length)];
    const enderecoAleatorio =
      usuarioAleatorio.enderecos[0] || usuarioAleatorio.enderecos[0];

    if (!enderecoAleatorio) {
      console.log(`⚠️  Usuário ${usuarioAleatorio.nome} não tem endereço`);
      continue;
    }

    // Selecionar 2-4 pizzas aleatoriamente
    const numPizzas = Math.floor(Math.random() * 3) + 2;
    const pizzasSelecionadas: typeof pizzas = [];
    for (let j = 0; j < numPizzas; j++) {
      const pizza = pizzas[Math.floor(Math.random() * pizzas.length)];
      if (!pizzasSelecionadas.find((p) => p.id === pizza.id)) {
        pizzasSelecionadas.push(pizza);
      }
    }

    const statusAleatorio =
      statuses[Math.floor(Math.random() * statuses.length)];

    const pedido = await prisma.pedido.create({
      data: {
        userId: usuarioAleatorio.id,
        enderecoId: enderecoAleatorio.id,
        status: statusAleatorio,
        observacoes: 'Pedido criado via seed de teste',
        total: Math.floor(Math.random() * 100 + 30), // Valor entre 30 e 130
        pizzas: {
          connect: pizzasSelecionadas.map((p) => ({ id: p.id })),
        },
      },
    });

    console.log(`✅ Pedido #${pedido.id} criado`);
    console.log(`   Cliente: ${usuarioAleatorio.nome}`);
    console.log(`   Status: ${statusAleatorio}`);
    console.log(`   Pizzas: ${pizzasSelecionadas.length}\n`);
  }

  console.log('✅ Seed de pedidos concluído!\n');
  process.exit(0);
}

main()
  .catch((error) => {
    console.error('❌ Erro durante seed:', error);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
