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
    console.log('🔍 [/me] req.user:', req.user);
    console.log('🔍 [/me] Cabeçalho Authorization:', req.headers.authorization);
    
    // Busca todos os dados do usuário autenticado no banco, menos o password
    const userId = req.user?.userId ?? req.user?.id;
    console.log('🔍 [/me] userId extraído:', userId);
    
    if (!userId) {
      console.log('❌ [/me] userId não encontrado no token');
      return { error: 'Token inválido - userId não encontrado' };
    }
    
    console.log('🔍 [/me] Buscando usuário no banco com ID:', userId);
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { enderecos: true, pedidos: true }, // Inclui endereços e pedidos
    });
    console.log('🔍 [/me] usuário encontrado no banco:', user ? 'SIM' : 'NÃO');
    console.log('🔍 [/me] dados do usuário:', user ? { id: user.id, email: user.email, nome: user.nome } : null);
    
    if (!user) {
      return { error: 'Usuário não encontrado no banco de dados' };
    }
    
    // Remove o campo password do retorno
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userData } = user;
    console.log('✅ [/me] Retornando dados do usuário:', { id: userData.id, email: userData.email });
    return userData;
  }
}
