import { Test, TestingModule } from '@nestjs/testing';
import { PedidosService } from './pedidos.service';
import { PrismaService } from '../prisma.service';

const pedidoMock = {
  id: 1,
  clienteId: 1,
  status: 'aberto',
  entregadorId: null,
  latitude: null,
  longitude: null,
  criadoEm: new Date(),
  atualizadoEm: new Date(),
  pizzas: [],
  cliente: {},
  entregador: null,
};

describe('PedidosService', () => {
  let service: PedidosService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PedidosService, PrismaService],
    }).compile();
    service = module.get<PedidosService>(PedidosService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a pedido', async () => {
    jest.spyOn(prisma.pedido, 'create').mockResolvedValue(
      pedidoMock as unknown as {
        id: number;
        clienteId: number;
        status: string;
        entregadorId: number | null;
        latitude: number | null;
        longitude: number | null;
        criadoEm: Date;
        atualizadoEm: Date;
      },
    );
    const result = await service.create({
      clienteId: 1,
      pizzasIds: [],
      status: 'aberto',
    });
    expect(result).toEqual(pedidoMock);
  });
});
