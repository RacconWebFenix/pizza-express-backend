import { Module } from '@nestjs/common';
import { OrderItemsController } from './order-items.controller';
import { OrderItemsService } from './order-items.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [OrderItemsController],
  providers: [OrderItemsService, PrismaService],
  exports: [OrderItemsService],
})
export class OrderItemsModule {}