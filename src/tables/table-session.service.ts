import { Injectable, ConflictException, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { TableStatus } from '@prisma/client';

@Injectable()
export class TableSessionService {
  constructor(private prisma: PrismaService) {}

  async openSession(tableId: string) {
    // Verificar se a mesa existe
    const table = await this.prisma.table.findUnique({
      where: { id: tableId },
    });

    if (!table) {
      throw new NotFoundException(`Table with ID ${tableId} not found`);
    }

    // Verificar se a mesa já está ocupada
    if (table.status !== TableStatus.AVAILABLE) {
      throw new ConflictException('Table is not available');
    }

    // Verificar se já existe uma sessão ativa para esta mesa
    const activeSession = await this.prisma.tableSession.findFirst({
      where: {
        tableId,
        closedAt: null,
      },
    });

    if (activeSession) {
      throw new ConflictException('Table already has an active session');
    }

    // Criar nova sessão e atualizar status da mesa
    const result = await this.prisma.$transaction(async (tx) => {
      // Criar sessão
      const session = await tx.tableSession.create({
        data: {
          tableId,
        },
      });

      // Atualizar status da mesa
      await tx.table.update({
        where: { id: tableId },
        data: { status: TableStatus.OCCUPIED },
      });

      return session;
    });

    return result;
  }

  async getBill(tableId: string) {
    // Verificar se a mesa existe
    const table = await this.prisma.table.findUnique({
      where: { id: tableId },
    });

    if (!table) {
      throw new NotFoundException(`Table with ID ${tableId} not found`);
    }

    // Buscar sessão ativa
    const activeSession = await this.prisma.tableSession.findFirst({
      where: {
        tableId,
        closedAt: null,
      },
      include: {
        orders: {
          include: {
            items: {
              include: {
                product: true,
              },
            },
          },
        },
      },
    });

    if (!activeSession) {
      throw new BadRequestException('No active session for this table');
    }

    // Calcular total
    let total = 0;
    const orderDetails = [];

    for (const order of activeSession.orders) {
      let orderTotal = 0;
      const items = [];

      for (const item of order.items) {
        const itemTotal = Number(item.price) * item.quantity;
        orderTotal += itemTotal;

        items.push({
          productName: item.product.name,
          quantity: item.quantity,
          unitPrice: Number(item.price),
          total: itemTotal,
        });
      }

      total += orderTotal;
      orderDetails.push({
        orderId: order.id,
        items,
        orderTotal,
      });
    }

    return {
      tableId,
      tableNumber: table.number,
      sessionId: activeSession.id,
      openedAt: activeSession.openedAt,
      orders: orderDetails,
      total: Number(total.toFixed(2)),
    };
  }

  async closeSession(tableId: string) {
    // Verificar se a mesa existe
    const table = await this.prisma.table.findUnique({
      where: { id: tableId },
    });

    if (!table) {
      throw new NotFoundException(`Table with ID ${tableId} not found`);
    }

    // Buscar sessão ativa
    const activeSession = await this.prisma.tableSession.findFirst({
      where: {
        tableId,
        closedAt: null,
      },
    });

    if (!activeSession) {
      throw new BadRequestException('No active session for this table');
    }

    // Calcular total dos pedidos
    const bill = await this.getBill(tableId);
    const total = bill.total;

    // Fechar sessão e liberar mesa
    const result = await this.prisma.$transaction(async (tx) => {
      // Atualizar sessão com total e data de fechamento
      const closedSession = await tx.tableSession.update({
        where: { id: activeSession.id },
        data: {
          closedAt: new Date(),
          total,
        },
      });

      // Liberar mesa
      await tx.table.update({
        where: { id: tableId },
        data: { status: TableStatus.AVAILABLE },
      });

      return closedSession;
    });

    return {
      ...result,
      total: Number(result.total.toFixed(2)),
      bill,
    };
  }

  async getActiveSession(tableId: string) {
    const session = await this.prisma.tableSession.findFirst({
      where: {
        tableId,
        closedAt: null,
      },
      include: {
        orders: {
          include: {
            items: {
              include: {
                product: true,
              },
            },
          },
        },
      },
    });

    return session;
  }
}