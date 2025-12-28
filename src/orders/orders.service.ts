import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { OrderStrategyFactory } from './strategies/order-strategy.factory';
import { CreateOrderDto } from './dto/create-order.dto';
import { StatusPedido, OrderType } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(
    private prisma: PrismaService,
    private strategyFactory: OrderStrategyFactory,
  ) {}

  async create(createOrderDto: CreateOrderDto, userId?: number) {
    const strategy = this.strategyFactory.getStrategy(createOrderDto.type);
    await strategy.validate(createOrderDto);
    return strategy.process(createOrderDto, userId);
  }

  async findAll(type?: 'DELIVERY' | 'DINE_IN') {
    // ✅ FILTRO IMPLEMENTADO: Se type fornecido, filtra por ele
    const whereClause = type ? { type: type as OrderType } : {};

    return this.prisma.order.findMany({
      where: whereClause,
      include: {
        user: {
          select: {
            id: true,
            nome: true,
            email: true,
            telefone: true,
          },
        },
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                price: true,
                description: true,
              },
            },
          },
        },
        session: {
          include: {
            table: {
              select: {
                id: true,
                number: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            nome: true,
            email: true,
            telefone: true,
          },
        },
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                price: true,
                description: true,
              },
            },
          },
        },
        session: {
          include: {
            table: {
              select: {
                id: true,
                number: true,
              },
            },
          },
        },
      },
    });

    if (!order) {
      throw new Error(`Order with ID ${id} not found`);
    }
    return order;
  }

  private readonly transicoesStatus: Record<StatusPedido, StatusPedido[]> = {
    PENDENTE: [StatusPedido.EM_PREPARO, StatusPedido.CANCELADO],
    EM_PREPARO: [StatusPedido.A_CAMINHO, StatusPedido.CANCELADO],
    A_CAMINHO: [StatusPedido.ENTREGUE],
    ENTREGUE: [],
    CANCELADO: [],
  };

  async updateStatus(id: number, newStatus: StatusPedido) {
    const order = await this.findOne(id);

    if (!this.transicoesStatus[order.status].includes(newStatus)) {
      throw new Error(
        `Invalid status transition from ${order.status} to ${newStatus}`,
      );
    }

    return this.prisma.order.update({
      where: { id },
      data: {
        status: newStatus,
        updatedAt: new Date(),
      },
      include: {
        user: {
          select: {
            id: true,
            nome: true,
            email: true,
            telefone: true,
          },
        },
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                price: true,
                description: true,
              },
            },
          },
        },
      },
    });
  }

  async remove(id: number) {
    return this.prisma.order.delete({
      where: { id },
    });
  }
}