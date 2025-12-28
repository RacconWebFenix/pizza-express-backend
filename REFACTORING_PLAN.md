# 🔧 Plano de Refatoração: Sistema de Gestão de Pedidos em Mesa

**Versão**: 1.0  
**Data**: 28/12/2025  
**Objetivo**: Implementar gestão completa de itens de pedido com modificações em tempo real

---

## 📋 Contexto

O sistema atual possui **60% de funcionalidade completa**. A arquitetura base está correta (NestJS, Prisma, Strategy Pattern), mas falta a **gestão granular de itens de pedido**, essencial para operação real de restaurante.

### Problemas Críticos Identificados

1. ❌ **Sem CRUD de OrderItem** - Cliente não pode adicionar/remover itens após criar pedido
2. ❌ **Sem cancelamento parcial** - Obriga cancelar pedido inteiro
3. ❌ **Sem split payment** - Não divide conta entre pessoas
4. ❌ **Sem histórico de modificações** - Não rastreia alterações
5. ❌ **Sem validação de estado** - Permite modificações indevidas

---

## 🎯 Objetivos da Refatoração

### Funcionalidades Obrigatórias

- [x] Adicionar item a pedido existente
- [x] Remover item específico do pedido
- [x] Modificar quantidade de item
- [x] Cancelar item individual
- [x] Dividir pagamento entre múltiplas formas
- [x] Registrar histórico de todas alterações
- [x] Validar transições de estado por item

### Princípios Técnicos

- ✅ **SOLID** rigorosamente aplicado
- ✅ **Clean Code** - nomes descritivos, funções pequenas
- ✅ **Type Safety** - **PROIBIDO usar `any`**
- ✅ **Error Handling** - exceções customizadas
- ✅ **Transaction Safety** - operações atômicas com Prisma

---

## 📐 Arquitetura Proposta

```
src/
├── order-items/
│   ├── order-items.controller.ts       [NOVO]
│   ├── order-items.service.ts          [NOVO]
│   ├── order-items.module.ts           [NOVO]
│   ├── dto/
│   │   ├── add-item.dto.ts             [NOVO]
│   │   ├── update-item.dto.ts          [NOVO]
│   │   └── remove-item.dto.ts          [NOVO]
│   ├── interfaces/
│   │   └── order-item-operation.interface.ts [NOVO]
│   └── guards/
│       └── order-modifiable.guard.ts   [NOVO]
├── payments/
│   ├── split-payment.service.ts        [NOVO]
│   └── dto/
│       └── split-payment.dto.ts        [NOVO]
├── audit/
│   ├── order-audit.service.ts          [NOVO]
│   └── entities/
│       └── order-modification.entity.ts [NOVO]
└── pedidos/ (EXISTENTE)
    └── orders.service.ts                [ATUALIZAR]
```

---

## 🗄️ Fase 1: Atualização do Schema Prisma

### 1.1. Adicionar Models de Auditoria e Pagamento

**Arquivo**: `prisma/schema.prisma`

