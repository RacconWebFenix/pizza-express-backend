import { Role } from '@prisma/client';

/**
 * Constantes para hierarquia de roles
 * Seguindo o princípio de Single Responsibility (SOLID)
 */
export const ROLE_HIERARCHY = {
  [Role.CLIENTE]: 1,
  [Role.FUNCIONARIO]: 2,
  [Role.ADMIN]: 3,
} as const;

/**
 * Grupos de permissões por funcionalidade
 * Aplicando o princípio de Interface Segregation (SOLID)
 */
export const ROLE_PERMISSIONS = {
  // Permissões para gerenciamento de pizzas
  PIZZA_MANAGEMENT: [Role.ADMIN],
  PIZZA_VIEW: [Role.CLIENTE, Role.FUNCIONARIO, Role.ADMIN],

  // Permissões para gerenciamento de pedidos
  PEDIDO_CREATE: [Role.CLIENTE, Role.FUNCIONARIO, Role.ADMIN],
  PEDIDO_VIEW_ALL: [Role.FUNCIONARIO, Role.ADMIN],
  PEDIDO_MANAGE: [Role.FUNCIONARIO, Role.ADMIN],
  PEDIDO_DELETE: [Role.ADMIN],

  // Permissões para gerenciamento de usuários
  USER_MANAGEMENT: [Role.ADMIN],
  USER_VIEW_ALL: [Role.ADMIN],

  // Permissões para gerenciamento de entregadores
  ENTREGADOR_MANAGEMENT: [Role.ADMIN],
  ENTREGADOR_VIEW: [Role.FUNCIONARIO, Role.ADMIN],
} as const;
