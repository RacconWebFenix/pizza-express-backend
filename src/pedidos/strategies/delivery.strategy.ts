import { BadRequestException, Injectable } from '@nestjs/common';
import { OrderProcessingStrategy } from './order-processing.strategy';
import { CreateOrderDto } from '../dto/create-order.dto';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class DeliveryStrategy implements OrderProcessingStrategy {
  /**
   * Valida requisitos para pedido DELIVERY
   */
  async validate(dto: CreateOrderDto, prisma: PrismaService): Promise<void> {
    // 1. Validar que tem endereço
    if (!dto.addressId) {
      throw new BadRequestException('Pedido tipo DELIVERY requer addressId');
    }

    // 2. Verificar se endereço existe
    const address = await prisma.endereco.findUnique({
      where: { id: dto.addressId },
    });

    if (!address) {
      throw new BadRequestException(
        `Endereço #${dto.addressId} não encontrado`,
      );
    }

    console.log(
      `[DeliveryStrategy] Validação OK - Endereço: ${address.logradouro}`,
    );
  }

  /**
   * Processa pedido DELIVERY (atribui entregador)
   */
  async process(order: any, prisma: PrismaService): Promise<void> {
    console.log(`[DeliveryStrategy] Processando pedido #${order.id}`);

    // 1. Buscar entregador disponível
    const entregador = await this.findAvailableEntregador(prisma);

    // 2. Atribuir entregador ao pedido (se encontrou)
    if (entregador) {
      await prisma.order.update({
        where: { id: order.id },
        data: { entregadorId: entregador.id },
      });

      console.log(
        `[DeliveryStrategy] Pedido #${order.id} atribuído ao entregador #${entregador.id} (${entregador.nome})`,
      );
    } else {
      console.warn(
        `[DeliveryStrategy] Nenhum entregador disponível para pedido #${order.id}`,
      );
    }

    // 3. TODO: Notificar entregador via WebSocket (implementar na Fase 3)
  }

  /**
   * Busca entregador disponível (lógica simples)
   */
  private async findAvailableEntregador(prisma: PrismaService) {
    const entregadores = await prisma.entregador.findMany({
      take: 1, // Por enquanto, pega o primeiro
    });

    if (entregadores.length === 0) {
      return null;
    }

    // TODO: Implementar lógica mais sofisticada:
    // - Entregador com menos pedidos ativos
    // - Entregador mais próximo do endereço
    // - Prioridade por performance
    return entregadores[0];
  }
}
