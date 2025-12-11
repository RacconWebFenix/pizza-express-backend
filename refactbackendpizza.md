Aqui está o **Documento Mestre de Refatoração (Master Refactoring Plan)**.

Este documento foi desenhado especificamente para ser lido por uma IA (como o Cursor, Copilot ou eu mesmo em sessões futuras) ou por um desenvolvedor sênior. Ele divide a complexidade em **5 Tarefas Estratégicas**, garantindo integridade dos dados e adesão aos princípios SOLID.

# ---

**🏗️ Master Plan: Refatoração para Arquitetura Híbrida (Delivery & Presencial)**

Projeto: Pizza Express Backend  
Objetivo: Transição de "App de Pizza" para "Sistema de Gestão de Restaurante Completo".

## **📜 Diretrizes Gerais para a IA Executora**

1. **Integridade:** Nunca apague tabelas antigas antes de migrar os dados.  
2. **SOLID:** O princípio **Open/Closed** é lei aqui. Use *Strategy Pattern* para lógicas divergentes (Delivery vs. Mesa).  
3. **Tipagem:** strict: true sempre. Sem any.  
4. **Testes:** Cada tarefa só é concluída após a atualização dos testes unitários (.spec.ts).

## ---

**📌 Tarefa 1: Evolução do Schema (Banco de Dados)**

**Objetivo:** Preparar o PostgreSQL para suportar produtos genéricos e gestão de mesas sem quebrar os dados existentes de usuários.

### **1.1. Novas Entidades**

Adicione ao schema.prisma as seguintes estruturas. Não remova Pizza ainda.

Snippet de código

// Categorização de Produtos (ex: Pizzas, Bebidas, Sobremesas)  
model Category {  
  id        String    @id @default(uuid())  
  name      String    @unique  
  slug      String    @unique  
  products  Product\[\]  
  createdAt DateTime  @default(now())  
}

// Produto Genérico (Substituirá a tabela Pizza futuramente)  
model Product {  
  id          String   @id @default(uuid())  
  name        String  
  description String?  
  price       Decimal  @db.Decimal(10, 2\)  
  imageUrl    String?  
  categoryId  String  
  category    Category @relation(fields: \[categoryId\], references: \[id\])  
  active      Boolean  @default(true)  
    
  // Relacionamento com itens de pedido (OrderItems) deve ser migrado  
  items       OrderItem\[\]   
}

// Gestão de Mesas Físicas  
model Table {  
  id        String         @id @default(uuid())  
  number    Int            @unique // Identificador visual (Mesa 1, Mesa 2\)  
  status    TableStatus    @default(AVAILABLE) // Enum: AVAILABLE, OCCUPIED, RESERVED  
  sessions  TableSession\[\]  
}

// Sessão de Atendimento (A "Comanda")  
model TableSession {  
  id        String    @id @default(uuid())  
  tableId   String  
  table     Table     @relation(fields: \[tableId\], references: \[id\])  
  openedAt  DateTime  @default(now())  
  closedAt  DateTime?  
  total     Decimal   @default(0) @db.Decimal(10, 2\)  
  orders    Order\[\]   // Pedidos feitos nesta sessão  
}

### **1.2. Atualização de Entidades Existentes**

Modifique o model Order para ser polimórfico (suportar os dois mundos).

Snippet de código

enum OrderType {  
  DELIVERY  
  DINE\_IN  
}

model Order {  
  // ... campos existentes ...  
  type        OrderType @default(DELIVERY)  
    
  // Campos Opcionais de Contexto  
  addressId   String?   // Obrigatório se DELIVERY  
  sessionId   String?   // Obrigatório se DINE\_IN (link com TableSession)  
  session     TableSession? @relation(fields: \[sessionId\], references: \[id\])  
    
  // Usuário se torna opcional (cliente de mesa pode ser anônimo)  
  userId      String?     
}

## ---

