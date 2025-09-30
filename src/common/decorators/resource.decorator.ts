import { SetMetadata } from '@nestjs/common';

export const RESOURCE_KEY = 'resource';

/**
 * Decorator para marcar o tipo de recurso sendo acessado
 * Usado em conjunto com ResourceOwnerGuard
 *
 * Exemplo de uso:
 * @Resource('pedido')
 * @Resource('endereco')
 */
export const Resource = (resourceType: string) =>
  SetMetadata(RESOURCE_KEY, resourceType);
