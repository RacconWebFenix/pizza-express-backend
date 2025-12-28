import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Request } from 'express';

interface AuthenticatedUser {
  userId?: number;
  id?: number;
}

interface AuthenticatedRequest extends Request {
  user?: AuthenticatedUser;
}

@Controller('me')
export class MeController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getMe(@Req() req: AuthenticatedRequest) {
    // Busca dados do usuário autenticado (sem password)
    const userId = req.user?.id;

    if (!userId) {
      return { error: 'Token inválido - userId não encontrado' };
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { enderecos: true, pedidos: true }, // Inclui endereços e pedidos
    });

    if (!user) {
      return { error: 'Usuário não encontrado no banco de dados' };
    }

    // Remove o campo password do retorno
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userData } = user;
    return userData;
  }
}
