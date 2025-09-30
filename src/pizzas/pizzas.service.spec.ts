import { Test, TestingModule } from '@nestjs/testing';
import { PizzasService } from './pizzas.service';
import { PrismaService } from '../prisma.service';
import { CustomLoggerService } from '../common/logger/logger.service';

const pizzaMock = {
  id: 1,
  nome: 'Margherita',
  descricao: 'Clássica',
  preco: 39.9,
  image: null,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const mockLoggerService = {
  log: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
  debug: jest.fn(),
  verbose: jest.fn(),
};

describe('PizzasService', () => {
  let service: PizzasService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PizzasService,
        PrismaService,
        {
          provide: CustomLoggerService,
          useValue: mockLoggerService,
        },
      ],
    }).compile();
    service = module.get<PizzasService>(PizzasService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a pizza', async () => {
    jest.spyOn(prisma.pizza, 'create').mockResolvedValue(pizzaMock as any);
    const result = await service.create({
      nome: 'Margherita',
      descricao: 'Pizza clássica',
      preco: 39.9,
    });
    expect(result).toEqual(pizzaMock);
  });
});