**📌 Tarefa 2: Módulo de Catálogo Genérico**

**Objetivo:** Criar a lógica de produtos que substitui o módulo pizzas.

### **2.1. Criar src/catalog**

Crie um novo módulo para gerenciar categorias e produtos.

* **CategoriesService:** CRUD simples.  
* **ProductsService:** Deve suportar upload de imagens e associação com categorias.

### **2.2. Script de Migração (Seed)**

Crie um script (prisma/seed-migration.ts) que:

1. Cria a categoria "Pizzas".  
2. Lê todas as entradas da tabela antiga Pizza.  
3. Insere na tabela nova Product vinculando à categoria "Pizzas".

## ---

**📌 Tarefa 3: Módulo de Mesas (Table Management)**

**Objetivo:** Implementar a lógica de abrir e fechar mesas (Clean Architecture).

### **3.1. Estrutura de Arquivos**

Crie src/tables com os seguintes serviços focados (SRP):

* ManageTablesService: CRUD de mesas físicas (criar mesa 1, mesa 2...).  
* TableSessionService:  
  * openSession(tableId): Valida se está livre \-\> Cria sessão \-\> Muda status para OCCUPIED.  
  * getBill(tableId): Soma todos os Orders vinculados à TableSession atual.  
  * closeSession(tableId): Fecha a sessão \-\> Muda status para AVAILABLE.

## ---

**📌 Tarefa 4: Refatoração de Pedidos com Strategy Pattern**

**Objetivo:** O controller de pedidos não deve saber "como" processar, apenas delegar.

### **4.1. Definir a Interface Strategy**

Crie src/orders/strategies/order-processing.strategy.ts:

TypeScript

export interface OrderProcessingStrategy {  
  validate(dto: CreateOrderDto): Promise\<void\>;  
  process(dto: CreateOrderDto, userId?: string): Promise\<Order\>;  
}

### **4.2. Implementar Estratégias Concretas**

**Arquivo:** src/orders/strategies/delivery.strategy.ts

* **Lógica:** Verifica addressId, calcula frete, verifica horário de funcionamento do delivery, vincula User.

**Arquivo:** src/orders/strategies/dine-in.strategy.ts

* **Lógica:** Verifica tableId, busca a TableSession ativa (erro se não houver), ignora frete, permite userId nulo.

### **4.3. Implementar o Contexto (Service)**

No OrdersService, use um **Strategy Factory** simples:

TypeScript

async create(dto: CreateOrderDto, user?: User) {  
  const strategy \= this.strategyFactory.getStrategy(dto.type); // Retorna Delivery ou DineIn  
  await strategy.validate(dto);  
  return strategy.process(dto, user?.id);  
}

## ---

**📌 Tarefa 5: Limpeza e Finalização**

**Objetivo:** Remover código morto e garantir qualidade.

1. **Depreciação:** Marque o PizzasModule antigo como @Deprecated.  
2. **DTOs Unificados:** O CreateOrderDto deve ter validação condicional (class-validator):  
   * Se type \== DELIVERY, addressId é obrigatório.  
   * Se type \== DINE\_IN, tableId é obrigatório.  
3. **Testes E2E:**  
   * Cenário 1: Fluxo completo de Delivery (Login \-\> Pedido \-\> Entrega).  
   * Cenário 2: Fluxo completo de Mesa (Abrir Mesa \-\> Pedido \-\> Fechar Conta).

## ---

**🤖 Prompt de Execução Sugerido**

Quando for pedir para a IA executar, copie e cole o bloco da tarefa específica. Exemplo:

"IA, atue como Desenvolvedor Backend Sênior. Vamos iniciar a **Tarefa 1** do Master Refactoring Plan. Por favor, gere o código atualizado do schema.prisma com as novas models (Product, Category, Table, TableSession) e os enums atualizados. Não apague as tabelas antigas ainda. Após gerar o schema, crie a migration."