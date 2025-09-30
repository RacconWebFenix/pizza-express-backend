import { SetMetadata } from '@nestjs/common';
import { Role } from '@prisma/client';

export const ROLES_KEY = 'roles';

/**
 * Decorator para definir quais roles têm acesso a uma rota específica
 * @param roles Array de roles que podem acessar a rota
 *
 * Exemplo de uso:
 * @Roles(Role.ADMIN)
 * @Roles(Role.ADMIN, Role.FUNCIONARIO)
 */
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
