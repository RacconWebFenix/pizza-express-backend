import { Decimal } from '@prisma/client/runtime/library';

export interface ItemOperationResult {
  itemId: string;
  orderId: number;
  action: string;
  previousTotal: Decimal;
  newTotal: Decimal;
  timestamp: Date;
}

export interface OrderModificationContext {
  userId?: number;
  reason?: string;
  itemSnapshot: Record<string, unknown>;
}