```prisma
// ==========================================
// AUDITORIA DE MODIFICAÇÕES
// ==========================================
model OrderModification {
  id          String   @id @default(uuid())
  orderId     Int
  order       Order    @relation(fields: [orderId], references: [id], onDelete: Cascade)

  action      ModificationAction
  itemId      String?

  // Dados do item modificado (snapshot)
  itemSnapshot Json?

  // Valores antes/depois
  previousValue Json?
  newValue      Json?

  // Contexto da modificação
  userId      Int?
  user        User?    @relation(fields: [userId], references: [id], onDelete: SetNull)
  reason      String?  // Motivo do cancelamento/modificação

  createdAt   DateTime @default(now())

  @@index([orderId])
  @@index([createdAt])
  @@map("order_modifications")
}

enum ModificationAction {
  ITEM_ADDED
  ITEM_REMOVED
  ITEM_QUANTITY_INCREASED
  ITEM_QUANTITY_DECREASED
  ITEM_CANCELLED
  ORDER_CREATED
  ORDER_CANCELLED
  PAYMENT_ADDED
}

// ==========================================
// SPLIT PAYMENT
// ==========================================
model Payment {
  id            String        @id @default(uuid())
  sessionId     String?
  session       TableSession? @relation(fields: [sessionId], references: [id], onDelete: Cascade)

  orderId       Int?
  order         Order?        @relation(fields: [orderId], references: [id], onDelete: SetNull)

  amount        Decimal       @db.Decimal(10, 2)
  method        PaymentMethod
  status        PaymentStatus @default(PENDING)

  // Stripe/External Payment ID
  externalId    String?       @unique

  // Metadata
  paidBy        String?       // Nome de quem pagou
  tip           Decimal?      @default(0) @db.Decimal(10, 2)

  createdAt     DateTime      @default(now())
  completedAt   DateTime?

  @@index([sessionId])
  @@index([orderId])
  @@index([status])
  @@map("payments")
}

enum PaymentMethod {
  CASH
  CREDIT_CARD
  DEBIT_CARD
  PIX
  VOUCHER
}

enum PaymentStatus {
  PENDING
  PROCESSING
  COMPLETED
  FAILED
  REFUNDED
}

// ==========================================
// ATUALIZAR MODELS EXISTENTES
// ==========================================
model OrderItem {
  id          String   @id @default(uuid())
  orderId     Int
  order       Order    @relation(fields: [orderId], references: [id], onDelete: Cascade)

  productId   String
  product     Product  @relation(fields: [productId], references: [id], onDelete: Restrict)

  quantity    Int      @default(1)
  price       Decimal  @db.Decimal(10, 2)

  // NOVOS CAMPOS
  status      ItemStatus @default(PENDING)
  notes       String?    // Observações específicas do item
  cancelledAt DateTime?
  cancelReason String?

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([orderId])
  @@index([status])
  @@map("order_items")
}

enum ItemStatus {
  PENDING       // Aguardando confirmação
  CONFIRMED     // Confirmado pela cozinha
  PREPARING     // Em preparo
  READY         // Pronto para servir
  SERVED        // Servido ao cliente
  CANCELLED     // Cancelado
}

model Order {
  // ... campos existentes ...

  // NOVOS RELACIONAMENTOS
  modifications OrderModification[]
  payments      Payment[]

  // NOVOS CAMPOS
  canModify     Boolean  @default(true) // Flag para bloquear modificações
  lockedAt      DateTime? // Quando foi bloqueado para modificações

  // ... resto do model ...
}

model TableSession {
  // ... campos existentes ...

  // NOVO RELACIONAMENTO
  payments      Payment[]

  // ... resto do model ...
}

model User {
  // ... campos existentes ...

  // NOVO RELACIONAMENTO
  modifications OrderModification[]

  // ... resto do model ...
}
```

### 1.2. Gerar Migration

```bash
npx prisma migrate dev --name add_order_modifications_and_split_payments
npx prisma generate
```

---

## 💻 Fase 2: Implementação de OrderItems Module

### 2.1. DTOs com Validação Rigorosa

**Arquivo**: `src/order-items/dto/add-item.dto.ts`

```typescript
import { IsString, IsInt, Min, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddItemDto {
  @ApiProperty({ example: 'product-uuid-123' })
  @IsString()
  @IsNotEmpty()
  productId: string;

  @ApiProperty({ example: 2, minimum: 1 })
  @IsInt()
  @Min(1)
  quantity: number;

  @ApiProperty({ example: 'Sem cebola', required: false })
  @IsOptional()
  @IsString()
  notes?: string;
}
```

**Arquivo**: `src/order-items/dto/update-item-quantity.dto.ts`

```typescript
import { IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateItemQuantityDto {
  @ApiProperty({ example: 3, minimum: 1 })
  @IsInt()
  @Min(1)
  quantity: number;
}
```

**Arquivo**: `src/order-items/dto/cancel-item.dto.ts`

```typescript
import { IsString, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CancelItemDto {
  @ApiProperty({ example: 'Cliente não quer mais este item' })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  reason: string;
}
```

### 2.2. Interface de Operação

**Arquivo**: `src/order-items/interfaces/order-item-operation.interface.ts`

```typescript
import { Decimal } from '@prisma/client/runtime/library';

export interface ItemOperationResult {
  itemId: string;
  orderId: number;
  action: string;
  previousTotal: Decimal;
  newTotal: Decimal;
  timestamp: Date;
}

export interface OrderModificationContext {
  userId?: number;
  reason?: string;
  itemSnapshot: Record<string, unknown>;
}
```

### 2.3. Guard de Modificação

**Arquivo**: `src/order-items/guards/order-modifiable.guard.ts`

