import { Test, TestingModule } from '@nestjs/testing';
import { EntregadoresLocationGateway } from './entregadores-location.gateway';
import { Server } from 'socket.io';

describe('EntregadoresLocationGateway', () => {
  let gateway: EntregadoresLocationGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntregadoresLocationGateway],
    }).compile();
    gateway = module.get<EntregadoresLocationGateway>(
      EntregadoresLocationGateway,
    );
    gateway.server = { emit: jest.fn() } as unknown as Server;
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });

  it('should broadcast location update', () => {
    const data = { entregadorId: 1, latitude: -23.5, longitude: -46.6 };
    const call = (d: typeof data) =>
      gateway.handleLocationUpdate.call(gateway, d);
    call(data);
    expect(gateway.server.emit).toHaveBeenCalledWith('locationUpdated', data);
  });
});
