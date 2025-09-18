import { Test, TestingModule } from '@nestjs/testing';
import { PedidosService } from './pedidos.service';
import { PrismaService } from '../prisma.service';
import { StatusPedido } from '@prisma/client';

const pedidoMock = {
  id: 1,
  userId: 1,
  enderecoId: 1,
  status: StatusPedido.PENDENTE,
  entregadorId: null,
  latitude: null,
  longitude: null,
  total: 35,
  paymentIntentId: null,
  criadoEm: new Date(),
  atualizadoEm: new Date(),
  pizzas: [],
  user: {},
  endereco: {},
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
    jest.spyOn(prisma.pedido, 'create').mockResolvedValue(pedidoMock as any);
    const result = await service.create({
      clienteId: 1,
      pizzasIds: [],
      enderecoId: 1,
      status: StatusPedido.PENDENTE,
    });
    expect(result).toEqual(pedidoMock);
  });
});