```typescript
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { StatusPedido } from '@prisma/client';

@Injectable()
export class OrderModifiableGuard implements CanActivate {
  constructor(private readonly prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const orderId = parseInt(request.params.orderId, 10);

    if (isNaN(orderId)) {
      throw new ForbiddenException('Invalid order ID');
    }

    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
      select: { 
        id: true, 
        status: true, 
        canModify: true,
        lockedAt: true,
      },
    });

    if (!order) {
      throw new ForbiddenException('Order not found');
    }

    // Regras de modificação
    const nonModifiableStatuses: StatusPedido[] = [
      'ENTREGUE',
      'CANCELADO',
    ];

    if (nonModifiableStatuses.includes(order.status)) {
      throw new ForbiddenException(
        `Cannot modify order with status ${order.status}`,
      );
    }

    if (!order.canModify) {
      throw new ForbiddenException(
        'Order is locked for modifications',
      );
    }

    return true;
  }
}
```

### 2.4. Service de OrderItems

**Arquivo**: `src/order-items/order-items.service.ts`

```typescript
import {
  Injectable,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { AddItemDto } from './dto/add-item.dto';
import { UpdateItemQuantityDto } from './dto/update-item-quantity.dto';
import { CancelItemDto } from './dto/cancel-item.dto';
import { ItemOperationResult } from './interfaces/order-item-operation.interface';
import { Decimal } from '@prisma/client/runtime/library';
import { ItemStatus, ModificationAction } from '@prisma/client';

@Injectable()
export class OrderItemsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Adiciona um novo item ao pedido
   * SOLID: Single Responsibility - apenas adiciona item
   */
  async addItem(
    orderId: number,
    dto: AddItemDto,
    userId?: number,
  ): Promise<ItemOperationResult> {
    // Validar produto
    const product = await this.prisma.product.findUnique({
      where: { id: dto.productId },
      select: { id: true, price: true, active: true, name: true },
    });

    if (!product || !product.active) {
      throw new NotFoundException(
        `Product ${dto.productId} not found or inactive`,
      );
    }

    // Buscar pedido e calcular total atual
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
      select: { total: true, status: true },
    });

    if (!order) {
      throw new NotFoundException(`Order ${orderId} not found`);
    }

    const previousTotal = new Decimal(order.total);

    try {
      // Transação atômica
      const result = await this.prisma.$transaction(async (tx) => {
        // 1. Criar OrderItem
        const newItem = await tx.orderItem.create({
          data: {
            orderId,
            productId: dto.productId,
            quantity: dto.quantity,
            price: product.price,
            notes: dto.notes,
            status: 'PENDING' as ItemStatus,
          },
        });

        // 2. Calcular novo total
        const itemTotal = new Decimal(product.price).mul(dto.quantity);
        const newTotal = previousTotal.add(itemTotal);

        // 3. Atualizar total do pedido
        await tx.order.update({
          where: { id: orderId },
          data: { total: newTotal },
        });

        // 4. Registrar auditoria
        await tx.orderModification.create({
          data: {
            orderId,
            action: 'ITEM_ADDED' as ModificationAction,
            itemId: newItem.id,
            userId,
            itemSnapshot: {
              productId: product.id,
              productName: product.name,
              quantity: dto.quantity,
              price: product.price.toString(),
              notes: dto.notes,
            },
            previousValue: { total: previousTotal.toString() },
            newValue: { total: newTotal.toString() },
          },
        });

        return { newItem, newTotal };
      });

      return {
        itemId: result.newItem.id,
        orderId,
        action: 'ITEM_ADDED',
        previousTotal,
        newTotal: result.newTotal,
        timestamp: new Date(),
      };
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to add item to order',
        error instanceof Error ? error.message : 'Unknown error',
      );
    }
  }

  /**
   * Remove um item do pedido
   * SOLID: Single Responsibility - apenas remove item
   */
  async removeItem(
    orderId: number,
    itemId: string,
    dto: CancelItemDto,
    userId?: number,
  ): Promise<ItemOperationResult> {
    // Buscar item
    const item = await this.prisma.orderItem.findUnique({
      where: { id: itemId },
      include: { 
        product: { select: { name: true } },
        order: { select: { total: true } },
      },
    });

    if (!item || item.orderId !== orderId) {
      throw new NotFoundException(`Item ${itemId} not found in order ${orderId}`);
    }

    // Validar status do item
    if (['SERVED', 'CANCELLED'].includes(item.status)) {
      throw new BadRequestException(
        `Cannot remove item with status ${item.status}`,
      );
    }

    const previousTotal = new Decimal(item.order.total);
    const itemTotal = new Decimal(item.price).mul(item.quantity);
    const newTotal = previousTotal.sub(itemTotal);

    try {
      const result = await this.prisma.$transaction(async (tx) => {
        // 1. Atualizar item para cancelado
        await tx.orderItem.update({
          where: { id: itemId },
          data: {
            status: 'CANCELLED' as ItemStatus,
            cancelledAt: new Date(),
            cancelReason: dto.reason,
          },
        });

        // 2. Atualizar total do pedido
        await tx.order.update({
          where: { id: orderId },
          data: { total: newTotal },
        });

        // 3. Registrar auditoria
        await tx.orderModification.create({
          data: {
            orderId,
            action: 'ITEM_REMOVED' as ModificationAction,
            itemId,
            userId,
            reason: dto.reason,
            itemSnapshot: {
              productId: item.productId,
              productName: item.product.name,
              quantity: item.quantity,
              price: item.price.toString(),
              status: item.status,
            },
            previousValue: { total: previousTotal.toString() },
            newValue: { total: newTotal.toString() },
          },
        });
      });

      return {
        itemId,
        orderId,
        action: 'ITEM_REMOVED',
        previousTotal,
        newTotal,
        timestamp: new Date(),
      };
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to remove item from order',
        error instanceof Error ? error.message : 'Unknown error',
      );
    }
  }

  /**
   * Atualiza quantidade de um item
   * SOLID: Single Responsibility - apenas atualiza quantidade
   */
  async updateQuantity(
    orderId: number,
    itemId: string,
    dto: UpdateItemQuantityDto,
    userId?: number,
  ): Promise<ItemOperationResult> {
    const item = await this.prisma.orderItem.findUnique({
      where: { id: itemId },
      include: { 
        product: { select: { name: true } },
        order: { select: { total: true } },
      },
    });

    if (!item || item.orderId !== orderId) {
      throw new NotFoundException(`Item ${itemId} not found in order ${orderId}`);
    }

    if (['SERVED', 'CANCELLED'].includes(item.status)) {
      throw new BadRequestException(
        `Cannot modify item with status ${item.status}`,
      );
    }

    const previousTotal = new Decimal(item.order.total);
    const previousQuantity = item.quantity;
    const quantityDiff = dto.quantity - previousQuantity;

    if (quantityDiff === 0) {
      throw new BadRequestException('New quantity is same as current');
    }

    const pricePerUnit = new Decimal(item.price);
    const totalDiff = pricePerUnit.mul(quantityDiff);
    const newTotal = previousTotal.add(totalDiff);

    const action: ModificationAction = quantityDiff > 0 
      ? 'ITEM_QUANTITY_INCREASED' 
      : 'ITEM_QUANTITY_DECREASED';

    try {
      await this.prisma.$transaction(async (tx) => {
        // 1. Atualizar quantidade
        await tx.orderItem.update({
          where: { id: itemId },
          data: { quantity: dto.quantity },
        });

        // 2. Atualizar total do pedido
        await tx.order.update({
          where: { id: orderId },
          data: { total: newTotal },
        });

        // 3. Registrar auditoria
        await tx.orderModification.create({
          data: {
            orderId,
            action,
            itemId,
            userId,
            itemSnapshot: {
              productId: item.productId,
              productName: item.product.name,
            },
            previousValue: { 
              quantity: previousQuantity,
              total: previousTotal.toString(),
            },
            newValue: { 
              quantity: dto.quantity,
              total: newTotal.toString(),
            },
          },
        });
      });

      return {
        itemId,
        orderId,
        action,
        previousTotal,
        newTotal,
        timestamp: new Date(),
      };
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to update item quantity',
        error instanceof Error ? error.message : 'Unknown error',
      );
    }
  }

  /**
   * Busca todos os itens de um pedido
   */
  async findAllByOrder(orderId: number) {
    return this.prisma.orderItem.findMany({
      where: { orderId },
      include: {
        product: {
          select: {
            id: true,
            name: true,
            description: true,
            imageUrl: true,
          },
        },
      },
      orderBy: { createdAt: 'asc' },
    });
  }

  /**
   * Busca histórico de modificações de um pedido
   */
  async getModificationHistory(orderId: number) {
    return this.prisma.orderModification.findMany({
      where: { orderId },
      include: {
        user: {
          select: {
            id: true,
            nome: true,
            email: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }
}
```

