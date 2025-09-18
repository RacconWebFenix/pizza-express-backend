import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';
import Stripe from 'stripe';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create-intent')
  @UseGuards(JwtAuthGuard)
  async createPaymentIntent(@Body() dto: CreatePaymentDto) {
    return this.paymentsService.createPaymentIntent(dto.amount);
  }

  @Post('webhook')
  handleWebhook(@Req() req: Request) {
    const event = this.paymentsService.handleWebhook(req.body as Stripe.Event);
    return { received: true };
  }
}
