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
      throw new NotFoundException(
        `Item ${itemId} not found in order ${orderId}`,
      );
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
      throw new NotFoundException(
        `Item ${itemId} not found in order ${orderId}`,
      );
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

    const action: ModificationAction =
      quantityDiff > 0 ? 'ITEM_QUANTITY_INCREASED' : 'ITEM_QUANTITY_DECREASED';

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