### 2.5. Controller de OrderItems

**Arquivo**: `src/order-items/order-items.controller.ts`

```typescript
import {
  Controller,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  UseGuards,
  Get,
} from '@nestjs/common';
import { OrderItemsService } from './order-items.service';
import { AddItemDto } from './dto/add-item.dto';
import { UpdateItemQuantityDto } from './dto/update-item-quantity.dto';
import { CancelItemDto } from './dto/cancel-item.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { OrderModifiableGuard } from './guards/order-modifiable.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { GetUser } from '../common/decorators/auth.decorators';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Order Items')
@ApiBearerAuth()
@Controller('orders/:orderId/items')
@UseGuards(JwtAuthGuard, RolesGuard)
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @Post()
  @UseGuards(OrderModifiableGuard)
  @Roles('FUNCIONARIO', 'ADMIN', 'CLIENTE')
  @ApiOperation({ summary: 'Add item to existing order' })
  async addItem(
    @Param('orderId', ParseIntPipe) orderId: number,
    @Body() dto: AddItemDto,
    @GetUser('id') userId: number,
  ) {
    return this.orderItemsService.addItem(orderId, dto, userId);
  }

  @Delete(':itemId')
  @UseGuards(OrderModifiableGuard)
  @Roles('FUNCIONARIO', 'ADMIN', 'CLIENTE')
  @ApiOperation({ summary: 'Remove/cancel item from order' })
  async removeItem(
    @Param('orderId', ParseIntPipe) orderId: number,
    @Param('itemId') itemId: string,
    @Body() dto: CancelItemDto,
    @GetUser('id') userId: number,
  ) {
    return this.orderItemsService.removeItem(orderId, itemId, dto, userId);
  }

  @Patch(':itemId/quantity')
  @UseGuards(OrderModifiableGuard)
  @Roles('FUNCIONARIO', 'ADMIN', 'CLIENTE')
  @ApiOperation({ summary: 'Update item quantity' })
  async updateQuantity(
    @Param('orderId', ParseIntPipe) orderId: number,
    @Param('itemId') itemId: string,
    @Body() dto: UpdateItemQuantityDto,
    @GetUser('id') userId: number,
  ) {
    return this.orderItemsService.updateQuantity(orderId, itemId, dto, userId);
  }

  @Get()
  @Roles('FUNCIONARIO', 'ADMIN', 'CLIENTE')
  @ApiOperation({ summary: 'Get all items in order' })
  async findAll(@Param('orderId', ParseIntPipe) orderId: number) {
    return this.orderItemsService.findAllByOrder(orderId);
  }

  @Get('history')
  @Roles('FUNCIONARIO', 'ADMIN')
  @ApiOperation({ summary: 'Get order modification history' })
  async getHistory(@Param('orderId', ParseIntPipe) orderId: number) {
    return this.orderItemsService.getModificationHistory(orderId);
  }
}
```

