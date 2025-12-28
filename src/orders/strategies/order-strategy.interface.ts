import { CreateOrderDto } from '../dto/create-order.dto';

export interface OrderStrategy {
  validate(dto: CreateOrderDto): Promise<void>;
  process(dto: CreateOrderDto, userId?: number): Promise<any>;
}