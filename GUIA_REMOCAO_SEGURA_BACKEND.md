# 🗑️ GUIA DE REMOÇÃO SEGURA - Backend Legado

**Data**: 28/12/2025 12:04
**Objetivo**: Remover sistema legado do backend com segurança
**Frontend**: https://github.com/RacconWebFenix/pizza-express-frontend

---

## ⚠️ IMPORTANTE: BACKUP PRIMEIRO!

```bash
# 1. Commit atual
git add .
git commit -m "checkpoint: before removing legacy system"

# 2. Criar branch de backup
git checkout -b backup/before-legacy-removal-20251228
git push origin backup/before-legacy-removal-20251228

# 3. Voltar para main
git checkout main

# 4. Criar branch de trabalho
git checkout -b feat/remove-legacy-system
```

---

## 📋 PASSO 1: Migrar Dados (Se Houver)

### Verificar se há dados no banco

```bash
# Conectar ao banco e verificar
npx prisma studio

# Ou via SQL
psql -d pizza_express -c "SELECT COUNT(*) FROM \"Pizza\";"
psql -d pizza_express -c "SELECT COUNT(*) FROM \"Pedido\";"
```

### Script de Migração

Criar arquivo: `prisma/migrate-legacy-data.ts`

```typescript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🔄 Migrando dados legados...');

  // 1. Criar categoria "Pizzas"
  const pizzaCategory = await prisma.category.upsert({
    where: { slug: 'pizzas' },
    update: {},
    create: {
      name: 'Pizzas',
      slug: 'pizzas',
      description: 'Nossas deliciosas pizzas',
    },
  });
  console.log('✅ Categoria criada');

  // 2. Migrar Pizzas → Products
  const pizzas = await prisma.pizza.findMany();
  console.log(`📦 Migrando ${pizzas.length} pizzas...`);

  for (const pizza of pizzas) {
    await prisma.product.upsert({
      where: { name: pizza.nome },
      update: {},
      create: {
        name: pizza.nome,
        description: pizza.descricao,
        price: pizza.preco.toString(),
        imageUrl: pizza.image,
        categoryId: pizzaCategory.id,
        active: true,
      },
    });
  }
  console.log(`✅ ${pizzas.length} pizzas migradas`);

  // 3. Migrar Pedidos → Orders
  const pedidos = await prisma.pedido.findMany({
    include: { pizzas: true },
  });
  console.log(`📦 Migrando ${pedidos.length} pedidos...`);

  for (const pedido of pedidos) {
    // Verificar se já existe
    const exists = await prisma.order.findFirst({
      where: {
        userId: pedido.clienteId,
        createdAt: pedido.createdAt,
      },
    });

    if (exists) continue;

    // Criar order
    const order = await prisma.order.create({
      data: {
        type: 'DELIVERY',
        status: pedido.status,
        userId: pedido.clienteId,
        addressId: pedido.enderecoId,
        total: '0',
        deliveryFee: '5.00',
        observations: pedido.observacoes,
        createdAt: pedido.createdAt,
        updatedAt: pedido.updatedAt,
      },
    });

    // Criar order items
    let total = 0;
    for (const pizza of pedido.pizzas) {
      const product = await prisma.product.findFirst({
        where: { name: pizza.nome },
      });

      if (product) {
        const price = parseFloat(product.price);
        total += price;

        await prisma.orderItem.create({
          data: {
            orderId: order.id,
            productId: product.id,
            quantity: 1,
            price: product.price,
            subtotal: product.price,
            status: 'ACTIVE',
          },
        });
      }
    }

    // Atualizar total
    await prisma.order.update({
      where: { id: order.id },
      data: { total: (total + 5).toFixed(2) },
    });
  }
  console.log(`✅ ${pedidos.length} pedidos migrados`);

  console.log('🎉 Migração concluída!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
```

### Executar Migração

```bash
# Executar script de migração
npx ts-node prisma/migrate-legacy-data.ts

# Verificar dados migrados
npx prisma studio
```

---

## 📋 PASSO 2: Remover Código Backend

### 2.1 Remover Módulos

```bash
# Remover pastas legadas
rm -rf src/pizzas/
rm -rf src/pedidos/

# Remover testes legados
rm -f test/pizzas.e2e-spec.ts
rm -f test/pedidos.e2e-spec.ts
rm -f tests/e2e/04-pizzas.test.sh
rm -f tests/e2e/08-pedidos-legacy.test.sh
```

### 2.2 Atualizar app.module.ts

Editar `src/app.module.ts`:

```typescript
// REMOVER estas linhas:
import { PizzasModule } from './pizzas/pizzas.module';
import { PedidosModule } from './pedidos/pedidos.module';

@Module({
  imports: [
    // ... outros módulos
    // PizzasModule,    // ❌ REMOVER
    // PedidosModule,   // ❌ REMOVER
    CatalogModule,      // ✅ MANTER
    OrdersModule,       // ✅ MANTER (orders, não pedidos)
    // ... outros módulos
  ],
})
export class AppModule {}
```