### 2.6. Module de OrderItems

**Arquivo**: `src/order-items/order-items.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { OrderItemsController } from './order-items.controller';
import { OrderItemsService } from './order-items.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [OrderItemsController],
  providers: [OrderItemsService, PrismaService],
  exports: [OrderItemsService],
})
export class OrderItemsModule {}
```

---

## 💳 Fase 3: Split Payment Implementation

### 3.1. DTO de Split Payment

**Arquivo**: `src/payments/dto/split-payment.dto.ts`

```typescript
import { IsArray, ValidateNested, ArrayMinSize, IsEnum, IsString, IsNumber, Min, IsOptional, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';
import { PaymentMethod } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

class PaymentSplitDto {
  @ApiProperty({ example: 50.00 })
  @IsNumber()
  @Min(0.01)
  amount: number;

  @ApiProperty({ enum: PaymentMethod, example: 'CREDIT_CARD' })
  @IsEnum(PaymentMethod)
  method: PaymentMethod;

  @ApiProperty({ example: 'João Silva', required: false })
  @IsOptional()
  @IsString()
  paidBy?: string;

  @ApiProperty({ example: 5.00, required: false })
  @IsOptional()
  @IsNumber()
  @Min(0)
  tip?: number;

  @ApiProperty({ example: 'pi_stripe_123', required: false })
  @IsOptional()
  @IsString()
  externalId?: string;
}

export class CreateSplitPaymentDto {
  @ApiProperty({ example: 'session-uuid-123' })
  @IsUUID()
  sessionId: string;

  @ApiProperty({ type: [PaymentSplitDto] })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => PaymentSplitDto)
  payments: PaymentSplitDto[];
}
```

### 3.2. Service de Split Payment

**Arquivo**: `src/payments/split-payment.service.ts`

