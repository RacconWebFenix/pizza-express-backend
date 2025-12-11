import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { OrderProcessingStrategy, CreateOrderDto } from './order-processing.strategy';
import { StatusPedido, OrderType, TableStatus } from '@prisma/client';

@Injectable()
export class DineInStrategy implements OrderProcessingStrategy {
  constructor(private prisma: PrismaService) {}

  async validate(dto: CreateOrderDto): Promise<void> {
    // Validar tipo
    if (dto.type !== 'DINE_IN') {
      throw new BadRequestException('Invalid order type for dine-in strategy');
    }

    // Validar tableId obrigatório
    if (!dto.tableId) {
      throw new BadRequestException('Table ID is required for dine-in orders');
    }

    // Validar se a mesa existe
    const table = await this.prisma.table.findUnique({
      where: { id: dto.tableId },
    });

    if (!table) {
      throw new NotFoundException('Table not found');
    }

    // Validar se a mesa está ocupada (tem sessão ativa)
    if (table.status !== TableStatus.OCCUPIED) {
      throw new BadRequestException('Table is not occupied. Please open a session first.');
    }

    // Verificar se existe sessão ativa para esta mesa
    const activeSession = await this.prisma.tableSession.findFirst({
      where: {
        tableId: dto.tableId,
        closedAt: null,
      },
    });

    if (!activeSession) {
      throw new BadRequestException('No active session for this table');
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
        throw new NotFoundException(`Product ${item.productId} not found or inactive`);
      }

      if (item.quantity <= 0) {
        throw new BadRequestException('Item quantity must be greater than 0');
      }
    }
  }

  async process(dto: CreateOrderDto, userId?: number): Promise<any> {
    // Buscar sessão ativa da mesa
    const activeSession = await this.prisma.tableSession.findFirst({
      where: {
        tableId: dto.tableId,
        closedAt: null,
      },
    });

    if (!activeSession) {
      throw new BadRequestException('No active session for this table');
    }

    // Calcular total
    let total = 0;
    const orderItems = [];

    for (const item of dto.items) {
      const product = await this.prisma.product.findUnique({
        where: { id: item.productId },
      });

      if (!product || !product.active) {
        throw new NotFoundException(`Product ${item.productId} not found or inactive`);
      }

      const itemTotal = Number(product.price) * item.quantity;
      total += itemTotal;

      orderItems.push({
        productId: item.productId,
        quantity: item.quantity,
        price: product.price,
      });
    }

    // Criar pedido vinculado à sessão da mesa
    const order = await this.prisma.order.create({
      data: {
        type: OrderType.DINE_IN,
        status: StatusPedido.PENDENTE,
        total: total,
        sessionId: activeSession.id,
        // userId pode ser null para clientes anônimos de mesa
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
        session: {
          include: {
            table: true,
          },
        },
      },
    });

    return {
      ...order,
      total: Number(order.total.toFixed(2)),
    };
  }
}