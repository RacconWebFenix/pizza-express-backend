import { Order } from '@prisma/client';

export interface OrderProcessingStrategy {
  validate(dto: CreateOrderDto): Promise<void>;
  process(dto: CreateOrderDto, userId?: number): Promise<Order>;
}

// DTO para criação de pedidos (atualizado)
export interface CreateOrderDto {
  type: 'DELIVERY' | 'DINE_IN';
  items: OrderItemDto[];
  addressId?: number; // Obrigatório para DELIVERY (id numérico do endereço)
  tableId?: string; // Obrigatório para DINE_IN
  observations?: string;
}

export interface OrderItemDto {
  productId: string;
  quantity: number;
}