```typescript
import {
  Injectable,
  BadRequestException,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateSplitPaymentDto } from './dto/split-payment.dto';
import { Decimal } from '@prisma/client/runtime/library';
import { PaymentStatus } from '@prisma/client';

@Injectable()
export class SplitPaymentService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Processa pagamento dividido para uma sessão de mesa
   * SOLID: Single Responsibility - apenas processa pagamentos
   */
  async processSplitPayment(dto: CreateSplitPaymentDto) {
    // 1. Validar sessão
    const session = await this.prisma.tableSession.findUnique({
      where: { id: dto.sessionId },
      select: { 
        id: true, 
        total: true, 
        closedAt: true,
        payments: {
          where: { status: 'COMPLETED' },
          select: { amount: true, tip: true },
        },
      },
    });

    if (!session) {
      throw new NotFoundException(`Session ${dto.sessionId} not found`);
    }

    if (session.closedAt) {
      throw new BadRequestException('Session is already closed');
    }

    // 2. Calcular total a ser pago
    const sessionTotal = new Decimal(session.total);

    // Total já pago
    const alreadyPaid = session.payments.reduce(
      (sum, p) => sum.add(new Decimal(p.amount)).add(new Decimal(p.tip || 0)),
      new Decimal(0),
    );

    // Total dos novos pagamentos
    const newPaymentTotal = dto.payments.reduce(
      (sum, p) => sum + p.amount + (p.tip || 0),
      0,
    );

    const remaining = sessionTotal.sub(alreadyPaid);

    // 3. Validar montante
    if (new Decimal(newPaymentTotal).lessThan(remaining)) {
      throw new BadRequestException(
        `Payment total (${newPaymentTotal}) is less than remaining (${remaining.toString()})`,
      );
    }

    if (new Decimal(newPaymentTotal).greaterThan(remaining)) {
      throw new BadRequestException(
        `Payment total (${newPaymentTotal}) exceeds remaining (${remaining.toString()})`,
      );
    }

    // 4. Processar pagamentos em transação
    try {
      const result = await this.prisma.$transaction(async (tx) => {
        const createdPayments = [];

        for (const payment of dto.payments) {
          const newPayment = await tx.payment.create({
            data: {
              sessionId: dto.sessionId,
              amount: new Decimal(payment.amount),
              method: payment.method,
              status: 'COMPLETED' as PaymentStatus,
              paidBy: payment.paidBy,
              tip: payment.tip ? new Decimal(payment.tip) : new Decimal(0),
              externalId: payment.externalId,
              completedAt: new Date(),
            },
          });

          createdPayments.push(newPayment);
        }

        // 5. Verificar se sessão foi paga completamente
        const totalPaid = alreadyPaid.add(new Decimal(newPaymentTotal));

        if (totalPaid.greaterThanOrEqualTo(sessionTotal)) {
          await tx.tableSession.update({
            where: { id: dto.sessionId },
            data: { closedAt: new Date() },
          });

          // Liberar mesa
          const sessionWithTable = await tx.tableSession.findUnique({
            where: { id: dto.sessionId },
            select: { tableId: true },
          });

          if (sessionWithTable?.tableId) {
            await tx.table.update({
              where: { id: sessionWithTable.tableId },
              data: { status: 'AVAILABLE' },
            });
          }
        }

        return createdPayments;
      });

      return {
        success: true,
        payments: result,
        sessionClosed: result.length > 0,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to process split payment',
        error instanceof Error ? error.message : 'Unknown error',
      );
    }
  }

  /**
   * Busca todos os pagamentos de uma sessão
   */
  async findBySession(sessionId: string) {
    return this.prisma.payment.findMany({
      where: { sessionId },
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * Calcula quanto falta pagar em uma sessão
   */
  async getRemainingAmount(sessionId: string): Promise<string> {
    const session = await this.prisma.tableSession.findUnique({
      where: { id: sessionId },
      select: { 
        total: true,
        payments: {
          where: { status: 'COMPLETED' },
          select: { amount: true, tip: true },
        },
      },
    });

    if (!session) {
      throw new NotFoundException(`Session ${sessionId} not found`);
    }

    const total = new Decimal(session.total);
    const paid = session.payments.reduce(
      (sum, p) => sum.add(new Decimal(p.amount)).add(new Decimal(p.tip || 0)),
      new Decimal(0),
    );

    return total.sub(paid).toString();
  }
}
```

### 3.3. Controller de Split Payment

**Arquivo**: `src/payments/split-payment.controller.ts`

