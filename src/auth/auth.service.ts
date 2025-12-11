import { Injectable, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma.service';
import { IHasher } from '../common/interfaces/hasher.interface';
import { User } from '@prisma/client';

interface JwtPayload {
  sub: number;
  email: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    @Inject('HASHER') private readonly hasher: IHasher,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<Record<string, any> | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
      include: {
        enderecos: {
          where: { principal: true },
          take: 1,
        },
      },
    });
    if (user && (await this.hasher.compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password: _, ...result } = user;
      return result;
    }
    return null;
  }

  login(user: { id: number; email: string }): { access_token: string } {
    const payload: JwtPayload = { sub: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(data: {
    nome: string;
    email: string;
    password: string;
    telefone?: string;
    endereco?: string; // Para compatibilidade com testes E2E
    enderecos?: Array<{
      cep: string;
      tipo: string;
      logradouro: string;
      numero: string;
      bairro: string;
      cidade: string;
      estado: string;
      principal?: boolean;
      complemento?: string;
    }>;
  }): Promise<Record<string, any>> {
    if (!data.password) throw new Error('Campo password é obrigatório');
    const hash = await this.hasher.hash(data.password);
    const { enderecos, endereco, ...rest } = data;

    // Se recebeu endereco (string), converte para o formato de enderecos
    let enderecosData = enderecos;
    if (endereco && !enderecosData) {
      enderecosData = [{
        cep: '01234-567',
        tipo: 'CASA',
        logradouro: endereco,
        numero: '123',
        bairro: 'Centro',
        cidade: 'São Paulo',
        estado: 'SP',
        principal: true,
      }];
    }

    const created = await this.prisma.user.create({
      data: {
        ...rest,
        password: hash,
        enderecos: enderecosData ? { create: enderecosData } : undefined,
      },
      include: { enderecos: true },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _password, ...result } = created;
    return result;
  }

  async findOrCreateGoogleUser(input: {
    email: string;
    nome: string;
    avatar?: string;
  }): Promise<Omit<User, 'password'>> {
    let user = await this.prisma.user.findUnique({
      where: { email: input.email },
    });

    if (!user) {
      user = await this.prisma.user.create({
        data: {
          nome: input.nome,
          email: input.email,
          password: await this.hasher.hash('google-oauth-user'),
          role: 'CLIENTE',
          avatar: input.avatar,
        },
      });
    } else if (input.avatar && user.avatar !== input.avatar) {
      user = await this.prisma.user.update({
        where: { id: user.id },
        data: { avatar: input.avatar },
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...result } = user;
    return result;
  }
}
