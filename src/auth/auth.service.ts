import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcryptjs';

interface JwtPayload {
  sub: number;
  email: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<Record<string, any> | null> {
    const user = await this.prisma.cliente.findUnique({
      where: { email },
      include: { enderecos: true },
    });
    if (
      user &&
      typeof user.password === 'string' &&
      (await bcrypt.compare(password, user.password))
    ) {
      const result: Omit<typeof user, 'password'> & { password?: string } = {
        ...user,
      };
      if ('password' in result) {
        delete result.password;
      }
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
    const hash = await bcrypt.hash(data.password, 10);
    const { enderecos, ...rest } = data;
    let user;
    if (enderecos && Array.isArray(enderecos) && enderecos.length > 0) {
      user = await this.prisma.cliente.create({
        data: {
          ...rest,
          password: hash,
          enderecos: {
            create: enderecos,
          },
        },
        include: { enderecos: true },
      });
    } else {
      user = await this.prisma.cliente.create({
        data: {
          ...rest,
          password: hash,
        },
        include: { enderecos: true },
      });
    }
    const result: Omit<typeof user, 'password'> & { password?: string } = {
      ...user,
    };
    if ('password' in result) {
      delete result.password;
    }
    return result;
  }
}