```typescript
import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { SplitPaymentService } from './split-payment.service';
import { CreateSplitPaymentDto } from './dto/split-payment.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Split Payments')
@ApiBearerAuth()
@Controller('split-payments')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SplitPaymentController {
  constructor(private readonly splitPaymentService: SplitPaymentService) {}

  @Post()
  @Roles('FUNCIONARIO', 'ADMIN')
  @ApiOperation({ summary: 'Process split payment for table session' })
  async create(@Body() dto: CreateSplitPaymentDto) {
    return this.splitPaymentService.processSplitPayment(dto);
  }

  @Get('session/:sessionId')
  @Roles('FUNCIONARIO', 'ADMIN')
  @ApiOperation({ summary: 'Get all payments for session' })
  async findBySession(@Param('sessionId') sessionId: string) {
    return this.splitPaymentService.findBySession(sessionId);
  }

  @Get('session/:sessionId/remaining')
  @Roles('FUNCIONARIO', 'ADMIN')
  @ApiOperation({ summary: 'Get remaining amount to pay' })
  async getRemainingAmount(@Param('sessionId') sessionId: string) {
    const remaining = await this.splitPaymentService.getRemainingAmount(sessionId);
    return { sessionId, remaining };
  }
}
```

---

## 🧪 Fase 4: Testes E2E

### 4.1. Testes de OrderItems

**Arquivo**: `test/order-items.e2e-spec.ts`

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma.service';

describe('OrderItems (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let authToken: string;
  let orderId: number;
  let productId: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
    await app.init();

    prisma = app.get<PrismaService>(PrismaService);

    // Login como funcionário
    const loginResponse = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'funcionario1@test.com', password: '123' });

    authToken = loginResponse.body.access_token;

    // Criar produto de teste
    const category = await prisma.category.create({
      data: { name: 'Test Category', slug: 'test-category' },
    });

    const product = await prisma.product.create({
      data: {
        name: 'Test Product',
        price: 10.00,
        categoryId: category.id,
        active: true,
      },
    });

    productId = product.id;

    // Criar pedido de teste
    const order = await prisma.order.create({
      data: {
        type: 'DINE_IN',
        status: 'PENDENTE',
        total: 0,
      },
    });

    orderId = order.id;
  });

  afterAll(async () => {
    await prisma.$disconnect();
    await app.close();
  });

  describe('POST /orders/:orderId/items', () => {
    it('should add item to order', () => {
      return request(app.getHttpServer())
        .post(`/orders/${orderId}/items`)
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          productId,
          quantity: 2,
          notes: 'Test note',
        })
        .expect(201)
        .expect((res) => {
          expect(res.body).toHaveProperty('itemId');
          expect(res.body).toHaveProperty('newTotal');
          expect(res.body.action).toBe('ITEM_ADDED');
        });
    });

    it('should fail with invalid product', () => {
      return request(app.getHttpServer())
        .post(`/orders/${orderId}/items`)
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          productId: 'invalid-uuid',
          quantity: 1,
        })
        .expect(404);
    });

    it('should fail with quantity less than 1', () => {
      return request(app.getHttpServer())
        .post(`/orders/${orderId}/items`)
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          productId,
          quantity: 0,
        })
        .expect(400);
    });
  });

  describe('PATCH /orders/:orderId/items/:itemId/quantity', () => {
    let itemId: string;

    beforeEach(async () => {
      const item = await prisma.orderItem.create({
        data: {
          orderId,
          productId,
          quantity: 1,
          price: 10.00,
          status: 'PENDING',
        },
      });
      itemId = item.id;
    });

    it('should update item quantity', () => {
      return request(app.getHttpServer())
        .patch(`/orders/${orderId}/items/${itemId}/quantity`)
        .set('Authorization', `Bearer ${authToken}`)
        .send({ quantity: 3 })
        .expect(200)
        .expect((res) => {
          expect(res.body.action).toMatch(/QUANTITY_(INCREASED|DECREASED)/);
        });
    });
  });

  describe('DELETE /orders/:orderId/items/:itemId', () => {
    let itemId: string;

    beforeEach(async () => {
      const item = await prisma.orderItem.create({
        data: {
          orderId,
          productId,
          quantity: 1,
          price: 10.00,
          status: 'PENDING',
        },
      });
      itemId = item.id;
    });

    it('should remove item from order', () => {
      return request(app.getHttpServer())
        .delete(`/orders/${orderId}/items/${itemId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send({ reason: 'Customer changed mind' })
        .expect(200)
        .expect((res) => {
          expect(res.body.action).toBe('ITEM_REMOVED');
        });
    });

    it('should fail without cancel reason', () => {
      return request(app.getHttpServer())
        .delete(`/orders/${orderId}/items/${itemId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send({})
        .expect(400);
    });
  });

  describe('GET /orders/:orderId/items/history', () => {
    it('should get modification history', () => {
      return request(app.getHttpServer())
        .get(`/orders/${orderId}/items/history`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200)
        .expect((res) => {
          expect(Array.isArray(res.body)).toBe(true);
        });
    });
  });
});
```

---

## 📝 Checklist de Implementação

### Fase 1: Schema e Migrations
- [ ] Adicionar models OrderModification, Payment, enums
- [ ] Atualizar model OrderItem com novos campos
- [ ] Rodar `npx prisma migrate dev`
- [ ] Rodar `npx prisma generate`
- [ ] Validar schema no Prisma Studio

### Fase 2: OrderItems Module
- [ ] Criar DTOs com validação
- [ ] Implementar interfaces
- [ ] Criar OrderModifiableGuard
- [ ] Implementar OrderItemsService (addItem, removeItem, updateQuantity)
- [ ] Criar OrderItemsController
- [ ] Criar OrderItemsModule
- [ ] Adicionar module no AppModule

### Fase 3: Split Payment
- [ ] Criar DTOs de split payment
- [ ] Implementar SplitPaymentService
- [ ] Criar SplitPaymentController
- [ ] Adicionar no PaymentsModule
- [ ] Testar fluxo completo de split payment

### Fase 4: Testes
- [ ] Escrever testes E2E para OrderItems
- [ ] Escrever testes E2E para Split Payment
- [ ] Validar cobertura de testes (mínimo 80%)
- [ ] Rodar `npm run test:e2e`

### Fase 5: Documentação
- [ ] Atualizar README.md com novos endpoints
- [ ] Adicionar exemplos no Insomnia/Postman
- [ ] Documentar fluxo de modificação de pedidos
- [ ] Criar diagramas de sequência

---

## 🚨 Regras de Ouro

### **PROIBIÇÕES ABSOLUTAS**

```typescript
// ❌ NUNCA FAÇA ISSO
function processOrder(data: any) { // any é PROIBIDO
  return data;
}

