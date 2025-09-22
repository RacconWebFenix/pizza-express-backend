import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request } from 'express';
import Stripe from 'stripe';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { ConfigService } from '@nestjs/config';

@Controller('payments')
export class PaymentsController {
  constructor(
    private readonly paymentsService: PaymentsService,
    private readonly configService: ConfigService,
  ) {}

  @Post('create-intent')
  @UseGuards(JwtAuthGuard)
  async createPaymentIntent(@Body() dto: CreatePaymentDto) {
    return this.paymentsService.createPaymentIntent(dto.amount);
  }

  @Post('webhook')
  async handleWebhook(@Req() req: Request) {
    const sig = req.headers['stripe-signature'] as string;
    const endpointSecret = this.configService.get<string>(
      'STRIPE_WEBHOOK_SECRET',
    );

    if (!endpointSecret) {
      throw new HttpException(
        'Stripe webhook secret not configured',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    let event: Stripe.Event;

    try {
      event = this.paymentsService.constructEvent(
        req.body as Buffer,
        sig,
        endpointSecret,
      );
    } catch (err: any) {
      console.error(
        'Webhook signature verification failed:',
        (err as Error)?.message || 'Unknown error',
      );
      throw new HttpException(
        'Webhook signature verification failed',
        HttpStatus.BAD_REQUEST,
      );
    }

    const result = await this.paymentsService.handleWebhook(event);
    return result;
  }
}
