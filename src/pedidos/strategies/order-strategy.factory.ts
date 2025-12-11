import { Injectable } from '@nestjs/common';
import { OrderProcessingStrategy } from './order-processing.strategy';
import { DeliveryStrategy } from './delivery.strategy';
import { DineInStrategy } from './dine-in.strategy';

@Injectable()
export class OrderStrategyFactory {
  constructor(
    private deliveryStrategy: DeliveryStrategy,
    private dineInStrategy: DineInStrategy,
  ) {}

  getStrategy(orderType: 'DELIVERY' | 'DINE_IN'): OrderProcessingStrategy {
    switch (orderType) {
      case 'DELIVERY':
        return this.deliveryStrategy;
      case 'DINE_IN':
        return this.dineInStrategy;
      default:
        throw new Error(`Unknown order type: ${orderType}`);
    }
  }
}
