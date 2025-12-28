import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { OrderStrategy } from './order-strategy.interface';
import { CreateOrderDto } from '../dto/create-order.dto';
import { OrderType, StatusPedido } from '@prisma/client';

@Injectable()
export class DeliveryStrategy implements OrderStrategy {
  constructor(private prisma: PrismaService) {}

  async validate(dto: CreateOrderDto): Promise<void> {
    if (dto.type !== OrderType.DELIVERY) {
      throw new BadRequestException('Invalid order type for delivery strategy');
    }

    if (!dto.addressId) {
      throw new BadRequestException('Address is required for delivery orders');
    }

    // Validate address exists and belongs to user
    const address = await this.prisma.endereco.findUnique({
      where: { id: dto.addressId },
    });

    if (!address) {
      throw new BadRequestException('Address not found');
    }

    // Validate all products exist and are active
    for (const item of dto.items) {
      const product = await this.prisma.product.findUnique({
        where: { id: item.productId },
      });

      if (!product || !product.active) {
        throw new BadRequestException(`Product ${item.productId} not found or inactive`);
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
        type: OrderType.DELIVERY,
        status: StatusPedido.PENDENTE,
        total: total,
        addressId: dto.addressId,
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
        address: true,
        user: {
          select: {
            id: true,
            nome: true,
            email: true,
          },
        },
      },
    });

    return order;
  }
}