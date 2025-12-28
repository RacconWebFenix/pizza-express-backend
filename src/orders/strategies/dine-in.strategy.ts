import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { OrderStrategy } from './order-strategy.interface';
import { CreateOrderDto } from '../dto/create-order.dto';
import { OrderType, StatusPedido } from '@prisma/client';

@Injectable()
export class DineInStrategy implements OrderStrategy {
  constructor(private prisma: PrismaService) {}

  async validate(dto: CreateOrderDto): Promise<void> {
    if (dto.type !== OrderType.DINE_IN) {
      throw new BadRequestException('Invalid order type for dine-in strategy');
    }

    if (!dto.sessionId) {
      throw new BadRequestException(
        'Session ID is required for dine-in orders',
      );
    }

    // Validate session exists and is active
    const session = await this.prisma.tableSession.findUnique({
      where: { id: dto.sessionId },
    });

    if (!session || session.closedAt) {
      throw new BadRequestException('Invalid or closed table session');
    }

    // Validate all products exist and are active
    for (const item of dto.items) {
      const product = await this.prisma.product.findUnique({
        where: { id: item.productId },
      });

      if (!product || !product.active) {
        throw new BadRequestException(
          `Product ${item.productId} not found or inactive`,
        );
      }
    }
  }

  async process(dto: CreateOrderDto, userId?: number): Promise<any> {
    // Calculate total
    let total = 0;
    const itemsWithPrices = [];

    for (const item of dto.items) {
      const product = await this.prisma.product.findUnique({
        where: { id: item.productId },
      });

      if (!product) {
        throw new BadRequestException(`Product ${item.productId} not found`);
      }

      const itemTotal = Number(product.price) * item.quantity;
      total += itemTotal;

      itemsWithPrices.push({
        productId: item.productId,
        quantity: item.quantity,
        price: product.price,
        notes: item.notes,
      });
    }

    // Create order
    const order = await this.prisma.order.create({
      data: {
        type: OrderType.DINE_IN,
        status: StatusPedido.PENDENTE,
        total: total,
        sessionId: dto.sessionId,
        userId: userId,
        observacoes: dto.observacoes,
        items: {
          create: itemsWithPrices,
        },
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
        session: {
          include: {
            table: true,
          },
        },
        user: {
          select: {
            id: true,
            nome: true,
            email: true,
          },
        },
      },
    });

    // Update session total
    await this.prisma.tableSession.update({
      where: { id: dto.sessionId },
      data: {
        total: {
          increment: total,
        },
      },
    });

    return order;
  }
}
