import { Test, TestingModule } from '@nestjs/testing';
import { EntregadoresService } from './entregadores.service';
import { PrismaService } from '../prisma.service';

const entregadorMock = {
  id: 1,
  nome: 'Carlos',
  telefone: '11988888888',
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('EntregadoresService', () => {
  let service: EntregadoresService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntregadoresService, PrismaService],
    }).compile();
    service = module.get<EntregadoresService>(EntregadoresService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a entregador', async () => {
    jest.spyOn(prisma.entregador, 'create').mockResolvedValue(
      entregadorMock as unknown as {
        id: number;
        nome: string;
        telefone: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
    );
    const result = await service.create({ nome: 'Carlos' });
    expect(result).toEqual(entregadorMock);
  });
});