// ✅ SEMPRE FAÇA ISSO
interface ProcessOrderData {
  orderId: number;
  items: OrderItemDto[];
}

function processOrder(data: ProcessOrderData): OrderResult {
  return { success: true, orderId: data.orderId };
}
```

### **Validações Obrigatórias**

- Sempre usar DTOs com class-validator
- Sempre usar Guards para validar permissões
- Sempre usar transações para operações múltiplas
- Sempre registrar auditoria de modificações
- Sempre calcular totais dentro de transações

### **Error Handling**

```typescript
// ✅ Padrão correto
try {
  await this.prisma.$transaction(async (tx) => {
    // operações
  });
} catch (error) {
  throw new InternalServerErrorException(
    'Mensagem clara',
    error instanceof Error ? error.message : 'Unknown error',
  );
}
```

---

## 📊 Métricas de Sucesso

### Funcionalidades Implementadas
- [ ] Cliente adiciona item após criar pedido → ✅
- [ ] Cliente remove item específico → ✅
- [ ] Cliente altera quantidade → ✅
- [ ] Sistema divide conta entre pessoas → ✅
- [ ] Sistema registra histórico de alterações → ✅
- [ ] Validação de estados impede modificações indevidas → ✅

### Qualidade de Código
- [ ] 0 uso de `any` no código
- [ ] 100% dos endpoints com autenticação
- [ ] 100% dos DTOs com validação
- [ ] 80%+ de cobertura de testes
- [ ] 0 warnings do ESLint

---

## 🎓 Referências Técnicas

### SOLID Principles Aplicados

1. **Single Responsibility**: Cada service tem UMA função clara
2. **Open/Closed**: Guards e DTOs são extensíveis sem modificar base
3. **Liskov Substitution**: Interfaces garantem contratos
4. **Interface Segregation**: DTOs específicos por operação
5. **Dependency Inversion**: Injeção de dependências via NestJS

### Clean Code Practices

- Nomes descritivos (addItem, não add)
- Funções pequenas (< 50 linhas)
- Comentários apenas para regras de negócio complexas
- Separação de concerns (controller → service → repository)

---

## 📞 Suporte

Em caso de dúvidas durante implementação:

1. Revisar código existente em `src/pedidos/strategies/`
2. Consultar documentação NestJS oficial
3. Seguir padrões já estabelecidos no projeto
4. Validar tipos com TypeScript strict mode

---

**Data de criação**: 28/12/2025  
**Versão**: 1.0  
**Status**: Pronto para implementação
