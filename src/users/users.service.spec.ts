import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma.service';
import { Role } from './dto/create-user.dto';

const userMock = {
  id: 1,
  nome: 'João',
  email: 'joao@email.com',
  password: process.env.TEST_USER_PASSWORD || 'hashedpassword',
  telefone: '11999999999',
  role: Role.CLIENTE,
  enderecos: [],
  createdAt: new Date(),
  updatedAt: new Date(),
};

interface MockPrismaService {
  user: {
    create: jest.Mock;
    findMany: jest.Mock;
    findUnique: jest.Mock;
  };
}

describe('UsersService', () => {
  let service: UsersService;
  let prisma: MockPrismaService;

  beforeEach(async () => {
    const mockPrismaService: MockPrismaService = {
      user: {
        create: jest.fn(),
        findMany: jest.fn(),
        findUnique: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
        {
          provide: 'HASHER',
          useValue: {
            hash: jest.fn().mockResolvedValue('hashedpassword'),
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    prisma = module.get<MockPrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', async () => {
    const userWithoutAddresses = {
      id: 1,
      nome: 'João',
      email: 'joao@email.com',
      password: 'hashedpassword',
      telefone: null,
      role: Role.CLIENTE,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const userWithAddresses = {
      ...userWithoutAddresses,
      enderecos: [],
    };

    prisma.user.create.mockResolvedValue(userWithoutAddresses);
    prisma.user.findUnique.mockResolvedValue(userWithAddresses);

    const result = await service.create({
      nome: 'João',
      email: 'joao@email.com',
      password: '123456',
      role: Role.CLIENTE,
    });

    expect(result).toBeDefined();
    expect(result.enderecos).toBeDefined();
    expect(prisma.user.create).toHaveBeenCalled();
  });
});
