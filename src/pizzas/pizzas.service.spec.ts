import { Test, TestingModule } from '@nestjs/testing';
import { PizzasService } from './pizzas.service';
import { PrismaService } from '../prisma.service';

const pizzaMock = {
  id: 1,
  nome: 'Margherita',
  descricao: 'Clássica',
  preco: 39.9,
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('PizzasService', () => {
  let service: PizzasService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PizzasService, PrismaService],
    }).compile();
    service = module.get<PizzasService>(PizzasService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a pizza', async () => {
    jest.spyOn(prisma.pizza, 'create').mockResolvedValue(
      pizzaMock as unknown as {
        id: number;
        nome: string;
        descricao: string | null;
        preco: number;
        createdAt: Date;
        updatedAt: Date;
      },
    );
    const result = await service.create({ nome: 'Margherita', preco: 39.9 });
    expect(result).toEqual(pizzaMock);
  });
});
