import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcryptjs';
import { Cliente } from '@prisma/client';

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
  ): Promise<Omit<Cliente, 'password'> | null> {
    const user = await this.prisma.cliente.findUnique({ where: { email } });
    if (
      user &&
      typeof user.password === 'string' &&
      (await bcrypt.compare(password, user.password))
    ) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
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
    endereco: string;
  }): Promise<Cliente> {
    if (!data.password) throw new Error('Campo password é obrigatório');
    const hash = await bcrypt.hash(data.password, 10);
    const user = await this.prisma.cliente.create({
      data: { ...data, password: hash },
    });
    return user;
  }
}
