import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

interface LocationUpdate {
  entregadorId: number;
  latitude: number;
  longitude: number;
}

@WebSocketGateway({ namespace: '/entregadores-localizacao', cors: true })
export class EntregadoresLocationGateway {
  @WebSocketServer()
  server!: Server;

  @SubscribeMessage('updateLocation')
  handleLocationUpdate(data: LocationUpdate): void {
    this.server.emit('locationUpdated', data);
  }
}
