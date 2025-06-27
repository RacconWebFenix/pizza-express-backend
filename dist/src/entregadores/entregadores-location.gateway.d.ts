import { Server } from 'socket.io';
export declare class EntregadoresLocationGateway {
    server: Server;
    handleLocationUpdate(data: {
        entregadorId: number;
        latitude: number;
        longitude: number;
    }): void;
}
