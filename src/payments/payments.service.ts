import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { PrismaService } from '../prisma.service';
import { StatusPedido } from '@prisma/client';
import { CustomLoggerService } from '../common/logger/logger.service';

@Injectable()
export class PaymentsService {
  private stripe: Stripe;

  constructor(
    private configService: ConfigService,
    private prismaService: PrismaService,
    private logger: CustomLoggerService,
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
    this.logger.log(`Webhook received: ${event.type}`, 'PaymentsService');

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
          this.logger.warn(`Unhandled event: ${event.type}`, 'PaymentsService');
      }

      return { received: true, eventType: event.type };
    } catch (error) {
      this.logger.error(
        'Webhook processing error',
        String(error),
        'PaymentsService',
      );
      throw error;
    }
  }

  private async handlePaymentIntentSucceeded(
    paymentIntent: Stripe.PaymentIntent,
  ) {
    this.logger.logPayment('Payment confirmed', {
      id: paymentIntent.id,
      amount: paymentIntent.amount,
      status: 'succeeded',
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
        this.logger.logOrder('Order updated to EM_PREPARO', {
          id: pedido.id,
          status: 'EM_PREPARO',
        });
      } else {
        this.logger.error(
          `Order not found for PaymentIntent: ${paymentIntent.id}`,
          undefined,
          'PaymentsService',
        );
      }
    } catch (error) {
      this.logger.error(
        'Error updating order',
        String(error),
        'PaymentsService',
      );
      throw error;
    }
  }

  private async handlePaymentIntentFailed(paymentIntent: Stripe.PaymentIntent) {
    this.logger.logPayment('Payment failed', {
      id: paymentIntent.id,
      status: 'failed',
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
        this.logger.logOrder('Order cancelled due to payment failure', {
          id: pedido.id,
          status: 'CANCELADO',
        });
      }
    } catch (error) {
      this.logger.error(
        'Error cancelling order',
        String(error),
        'PaymentsService',
      );
      throw error;
    }
  }

  private async handlePaymentIntentCanceled(
    paymentIntent: Stripe.PaymentIntent,
  ) {
    this.logger.logPayment('Payment cancelled', {
      id: paymentIntent.id,
      status: 'cancelled',
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
        this.logger.logOrder('Order cancelled', {
          id: pedido.id,
          status: 'CANCELADO',
        });
      }
    } catch (error) {
      this.logger.error(
        'Error cancelling order',
        String(error),
        'PaymentsService',
      );
      throw error;
    }
  }

  private handlePaymentIntentRequiresAction(
    paymentIntent: Stripe.PaymentIntent,
  ) {
    this.logger.logPayment('Payment requires additional action', {
      id: paymentIntent.id,
      status: 'requires_action',
    });
    // Aqui você pode implementar lógica para 3D Secure ou outras ações
  }
}
