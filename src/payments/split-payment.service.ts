import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { SplitPaymentDto } from './dto/split-payment.dto';

@Injectable()
export class SplitPaymentService {
  private stripe: Stripe;

  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {
    const secretKey = this.configService.get<string>('STRIPE_SECRET_KEY');

    if (!secretKey) {
      console.warn(
        '[SplitPayment] STRIPE_SECRET_KEY não configurada. Split payment não funcionará.',
      );
      // Não lançar erro para permitir que o app inicie
    } else {
      this.stripe = new Stripe(secretKey, {
        apiVersion: '2025-08-27.basil',
      });
    }
  }

  /**
   * Processa divisão de pagamento de um pedido
   */
  async processSplitPayment(dto: SplitPaymentDto) {
    const { orderId, splits } = dto;

    // 1. Validar Stripe configurado
    if (!this.stripe) {
      throw new BadRequestException(
        'Split payment não disponível: Stripe não configurado',
      );
    }

    // 2. Buscar pedido
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
    });

    if (!order) {
      throw new NotFoundException(`Pedido #${orderId} não encontrado`);
    }

    // 3. Validar soma dos splits
    const totalSplits = splits.reduce((sum, s) => sum + Number(s.amount), 0);
    const orderTotalInCents = Math.round(Number(order.total) * 100);

    if (Math.abs(totalSplits - orderTotalInCents) > 1) {
      // Tolerância de 1 centavo
      throw new BadRequestException(
        `Soma dos splits (R$ ${(totalSplits / 100).toFixed(2)}) não corresponde ao total do pedido (R$ ${order.total})`,
      );
    }

    console.log(
      `[SplitPayment] Criando ${splits.length} splits para pedido #${orderId}`,
    );

    // 4. Criar PaymentIntents no Stripe para cada split
    const paymentIntents = await Promise.all(
      splits.map(async (split, index) => {
        const pi = await this.stripe.paymentIntents.create({
          amount: Math.round(Number(split.amount) * 100), // Centavos
          currency: 'brl',
          metadata: {
            orderId: orderId.toString(),
            userId: split.userId?.toString() || 'anonymous',
            splitIndex: index.toString(),
          },
        });

        console.log(
          `[SplitPayment] PaymentIntent criado: ${pi.id} (R$ ${split.amount})`,
        );

        return {
          userId: split.userId,
          amount: Number(split.amount),
          paymentIntentId: pi.id,
          clientSecret: pi.client_secret,
        };
      }),
    );

    // 5. Salvar registros no banco
    await this.prisma.splitPayment.createMany({
      data: paymentIntents.map((pi) => ({
        orderId,
        userId: pi.userId,
        amount: pi.amount,
        paymentIntentId: pi.paymentIntentId,
        status: 'PENDING',
      })),
    });

    console.log(
      `[SplitPayment] ${paymentIntents.length} splits salvos no banco`,
    );

    return {
      orderId,
      totalAmount: order.total,
      splitsCount: splits.length,
      paymentIntentId: paymentIntents[0]?.paymentIntentId || null, // Retornar primeiro PaymentIntent como referência
      splits: paymentIntents.map((pi) => ({
        userId: pi.userId,
        amount: pi.amount,
        clientSecret: pi.clientSecret, // Frontend usa para confirmar
      })),
      message: 'Split payment criado com sucesso',
    };
  }

  /**
   * Busca todos os splits de um pedido
   */
  async getSplitPaymentsByOrder(orderId: number) {
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
    });

    if (!order) {
      throw new NotFoundException(`Pedido #${orderId} não encontrado`);
    }

    return this.prisma.splitPayment.findMany({
      where: { orderId },
      include: {
        user: {
          select: {
            id: true,
            nome: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
    });
  }

  /**
   * Atualiza status de um split
   */
  async updateSplitPaymentStatus(
    paymentIntentId: string,
    status: 'PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED',
  ) {
    const updated = await this.prisma.splitPayment.updateMany({
      where: { paymentIntentId },
      data: { status },
    });

    if (updated.count === 0) {
      throw new NotFoundException(
        `Split com paymentIntentId ${paymentIntentId} não encontrado`,
      );
    }

    console.log(
      `[SplitPayment] Status atualizado: ${paymentIntentId} → ${status}`,
    );

    return { updated: updated.count };
  }
}
