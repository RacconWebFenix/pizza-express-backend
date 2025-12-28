import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  namespace: '/kitchen',
  cors: {
    origin: '*',
  },
})
export class KitchenGateway {
  @WebSocketServer()
  server: Server;

  /**
   * Notifica cozinha sobre novo pedido
   */
  notifyNewOrder(order: any) {
    const notification = {
      orderId: order.id,
      type: order.type,
      items: order.items.map((item: any) => ({
        productName: item.product.name,
        quantity: item.quantity,
        price: item.price,
      })),
      table: order.session?.table
        ? {
            id: order.session.table.id,
            number: order.session.table.number,
          }
        : null,
      total: order.total,
      createdAt: order.createdAt,
    };

    this.server.emit('new-order', notification);

    console.log(
      `[Kitchen] ✉️  Novo pedido #${order.id} notificado (tipo: ${order.type})`,
    );
  }

  /**
   * Notifica mudança de status
   */
  notifyOrderStatusChange(orderId: number, status: string) {
    const notification = {
      orderId,
      status,
      timestamp: new Date(),
    };

    this.server.emit('order-status-changed', notification);

    console.log(
      `[Kitchen] 🔔 Status do pedido #${orderId} alterado: ${status}`,
    );
  }

  /**
   * Cliente conectado
   */
  handleConnection(client: Socket) {
    console.log(`[Kitchen] ✅ Cliente conectado: ${client.id}`);
  }

  /**
   * Cliente desconectado
   */
  handleDisconnect(client: Socket) {
    console.log(`[Kitchen] ❌ Cliente desconectado: ${client.id}`);
  }

  /**
   * Cozinha confirma que viu o pedido
   */
  @SubscribeMessage('order-acknowledged')
  handleOrderAcknowledged(
    @MessageBody() data: { orderId: number },
    @ConnectedSocket() client: Socket,
  ) {
    console.log(
      `[Kitchen] ✔️  Pedido #${data.orderId} reconhecido pela cozinha`,
    );

    // Notificar outros clientes conectados
    client.broadcast.emit('order-acknowledged', data);

    return { success: true, orderId: data.orderId };
  }
}
