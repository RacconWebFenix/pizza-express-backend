import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import {
  OrderProcessingStrategy,
  CreateOrderDto,
} from './order-processing.strategy';
import { StatusPedido, OrderType } from '@prisma/client';

@Injectable()
export class DeliveryStrategy implements OrderProcessingStrategy {
  constructor(private prisma: PrismaService) {}

  async validate(dto: CreateOrderDto): Promise<void> {
    // Validar tipo
    if (dto.type !== 'DELIVERY') {
      throw new BadRequestException('Invalid order type for delivery strategy');
    }

    // Validar addressId obrigatório
    if (!dto.addressId) {
      throw new BadRequestException('Address is required for delivery orders');
    }

    // Validar se o endereço existe
    const address = await this.prisma.endereco.findUnique({
      where: { id: dto.addressId },
    });

    if (!address) {
      throw new NotFoundException('Address not found');
    }

    // Validar itens
    if (!dto.items || dto.items.length === 0) {
      throw new BadRequestException('Order must have at least one item');
    }

    // Validar produtos
    for (const item of dto.items) {
      const product = await this.prisma.product.findUnique({
        where: { id: item.productId },
      });

      if (!product || !product.active) {
        throw new NotFoundException(
          `Product ${item.productId} not found or inactive`,
        );
      }

      if (item.quantity <= 0) {
        throw new BadRequestException('Item quantity must be greater than 0');
      }
    }

    // Validar horário de funcionamento (simplificado)
    const now = new Date();
    const hour = now.getHours();
    if (hour < 18 || hour > 22) {
      // 18:00 - 22:00
      throw new BadRequestException(
        'Delivery is only available from 18:00 to 22:00',
      );
    }
  }

  async process(dto: CreateOrderDto, userId?: number): Promise<any> {
    // Calcular total
    let total = 0;
    const orderItems = [];

    for (const item of dto.items) {
      const product = await this.prisma.product.findUnique({
        where: { id: item.productId },
      });

      if (!product || !product.active) {
        throw new NotFoundException(
          `Product ${item.productId} not found or inactive`,
        );
      }

      const itemTotal = Number(product.price) * item.quantity;
      total += itemTotal;

      orderItems.push({
        productId: item.productId,
        quantity: item.quantity,
        price: product.price,
      });
    }

    // Adicionar taxa de entrega (R$ 5.00)
    const deliveryFee = 5.0;
    total += deliveryFee;

    // Criar pedido
    const order = await this.prisma.order.create({
      data: {
        type: OrderType.DELIVERY,
        status: StatusPedido.PENDENTE,
        total: total,
        addressId: dto.addressId,
        userId: userId,
        observacoes: dto.observations,
        items: {
          create: orderItems,
        },
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
        address: true,
        user: true,
      },
    });

    return {
      ...order,
      total: Number(order.total.toFixed(2)),
      deliveryFee,
    };
  }
}
