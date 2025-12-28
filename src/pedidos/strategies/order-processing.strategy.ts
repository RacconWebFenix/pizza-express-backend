import { Order } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

export interface OrderProcessingStrategy {
  validate(dto: CreateOrderDto, prisma: PrismaService): Promise<void>;
  process(order: any, prisma: PrismaService): Promise<void>;
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
