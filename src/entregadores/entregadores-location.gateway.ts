import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class EntregadoresLocationGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('updateLocation')
  handleLocationUpdate(
    @MessageBody()
    data: {
      entregadorId: number;
      latitude: number;
      longitude: number;
    },
  ): void {
    // Broadcast da localização para todos os clientes conectados
    this.server.emit('locationUpdate', data);
  }
}
