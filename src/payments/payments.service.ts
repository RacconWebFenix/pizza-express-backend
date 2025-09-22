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

  constructEvent(
    payload: Buffer | string,
    signature: string,
    secret: string,
  ): Stripe.Event {
    return this.stripe.webhooks.constructEvent(payload, signature, secret);
  }

  async handleWebhook(event: Stripe.Event) {
    console.log(`Webhook recebido: ${event.type}`, { eventId: event.id });

    try {
      switch (event.type) {
        case 'payment_intent.succeeded':
          await this.handlePaymentIntentSucceeded(event.data.object);
          break;

        case 'payment_intent.payment_failed':
          await this.handlePaymentIntentFailed(event.data.object);
          break;

        case 'payment_intent.canceled':
          await this.handlePaymentIntentCanceled(event.data.object);
          break;

        case 'payment_intent.requires_action':
          this.handlePaymentIntentRequiresAction(event.data.object);
          break;

        default:
          console.log(`Evento não tratado: ${event.type}`);
      }

      return { received: true, eventType: event.type };
    } catch (error) {
      console.error('Erro no processamento do webhook:', error);
      throw error;
    }
  }

  private async handlePaymentIntentSucceeded(
    paymentIntent: Stripe.PaymentIntent,
  ) {
    console.log(`💰 Pagamento confirmado: ${paymentIntent.id}`, {
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
    });

    try {
      const pedido = await this.prismaService.pedido.findFirst({
        where: { paymentIntentId: paymentIntent.id },
      });

      if (pedido) {
        await this.prismaService.pedido.update({
          where: { id: pedido.id },
          data: {
            status: StatusPedido.EM_PREPARO,
          },
        });
        console.log(`✅ Pedido ${pedido.id} atualizado para EM_PREPARO`);
      } else {
        console.error(
          `❌ Pedido não encontrado para PaymentIntent: ${paymentIntent.id}`,
        );
      }
    } catch (error) {
      console.error('Erro ao atualizar pedido:', error);
      throw error;
    }
  }

  private async handlePaymentIntentFailed(paymentIntent: Stripe.PaymentIntent) {
    console.log(`❌ Pagamento falhou: ${paymentIntent.id}`, {
      lastError: paymentIntent.last_payment_error,
    });

    try {
      const pedido = await this.prismaService.pedido.findFirst({
        where: { paymentIntentId: paymentIntent.id },
      });

      if (pedido) {
        await this.prismaService.pedido.update({
          where: { id: pedido.id },
          data: {
            status: StatusPedido.CANCELADO,
          },
        });
        console.log(
          `🚫 Pedido ${pedido.id} cancelado devido a falha no pagamento`,
        );
      }
    } catch (error) {
      console.error('Erro ao cancelar pedido:', error);
      throw error;
    }
  }

  private async handlePaymentIntentCanceled(
    paymentIntent: Stripe.PaymentIntent,
  ) {
    console.log(`🚫 Pagamento cancelado: ${paymentIntent.id}`);

    try {
      const pedido = await this.prismaService.pedido.findFirst({
        where: { paymentIntentId: paymentIntent.id },
      });

      if (pedido) {
        await this.prismaService.pedido.update({
          where: { id: pedido.id },
          data: {
            status: StatusPedido.CANCELADO,
          },
        });
        console.log(`🚫 Pedido ${pedido.id} cancelado`);
      }
    } catch (error) {
      console.error('Erro ao cancelar pedido:', error);
      throw error;
    }
  }

  private handlePaymentIntentRequiresAction(
    paymentIntent: Stripe.PaymentIntent,
  ) {
    console.log(`⚠️ Pagamento requer ação adicional: ${paymentIntent.id}`, {
      nextAction: paymentIntent.next_action,
    });
    // Aqui você pode implementar lógica para 3D Secure ou outras ações
  }
}
