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
