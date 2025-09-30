/**
 * ARQUIVO: auth.decorators.ts
 *
 * Decorators compostos para eliminar duplicação de código de autenticação/autorização.
 * Implementação seguindo princípios SOLID:
 * - Single Responsibility: Cada decorator tem uma responsabilidade específica
 * - DRY: Elimina duplicação de 18+ ocorrências no projeto
 *
 * ⚠️ IMPORTANTE: Estes decorators são 100% compatíveis com os existentes
 * Podem ser aplicados gradualmente sem quebrar funcionalidade existente
 */

import { applyDecorators, UseGuards } from '@nestjs/common';
import { Role } from '@prisma/client';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { RolesGuard } from '../../auth/roles.guard';
import { ResourceOwnerGuard } from '../guards/resource-owner.guard';
import { Roles } from './roles.decorator';

/**
 * Decorator composto para endpoints que requerem APENAS role ADMIN
 *
 * Substitui:
 * @UseGuards(JwtAuthGuard, RolesGuard)
 * @Roles(Role.ADMIN)
 *
 * Por:
 * @AdminOnly()
 */
export const AdminOnly = () =>
  applyDecorators(UseGuards(JwtAuthGuard, RolesGuard), Roles(Role.ADMIN));

/**
 * Decorator composto para endpoints que permitem FUNCIONARIO ou ADMIN
 *
 * Substitui:
 * @UseGuards(JwtAuthGuard, RolesGuard)
 * @Roles(Role.FUNCIONARIO, Role.ADMIN)
 *
 * Por:
 * @StaffOrAdmin()
 */
export const StaffOrAdmin = () =>
  applyDecorators(
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles(Role.FUNCIONARIO, Role.ADMIN),
  );

/**
 * Decorator composto para endpoints que requerem apenas autenticação JWT
 *
 * Substitui:
 * @UseGuards(JwtAuthGuard)
 *
 * Por:
 * @Authenticated()
 */
export const Authenticated = () => applyDecorators(UseGuards(JwtAuthGuard));

/**
 * Decorator composto para endpoints que verificam ownership do recurso
 *
 * Substitui:
 * @UseGuards(ResourceOwnerGuard)
 *
 * Por:
 * @ResourceOwner()
 */
export const ResourceOwner = () =>
  applyDecorators(UseGuards(ResourceOwnerGuard));

/**
 * Decorator flexível para casos especiais com múltiplas roles
 *
 * Uso:
 * @AuthorizedRoles(Role.CLIENTE, Role.FUNCIONARIO, Role.ADMIN)
 */
export const AuthorizedRoles = (...roles: Role[]) =>
  applyDecorators(UseGuards(JwtAuthGuard, RolesGuard), Roles(...roles));
