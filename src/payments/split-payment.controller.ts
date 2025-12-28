import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { SplitPaymentService } from './split-payment.service';
import { SplitPaymentDto } from './dto/split-payment.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('payments/split')
@UseGuards(JwtAuthGuard)
export class SplitPaymentController {
  constructor(private readonly splitPaymentService: SplitPaymentService) {}

  /**
   * POST /payments/split
   * Cria divisão de pagamento
   */
  @Post()
  async processSplitPayment(@Body() dto: SplitPaymentDto) {
    return this.splitPaymentService.processSplitPayment(dto);
  }

  /**
   * GET /payments/split/order/:orderId
   * Lista splits de um pedido
   */
  @Get('order/:orderId')
  async getSplitsByOrder(@Param('orderId', ParseIntPipe) orderId: number) {
    return this.splitPaymentService.getSplitPaymentsByOrder(orderId);
  }
}
