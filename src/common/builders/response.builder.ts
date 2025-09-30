/**
 * Response Builder Pattern - Padroniza respostas sem quebrar compatibilidade
 * Mantém exatamente o mesmo formato de payload do frontend
 */

export interface ApiResponse<T = unknown> {
  statusCode: number;
  message: string;
  data?: T;
  timestamp?: string;
}

export interface PaginatedResponse<T = unknown> extends ApiResponse<T[]> {
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export class ResponseBuilder {
  /**
   * Success response (200) - Mantém formato existente
   */
  static success<T>(
    data: T,
    message = 'Operação realizada com sucesso',
  ): ApiResponse<T> {
    return {
      statusCode: 200,
      message,
      data,
    };
  }

  /**
   * Created response (201) - Mantém formato existente
   */
  static created<T>(
    data: T,
    message = 'Recurso criado com sucesso',
  ): ApiResponse<T> {
    return {
      statusCode: 201,
      message,
      data,
    };
  }

  /**
   * Updated response (200) - Mantém formato existente
   */
  static updated<T>(
    data: T,
    message = 'Recurso atualizado com sucesso',
  ): ApiResponse<T> {
    return {
      statusCode: 200,
      message,
      data,
    };
  }

  /**
   * Deleted response (200) - Mantém formato existente
   */
  static deleted(
    message = 'Recurso removido com sucesso',
  ): ApiResponse<{ message: string }> {
    return {
      statusCode: 200,
      message,
      data: { message },
    };
  }

  /**
   * List response (200) - Mantém formato existente
   */
  static list<T>(
    data: T[],
    message = 'Recursos listados com sucesso',
  ): ApiResponse<T[]> {
    return {
      statusCode: 200,
      message,
      data,
    };
  }

  /**
   * Paginated response - Formato compatível com frontend
   */
  static paginated<T>(
    data: T[],
    total: number,
    page: number,
    limit: number,
    message = 'Recursos listados com sucesso',
  ): PaginatedResponse<T> {
    return {
      statusCode: 200,
      message,
      data,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}

// Specific builders para Pizza domain - mensagens customizadas
export class PizzaResponseBuilder extends ResponseBuilder {
  static pizzaCreated(pizza: unknown) {
    return ResponseBuilder.created(pizza, 'Pizza criada com sucesso');
  }

  static pizzaUpdated(pizza: unknown) {
    return ResponseBuilder.updated(pizza, 'Pizza atualizada com sucesso');
  }

  static pizzaDeleted() {
    return ResponseBuilder.deleted('Pizza removida com sucesso');
  }

  static pizzasList(pizzas: unknown[]) {
    return ResponseBuilder.list(pizzas, 'Pizzas listadas com sucesso');
  }

  static pizzaFound(pizza: unknown) {
    return ResponseBuilder.success(pizza, 'Pizza encontrada');
  }
}

// Specific builders para Pedido domain - mensagens customizadas
export class PedidoResponseBuilder extends ResponseBuilder {
  static pedidoCreated(pedido: unknown) {
    return ResponseBuilder.created(pedido, 'Pedido criado com sucesso');
  }

  static pedidoUpdated(pedido: unknown) {
    return ResponseBuilder.updated(pedido, 'Pedido atualizado com sucesso');
  }

  static pedidoDeleted() {
    return ResponseBuilder.deleted('Pedido removido com sucesso');
  }

  static pedidosList(pedidos: unknown[]) {
    return ResponseBuilder.list(pedidos, 'Pedidos listados com sucesso');
  }

  static pedidoFound(pedido: unknown) {
    return ResponseBuilder.success(pedido, 'Pedido encontrado');
  }

  static statusUpdated(pedido: unknown) {
    return ResponseBuilder.updated(
      pedido,
      'Status do pedido atualizado com sucesso',
    );
  }
}

// Specific builders para Entregador domain - mensagens customizadas
export class EntregadorResponseBuilder extends ResponseBuilder {
  static entregadorCreated(entregador: unknown) {
    return ResponseBuilder.created(entregador, 'Entregador criado com sucesso');
  }

  static entregadorUpdated(entregador: unknown) {
    return ResponseBuilder.updated(
      entregador,
      'Entregador atualizado com sucesso',
    );
  }

  static entregadorDeleted() {
    return ResponseBuilder.deleted('Entregador removido com sucesso');
  }

  static entregadoresList(entregadores: unknown[]) {
    return ResponseBuilder.list(
      entregadores,
      'Entregadores listados com sucesso',
    );
  }

  static entregadorFound(entregador: unknown) {
    return ResponseBuilder.success(entregador, 'Entregador encontrado');
  }
}

// Specific builders para User domain - mensagens customizadas
export class UserResponseBuilder extends ResponseBuilder {
  static userCreated(user: unknown) {
    return ResponseBuilder.created(user, 'Usuário criado com sucesso');
  }

  static userUpdated(user: unknown) {
    return ResponseBuilder.updated(user, 'Usuário atualizado com sucesso');
  }

  static userDeleted() {
    return ResponseBuilder.deleted('Usuário removido com sucesso');
  }

  static usersList(users: unknown[]) {
    return ResponseBuilder.list(users, 'Usuários listados com sucesso');
  }

  static userFound(user: unknown) {
    return ResponseBuilder.success(user, 'Usuário encontrado');
  }
}

// Specific builders para Endereco domain - mensagens customizadas
export class EnderecoResponseBuilder extends ResponseBuilder {
  static enderecoCreated(endereco: unknown) {
    return ResponseBuilder.created(endereco, 'Endereço criado com sucesso');
  }

  static enderecoUpdated(endereco: unknown) {
    return ResponseBuilder.updated(endereco, 'Endereço atualizado com sucesso');
  }

  static enderecoDeleted() {
    return ResponseBuilder.deleted('Endereço removido com sucesso');
  }

  static enderecosList(enderecos: unknown[]) {
    return ResponseBuilder.list(enderecos, 'Endereços listados com sucesso');
  }

  static enderecoFound(endereco: unknown) {
    return ResponseBuilder.success(endereco, 'Endereço encontrado');
  }
}
