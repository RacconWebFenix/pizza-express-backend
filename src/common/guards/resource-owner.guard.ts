import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PrismaService } from '../../prisma.service';
import { Role } from '@prisma/client';
import { RequestWithUser } from '../interfaces/authenticated-user.interface';
import { Request } from 'express';

/**
 * Guard para verificar se o usuário é proprietário do recurso
 * Implementa princípios SOLID:
 * - Single Responsibility: Verifica apenas propriedade de recursos
 * - Open/Closed: Extensível para novos tipos de recursos
 * - Dependency Inversion: Depende de abstrações (PrismaService)
 */
@Injectable()
export class ResourceOwnerGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<RequestWithUser>();
    const user = request.user;

    if (!user) {
      throw new ForbiddenException('Usuário não autenticado.');
    }

    // ADMINs sempre têm acesso
    if (user.role === Role.ADMIN) {
      return true;
    }

    const resourceType = this.reflector.get<string>(
      'resource',
      context.getHandler(),
    );
    const resourceId = request.params.id ? parseInt(request.params.id, 10) : 0;

    if (!resourceType || !resourceId) {
      return true; // Se não especificado, permite acesso
    }

    return this.checkResourceOwnership(resourceType, resourceId, user.id);
  }

  private async checkResourceOwnership(
    resourceType: string,
    resourceId: number,
    userId: number,
  ): Promise<boolean> {
    switch (resourceType) {
      case 'pedido':
        return this.checkPedidoOwnership(resourceId, userId);
      case 'endereco':
        return this.checkEnderecoOwnership(resourceId, userId);
      default:
        return true;
    }
  }

  private async checkPedidoOwnership(
    pedidoId: number,
    userId: number,
  ): Promise<boolean> {
    const pedido = await this.prisma.pedido.findUnique({
      where: { id: pedidoId },
      select: { userId: true },
    });

    if (!pedido) {
      throw new NotFoundException('Pedido não encontrado.');
    }

    if (pedido.userId !== userId) {
      throw new ForbiddenException('Você não tem acesso a este pedido.');
    }

    return true;
  }

  private async checkEnderecoOwnership(
    enderecoId: number,
    userId: number,
  ): Promise<boolean> {
    const endereco = await this.prisma.endereco.findUnique({
      where: { id: enderecoId },
      select: { userId: true },
    });

    if (!endereco) {
      throw new NotFoundException('Endereço não encontrado.');
    }

    if (endereco.userId !== userId) {
      throw new ForbiddenException('Você não tem acesso a este endereço.');
    }

    return true;
  }
}
