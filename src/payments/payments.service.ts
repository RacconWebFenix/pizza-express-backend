import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { PrismaService } from '../prisma.service';
import { StatusPedido } from '@prisma/client';

@Injectable()
export class PaymentsService {
  private stripe: Stripe;

  constructor(
    private configService: ConfigService,
    private prismaService: PrismaService,
  ) {
    const secretKey = this.configService.get<string>('STRIPE_SECRET_KEY');
    if (!secretKey) {
      throw new Error('STRIPE_SECRET_KEY is not defined');
    }
    this.stripe = new Stripe(secretKey);
  }

  async createPaymentIntent(amount: number, currency: string = 'brl') {
    const paymentIntent = await this.stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency,
      automatic_payment_methods: { enabled: true },
    });
    return { client_secret: paymentIntent.client_secret };
  }

  async handleWebhook(event: Stripe.Event) {
    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object;
      console.log(`Pagamento confirmado: ${paymentIntent.id}`);

      try {
        // Buscar pedido pelo paymentIntentId e atualizar status
        const pedido = await this.prismaService.pedido.findFirst({
          where: { paymentIntentId: paymentIntent.id },
        });

        if (pedido) {
          await this.prismaService.pedido.update({
            where: { id: pedido.id },
            data: {
              status: StatusPedido.EM_PREPARO,
              paymentIntentId: paymentIntent.id,
            },
          });
          console.log(`Pedido ${pedido.id} atualizado para status EM_PREPARO`);
        } else {
          console.log(
            `Pedido não encontrado para paymentIntentId: ${paymentIntent.id}`,
          );
        }
      } catch (error) {
        console.error('Erro ao atualizar pedido:', error);
      }

      return event;
    }
    return event;
  }
}
