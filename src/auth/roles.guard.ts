import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '@prisma/client';
import { ROLES_KEY } from '../common/decorators/roles.decorator';
import { RequestWithUser } from '../common/interfaces/authenticated-user.interface';

/**
 * Guard para verificação de roles baseado em princípios SOLID
 * - Single Responsibility: Apenas verifica autorização de roles
 * - Open/Closed: Extensível para novas funcionalidades sem modificação
 * - Liskov Substitution: Implementa CanActivate corretamente
 * - Interface Segregation: Interface específica para sua função
 * - Dependency Inversion: Depende de abstrações (Reflector)
 */
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // Se não há roles definidas, permite acesso (rota pública autenticada)
    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest<RequestWithUser>();
    const user = request.user;

    if (!user) {
      throw new ForbiddenException('Usuário não autenticado.');
    }

    if (!user.role) {
      throw new ForbiddenException('Usuário sem papel definido.');
    }

    if (!requiredRoles.includes(user.role)) {
      throw new ForbiddenException(
        `Acesso negado. Roles necessárias: ${requiredRoles.join(', ')}. Seu role: ${user.role}`,
      );
    }

    return true;
  }
}
