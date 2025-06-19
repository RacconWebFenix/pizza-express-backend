import { Test, TestingModule } from '@nestjs/testing';
import { ClientesService } from './clientes.service';
import { PrismaService } from '../prisma.service';

const clienteMock = {
  id: 1,
  nome: 'João',
  email: 'joao@email.com',
  password: process.env.TEST_CLIENTE_PASSWORD!,
  telefone: '11999999999',
  endereco: 'Rua A',
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('ClientesService', () => {
  let service: ClientesService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientesService, PrismaService],
    }).compile();
    service = module.get<ClientesService>(ClientesService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a cliente', async () => {
    jest.spyOn(prisma.cliente, 'create').mockResolvedValue(
      clienteMock as unknown as {
        id: number;
        nome: string;
        email: string;
        password: string;
        telefone: string | null;
        endereco: string;
        createdAt: Date;
        updatedAt: Date;
      },
    );
    const result = await service.create({
      nome: 'João',
      email: 'joao@email.com',
      endereco: 'Rua A',
      password: '123456', // Corrigido de 'senha' para 'password'
    });
    expect(result).toEqual(clienteMock);
  });
});
