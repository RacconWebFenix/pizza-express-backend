import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Request } from 'express';

@Controller('me')
export class MeController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getMe(
    @Req() req: Request & { user?: { userId?: number; id?: number } },
  ) {
    // Busca todos os dados do usuário autenticado no banco, menos o password
    const userId = req.user?.userId ?? req.user?.id;
    if (!userId) return null;
    const user = await this.prisma.cliente.findUnique({
      where: { id: userId },
      include: { enderecos: true, pedidos: true }, // Inclui endereços e pedidos
    });
    if (!user) return null;
    // Remove o campo password do retorno
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userData } = user;
    return userData;
  }
}
