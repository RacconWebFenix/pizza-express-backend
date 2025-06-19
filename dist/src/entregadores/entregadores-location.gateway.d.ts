import { Server } from 'socket.io';
interface LocationUpdate {
    entregadorId: number;
    latitude: number;
    longitude: number;
}
export declare class EntregadoresLocationGateway {
    server: Server;
    handleLocationUpdate(data: LocationUpdate): void;
}
export {};