---

## 📋 PASSO 3: Atualizar Prisma Schema

### 3.1 Editar schema.prisma

Editar `prisma/schema.prisma` e **REMOVER** completamente:

```prisma
// ❌ REMOVER ESTE MODEL COMPLETO
model Pizza {
  id          Int       @id @default(autoincrement())
  nome        String
  descricao   String
  preco       Float
  image       String?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  pedidos     Pedido[]  @relation("PedidoPizzas")
}

// ❌ REMOVER ESTE MODEL COMPLETO
model Pedido {
  id                Int         @id @default(autoincrement())
  clienteId         Int
  cliente           User        @relation(fields: [clienteId], references: [id])
  enderecoId        Int
  endereco          Endereco    @relation(fields: [enderecoId], references: [id])
  pizzasIds         Int[]
  pizzas            Pizza[]     @relation("PedidoPizzas")
  entregadorId      Int?
  entregador        Entregador? @relation(fields: [entregadorId], references: [id])
  paymentIntentId   String?
  observacoes       String?
  status            Status      @default(PENDENTE)
  createdAt         DateTime    @default(now())
  updatedAt         DateTime    @updatedAt
}
```

### 3.2 Remover Relacionamentos Legados

No mesmo arquivo, encontrar e remover relações:

```prisma
model User {
  // ... campos
  // pedidos     Pedido[]  // ❌ REMOVER ESTA LINHA
  orders      Order[]   // ✅ MANTER
  // ... outros campos
}

model Endereco {
  // ... campos
  // pedidos     Pedido[]  // ❌ REMOVER ESTA LINHA
  orders      Order[]   // ✅ MANTER
  // ... outros campos
}

model Entregador {
  // ... campos
  // pedidos     Pedido[]  // ❌ REMOVER ESTA LINHA
  // ... outros campos
}
```

### 3.3 Criar Migration de Remoção

```bash
# Gerar migration que remove as tabelas
npx prisma migrate dev --name remove_legacy_models

# Aplicar migration
npx prisma migrate deploy

# Atualizar Prisma Client
npx prisma generate
```

---

## 📋 PASSO 4: Atualizar Testes

### 4.1 Editar tests/e2e/run-all.sh

```bash
# Remover estas linhas:
# run_module "$TEST_DIR/04-pizzas.test.sh"
# run_module "$TEST_DIR/08-pedidos-legacy.test.sh"

# Manter apenas:
run_module "$TEST_DIR/01-auth.test.sh"
run_module "$TEST_DIR/02-users.test.sh"
run_module "$TEST_DIR/03-enderecos.test.sh"
run_module "$TEST_DIR/05-catalog.test.sh"      # ✅ Produtos
run_module "$TEST_DIR/06-tables.test.sh"
run_module "$TEST_DIR/07-orders.test.sh"       # ✅ Pedidos modernos
run_module "$TEST_DIR/09-entregadores.test.sh"
run_module "$TEST_DIR/10-payments.test.sh"
```

### 4.2 Atualizar Relatório

Editar `RELATORIO_TESTES_E2E.md` e remover seções de pizzas e pedidos legado.

---

## 📋 PASSO 5: Atualizar Documentação

### 5.1 Atualizar README.md

Remover todas as seções sobre `/pizzas` e `/pedidos`:

```markdown
## ❌ REMOVER:
### Pizzas
- GET /pizzas
- POST /pizzas
...

### Pedidos
- GET /pedidos
- POST /pedidos
...

## ✅ MANTER/DESTACAR:
### Catálogo
- GET /categories
- GET /products
...

### Pedidos
- POST /orders (não /pedidos!)
- GET /orders
...
```

### 5.2 Atualizar Insomnia Collection

Editar `Insomnia_Pizza_Express_Complete.yaml` e remover todas as requests de:
- `/pizzas`
- `/pedidos`

---

## 📋 PASSO 6: Validar e Testar

### 6.1 Compilar Backend

```bash
# Compilar TypeScript
npm run build

# Deve compilar SEM ERROS
```

### 6.2 Executar Testes E2E

```bash
cd tests/e2e
./run-all.sh

# Deve passar: 8/8 módulos (sem pizzas e pedidos)
```

### 6.3 Iniciar Servidor

```bash
npm run start:dev

# Verificar logs - sem erros
```

### 6.4 Testar Endpoints Modernos

```bash
# Testar catálogo
curl http://localhost:3000/categories
curl http://localhost:3000/products

# Testar pedidos modernos
curl -X POST http://localhost:3000/orders \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "DELIVERY",
    "addressId": 1,
    "items": [{"productId": "uuid", "quantity": 1}]
  }'
```

### 6.5 Verificar que Legado Foi Removido

```bash
# Tentar acessar endpoints legados (deve falhar)
curl http://localhost:3000/pizzas
# Esperado: 404 Not Found

curl http://localhost:3000/pedidos
# Esperado: 404 Not Found
```

