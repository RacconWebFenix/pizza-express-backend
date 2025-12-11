import { Module } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { OrdersService } from './orders.service';
import { PedidosController } from './pedidos.controller';
import { OrdersController } from './orders.controller';
import { PrismaModule } from '../prisma.module';
import { OrderStrategyFactory } from './strategies/order-strategy.factory';
import { DeliveryStrategy } from './strategies/delivery.strategy';
import { DineInStrategy } from './strategies/dine-in.strategy';

@Module({
  imports: [PrismaModule],
  controllers: [PedidosController, OrdersController],
  providers: [
    PedidosService, // Manter para compatibilidade
    OrdersService, // Novo serviço com Strategy Pattern
    OrderStrategyFactory,
    DeliveryStrategy,
    DineInStrategy,
  ],
  exports: [OrdersService],
})
export class PedidosModule {}
