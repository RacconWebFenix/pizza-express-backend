import { Injectable } from '@nestjs/common';
import { OrderStrategy } from './order-strategy.interface';
import { DeliveryStrategy } from './delivery.strategy';
import { DineInStrategy } from './dine-in.strategy';
import { OrderType } from '@prisma/client';

@Injectable()
export class OrderStrategyFactory {
  constructor(
    private deliveryStrategy: DeliveryStrategy,
    private dineInStrategy: DineInStrategy,
  ) {}

  getStrategy(type: OrderType): OrderStrategy {
    switch (type) {
      case OrderType.DELIVERY:
        return this.deliveryStrategy;
      case OrderType.DINE_IN:
        return this.dineInStrategy;
      default:
        throw new Error(`Unsupported order type: ${type}`);
    }
  }
}
