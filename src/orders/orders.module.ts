import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { PrismaModule } from '../prisma.module';
import { OrderStrategyFactory } from './strategies/order-strategy.factory';
import { DeliveryStrategy } from './strategies/delivery.strategy';
import { DineInStrategy } from './strategies/dine-in.strategy';

@Module({
  imports: [PrismaModule],
  controllers: [OrdersController],
  providers: [
    OrdersService,
    OrderStrategyFactory,
    DeliveryStrategy,
    DineInStrategy,
  ],
  exports: [OrdersService],
})
export class OrdersModule {}