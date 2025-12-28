import { BadRequestException, Injectable } from '@nestjs/common';
import { OrderProcessingStrategy } from './order-processing.strategy';
import { CreateOrderDto } from '../dto/create-order.dto';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class DineInStrategy implements OrderProcessingStrategy {
  /**
   * Valida requisitos para pedido DINEIN
   */
  async validate(dto: CreateOrderDto, prisma: PrismaService): Promise<void> {
    // 1. Validar que tem tableId
    if (!dto.tableId) {
      throw new BadRequestException('Pedido tipo DINEIN requer tableId');
    }

    // 2. Verificar se mesa existe
    const table = await prisma.table.findUnique({
      where: { id: dto.tableId },
    });

    if (!table) {
      throw new BadRequestException(`Mesa #${dto.tableId} não encontrada`);
    }

    // 3. Validar status da mesa
    if (table.status === 'RESERVED') {
      throw new BadRequestException(
        `Mesa #${table.number} está reservada. Aguarde liberação.`,
      );
    }

    // Mesa AVAILABLE ou OCCUPIED pode receber pedidos
    console.log(
      `[DineInStrategy] Validação OK - Mesa #${table.number} (${table.status})`,
    );
  }

  /**
   * Processa pedido DINEIN (atualiza sessão)
   */
  async process(order: any, prisma: PrismaService): Promise<void> {
    console.log(`[DineInStrategy] Processando pedido #${order.id}`);

    // 1. Atualizar total da sessão
    if (order.sessionId) {
      const session = await prisma.tableSession.findUnique({
        where: { id: order.sessionId },
        include: { table: true },
      });

      if (session) {
        const newTotal = Number(session.total) + Number(order.total);

        await prisma.tableSession.update({
          where: { id: order.sessionId },
          data: { total: newTotal },
        });

        console.log(
          `[DineInStrategy] Sessão #${order.sessionId} (Mesa #${session.table.number}) atualizada: R$ ${newTotal.toFixed(2)}`,
        );
      }
    }

    // 2. TODO: Notificar cozinha via WebSocket (implementar na Fase 3)
  }
}
