import { Role } from '@prisma/client';

/**
 * Interface que representa um usuário autenticado no sistema
 * Utilizada para tipagem forte nos guards e controllers
 */
export interface AuthenticatedUser {
  id: number;
  email: string;
  role: Role;
  nome?: string;
}

/**
 * Interface para request com usuário autenticado
 * Extende o Request padrão do Express com propriedade user tipada
 */
export interface RequestWithUser extends Request {
  user: AuthenticatedUser;
  params: {
    id?: string;
    [key: string]: string | undefined;
  };
}