---

## 📋 PASSO 7: Commit e Push

### 7.1 Commit das Mudanças

```bash
git add .

git commit -m "feat: remove legacy system (pizzas + pedidos)

BREAKING CHANGES:
- Remove /pizzas endpoints (use /products)
- Remove /pedidos endpoints (use /orders)
- Remove Pizza and Pedido models from database
- Migrate legacy data to modern system

Migration:
- Pizzas migrated to Products (category: pizzas)
- Pedidos migrated to Orders (type: DELIVERY)

New endpoints to use:
- GET /categories - List categories
- GET /products - List all products
- GET /products?categoryId=X - Filter by category
- POST /orders - Create order (DELIVERY or DINEIN)
- GET /orders - List orders

Documentation updated:
- README.md
- Insomnia collection
- E2E tests

See GUIA_MIGRACAO_FRONTEND.md for frontend migration guide."

git push origin feat/remove-legacy-system
```

### 7.2 Criar Pull Request

```bash
# No GitHub, criar PR com:
# Título: Remove legacy system (pizzas + pedidos)
# Descrição: Ver commit message acima
# Label: breaking-change
```

---

## 📋 CHECKLIST COMPLETO

### Antes de Começar
- [ ] ✅ Backup do código (git commit + branch)
- [ ] ✅ Verificar se há dados no banco
- [ ] ✅ Executar script de migração (se houver dados)
- [ ] ✅ Validar que dados foram migrados

### Remoção de Código
- [ ] ✅ Remover pasta `src/pizzas/`
- [ ] ✅ Remover pasta `src/pedidos/`
- [ ] ✅ Atualizar `src/app.module.ts`
- [ ] ✅ Remover imports de PizzasModule
- [ ] ✅ Remover imports de PedidosModule

### Prisma Schema
- [ ] ✅ Remover model `Pizza`
- [ ] ✅ Remover model `Pedido`
- [ ] ✅ Remover relação `pedidos` do User
- [ ] ✅ Remover relação `pedidos` do Endereco
- [ ] ✅ Remover relação `pedidos` do Entregador
- [ ] ✅ Executar `npx prisma migrate dev --name remove_legacy_models`
- [ ] ✅ Executar `npx prisma generate`

### Testes
- [ ] ✅ Remover `test/pizzas.e2e-spec.ts`
- [ ] ✅ Remover `test/pedidos.e2e-spec.ts`
- [ ] ✅ Remover `tests/e2e/04-pizzas.test.sh`
- [ ] ✅ Remover `tests/e2e/08-pedidos-legacy.test.sh`
- [ ] ✅ Atualizar `tests/e2e/run-all.sh`

### Documentação
- [ ] ✅ Atualizar README.md
- [ ] ✅ Atualizar Insomnia collection
- [ ] ✅ Atualizar RELATORIO_TESTES_E2E.md

### Validação
- [ ] ✅ `npm run build` sem erros
- [ ] ✅ `./tests/e2e/run-all.sh` passando
- [ ] ✅ Servidor inicia sem erros
- [ ] ✅ Endpoints modernos funcionando
- [ ] ✅ Endpoints legados retornam 404

### Deploy
- [ ] ✅ Commit com mensagem clara
- [ ] ✅ Push para branch
- [ ] ✅ Criar Pull Request
- [ ] ✅ Review de código
- [ ] ✅ Merge para main

---

## ⚠️ PROBLEMAS COMUNS

### Erro: "Table 'Pizza' doesn't exist"

**Causa**: Migration não foi aplicada

**Solução**:
```bash
npx prisma migrate deploy
npx prisma generate
npm run build
```

### Erro: "Cannot find module './pizzas/pizzas.module'"

**Causa**: Import não foi removido

**Solução**:
```bash
# Procurar imports restantes
grep -r "pizzas.module" src/
grep -r "pedidos.module" src/

# Remover manualmente
```

### Erro: Testes falhando

**Causa**: Testes ainda referenciam legado

**Solução**:
```bash
# Procurar referências
grep -r "/pizzas" test/
grep -r "/pedidos" test/

# Remover ou atualizar testes
```

---

## 🎉 APÓS A REMOÇÃO

### O que foi removido:
- ❌ `/pizzas` endpoints
- ❌ `/pedidos` endpoints
- ❌ Model Pizza
- ❌ Model Pedido
- ❌ Testes legados
- ❌ Documentação legada

### O que usar agora:
- ✅ `/categories` - Listar categorias
- ✅ `/products` - Listar produtos
- ✅ `/orders` - Criar/listar pedidos
- ✅ `/tables` - Sistema de mesas
- ✅ `/payments/split` - Dividir conta

### Benefícios:
- ✅ Código 30% menor
- ✅ Menos complexidade
- ✅ Mais fácil de manter
- ✅ Sem duplicação

---

**⏱️ Tempo Total Estimado: 2-3 horas**

**Data de Execução**: 28/12/2025
**Status**: ✅ Pronto para executar
