import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdatePedidoStatusDto } from './dto/update-pedido-status.dto';
import { OrderStrategyFactory } from './strategies/order-strategy.factory';
import { KitchenGateway } from '../kitchen/kitchen.gateway';
import { StatusPedido } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly strategyFactory: OrderStrategyFactory,
    private readonly kitchenGateway: KitchenGateway,
  ) {}

  /**
   * Cria um novo pedido (DELIVERY ou DINEIN)
   */
  async create(createOrderDto: CreateOrderDto, userId?: number) {
    // 1. Obter estratégia baseada no tipo de pedido
    const strategy = this.strategyFactory.getStrategy(createOrderDto.type);

    // 2. Validar requisitos específicos do tipo
    await strategy.validate(createOrderDto, this.prisma);

    // 3. Buscar produtos e validar disponibilidade
    const itemsData = await Promise.all(
      createOrderDto.items.map(async (item) => {
        const product = await this.prisma.product.findUnique({
          where: { id: item.productId },
        });

        if (!product) {
          throw new NotFoundException(
            `Produto ${item.productId} não encontrado`,
          );
        }

        if (!product.active) {
          throw new BadRequestException(
            `Produto "${product.name}" não está disponível`,
          );
        }

        return {
          productId: product.id,
          quantity: item.quantity,
          price: product.price,
        };
      }),
    );

    // 4. Calcular total do pedido
    const total = itemsData.reduce((sum, item) => {
      return sum + Number(item.price) * item.quantity;
    }, 0);

    // 5. Obter ou criar sessão de mesa (se DINEIN)
    let sessionId: string | null = null;
    if (createOrderDto.type === 'DINE_IN' && createOrderDto.tableId) {
      sessionId = await this.getOrCreateSession(createOrderDto.tableId);
    }

    // 6. Criar Order no banco de dados
    const order = await this.prisma.order.create({
      data: {
        type: createOrderDto.type,
        status: StatusPedido.PENDENTE,
        total,
        userId: userId ?? null,
        addressId: createOrderDto.addressId ?? null,
        sessionId,
        observacoes: createOrderDto.observations,
        items: {
          create: itemsData,
        },
      },
      include: {
        items: {
          include: {
            product: {
              include: {
                category: true,
              },
            },
          },
        },
        user: {
          select: {
            id: true,
            nome: true,
            email: true,
            telefone: true,
          },
        },
        address: true,
        session: {
          include: {
            table: true,
          },
        },
      },
    });

    // 7. Executar lógica específica do tipo (atribuir entregador, notificar cozinha, etc)
    await strategy.process(order, this.prisma);

    this.kitchenGateway.notifyNewOrder(order);

    return order;
  }

  /**
   * Busca todos os pedidos com filtros opcionais
   */
  async findAll(filters?: { type?: string; status?: string; userId?: number }) {
    return this.prisma.order.findMany({
      where: {
        type: filters?.type as any,
        status: filters?.status as StatusPedido,
        userId: filters?.userId,
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
        user: {
          select: {
            id: true,
            nome: true,
            email: true,
          },
        },
        address: true,
        session: {
          include: {
            table: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  /**
   * Busca um pedido específico
   */
  async findOne(id: number) {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: {
        items: {
          include: {
            product: {
              include: {
                category: true,
              },
            },
          },
        },
        user: {
          select: {
            id: true,
            nome: true,
            email: true,
            telefone: true,
          },
        },
        address: true,
        session: {
          include: {
            table: true,
          },
        },
      },
    });

    if (!order) {
      throw new NotFoundException(`Pedido #${id} não encontrado`);
    }

    return order;
  }

  /**
   * Atualiza o status de um pedido
   */
  async updateStatus(id: number, dto: UpdatePedidoStatusDto) {
    const order = await this.findOne(id);

    // Validar transição de status
    this.validateStatusTransition(order.status, dto.status);

    const updated = await this.prisma.order.update({
      where: { id },
      data: { status: dto.status },
      include: {
        items: {
          include: {
            product: true,
          },
        },
        user: true,
        address: true,
        session: {
          include: {
            table: true,
          },
        },
      },
    });

    // Se pedido foi entregue/finalizado, fechar sessão de mesa
    if (dto.status === StatusPedido.ENTREGUE && updated.sessionId) {
      await this.closeSession(updated.sessionId);
    }

    this.kitchenGateway.notifyOrderStatusChange(id, dto.status);

    return updated;
  }

  /**
   * Remove um pedido (apenas se PENDENTE)
   */
  async remove(id: number) {
    const order = await this.findOne(id);

    if (order.status !== StatusPedido.PENDENTE) {
      throw new BadRequestException(
        'Apenas pedidos com status PENDENTE podem ser removidos',
      );
    }

    return this.prisma.order.delete({
      where: { id },
    });
  }

  // ==================== MÉTODOS AUXILIARES ====================

  /**
   * Obtém sessão ativa ou cria uma nova para a mesa
   */
  private async getOrCreateSession(tableId: string): Promise<string> {
    // Buscar sessão ativa para a mesa
    const activeSession = await this.prisma.tableSession.findFirst({
      where: {
        tableId,
        closedAt: null,
      },
    });

    if (activeSession) {
      return activeSession.id;
    }

    // Criar nova sessão
    const newSession = await this.prisma.tableSession.create({
      data: {
        tableId,
        total: 0,
      },
    });

    // Atualizar status da mesa para OCCUPIED
    await this.prisma.table.update({
      where: { id: tableId },
      data: { status: 'OCCUPIED' },
    });

    return newSession.id;
  }

  /**
   * Fecha sessão de mesa e libera a mesa
   */
  private async closeSession(sessionId: string): Promise<void> {
    const session = await this.prisma.tableSession.findUnique({
      where: { id: sessionId },
      include: { table: true },
    });

    if (!session) return;

    // Fechar sessão
    await this.prisma.tableSession.update({
      where: { id: sessionId },
      data: { closedAt: new Date() },
    });

    // Liberar mesa
    await this.prisma.table.update({
      where: { id: session.tableId },
      data: { status: 'AVAILABLE' },
    });
  }

  /**
   * Valida se a transição de status é permitida
   */
  private validateStatusTransition(
    currentStatus: string,
    newStatus: string,
  ): void {
    const validTransitions: Record<string, string[]> = {
      PENDENTE: ['EM_PREPARO', 'CANCELADO'],
      EM_PREPARO: ['A_CAMINHO', 'CANCELADO'],
      A_CAMINHO: ['ENTREGUE'],
      ENTREGUE: [],
      CANCELADO: [],
    };

    const allowed = validTransitions[currentStatus] || [];

    if (!allowed.includes(newStatus)) {
      throw new BadRequestException(
        `Transição de status inválida: ${currentStatus} → ${newStatus}`,
      );
    }
  }
}
