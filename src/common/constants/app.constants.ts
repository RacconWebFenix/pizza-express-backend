/**
 * Constantes da aplicação - eliminando magic numbers e strings
 */
export const APP_CONSTANTS = {
  // Servidor
  DEFAULT_PORT: 10000,

  // Segurança
  BCRYPT_SALT_ROUNDS: 10,
  JWT_EXPIRATION: '24h',

  // Rate Limiting
  THROTTLE_LIMIT: 20,
  THROTTLE_TTL: 60,

  // Upload
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],

  // Validação
  MIN_PASSWORD_LENGTH: 6,
  MAX_PIZZA_PRICE: 999.99,
  MIN_PIZZA_PRICE: 0.01,

  // Regras de Negócio
  BUSINESS_RULES: {
    PIZZA_MIN_PRICE: 5.0, // Preço mínimo para pizzas
    PIZZA_MAX_PRICE: 999.99,
    MAX_PIZZA_NAME_LENGTH: 100,
    MIN_PIZZA_NAME_LENGTH: 3,
  },

  // Mensagens de Erro
  ERROR_MESSAGES: {
  // Autenticação
  USER_NOT_FOUND: 'Usuário não encontrado',
  INVALID_CREDENTIALS: 'Credenciais inválidas',
  USER_ALREADY_EXISTS: 'Usuário já existe',
  TOKEN_INVALID: 'Token inválido',

  // Autorização
  ACCESS_DENIED: 'Acesso negado',
  INSUFFICIENT_PERMISSIONS: 'Permissões insuficientes',
  RESOURCE_NOT_OWNED: 'Você não tem acesso a este recurso',

  // Recursos
  RESOURCE_NOT_FOUND: 'Recurso não encontrado',
  PIZZA_NOT_FOUND: 'Pizza não encontrada',
  ORDER_NOT_FOUND: 'Pedido não encontrado',
  USER_NOT_FOUND_RESOURCE: 'Usuário não encontrado',
  ADDRESS_NOT_FOUND: 'Endereço não encontrado',

  // Validação
  INVALID_EMAIL: 'E-mail inválido',
  INVALID_PHONE: 'Telefone inválido',
  INVALID_CEP: 'CEP inválido',
  INVALID_PRICE: 'Preço inválido',
  PRICE_TOO_HIGH: 'Preço não pode exceder R$ 999,99',
  PRICE_TOO_LOW: 'Preço deve ser maior que zero',

  // Negócio
  PIZZA_NAME_EXISTS: 'Pizza com este nome já existe',
  ORDER_ALREADY_DELIVERED: 'Pedido já foi entregue',
  ORDER_CANNOT_BE_CANCELLED: 'Pedido não pode ser cancelado',
  INVALID_STATUS_TRANSITION: 'Transição de status inválida',

    // Pizza Domain Errors
    PIZZA_CREATION_FAILED: 'Erro ao criar pizza',
    PIZZA_UPDATE_FAILED: 'Erro ao atualizar pizza',
    PIZZA_DELETE_FAILED: 'Erro ao remover pizza',
    PIZZA_FETCH_FAILED: 'Erro ao buscar pizzas',
    PIZZA_HAS_ORDERS: 'Pizza possui pedidos associados e não pode ser removida',

    // Upload
    FILE_TOO_LARGE: 'Arquivo muito grande',
    INVALID_FILE_TYPE: 'Tipo de arquivo inválido',
    UPLOAD_FAILED: 'Falha no upload do arquivo',
  },

  // Mensagens de Sucesso
  SUCCESS_MESSAGES: {
    // CRUD
    CREATED_SUCCESS: 'Recurso criado com sucesso',
    UPDATED_SUCCESS: 'Recurso atualizado com sucesso',
    DELETED_SUCCESS: 'Recurso removido com sucesso',

    // Específicos
    PIZZA_CREATED: 'Pizza criada com sucesso',
    ORDER_CREATED: 'Pedido criado com sucesso',
    ORDER_UPDATED: 'Pedido atualizado com sucesso',
    PAYMENT_CONFIRMED: 'Pagamento confirmado com sucesso',

    // Autenticação
    LOGIN_SUCCESS: 'Login realizado com sucesso',
    REGISTER_SUCCESS: 'Cadastro realizado com sucesso',
    LOGOUT_SUCCESS: 'Logout realizado com sucesso',
  },

  // Contextos de Log
  LOG_CONTEXTS: {
    APP: 'Application',
    AUTH: 'AuthService',
    USERS: 'UsersService',
    PIZZAS: 'PizzasService',
    ORDERS: 'OrdersService',
    PAYMENTS: 'PaymentsService',
    UPLOAD: 'UploadService',
    DELIVERERS: 'DeliverersService',
    ADDRESSES: 'AddressesService',
  },
} as const;
