import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { OrderStrategyFactory } from './strategies/order-strategy.factory';
import { CreateOrderDto } from './dto/create-order.dto';
import { StatusPedido } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(
    private prisma: PrismaService,
    private strategyFactory: OrderStrategyFactory,
  ) {}

  // Mapeia as transições de status permitidas
  private readonly transicoesStatus: Record<StatusPedido, StatusPedido[]> = {
    PENDENTE: [StatusPedido.EM_PREPARO, StatusPedido.CANCELADO],
    EM_PREPARO: [StatusPedido.A_CAMINHO, StatusPedido.CANCELADO],
    A_CAMINHO: [StatusPedido.ENTREGUE],
    ENTREGUE: [],
    CANCELADO: [],
  };

  async create(createOrderDto: CreateOrderDto, userId?: number) {
    // Obter estratégia baseada no tipo de pedido
    const strategy = this.strategyFactory.getStrategy(createOrderDto.type);

    // Validar pedido
    await strategy.validate(createOrderDto);

    // Processar pedido
    return strategy.process(createOrderDto, userId);
  }

  async findAll() {
    return this.prisma.order.findMany({
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
      orderBy: { createdAt: 'desc' },
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

  async updateStatus(id: number, newStatus: StatusPedido) {
    const order = await this.findOne(id);

    // Validar transição de status
    if (!this.transicoesStatus[order.status].includes(newStatus)) {
      throw new Error(
        `Invalid status transition from ${order.status} to ${newStatus}`,
      );
    }

    return this.prisma.order.update({
      where: { id },
      data: { status: newStatus, updatedAt: new Date() },
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
