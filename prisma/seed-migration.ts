import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function migratePizzaToProduct() {
  console.log('🚀 Iniciando migração de Pizza para Product...');

  try {
    // 1. Criar categoria "Pizzas" se não existir
    let pizzaCategory = await prisma.category.findFirst({
      where: { slug: 'pizzas' },
    });

    if (!pizzaCategory) {
      pizzaCategory = await prisma.category.create({
        data: {
          name: 'Pizzas',
          slug: 'pizzas',
        },
      });
      console.log('✅ Categoria "Pizzas" criada');
    }

    // 2. Migrar todas as pizzas para produtos
    const pizzas = await prisma.pizza.findMany();
    console.log(`📊 Encontradas ${pizzas.length} pizzas para migrar`);

    for (const pizza of pizzas) {
      const existingProduct = await prisma.product.findFirst({
        where: { name: pizza.nome },
      });

      if (!existingProduct) {
        await prisma.product.create({
          data: {
            name: pizza.nome,
            description: pizza.descricao,
            price: pizza.preco,
            imageUrl: pizza.image,
            categoryId: pizzaCategory.id,
            active: true,
          },
        });
        console.log(`✅ Pizza "${pizza.nome}" migrada para Product`);
      } else {
        console.log(`⚠️ Produto "${pizza.nome}" já existe, pulando...`);
      }
    }

    console.log('🎉 Migração concluída com sucesso!');

  } catch (error) {
    console.error('❌ Erro durante a migração:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Executar apenas se chamado diretamente
if (require.main === module) {
  migratePizzaToProduct().catch(console.error);
}

export { migratePizzaToProduct };