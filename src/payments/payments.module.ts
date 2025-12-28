import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { SplitPaymentService } from './split-payment.service';
import { SplitPaymentController } from './split-payment.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [PaymentsService, SplitPaymentService],
  controllers: [PaymentsController, SplitPaymentController],
})
export class PaymentsModule {}
