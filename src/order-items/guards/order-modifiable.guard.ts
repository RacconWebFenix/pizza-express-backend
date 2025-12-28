import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { StatusPedido } from '@prisma/client';

@Injectable()
export class OrderModifiableGuard implements CanActivate {
  constructor(private readonly prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const orderId = parseInt(request.params.orderId, 10);

    if (isNaN(orderId)) {
      throw new ForbiddenException('Invalid order ID');
    }

    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
      select: {
        id: true,
        status: true,
        canModify: true,
        lockedAt: true,
      },
    });

    if (!order) {
      throw new ForbiddenException('Order not found');
    }

    // Regras de modificação
    const nonModifiableStatuses: StatusPedido[] = ['ENTREGUE', 'CANCELADO'];

    if (nonModifiableStatuses.includes(order.status)) {
      throw new ForbiddenException(
        `Cannot modify order with status ${order.status}`,
      );
    }

    if (!order.canModify) {
      throw new ForbiddenException('Order is locked for modifications');
    }

    return true;
  }
}
