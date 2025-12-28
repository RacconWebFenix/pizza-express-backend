import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { SplitPaymentService } from './split-payment.service';
import { SplitPaymentController } from './split-payment.controller';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [ConfigModule, PrismaModule],
  providers: [PaymentsService, SplitPaymentService],
  controllers: [PaymentsController, SplitPaymentController],
  exports: [PaymentsService, SplitPaymentService],
})
export class PaymentsModule {}
