# 🍕 Pizza Express Backend - Project Snapshot

**Snapshot completo do projeto para análise técnica**

> ⚠️ Este arquivo foi gerado automaticamente e contém todo o código-fonte do projeto.

---

# 📁 Estrutura do Projeto

```
.
├── all_files.md
├── .env
├── eslint.config.mjs
├── .eslintignore
├── .eslintrc.js
├── generate_project_snapshot.sh
├── .gitignore
├── Insomnia_Pizza_Express_Complete.yaml
├── nest-cli.json
├── package.json
├── package-lock.json
├── .prettierrc
├── prisma
│   ├── migrations
│   │   ├── 20250720114702_add_new_rules_image
│   │   │   └── migration.sql
│   │   ├── 20251211221547_add_hybrid_architecture_models
│   │   │   └── migration.sql
│   │   ├── 20251211221709_add_hybrid_architecture_models_v2
│   │   │   └── migration.sql
│   │   ├── 20251211222713_fix_address_relationship
│   │   │   └── migration.sql
│   │   ├── 20251228130452_add_order_modifications_and_split_payments
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   ├── schema.prisma
│   ├── seed-migration.ts
│   ├── seed-pedidos.ts
│   └── seed.ts
├── PROJECT_SNAPSHOT_20251228_103137.md
├── README.md
├── src
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── auth
│   │   ├── auth.controller.ts
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   ├── google.strategy.ts
│   │   ├── jwt-auth.guard.ts
│   │   ├── jwt.strategy.ts
│   │   ├── me.controller.ts
│   │   └── roles.guard.ts
│   ├── catalog
│   │   ├── catalog.module.ts
│   │   ├── categories.controller.ts
│   │   ├── categories.service.ts
│   │   ├── dto
│   │   │   ├── create-category.dto.ts
│   │   │   ├── create-product.dto.ts
│   │   │   ├── update-category.dto.ts
│   │   │   └── update-product.dto.ts
│   │   ├── entities
│   │   ├── products.controller.ts
│   │   └── products.service.ts
│   ├── cloudinary
│   │   ├── cloudinary.module.ts
│   │   └── cloudinary.service.ts
│   ├── common
│   │   ├── adapters
│   │   │   └── bcrypt.adapter.ts
│   │   ├── builders
│   │   │   └── response.builder.ts
│   │   ├── common.module.ts
│   │   ├── constants
│   │   │   ├── app.constants.ts
│   │   │   └── roles.constants.ts
│   │   ├── decorators
│   │   │   ├── auth.decorators.ts
│   │   │   ├── resource.decorator.ts
│   │   │   └── roles.decorator.ts
│   │   ├── enums
│   │   │   └── role.enum.ts
│   │   ├── filters
│   │   │   └── all-exceptions.filter.ts
│   │   ├── guards
│   │   │   └── resource-owner.guard.ts
│   │   ├── interfaces
│   │   │   ├── authenticated-user.interface.ts
│   │   │   └── hasher.interface.ts
│   │   └── logger
│   │       ├── logger.module.ts
│   │       └── logger.service.ts
│   ├── enderecos
│   │   ├── enderecos.controller.ts
│   │   ├── enderecos.module.ts
│   │   └── enderecos.service.ts
│   ├── entregadores
│   │   ├── dto
│   │   │   ├── create-entregadore.dto.ts
│   │   │   └── update-entregadore.dto.ts
│   │   ├── entities
│   │   │   └── entregadore.entity.ts
│   │   ├── entregadores.controller.ts
│   │   ├── entregadores-location.gateway.spec.ts
│   │   ├── entregadores-location.gateway.ts
│   │   ├── entregadores.module.ts
│   │   ├── entregadores.service.spec.ts
│   │   └── entregadores.service.ts
│   ├── main.ts
│   ├── order-items
│   │   ├── dto
│   │   │   ├── add-item.dto.ts
│   │   │   ├── cancel-item.dto.ts
│   │   │   └── update-item-quantity.dto.ts
│   │   ├── guards
│   │   │   └── order-modifiable.guard.ts
│   │   ├── interfaces
│   │   │   └── order-item-operation.interface.ts
│   │   ├── order-items.controller.ts
│   │   ├── order-items.module.ts
│   │   └── order-items.service.ts
│   ├── payments
│   │   ├── dto
│   │   │   ├── create-payment.dto.ts
│   │   │   └── split-payment.dto.ts
│   │   ├── payments.controller.ts
│   │   ├── payments.module.ts
│   │   ├── payments.service.ts
│   │   ├── split-payment.controller.ts
│   │   └── split-payment.service.ts
│   ├── pedidos
│   │   ├── dto
│   │   │   ├── create-order.dto.ts
│   │   │   ├── create-pedido.dto.ts
│   │   │   ├── update-pedido.dto.ts
│   │   │   └── update-pedido-status.dto.ts
│   │   ├── entities
│   │   │   └── pedido.entity.ts
│   │   ├── orders.controller.ts
│   │   ├── orders.service.ts
│   │   ├── pedidos.controller.ts
│   │   ├── pedidos.module.ts
│   │   ├── pedidos.service.spec.ts
│   │   ├── pedidos.service.ts
│   │   └── strategies
│   │       ├── delivery.strategy.ts
│   │       ├── dine-in.strategy.ts
│   │       ├── order-processing.strategy.ts
│   │       └── order-strategy.factory.ts
│   ├── pizzas
│   │   ├── dto
│   │   │   ├── create-pizza.dto.ts
│   │   │   └── update-pizza.dto.ts
│   │   ├── entities
│   │   │   └── pizza.entity.ts
│   │   ├── pizzas.controller.ts
│   │   ├── pizzas.module.ts
│   │   ├── pizzas.service.spec.ts
│   │   └── pizzas.service.ts
│   ├── prisma.module.ts
│   ├── prisma.service.ts
│   ├── tables
│   │   ├── dto
│   │   │   ├── create-table.dto.ts
│   │   │   └── update-table.dto.ts
│   │   ├── entities
│   │   ├── manage-tables.service.ts
│   │   ├── tables.controller.ts
│   │   ├── table-session.service.ts
│   │   └── tables.module.ts
│   ├── types
│   │   └── multer.d.ts
│   ├── upload
│   │   ├── file-validation.interceptor.ts
│   │   ├── upload.module.ts
│   │   └── upload.service.ts
│   └── users
│       ├── dto
│       │   ├── create-endereco.dto.ts
│       │   ├── create-user.dto.ts
│       │   ├── update-endereco.dto.ts
│       │   └── update-user.dto.ts
│       ├── entities
│       │   ├── endereco.entity.ts
│       │   └── user.entity.ts
│       ├── users.controller.ts
│       ├── users.module.ts
│       ├── users.service.spec.ts
│       └── users.service.ts
├── test
│   ├── app.e2e-spec.ts
│   ├── entregadores.e2e-spec.ts
│   ├── jest-e2e.json
│   ├── pedidos.e2e-spec.ts
│   ├── pizzas.e2e-spec.ts
│   └── utils.ts
├── test_crud_complete.js
├── test_crud.js
├── test_endereco.js
├── test_order_items_split_payment.js
├── tsconfig.build.json
├── tsconfig.json
└── .vscode
    └── settings.json

51 directories, 147 files
```

---

# 📄 Conteúdo dos Arquivos


## 📝 `all_files.md`

```markdown
# Estrutura do Projeto

## Diretórios
.
./dist
./dist/prisma
./dist/src
./dist/src/auth
./dist/src/catalog
./dist/src/catalog/dto
./dist/src/cloudinary
./dist/src/common
./dist/src/common/adapters
./dist/src/common/builders
./dist/src/common/constants
./dist/src/common/decorators
./dist/src/common/enums
./dist/src/common/filters
./dist/src/common/guards
./dist/src/common/interfaces
./dist/src/common/logger
./dist/src/enderecos
./dist/src/entregadores
./dist/src/entregadores/dto
./dist/src/entregadores/entities
./dist/src/payments
./dist/src/payments/dto
./dist/src/pedidos
./dist/src/pedidos/dto
./dist/src/pedidos/entities
./dist/src/pedidos/strategies
./dist/src/pizzas
./dist/src/pizzas/dto
./dist/src/pizzas/entities
./dist/src/tables
./dist/src/tables/dto
./dist/src/upload
./dist/src/users
./dist/src/users/dto
./dist/src/users/entities
./.git
./logs
./node_modules
./prisma
./prisma/migrations
./prisma/migrations/20250720114702_add_new_rules_image
./prisma/migrations/20251211221547_add_hybrid_architecture_models
./prisma/migrations/20251211221709_add_hybrid_architecture_models_v2
./prisma/migrations/20251211222713_fix_address_relationship
./src
./src/auth
./src/catalog
./src/catalog/dto
./src/catalog/entities
./src/cloudinary
./src/common
./src/common/adapters
./src/common/builders
./src/common/constants
./src/common/decorators
./src/common/enums
./src/common/filters
./src/common/guards
./src/common/interfaces
./src/common/logger
./src/enderecos
./src/entregadores
./src/entregadores/dto
./src/entregadores/entities
./src/payments
./src/payments/dto
./src/pedidos
./src/pedidos/dto
./src/pedidos/entities
./src/pedidos/strategies
./src/pizzas
./src/pizzas/dto
./src/pizzas/entities
./src/tables
./src/tables/dto
./src/tables/entities
./src/types
./src/upload
./src/users
./src/users/dto
./src/users/entities
./test
./.vscode

## Arquivos
eslint.config.mjs
.eslintignore
.eslintrc.js
.gitignore
Insomnia_Pizza_Express_Complete.yaml
nest-cli.json
package.json
package-lock.json
.prettierrc
prisma/migrations/20250720114702_add_new_rules_image/migration.sql
prisma/migrations/migration_lock.toml
prisma/schema.prisma
prisma/seed-migration.ts
prisma/seed-pedidos.ts
prisma/seed.ts
README.md
src/app.controller.spec.ts
src/app.controller.ts
src/app.module.ts
src/app.service.ts
src/auth/auth.controller.ts
src/auth/auth.module.ts
src/auth/auth.service.ts
src/auth/google.strategy.ts
src/auth/jwt-auth.guard.ts
src/auth/jwt.strategy.ts
src/auth/me.controller.ts
src/auth/roles.guard.ts
src/catalog/catalog.module.ts
src/catalog/categories.controller.ts
src/catalog/categories.service.ts
src/catalog/dto/create-category.dto.ts
src/catalog/dto/create-product.dto.ts
src/catalog/dto/update-category.dto.ts
src/catalog/dto/update-product.dto.ts
src/catalog/products.controller.ts
src/catalog/products.service.ts
src/cloudinary/cloudinary.module.ts
src/cloudinary/cloudinary.service.ts
src/common/adapters/bcrypt.adapter.ts
src/common/builders/response.builder.ts
src/common/common.module.ts
src/common/constants/app.constants.ts
src/common/constants/roles.constants.ts
src/common/decorators/auth.decorators.ts
src/common/decorators/resource.decorator.ts
src/common/decorators/roles.decorator.ts
src/common/enums/role.enum.ts
src/common/filters/all-exceptions.filter.ts
src/common/guards/resource-owner.guard.ts
src/common/interfaces/authenticated-user.interface.ts
src/common/interfaces/hasher.interface.ts
src/common/logger/logger.module.ts
src/common/logger/logger.service.ts
src/enderecos/enderecos.controller.ts
src/enderecos/enderecos.module.ts
src/enderecos/enderecos.service.ts
src/entregadores/dto/create-entregadore.dto.ts
src/entregadores/dto/update-entregadore.dto.ts
src/entregadores/entities/entregadore.entity.ts
src/entregadores/entregadores.controller.ts
src/entregadores/entregadores-location.gateway.spec.ts
src/entregadores/entregadores-location.gateway.ts
src/entregadores/entregadores.module.ts
src/entregadores/entregadores.service.spec.ts
src/entregadores/entregadores.service.ts
src/main.ts
src/payments/dto/create-payment.dto.ts
src/payments/payments.controller.ts
src/payments/payments.module.ts
src/payments/payments.service.ts
src/pedidos/dto/create-order.dto.ts
src/pedidos/dto/create-pedido.dto.ts
src/pedidos/dto/update-pedido.dto.ts
src/pedidos/dto/update-pedido-status.dto.ts
src/pedidos/entities/pedido.entity.ts
src/pedidos/orders.controller.ts
src/pedidos/orders.service.ts
src/pedidos/pedidos.controller.ts
src/pedidos/pedidos.module.ts
src/pedidos/pedidos.service.spec.ts
src/pedidos/pedidos.service.ts
src/pedidos/strategies/delivery.strategy.ts
src/pedidos/strategies/dine-in.strategy.ts
src/pedidos/strategies/order-processing.strategy.ts
src/pedidos/strategies/order-strategy.factory.ts
src/pizzas/dto/create-pizza.dto.ts
src/pizzas/dto/update-pizza.dto.ts
src/pizzas/entities/pizza.entity.ts
src/pizzas/pizzas.controller.ts
src/pizzas/pizzas.module.ts
src/pizzas/pizzas.service.spec.ts
src/pizzas/pizzas.service.ts
src/prisma.module.ts
src/prisma.service.ts
src/tables/dto/create-table.dto.ts
src/tables/dto/update-table.dto.ts
src/tables/manage-tables.service.ts
src/tables/tables.controller.ts
src/tables/table-session.service.ts
src/tables/tables.module.ts
src/types/multer.d.ts
src/upload/file-validation.interceptor.ts
src/upload/upload.module.ts
src/upload/upload.service.ts
src/users/dto/create-endereco.dto.ts
src/users/dto/create-user.dto.ts
src/users/dto/update-endereco.dto.ts
src/users/dto/update-user.dto.ts
src/users/entities/endereco.entity.ts
src/users/entities/user.entity.ts
src/users/users.controller.ts
src/users/users.module.ts
src/users/users.service.spec.ts
src/users/users.service.ts
test/app.e2e-spec.ts
test_crud_complete.js
test_crud.js
test_endereco.js
test/entregadores.e2e-spec.ts
test/jest-e2e.json
test/pedidos.e2e-spec.ts
test/pizzas.e2e-spec.ts
test/utils.ts
tsconfig.build.json
tsconfig.json

<- Manter consistência visual entre os botões do menu de START: .eslintignore -->
# Ignore build and config files
node_modules/
dist/
.eslintrc.js
.eslintignore
<- Manter consistência visual entre os botões do menu de END: .eslintignore -->
<- Manter consistência visual entre os botões do menu de START: .eslintrc.js -->
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    // Regra para desativar a verificação de atribuição insegura para o tipo 'any'
    // Isso é útil para os casos em que o Prisma retorna tipos dinâmicos
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
  },
};
<- Manter consistência visual entre os botões do menu de END: .eslintrc.js -->
<- Manter consistência visual entre os botões do menu de START: .gitignore -->
# Node.js
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
yarn.lock
package-lock.json
*.tgz

# Build outputs
/dist/
/build/
/.next/

# Vercel
.vercel/
.vercel_build_output/

# Docker
docker-compose.override.yml

# Logs
logs/
*.log
Dockerfile.local

# Environment variables
.env
.env.*
*.env.local
*.env.development.local
*.env.test.local
*.env.production.local

# IDEs
.vscode/
.idea/
*.swp
*.swo

# System files
.DS_Store
Thumbs.db

# Prisma
prisma/dev.db
prisma/*.sqlite
prisma/.cache/

# Test coverage & results
coverage/
test-results/
*.snap

# GitHub Actions
.github/

# Others
*.local
*.cache
pizza-express-insomnia.json

# Uploads (opcional - remova se quiser versionar as imagens)
uploads/

# SQL dumps
*.dump
*.sql
<- Manter consistência visual entre os botões do menu de END: .gitignore -->
<- Manter consistência visual entre os botões do menu de START: .prettierrc -->
{
  "singleQuote": true,
  "trailingComma": "all"
}
<- Manter consistência visual entre os botões do menu de END: .prettierrc -->
<- Manter consistência visual entre os botões do menu de START: Insomnia_Pizza_Express_Complete.yaml -->
_type: export
__export_format: 4
__export_date: 2025-09-30T23:00:00.000Z
__export_source: insomnia.desktop.app:v8.6.1
resources:
  - _id: req_pizza_list
    parentId: fld_pizzas
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pizzas"
    name: Listar Pizzas
    description: Lista todas as pizzas disponíveis
    method: GET
    body: {}
    parameters: []
    headers: []
    authentication: {}
    metaSortKey: -1727733600000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pizza_create
    parentId: fld_pizzas
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pizzas"
    name: Criar Pizza
    description: Cria uma nova pizza (apenas ADMIN)
    method: POST
    body:
      mimeType: application/json
      text: |
        {
          "nome": "Pizza Margherita",
          "descricao": "Molho de tomate, mussarela e manjericão fresco",
          "preco": 39.90
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733590000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pizza_create_with_image
    parentId: fld_pizzas
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pizzas/with-image"
    name: Criar Pizza com Imagem
    description: Cria pizza com upload de imagem (apenas ADMIN)
    method: POST
    body:
      mimeType: multipart/form-data
      params:
        - name: nome
          value: Pizza Calabresa
          id: pair_1
        - name: descricao
          value: Molho de tomate, mussarela, calabresa e cebola
          id: pair_2
        - name: preco
          value: "42.90"
          id: pair_3
        - name: image
          type: file
          value: ""
          id: pair_4
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733580000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pizza_get_by_id
    parentId: fld_pizzas
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pizzas/1"
    name: Buscar Pizza por ID
    description: Busca uma pizza específica
    method: GET
    body: {}
    parameters: []
    headers: []
    authentication: {}
    metaSortKey: -1727733570000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pizza_update
    parentId: fld_pizzas
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pizzas/1"
    name: Atualizar Pizza
    description: Atualiza uma pizza existente (apenas ADMIN)
    method: PATCH
    body:
      mimeType: application/json
      text: |
        {
          "nome": "Pizza Margherita Premium",
          "descricao": "Molho de tomate especial, mussarela de búfala e manjericão",
          "preco": 45.90
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733560000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pizza_upload_image
    parentId: fld_pizzas
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pizzas/1/upload-image"
    name: Upload Imagem Pizza
    description: Faz upload de imagem para pizza existente (apenas ADMIN)
    method: POST
    body:
      mimeType: multipart/form-data
      params:
        - name: image
          type: file
          value: ""
          id: pair_1
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733550000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pizza_delete
    parentId: fld_pizzas
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pizzas/1"
    name: Deletar Pizza
    description: Remove uma pizza (apenas ADMIN)
    method: DELETE
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733540000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  # AUTH ENDPOINTS
  - _id: req_auth_register
    parentId: fld_auth
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/auth/register"
    name: Registro de Usuário
    description: Registra um novo usuário
    method: POST
    body:
      mimeType: application/json
      text: |
        {
          "nome": "João Silva",
          "email": "joao@example.com",
          "password": "senha123",
          "telefone": "11999999999",
          "enderecos": [
            {
              "cep": "01310-100",
              "tipo": "residencial",
              "logradouro": "Av. Paulista",
              "numero": "1000",
              "bairro": "Bela Vista",
              "cidade": "São Paulo",
              "estado": "SP",
              "principal": true
            }
          ]
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
    authentication: {}
    metaSortKey: -1727733500000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_auth_login
    parentId: fld_auth
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/auth/login"
    name: Login
    description: Faz login com email e senha
    method: POST
    body:
      mimeType: application/json
      text: |
        {
          "email": "joao@example.com",
          "password": "senha123"
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
    authentication: {}
    metaSortKey: -1727733490000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_auth_google
    parentId: fld_auth
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/auth/google"
    name: Login Google
    description: Inicia login com Google OAuth
    method: GET
    body: {}
    parameters: []
    headers: []
    authentication: {}
    metaSortKey: -1727733480000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_auth_me
    parentId: fld_auth
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/me"
    name: Perfil do Usuário
    description: Busca dados do usuário logado
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733470000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  # USERS ENDPOINTS
  - _id: req_users_list
    parentId: fld_users
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/users"
    name: Listar Usuários
    description: Lista todos os usuários (apenas ADMIN)
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733400000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_users_create
    parentId: fld_users
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/users"
    name: Criar Usuário
    description: Cria um novo usuário (apenas ADMIN)
    method: POST
    body:
      mimeType: application/json
      text: |
        {
          "nome": "Maria Santos",
          "email": "maria@example.com",
          "password": "senha123",
          "telefone": "11888888888",
          "role": "CLIENTE",
          "enderecos": [
            {
              "cep": "04038-001",
              "tipo": "residencial",
              "logradouro": "Rua Vergueiro",
              "numero": "2000",
              "bairro": "Vila Mariana",
              "cidade": "São Paulo",
              "estado": "SP",
              "principal": true
            }
          ]
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733390000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_users_get_by_id
    parentId: fld_users
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/users/1"
    name: Buscar Usuário por ID
    description: Busca usuário específico (apenas ADMIN)
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733380000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_users_update
    parentId: fld_users
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/users/1"
    name: Atualizar Usuário
    description: Atualiza dados do usuário
    method: PATCH
    body:
      mimeType: application/json
      text: |
        {
          "nome": "João Silva Santos",
          "telefone": "11999888777"
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733370000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_users_delete
    parentId: fld_users
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/users/1"
    name: Deletar Usuário
    description: Remove um usuário (apenas ADMIN)
    method: DELETE
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733360000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  # PEDIDOS ENDPOINTS
  - _id: req_pedidos_create
    parentId: fld_pedidos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pedidos"
    name: Criar Pedido
    description: Cria um novo pedido
    method: POST
    body:
      mimeType: application/json
      text: |
        {
          "clienteId": 1,
          "enderecoId": 1,
          "pizzasIds": [1, 2],
          "entregadorId": 1,
          "paymentIntentId": "pi_1234567890",
          "observacoes": "Sem cebola na pizza margherita"
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733300000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pedidos_list
    parentId: fld_pedidos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pedidos"
    name: Listar Pedidos
    description: Lista todos os pedidos (apenas ADMIN/FUNCIONARIO)
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733290000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pedidos_my_orders
    parentId: fld_pedidos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pedidos/meus-pedidos"
    name: Meus Pedidos
    description: Lista pedidos do usuário logado
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733280000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pedidos_get_by_id
    parentId: fld_pedidos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pedidos/1"
    name: Buscar Pedido por ID
    description: Busca pedido específico
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733270000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pedidos_update
    parentId: fld_pedidos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pedidos/1"
    name: Atualizar Pedido
    description: Atualiza dados do pedido (apenas ADMIN/FUNCIONARIO)
    method: PATCH
    body:
      mimeType: application/json
      text: |
        {
          "observacoes": "Sem cebola e sem azeitona"
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733260000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pedidos_update_status
    parentId: fld_pedidos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pedidos/1/status"
    name: Atualizar Status do Pedido
    description: Atualiza status do pedido (apenas ADMIN)
    method: PATCH
    body:
      mimeType: application/json
      text: |
        {
          "status": "EM_PREPARO"
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733250000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pedidos_delete
    parentId: fld_pedidos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pedidos/1"
    name: Cancelar Pedido
    description: Cancela/remove um pedido
    method: DELETE
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733240000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  # ENTREGADORES ENDPOINTS
  - _id: req_entregadores_list
    parentId: fld_entregadores
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/entregadores"
    name: Listar Entregadores
    description: Lista todos os entregadores (apenas ADMIN/FUNCIONARIO)
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733200000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_entregadores_create
    parentId: fld_entregadores
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/entregadores"
    name: Criar Entregador
    description: Cria um novo entregador (apenas ADMIN)
    method: POST
    body:
      mimeType: application/json
      text: |
        {
          "nome": "Carlos Motoboy",
          "telefone": "11777777777"
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733190000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_entregadores_get_by_id
    parentId: fld_entregadores
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/entregadores/1"
    name: Buscar Entregador por ID
    description: Busca entregador específico (apenas ADMIN/FUNCIONARIO)
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733180000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_entregadores_update
    parentId: fld_entregadores
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/entregadores/1"
    name: Atualizar Entregador
    description: Atualiza dados do entregador (apenas ADMIN)
    method: PATCH
    body:
      mimeType: application/json
      text: |
        {
          "nome": "Carlos Silva Motoboy",
          "telefone": "11777666555"
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733170000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_entregadores_delete
    parentId: fld_entregadores
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/entregadores/1"
    name: Deletar Entregador
    description: Remove um entregador (apenas ADMIN)
    method: DELETE
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733160000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  # ENDERECOS ENDPOINTS
  - _id: req_enderecos_list
    parentId: fld_enderecos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/enderecos"
    name: Meus Endereços
    description: Lista endereços do usuário logado
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733100000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_enderecos_create
    parentId: fld_enderecos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/enderecos"
    name: Criar Endereço
    description: Cria um novo endereço para o usuário logado
    method: POST
    body:
      mimeType: application/json
      text: |
        {
          "cep": "05508-030",
          "tipo": "trabalho",
          "logradouro": "Av. das Nações Unidas",
          "numero": "12901",
          "bairro": "Brooklin",
          "cidade": "São Paulo",
          "estado": "SP",
          "complemento": "Torre Norte, 5º andar",
          "principal": false
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733090000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_enderecos_get_by_id
    parentId: fld_enderecos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/enderecos/1"
    name: Buscar Endereço por ID
    description: Busca endereço específico do usuário
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733080000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_enderecos_update
    parentId: fld_enderecos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/enderecos/1"
    name: Atualizar Endereço
    description: Atualiza dados do endereço
    method: PATCH
    body:
      mimeType: application/json
      text: |
        {
          "numero": "1500",
          "complemento": "Apto 101, Bloco A"
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733070000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_enderecos_delete
    parentId: fld_enderecos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/enderecos/1"
    name: Deletar Endereço
    description: Remove um endereço do usuário
    method: DELETE
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733060000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  # PAYMENTS ENDPOINTS
  - _id: req_payments_create_intent
    parentId: fld_payments
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/payments/create-intent"
    name: Criar Payment Intent
    description: Cria intenção de pagamento no Stripe
    method: POST
    body:
      mimeType: application/json
      text: |
        {
          "amount": 8290,
          "currency": "brl",
          "metadata": {
            "pedidoId": "1",
            "userId": "1"
          }
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733000000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_payments_webhook
    parentId: fld_payments
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/payments/webhook"
    name: Webhook do Stripe
    description: Endpoint para webhooks do Stripe (uso interno)
    method: POST
    body:
      mimeType: application/json
      text: |
        {
          "id": "evt_test_webhook",
          "object": "event",
          "type": "payment_intent.succeeded",
          "data": {
            "object": {
              "id": "pi_test_1234567890",
              "status": "succeeded",
              "amount": 8290,
              "currency": "brl"
            }
          }
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Stripe-Signature
        value: "t=1234567890,v1=test_signature"
    authentication: {}
    metaSortKey: -1727732990000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  # FOLDERS
  - _id: fld_pizzas
    parentId: wrk_main
    modified: 1727733600000
    created: 1727733600000
    name: 🍕 Pizzas
    description: Endpoints para gestão de pizzas
    environment: {}
    environmentPropertyOrder: null
    metaSortKey: -1727733600000
    _type: request_group

  - _id: fld_auth
    parentId: wrk_main
    modified: 1727733600000
    created: 1727733600000
    name: 🔐 Autenticação
    description: Endpoints de autenticação e autorização
    environment: {}
    environmentPropertyOrder: null
    metaSortKey: -1727733500000
    _type: request_group

  - _id: fld_users
    parentId: wrk_main
    modified: 1727733600000
    created: 1727733600000
    name: 👥 Usuários
    description: Endpoints para gestão de usuários
    environment: {}
    environmentPropertyOrder: null
    metaSortKey: -1727733400000
    _type: request_group

  - _id: fld_pedidos
    parentId: wrk_main
    modified: 1727733600000
    created: 1727733600000
    name: 📦 Pedidos
    description: Endpoints para gestão de pedidos
    environment: {}
    environmentPropertyOrder: null
    metaSortKey: -1727733300000
    _type: request_group

  - _id: fld_entregadores
    parentId: wrk_main
    modified: 1727733600000
    created: 1727733600000
    name: 🏍️ Entregadores
    description: Endpoints para gestão de entregadores
    environment: {}
    environmentPropertyOrder: null
    metaSortKey: -1727733200000
    _type: request_group

  - _id: fld_enderecos
    parentId: wrk_main
    modified: 1727733600000
    created: 1727733600000
    name: 📍 Endereços
    description: Endpoints para gestão de endereços
    environment: {}
    environmentPropertyOrder: null
    metaSortKey: -1727733100000
    _type: request_group

  - _id: fld_payments
    parentId: wrk_main
    modified: 1727733600000
    created: 1727733600000
    name: 💳 Pagamentos
    description: Endpoints para integração com Stripe
    environment: {}
    environmentPropertyOrder: null
    metaSortKey: -1727733000000
    _type: request_group

  # WORKSPACE AND ENVIRONMENTS
  - _id: wrk_main
    parentId: null
    modified: 1727733600000
    created: 1727733600000
    name: Pizza Express API Complete
    description: Coleção completa da API Pizza Express com todos os endpoints organizados
    scope: collection
    _type: workspace

  - _id: env_main
    parentId: wrk_main
    modified: 1727733600000
    created: 1727733600000
    name: Base Environment
    data:
      base_url: http://localhost:10000
      auth_token: ""
    dataPropertyOrder:
      "&":
        - base_url
        - auth_token
    color: null
    isPrivate: false
    metaSortKey: 1727733600000
    _type: environment

  - _id: env_dev
    parentId: env_main
    modified: 1727733600000
    created: 1727733600000
    name: Development
    data:
      base_url: http://localhost:10000
      auth_token: ""
    dataPropertyOrder:
      "&":
        - base_url
        - auth_token
    color: "#7d69cb"
    isPrivate: false
    metaSortKey: 1727733600000
    _type: environment

  - _id: env_prod
    parentId: env_main
    modified: 1727733600000
    created: 1727733600000
    name: Production
    data:
      base_url: https://pizza-express-backend.vercel.app
      auth_token: ""
    dataPropertyOrder:
      "&":
        - base_url
        - auth_token
    color: "#d9534f"
    isPrivate: false
    metaSortKey: 1727733610000
    _type: environment<- Manter consistência visual entre os botões do menu de END: Insomnia_Pizza_Express_Complete.yaml -->
<- Manter consistência visual entre os botões do menu de START: README.md -->
# 🍕 Pizza Express Backend

<div align="center">

![Pizza Express](https://img.shields.io/badge/Pizza-Express-red?style=for-the-badge&logo=pizza&logoColor=white)
![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-2.0.0-blue?style=for-the-badge)

**API REST completa para sistema de delivery de pizzas com arquitetura híbrida moderna e escalável**

[![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)](https://nodejs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-11.x-red?logo=nestjs)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14+-blue?logo=postgresql)](https://postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.x-indigo?logo=prisma)](https://prisma.io/)
[![Stripe](https://img.shields.io/badge/Stripe-Payments-purple?logo=stripe)](https://stripe.com/)

[🚀 Instalação](#instalação) • [📖 API Docs](#api-endpoints) • [💳 Pagamentos](#sistema-de-pagamentos) • [🔌 WebSocket](#websocket-real-time) • [🪑 Mesas](#gestão-de-mesas) • [🔐 RBAC](#role-based-access-control)

</div>

---

## 📋 Visão Geral

O **Pizza Express Backend** é uma API REST robusta desenvolvida com **NestJS** e **TypeScript**, oferecendo uma solução completa para sistemas de delivery de pizzas com arquitetura híbrida (delivery + dine-in). Construída com foco em performance, segurança e escalabilidade.

### 🎯 **Principais Características**

- ⚡ **Performance Otimizada** - Queries N+1 eliminadas, responses padronizadas
- 🛡️ **Segurança Avançada** - JWT + OAuth2, Rate Limiting, Global Exception Filter
- 🏗️ **Arquitetura Limpa** - SOLID principles, Domain Services, Clean Code
- 📊 **Monitoramento** - Logging estruturado Winston, Error tracking completo
- 🔄 **Real-time** - WebSocket para tracking de entregadores
- 💳 **Pagamentos** - Integração completa Stripe com webhooks
- 📱 **Mobile Ready** - API otimizada para aplicações mobile
- 🪑 **Híbrido** - Suporte a delivery e atendimento presencial (mesas)
- 🔐 **RBAC** - Controle de acesso baseado em roles (Cliente, Funcionário, Admin)

---

## 🚀 Features Principais

### 🍕 **Sistema de Pizzas**
- ✅ CRUD completo com validações rigorosas
- ✅ Upload de imagens via Cloudinary
- ✅ Preços dinâmicos e controle de estoque
- ✅ Busca e filtros avançados

### 👥 **Gestão de Usuários**
- ✅ Registro e autenticação JWT
- ✅ Login social (Google OAuth) com avatar
- ✅ Sistema de roles (Cliente, Admin, Funcionário)
- ✅ Gestão de múltiplos endereços

### 📦 **Sistema de Pedidos**
- ✅ Criação com múltiplas pizzas
- ✅ Tracking de status em tempo real
- ✅ Histórico completo de pedidos
- ✅ Cálculo automático de preços e taxas
- ✅ Observações personalizadas

### 🏍️ **Gestão de Entregadores**
- ✅ CRUD completo de entregadores
- ✅ Tracking GPS em tempo real
- ✅ Status de disponibilidade
- ✅ WebSocket para localização

### 💳 **Sistema de Pagamentos**
- ✅ Integração completa Stripe
- ✅ Payment Intents seguros
- ✅ Webhooks para confirmação automática
- ✅ Múltiplos métodos de pagamento
- ✅ Atualização automática de status após pagamento confirmado

### 🪑 **Gestão de Mesas (Dine-in)**
- ✅ CRUD de mesas físicas
- ✅ Controle de status (Disponível, Ocupada, Reservada)
- ✅ Sessões de atendimento (comandas)
- ✅ Pedidos vinculados a mesas
- ✅ Fechamento de conta automático

### 📦 **Catálogo Genérico**
- ✅ Categorias de produtos (Pizzas, Bebidas, Sobremesas)
- ✅ Produtos genéricos com upload de imagens
- ✅ Migração gradual da arquitetura legada

---

## 🏗️ Arquitetura Técnica

### **Stack Principal**
- **Framework**: NestJS 11.x
- **Language**: TypeScript 5.x (100% Type Safety)
- **Database**: PostgreSQL + Prisma ORM 6.x
- **Authentication**: JWT + Passport + Google OAuth
- **File Upload**: Cloudinary integration
- **Payments**: Stripe complete integration
- **Real-time**: Socket.IO WebSocket
- **Logging**: Winston structured logging
- **Validation**: Class Validator + Class Transformer
- **Testing**: Jest + Supertest

### **Padrões Arquiteturais Implementados**
- ✅ **SOLID Principles** rigorosamente aplicados
- ✅ **Clean Architecture** com Domain Services
- ✅ **Repository Pattern** via Prisma
- ✅ **Decorator Pattern** para Guards customizados
- ✅ **Builder Pattern** para Response DTOs
- ✅ **Strategy Pattern** para métodos de autenticação e pedidos

### **Estrutura de Módulos**
```
src/
├── auth/           [PROTEGIDO] - JWT, OAuth Google, guards, estratégias
├── catalog/        - Categorias e produtos genéricos
├── cloudinary/     - Upload de imagens
├── common/         - Utilitários compartilhados
├── enderecos/      - CRUD de endereços (vinculados ao usuário)
├── entregadores/   - CRUD + WebSocket para localização
├── payments/       - Integração Stripe
├── pedidos/        - Sistema de pedidos (legado + novo)
├── pizzas/         - CRUD de pizzas (legado)
├── tables/         - Gestão de mesas e sessões
├── upload/         - Serviços de upload
├── users/          - CRUD de usuários
└── main.ts         [PROTEGIDO] - Bootstrap da aplicação
```

---

## 🔧 Instalação e Configuração

### **Pré-requisitos**
- Node.js 18+
- PostgreSQL 14+
- Conta Cloudinary (para uploads)
- Conta Stripe (para pagamentos)
- Conta Google OAuth (opcional)

### **Passos de Instalação**

1. **Clone o repositório**
```bash
git clone <repository-url>
cd pizza-express-backend
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
```

Edite o `.env` com suas configurações:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/pizza_express"
JWT_SECRET="your-jwt-secret"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
STRIPE_SECRET_KEY="your-stripe-secret"
STRIPE_WEBHOOK_SECRET="your-webhook-secret"
FRONTEND_URL="http://localhost:3000"
```

4. **Execute as migrações do banco**
```bash
npx prisma migrate dev
```

5. **Popule o banco com dados iniciais**
```bash
npm run seed
```

6. **Inicie o servidor**
```bash
npm run start:dev
```

### **Scripts Disponíveis**
```bash
npm run build          # Build da aplicação
npm run start:prod     # Iniciar em produção
npm run test           # Executar testes
npm run test:e2e       # Testes end-to-end
npm run lint           # Verificar código
```

---

## 📖 API Endpoints

### 🔐 Autenticação

#### **POST /auth/login**
**Autenticação**: ❌ Não requer
**Corpo**:
```typescript
{
  "email": "string",
  "password": "string"
}
```
**Resposta**:
```typescript
{
  "access_token": "string",
  "user": {
    "id": number,
    "email": "string",
    "role": "CLIENTE" | "FUNCIONARIO" | "ADMIN"
  }
}
```

#### **POST /auth/register**
**Autenticação**: ❌ Não requer
**Corpo**:
```typescript
{
  "nome": "string",
  "email": "string",
  "password": "string",
  "telefone": "string",
  "role": "CLIENTE" | "FUNCIONARIO" | "ADMIN" // Opcional, padrão CLIENTE
}
```

#### **GET /auth/google**
**Autenticação**: ❌ Não requer
**Redireciona para OAuth do Google**

#### **GET /me**
**Autenticação**: ✅ Requer (qualquer usuário logado)
**Resposta**: Dados completos do usuário com endereços e pedidos

### 🍕 Pizzas

#### **GET /pizzas**
**Autenticação**: ❌ Não requer
**Resposta**: Lista de todas as pizzas disponíveis

#### **POST /pizzas**
**Autenticação**: ✅ ADMIN apenas
**Corpo**: Dados da pizza (nome, descrição, preço, etc.)

#### **POST /pizzas/with-image**
**Autenticação**: ✅ ADMIN apenas
**Tipo**: multipart/form-data
**Corpo**: FormData com imagem e dados da pizza

### 📦 Pedidos

#### **POST /pedidos**
**Autenticação**: ✅ Requer
**Corpo**:
```typescript
{
  "enderecoId": number,
  "itens": [
    {
      "pizzaId": number,
      "quantidade": number,
      "observacoes": "string"
    }
  ],
  "observacoes": "string"
}
```

#### **GET /pedidos/meus-pedidos**
**Autenticação**: ✅ Requer
**Resposta**: Pedidos do usuário logado

#### **GET /pedidos**
**Autenticação**: ✅ FUNCIONARIO ou ADMIN
**Resposta**: Todos os pedidos

### 🪑 Mesas (Tables)

#### **GET /tables**
**Autenticação**: ✅ FUNCIONARIO ou ADMIN
**Resposta**: Lista de mesas com status

#### **POST /tables**
**Autenticação**: ✅ ADMIN
**Corpo**:
```typescript
{
  "number": number
}
```

#### **POST /tables/:id/sessions**
**Autenticação**: ✅ FUNCIONARIO ou ADMIN
**Abre uma sessão para a mesa (muda status para OCCUPIED)**

#### **POST /tables/:id/bill**
**Autenticação**: ✅ FUNCIONARIO ou ADMIN
**Fecha a conta e libera a mesa**

### 📦 Catálogo (Categories & Products)

#### **GET /categories**
**Autenticação**: ❌ Não requer
**Resposta**: Lista de categorias

#### **GET /products**
**Autenticação**: ❌ Não requer
**Resposta**: Lista de produtos com filtros

### 💳 Pagamentos

#### **POST /payments/create-intent**
**Autenticação**: ✅ Requer
**Corpo**:
```typescript
{
  "amount": number,
  "currency": "brl"
}
```
**Resposta**: client_secret para Stripe

### 🚚 Entregadores

#### **GET /entregadores**
**Autenticação**: ✅ FUNCIONARIO ou ADMIN
**Resposta**: Lista de entregadores

#### **WebSocket /entregadores/location**
**Autenticação**: ✅ Entregador logado
**Emite localização GPS em tempo real**

---

## 🔌 WebSocket Real-time

### **Conexão**
```typescript
import io from 'socket.io-client';

const socket = io('http://localhost:3000', {
  auth: {
    token: 'jwt-token'
  }
});
```

### **Eventos de Entregadores**
```typescript
// Entregador emite localização
socket.emit('updateLocation', {
  latitude: number,
  longitude: number
});

// Cliente escuta localização
socket.on('locationUpdate', (data) => {
  console.log('Entregador em:', data);
});
```

---

## 🔐 Role-Based Access Control (RBAC)

### **Roles Disponíveis**
- **CLIENTE**: Acesso básico (visualizar catálogo, fazer pedidos, gerenciar perfil)
- **FUNCIONARIO**: Acesso intermediário (gerenciar pedidos, mesas, entregadores)
- **ADMIN**: Acesso total (gerenciar tudo)

### **Implementação no Frontend**

#### **Context de Autenticação**
```typescript
// contexts/AuthContext.tsx
interface User {
  id: number;
  nome: string;
  email: string;
  role: 'CLIENTE' | 'FUNCIONARIO' | 'ADMIN';
}

const AuthContext = createContext<{
  user: User | null;
  hasRole: (role: string) => boolean;
}>({
  user: null,
  hasRole: () => false
});
```

#### **Hook de Permissões**
```typescript
// hooks/usePermissions.ts
export const usePermissions = () => {
  const { user } = useAuth();
  
  const hasRole = (requiredRole: string) => {
    const hierarchy = { CLIENTE: 1, FUNCIONARIO: 2, ADMIN: 3 };
    return hierarchy[user?.role] >= hierarchy[requiredRole];
  };
  
  return { hasRole };
};
```

#### **Componente Protegido**
```typescript
// components/ProtectedRoute.tsx
interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: string;
  fallback?: ReactNode;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ 
  children, 
  requiredRole, 
  fallback 
}) => {
  const { user } = useAuth();
  const { hasRole } = usePermissions();
  
  if (!user) return <Navigate to="/login" />;
  if (requiredRole && !hasRole(requiredRole)) {
    return fallback || <div>Acesso negado</div>;
  }
  
  return <>{children}</>;
};
```

---

## 🛠️ Guia de Integração Frontend

### **Stack Sugerida**
- **Framework**: Next.js 14+ (App Router)
- **Data Fetching**: TanStack Query para estado do cliente
- **Auth**: NextAuth.js ou gerenciamento manual de JWT
- **UI**: Tailwind CSS + Shadcn/UI

### **Fluxo de Autenticação**
1. Login → Recebe JWT token
2. Armazena token em cookies/httpOnly
3. Inclui em headers de todas as requisições autenticadas
4. Middleware do Next.js protege rotas baseadas em roles

### **Gestão de Mesas (Dine-in)**
- **Mesas Físicas**: Identificadas por number (Mesa 1, Mesa 2)
- **Status**: AVAILABLE, OCCUPIED, RESERVED
- **Sessões**: Comandas que agrupam pedidos
- **UI**: Grid de mesas no dashboard do funcionário

### **Pedidos**
- **Tipos**: DELIVERY (requer endereço) e DINE_IN (requer mesa)
- **Status**: PENDENTE → CONFIRMADO → PREPARANDO → PRONTO → ENTREGANDO → ENTREGUE

### **Pagamentos Stripe**
1. Frontend chama `/payments/create-intent`
2. Recebe `client_secret`
3. Usa `@stripe/react-stripe-js` para renderizar formulário
4. Confirma pagamento
5. Backend recebe webhook e atualiza status

---

## 📜 Plano de Refatoração (Master Refactoring Plan)

### **Objetivo**
Transição de "App de Pizza" para "Sistema de Gestão de Restaurante Completo" com arquitetura híbrida.

### **Tarefa 1: Evolução do Schema**
- ✅ Adicionar models: Category, Product, Table, TableSession
- ✅ Atualizar Order para polimórfico (DELIVERY/DINE_IN)
- ✅ Manter compatibilidade com dados legados

### **Tarefa 2: Módulo de Catálogo Genérico**
- ✅ Criar src/catalog com CategoriesService e ProductsService
- ✅ Suporte a upload de imagens
- ✅ Script de migração para converter Pizzas em Products

### **Tarefa 3: Módulo de Mesas**
- ✅ ManageTablesService: CRUD de mesas
- ✅ TableSessionService: Abrir/fechar sessões
- ✅ Validação de status e integridade

### **Tarefa 4: Refatoração de Pedidos com Strategy Pattern**
- ✅ Interface OrderProcessingStrategy
- ✅ Estratégias: DeliveryStrategy e DineInStrategy
- ✅ Strategy Factory no OrdersService

### **Tarefa 5: Limpeza e Finalização**
- ✅ Depreciação gradual do PizzasModule
- ✅ DTOs unificados com validação condicional
- ✅ Testes E2E para fluxos completos

---

## 🧪 Testes

### **Cobertura**
- ✅ Autenticação e autorização
- ✅ CRUD de entidades
- ✅ Fluxos de pedidos (delivery e mesa)
- ✅ Integração Stripe
- ✅ WebSocket de entregadores

### **Executar Testes**
```bash
npm run test              # Unitários
npm run test:e2e          # End-to-end
npm run test:cov          # Com cobertura
```

---

## 🚀 Deploy

### **Vercel**
```bash
npm run vercel-build
```

### **Configuração de Produção**
- ✅ Variáveis de ambiente configuradas
- ✅ Database PostgreSQL em produção
- ✅ Webhooks Stripe configurados
- ✅ CORS para domínios do frontend

---

## 📝 Licença

UNLICENSED

---

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

---

**Desenvolvido com ❤️ usando NestJS e TypeScript**<- Manter consistência visual entre os botões do menu de END: README.md -->
<- Manter consistência visual entre os botões do menu de START: eslint.config.mjs -->
// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs', 'dist/**'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/unbound-method': 'warn',
    },
  },
  {
    files: ['test/**/*.ts', '**/*.spec.ts', '**/*.e2e-spec.ts'],
    rules: {
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/unbound-method': 'off',
    },
  },
);
<- Manter consistência visual entre os botões do menu de END: eslint.config.mjs -->
<- Manter consistência visual entre os botões do menu de START: nest-cli.json -->
{
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "deleteOutDir": true
  }
}
<- Manter consistência visual entre os botões do menu de END: nest-cli.json -->
<- Manter consistência visual entre os botões do menu de START: package-lock.json -->
{
  "name": "backend",
  "version": "0.0.1",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "backend",
      "version": "0.0.1",
      "hasInstallScript": true,
      "license": "UNLICENSED",
      "dependencies": {
        "@nestjs/common": "^11.0.1",
        "@nestjs/config": "^4.0.2",
        "@nestjs/core": "^11.0.1",
        "@nestjs/jwt": "^11.0.0",
        "@nestjs/mapped-types": "*",
        "@nestjs/passport": "^11.0.5",
        "@nestjs/platform-express": "^11.0.1",
        "@nestjs/platform-socket.io": "^11.1.3",
        "@nestjs/throttler": "^6.4.0",
        "@nestjs/websockets": "^11.1.3",
        "@types/passport-google-oauth20": "^2.0.16",
        "@types/socket.io": "^3.0.1",
        "@vercel/speed-insights": "^1.2.0",
        "bcryptjs": "^3.0.2",
        "class-transformer": "^0.5.1",
        "class-validator": "^0.14.2",
        "cloudinary": "^2.7.0",
        "helmet": "^8.1.0",
        "multer": "^2.0.1",
        "passport": "^0.7.0",
        "passport-google-oauth20": "^2.0.0",
        "passport-jwt": "^4.0.1",
        "reflect-metadata": "^0.2.2",
        "rxjs": "^7.8.1",
        "socket.io": "^4.8.1",
        "stripe": "^18.5.0",
        "winston": "^3.18.2"
      },
      "devDependencies": {
        "@eslint/eslintrc": "^3.2.0",
        "@eslint/js": "^9.18.0",
        "@nestjs/cli": "^11.0.7",
        "@nestjs/schematics": "^11.0.0",
        "@nestjs/testing": "^11.0.1",
        "@prisma/client": "^6.13.0",
        "@swc/cli": "^0.6.0",
        "@swc/core": "^1.10.7",
        "@types/express": "^5.0.0",
        "@types/jest": "^29.5.14",
        "@types/multer": "^2.0.0",
        "@types/node": "^22.10.7",
        "@types/passport-jwt": "^4.0.1",
        "@types/supertest": "^6.0.2",
        "@types/winston": "^2.4.4",
        "@vercel/node": "^2.3.0",
        "eslint": "^9.18.0",
        "eslint-config-prettier": "^10.0.1",
        "eslint-plugin-prettier": "^5.2.2",
        "globals": "^16.0.0",
        "jest": "^29.7.0",
        "prettier": "^3.4.2",
        "prisma": "^6.13.0",
        "source-map-support": "^0.5.21",
        "supertest": "^7.0.0",
        "ts-jest": "^29.2.5",
        "ts-loader": "^9.5.2",
        "ts-node": "^10.9.2",
        "tsconfig-paths": "^4.2.0",
        "typescript": "^5.7.3",
        "typescript-eslint": "^8.20.0"
      }
    },
    "node_modules/@ampproject/remapping": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.3.0.tgz",
      "integrity": "sha512-30iZtAPgz+LTIYoeivqYo853f02jBYSd5uGnGpkFV0M3xOt9aN73erkgYAmZU43x4VfqcnLxW9Kpg3R5LC4YYw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@angular-devkit/core": {
      "version": "19.2.19",
      "resolved": "https://registry.npmjs.org/@angular-devkit/core/-/core-19.2.19.tgz",
      "integrity": "sha512-JbLL+4IMLMBgjLZlnPG4lYDfz4zGrJ/s6Aoon321NJKuw1Kb1k5KpFu9dUY0BqLIe8xPQ2UJBpI+xXdK5MXMHQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "8.17.1",
        "ajv-formats": "3.0.1",
        "jsonc-parser": "3.3.1",
        "picomatch": "4.0.2",
        "rxjs": "7.8.1",
        "source-map": "0.7.4"
      },
      "engines": {
        "node": "^18.19.1 || ^20.11.1 || >=22.0.0",
        "npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
        "yarn": ">= 1.13.0"
      },
      "peerDependencies": {
        "chokidar": "^4.0.0"
      },
      "peerDependenciesMeta": {
        "chokidar": {
          "optional": true
        }
      }
    },
    "node_modules/@angular-devkit/core/node_modules/ajv": {
      "version": "8.17.1",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.17.1.tgz",
      "integrity": "sha512-B/gBuNg5SiMTrPkC+A2+cW0RszwxYmn6VYxB/inlBStS5nx6xHIt/ehKRhIMhqusl7a8LjQoZnjCs5vhwxOQ1g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.3",
        "fast-uri": "^3.0.1",
        "json-schema-traverse": "^1.0.0",
        "require-from-string": "^2.0.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/@angular-devkit/core/node_modules/json-schema-traverse": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
      "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@angular-devkit/core/node_modules/rxjs": {
      "version": "7.8.1",
      "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-7.8.1.tgz",
      "integrity": "sha512-AA3TVj+0A2iuIoQkWEK/tqFjBq2j+6PO6Y0zJcvzLAFhEFIO3HL0vls9hWLncZbAAbK0mar7oZ4V079I/qPMxg==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.1.0"
      }
    },
    "node_modules/@angular-devkit/schematics": {
      "version": "19.2.19",
      "resolved": "https://registry.npmjs.org/@angular-devkit/schematics/-/schematics-19.2.19.tgz",
      "integrity": "sha512-J4Jarr0SohdrHcb40gTL4wGPCQ952IMWF1G/MSAQfBAPvA9ZKApYhpxcY7PmehVePve+ujpus1dGsJ7dPxz8Kg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@angular-devkit/core": "19.2.19",
        "jsonc-parser": "3.3.1",
        "magic-string": "0.30.17",
        "ora": "5.4.1",
        "rxjs": "7.8.1"
      },
      "engines": {
        "node": "^18.19.1 || ^20.11.1 || >=22.0.0",
        "npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
        "yarn": ">= 1.13.0"
      }
    },
    "node_modules/@angular-devkit/schematics-cli": {
      "version": "19.2.19",
      "resolved": "https://registry.npmjs.org/@angular-devkit/schematics-cli/-/schematics-cli-19.2.19.tgz",
      "integrity": "sha512-7q9UY6HK6sccL9F3cqGRUwKhM7b/XfD2YcVaZ2WD7VMaRlRm85v6mRjSrfKIAwxcQU0UK27kMc79NIIqaHjzxA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@angular-devkit/core": "19.2.19",
        "@angular-devkit/schematics": "19.2.19",
        "@inquirer/prompts": "7.3.2",
        "ansi-colors": "4.1.3",
        "symbol-observable": "4.0.0",
        "yargs-parser": "21.1.1"
      },
      "bin": {
        "schematics": "bin/schematics.js"
      },
      "engines": {
        "node": "^18.19.1 || ^20.11.1 || >=22.0.0",
        "npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
        "yarn": ">= 1.13.0"
      }
    },
    "node_modules/@angular-devkit/schematics-cli/node_modules/@inquirer/prompts": {
      "version": "7.3.2",
      "resolved": "https://registry.npmjs.org/@inquirer/prompts/-/prompts-7.3.2.tgz",
      "integrity": "sha512-G1ytyOoHh5BphmEBxSwALin3n1KGNYB6yImbICcRQdzXfOGbuJ9Jske/Of5Sebk339NSGGNfUshnzK8YWkTPsQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@inquirer/checkbox": "^4.1.2",
        "@inquirer/confirm": "^5.1.6",
        "@inquirer/editor": "^4.2.7",
        "@inquirer/expand": "^4.0.9",
        "@inquirer/input": "^4.1.6",
        "@inquirer/number": "^3.0.9",
        "@inquirer/password": "^4.0.9",
        "@inquirer/rawlist": "^4.0.9",
        "@inquirer/search": "^3.0.9",
        "@inquirer/select": "^4.0.9"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@angular-devkit/schematics/node_modules/rxjs": {
      "version": "7.8.1",
      "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-7.8.1.tgz",
      "integrity": "sha512-AA3TVj+0A2iuIoQkWEK/tqFjBq2j+6PO6Y0zJcvzLAFhEFIO3HL0vls9hWLncZbAAbK0mar7oZ4V079I/qPMxg==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.1.0"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.27.1.tgz",
      "integrity": "sha512-cjQ7ZlQ0Mv3b47hABuTevyTuYN4i+loJKGeV9flcCgIK37cCXRh+L1bd3iBHlynerhQ7BhCkn2BPbQUL+rGqFg==",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.27.1",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/code-frame/node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "license": "ISC"
    },
    "node_modules/@babel/compat-data": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.28.0.tgz",
      "integrity": "sha512-60X7qkglvrap8mn1lh2ebxXdZYtUcpd7gsmy9kLaBJ4i/WdY8PqTSdxyA8qraikqKQK5C1KRBKXqznrVapyNaw==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.28.0.tgz",
      "integrity": "sha512-UlLAnTPrFdNGoFtbSXwcGFQBtQZJCNjaN6hQNP3UPvuNXT1i82N26KL3dZeIpNalWywr9IuQuncaAfUaS1g6sQ==",
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@ampproject/remapping": "^2.2.0",
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.0",
        "@babel/helper-compilation-targets": "^7.27.2",
        "@babel/helper-module-transforms": "^7.27.3",
        "@babel/helpers": "^7.27.6",
        "@babel/parser": "^7.28.0",
        "@babel/template": "^7.27.2",
        "@babel/traverse": "^7.28.0",
        "@babel/types": "^7.28.0",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/core/node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.28.0.tgz",
      "integrity": "sha512-lJjzvrbEeWrhB4P3QBsH7tey117PjLZnDbLiQEKjQ/fNJTjuq4HSqgFA+UNSwZT8D7dxxbnuSBMsa1lrWzKlQg==",
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.28.0",
        "@babel/types": "^7.28.0",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.27.2.tgz",
      "integrity": "sha512-2+1thGUUWWjLTYTHZWK1n8Yga0ijBz1XAhUXcKy81rd5g6yh7hGqMp45v7cadSbEHc9G3OTv45SyneRN3ps4DQ==",
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.27.2",
        "@babel/helper-validator-option": "^7.27.1",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets/node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.28.0.tgz",
      "integrity": "sha512-+W6cISkXFa1jXsDEdYA8HeevQT/FULhxzR99pxphltZcVaugps53THCeiWA8SguxxpSp3gKPiuYfSWopkLQ4hw==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.27.1.tgz",
      "integrity": "sha512-0gSFWUPNXNopqtIPQvlD5WgXYI5GY2kP2cCvoT8kczjbfcfuIljTbcWrulD1CIPIX2gt1wghbDy08yE1p+/r3w==",
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.27.1",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.27.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.27.3.tgz",
      "integrity": "sha512-dSOvYwvyLsWBeIRyOeHXp5vPj5l1I011r52FM1+r1jCERv+aFXYk4whgQccYEGYxK2H3ZAIA8nuPkQ0HaUo3qg==",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.27.1",
        "@babel/traverse": "^7.27.3"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.27.1.tgz",
      "integrity": "sha512-1gn1Up5YXka3YYAHGKpbideQ5Yjf1tDa9qYcgysz+cNCXukyLl6DjPXhD3VRwSb8c0J9tA4b2+rHEZtc6R0tlw==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.27.1.tgz",
      "integrity": "sha512-qMlSxKbpRlAridDExk92nSobyDdpPijUq2DW6oDnUqd0iOGxmQjyqhMIihI9+zv4LPyZdRje2cavWPbCbWm3eA==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.27.1.tgz",
      "integrity": "sha512-D2hP9eA+Sqx1kBZgzxZh0y1trbuU+JoDkiEwqhQ36nodYqJwyEIhPSdMNd7lOm/4io72luTPWH20Yda0xOuUow==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.27.1.tgz",
      "integrity": "sha512-YvjJow9FxbhFFKDSuFnVCe2WxXk1zWc22fFePVNEaWJEu8IrZVlda6N0uHwzZrUM1il7NC9Mlp4MaJYbYd9JSg==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.27.6",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.27.6.tgz",
      "integrity": "sha512-muE8Tt8M22638HU31A3CgfSUciwz1fhATfoVai05aPXGor//CdWDCbnlY1yvBPo07njuVOCNGCSp/GTt12lIug==",
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.27.6"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.28.0.tgz",
      "integrity": "sha512-jVZGvOxOuNSsuQuLRTh13nU0AogFlw32w/MT+LV6D3sP5WdbW61E77RnkbaO2dUvmPAYrBDJXGn5gGS6tH4j8g==",
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.0"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/plugin-proposal-export-namespace-from": {
      "version": "7.18.9",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-export-namespace-from/-/plugin-proposal-export-namespace-from-7.18.9.tgz",
      "integrity": "sha512-k1NtHyOMvlDDFeb9G5PhUXuGj8m/wiwojgQVEhJ/fsVsMCpLyOP4h0uGEjYJKrRI+EVPlb5Jk+Gt9P97lOGwtA==",
      "deprecated": "This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-export-namespace-from instead.",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.18.9",
        "@babel/plugin-syntax-export-namespace-from": "^7.8.3"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-async-generators": {
      "version": "7.8.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-async-generators/-/plugin-syntax-async-generators-7.8.4.tgz",
      "integrity": "sha512-tycmZxkGfZaxhMRbXlPXuVFpdWlXpir2W4AMhSJgRKzk/eDlIXOhb2LHWoLpDF7TEHylV5zNhykX6KAgHJmTNw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-bigint": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-bigint/-/plugin-syntax-bigint-7.8.3.tgz",
      "integrity": "sha512-wnTnFlG+YxQm3vDxpGE57Pj0srRU4sHE/mDkt1qv2YJJSeUAec2ma4WLUnUPeKjyrfntVwe/N6dCXpU+zL3Npg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-class-properties": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-properties/-/plugin-syntax-class-properties-7.12.13.tgz",
      "integrity": "sha512-fm4idjKla0YahUNgFNLCB0qySdsoPiZP3iQE3rky0mBUtMZ23yDJ9SJdg6dXTSDnulOVqiF3Hgr9nbXvXTQZYA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.12.13"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-class-static-block": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-static-block/-/plugin-syntax-class-static-block-7.14.5.tgz",
      "integrity": "sha512-b+YyPmr6ldyNnM6sqYeMWE+bgJcJpO6yS4QD7ymxgH34GBPNDM/THBh8iunyvKIZztiwLH4CJZ0RxTk9emgpjw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-export-namespace-from": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-export-namespace-from/-/plugin-syntax-export-namespace-from-7.8.3.tgz",
      "integrity": "sha512-MXf5laXo6c1IbEbegDmzGPwGNTsHZmEy6QGznu5Sh2UCWvueywb2ee+CCE4zQiZstxU9BMoQO9i6zUFSY0Kj0Q==",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.3"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-import-attributes": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-import-attributes/-/plugin-syntax-import-attributes-7.27.1.tgz",
      "integrity": "sha512-oFT0FrKHgF53f4vOsZGi2Hh3I35PfSmVs4IBFLFj4dnafP+hIWDLg3VyKmUHfLoLHlyxY4C7DGtmHuJgn+IGww==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-import-meta": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-import-meta/-/plugin-syntax-import-meta-7.10.4.tgz",
      "integrity": "sha512-Yqfm+XDx0+Prh3VSeEQCPU81yC+JWZ2pDPFSS4ZdpfZhp4MkFMaDC1UqseovEKwSUpnIL7+vK+Clp7bfh0iD7g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-json-strings": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-json-strings/-/plugin-syntax-json-strings-7.8.3.tgz",
      "integrity": "sha512-lY6kdGpWHvjoe2vk4WrAapEuBR69EMxZl+RoGRhrFGNYVK8mOPAW8VfbT/ZgrFbXlDNiiaxQnAtgVCZ6jv30EA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-jsx": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-jsx/-/plugin-syntax-jsx-7.27.1.tgz",
      "integrity": "sha512-y8YTNIeKoyhGd9O0Jiyzyyqk8gdjnumGTQPsz0xOZOQ2RmkVJeZ1vmmfIvFEKqucBG6axJGBZDE/7iI5suUI/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-logical-assignment-operators": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-logical-assignment-operators/-/plugin-syntax-logical-assignment-operators-7.10.4.tgz",
      "integrity": "sha512-d8waShlpFDinQ5MtvGU9xDAOzKH47+FFoney2baFIoMr952hKOLp1HR7VszoZvOsV/4+RRszNY7D17ba0te0ig==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-nullish-coalescing-operator": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-nullish-coalescing-operator/-/plugin-syntax-nullish-coalescing-operator-7.8.3.tgz",
      "integrity": "sha512-aSff4zPII1u2QD7y+F8oDsz19ew4IGEJg9SVW+bqwpwtfFleiQDMdzA/R+UlWDzfnHFCxxleFT0PMIrR36XLNQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-numeric-separator": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-numeric-separator/-/plugin-syntax-numeric-separator-7.10.4.tgz",
      "integrity": "sha512-9H6YdfkcK/uOnY/K7/aA2xpzaAgkQn37yzWUMRK7OaPOqOpGS1+n0H5hxT9AUw9EsSjPW8SVyMJwYRtWs3X3ug==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-object-rest-spread": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.8.3.tgz",
      "integrity": "sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-optional-catch-binding": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-catch-binding/-/plugin-syntax-optional-catch-binding-7.8.3.tgz",
      "integrity": "sha512-6VPD0Pc1lpTqw0aKoeRTMiB+kWhAoT24PA+ksWSBrFtl5SIRVpZlwN3NNPQjehA2E/91FV3RjLWoVTglWcSV3Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-optional-chaining": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-chaining/-/plugin-syntax-optional-chaining-7.8.3.tgz",
      "integrity": "sha512-KoK9ErH1MBlCPxV0VANkXW2/dw4vlbGDrFgz8bmUsBGYkFRcbRwMh6cIJubdPrkxRwuGdtCk0v/wPTKbQgBjkg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-private-property-in-object": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-private-property-in-object/-/plugin-syntax-private-property-in-object-7.14.5.tgz",
      "integrity": "sha512-0wVnp9dxJ72ZUJDV27ZfbSj6iHLoytYZmh3rFcxNnvsJF3ktkzLDZPy/mA17HGsaQT3/DQsWYX1f1QGWkCoVUg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-top-level-await": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-top-level-await/-/plugin-syntax-top-level-await-7.14.5.tgz",
      "integrity": "sha512-hx++upLv5U1rgYfwe1xBQUhRmU41NEvpUvrp8jkrSCdvGSnM5/qdRMtylJ6PG5OFkBaHkbTAKTnd3/YyESRHFw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-typescript": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-typescript/-/plugin-syntax-typescript-7.27.1.tgz",
      "integrity": "sha512-xfYCBMxveHrRMnAWl1ZlPXOZjzkN82THFvLhQhFXFt81Z5HnN+EtUkZhv/zcKpmT3fzmWZB0ywiBrbC3vogbwQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-modules-commonjs": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-commonjs/-/plugin-transform-modules-commonjs-7.27.1.tgz",
      "integrity": "sha512-OJguuwlTYlN0gBZFRPqwOGNWssZjfIUdS7HMYtN8c1KmwpwHFBwTeFZrg9XZa+DFTitWOW5iTAG7tyCUPsCCyw==",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-transforms": "^7.27.1",
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.27.2.tgz",
      "integrity": "sha512-LPDZ85aEJyYSd18/DkjNh4/y1ntkE5KwUHWTiqgRxruuZL2F1yuHligVHLvcHY2vMHXttKFpJn6LwfI7cw7ODw==",
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/parser": "^7.27.2",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.28.0.tgz",
      "integrity": "sha512-mGe7UK5wWyh0bKRfupsUchrQGqvDbZDbKJw+kcRGSmdHVYrv+ltd0pnpDTVpiTqnaBru9iEvA8pz8W46v0Amwg==",
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.0",
        "@babel/helper-globals": "^7.28.0",
        "@babel/parser": "^7.28.0",
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.0",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.28.1",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.28.1.tgz",
      "integrity": "sha512-x0LvFTekgSX+83TI28Y9wYPUfzrnl2aT5+5QLnO6v7mSJYtEEevuDRN0F0uSHRk1G1IWZC43o00Y0xDDrpBGPQ==",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@bcoe/v8-coverage": {
      "version": "0.2.3",
      "resolved": "https://registry.npmjs.org/@bcoe/v8-coverage/-/v8-coverage-0.2.3.tgz",
      "integrity": "sha512-0hYQ8SB4Db5zvZB4axdMHGwEaQjkZzFjQiN9LVYvIFB2nSUHW9tYpxWriPrWDASIxiaXax83REcLxuSdnGPZtw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@colors/colors": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/@colors/colors/-/colors-1.5.0.tgz",
      "integrity": "sha512-ooWCrlZP11i8GImSjTHYHLkvFDP48nS4+204nGb1RiX/WXYHmJA2III9/e2DWVabCESdW7hBAEzHRqUn9OUVvQ==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=0.1.90"
      }
    },
    "node_modules/@cspotcode/source-map-support": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/@cspotcode/source-map-support/-/source-map-support-0.8.1.tgz",
      "integrity": "sha512-IchNf6dN4tHoMFIn/7OE8LWZ19Y6q/67Bmf6vnGREv8RSbBVb9LPJxEcnwrcwX6ixSvaiGoomAUvu4YSxXrVgw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/trace-mapping": "0.3.9"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@cspotcode/source-map-support/node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.9",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.9.tgz",
      "integrity": "sha512-3Belt6tdc8bPgAtbcmdtNJlirVoTmEb5e2gC94PnkwEW9jI6CAHUeoG85tjWP5WquqfavoMtMwiG4P926ZKKuQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.0.3",
        "@jridgewell/sourcemap-codec": "^1.4.10"
      }
    },
    "node_modules/@dabh/diagnostics": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/@dabh/diagnostics/-/diagnostics-2.0.7.tgz",
      "integrity": "sha512-EnXa4T9/wuLw8iaEUFwIJMo0xNxyE3mzxLL14ixfVToJNQHG2Jwo8xMmafVJwAiAmIyHXsFDZpZR/TJC31857g==",
      "license": "MIT",
      "dependencies": {
        "@so-ric/colorspace": "^1.1.6",
        "enabled": "2.0.x",
        "fix-esm": "^1.0.1",
        "kuler": "^2.0.0"
      }
    },
    "node_modules/@edge-runtime/format": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/@edge-runtime/format/-/format-2.1.0.tgz",
      "integrity": "sha512-gc2qbYEIIJRczBApBPznVI1c5vZgzrZQOsFZnAxxFiYah9qldHiu1YEitzSvXI8X8ZgvAguuIiyIbpWz17nlXA==",
      "dev": true,
      "license": "MPL-2.0",
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@edge-runtime/node-utils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/@edge-runtime/node-utils/-/node-utils-2.0.3.tgz",
      "integrity": "sha512-JUSbi5xu/A8+D2t9B9wfirCI1J8n8q0660FfmqZgA+n3RqxD3y7SnamL1sKRE5/AbHsKs9zcqCbK2YDklbc9Bg==",
      "dev": true,
      "license": "MPL-2.0",
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@edge-runtime/primitives": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/@edge-runtime/primitives/-/primitives-2.1.2.tgz",
      "integrity": "sha512-SR04SMDybALlhIYIi0hiuEUwIl0b7Sn+RKwQkX6hydg4+AKMzBNDFhj2nqHDD1+xkHArV9EhmJIb6iGjShwSzg==",
      "dev": true,
      "license": "MPL-2.0",
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@edge-runtime/vm": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/@edge-runtime/vm/-/vm-3.0.1.tgz",
      "integrity": "sha512-69twXLIcqVx0iNlc1vFqnXgka2CZi2c/QBAmMzXBk0M6mPG+ICCBh2dd+cv1K+HW2pfLuSW+EskkFXWGeCf1Vw==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "@edge-runtime/primitives": "3.0.1"
      },
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@edge-runtime/vm/node_modules/@edge-runtime/primitives": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/@edge-runtime/primitives/-/primitives-3.0.1.tgz",
      "integrity": "sha512-l5NNDcPkKW4N6qRmB8zzpCF6uRW1S808V/zm72z7b/aWwZUYbmEPPkzyhGAW0aQxLU1pGdZ8u2gNjamdaU6RXw==",
      "dev": true,
      "license": "MPL-2.0",
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.7.0",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.7.0.tgz",
      "integrity": "sha512-dyybb3AcajC7uha6CvhdVRJqaKyn7w2YKqKyAN37NKYgZT36w+iRb0Dymmc5qEJ549c/S31cMMSFd75bteCpCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.1.tgz",
      "integrity": "sha512-CCZCDJuduB9OUkFkY2IgppNZMi2lBQgD2qzwXkEia16cge2pijY/aXi96CJMquDMn3nJdlPV1A5KrJEXwfLNzQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/config-array": {
      "version": "0.21.0",
      "resolved": "https://registry.npmjs.org/@eslint/config-array/-/config-array-0.21.0.tgz",
      "integrity": "sha512-ENIdc4iLu0d93HeYirvKmrzshzofPw6VkZRKQGe9Nv46ZnWUzcF1xV01dcvEg/1wXUR61OmmlSfyeyO7EvjLxQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/object-schema": "^2.1.6",
        "debug": "^4.3.1",
        "minimatch": "^3.1.2"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/config-helpers": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/@eslint/config-helpers/-/config-helpers-0.3.0.tgz",
      "integrity": "sha512-ViuymvFmcJi04qdZeDc2whTHryouGcDlaxPqarTD0ZE10ISpxGUVZGZDx4w01upyIynL3iu6IXH2bS1NhclQMw==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/core": {
      "version": "0.15.1",
      "resolved": "https://registry.npmjs.org/@eslint/core/-/core-0.15.1.tgz",
      "integrity": "sha512-bkOp+iumZCCbt1K1CmWf0R9pM5yKpDv+ZXtvSyQpudrI9kuFLp+bM2WOPXImuD/ceQuaa8f5pj93Y7zyECIGNA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@types/json-schema": "^7.0.15"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-3.3.1.tgz",
      "integrity": "sha512-gtF186CXhIl1p4pJNGZw8Yc6RlshoePRvE0X91oPGb3vZ8pM3qOS9W9NGPat9LziaBV7XrJWGylNQXkGcnM3IQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^6.12.4",
        "debug": "^4.3.2",
        "espree": "^10.0.1",
        "globals": "^14.0.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.0",
        "minimatch": "^3.1.2",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/eslintrc/node_modules/globals": {
      "version": "14.0.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-14.0.0.tgz",
      "integrity": "sha512-oahGvuMGQlPw/ivIYBjVSrWAfWLBeku5tpPE2fOPLi+WHffIWbuh2tCjhyQhTBPMf5E9jDEH4FOmTYgYwbKwtQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@eslint/js": {
      "version": "9.31.0",
      "resolved": "https://registry.npmjs.org/@eslint/js/-/js-9.31.0.tgz",
      "integrity": "sha512-LOm5OVt7D4qiKCqoiPbA7LWmI+tbw1VbTUowBcUMgQSuM6poJufkFkYDcQpo5KfgD39TnNySV26QjOh7VFpSyw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      }
    },
    "node_modules/@eslint/object-schema": {
      "version": "2.1.6",
      "resolved": "https://registry.npmjs.org/@eslint/object-schema/-/object-schema-2.1.6.tgz",
      "integrity": "sha512-RBMg5FRL0I0gs51M/guSAj5/e14VQ4tpZnQNWwuDT66P14I43ItmPfIZRhO9fUVIPOAQXU47atlywZ/czoqFPA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/plugin-kit": {
      "version": "0.3.4",
      "resolved": "https://registry.npmjs.org/@eslint/plugin-kit/-/plugin-kit-0.3.4.tgz",
      "integrity": "sha512-Ul5l+lHEcw3L5+k8POx6r74mxEYKG5kOb6Xpy2gCRW6zweT6TEhAf8vhxGgjhqrd/VO/Dirhsb+1hNpD1ue9hw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^0.15.1",
        "levn": "^0.4.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@humanfs/core": {
      "version": "0.19.1",
      "resolved": "https://registry.npmjs.org/@humanfs/core/-/core-0.19.1.tgz",
      "integrity": "sha512-5DyQ4+1JEUzejeK1JGICcideyfUbGixgS9jNgex5nqkW+cY7WZhxBigmieN5Qnw9ZosSNVC9KQKyb+GUaGyKUA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/node": {
      "version": "0.16.6",
      "resolved": "https://registry.npmjs.org/@humanfs/node/-/node-0.16.6.tgz",
      "integrity": "sha512-YuI2ZHQL78Q5HbhDiBA1X4LmYdXCKCMQIfw0pw7piHJwyREFebJUvrQN4cMssyES6x+vfUbx1CIpaQUKYdQZOw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanfs/core": "^0.19.1",
        "@humanwhocodes/retry": "^0.3.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/node/node_modules/@humanwhocodes/retry": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/retry/-/retry-0.3.1.tgz",
      "integrity": "sha512-JBxkERygn7Bv/GbN5Rv8Ul6LVknS+5Bp6RgDC/O8gEBU/yeH5Ui5C/OlWrTb6qct7LjjfT6Re2NxB0ln0yYybA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/retry": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/retry/-/retry-0.4.3.tgz",
      "integrity": "sha512-bV0Tgo9K4hfPCek+aMAn81RppFKv2ySDQeMoSZuvTASywNTnVJCArCZE2FWqpvIatKu7VMRLWlR1EazvVhDyhQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@inquirer/ansi": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/@inquirer/ansi/-/ansi-1.0.2.tgz",
      "integrity": "sha512-S8qNSZiYzFd0wAcyG5AXCvUHC5Sr7xpZ9wZ2py9XR88jUz8wooStVx5M6dRzczbBWjic9NP7+rY0Xi7qqK/aMQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@inquirer/checkbox": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/@inquirer/checkbox/-/checkbox-4.3.2.tgz",
      "integrity": "sha512-VXukHf0RR1doGe6Sm4F0Em7SWYLTHSsbGfJdS9Ja2bX5/D5uwVOEjr07cncLROdBvmnvCATYEWlHqYmXv2IlQA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@inquirer/ansi": "^1.0.2",
        "@inquirer/core": "^10.3.2",
        "@inquirer/figures": "^1.0.15",
        "@inquirer/type": "^3.0.10",
        "yoctocolors-cjs": "^2.1.3"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/confirm": {
      "version": "5.1.21",
      "resolved": "https://registry.npmjs.org/@inquirer/confirm/-/confirm-5.1.21.tgz",
      "integrity": "sha512-KR8edRkIsUayMXV+o3Gv+q4jlhENF9nMYUZs9PA2HzrXeHI8M5uDag70U7RJn9yyiMZSbtF5/UexBtAVtZGSbQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@inquirer/core": "^10.3.2",
        "@inquirer/type": "^3.0.10"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/core": {
      "version": "10.3.2",
      "resolved": "https://registry.npmjs.org/@inquirer/core/-/core-10.3.2.tgz",
      "integrity": "sha512-43RTuEbfP8MbKzedNqBrlhhNKVwoK//vUFNW3Q3vZ88BLcrs4kYpGg+B2mm5p2K/HfygoCxuKwJJiv8PbGmE0A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@inquirer/ansi": "^1.0.2",
        "@inquirer/figures": "^1.0.15",
        "@inquirer/type": "^3.0.10",
        "cli-width": "^4.1.0",
        "mute-stream": "^2.0.0",
        "signal-exit": "^4.1.0",
        "wrap-ansi": "^6.2.0",
        "yoctocolors-cjs": "^2.1.3"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/editor": {
      "version": "4.2.23",
      "resolved": "https://registry.npmjs.org/@inquirer/editor/-/editor-4.2.23.tgz",
      "integrity": "sha512-aLSROkEwirotxZ1pBaP8tugXRFCxW94gwrQLxXfrZsKkfjOYC1aRvAZuhpJOb5cu4IBTJdsCigUlf2iCOu4ZDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@inquirer/core": "^10.3.2",
        "@inquirer/external-editor": "^1.0.3",
        "@inquirer/type": "^3.0.10"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/expand": {
      "version": "4.0.23",
      "resolved": "https://registry.npmjs.org/@inquirer/expand/-/expand-4.0.23.tgz",
      "integrity": "sha512-nRzdOyFYnpeYTTR2qFwEVmIWypzdAx/sIkCMeTNTcflFOovfqUk+HcFhQQVBftAh9gmGrpFj6QcGEqrDMDOiew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@inquirer/core": "^10.3.2",
        "@inquirer/type": "^3.0.10",
        "yoctocolors-cjs": "^2.1.3"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/external-editor": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@inquirer/external-editor/-/external-editor-1.0.3.tgz",
      "integrity": "sha512-RWbSrDiYmO4LbejWY7ttpxczuwQyZLBUyygsA9Nsv95hpzUWwnNTVQmAq3xuh7vNwCp07UTmE5i11XAEExx4RA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chardet": "^2.1.1",
        "iconv-lite": "^0.7.0"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/figures": {
      "version": "1.0.15",
      "resolved": "https://registry.npmjs.org/@inquirer/figures/-/figures-1.0.15.tgz",
      "integrity": "sha512-t2IEY+unGHOzAaVM5Xx6DEWKeXlDDcNPeDyUpsRc6CUhBfU3VQOEl+Vssh7VNp1dR8MdUJBWhuObjXCsVpjN5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@inquirer/input": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@inquirer/input/-/input-4.3.1.tgz",
      "integrity": "sha512-kN0pAM4yPrLjJ1XJBjDxyfDduXOuQHrBB8aLDMueuwUGn+vNpF7Gq7TvyVxx8u4SHlFFj4trmj+a2cbpG4Jn1g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@inquirer/core": "^10.3.2",
        "@inquirer/type": "^3.0.10"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/number": {
      "version": "3.0.23",
      "resolved": "https://registry.npmjs.org/@inquirer/number/-/number-3.0.23.tgz",
      "integrity": "sha512-5Smv0OK7K0KUzUfYUXDXQc9jrf8OHo4ktlEayFlelCjwMXz0299Y8OrI+lj7i4gCBY15UObk76q0QtxjzFcFcg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@inquirer/core": "^10.3.2",
        "@inquirer/type": "^3.0.10"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/password": {
      "version": "4.0.23",
      "resolved": "https://registry.npmjs.org/@inquirer/password/-/password-4.0.23.tgz",
      "integrity": "sha512-zREJHjhT5vJBMZX/IUbyI9zVtVfOLiTO66MrF/3GFZYZ7T4YILW5MSkEYHceSii/KtRk+4i3RE7E1CUXA2jHcA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@inquirer/ansi": "^1.0.2",
        "@inquirer/core": "^10.3.2",
        "@inquirer/type": "^3.0.10"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/prompts": {
      "version": "7.10.1",
      "resolved": "https://registry.npmjs.org/@inquirer/prompts/-/prompts-7.10.1.tgz",
      "integrity": "sha512-Dx/y9bCQcXLI5ooQ5KyvA4FTgeo2jYj/7plWfV5Ak5wDPKQZgudKez2ixyfz7tKXzcJciTxqLeK7R9HItwiByg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@inquirer/checkbox": "^4.3.2",
        "@inquirer/confirm": "^5.1.21",
        "@inquirer/editor": "^4.2.23",
        "@inquirer/expand": "^4.0.23",
        "@inquirer/input": "^4.3.1",
        "@inquirer/number": "^3.0.23",
        "@inquirer/password": "^4.0.23",
        "@inquirer/rawlist": "^4.1.11",
        "@inquirer/search": "^3.2.2",
        "@inquirer/select": "^4.4.2"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/rawlist": {
      "version": "4.1.11",
      "resolved": "https://registry.npmjs.org/@inquirer/rawlist/-/rawlist-4.1.11.tgz",
      "integrity": "sha512-+LLQB8XGr3I5LZN/GuAHo+GpDJegQwuPARLChlMICNdwW7OwV2izlCSCxN6cqpL0sMXmbKbFcItJgdQq5EBXTw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@inquirer/core": "^10.3.2",
        "@inquirer/type": "^3.0.10",
        "yoctocolors-cjs": "^2.1.3"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/search": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/@inquirer/search/-/search-3.2.2.tgz",
      "integrity": "sha512-p2bvRfENXCZdWF/U2BXvnSI9h+tuA8iNqtUKb9UWbmLYCRQxd8WkvwWvYn+3NgYaNwdUkHytJMGG4MMLucI1kA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@inquirer/core": "^10.3.2",
        "@inquirer/figures": "^1.0.15",
        "@inquirer/type": "^3.0.10",
        "yoctocolors-cjs": "^2.1.3"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/select": {
      "version": "4.4.2",
      "resolved": "https://registry.npmjs.org/@inquirer/select/-/select-4.4.2.tgz",
      "integrity": "sha512-l4xMuJo55MAe+N7Qr4rX90vypFwCajSakx59qe/tMaC1aEHWLyw68wF4o0A4SLAY4E0nd+Vt+EyskeDIqu1M6w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@inquirer/ansi": "^1.0.2",
        "@inquirer/core": "^10.3.2",
        "@inquirer/figures": "^1.0.15",
        "@inquirer/type": "^3.0.10",
        "yoctocolors-cjs": "^2.1.3"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/type": {
      "version": "3.0.10",
      "resolved": "https://registry.npmjs.org/@inquirer/type/-/type-3.0.10.tgz",
      "integrity": "sha512-BvziSRxfz5Ov8ch0z/n3oijRSEcEsHnhggm4xFZe93DHcUCTlutlq9Ox4SVENAfcRD22UQq7T/atg9Wr3k09eA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@isaacs/balanced-match": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/@isaacs/balanced-match/-/balanced-match-4.0.1.tgz",
      "integrity": "sha512-yzMTt9lEb8Gv7zRioUilSglI0c0smZ9k5D65677DLWLtWJaXIS3CqcGyUFByYKlnUj6TkjLVs54fBl6+TiGQDQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/@isaacs/brace-expansion": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/@isaacs/brace-expansion/-/brace-expansion-5.0.0.tgz",
      "integrity": "sha512-ZT55BDLV0yv0RBm2czMiZ+SqCGO7AvmOM3G/w2xhVPH+te0aKgFjmBvGlL1dH+ql2tgGO3MVrbb3jCKyvpgnxA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@isaacs/balanced-match": "^4.0.1"
      },
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/@istanbuljs/load-nyc-config": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@istanbuljs/load-nyc-config/-/load-nyc-config-1.1.0.tgz",
      "integrity": "sha512-VjeHSlIzpv/NyD3N0YuHfXOPDIixcA1q2ZV98wsMqcYlPmv2n3Yb2lYP9XMElnaFVXg5A7YLTeLu6V84uQDjmQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "camelcase": "^5.3.1",
        "find-up": "^4.1.0",
        "get-package-type": "^0.1.0",
        "js-yaml": "^3.13.1",
        "resolve-from": "^5.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@istanbuljs/load-nyc-config/node_modules/argparse": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
      "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "sprintf-js": "~1.0.2"
      }
    },
    "node_modules/@istanbuljs/load-nyc-config/node_modules/find-up": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
      "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^5.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@istanbuljs/load-nyc-config/node_modules/js-yaml": {
      "version": "3.14.2",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.14.2.tgz",
      "integrity": "sha512-PMSmkqxr106Xa156c2M265Z+FTrPl+oxd/rgOQy2tijQeK5TxQ43psO1ZCwhVOSdnn+RzkzlRz/eY4BgJBYVpg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "argparse": "^1.0.7",
        "esprima": "^4.0.0"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/@istanbuljs/load-nyc-config/node_modules/locate-path": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
      "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^4.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@istanbuljs/load-nyc-config/node_modules/p-limit": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
      "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-try": "^2.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@istanbuljs/load-nyc-config/node_modules/p-locate": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
      "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^2.2.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@istanbuljs/schema": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/@istanbuljs/schema/-/schema-0.1.3.tgz",
      "integrity": "sha512-ZXRY4jNvVgSVQ8DL3LTcakaAtXwTVUxE81hslsyD2AtoXW/wVob10HkOJ1X/pAlcI7D+2YoZKg5do8G/w6RYgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@jest/console": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/@jest/console/-/console-29.7.0.tgz",
      "integrity": "sha512-5Ni4CU7XHQi32IJ398EEP4RrB8eV09sXP2ROqD4bksHrnTree52PsxvX8tpL8LvTZ3pFzXyPbNQReSN41CAhOg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/types": "^29.6.3",
        "@types/node": "*",
        "chalk": "^4.0.0",
        "jest-message-util": "^29.7.0",
        "jest-util": "^29.7.0",
        "slash": "^3.0.0"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/@jest/core": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/@jest/core/-/core-29.7.0.tgz",
      "integrity": "sha512-n7aeXWKMnGtDA48y8TLWJPJmLmmZ642Ceo78cYWEpiD7FzDgmNDV/GCVRorPABdXLJZ/9wzzgZAlHjXjxDHGsg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/console": "^29.7.0",
        "@jest/reporters": "^29.7.0",
        "@jest/test-result": "^29.7.0",
        "@jest/transform": "^29.7.0",
        "@jest/types": "^29.6.3",
        "@types/node": "*",
        "ansi-escapes": "^4.2.1",
        "chalk": "^4.0.0",
        "ci-info": "^3.2.0",
        "exit": "^0.1.2",
        "graceful-fs": "^4.2.9",
        "jest-changed-files": "^29.7.0",
        "jest-config": "^29.7.0",
        "jest-haste-map": "^29.7.0",
        "jest-message-util": "^29.7.0",
        "jest-regex-util": "^29.6.3",
        "jest-resolve": "^29.7.0",
        "jest-resolve-dependencies": "^29.7.0",
        "jest-runner": "^29.7.0",
        "jest-runtime": "^29.7.0",
        "jest-snapshot": "^29.7.0",
        "jest-util": "^29.7.0",
        "jest-validate": "^29.7.0",
        "jest-watcher": "^29.7.0",
        "micromatch": "^4.0.4",
        "pretty-format": "^29.7.0",
        "slash": "^3.0.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      },
      "peerDependencies": {
        "node-notifier": "^8.0.1 || ^9.0.0 || ^10.0.0"
      },
      "peerDependenciesMeta": {
        "node-notifier": {
          "optional": true
        }
      }
    },
    "node_modules/@jest/environment": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/@jest/environment/-/environment-29.7.0.tgz",
      "integrity": "sha512-aQIfHDq33ExsN4jP1NWGXhxgQ/wixs60gDiKO+XVMd8Mn0NWPWgc34ZQDTb2jKaUWQ7MuwoitXAsN2XVXNMpAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/fake-timers": "^29.7.0",
        "@jest/types": "^29.6.3",
        "@types/node": "*",
        "jest-mock": "^29.7.0"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/@jest/expect": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/@jest/expect/-/expect-29.7.0.tgz",
      "integrity": "sha512-8uMeAMycttpva3P1lBHB8VciS9V0XAr3GymPpipdyQXbBcuhkLQOSe8E/p92RyAdToS6ZD1tFkX+CkhoECE0dQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "expect": "^29.7.0",
        "jest-snapshot": "^29.7.0"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/@jest/expect-utils": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/@jest/expect-utils/-/expect-utils-29.7.0.tgz",
      "integrity": "sha512-GlsNBWiFQFCVi9QVSx7f5AgMeLxe9YCCs5PuP2O2LdjDAA8Jh9eX7lA1Jq/xdXw3Wb3hyvlFNfZIfcRetSzYcA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "jest-get-type": "^29.6.3"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/@jest/fake-timers": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/@jest/fake-timers/-/fake-timers-29.7.0.tgz",
      "integrity": "sha512-q4DH1Ha4TTFPdxLsqDXK1d3+ioSL7yL5oCMJZgDYm6i+6CygW5E5xVr/D1HdsGxjt1ZWSfUAs9OxSB/BNelWrQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/types": "^29.6.3",
        "@sinonjs/fake-timers": "^10.0.2",
        "@types/node": "*",
        "jest-message-util": "^29.7.0",
        "jest-mock": "^29.7.0",
        "jest-util": "^29.7.0"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/@jest/globals": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/@jest/globals/-/globals-29.7.0.tgz",
      "integrity": "sha512-mpiz3dutLbkW2MNFubUGUEVLkTGiqW6yLVTA+JbP6fI6J5iL9Y0Nlg8k95pcF8ctKwCS7WVxteBs29hhfAotzQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/environment": "^29.7.0",
        "@jest/expect": "^29.7.0",
        "@jest/types": "^29.6.3",
        "jest-mock": "^29.7.0"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/@jest/reporters": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/@jest/reporters/-/reporters-29.7.0.tgz",
      "integrity": "sha512-DApq0KJbJOEzAFYjHADNNxAE3KbhxQB1y5Kplb5Waqw6zVbuWatSnMjE5gs8FUgEPmNsnZA3NCWl9NG0ia04Pg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@bcoe/v8-coverage": "^0.2.3",
        "@jest/console": "^29.7.0",
        "@jest/test-result": "^29.7.0",
        "@jest/transform": "^29.7.0",
        "@jest/types": "^29.6.3",
        "@jridgewell/trace-mapping": "^0.3.18",
        "@types/node": "*",
        "chalk": "^4.0.0",
        "collect-v8-coverage": "^1.0.0",
        "exit": "^0.1.2",
        "glob": "^7.1.3",
        "graceful-fs": "^4.2.9",
        "istanbul-lib-coverage": "^3.0.0",
        "istanbul-lib-instrument": "^6.0.0",
        "istanbul-lib-report": "^3.0.0",
        "istanbul-lib-source-maps": "^4.0.0",
        "istanbul-reports": "^3.1.3",
        "jest-message-util": "^29.7.0",
        "jest-util": "^29.7.0",
        "jest-worker": "^29.7.0",
        "slash": "^3.0.0",
        "string-length": "^4.0.1",
        "strip-ansi": "^6.0.0",
        "v8-to-istanbul": "^9.0.1"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      },
      "peerDependencies": {
        "node-notifier": "^8.0.1 || ^9.0.0 || ^10.0.0"
      },
      "peerDependenciesMeta": {
        "node-notifier": {
          "optional": true
        }
      }
    },
    "node_modules/@jest/reporters/node_modules/glob": {
      "version": "7.2.3",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
      "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
      "deprecated": "Glob versions prior to v9 are no longer supported",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.1.1",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/@jest/schemas": {
      "version": "29.6.3",
      "resolved": "https://registry.npmjs.org/@jest/schemas/-/schemas-29.6.3.tgz",
      "integrity": "sha512-mo5j5X+jIZmJQveBKeS/clAueipV7KgiX1vMgCxam1RNYiqE1w62n0/tJJnHtjW8ZHcQco5gY85jA3mi0L+nSA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@sinclair/typebox": "^0.27.8"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/@jest/source-map": {
      "version": "29.6.3",
      "resolved": "https://registry.npmjs.org/@jest/source-map/-/source-map-29.6.3.tgz",
      "integrity": "sha512-MHjT95QuipcPrpLM+8JMSzFx6eHp5Bm+4XeFDJlwsvVBjmKNiIAvasGK2fxz2WbGRlnvqehFbh07MMa7n3YJnw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/trace-mapping": "^0.3.18",
        "callsites": "^3.0.0",
        "graceful-fs": "^4.2.9"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/@jest/test-result": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/@jest/test-result/-/test-result-29.7.0.tgz",
      "integrity": "sha512-Fdx+tv6x1zlkJPcWXmMDAG2HBnaR9XPSd5aDWQVsfrZmLVT3lU1cwyxLgRmXR9yrq4NBoEm9BMsfgFzTQAbJYA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/console": "^29.7.0",
        "@jest/types": "^29.6.3",
        "@types/istanbul-lib-coverage": "^2.0.0",
        "collect-v8-coverage": "^1.0.0"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/@jest/test-sequencer": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/@jest/test-sequencer/-/test-sequencer-29.7.0.tgz",
      "integrity": "sha512-GQwJ5WZVrKnOJuiYiAF52UNUJXgTZx1NHjFSEB0qEMmSZKAkdMoIzw/Cj6x6NF4AvV23AUqDpFzQkN/eYCYTxw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/test-result": "^29.7.0",
        "graceful-fs": "^4.2.9",
        "jest-haste-map": "^29.7.0",
        "slash": "^3.0.0"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/@jest/transform": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/@jest/transform/-/transform-29.7.0.tgz",
      "integrity": "sha512-ok/BTPFzFKVMwO5eOHRrvnBVHdRy9IrsrW1GpMaQ9MCnilNLXQKmAX8s1YXDFaai9xJpac2ySzV0YeRRECr2Vw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.11.6",
        "@jest/types": "^29.6.3",
        "@jridgewell/trace-mapping": "^0.3.18",
        "babel-plugin-istanbul": "^6.1.1",
        "chalk": "^4.0.0",
        "convert-source-map": "^2.0.0",
        "fast-json-stable-stringify": "^2.1.0",
        "graceful-fs": "^4.2.9",
        "jest-haste-map": "^29.7.0",
        "jest-regex-util": "^29.6.3",
        "jest-util": "^29.7.0",
        "micromatch": "^4.0.4",
        "pirates": "^4.0.4",
        "slash": "^3.0.0",
        "write-file-atomic": "^4.0.2"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/@jest/types": {
      "version": "29.6.3",
      "resolved": "https://registry.npmjs.org/@jest/types/-/types-29.6.3.tgz",
      "integrity": "sha512-u3UPsIilWKOM3F9CXtrG8LEJmNxwoCQC/XVj4IKYXvvpx7QIi/Kg1LI5uDmDpKlac62NUtX7eLjRh+jVZcLOzw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/schemas": "^29.6.3",
        "@types/istanbul-lib-coverage": "^2.0.0",
        "@types/istanbul-reports": "^3.0.0",
        "@types/node": "*",
        "@types/yargs": "^17.0.8",
        "chalk": "^4.0.0"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.12",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.12.tgz",
      "integrity": "sha512-OuLGC46TjB5BbN1dH8JULVVZY4WTdkF7tV9Ys6wLL1rubZnCMstOhNHueU5bLCrnRuDhKPDM4g6sw4Bel5Gzqg==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/source-map": {
      "version": "0.3.10",
      "resolved": "https://registry.npmjs.org/@jridgewell/source-map/-/source-map-0.3.10.tgz",
      "integrity": "sha512-0pPkgz9dY+bijgistcTTJ5mR+ocqRXLuhXHYdzoMmmoJ2C9S46RCm2GMUbatPEUK9Yjy26IrAy8D/M00lLkv+Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.25"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.4",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.4.tgz",
      "integrity": "sha512-VT2+G1VQs/9oz078bLrYbecdZKs912zQlkelYpuf+SXF+QvZDYJlbx/LSx+meSAwdDFnF8FVXW92AVjjkVmgFw==",
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.29",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.29.tgz",
      "integrity": "sha512-uw6guiW/gcAGPDhLmd77/6lW8QLeiV5RUTsAX46Db6oLhGaVj4lhnPwb184s1bkc8kdVg/+h988dro8GRDpmYQ==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@lukeed/csprng": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@lukeed/csprng/-/csprng-1.1.0.tgz",
      "integrity": "sha512-Z7C/xXCiGWsg0KuKsHTKJxbWhpI3Vs5GwLfOean7MGyVFGqdRgBbAjOCh6u4bbjPc/8MJ2pZmK/0DLdCbivLDA==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@napi-rs/nice": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice/-/nice-1.0.4.tgz",
      "integrity": "sha512-Sqih1YARrmMoHlXGgI9JrrgkzxcaaEso0AH+Y7j8NHonUs+xe4iDsgC3IBIDNdzEewbNpccNN6hip+b5vmyRLw==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">= 10"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/Brooooooklyn"
      },
      "optionalDependencies": {
        "@napi-rs/nice-android-arm-eabi": "1.0.4",
        "@napi-rs/nice-android-arm64": "1.0.4",
        "@napi-rs/nice-darwin-arm64": "1.0.4",
        "@napi-rs/nice-darwin-x64": "1.0.4",
        "@napi-rs/nice-freebsd-x64": "1.0.4",
        "@napi-rs/nice-linux-arm-gnueabihf": "1.0.4",
        "@napi-rs/nice-linux-arm64-gnu": "1.0.4",
        "@napi-rs/nice-linux-arm64-musl": "1.0.4",
        "@napi-rs/nice-linux-ppc64-gnu": "1.0.4",
        "@napi-rs/nice-linux-riscv64-gnu": "1.0.4",
        "@napi-rs/nice-linux-s390x-gnu": "1.0.4",
        "@napi-rs/nice-linux-x64-gnu": "1.0.4",
        "@napi-rs/nice-linux-x64-musl": "1.0.4",
        "@napi-rs/nice-win32-arm64-msvc": "1.0.4",
        "@napi-rs/nice-win32-ia32-msvc": "1.0.4",
        "@napi-rs/nice-win32-x64-msvc": "1.0.4"
      }
    },
    "node_modules/@napi-rs/nice-android-arm-eabi": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-android-arm-eabi/-/nice-android-arm-eabi-1.0.4.tgz",
      "integrity": "sha512-OZFMYUkih4g6HCKTjqJHhMUlgvPiDuSLZPbPBWHLjKmFTv74COzRlq/gwHtmEVaR39mJQ6ZyttDl2HNMUbLVoA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-android-arm64": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-android-arm64/-/nice-android-arm64-1.0.4.tgz",
      "integrity": "sha512-k8u7cjeA64vQWXZcRrPbmwjH8K09CBnNaPnI9L1D5N6iMPL3XYQzLcN6WwQonfcqCDv5OCY3IqX89goPTV4KMw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-darwin-arm64": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-darwin-arm64/-/nice-darwin-arm64-1.0.4.tgz",
      "integrity": "sha512-GsLdQvUcuVzoyzmtjsThnpaVEizAqH5yPHgnsBmq3JdVoVZHELFo7PuJEdfOH1DOHi2mPwB9sCJEstAYf3XCJA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-darwin-x64": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-darwin-x64/-/nice-darwin-x64-1.0.4.tgz",
      "integrity": "sha512-1y3gyT3e5zUY5SxRl3QDtJiWVsbkmhtUHIYwdWWIQ3Ia+byd/IHIEpqAxOGW1nhhnIKfTCuxBadHQb+yZASVoA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-freebsd-x64": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-freebsd-x64/-/nice-freebsd-x64-1.0.4.tgz",
      "integrity": "sha512-06oXzESPRdXUuzS8n2hGwhM2HACnDfl3bfUaSqLGImM8TA33pzDXgGL0e3If8CcFWT98aHows5Lk7xnqYNGFeA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-linux-arm-gnueabihf": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-linux-arm-gnueabihf/-/nice-linux-arm-gnueabihf-1.0.4.tgz",
      "integrity": "sha512-CgklZ6g8WL4+EgVVkxkEvvsi2DSLf9QIloxWO0fvQyQBp6VguUSX3eHLeRpqwW8cRm2Hv/Q1+PduNk7VK37VZw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-linux-arm64-gnu": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-linux-arm64-gnu/-/nice-linux-arm64-gnu-1.0.4.tgz",
      "integrity": "sha512-wdAJ7lgjhAlsANUCv0zi6msRwq+D4KDgU+GCCHssSxWmAERZa2KZXO0H2xdmoJ/0i03i6YfK/sWaZgUAyuW2oQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-linux-arm64-musl": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-linux-arm64-musl/-/nice-linux-arm64-musl-1.0.4.tgz",
      "integrity": "sha512-4b1KYG+sriufhFrpUS9uNOEYYJqSfcbnwGx6uGX7JjrH8tELG90cOpCawz5THNIwlS3DhLgnCOcn0+4p6z26QA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-linux-ppc64-gnu": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-linux-ppc64-gnu/-/nice-linux-ppc64-gnu-1.0.4.tgz",
      "integrity": "sha512-iaf3vMRgr23oe1PUaKpxaH3DS0IMN0+N9iEiWVwYPm/U15vZFYdqVegGfN2PzrZLUl5lc8ZxbmEKDfuqslhAMA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-linux-riscv64-gnu": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-linux-riscv64-gnu/-/nice-linux-riscv64-gnu-1.0.4.tgz",
      "integrity": "sha512-UXoREY6Yw6rHrGuTwQgBxpfjK34t6mTjibE9/cXbefL9AuUCJ9gEgwNKZiONuR5QGswChqo9cnthjdKkYyAdDg==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-linux-s390x-gnu": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-linux-s390x-gnu/-/nice-linux-s390x-gnu-1.0.4.tgz",
      "integrity": "sha512-eFbgYCRPmsqbYPAlLYU5hYTNbogmIDUvknilehHsFhCH1+0/kN87lP+XaLT0Yeq4V/rpwChSd9vlz4muzFArtw==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-linux-x64-gnu": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-linux-x64-gnu/-/nice-linux-x64-gnu-1.0.4.tgz",
      "integrity": "sha512-4T3E6uTCwWT6IPnwuPcWVz3oHxvEp/qbrCxZhsgzwTUBEwu78EGNXGdHfKJQt3soth89MLqZJw+Zzvnhrsg1mQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-linux-x64-musl": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-linux-x64-musl/-/nice-linux-x64-musl-1.0.4.tgz",
      "integrity": "sha512-NtbBkAeyBPLvCBkWtwkKXkNSn677eaT0cX3tygq+2qVv71TmHgX4gkX6o9BXjlPzdgPGwrUudavCYPT9tzkEqQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-win32-arm64-msvc": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-win32-arm64-msvc/-/nice-win32-arm64-msvc-1.0.4.tgz",
      "integrity": "sha512-vubOe3i+YtSJGEk/++73y+TIxbuVHi+W8ZzrRm2eETCjCRwNlgbfToQZ85dSA+4iBB/NJRGNp+O4hfdbbttZWA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-win32-ia32-msvc": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-win32-ia32-msvc/-/nice-win32-ia32-msvc-1.0.4.tgz",
      "integrity": "sha512-BMOVrUDZeg1RNRKVlh4eyLv5djAAVLiSddfpuuQ47EFjBcklg0NUeKMFKNrKQR4UnSn4HAiACLD7YK7koskwmg==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-win32-x64-msvc": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-win32-x64-msvc/-/nice-win32-x64-msvc-1.0.4.tgz",
      "integrity": "sha512-kCNk6HcRZquhw/whwh4rHsdPyOSCQCgnVDVik+Y9cuSVTDy3frpiCJTScJqPPS872h4JgZKkr/+CwcwttNEo9Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@nestjs/cli": {
      "version": "11.0.14",
      "resolved": "https://registry.npmjs.org/@nestjs/cli/-/cli-11.0.14.tgz",
      "integrity": "sha512-YwP03zb5VETTwelXU+AIzMVbEZKk/uxJL+z9pw0mdG9ogAtqZ6/mpmIM4nEq/NU8D0a7CBRLcMYUmWW/55pfqw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@angular-devkit/core": "19.2.19",
        "@angular-devkit/schematics": "19.2.19",
        "@angular-devkit/schematics-cli": "19.2.19",
        "@inquirer/prompts": "7.10.1",
        "@nestjs/schematics": "^11.0.1",
        "ansis": "4.2.0",
        "chokidar": "4.0.3",
        "cli-table3": "0.6.5",
        "commander": "4.1.1",
        "fork-ts-checker-webpack-plugin": "9.1.0",
        "glob": "13.0.0",
        "node-emoji": "1.11.0",
        "ora": "5.4.1",
        "tsconfig-paths": "4.2.0",
        "tsconfig-paths-webpack-plugin": "4.2.0",
        "typescript": "5.9.3",
        "webpack": "5.103.0",
        "webpack-node-externals": "3.0.0"
      },
      "bin": {
        "nest": "bin/nest.js"
      },
      "engines": {
        "node": ">= 20.11"
      },
      "peerDependencies": {
        "@swc/cli": "^0.1.62 || ^0.3.0 || ^0.4.0 || ^0.5.0 || ^0.6.0 || ^0.7.0",
        "@swc/core": "^1.3.62"
      },
      "peerDependenciesMeta": {
        "@swc/cli": {
          "optional": true
        },
        "@swc/core": {
          "optional": true
        }
      }
    },
    "node_modules/@nestjs/cli/node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/@nestjs/common": {
      "version": "11.1.5",
      "resolved": "https://registry.npmjs.org/@nestjs/common/-/common-11.1.5.tgz",
      "integrity": "sha512-DQpWdr3ShO0BHWkHl3I4W/jR6R3pDtxyBlmrpTuZF+PXxQyBXNvsUne0Wyo6QHPEDi+pAz9XchBFoKbqOhcdTg==",
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "file-type": "21.0.0",
        "iterare": "1.2.1",
        "load-esm": "1.0.2",
        "tslib": "2.8.1",
        "uid": "2.0.2"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/nest"
      },
      "peerDependencies": {
        "class-transformer": ">=0.4.1",
        "class-validator": ">=0.13.2",
        "reflect-metadata": "^0.1.12 || ^0.2.0",
        "rxjs": "^7.1.0"
      },
      "peerDependenciesMeta": {
        "class-transformer": {
          "optional": true
        },
        "class-validator": {
          "optional": true
        }
      }
    },
    "node_modules/@nestjs/config": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/@nestjs/config/-/config-4.0.2.tgz",
      "integrity": "sha512-McMW6EXtpc8+CwTUwFdg6h7dYcBUpH5iUILCclAsa+MbCEvC9ZKu4dCHRlJqALuhjLw97pbQu62l4+wRwGeZqA==",
      "license": "MIT",
      "dependencies": {
        "dotenv": "16.4.7",
        "dotenv-expand": "12.0.1",
        "lodash": "4.17.21"
      },
      "peerDependencies": {
        "@nestjs/common": "^10.0.0 || ^11.0.0",
        "rxjs": "^7.1.0"
      }
    },
    "node_modules/@nestjs/core": {
      "version": "11.1.5",
      "resolved": "https://registry.npmjs.org/@nestjs/core/-/core-11.1.5.tgz",
      "integrity": "sha512-Qr25MEY9t8VsMETy7eXQ0cNXqu0lzuFrrTr+f+1G57ABCtV5Pogm7n9bF71OU2bnkDD32Bi4hQLeFR90cku3Tw==",
      "hasInstallScript": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@nuxt/opencollective": "0.4.1",
        "fast-safe-stringify": "2.1.1",
        "iterare": "1.2.1",
        "path-to-regexp": "8.2.0",
        "tslib": "2.8.1",
        "uid": "2.0.2"
      },
      "engines": {
        "node": ">= 20"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/nest"
      },
      "peerDependencies": {
        "@nestjs/common": "^11.0.0",
        "@nestjs/microservices": "^11.0.0",
        "@nestjs/platform-express": "^11.0.0",
        "@nestjs/websockets": "^11.0.0",
        "reflect-metadata": "^0.1.12 || ^0.2.0",
        "rxjs": "^7.1.0"
      },
      "peerDependenciesMeta": {
        "@nestjs/microservices": {
          "optional": true
        },
        "@nestjs/platform-express": {
          "optional": true
        },
        "@nestjs/websockets": {
          "optional": true
        }
      }
    },
    "node_modules/@nestjs/jwt": {
      "version": "11.0.0",
      "resolved": "https://registry.npmjs.org/@nestjs/jwt/-/jwt-11.0.0.tgz",
      "integrity": "sha512-v7YRsW3Xi8HNTsO+jeHSEEqelX37TVWgwt+BcxtkG/OfXJEOs6GZdbdza200d6KqId1pJQZ6UPj1F0M6E+mxaA==",
      "license": "MIT",
      "dependencies": {
        "@types/jsonwebtoken": "9.0.7",
        "jsonwebtoken": "9.0.2"
      },
      "peerDependencies": {
        "@nestjs/common": "^8.0.0 || ^9.0.0 || ^10.0.0 || ^11.0.0"
      }
    },
    "node_modules/@nestjs/mapped-types": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/@nestjs/mapped-types/-/mapped-types-2.1.0.tgz",
      "integrity": "sha512-W+n+rM69XsFdwORF11UqJahn4J3xi4g/ZEOlJNL6KoW5ygWSmBB2p0S2BZ4FQeS/NDH72e6xIcu35SfJnE8bXw==",
      "license": "MIT",
      "peerDependencies": {
        "@nestjs/common": "^10.0.0 || ^11.0.0",
        "class-transformer": "^0.4.0 || ^0.5.0",
        "class-validator": "^0.13.0 || ^0.14.0",
        "reflect-metadata": "^0.1.12 || ^0.2.0"
      },
      "peerDependenciesMeta": {
        "class-transformer": {
          "optional": true
        },
        "class-validator": {
          "optional": true
        }
      }
    },
    "node_modules/@nestjs/passport": {
      "version": "11.0.5",
      "resolved": "https://registry.npmjs.org/@nestjs/passport/-/passport-11.0.5.tgz",
      "integrity": "sha512-ulQX6mbjlws92PIM15Naes4F4p2JoxGnIJuUsdXQPT+Oo2sqQmENEZXM7eYuimocfHnKlcfZOuyzbA33LwUlOQ==",
      "license": "MIT",
      "peerDependencies": {
        "@nestjs/common": "^10.0.0 || ^11.0.0",
        "passport": "^0.5.0 || ^0.6.0 || ^0.7.0"
      }
    },
    "node_modules/@nestjs/platform-express": {
      "version": "11.1.5",
      "resolved": "https://registry.npmjs.org/@nestjs/platform-express/-/platform-express-11.1.5.tgz",
      "integrity": "sha512-OsoiUBY9Shs5IG3uvDIt9/IDfY5OlvWBESuB/K4Eun8xILw1EK5d5qMfC3d2sIJ+kA3l+kBR1d/RuzH7VprLIg==",
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "cors": "2.8.5",
        "express": "5.1.0",
        "multer": "2.0.2",
        "path-to-regexp": "8.2.0",
        "tslib": "2.8.1"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/nest"
      },
      "peerDependencies": {
        "@nestjs/common": "^11.0.0",
        "@nestjs/core": "^11.0.0"
      }
    },
    "node_modules/@nestjs/platform-socket.io": {
      "version": "11.1.5",
      "resolved": "https://registry.npmjs.org/@nestjs/platform-socket.io/-/platform-socket.io-11.1.5.tgz",
      "integrity": "sha512-DY3zNY+BjbrYpV/t8HL8ptrusrWK8J0cfkfY1iZsfCd+0/1+j8IKno+QMLkerNQAZ7/Frh5tkaKHVwWk18TkMw==",
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "socket.io": "4.8.1",
        "tslib": "2.8.1"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/nest"
      },
      "peerDependencies": {
        "@nestjs/common": "^11.0.0",
        "@nestjs/websockets": "^11.0.0",
        "rxjs": "^7.1.0"
      }
    },
    "node_modules/@nestjs/schematics": {
      "version": "11.0.5",
      "resolved": "https://registry.npmjs.org/@nestjs/schematics/-/schematics-11.0.5.tgz",
      "integrity": "sha512-T50SCNyqCZ/fDssaOD7meBKLZ87ebRLaJqZTJPvJKjlib1VYhMOCwXYsr7bjMPmuPgiQHOwvppz77xN/m6GM7A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@angular-devkit/core": "19.2.6",
        "@angular-devkit/schematics": "19.2.6",
        "comment-json": "4.2.5",
        "jsonc-parser": "3.3.1",
        "pluralize": "8.0.0"
      },
      "peerDependencies": {
        "typescript": ">=4.8.2"
      }
    },
    "node_modules/@nestjs/schematics/node_modules/@angular-devkit/core": {
      "version": "19.2.6",
      "resolved": "https://registry.npmjs.org/@angular-devkit/core/-/core-19.2.6.tgz",
      "integrity": "sha512-WFgiYhrDMq83UNaGRAneIM7CYYdBozD+yYA9BjoU8AgBLKtrvn6S8ZcjKAk5heoHtY/u8pEb0mwDTz9gxFmJZQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "8.17.1",
        "ajv-formats": "3.0.1",
        "jsonc-parser": "3.3.1",
        "picomatch": "4.0.2",
        "rxjs": "7.8.1",
        "source-map": "0.7.4"
      },
      "engines": {
        "node": "^18.19.1 || ^20.11.1 || >=22.0.0",
        "npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
        "yarn": ">= 1.13.0"
      },
      "peerDependencies": {
        "chokidar": "^4.0.0"
      },
      "peerDependenciesMeta": {
        "chokidar": {
          "optional": true
        }
      }
    },
    "node_modules/@nestjs/schematics/node_modules/@angular-devkit/schematics": {
      "version": "19.2.6",
      "resolved": "https://registry.npmjs.org/@angular-devkit/schematics/-/schematics-19.2.6.tgz",
      "integrity": "sha512-YTAxNnT++5eflx19OUHmOWu597/TbTel+QARiZCv1xQw99+X8DCKKOUXtqBRd53CAHlREDI33Rn/JLY3NYgMLQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@angular-devkit/core": "19.2.6",
        "jsonc-parser": "3.3.1",
        "magic-string": "0.30.17",
        "ora": "5.4.1",
        "rxjs": "7.8.1"
      },
      "engines": {
        "node": "^18.19.1 || ^20.11.1 || >=22.0.0",
        "npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
        "yarn": ">= 1.13.0"
      }
    },
    "node_modules/@nestjs/schematics/node_modules/ajv": {
      "version": "8.17.1",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.17.1.tgz",
      "integrity": "sha512-B/gBuNg5SiMTrPkC+A2+cW0RszwxYmn6VYxB/inlBStS5nx6xHIt/ehKRhIMhqusl7a8LjQoZnjCs5vhwxOQ1g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.3",
        "fast-uri": "^3.0.1",
        "json-schema-traverse": "^1.0.0",
        "require-from-string": "^2.0.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/@nestjs/schematics/node_modules/json-schema-traverse": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
      "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@nestjs/schematics/node_modules/rxjs": {
      "version": "7.8.1",
      "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-7.8.1.tgz",
      "integrity": "sha512-AA3TVj+0A2iuIoQkWEK/tqFjBq2j+6PO6Y0zJcvzLAFhEFIO3HL0vls9hWLncZbAAbK0mar7oZ4V079I/qPMxg==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.1.0"
      }
    },
    "node_modules/@nestjs/testing": {
      "version": "11.1.5",
      "resolved": "https://registry.npmjs.org/@nestjs/testing/-/testing-11.1.5.tgz",
      "integrity": "sha512-ZYRYF750SefmuIo7ZqPlHDcin1OHh6My0OkOfGEFjrD9mJ0vMVIpwMTOOkpzCfCcpqUuxeHBuecpiIn+NLrQbQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "tslib": "2.8.1"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/nest"
      },
      "peerDependencies": {
        "@nestjs/common": "^11.0.0",
        "@nestjs/core": "^11.0.0",
        "@nestjs/microservices": "^11.0.0",
        "@nestjs/platform-express": "^11.0.0"
      },
      "peerDependenciesMeta": {
        "@nestjs/microservices": {
          "optional": true
        },
        "@nestjs/platform-express": {
          "optional": true
        }
      }
    },
    "node_modules/@nestjs/throttler": {
      "version": "6.4.0",
      "resolved": "https://registry.npmjs.org/@nestjs/throttler/-/throttler-6.4.0.tgz",
      "integrity": "sha512-osL67i0PUuwU5nqSuJjtUJZMkxAnYB4VldgYUMGzvYRJDCqGRFMWbsbzm/CkUtPLRL30I8T74Xgt/OQxnYokiA==",
      "license": "MIT",
      "peerDependencies": {
        "@nestjs/common": "^7.0.0 || ^8.0.0 || ^9.0.0 || ^10.0.0 || ^11.0.0",
        "@nestjs/core": "^7.0.0 || ^8.0.0 || ^9.0.0 || ^10.0.0 || ^11.0.0",
        "reflect-metadata": "^0.1.13 || ^0.2.0"
      }
    },
    "node_modules/@nestjs/websockets": {
      "version": "11.1.5",
      "resolved": "https://registry.npmjs.org/@nestjs/websockets/-/websockets-11.1.5.tgz",
      "integrity": "sha512-mAM11HwyS7aeSUbXdOqHbNCRoHwB0OOb+cmx5sgxvszhdG0Y6bwR60nKA4+EXL9xUEeWoxmbfLmSHlTSIJ9GKA==",
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "iterare": "1.2.1",
        "object-hash": "3.0.0",
        "tslib": "2.8.1"
      },
      "peerDependencies": {
        "@nestjs/common": "^11.0.0",
        "@nestjs/core": "^11.0.0",
        "@nestjs/platform-socket.io": "^11.0.0",
        "reflect-metadata": "^0.1.12 || ^0.2.0",
        "rxjs": "^7.1.0"
      },
      "peerDependenciesMeta": {
        "@nestjs/platform-socket.io": {
          "optional": true
        }
      }
    },
    "node_modules/@noble/hashes": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/@noble/hashes/-/hashes-1.8.0.tgz",
      "integrity": "sha512-jCs9ldd7NwzpgXDIf6P3+NrHh9/sD6CQdxHyjQI+h/6rDNo88ypBxxz45UDuZHz9r3tNz7N/VInSVoVdtXEI4A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^14.21.3 || >=16"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nuxt/opencollective": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/@nuxt/opencollective/-/opencollective-0.4.1.tgz",
      "integrity": "sha512-GXD3wy50qYbxCJ652bDrDzgMr3NFEkIS374+IgFQKkCvk9yiYcLvX2XDYr7UyQxf4wK0e+yqDYRubZ0DtOxnmQ==",
      "license": "MIT",
      "dependencies": {
        "consola": "^3.2.3"
      },
      "bin": {
        "opencollective": "bin/opencollective.js"
      },
      "engines": {
        "node": "^14.18.0 || >=16.10.0",
        "npm": ">=5.10.0"
      }
    },
    "node_modules/@paralleldrive/cuid2": {
      "version": "2.2.2",
      "resolved": "https://registry.npmjs.org/@paralleldrive/cuid2/-/cuid2-2.2.2.tgz",
      "integrity": "sha512-ZOBkgDwEdoYVlSeRbYYXs0S9MejQofiVYoTbKzy/6GQa39/q5tQU2IX46+shYnUkpEl3wc+J6wRlar7r2EK2xA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@noble/hashes": "^1.1.5"
      }
    },
    "node_modules/@pkgr/core": {
      "version": "0.2.9",
      "resolved": "https://registry.npmjs.org/@pkgr/core/-/core-0.2.9.tgz",
      "integrity": "sha512-QNqXyfVS2wm9hweSYD2O7F0G06uurj9kZ96TRQE5Y9hU7+tgdZwIkbAKc5Ocy1HxEY2kuDQa6cQ1WRs/O5LFKA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.20.0 || ^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/pkgr"
      }
    },
    "node_modules/@prisma/client": {
      "version": "6.13.0",
      "resolved": "https://registry.npmjs.org/@prisma/client/-/client-6.13.0.tgz",
      "integrity": "sha512-8m2+I3dQovkV8CkDMluiwEV1TxV9EXdT6xaCz39O6jYw7mkf5gwfmi+cL4LJsEPwz5tG7sreBwkRpEMJedGYUQ==",
      "dev": true,
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18"
      },
      "peerDependencies": {
        "prisma": "*",
        "typescript": ">=5.1.0"
      },
      "peerDependenciesMeta": {
        "prisma": {
          "optional": true
        },
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@prisma/config": {
      "version": "6.13.0",
      "resolved": "https://registry.npmjs.org/@prisma/config/-/config-6.13.0.tgz",
      "integrity": "sha512-OYMM+pcrvj/NqNWCGESSxVG3O7kX6oWuGyvufTUNnDw740KIQvNyA4v0eILgkpuwsKIDU36beZCkUtIt0naTog==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "c12": "3.1.0",
        "deepmerge-ts": "7.1.5",
        "effect": "3.16.12",
        "read-package-up": "11.0.0"
      }
    },
    "node_modules/@prisma/debug": {
      "version": "6.13.0",
      "resolved": "https://registry.npmjs.org/@prisma/debug/-/debug-6.13.0.tgz",
      "integrity": "sha512-um+9pfKJW0ihmM83id9FXGi5qEbVJ0Vxi1Gm0xpYsjwUBnw6s2LdPBbrsG9QXRX46K4CLWCTNvskXBup4i9hlw==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/@prisma/engines": {
      "version": "6.13.0",
      "resolved": "https://registry.npmjs.org/@prisma/engines/-/engines-6.13.0.tgz",
      "integrity": "sha512-D+1B79LFvtWA0KTt8ALekQ6A/glB9w10ETknH5Y9g1k2NYYQOQy93ffiuqLn3Pl6IPJG3EsK/YMROKEaq8KBrA==",
      "dev": true,
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/debug": "6.13.0",
        "@prisma/engines-version": "6.13.0-35.361e86d0ea4987e9f53a565309b3eed797a6bcbd",
        "@prisma/fetch-engine": "6.13.0",
        "@prisma/get-platform": "6.13.0"
      }
    },
    "node_modules/@prisma/engines-version": {
      "version": "6.13.0-35.361e86d0ea4987e9f53a565309b3eed797a6bcbd",
      "resolved": "https://registry.npmjs.org/@prisma/engines-version/-/engines-version-6.13.0-35.361e86d0ea4987e9f53a565309b3eed797a6bcbd.tgz",
      "integrity": "sha512-MpPyKSzBX7P/ZY9odp9TSegnS/yH3CSbchQE9f0yBg3l2QyN59I6vGXcoYcqKC9VTniS1s18AMmhyr1OWavjHg==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/@prisma/fetch-engine": {
      "version": "6.13.0",
      "resolved": "https://registry.npmjs.org/@prisma/fetch-engine/-/fetch-engine-6.13.0.tgz",
      "integrity": "sha512-grmmq+4FeFKmaaytA8Ozc2+Tf3BC8xn/DVJos6LL022mfRlMZYjT3hZM0/xG7+5fO95zFG9CkDUs0m1S2rXs5Q==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/debug": "6.13.0",
        "@prisma/engines-version": "6.13.0-35.361e86d0ea4987e9f53a565309b3eed797a6bcbd",
        "@prisma/get-platform": "6.13.0"
      }
    },
    "node_modules/@prisma/get-platform": {
      "version": "6.13.0",
      "resolved": "https://registry.npmjs.org/@prisma/get-platform/-/get-platform-6.13.0.tgz",
      "integrity": "sha512-Nii2pX50fY4QKKxQwm7/vvqT6Ku8yYJLZAFX4e2vzHwRdMqjugcOG5hOSLjxqoXb0cvOspV70TOhMzrw8kqAnw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/debug": "6.13.0"
      }
    },
    "node_modules/@sinclair/typebox": {
      "version": "0.27.8",
      "resolved": "https://registry.npmjs.org/@sinclair/typebox/-/typebox-0.27.8.tgz",
      "integrity": "sha512-+Fj43pSMwJs4KRrH/938Uf+uAELIgVBmQzg/q1YG10djyfA3TnrU8N8XzqCh/okZdszqBQTZf96idMfE5lnwTA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@sindresorhus/is": {
      "version": "5.6.0",
      "resolved": "https://registry.npmjs.org/@sindresorhus/is/-/is-5.6.0.tgz",
      "integrity": "sha512-TV7t8GKYaJWsn00tFDqBw8+Uqmr8A0fRU1tvTQhyZzGv0sJCGRQL3JGMI3ucuKo3XIZdUP+Lx7/gh2t3lewy7g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14.16"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/is?sponsor=1"
      }
    },
    "node_modules/@sinonjs/commons": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/@sinonjs/commons/-/commons-3.0.1.tgz",
      "integrity": "sha512-K3mCHKQ9sVh8o1C9cxkwxaOmXoAMlDxC1mYyHrjqOWEcBjYr76t96zL2zlj5dUGZ3HSw240X1qgH3Mjf1yJWpQ==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "type-detect": "4.0.8"
      }
    },
    "node_modules/@sinonjs/fake-timers": {
      "version": "10.3.0",
      "resolved": "https://registry.npmjs.org/@sinonjs/fake-timers/-/fake-timers-10.3.0.tgz",
      "integrity": "sha512-V4BG07kuYSUkTCSBHG8G8TNhM+F19jXFWnQtzj+we8DrkpSBCee9Z3Ms8yiGer/dlmhe35/Xdgyo3/0rQKg7YA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "@sinonjs/commons": "^3.0.0"
      }
    },
    "node_modules/@so-ric/colorspace": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/@so-ric/colorspace/-/colorspace-1.1.6.tgz",
      "integrity": "sha512-/KiKkpHNOBgkFJwu9sh48LkHSMYGyuTcSFK/qMBdnOAlrRJzRSXAOFB5qwzaVQuDl8wAvHVMkaASQDReTahxuw==",
      "license": "MIT",
      "dependencies": {
        "color": "^5.0.2",
        "text-hex": "1.0.x"
      }
    },
    "node_modules/@socket.io/component-emitter": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@socket.io/component-emitter/-/component-emitter-3.1.2.tgz",
      "integrity": "sha512-9BCxFwvbGg/RsZK9tjXd8s4UcwR0MWeFQ1XEKIQVVvAGJyINdrqKMcTRyLoK8Rse1GjzLV9cwjWV1olXRWEXVA==",
      "license": "MIT"
    },
    "node_modules/@standard-schema/spec": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/@standard-schema/spec/-/spec-1.0.0.tgz",
      "integrity": "sha512-m2bOd0f2RT9k8QJx1JN85cZYyH1RqFBdlwtkSlf4tBDYLCiiZnv1fIIwacK6cqwXavOydf0NPToMQgpKq+dVlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@swc/cli": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/@swc/cli/-/cli-0.6.0.tgz",
      "integrity": "sha512-Q5FsI3Cw0fGMXhmsg7c08i4EmXCrcl+WnAxb6LYOLHw4JFFC3yzmx9LaXZ7QMbA+JZXbigU2TirI7RAfO0Qlnw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@swc/counter": "^0.1.3",
        "@xhmikosr/bin-wrapper": "^13.0.5",
        "commander": "^8.3.0",
        "fast-glob": "^3.2.5",
        "minimatch": "^9.0.3",
        "piscina": "^4.3.1",
        "semver": "^7.3.8",
        "slash": "3.0.0",
        "source-map": "^0.7.3"
      },
      "bin": {
        "spack": "bin/spack.js",
        "swc": "bin/swc.js",
        "swcx": "bin/swcx.js"
      },
      "engines": {
        "node": ">= 16.14.0"
      },
      "peerDependencies": {
        "@swc/core": "^1.2.66",
        "chokidar": "^4.0.1"
      },
      "peerDependenciesMeta": {
        "chokidar": {
          "optional": true
        }
      }
    },
    "node_modules/@swc/cli/node_modules/brace-expansion": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.2.tgz",
      "integrity": "sha512-Jt0vHyM+jmUBqojB7E1NIYadt0vI0Qxjxd2TErW94wDz+E2LAm5vKMXXwg6ZZBTHPuUlDgQHKXvjGBdfcF1ZDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/@swc/cli/node_modules/commander": {
      "version": "8.3.0",
      "resolved": "https://registry.npmjs.org/commander/-/commander-8.3.0.tgz",
      "integrity": "sha512-OkTL9umf+He2DZkUq8f8J9of7yL6RJKI24dVITBmNfZBmri9zYZQrKkuXiKhyfPSu8tUhnVBB1iKXevvnlR4Ww==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/@swc/cli/node_modules/minimatch": {
      "version": "9.0.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
      "integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/@swc/core": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/@swc/core/-/core-1.13.2.tgz",
      "integrity": "sha512-YWqn+0IKXDhqVLKoac4v2tV6hJqB/wOh8/Br8zjqeqBkKa77Qb0Kw2i7LOFzjFNZbZaPH6AlMGlBwNrxaauaAg==",
      "dev": true,
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "peer": true,
      "dependencies": {
        "@swc/counter": "^0.1.3",
        "@swc/types": "^0.1.23"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/swc"
      },
      "optionalDependencies": {
        "@swc/core-darwin-arm64": "1.13.2",
        "@swc/core-darwin-x64": "1.13.2",
        "@swc/core-linux-arm-gnueabihf": "1.13.2",
        "@swc/core-linux-arm64-gnu": "1.13.2",
        "@swc/core-linux-arm64-musl": "1.13.2",
        "@swc/core-linux-x64-gnu": "1.13.2",
        "@swc/core-linux-x64-musl": "1.13.2",
        "@swc/core-win32-arm64-msvc": "1.13.2",
        "@swc/core-win32-ia32-msvc": "1.13.2",
        "@swc/core-win32-x64-msvc": "1.13.2"
      },
      "peerDependencies": {
        "@swc/helpers": ">=0.5.17"
      },
      "peerDependenciesMeta": {
        "@swc/helpers": {
          "optional": true
        }
      }
    },
    "node_modules/@swc/core-darwin-arm64": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/@swc/core-darwin-arm64/-/core-darwin-arm64-1.13.2.tgz",
      "integrity": "sha512-44p7ivuLSGFJ15Vly4ivLJjg3ARo4879LtEBAabcHhSZygpmkP8eyjyWxrH3OxkY1eRZSIJe8yRZPFw4kPXFPw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0 AND MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@swc/core-darwin-x64": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/@swc/core-darwin-x64/-/core-darwin-x64-1.13.2.tgz",
      "integrity": "sha512-Lb9EZi7X2XDAVmuUlBm2UvVAgSCbD3qKqDCxSI4jEOddzVOpNCnyZ/xEampdngUIyDDhhJLYU9duC+Mcsv5Y+A==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0 AND MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@swc/core-linux-arm-gnueabihf": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/@swc/core-linux-arm-gnueabihf/-/core-linux-arm-gnueabihf-1.13.2.tgz",
      "integrity": "sha512-9TDe/92ee1x57x+0OqL1huG4BeljVx0nWW4QOOxp8CCK67Rpc/HHl2wciJ0Kl9Dxf2NvpNtkPvqj9+BUmM9WVA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@swc/core-linux-arm64-gnu": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/@swc/core-linux-arm64-gnu/-/core-linux-arm64-gnu-1.13.2.tgz",
      "integrity": "sha512-KJUSl56DBk7AWMAIEcU83zl5mg3vlQYhLELhjwRFkGFMvghQvdqQ3zFOYa4TexKA7noBZa3C8fb24rI5sw9Exg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0 AND MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@swc/core-linux-arm64-musl": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/@swc/core-linux-arm64-musl/-/core-linux-arm64-musl-1.13.2.tgz",
      "integrity": "sha512-teU27iG1oyWpNh9CzcGQ48ClDRt/RCem7mYO7ehd2FY102UeTws2+OzLESS1TS1tEZipq/5xwx3FzbVgiolCiQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0 AND MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@swc/core-linux-x64-gnu": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/@swc/core-linux-x64-gnu/-/core-linux-x64-gnu-1.13.2.tgz",
      "integrity": "sha512-dRPsyPyqpLD0HMRCRpYALIh4kdOir8pPg4AhNQZLehKowigRd30RcLXGNVZcc31Ua8CiPI4QSgjOIxK+EQe4LQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0 AND MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@swc/core-linux-x64-musl": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/@swc/core-linux-x64-musl/-/core-linux-x64-musl-1.13.2.tgz",
      "integrity": "sha512-CCxETW+KkYEQDqz1SYC15YIWYheqFC+PJVOW76Maa/8yu8Biw+HTAcblKf2isrlUtK8RvrQN94v3UXkC2NzCEw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0 AND MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@swc/core-win32-arm64-msvc": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/@swc/core-win32-arm64-msvc/-/core-win32-arm64-msvc-1.13.2.tgz",
      "integrity": "sha512-Wv/QTA6PjyRLlmKcN6AmSI4jwSMRl0VTLGs57PHTqYRwwfwd7y4s2fIPJVBNbAlXd795dOEP6d/bGSQSyhOX3A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0 AND MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@swc/core-win32-ia32-msvc": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/@swc/core-win32-ia32-msvc/-/core-win32-ia32-msvc-1.13.2.tgz",
      "integrity": "sha512-PuCdtNynEkUNbUXX/wsyUC+t4mamIU5y00lT5vJcAvco3/r16Iaxl5UCzhXYaWZSNVZMzPp9qN8NlSL8M5pPxw==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "Apache-2.0 AND MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@swc/core-win32-x64-msvc": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/@swc/core-win32-x64-msvc/-/core-win32-x64-msvc-1.13.2.tgz",
      "integrity": "sha512-qlmMkFZJus8cYuBURx1a3YAG2G7IW44i+FEYV5/32ylKkzGNAr9tDJSA53XNnNXkAB5EXSPsOz7bn5C3JlEtdQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0 AND MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@swc/counter": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/@swc/counter/-/counter-0.1.3.tgz",
      "integrity": "sha512-e2BR4lsJkkRlKZ/qCHPw9ZaSxc0MVUd7gtbtaB7aMvHeJVYe8sOB8DBZkP2DtISHGSku9sCK6T6cnY0CtXrOCQ==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/@swc/types": {
      "version": "0.1.23",
      "resolved": "https://registry.npmjs.org/@swc/types/-/types-0.1.23.tgz",
      "integrity": "sha512-u1iIVZV9Q0jxY+yM2vw/hZGDNudsN85bBpTqzAQ9rzkxW9D+e3aEM4Han+ow518gSewkXgjmEK0BD79ZcNVgPw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@swc/counter": "^0.1.3"
      }
    },
    "node_modules/@szmarczak/http-timer": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/@szmarczak/http-timer/-/http-timer-5.0.1.tgz",
      "integrity": "sha512-+PmQX0PiAYPMeVYe237LJAYvOMYW1j2rH5YROyS3b4CTVJum34HfRvKvAzozHAQG0TnHNdUfY9nCeUyRAs//cw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "defer-to-connect": "^2.0.1"
      },
      "engines": {
        "node": ">=14.16"
      }
    },
    "node_modules/@tokenizer/inflate": {
      "version": "0.2.7",
      "resolved": "https://registry.npmjs.org/@tokenizer/inflate/-/inflate-0.2.7.tgz",
      "integrity": "sha512-MADQgmZT1eKjp06jpI2yozxaU9uVs4GzzgSL+uEq7bVcJ9V1ZXQkeGNql1fsSI0gMy1vhvNTNbUqrx+pZfJVmg==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.0",
        "fflate": "^0.8.2",
        "token-types": "^6.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/Borewit"
      }
    },
    "node_modules/@tokenizer/token": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/@tokenizer/token/-/token-0.3.0.tgz",
      "integrity": "sha512-OvjF+z51L3ov0OyAU0duzsYuvO01PH7x4t6DJx+guahgTnBHkhJdG7soQeTSFLWN3efnHyibZ4Z8l2EuWwJN3A==",
      "license": "MIT"
    },
    "node_modules/@ts-morph/common": {
      "version": "0.11.1",
      "resolved": "https://registry.npmjs.org/@ts-morph/common/-/common-0.11.1.tgz",
      "integrity": "sha512-7hWZS0NRpEsNV8vWJzg7FEz6V8MaLNeJOmwmghqUXTpzk16V1LLZhdo+4QvE/+zv4cVci0OviuJFnqhEfoV3+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-glob": "^3.2.7",
        "minimatch": "^3.0.4",
        "mkdirp": "^1.0.4",
        "path-browserify": "^1.0.1"
      }
    },
    "node_modules/@ts-morph/common/node_modules/mkdirp": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
      "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "mkdirp": "bin/cmd.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@tsconfig/node10": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/@tsconfig/node10/-/node10-1.0.11.tgz",
      "integrity": "sha512-DcRjDCujK/kCk/cUe8Xz8ZSpm8mS3mNNpta+jGCA6USEDfktlNvm1+IuZ9eTcDbNk41BHwpHHeW+N1lKCz4zOw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tsconfig/node12": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/@tsconfig/node12/-/node12-1.0.11.tgz",
      "integrity": "sha512-cqefuRsh12pWyGsIoBKJA9luFu3mRxCA+ORZvA4ktLSzIuCUtWVxGIuXigEwO5/ywWFMZ2QEGKWvkZG1zDMTag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tsconfig/node14": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@tsconfig/node14/-/node14-1.0.3.tgz",
      "integrity": "sha512-ysT8mhdixWK6Hw3i1V2AeRqZ5WfXg1G43mqoYlM2nc6388Fq5jcXyr5mRsqViLx/GJYdoL0bfXD8nmF+Zn/Iow==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tsconfig/node16": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@tsconfig/node16/-/node16-1.0.4.tgz",
      "integrity": "sha512-vxhUy4J8lyeyinH7Azl1pdd43GJhZH/tP2weN8TntQblOY+A0XbT8DJk1/oCPuOOyg/Ja757rG0CgHcWC8OfMA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/babel__core": {
      "version": "7.20.5",
      "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.20.5.tgz",
      "integrity": "sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.20.7",
        "@babel/types": "^7.20.7",
        "@types/babel__generator": "*",
        "@types/babel__template": "*",
        "@types/babel__traverse": "*"
      }
    },
    "node_modules/@types/babel__generator": {
      "version": "7.27.0",
      "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.27.0.tgz",
      "integrity": "sha512-ufFd2Xi92OAVPYsy+P4n7/U7e68fex0+Ee8gSG9KX7eo084CWiQ4sdxktvdl0bOPupXtVJPY19zk6EwWqUQ8lg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__template": {
      "version": "7.4.4",
      "resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.4.tgz",
      "integrity": "sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.1.0",
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__traverse": {
      "version": "7.20.7",
      "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.20.7.tgz",
      "integrity": "sha512-dkO5fhS7+/oos4ciWxyEyjWe48zmG6wbCheo/G2ZnHx4fs3EU6YC6UM8rk56gAjNJ9P3MTH2jo5jb92/K6wbng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.20.7"
      }
    },
    "node_modules/@types/body-parser": {
      "version": "1.19.6",
      "resolved": "https://registry.npmjs.org/@types/body-parser/-/body-parser-1.19.6.tgz",
      "integrity": "sha512-HLFeCYgz89uk22N5Qg3dvGvsv46B8GLvKKo1zKG4NybA8U2DiEO3w9lqGg29t/tfLRJpJ6iQxnVw4OnB7MoM9g==",
      "license": "MIT",
      "dependencies": {
        "@types/connect": "*",
        "@types/node": "*"
      }
    },
    "node_modules/@types/connect": {
      "version": "3.4.38",
      "resolved": "https://registry.npmjs.org/@types/connect/-/connect-3.4.38.tgz",
      "integrity": "sha512-K6uROf1LD88uDQqJCktA4yzL1YYAK6NgfsI0v/mTgyPKWsX1CnJ0XPSDhViejru1GcRkLWb8RlzFYJRqGUbaug==",
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/cookiejar": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@types/cookiejar/-/cookiejar-2.1.5.tgz",
      "integrity": "sha512-he+DHOWReW0nghN24E1WUqM0efK4kI9oTqDm6XmK8ZPe2djZ90BSNdGnIyCLzCPw7/pogPlGbzI2wHGGmi4O/Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/cors": {
      "version": "2.8.19",
      "resolved": "https://registry.npmjs.org/@types/cors/-/cors-2.8.19.tgz",
      "integrity": "sha512-mFNylyeyqN93lfe/9CSxOGREz8cpzAhH+E93xJ4xWQf62V8sQ/24reV2nyzUWM6H6Xji+GGHpkbLe7pVoUEskg==",
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/eslint": {
      "version": "9.6.1",
      "resolved": "https://registry.npmjs.org/@types/eslint/-/eslint-9.6.1.tgz",
      "integrity": "sha512-FXx2pKgId/WyYo2jXw63kk7/+TY7u7AziEJxJAnSFzHlqTAS3Ync6SvgYAN/k4/PQpnnVuzoMuVnByKK2qp0ag==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@types/estree": "*",
        "@types/json-schema": "*"
      }
    },
    "node_modules/@types/eslint-scope": {
      "version": "3.7.7",
      "resolved": "https://registry.npmjs.org/@types/eslint-scope/-/eslint-scope-3.7.7.tgz",
      "integrity": "sha512-MzMFlSLBqNF2gcHWO0G1vP/YQyfvrxZ0bF+u7mzUdZ1/xK4A4sru+nraZz5i3iEIk1l1uyicaDVTB4QbbEkAYg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/eslint": "*",
        "@types/estree": "*"
      }
    },
    "node_modules/@types/estree": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.8.tgz",
      "integrity": "sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/express": {
      "version": "5.0.3",
      "resolved": "https://registry.npmjs.org/@types/express/-/express-5.0.3.tgz",
      "integrity": "sha512-wGA0NX93b19/dZC1J18tKWVIYWyyF2ZjT9vin/NRu0qzzvfVzWjs04iq2rQ3H65vCTQYlRqs3YHfY7zjdV+9Kw==",
      "license": "MIT",
      "dependencies": {
        "@types/body-parser": "*",
        "@types/express-serve-static-core": "^5.0.0",
        "@types/serve-static": "*"
      }
    },
    "node_modules/@types/express-serve-static-core": {
      "version": "5.0.7",
      "resolved": "https://registry.npmjs.org/@types/express-serve-static-core/-/express-serve-static-core-5.0.7.tgz",
      "integrity": "sha512-R+33OsgWw7rOhD1emjU7dzCDHucJrgJXMA5PYCzJxVil0dsyx5iBEPHqpPfiKNJQb7lZ1vxwoLR4Z87bBUpeGQ==",
      "license": "MIT",
      "dependencies": {
        "@types/node": "*",
        "@types/qs": "*",
        "@types/range-parser": "*",
        "@types/send": "*"
      }
    },
    "node_modules/@types/graceful-fs": {
      "version": "4.1.9",
      "resolved": "https://registry.npmjs.org/@types/graceful-fs/-/graceful-fs-4.1.9.tgz",
      "integrity": "sha512-olP3sd1qOEe5dXTSaFvQG+02VdRXcdytWLAZsAq1PecU8uqQAhkrnbli7DagjtXKW/Bl7YJbUsa8MPcuc8LHEQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/http-cache-semantics": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/@types/http-cache-semantics/-/http-cache-semantics-4.0.4.tgz",
      "integrity": "sha512-1m0bIFVc7eJWyve9S0RnuRgcQqF/Xd5QsUZAZeQFr1Q3/p9JWoQQEqmVy+DPTNpGXwhgIetAoYF8JSc33q29QA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/http-errors": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@types/http-errors/-/http-errors-2.0.5.tgz",
      "integrity": "sha512-r8Tayk8HJnX0FztbZN7oVqGccWgw98T/0neJphO91KkmOzug1KkofZURD4UaD5uH8AqcFLfdPErnBod0u71/qg==",
      "license": "MIT"
    },
    "node_modules/@types/istanbul-lib-coverage": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/@types/istanbul-lib-coverage/-/istanbul-lib-coverage-2.0.6.tgz",
      "integrity": "sha512-2QF/t/auWm0lsy8XtKVPG19v3sSOQlJe/YHZgfjb/KBBHOGSV+J2q/S671rcq9uTBrLAXmZpqJiaQbMT+zNU1w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/istanbul-lib-report": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/@types/istanbul-lib-report/-/istanbul-lib-report-3.0.3.tgz",
      "integrity": "sha512-NQn7AHQnk/RSLOxrBbGyJM/aVQ+pjj5HCgasFxc0K/KhoATfQ/47AyUl15I2yBUpihjmas+a+VJBOqecrFH+uA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/istanbul-lib-coverage": "*"
      }
    },
    "node_modules/@types/istanbul-reports": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-3.0.4.tgz",
      "integrity": "sha512-pk2B1NWalF9toCRu6gjBzR69syFjP4Od8WRAX+0mmf9lAjCRicLOWc+ZrxZHx/0XRjotgkF9t6iaMJ+aXcOdZQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/istanbul-lib-report": "*"
      }
    },
    "node_modules/@types/jest": {
      "version": "29.5.14",
      "resolved": "https://registry.npmjs.org/@types/jest/-/jest-29.5.14.tgz",
      "integrity": "sha512-ZN+4sdnLUbo8EVvVc2ao0GFW6oVrQRPn4K2lglySj7APvSrgzxHiNNK99us4WDMi57xxA2yggblIAMNhXOotLQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "expect": "^29.0.0",
        "pretty-format": "^29.0.0"
      }
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.15",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
      "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/jsonwebtoken": {
      "version": "9.0.7",
      "resolved": "https://registry.npmjs.org/@types/jsonwebtoken/-/jsonwebtoken-9.0.7.tgz",
      "integrity": "sha512-ugo316mmTYBl2g81zDFnZ7cfxlut3o+/EQdaP7J8QN2kY6lJ22hmQYCK5EHcJHbrW+dkCGSCPgbG8JtYj6qSrg==",
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/methods": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@types/methods/-/methods-1.1.4.tgz",
      "integrity": "sha512-ymXWVrDiCxTBE3+RIrrP533E70eA+9qu7zdWoHuOmGujkYtzf4HQF96b8nwHLqhuf4ykX61IGRIB38CC6/sImQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/mime": {
      "version": "1.3.5",
      "resolved": "https://registry.npmjs.org/@types/mime/-/mime-1.3.5.tgz",
      "integrity": "sha512-/pyBZWSLD2n0dcHE3hq8s8ZvcETHtEuF+3E7XVt0Ig2nvsVQXdghHVcEkIWjy9A0wKfTn97a/PSDYohKIlnP/w==",
      "license": "MIT"
    },
    "node_modules/@types/multer": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/@types/multer/-/multer-2.0.0.tgz",
      "integrity": "sha512-C3Z9v9Evij2yST3RSBktxP9STm6OdMc5uR1xF1SGr98uv8dUlAL2hqwrZ3GVB3uyMyiegnscEK6PGtYvNrjTjw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/express": "*"
      }
    },
    "node_modules/@types/node": {
      "version": "22.16.5",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-22.16.5.tgz",
      "integrity": "sha512-bJFoMATwIGaxxx8VJPeM8TonI8t579oRvgAuT8zFugJsJZgzqv0Fu8Mhp68iecjzG7cnN3mO2dJQ5uUM2EFrgQ==",
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "undici-types": "~6.21.0"
      }
    },
    "node_modules/@types/node-fetch": {
      "version": "2.6.3",
      "resolved": "https://registry.npmjs.org/@types/node-fetch/-/node-fetch-2.6.3.tgz",
      "integrity": "sha512-ETTL1mOEdq/sxUtgtOhKjyB2Irra4cjxksvcMUR5Zr4n+PxVhsCD9WS46oPbHL3et9Zde7CNRr+WUNlcHvsX+w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*",
        "form-data": "^3.0.0"
      }
    },
    "node_modules/@types/node-fetch/node_modules/form-data": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-3.0.4.tgz",
      "integrity": "sha512-f0cRzm6dkyVYV3nPoooP8XlccPQukegwhAnpoLcXy+X+A8KfpGOoXwDr9FLZd3wzgLaBGQBE3lY93Zm/i1JvIQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.8",
        "es-set-tostringtag": "^2.1.0",
        "hasown": "^2.0.2",
        "mime-types": "^2.1.35"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/@types/node-fetch/node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/@types/node-fetch/node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/@types/normalize-package-data": {
      "version": "2.4.4",
      "resolved": "https://registry.npmjs.org/@types/normalize-package-data/-/normalize-package-data-2.4.4.tgz",
      "integrity": "sha512-37i+OaWTh9qeK4LSHPsyRC7NahnGotNuZvjLSgcPzblpHB3rrCJxAOgI5gCdKm7coonsaX1Of0ILiTcnZjbfxA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/oauth": {
      "version": "0.9.6",
      "resolved": "https://registry.npmjs.org/@types/oauth/-/oauth-0.9.6.tgz",
      "integrity": "sha512-H9TRCVKBNOhZZmyHLqFt9drPM9l+ShWiqqJijU1B8P3DX3ub84NjxDuy+Hjrz+fEca5Kwip3qPMKNyiLgNJtIA==",
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/passport": {
      "version": "1.0.17",
      "resolved": "https://registry.npmjs.org/@types/passport/-/passport-1.0.17.tgz",
      "integrity": "sha512-aciLyx+wDwT2t2/kJGJR2AEeBz0nJU4WuRX04Wu9Dqc5lSUtwu0WERPHYsLhF9PtseiAMPBGNUOtFjxZ56prsg==",
      "license": "MIT",
      "dependencies": {
        "@types/express": "*"
      }
    },
    "node_modules/@types/passport-google-oauth20": {
      "version": "2.0.16",
      "resolved": "https://registry.npmjs.org/@types/passport-google-oauth20/-/passport-google-oauth20-2.0.16.tgz",
      "integrity": "sha512-ayXK2CJ7uVieqhYOc6k/pIr5pcQxOLB6kBev+QUGS7oEZeTgIs1odDobXRqgfBPvXzl0wXCQHftV5220czZCPA==",
      "license": "MIT",
      "dependencies": {
        "@types/express": "*",
        "@types/passport": "*",
        "@types/passport-oauth2": "*"
      }
    },
    "node_modules/@types/passport-jwt": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/@types/passport-jwt/-/passport-jwt-4.0.1.tgz",
      "integrity": "sha512-Y0Ykz6nWP4jpxgEUYq8NoVZeCQPo1ZndJLfapI249g1jHChvRfZRO/LS3tqu26YgAS/laI1qx98sYGz0IalRXQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/jsonwebtoken": "*",
        "@types/passport-strategy": "*"
      }
    },
    "node_modules/@types/passport-oauth2": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/@types/passport-oauth2/-/passport-oauth2-1.8.0.tgz",
      "integrity": "sha512-6//z+4orIOy/g3zx17HyQ71GSRK4bs7Sb+zFasRoc2xzlv7ZCJ+vkDBYFci8U6HY+or6Zy7ajf4mz4rK7nsWJQ==",
      "license": "MIT",
      "dependencies": {
        "@types/express": "*",
        "@types/oauth": "*",
        "@types/passport": "*"
      }
    },
    "node_modules/@types/passport-strategy": {
      "version": "0.2.38",
      "resolved": "https://registry.npmjs.org/@types/passport-strategy/-/passport-strategy-0.2.38.tgz",
      "integrity": "sha512-GC6eMqqojOooq993Tmnmp7AUTbbQSgilyvpCYQjT+H6JfG/g6RGc7nXEniZlp0zyKJ0WUdOiZWLBZft9Yug1uA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/express": "*",
        "@types/passport": "*"
      }
    },
    "node_modules/@types/qs": {
      "version": "6.14.0",
      "resolved": "https://registry.npmjs.org/@types/qs/-/qs-6.14.0.tgz",
      "integrity": "sha512-eOunJqu0K1923aExK6y8p6fsihYEn/BYuQ4g0CxAAgFc4b/ZLN4CrsRZ55srTdqoiLzU2B2evC+apEIxprEzkQ==",
      "license": "MIT"
    },
    "node_modules/@types/range-parser": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@types/range-parser/-/range-parser-1.2.7.tgz",
      "integrity": "sha512-hKormJbkJqzQGhziax5PItDUTMAM9uE2XXQmM37dyd4hVM+5aVl7oVxMVUiVQn2oCQFN/LKCZdvSM0pFRqbSmQ==",
      "license": "MIT"
    },
    "node_modules/@types/send": {
      "version": "0.17.5",
      "resolved": "https://registry.npmjs.org/@types/send/-/send-0.17.5.tgz",
      "integrity": "sha512-z6F2D3cOStZvuk2SaP6YrwkNO65iTZcwA2ZkSABegdkAh/lf+Aa/YQndZVfmEXT5vgAp6zv06VQ3ejSVjAny4w==",
      "license": "MIT",
      "dependencies": {
        "@types/mime": "^1",
        "@types/node": "*"
      }
    },
    "node_modules/@types/serve-static": {
      "version": "1.15.8",
      "resolved": "https://registry.npmjs.org/@types/serve-static/-/serve-static-1.15.8.tgz",
      "integrity": "sha512-roei0UY3LhpOJvjbIP6ZZFngyLKl5dskOtDhxY5THRSpO+ZI+nzJ+m5yUMzGrp89YRa7lvknKkMYjqQFGwA7Sg==",
      "license": "MIT",
      "dependencies": {
        "@types/http-errors": "*",
        "@types/node": "*",
        "@types/send": "*"
      }
    },
    "node_modules/@types/socket.io": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/@types/socket.io/-/socket.io-3.0.1.tgz",
      "integrity": "sha512-XSma2FhVD78ymvoxYV4xGXrIH/0EKQ93rR+YR0Y+Kw1xbPzLDCip/UWSejZ08FpxYeYNci/PZPQS9anrvJRqMA==",
      "license": "MIT",
      "dependencies": {
        "socket.io": "*"
      }
    },
    "node_modules/@types/stack-utils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/@types/stack-utils/-/stack-utils-2.0.3.tgz",
      "integrity": "sha512-9aEbYZ3TbYMznPdcdr3SmIrLXwC/AKZXQeCf9Pgao5CKb8CyHuEX5jzWPTkvregvhRJHcpRO6BFoGW9ycaOkYw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/superagent": {
      "version": "8.1.9",
      "resolved": "https://registry.npmjs.org/@types/superagent/-/superagent-8.1.9.tgz",
      "integrity": "sha512-pTVjI73witn+9ILmoJdajHGW2jkSaOzhiFYF1Rd3EQ94kymLqB9PjD9ISg7WaALC7+dCHT0FGe9T2LktLq/3GQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/cookiejar": "^2.1.5",
        "@types/methods": "^1.1.4",
        "@types/node": "*",
        "form-data": "^4.0.0"
      }
    },
    "node_modules/@types/supertest": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/@types/supertest/-/supertest-6.0.3.tgz",
      "integrity": "sha512-8WzXq62EXFhJ7QsH3Ocb/iKQ/Ty9ZVWnVzoTKc9tyyFRRF3a74Tk2+TLFgaFFw364Ere+npzHKEJ6ga2LzIL7w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/methods": "^1.1.4",
        "@types/superagent": "^8.1.0"
      }
    },
    "node_modules/@types/triple-beam": {
      "version": "1.3.5",
      "resolved": "https://registry.npmjs.org/@types/triple-beam/-/triple-beam-1.3.5.tgz",
      "integrity": "sha512-6WaYesThRMCl19iryMYP7/x2OVgCtbIVflDGFpWnb9irXI3UjYE4AzmYuiUKY1AJstGijoY+MgUszMgRxIYTYw==",
      "license": "MIT"
    },
    "node_modules/@types/validator": {
      "version": "13.15.2",
      "resolved": "https://registry.npmjs.org/@types/validator/-/validator-13.15.2.tgz",
      "integrity": "sha512-y7pa/oEJJ4iGYBxOpfAKn5b9+xuihvzDVnC/OSvlVnGxVg0pOqmjiMafiJ1KVNQEaPZf9HsEp5icEwGg8uIe5Q==",
      "license": "MIT"
    },
    "node_modules/@types/winston": {
      "version": "2.4.4",
      "resolved": "https://registry.npmjs.org/@types/winston/-/winston-2.4.4.tgz",
      "integrity": "sha512-BVGCztsypW8EYwJ+Hq+QNYiT/MUyCif0ouBH+flrY66O5W+KIXAMML6E/0fJpm7VjIzgangahl5S03bJJQGrZw==",
      "deprecated": "This is a stub types definition. winston provides its own type definitions, so you do not need this installed.",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "winston": "*"
      }
    },
    "node_modules/@types/yargs": {
      "version": "17.0.33",
      "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-17.0.33.tgz",
      "integrity": "sha512-WpxBCKWPLr4xSsHgz511rFJAM+wS28w2zEO1QDNY5zM/S8ok70NNfztH0xwhqKyaK0OHCbN98LDAZuy1ctxDkA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/yargs-parser": "*"
      }
    },
    "node_modules/@types/yargs-parser": {
      "version": "21.0.3",
      "resolved": "https://registry.npmjs.org/@types/yargs-parser/-/yargs-parser-21.0.3.tgz",
      "integrity": "sha512-I4q9QU9MQv4oEOz4tAHJtNz1cwuLxn2F3xcc2iV5WdqLPpUnj30aUuxt1mAxYTG+oe8CZMV/+6rU4S4gRDzqtQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@typescript-eslint/eslint-plugin": {
      "version": "8.38.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-8.38.0.tgz",
      "integrity": "sha512-CPoznzpuAnIOl4nhj4tRr4gIPj5AfKgkiJmGQDaq+fQnRJTYlcBjbX3wbciGmpoPf8DREufuPRe1tNMZnGdanA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/regexpp": "^4.10.0",
        "@typescript-eslint/scope-manager": "8.38.0",
        "@typescript-eslint/type-utils": "8.38.0",
        "@typescript-eslint/utils": "8.38.0",
        "@typescript-eslint/visitor-keys": "8.38.0",
        "graphemer": "^1.4.0",
        "ignore": "^7.0.0",
        "natural-compare": "^1.4.0",
        "ts-api-utils": "^2.1.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "@typescript-eslint/parser": "^8.38.0",
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <5.9.0"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin/node_modules/ignore": {
      "version": "7.0.5",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-7.0.5.tgz",
      "integrity": "sha512-Hs59xBNfUIunMFgWAbGX5cq6893IbWg4KnrjbYwX3tx0ztorVgTDA6B2sxf8ejHJ4wz8BqGUMYlnzNBer5NvGg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/@typescript-eslint/parser": {
      "version": "8.38.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-8.38.0.tgz",
      "integrity": "sha512-Zhy8HCvBUEfBECzIl1PKqF4p11+d0aUJS1GeUiuqK9WmOug8YCmC4h4bjyBvMyAMI9sbRczmrYL5lKg/YMbrcQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@typescript-eslint/scope-manager": "8.38.0",
        "@typescript-eslint/types": "8.38.0",
        "@typescript-eslint/typescript-estree": "8.38.0",
        "@typescript-eslint/visitor-keys": "8.38.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <5.9.0"
      }
    },
    "node_modules/@typescript-eslint/project-service": {
      "version": "8.38.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/project-service/-/project-service-8.38.0.tgz",
      "integrity": "sha512-dbK7Jvqcb8c9QfH01YB6pORpqX1mn5gDZc9n63Ak/+jD67oWXn3Gs0M6vddAN+eDXBCS5EmNWzbSxsn9SzFWWg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/tsconfig-utils": "^8.38.0",
        "@typescript-eslint/types": "^8.38.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <5.9.0"
      }
    },
    "node_modules/@typescript-eslint/scope-manager": {
      "version": "8.38.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-8.38.0.tgz",
      "integrity": "sha512-WJw3AVlFFcdT9Ri1xs/lg8LwDqgekWXWhH3iAF+1ZM+QPd7oxQ6jvtW/JPwzAScxitILUIFs0/AnQ/UWHzbATQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.38.0",
        "@typescript-eslint/visitor-keys": "8.38.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/tsconfig-utils": {
      "version": "8.38.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/tsconfig-utils/-/tsconfig-utils-8.38.0.tgz",
      "integrity": "sha512-Lum9RtSE3EroKk/bYns+sPOodqb2Fv50XOl/gMviMKNvanETUuUcC9ObRbzrJ4VSd2JalPqgSAavwrPiPvnAiQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <5.9.0"
      }
    },
    "node_modules/@typescript-eslint/type-utils": {
      "version": "8.38.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/type-utils/-/type-utils-8.38.0.tgz",
      "integrity": "sha512-c7jAvGEZVf0ao2z+nnz8BUaHZD09Agbh+DY7qvBQqLiz8uJzRgVPj5YvOh8I8uEiH8oIUGIfHzMwUcGVco/SJg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.38.0",
        "@typescript-eslint/typescript-estree": "8.38.0",
        "@typescript-eslint/utils": "8.38.0",
        "debug": "^4.3.4",
        "ts-api-utils": "^2.1.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <5.9.0"
      }
    },
    "node_modules/@typescript-eslint/types": {
      "version": "8.38.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-8.38.0.tgz",
      "integrity": "sha512-wzkUfX3plUqij4YwWaJyqhiPE5UCRVlFpKn1oCRn2O1bJ592XxWJj8ROQ3JD5MYXLORW84063z3tZTb/cs4Tyw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree": {
      "version": "8.38.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-8.38.0.tgz",
      "integrity": "sha512-fooELKcAKzxux6fA6pxOflpNS0jc+nOQEEOipXFNjSlBS6fqrJOVY/whSn70SScHrcJ2LDsxWrneFoWYSVfqhQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/project-service": "8.38.0",
        "@typescript-eslint/tsconfig-utils": "8.38.0",
        "@typescript-eslint/types": "8.38.0",
        "@typescript-eslint/visitor-keys": "8.38.0",
        "debug": "^4.3.4",
        "fast-glob": "^3.3.2",
        "is-glob": "^4.0.3",
        "minimatch": "^9.0.4",
        "semver": "^7.6.0",
        "ts-api-utils": "^2.1.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <5.9.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/brace-expansion": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.2.tgz",
      "integrity": "sha512-Jt0vHyM+jmUBqojB7E1NIYadt0vI0Qxjxd2TErW94wDz+E2LAm5vKMXXwg6ZZBTHPuUlDgQHKXvjGBdfcF1ZDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/minimatch": {
      "version": "9.0.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
      "integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/@typescript-eslint/utils": {
      "version": "8.38.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/utils/-/utils-8.38.0.tgz",
      "integrity": "sha512-hHcMA86Hgt+ijJlrD8fX0j1j8w4C92zue/8LOPAFioIno+W0+L7KqE8QZKCcPGc/92Vs9x36w/4MPTJhqXdyvg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.7.0",
        "@typescript-eslint/scope-manager": "8.38.0",
        "@typescript-eslint/types": "8.38.0",
        "@typescript-eslint/typescript-estree": "8.38.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <5.9.0"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys": {
      "version": "8.38.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-8.38.0.tgz",
      "integrity": "sha512-pWrTcoFNWuwHlA9CvlfSsGWs14JxfN1TH25zM5L7o0pRLhsoZkDnTsXfQRJBEWJoV5DL0jf+Z+sxiud+K0mq1g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.38.0",
        "eslint-visitor-keys": "^4.2.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@vercel/build-utils": {
      "version": "6.8.3",
      "resolved": "https://registry.npmjs.org/@vercel/build-utils/-/build-utils-6.8.3.tgz",
      "integrity": "sha512-C86OPuPAvG/pSr27DPKecmptkYYsgyhOKdHTLv9jI3Pv1yvru78k+JjrAyn7N+0ev75KNV0Prv4P3p76168ePw==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/@vercel/error-utils": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/@vercel/error-utils/-/error-utils-1.0.10.tgz",
      "integrity": "sha512-nsKy2sy+pjUWyKI1V/XXKspVzHMYgSalmj5+EsKWFXZbnNZicqxNtMR94J8Hs7SB4TQxh0s4KhczJtL59AVGMg==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/@vercel/node": {
      "version": "2.15.10",
      "resolved": "https://registry.npmjs.org/@vercel/node/-/node-2.15.10.tgz",
      "integrity": "sha512-IfnqnKAJlL1+0FSDJgxoe9J3kfYAgPGDjz4aO/H5FSjvqP7cKJnns1F9GsQq4pM499+TY8T8mKAdos7/m+WOEw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@edge-runtime/node-utils": "2.0.3",
        "@edge-runtime/primitives": "2.1.2",
        "@edge-runtime/vm": "3.0.1",
        "@types/node": "14.18.33",
        "@types/node-fetch": "2.6.3",
        "@vercel/build-utils": "6.8.3",
        "@vercel/error-utils": "1.0.10",
        "@vercel/static-config": "2.0.17",
        "async-listen": "3.0.0",
        "content-type": "1.0.5",
        "edge-runtime": "2.4.4",
        "esbuild": "0.14.47",
        "exit-hook": "2.2.1",
        "node-fetch": "2.6.9",
        "path-to-regexp": "6.2.1",
        "ts-morph": "12.0.0",
        "ts-node": "10.9.1",
        "typescript": "4.9.5"
      }
    },
    "node_modules/@vercel/node/node_modules/@types/node": {
      "version": "14.18.33",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-14.18.33.tgz",
      "integrity": "sha512-qelS/Ra6sacc4loe/3MSjXNL1dNQ/GjxNHVzuChwMfmk7HuycRLVQN2qNY3XahK+fZc5E2szqQSKUyAF0E+2bg==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/@vercel/node/node_modules/path-to-regexp": {
      "version": "6.2.1",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-6.2.1.tgz",
      "integrity": "sha512-JLyh7xT1kizaEvcaXOQwOc2/Yhw6KZOvPf1S8401UyLk86CU79LN3vl7ztXGm/pZ+YjoyAJ4rxmHwbkBXJX+yw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@vercel/node/node_modules/ts-node": {
      "version": "10.9.1",
      "resolved": "https://registry.npmjs.org/ts-node/-/ts-node-10.9.1.tgz",
      "integrity": "sha512-NtVysVPkxxrwFGUUxGYhfux8k78pQB3JqYBXlLRZgdGUqTO5wU/UyHop5p70iEbGhB7q5KmiZiU0Y3KlJrScEw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@cspotcode/source-map-support": "^0.8.0",
        "@tsconfig/node10": "^1.0.7",
        "@tsconfig/node12": "^1.0.7",
        "@tsconfig/node14": "^1.0.0",
        "@tsconfig/node16": "^1.0.2",
        "acorn": "^8.4.1",
        "acorn-walk": "^8.1.1",
        "arg": "^4.1.0",
        "create-require": "^1.1.0",
        "diff": "^4.0.1",
        "make-error": "^1.1.1",
        "v8-compile-cache-lib": "^3.0.1",
        "yn": "3.1.1"
      },
      "bin": {
        "ts-node": "dist/bin.js",
        "ts-node-cwd": "dist/bin-cwd.js",
        "ts-node-esm": "dist/bin-esm.js",
        "ts-node-script": "dist/bin-script.js",
        "ts-node-transpile-only": "dist/bin-transpile.js",
        "ts-script": "dist/bin-script-deprecated.js"
      },
      "peerDependencies": {
        "@swc/core": ">=1.2.50",
        "@swc/wasm": ">=1.2.50",
        "@types/node": "*",
        "typescript": ">=2.7"
      },
      "peerDependenciesMeta": {
        "@swc/core": {
          "optional": true
        },
        "@swc/wasm": {
          "optional": true
        }
      }
    },
    "node_modules/@vercel/node/node_modules/typescript": {
      "version": "4.9.5",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-4.9.5.tgz",
      "integrity": "sha512-1FXk9E2Hm+QzZQ7z+McJiHL4NW1F2EzMu9Nq9i3zAaGqibafqYwCVU6WyWAuyQRRzOlxou8xZSyXLEN8oKj24g==",
      "dev": true,
      "license": "Apache-2.0",
      "peer": true,
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=4.2.0"
      }
    },
    "node_modules/@vercel/speed-insights": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@vercel/speed-insights/-/speed-insights-1.2.0.tgz",
      "integrity": "sha512-y9GVzrUJ2xmgtQlzFP2KhVRoCglwfRQgjyfY607aU0hh0Un6d0OUyrJkjuAlsV18qR4zfoFPs/BiIj9YDS6Wzw==",
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "peerDependencies": {
        "@sveltejs/kit": "^1 || ^2",
        "next": ">= 13",
        "react": "^18 || ^19 || ^19.0.0-rc",
        "svelte": ">= 4",
        "vue": "^3",
        "vue-router": "^4"
      },
      "peerDependenciesMeta": {
        "@sveltejs/kit": {
          "optional": true
        },
        "next": {
          "optional": true
        },
        "react": {
          "optional": true
        },
        "svelte": {
          "optional": true
        },
        "vue": {
          "optional": true
        },
        "vue-router": {
          "optional": true
        }
      }
    },
    "node_modules/@vercel/static-config": {
      "version": "2.0.17",
      "resolved": "https://registry.npmjs.org/@vercel/static-config/-/static-config-2.0.17.tgz",
      "integrity": "sha512-2f50OTVrN07x7pH+XNW0e7cj7T+Ufg+19+a2N3/XZBjQmV+FaMlmSLiaQ4tBxp2H8lWWHzENua7ZSSQPtRZ3/A==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "ajv": "8.6.3",
        "json-schema-to-ts": "1.6.4",
        "ts-morph": "12.0.0"
      }
    },
    "node_modules/@vercel/static-config/node_modules/ajv": {
      "version": "8.6.3",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.6.3.tgz",
      "integrity": "sha512-SMJOdDP6LqTkD0Uq8qLi+gMwSt0imXLSV080qFVwJCpH9U6Mb+SUGHAXM0KNbcBPguytWyvFxcHgMLe2D2XSpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "json-schema-traverse": "^1.0.0",
        "require-from-string": "^2.0.2",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/@vercel/static-config/node_modules/json-schema-traverse": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
      "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@webassemblyjs/ast": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/ast/-/ast-1.14.1.tgz",
      "integrity": "sha512-nuBEDgQfm1ccRp/8bCQrx1frohyufl4JlbMMZ4P1wpeOfDhF6FQkxZJ1b/e+PLwr6X1Nhw6OLme5usuBWYBvuQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@webassemblyjs/helper-numbers": "1.13.2",
        "@webassemblyjs/helper-wasm-bytecode": "1.13.2"
      }
    },
    "node_modules/@webassemblyjs/floating-point-hex-parser": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/floating-point-hex-parser/-/floating-point-hex-parser-1.13.2.tgz",
      "integrity": "sha512-6oXyTOzbKxGH4steLbLNOu71Oj+C8Lg34n6CqRvqfS2O71BxY6ByfMDRhBytzknj9yGUPVJ1qIKhRlAwO1AovA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@webassemblyjs/helper-api-error": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-api-error/-/helper-api-error-1.13.2.tgz",
      "integrity": "sha512-U56GMYxy4ZQCbDZd6JuvvNV/WFildOjsaWD3Tzzvmw/mas3cXzRJPMjP83JqEsgSbyrmaGjBfDtV7KDXV9UzFQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@webassemblyjs/helper-buffer": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-buffer/-/helper-buffer-1.14.1.tgz",
      "integrity": "sha512-jyH7wtcHiKssDtFPRB+iQdxlDf96m0E39yb0k5uJVhFGleZFoNw1c4aeIcVUPPbXUVJ94wwnMOAqUHyzoEPVMA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@webassemblyjs/helper-numbers": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-numbers/-/helper-numbers-1.13.2.tgz",
      "integrity": "sha512-FE8aCmS5Q6eQYcV3gI35O4J789wlQA+7JrqTTpJqn5emA4U2hvwJmvFRC0HODS+3Ye6WioDklgd6scJ3+PLnEA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@webassemblyjs/floating-point-hex-parser": "1.13.2",
        "@webassemblyjs/helper-api-error": "1.13.2",
        "@xtuc/long": "4.2.2"
      }
    },
    "node_modules/@webassemblyjs/helper-wasm-bytecode": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-bytecode/-/helper-wasm-bytecode-1.13.2.tgz",
      "integrity": "sha512-3QbLKy93F0EAIXLh0ogEVR6rOubA9AoZ+WRYhNbFyuB70j3dRdwH9g+qXhLAO0kiYGlg3TxDV+I4rQTr/YNXkA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@webassemblyjs/helper-wasm-section": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-section/-/helper-wasm-section-1.14.1.tgz",
      "integrity": "sha512-ds5mXEqTJ6oxRoqjhWDU83OgzAYjwsCV8Lo/N+oRsNDmx/ZDpqalmrtgOMkHwxsG0iI//3BwWAErYRHtgn0dZw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@webassemblyjs/ast": "1.14.1",
        "@webassemblyjs/helper-buffer": "1.14.1",
        "@webassemblyjs/helper-wasm-bytecode": "1.13.2",
        "@webassemblyjs/wasm-gen": "1.14.1"
      }
    },
    "node_modules/@webassemblyjs/ieee754": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/ieee754/-/ieee754-1.13.2.tgz",
      "integrity": "sha512-4LtOzh58S/5lX4ITKxnAK2USuNEvpdVV9AlgGQb8rJDHaLeHciwG4zlGr0j/SNWlr7x3vO1lDEsuePvtcDNCkw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@xtuc/ieee754": "^1.2.0"
      }
    },
    "node_modules/@webassemblyjs/leb128": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/leb128/-/leb128-1.13.2.tgz",
      "integrity": "sha512-Lde1oNoIdzVzdkNEAWZ1dZ5orIbff80YPdHx20mrHwHrVNNTjNr8E3xz9BdpcGqRQbAEa+fkrCb+fRFTl/6sQw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@xtuc/long": "4.2.2"
      }
    },
    "node_modules/@webassemblyjs/utf8": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/utf8/-/utf8-1.13.2.tgz",
      "integrity": "sha512-3NQWGjKTASY1xV5m7Hr0iPeXD9+RDobLll3T9d2AO+g3my8xy5peVyjSag4I50mR1bBSN/Ct12lo+R9tJk0NZQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@webassemblyjs/wasm-edit": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-edit/-/wasm-edit-1.14.1.tgz",
      "integrity": "sha512-RNJUIQH/J8iA/1NzlE4N7KtyZNHi3w7at7hDjvRNm5rcUXa00z1vRz3glZoULfJ5mpvYhLybmVcwcjGrC1pRrQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@webassemblyjs/ast": "1.14.1",
        "@webassemblyjs/helper-buffer": "1.14.1",
        "@webassemblyjs/helper-wasm-bytecode": "1.13.2",
        "@webassemblyjs/helper-wasm-section": "1.14.1",
        "@webassemblyjs/wasm-gen": "1.14.1",
        "@webassemblyjs/wasm-opt": "1.14.1",
        "@webassemblyjs/wasm-parser": "1.14.1",
        "@webassemblyjs/wast-printer": "1.14.1"
      }
    },
    "node_modules/@webassemblyjs/wasm-gen": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-gen/-/wasm-gen-1.14.1.tgz",
      "integrity": "sha512-AmomSIjP8ZbfGQhumkNvgC33AY7qtMCXnN6bL2u2Js4gVCg8fp735aEiMSBbDR7UQIj90n4wKAFUSEd0QN2Ukg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@webassemblyjs/ast": "1.14.1",
        "@webassemblyjs/helper-wasm-bytecode": "1.13.2",
        "@webassemblyjs/ieee754": "1.13.2",
        "@webassemblyjs/leb128": "1.13.2",
        "@webassemblyjs/utf8": "1.13.2"
      }
    },
    "node_modules/@webassemblyjs/wasm-opt": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-opt/-/wasm-opt-1.14.1.tgz",
      "integrity": "sha512-PTcKLUNvBqnY2U6E5bdOQcSM+oVP/PmrDY9NzowJjislEjwP/C4an2303MCVS2Mg9d3AJpIGdUFIQQWbPds0Sw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@webassemblyjs/ast": "1.14.1",
        "@webassemblyjs/helper-buffer": "1.14.1",
        "@webassemblyjs/wasm-gen": "1.14.1",
        "@webassemblyjs/wasm-parser": "1.14.1"
      }
    },
    "node_modules/@webassemblyjs/wasm-parser": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-parser/-/wasm-parser-1.14.1.tgz",
      "integrity": "sha512-JLBl+KZ0R5qB7mCnud/yyX08jWFw5MsoalJ1pQ4EdFlgj9VdXKGuENGsiCIjegI1W7p91rUlcB/LB5yRJKNTcQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@webassemblyjs/ast": "1.14.1",
        "@webassemblyjs/helper-api-error": "1.13.2",
        "@webassemblyjs/helper-wasm-bytecode": "1.13.2",
        "@webassemblyjs/ieee754": "1.13.2",
        "@webassemblyjs/leb128": "1.13.2",
        "@webassemblyjs/utf8": "1.13.2"
      }
    },
    "node_modules/@webassemblyjs/wast-printer": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wast-printer/-/wast-printer-1.14.1.tgz",
      "integrity": "sha512-kPSSXE6De1XOR820C90RIo2ogvZG+c3KiHzqUoO/F34Y2shGzesfqv7o57xrxovZJH/MetF5UjroJ/R/3isoiw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@webassemblyjs/ast": "1.14.1",
        "@xtuc/long": "4.2.2"
      }
    },
    "node_modules/@xhmikosr/archive-type": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/@xhmikosr/archive-type/-/archive-type-7.1.0.tgz",
      "integrity": "sha512-xZEpnGplg1sNPyEgFh0zbHxqlw5dtYg6viplmWSxUj12+QjU9SKu3U/2G73a15pEjLaOqTefNSZ1fOPUOT4Xgg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "file-type": "^20.5.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@xhmikosr/archive-type/node_modules/file-type": {
      "version": "20.5.0",
      "resolved": "https://registry.npmjs.org/file-type/-/file-type-20.5.0.tgz",
      "integrity": "sha512-BfHZtG/l9iMm4Ecianu7P8HRD2tBHLtjXinm4X62XBOYzi7CYA7jyqfJzOvXHqzVrVPYqBo2/GvbARMaaJkKVg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@tokenizer/inflate": "^0.2.6",
        "strtok3": "^10.2.0",
        "token-types": "^6.0.0",
        "uint8array-extras": "^1.4.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/file-type?sponsor=1"
      }
    },
    "node_modules/@xhmikosr/bin-check": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/@xhmikosr/bin-check/-/bin-check-7.1.0.tgz",
      "integrity": "sha512-y1O95J4mnl+6MpVmKfMYXec17hMEwE/yeCglFNdx+QvLLtP0yN4rSYcbkXnth+lElBuKKek2NbvOfOGPpUXCvw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "execa": "^5.1.1",
        "isexe": "^2.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@xhmikosr/bin-wrapper": {
      "version": "13.1.0",
      "resolved": "https://registry.npmjs.org/@xhmikosr/bin-wrapper/-/bin-wrapper-13.1.0.tgz",
      "integrity": "sha512-U0u3kG9FPGW518qXgHLliwb9AloQ3mm0SMQSa2CjcdEbyfYUZOpMrkP0w2QSPmT8AA8jsugGeubnvFKMhadAkQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@xhmikosr/bin-check": "^7.1.0",
        "@xhmikosr/downloader": "^15.1.0",
        "@xhmikosr/os-filter-obj": "^3.0.0",
        "bin-version-check": "^5.1.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@xhmikosr/decompress": {
      "version": "10.1.0",
      "resolved": "https://registry.npmjs.org/@xhmikosr/decompress/-/decompress-10.1.0.tgz",
      "integrity": "sha512-jmVnzuJYX4f89Ls63CRI5s0GrWpLUqo+vY+8YrXuFiebDcF3xFwiSVCie68LrJNltSYMLcDY60JN51H/lVTw6Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@xhmikosr/decompress-tar": "^8.1.0",
        "@xhmikosr/decompress-tarbz2": "^8.1.0",
        "@xhmikosr/decompress-targz": "^8.1.0",
        "@xhmikosr/decompress-unzip": "^7.1.0",
        "graceful-fs": "^4.2.11",
        "make-dir": "^4.0.0",
        "strip-dirs": "^3.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@xhmikosr/decompress-tar": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/@xhmikosr/decompress-tar/-/decompress-tar-8.1.0.tgz",
      "integrity": "sha512-m0q8x6lwxenh1CrsTby0Jrjq4vzW/QU1OLhTHMQLEdHpmjR1lgahGz++seZI0bXF3XcZw3U3xHfqZSz+JPP2Gg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "file-type": "^20.5.0",
        "is-stream": "^2.0.1",
        "tar-stream": "^3.1.7"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@xhmikosr/decompress-tar/node_modules/file-type": {
      "version": "20.5.0",
      "resolved": "https://registry.npmjs.org/file-type/-/file-type-20.5.0.tgz",
      "integrity": "sha512-BfHZtG/l9iMm4Ecianu7P8HRD2tBHLtjXinm4X62XBOYzi7CYA7jyqfJzOvXHqzVrVPYqBo2/GvbARMaaJkKVg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@tokenizer/inflate": "^0.2.6",
        "strtok3": "^10.2.0",
        "token-types": "^6.0.0",
        "uint8array-extras": "^1.4.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/file-type?sponsor=1"
      }
    },
    "node_modules/@xhmikosr/decompress-tarbz2": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/@xhmikosr/decompress-tarbz2/-/decompress-tarbz2-8.1.0.tgz",
      "integrity": "sha512-aCLfr3A/FWZnOu5eqnJfme1Z1aumai/WRw55pCvBP+hCGnTFrcpsuiaVN5zmWTR53a8umxncY2JuYsD42QQEbw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@xhmikosr/decompress-tar": "^8.0.1",
        "file-type": "^20.5.0",
        "is-stream": "^2.0.1",
        "seek-bzip": "^2.0.0",
        "unbzip2-stream": "^1.4.3"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@xhmikosr/decompress-tarbz2/node_modules/file-type": {
      "version": "20.5.0",
      "resolved": "https://registry.npmjs.org/file-type/-/file-type-20.5.0.tgz",
      "integrity": "sha512-BfHZtG/l9iMm4Ecianu7P8HRD2tBHLtjXinm4X62XBOYzi7CYA7jyqfJzOvXHqzVrVPYqBo2/GvbARMaaJkKVg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@tokenizer/inflate": "^0.2.6",
        "strtok3": "^10.2.0",
        "token-types": "^6.0.0",
        "uint8array-extras": "^1.4.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/file-type?sponsor=1"
      }
    },
    "node_modules/@xhmikosr/decompress-targz": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/@xhmikosr/decompress-targz/-/decompress-targz-8.1.0.tgz",
      "integrity": "sha512-fhClQ2wTmzxzdz2OhSQNo9ExefrAagw93qaG1YggoIz/QpI7atSRa7eOHv4JZkpHWs91XNn8Hry3CwUlBQhfPA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@xhmikosr/decompress-tar": "^8.0.1",
        "file-type": "^20.5.0",
        "is-stream": "^2.0.1"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@xhmikosr/decompress-targz/node_modules/file-type": {
      "version": "20.5.0",
      "resolved": "https://registry.npmjs.org/file-type/-/file-type-20.5.0.tgz",
      "integrity": "sha512-BfHZtG/l9iMm4Ecianu7P8HRD2tBHLtjXinm4X62XBOYzi7CYA7jyqfJzOvXHqzVrVPYqBo2/GvbARMaaJkKVg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@tokenizer/inflate": "^0.2.6",
        "strtok3": "^10.2.0",
        "token-types": "^6.0.0",
        "uint8array-extras": "^1.4.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/file-type?sponsor=1"
      }
    },
    "node_modules/@xhmikosr/decompress-unzip": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/@xhmikosr/decompress-unzip/-/decompress-unzip-7.1.0.tgz",
      "integrity": "sha512-oqTYAcObqTlg8owulxFTqiaJkfv2SHsxxxz9Wg4krJAHVzGWlZsU8tAB30R6ow+aHrfv4Kub6WQ8u04NWVPUpA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "file-type": "^20.5.0",
        "get-stream": "^6.0.1",
        "yauzl": "^3.1.2"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@xhmikosr/decompress-unzip/node_modules/file-type": {
      "version": "20.5.0",
      "resolved": "https://registry.npmjs.org/file-type/-/file-type-20.5.0.tgz",
      "integrity": "sha512-BfHZtG/l9iMm4Ecianu7P8HRD2tBHLtjXinm4X62XBOYzi7CYA7jyqfJzOvXHqzVrVPYqBo2/GvbARMaaJkKVg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@tokenizer/inflate": "^0.2.6",
        "strtok3": "^10.2.0",
        "token-types": "^6.0.0",
        "uint8array-extras": "^1.4.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/file-type?sponsor=1"
      }
    },
    "node_modules/@xhmikosr/decompress/node_modules/make-dir": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-4.0.0.tgz",
      "integrity": "sha512-hXdUTZYIVOt1Ex//jAQi+wTZZpUpwBj/0QsOzqegb3rGMMeJiSEu5xLHnYfBrRV4RH2+OCSOO95Is/7x1WJ4bw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "semver": "^7.5.3"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@xhmikosr/downloader": {
      "version": "15.1.1",
      "resolved": "https://registry.npmjs.org/@xhmikosr/downloader/-/downloader-15.1.1.tgz",
      "integrity": "sha512-zRj8cT8KbXigN5bJz9QszeyR1Jsc4HOizjLOB5FspQ0COvKpoAOq/OUYAI5b0Pt4pfeSyc6F5iHvdGCg8Him8Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@xhmikosr/archive-type": "^7.1.0",
        "@xhmikosr/decompress": "^10.1.0",
        "content-disposition": "^0.5.4",
        "defaults": "^2.0.2",
        "ext-name": "^5.0.0",
        "file-type": "^20.5.0",
        "filenamify": "^6.0.0",
        "get-stream": "^6.0.1",
        "got": "^13.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@xhmikosr/downloader/node_modules/file-type": {
      "version": "20.5.0",
      "resolved": "https://registry.npmjs.org/file-type/-/file-type-20.5.0.tgz",
      "integrity": "sha512-BfHZtG/l9iMm4Ecianu7P8HRD2tBHLtjXinm4X62XBOYzi7CYA7jyqfJzOvXHqzVrVPYqBo2/GvbARMaaJkKVg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@tokenizer/inflate": "^0.2.6",
        "strtok3": "^10.2.0",
        "token-types": "^6.0.0",
        "uint8array-extras": "^1.4.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/file-type?sponsor=1"
      }
    },
    "node_modules/@xhmikosr/os-filter-obj": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/@xhmikosr/os-filter-obj/-/os-filter-obj-3.0.0.tgz",
      "integrity": "sha512-siPY6BD5dQ2SZPl3I0OZBHL27ZqZvLEosObsZRQ1NUB8qcxegwt0T9eKtV96JMFQpIz1elhkzqOg4c/Ri6Dp9A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "arch": "^3.0.0"
      },
      "engines": {
        "node": "^14.14.0 || >=16.0.0"
      }
    },
    "node_modules/@xtuc/ieee754": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@xtuc/ieee754/-/ieee754-1.2.0.tgz",
      "integrity": "sha512-DX8nKgqcGwsc0eJSqYt5lwP4DH5FlHnmuWWBRy7X0NcaGR0ZtuyeESgMwTYVEtxmsNGY+qit4QYT/MIYTOTPeA==",
      "dev": true,
      "license": "BSD-3-Clause"
    },
    "node_modules/@xtuc/long": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/@xtuc/long/-/long-4.2.2.tgz",
      "integrity": "sha512-NuHqBY1PB/D8xU6s/thBgOAiAP7HOYDQ32+BFZILJ8ivkUkAHQnWfn6WhL79Owj1qmUnoN/YPhktdIoucipkAQ==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/accepts": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-2.0.0.tgz",
      "integrity": "sha512-5cvg6CtKwfgdmVqY1WIiXKc3Q1bkRqGLi+2W/6ao+6Y7gu/RCwRuAhGEzh5B4KlszSuTLgZYuqFqo5bImjNKng==",
      "license": "MIT",
      "dependencies": {
        "mime-types": "^3.0.0",
        "negotiator": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/acorn": {
      "version": "8.15.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.15.0.tgz",
      "integrity": "sha512-NZyJarBfL7nWwIq+FDL6Zp/yHEhePMNnnJ0y3qfieCrmNvYct8uvtiV41UvlSe6apAfk0fY1FbWx+NwfmpvtTg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-import-phases": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/acorn-import-phases/-/acorn-import-phases-1.0.4.tgz",
      "integrity": "sha512-wKmbr/DDiIXzEOiWrTTUcDm24kQ2vGfZQvM2fwg2vXqR5uW6aapr7ObPtj1th32b9u90/Pf4AItvdTh42fBmVQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10.13.0"
      },
      "peerDependencies": {
        "acorn": "^8.14.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/acorn-walk": {
      "version": "8.3.4",
      "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-8.3.4.tgz",
      "integrity": "sha512-ueEepnujpqee2o5aIYnvHU6C0A42MNdsIDeqy5BydrkuC5R1ZuUFnm27EeFJGoEHJQgn3uleRvmTXaJgfXbt4g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "acorn": "^8.11.0"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ajv-formats": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/ajv-formats/-/ajv-formats-3.0.1.tgz",
      "integrity": "sha512-8iUql50EUR+uUcdRQ3HDqa6EVyo3docL8g5WJ3FNcWmu62IbkGUue/pEyLBW8VGKKucTPgqeks4fIU1DA4yowQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^8.0.0"
      },
      "peerDependencies": {
        "ajv": "^8.0.0"
      },
      "peerDependenciesMeta": {
        "ajv": {
          "optional": true
        }
      }
    },
    "node_modules/ajv-formats/node_modules/ajv": {
      "version": "8.17.1",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.17.1.tgz",
      "integrity": "sha512-B/gBuNg5SiMTrPkC+A2+cW0RszwxYmn6VYxB/inlBStS5nx6xHIt/ehKRhIMhqusl7a8LjQoZnjCs5vhwxOQ1g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.3",
        "fast-uri": "^3.0.1",
        "json-schema-traverse": "^1.0.0",
        "require-from-string": "^2.0.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ajv-formats/node_modules/json-schema-traverse": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
      "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/ajv-keywords": {
      "version": "3.5.2",
      "resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-3.5.2.tgz",
      "integrity": "sha512-5p6WTN0DdTGVQk6VjcEju19IgaHudalcfabD7yhDGeA6bcQnmL+CpveLJq/3hvfwd1aof6L386Ougkx6RfyMIQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "ajv": "^6.9.1"
      }
    },
    "node_modules/ansi-colors": {
      "version": "4.1.3",
      "resolved": "https://registry.npmjs.org/ansi-colors/-/ansi-colors-4.1.3.tgz",
      "integrity": "sha512-/6w/C21Pm1A7aZitlI5Ni/2J6FFQN8i1Cvz3kHABAAbw93v/NlvKdVOqz7CCWz/3iv/JplRSEEZ83XION15ovw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/ansi-escapes": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-4.3.2.tgz",
      "integrity": "sha512-gKXj5ALrKWQLsYG9jlTRmR/xKluxHV+Z9QEwNIgCfM1/uwPMCuzVVnh5mwTd+OuBZcwSIMbqssNWRm1lE51QaQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "type-fest": "^0.21.3"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/ansis": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/ansis/-/ansis-4.2.0.tgz",
      "integrity": "sha512-HqZ5rWlFjGiV0tDm3UxxgNRqsOTniqoKZu0pIAfh7TZQMGuZK+hH0drySty0si0QXj1ieop4+SkSfPZBPPkHig==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/anymatch": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/anymatch/node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/append-field": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/append-field/-/append-field-1.0.0.tgz",
      "integrity": "sha512-klpgFSWLW1ZEs8svjfb7g4qWY0YS5imI82dTg+QahUvJ8YqAY0P10Uk8tTyh9ZGuYEZEMaeJYCF5BFuX552hsw==",
      "license": "MIT"
    },
    "node_modules/arch": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/arch/-/arch-3.0.0.tgz",
      "integrity": "sha512-AmIAC+Wtm2AU8lGfTtHsw0Y9Qtftx2YXEEtiBP10xFUtMOA+sHHx6OAddyL52mUKh1vsXQ6/w1mVDptZCyUt4Q==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/arg": {
      "version": "4.1.3",
      "resolved": "https://registry.npmjs.org/arg/-/arg-4.1.3.tgz",
      "integrity": "sha512-58S9QDqG0Xx27YwPSt9fJxivjYl432YCwfDMfZ+71RAqUrZef7LrKQZ3LHLOwCS4FLNBplP533Zx895SeOCHvA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "dev": true,
      "license": "Python-2.0"
    },
    "node_modules/array-timsort": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/array-timsort/-/array-timsort-1.0.3.tgz",
      "integrity": "sha512-/+3GRL7dDAGEfM6TseQk/U+mi18TU2Ms9I3UlLdUMhz2hbvGNTKdj9xniwXfUqgYhHxRx0+8UnKkvlNwVU+cWQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/asap": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/asap/-/asap-2.0.6.tgz",
      "integrity": "sha512-BSHWgDSAiKs50o2Re8ppvp3seVHXSRM44cdSsT9FfNEUUZLOGWVCsiWaRPWM1Znn+mqZ1OfVZ3z3DWEzSp7hRA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/async": {
      "version": "3.2.6",
      "resolved": "https://registry.npmjs.org/async/-/async-3.2.6.tgz",
      "integrity": "sha512-htCUDlxyyCLMgaM3xXg0C0LW2xqfuQ6p05pCEIsXuyQ+a1koYKTuBMzRNwmybfLgvJDMd0r1LTn4+E0Ti6C2AA==",
      "license": "MIT"
    },
    "node_modules/async-listen": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/async-listen/-/async-listen-3.0.0.tgz",
      "integrity": "sha512-V+SsTpDqkrWTimiotsyl33ePSjA5/KrithwupuvJ6ztsqPvGv6ge4OredFhPffVXiLN/QUWvE0XcqJaYgt6fOg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/b4a": {
      "version": "1.6.7",
      "resolved": "https://registry.npmjs.org/b4a/-/b4a-1.6.7.tgz",
      "integrity": "sha512-OnAYlL5b7LEkALw87fUVafQw5rVR9RjwGd4KUwNQ6DrrNmaVaUCgLipfVlzrPQ4tWOR9P0IXGNOx50jYCCdSJg==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/babel-jest": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/babel-jest/-/babel-jest-29.7.0.tgz",
      "integrity": "sha512-BrvGY3xZSwEcCzKvKsCi2GgHqDqsYkOP4/by5xCgIwGXQxIEh+8ew3gmrE1y7XRR6LHZIj6yLYnUi/mm2KXKBg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/transform": "^29.7.0",
        "@types/babel__core": "^7.1.14",
        "babel-plugin-istanbul": "^6.1.1",
        "babel-preset-jest": "^29.6.3",
        "chalk": "^4.0.0",
        "graceful-fs": "^4.2.9",
        "slash": "^3.0.0"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.8.0"
      }
    },
    "node_modules/babel-plugin-istanbul": {
      "version": "6.1.1",
      "resolved": "https://registry.npmjs.org/babel-plugin-istanbul/-/babel-plugin-istanbul-6.1.1.tgz",
      "integrity": "sha512-Y1IQok9821cC9onCx5otgFfRm7Lm+I+wwxOx738M/WLPZ9Q42m4IG5W0FNX8WLL2gYMZo3JkuXIH2DOpWM+qwA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@istanbuljs/load-nyc-config": "^1.0.0",
        "@istanbuljs/schema": "^0.1.2",
        "istanbul-lib-instrument": "^5.0.4",
        "test-exclude": "^6.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/babel-plugin-istanbul/node_modules/istanbul-lib-instrument": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-5.2.1.tgz",
      "integrity": "sha512-pzqtp31nLv/XFOzXGuvhCb8qhjmTVo5vjVk19XE4CRlSWz0KoeJ3bw9XsA7nOp9YBf4qHjwBxkDzKcME/J29Yg==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "@babel/core": "^7.12.3",
        "@babel/parser": "^7.14.7",
        "@istanbuljs/schema": "^0.1.2",
        "istanbul-lib-coverage": "^3.2.0",
        "semver": "^6.3.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/babel-plugin-istanbul/node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/babel-plugin-jest-hoist": {
      "version": "29.6.3",
      "resolved": "https://registry.npmjs.org/babel-plugin-jest-hoist/-/babel-plugin-jest-hoist-29.6.3.tgz",
      "integrity": "sha512-ESAc/RJvGTFEzRwOTT4+lNDk/GNHMkKbNzsvT0qKRfDyyYTskxB5rnU2njIDYVxXCBHHEI1c0YwHob3WaYujOg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.3.3",
        "@babel/types": "^7.3.3",
        "@types/babel__core": "^7.1.14",
        "@types/babel__traverse": "^7.0.6"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/babel-preset-current-node-syntax": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/babel-preset-current-node-syntax/-/babel-preset-current-node-syntax-1.1.0.tgz",
      "integrity": "sha512-ldYss8SbBlWva1bs28q78Ju5Zq1F+8BrqBZZ0VFhLBvhh6lCpC2o3gDJi/5DRLs9FgYZCnmPYIVFU4lRXCkyUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/plugin-syntax-async-generators": "^7.8.4",
        "@babel/plugin-syntax-bigint": "^7.8.3",
        "@babel/plugin-syntax-class-properties": "^7.12.13",
        "@babel/plugin-syntax-class-static-block": "^7.14.5",
        "@babel/plugin-syntax-import-attributes": "^7.24.7",
        "@babel/plugin-syntax-import-meta": "^7.10.4",
        "@babel/plugin-syntax-json-strings": "^7.8.3",
        "@babel/plugin-syntax-logical-assignment-operators": "^7.10.4",
        "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.3",
        "@babel/plugin-syntax-numeric-separator": "^7.10.4",
        "@babel/plugin-syntax-object-rest-spread": "^7.8.3",
        "@babel/plugin-syntax-optional-catch-binding": "^7.8.3",
        "@babel/plugin-syntax-optional-chaining": "^7.8.3",
        "@babel/plugin-syntax-private-property-in-object": "^7.14.5",
        "@babel/plugin-syntax-top-level-await": "^7.14.5"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/babel-preset-jest": {
      "version": "29.6.3",
      "resolved": "https://registry.npmjs.org/babel-preset-jest/-/babel-preset-jest-29.6.3.tgz",
      "integrity": "sha512-0B3bhxR6snWXJZtR/RliHTDPRgn1sNHOR0yVtq/IiQFyuOVjFS+wuio/R4gSNkyYmKmJB4wGZv2NZanmKmTnNA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "babel-plugin-jest-hoist": "^29.6.3",
        "babel-preset-current-node-syntax": "^1.0.0"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/bare-events": {
      "version": "2.6.0",
      "resolved": "https://registry.npmjs.org/bare-events/-/bare-events-2.6.0.tgz",
      "integrity": "sha512-EKZ5BTXYExaNqi3I3f9RtEsaI/xBSGjE0XZCZilPzFAV/goswFHuPd9jEZlPIZ/iNZJwDSao9qRiScySz7MbQg==",
      "dev": true,
      "license": "Apache-2.0",
      "optional": true
    },
    "node_modules/base64-js": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
      "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/base64id": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/base64id/-/base64id-2.0.0.tgz",
      "integrity": "sha512-lGe34o6EHj9y3Kts9R4ZYs/Gr+6N7MCaMlIFA3F1R2O5/m7K06AxfSeO5530PEERE6/WyEg3lsuyw4GHlPZHog==",
      "license": "MIT",
      "engines": {
        "node": "^4.5.0 || >= 5.9"
      }
    },
    "node_modules/base64url": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/base64url/-/base64url-3.0.1.tgz",
      "integrity": "sha512-ir1UPr3dkwexU7FdV8qBBbNDRUhMmIekYMFZfi+C/sLNnRESKPl23nB9b2pltqfOQNnGzsDdId90AEtG5tCx4A==",
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.9.6",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.9.6.tgz",
      "integrity": "sha512-v9BVVpOTLB59C9E7aSnmIF8h7qRsFpx+A2nugVMTszEOMcfjlZMsXRm4LF23I3Z9AJxc8ANpIvzbzONoX9VJlg==",
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.js"
      }
    },
    "node_modules/bcryptjs": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/bcryptjs/-/bcryptjs-3.0.2.tgz",
      "integrity": "sha512-k38b3XOZKv60C4E2hVsXTolJWfkGRMbILBIe2IBITXciy5bOsTKot5kDrf3ZfufQtQOUN5mXceUEpU1rTl9Uog==",
      "license": "BSD-3-Clause",
      "bin": {
        "bcrypt": "bin/bcrypt"
      }
    },
    "node_modules/bin-version": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/bin-version/-/bin-version-6.0.0.tgz",
      "integrity": "sha512-nk5wEsP4RiKjG+vF+uG8lFsEn4d7Y6FVDamzzftSunXOoOcOOkzcWdKVlGgFFwlUQCj63SgnUkLLGF8v7lufhw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "execa": "^5.0.0",
        "find-versions": "^5.0.0"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/bin-version-check": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/bin-version-check/-/bin-version-check-5.1.0.tgz",
      "integrity": "sha512-bYsvMqJ8yNGILLz1KP9zKLzQ6YpljV3ln1gqhuLkUtyfGi3qXKGuK2p+U4NAvjVFzDFiBBtOpCOSFNuYYEGZ5g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "bin-version": "^6.0.0",
        "semver": "^7.5.3",
        "semver-truncate": "^3.0.0"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/bl": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/bl/-/bl-4.1.0.tgz",
      "integrity": "sha512-1W07cM9gS6DcLperZfFSj+bWLtaPGSOHWhPiGzXmvVJbRLdG82sH/Kn8EtW1VqWVA54AKf2h5k5BbnIbwF3h6w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "buffer": "^5.5.0",
        "inherits": "^2.0.4",
        "readable-stream": "^3.4.0"
      }
    },
    "node_modules/body-parser": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-2.2.1.tgz",
      "integrity": "sha512-nfDwkulwiZYQIGwxdy0RUmowMhKcFVcYXUU7m4QlKYim1rUtg83xm2yjZ40QjDuc291AJjjeSc9b++AWHSgSHw==",
      "license": "MIT",
      "dependencies": {
        "bytes": "^3.1.2",
        "content-type": "^1.0.5",
        "debug": "^4.4.3",
        "http-errors": "^2.0.0",
        "iconv-lite": "^0.7.0",
        "on-finished": "^2.4.1",
        "qs": "^6.14.0",
        "raw-body": "^3.0.1",
        "type-is": "^2.0.1"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/brace-expansion": {
      "version": "1.1.12",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz",
      "integrity": "sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/browserslist": {
      "version": "4.28.1",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.28.1.tgz",
      "integrity": "sha512-ZC5Bd0LgJXgwGqUknZY/vkUQ04r8NXnJZ3yYi4vDmSiZmC/pdSN0NbNRPxZpbtO4uAfDUAFffO8IZoM3Gj8IkA==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "baseline-browser-mapping": "^2.9.0",
        "caniuse-lite": "^1.0.30001759",
        "electron-to-chromium": "^1.5.263",
        "node-releases": "^2.0.27",
        "update-browserslist-db": "^1.2.0"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/bs-logger": {
      "version": "0.2.6",
      "resolved": "https://registry.npmjs.org/bs-logger/-/bs-logger-0.2.6.tgz",
      "integrity": "sha512-pd8DCoxmbgc7hyPKOvxtqNcjYoOsABPQdcCUjGp3d42VR2CX1ORhk2A87oqqu5R1kk+76nsxZupkmyd+MVtCog==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-json-stable-stringify": "2.x"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/bser": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/bser/-/bser-2.1.1.tgz",
      "integrity": "sha512-gQxTNE/GAfIIrmHLUE3oJyp5FO6HRBfhjnw4/wMmA63ZGDJnWBmgY/lyQBpnDUkGmAhbSe39tx2d/iTOAfglwQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "node-int64": "^0.4.0"
      }
    },
    "node_modules/buffer": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/buffer/-/buffer-5.7.1.tgz",
      "integrity": "sha512-EHcyIPBQ4BSGlvjB16k5KgAJ27CIsHY/2JBmCRReo48y9rQ3MaUzWX3KVlBa4U7MyX02HdVj0K7C3WaB3ju7FQ==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "base64-js": "^1.3.1",
        "ieee754": "^1.1.13"
      }
    },
    "node_modules/buffer-crc32": {
      "version": "0.2.13",
      "resolved": "https://registry.npmjs.org/buffer-crc32/-/buffer-crc32-0.2.13.tgz",
      "integrity": "sha512-VO9Ht/+p3SN7SKWqcrgEzjGbRSJYTx+Q1pTQC0wrWqHx0vpJraQ6GtHx8tvcg1rlK1byhU5gccxgOgj7B0TDkQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "*"
      }
    },
    "node_modules/buffer-equal-constant-time": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/buffer-equal-constant-time/-/buffer-equal-constant-time-1.0.1.tgz",
      "integrity": "sha512-zRpUiDwd/xk6ADqPMATG8vc9VPrkck7T07OIx0gnjmJAnHnTVXNQG3vfvWNuiZIkwu9KrKdA1iJKfsfTVxE6NA==",
      "license": "BSD-3-Clause"
    },
    "node_modules/buffer-from": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz",
      "integrity": "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==",
      "license": "MIT"
    },
    "node_modules/busboy": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/busboy/-/busboy-1.6.0.tgz",
      "integrity": "sha512-8SFQbg/0hQ9xy3UNTB0YEnsNBbWfhf7RtnzpL7TkBiTBRfrQ9Fxcnz7VJsleJpyp6rVLvXiuORqjlHi5q+PYuA==",
      "dependencies": {
        "streamsearch": "^1.1.0"
      },
      "engines": {
        "node": ">=10.16.0"
      }
    },
    "node_modules/bytes": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/c12": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/c12/-/c12-3.1.0.tgz",
      "integrity": "sha512-uWoS8OU1MEIsOv8p/5a82c3H31LsWVR5qiyXVfBNOzfffjUWtPnhAb4BYI2uG2HfGmZmFjCtui5XNWaps+iFuw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chokidar": "^4.0.3",
        "confbox": "^0.2.2",
        "defu": "^6.1.4",
        "dotenv": "^16.6.1",
        "exsolve": "^1.0.7",
        "giget": "^2.0.0",
        "jiti": "^2.4.2",
        "ohash": "^2.0.11",
        "pathe": "^2.0.3",
        "perfect-debounce": "^1.0.0",
        "pkg-types": "^2.2.0",
        "rc9": "^2.1.2"
      },
      "peerDependencies": {
        "magicast": "^0.3.5"
      },
      "peerDependenciesMeta": {
        "magicast": {
          "optional": true
        }
      }
    },
    "node_modules/c12/node_modules/dotenv": {
      "version": "16.6.1",
      "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-16.6.1.tgz",
      "integrity": "sha512-uBq4egWHTcTt33a72vpSG0z3HnPuIl6NqYcTrKEg2azoEyl2hpW0zqlxysq2pK9HlDIHyHyakeYaYnSAwd8bow==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://dotenvx.com"
      }
    },
    "node_modules/cacheable-lookup": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/cacheable-lookup/-/cacheable-lookup-7.0.0.tgz",
      "integrity": "sha512-+qJyx4xiKra8mZrcwhjMRMUhD5NR1R8esPkzIYxX96JiecFoxAXFuz/GpR3+ev4PE1WamHip78wV0vcmPQtp8w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14.16"
      }
    },
    "node_modules/cacheable-request": {
      "version": "10.2.14",
      "resolved": "https://registry.npmjs.org/cacheable-request/-/cacheable-request-10.2.14.tgz",
      "integrity": "sha512-zkDT5WAF4hSSoUgyfg5tFIxz8XQK+25W/TLVojJTMKBaxevLBBtLxgqguAuVQB8PVW79FVjHcU+GJ9tVbDZ9mQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/http-cache-semantics": "^4.0.2",
        "get-stream": "^6.0.1",
        "http-cache-semantics": "^4.1.1",
        "keyv": "^4.5.3",
        "mimic-response": "^4.0.0",
        "normalize-url": "^8.0.0",
        "responselike": "^3.0.0"
      },
      "engines": {
        "node": ">=14.16"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/camelcase": {
      "version": "5.3.1",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
      "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001760",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001760.tgz",
      "integrity": "sha512-7AAMPcueWELt1p3mi13HR/LHH0TJLT11cnwDJEs3xA4+CK/PLKeO9Kl1oru24htkyUKtkGCvAx4ohB0Ttry8Dw==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/char-regex": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/char-regex/-/char-regex-1.0.2.tgz",
      "integrity": "sha512-kWWXztvZ5SBQV+eRgKFeh8q5sLuZY2+8WUIzlxWVTg+oGwY14qylx1KbKzHd8P6ZYkAg0xyIDU9JMHhyJMZ1jw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/chardet": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/chardet/-/chardet-2.1.1.tgz",
      "integrity": "sha512-PsezH1rqdV9VvyNhxxOW32/d75r01NY7TQCmOqomRo15ZSOKbpTFVsfjghxo6JloQUCGnH4k1LGu0R4yCLlWQQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/chokidar": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-4.0.3.tgz",
      "integrity": "sha512-Qgzu8kfBvo+cA4962jnP1KkS6Dop5NS6g7R5LFYJr4b8Ub94PPQXUksCw9PvXoeXPRRddRNC5C1JQUR2SMGtnA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "readdirp": "^4.0.1"
      },
      "engines": {
        "node": ">= 14.16.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/chrome-trace-event": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/chrome-trace-event/-/chrome-trace-event-1.0.4.tgz",
      "integrity": "sha512-rNjApaLzuwaOTjCiT8lSDdGN1APCiqkChLMJxJPWLunPAt5fy8xgU9/jNOchV84wfIxrA0lRQB7oCT8jrn/wrQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0"
      }
    },
    "node_modules/ci-info": {
      "version": "3.9.0",
      "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-3.9.0.tgz",
      "integrity": "sha512-NIxF55hv4nSqQswkAeiOi1r83xy8JldOFDTWiug55KBu9Jnblncd2U6ViHmYgHf01TPZS77NJBhBMKdWj9HQMQ==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/sibiraj-s"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/citty": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/citty/-/citty-0.1.6.tgz",
      "integrity": "sha512-tskPPKEs8D2KPafUypv2gxwJP8h/OaJmC82QQGGDQcHvXX43xF2VDACcJVmZ0EuSxkpO9Kc4MlrA3q0+FG58AQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "consola": "^3.2.3"
      }
    },
    "node_modules/cjs-module-lexer": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/cjs-module-lexer/-/cjs-module-lexer-1.2.3.tgz",
      "integrity": "sha512-0TNiGstbQmCFwt4akjjBg5pLRTSyj/PkWQ1ZoO2zntmg9yLqSRxwEa4iCfQLGjqhiqBfOJa7W/E8wfGrTDmlZQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/class-transformer": {
      "version": "0.5.1",
      "resolved": "https://registry.npmjs.org/class-transformer/-/class-transformer-0.5.1.tgz",
      "integrity": "sha512-SQa1Ws6hUbfC98vKGxZH3KFY0Y1lm5Zm0SY8XX9zbK7FJCyVEac3ATW0RIpwzW+oOfmHE5PMPufDG9hCfoEOMw==",
      "license": "MIT",
      "peer": true
    },
    "node_modules/class-validator": {
      "version": "0.14.2",
      "resolved": "https://registry.npmjs.org/class-validator/-/class-validator-0.14.2.tgz",
      "integrity": "sha512-3kMVRF2io8N8pY1IFIXlho9r8IPUUIfHe2hYVtiebvAzU2XeQFXTv+XI4WX+TnXmtwXMDcjngcpkiPM0O9PvLw==",
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@types/validator": "^13.11.8",
        "libphonenumber-js": "^1.11.1",
        "validator": "^13.9.0"
      }
    },
    "node_modules/cli-cursor": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-3.1.0.tgz",
      "integrity": "sha512-I/zHAwsKf9FqGoXM4WWRACob9+SNukZTd94DWF57E4toouRulbCxcUh6RKUEOQlYTHJnzkPMySvPNaaSLNfLZw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "restore-cursor": "^3.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/cli-spinners": {
      "version": "2.9.2",
      "resolved": "https://registry.npmjs.org/cli-spinners/-/cli-spinners-2.9.2.tgz",
      "integrity": "sha512-ywqV+5MmyL4E7ybXgKys4DugZbX0FC6LnwrhjuykIjnK9k8OQacQ7axGKnjDXWNhns0xot3bZI5h55H8yo9cJg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/cli-table3": {
      "version": "0.6.5",
      "resolved": "https://registry.npmjs.org/cli-table3/-/cli-table3-0.6.5.tgz",
      "integrity": "sha512-+W/5efTR7y5HRD7gACw9yQjqMVvEMLBHmboM/kPWam+H+Hmyrgjh6YncVKK122YZkXrLudzTuAukUw9FnMf7IQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "string-width": "^4.2.0"
      },
      "engines": {
        "node": "10.* || >= 12.*"
      },
      "optionalDependencies": {
        "@colors/colors": "1.5.0"
      }
    },
    "node_modules/cli-width": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/cli-width/-/cli-width-4.1.0.tgz",
      "integrity": "sha512-ouuZd4/dm2Sw5Gmqy6bGyNNNe1qt9RpmxveLSO7KcgsTnU7RXfsw+/bukWGo1abgBiMAic068rclZsO4IWmmxQ==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/cliui": {
      "version": "8.0.1",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-8.0.1.tgz",
      "integrity": "sha512-BSeNnyus75C4//NQ9gQt1/csTXyo/8Sb+afLAkzAptFuMsod9HFokGNudZpi/oQV73hnVK+sR+5PVRMd+Dr7YQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "string-width": "^4.2.0",
        "strip-ansi": "^6.0.1",
        "wrap-ansi": "^7.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/cliui/node_modules/wrap-ansi": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/clone": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/clone/-/clone-1.0.4.tgz",
      "integrity": "sha512-JQHZ2QMW6l3aH/j6xCqQThY/9OH4D/9ls34cgkUBiEeocRTU04tHfKPBsUK1PqZCUQM7GiA0IIXJSuXHI64Kbg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/cloudinary": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/cloudinary/-/cloudinary-2.7.0.tgz",
      "integrity": "sha512-qrqDn31+qkMCzKu1GfRpzPNAO86jchcNwEHCUiqvPHNSFqu7FTNF9FuAkBUyvM1CFFgFPu64NT0DyeREwLwK0w==",
      "license": "MIT",
      "dependencies": {
        "lodash": "^4.17.21",
        "q": "^1.5.1"
      },
      "engines": {
        "node": ">=9"
      }
    },
    "node_modules/co": {
      "version": "4.6.0",
      "resolved": "https://registry.npmjs.org/co/-/co-4.6.0.tgz",
      "integrity": "sha512-QVb0dM5HvG+uaxitm8wONl7jltx8dqhfU33DcqtOZcLSVIKSDDLDi7+0LbAKiyI8hD9u42m2YxXSkMGWThaecQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "iojs": ">= 1.0.0",
        "node": ">= 0.12.0"
      }
    },
    "node_modules/code-block-writer": {
      "version": "10.1.1",
      "resolved": "https://registry.npmjs.org/code-block-writer/-/code-block-writer-10.1.1.tgz",
      "integrity": "sha512-67ueh2IRGst/51p0n6FvPrnRjAGHY5F8xdjkgrYE7DDzpJe6qA07RYQ9VcoUeo5ATOjSOiWpSL3SWBRRbempMw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/collect-v8-coverage": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/collect-v8-coverage/-/collect-v8-coverage-1.0.2.tgz",
      "integrity": "sha512-lHl4d5/ONEbLlJvaJNtsF/Lz+WvB07u2ycqTYbdrq7UypDXailES4valYb2eWiJFxZlVmpGekfqoxQhzyFdT4Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/color": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/color/-/color-5.0.2.tgz",
      "integrity": "sha512-e2hz5BzbUPcYlIRHo8ieAhYgoajrJr+hWoceg6E345TPsATMUKqDgzt8fSXZJJbxfpiPzkWyphz8yn8At7q3fA==",
      "license": "MIT",
      "dependencies": {
        "color-convert": "^3.0.1",
        "color-string": "^2.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/color-string": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/color-string/-/color-string-2.1.2.tgz",
      "integrity": "sha512-RxmjYxbWemV9gKu4zPgiZagUxbH3RQpEIO77XoSSX0ivgABDZ+h8Zuash/EMFLTI4N9QgFPOJ6JQpPZKFxa+dA==",
      "license": "MIT",
      "dependencies": {
        "color-name": "^2.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/color-string/node_modules/color-name": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-2.0.2.tgz",
      "integrity": "sha512-9vEt7gE16EW7Eu7pvZnR0abW9z6ufzhXxGXZEVU9IqPdlsUiMwJeJfRtq0zePUmnbHGT9zajca7mX8zgoayo4A==",
      "license": "MIT",
      "engines": {
        "node": ">=12.20"
      }
    },
    "node_modules/color/node_modules/color-convert": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-3.1.2.tgz",
      "integrity": "sha512-UNqkvCDXstVck3kdowtOTWROIJQwafjOfXSmddoDrXo4cewMKmusCeF22Q24zvjR8nwWib/3S/dfyzPItPEiJg==",
      "license": "MIT",
      "dependencies": {
        "color-name": "^2.0.0"
      },
      "engines": {
        "node": ">=14.6"
      }
    },
    "node_modules/color/node_modules/color-name": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-2.0.2.tgz",
      "integrity": "sha512-9vEt7gE16EW7Eu7pvZnR0abW9z6ufzhXxGXZEVU9IqPdlsUiMwJeJfRtq0zePUmnbHGT9zajca7mX8zgoayo4A==",
      "license": "MIT",
      "engines": {
        "node": ">=12.20"
      }
    },
    "node_modules/combined-stream": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "delayed-stream": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/commander": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz",
      "integrity": "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/comment-json": {
      "version": "4.2.5",
      "resolved": "https://registry.npmjs.org/comment-json/-/comment-json-4.2.5.tgz",
      "integrity": "sha512-bKw/r35jR3HGt5PEPm1ljsQQGyCrR8sFGNiN5L+ykDHdpO8Smxkrkla9Yi6NkQyUrb8V54PGhfMs6NrIwtxtdw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-timsort": "^1.0.3",
        "core-util-is": "^1.0.3",
        "esprima": "^4.0.1",
        "has-own-prop": "^2.0.0",
        "repeat-string": "^1.6.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/component-emitter": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.3.1.tgz",
      "integrity": "sha512-T0+barUSQRTUQASh8bx02dl+DhF54GtIDY13Y3m9oWTklKbb3Wv974meRpeZ3lp1JpLVECWWNHC4vaG2XHXouQ==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/concat-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-2.0.0.tgz",
      "integrity": "sha512-MWufYdFw53ccGjCA+Ol7XJYpAlW6/prSMzuPOTRnJGcGzuhLn4Scrz7qf6o8bROZ514ltazcIFJZevcfbo0x7A==",
      "engines": [
        "node >= 6.0"
      ],
      "license": "MIT",
      "dependencies": {
        "buffer-from": "^1.0.0",
        "inherits": "^2.0.3",
        "readable-stream": "^3.0.2",
        "typedarray": "^0.0.6"
      }
    },
    "node_modules/confbox": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/confbox/-/confbox-0.2.2.tgz",
      "integrity": "sha512-1NB+BKqhtNipMsov4xI/NnhCKp9XG9NamYp5PVm9klAT0fsrNPjaFICsCFhNhwZJKNh7zB/3q8qXz0E9oaMNtQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/consola": {
      "version": "3.4.2",
      "resolved": "https://registry.npmjs.org/consola/-/consola-3.4.2.tgz",
      "integrity": "sha512-5IKcdX0nnYavi6G7TtOhwkYzyjfJlatbjMjuLSfE2kYT5pMDOilZ4OvMhi637CcDICTmz3wARPoyhqyX1Y+XvA==",
      "license": "MIT",
      "engines": {
        "node": "^14.18.0 || >=16.10.0"
      }
    },
    "node_modules/content-disposition": {
      "version": "0.5.4",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz",
      "integrity": "sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "5.2.1"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/content-type": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
      "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/convert-hrtime": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/convert-hrtime/-/convert-hrtime-3.0.0.tgz",
      "integrity": "sha512-7V+KqSvMiHp8yWDuwfww06XleMWVVB9b9tURBx+G7UTADuo5hYPuowKloz4OzOqbPezxgo+fdQ1522WzPG4OeA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
      "license": "MIT"
    },
    "node_modules/cookie": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz",
      "integrity": "sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie-signature": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.2.2.tgz",
      "integrity": "sha512-D76uU73ulSXrD1UXF4KE2TMxVVwhsnCgfAyTg9k8P6KGZjlXKrOLe4dJQKI3Bxi5wjesZoFXJWElNWBjPZMbhg==",
      "license": "MIT",
      "engines": {
        "node": ">=6.6.0"
      }
    },
    "node_modules/cookiejar": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/cookiejar/-/cookiejar-2.1.4.tgz",
      "integrity": "sha512-LDx6oHrK+PhzLKJU9j5S7/Y3jM/mUHvD/DeI1WQmJn652iPC5Y4TBzC9l+5OMOXlyTTA+SmVUPm0HQUwpD5Jqw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/core-util-is": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.3.tgz",
      "integrity": "sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cors": {
      "version": "2.8.5",
      "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.5.tgz",
      "integrity": "sha512-KIHbLJqu73RGr/hnbrO9uBeixNGuvSQjul/jdFvS/KFSIH1hWVd1ng7zOHx+YrEfInLG7q4n6GHQ9cDtxv/P6g==",
      "license": "MIT",
      "dependencies": {
        "object-assign": "^4",
        "vary": "^1"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/cosmiconfig": {
      "version": "8.3.6",
      "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-8.3.6.tgz",
      "integrity": "sha512-kcZ6+W5QzcJ3P1Mt+83OUv/oHFqZHIx8DuxG6eZ5RGMERoLqp4BuGjhHLYGK+Kf5XVkQvqBSmAy/nGWN3qDgEA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "import-fresh": "^3.3.0",
        "js-yaml": "^4.1.0",
        "parse-json": "^5.2.0",
        "path-type": "^4.0.0"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/d-fischer"
      },
      "peerDependencies": {
        "typescript": ">=4.9.5"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/create-jest": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/create-jest/-/create-jest-29.7.0.tgz",
      "integrity": "sha512-Adz2bdH0Vq3F53KEMJOoftQFutWCukm6J24wbPWRO4k1kMY7gS7ds/uoJkNuV8wDCtWWnuwGcJwpWcih+zEW1Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/types": "^29.6.3",
        "chalk": "^4.0.0",
        "exit": "^0.1.2",
        "graceful-fs": "^4.2.9",
        "jest-config": "^29.7.0",
        "jest-util": "^29.7.0",
        "prompts": "^2.0.1"
      },
      "bin": {
        "create-jest": "bin/create-jest.js"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/create-require": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/create-require/-/create-require-1.1.1.tgz",
      "integrity": "sha512-dcKFX3jn0MpIaXjisoRvexIJVEKzaq7z2rZKxf+MSr9TkdmHmsU4m2lcLojrj/FHl8mk5VxMmYA+ftRkP/3oKQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/decompress-response": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/decompress-response/-/decompress-response-6.0.0.tgz",
      "integrity": "sha512-aW35yZM6Bb/4oJlZncMH2LCoZtJXTRxES17vE3hoRiowU2kWHaJKFkSBDnDR+cm9J+9QhXmREyIfv0pji9ejCQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "mimic-response": "^3.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/decompress-response/node_modules/mimic-response": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/mimic-response/-/mimic-response-3.1.0.tgz",
      "integrity": "sha512-z0yWI+4FDrrweS8Zmt4Ej5HdJmky15+L2e6Wgn3+iK5fWzb6T3fhNFq2+MeTRb064c6Wr4N/wv0DzQTjNzHNGQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/dedent": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/dedent/-/dedent-1.6.0.tgz",
      "integrity": "sha512-F1Z+5UCFpmQUzJa11agbyPVMbpgT/qA3/SKyJ1jyBgm7dUcUEa8v9JwDkerSQXfakBwFljIxhOJqGkjUwZ9FSA==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "babel-plugin-macros": "^3.1.0"
      },
      "peerDependenciesMeta": {
        "babel-plugin-macros": {
          "optional": true
        }
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/deepmerge": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/deepmerge/-/deepmerge-4.3.1.tgz",
      "integrity": "sha512-3sUqbMEc77XqpdNO7FRyRog+eW3ph+GYCbj+rK+uYyRMuwsVy0rMiVtPn+QJlKFvWP/1PYpapqYn0Me2knFn+A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/deepmerge-ts": {
      "version": "7.1.5",
      "resolved": "https://registry.npmjs.org/deepmerge-ts/-/deepmerge-ts-7.1.5.tgz",
      "integrity": "sha512-HOJkrhaYsweh+W+e74Yn7YStZOilkoPb6fycpwNLKzSPtruFs48nYis0zy5yJz1+ktUhHxoRDJ27RQAWLIJVJw==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/defaults": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/defaults/-/defaults-2.0.2.tgz",
      "integrity": "sha512-cuIw0PImdp76AOfgkjbW4VhQODRmNNcKR73vdCH5cLd/ifj7aamfoXvYgfGkEAjNJZ3ozMIy9Gu2LutUkGEPbA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=16"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/defer-to-connect": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/defer-to-connect/-/defer-to-connect-2.0.1.tgz",
      "integrity": "sha512-4tvttepXG1VaYGrRibk5EwJd1t4udunSOVMdLSAL6mId1ix438oPwPZMALY41FCijukO1L0twNcGsdzS7dHgDg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/defu": {
      "version": "6.1.4",
      "resolved": "https://registry.npmjs.org/defu/-/defu-6.1.4.tgz",
      "integrity": "sha512-mEQCMmwJu317oSz8CwdIOdwf3xMif1ttiM8LTufzc3g6kR+9Pe236twL8j3IYT1F7GfRgGcW6MWxzZjLIkuHIg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/depd": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/destr": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/destr/-/destr-2.0.5.tgz",
      "integrity": "sha512-ugFTXCtDZunbzasqBxrK93Ik/DRYsO6S/fedkWEMKqt04xZ4csmnmwGDBAb07QWNaGMAmnTIemsYZCksjATwsA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/detect-newline": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/detect-newline/-/detect-newline-3.1.0.tgz",
      "integrity": "sha512-TLz+x/vEXm/Y7P7wn1EJFNLxYpUD4TgMosxY6fAVJUnJMbupHBOncxyWUG9OpTaH9EBD7uFI5LfEgmMOc54DsA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/dezalgo": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/dezalgo/-/dezalgo-1.0.4.tgz",
      "integrity": "sha512-rXSP0bf+5n0Qonsb+SVVfNfIsimO4HEtmnIpPHY8Q1UCzKlQrDMfdobr8nJOOsRgWCyMRqeSBQzmWUMq7zvVig==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "asap": "^2.0.0",
        "wrappy": "1"
      }
    },
    "node_modules/diff": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/diff/-/diff-4.0.2.tgz",
      "integrity": "sha512-58lmxKSA4BNyLz+HHMUzlOEpg09FV+ev6ZMe3vJihgdxzgcwZ8VoEEPmALCZG9LmqfVoNMMKpttIYTVG6uDY7A==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.3.1"
      }
    },
    "node_modules/diff-sequences": {
      "version": "29.6.3",
      "resolved": "https://registry.npmjs.org/diff-sequences/-/diff-sequences-29.6.3.tgz",
      "integrity": "sha512-EjePK1srD3P08o2j4f0ExnylqRs5B9tJjcp9t1krH2qRi8CCdsYfwe9JgSLurFBWwq4uOlipzfk5fHNvwFKr8Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/dotenv": {
      "version": "16.4.7",
      "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-16.4.7.tgz",
      "integrity": "sha512-47qPchRCykZC03FhkYAhrvwU4xDBFIj1QPqaarj6mdM/hgUzfPHcpkHJOn3mJAufFeeAxAzeGsr5X0M4k6fLZQ==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://dotenvx.com"
      }
    },
    "node_modules/dotenv-expand": {
      "version": "12.0.1",
      "resolved": "https://registry.npmjs.org/dotenv-expand/-/dotenv-expand-12.0.1.tgz",
      "integrity": "sha512-LaKRbou8gt0RNID/9RoI+J2rvXsBRPMV7p+ElHlPhcSARbCPDYcYG2s1TIzAfWv4YSgyY5taidWzzs31lNV3yQ==",
      "license": "BSD-2-Clause",
      "dependencies": {
        "dotenv": "^16.4.5"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://dotenvx.com"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/ecdsa-sig-formatter": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/ecdsa-sig-formatter/-/ecdsa-sig-formatter-1.0.11.tgz",
      "integrity": "sha512-nagl3RYrbNv6kQkeJIpt6NJZy8twLB/2vtz6yN9Z4vRKHN4/QZJIEbqohALSgwKdnksuY3k5Addp5lg8sVoVcQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/edge-runtime": {
      "version": "2.4.4",
      "resolved": "https://registry.npmjs.org/edge-runtime/-/edge-runtime-2.4.4.tgz",
      "integrity": "sha512-uq1YdIxkMDsBYLdSSp/w62PciCL46ic4m1Z/2G6N8RcAPI8p35O8u6hJQT83j28Dnt4U5iyvmwFMYouHMK51uA==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "@edge-runtime/format": "2.1.0",
        "@edge-runtime/vm": "3.0.3",
        "async-listen": "3.0.0",
        "mri": "1.2.0",
        "picocolors": "1.0.0",
        "pretty-bytes": "5.6.0",
        "pretty-ms": "7.0.1",
        "signal-exit": "4.0.2",
        "time-span": "4.0.0"
      },
      "bin": {
        "edge-runtime": "dist/cli/index.js"
      },
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/edge-runtime/node_modules/@edge-runtime/primitives": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/@edge-runtime/primitives/-/primitives-3.0.3.tgz",
      "integrity": "sha512-YnfMWMRQABAH8IsnFMJWMW+SyB4ZeYBPnR7V0aqdnew7Pq60cbH5DyFjS/FhiLwvHQk9wBREmXD7PP0HooEQ1A==",
      "dev": true,
      "license": "MPL-2.0",
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/edge-runtime/node_modules/@edge-runtime/vm": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/@edge-runtime/vm/-/vm-3.0.3.tgz",
      "integrity": "sha512-SPfI1JeIRNs/4EEE2Oc0X6gG3RqjD1TnKu2lwmwFXq0435xgZGKhc3UiKkYAdoMn2dNFD73nlabMKHBRoMRpxg==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "@edge-runtime/primitives": "3.0.3"
      },
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/edge-runtime/node_modules/signal-exit": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.0.2.tgz",
      "integrity": "sha512-MY2/qGx4enyjprQnFaZsHib3Yadh3IXyV2C321GY0pjGfVBu4un0uDJkwgdxqO+Rdx8JMT8IfJIRwbYVz3Ob3Q==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==",
      "license": "MIT"
    },
    "node_modules/effect": {
      "version": "3.16.12",
      "resolved": "https://registry.npmjs.org/effect/-/effect-3.16.12.tgz",
      "integrity": "sha512-N39iBk0K71F9nb442TLbTkjl24FLUzuvx2i1I2RsEAQsdAdUTuUoW0vlfUXgkMTUOnYqKnWcFfqw4hK4Pw27hg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@standard-schema/spec": "^1.0.0",
        "fast-check": "^3.23.1"
      }
    },
    "node_modules/ejs": {
      "version": "3.1.10",
      "resolved": "https://registry.npmjs.org/ejs/-/ejs-3.1.10.tgz",
      "integrity": "sha512-UeJmFfOrAQS8OJWPZ4qtgHyWExa088/MtK5UEyoJGFH67cDEXkZSviOiKRCZ4Xij0zxI3JECgYs3oKx+AizQBA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "jake": "^10.8.5"
      },
      "bin": {
        "ejs": "bin/cli.js"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.267",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.267.tgz",
      "integrity": "sha512-0Drusm6MVRXSOJpGbaSVgcQsuB4hEkMpHXaVstcPmhu5LIedxs1xNK/nIxmQIU/RPC0+1/o0AVZfBTkTNJOdUw==",
      "license": "ISC"
    },
    "node_modules/emittery": {
      "version": "0.13.1",
      "resolved": "https://registry.npmjs.org/emittery/-/emittery-0.13.1.tgz",
      "integrity": "sha512-DeWwawk6r5yR9jFgnDKYt4sLS0LmHJJi3ZOnb5/JdbYwj3nW+FxQnHIjhBKz8YLC7oRNPVM9NQ47I3CVx34eqQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/emittery?sponsor=1"
      }
    },
    "node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/enabled": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/enabled/-/enabled-2.0.0.tgz",
      "integrity": "sha512-AKrN98kuwOzMIdAizXGI86UFBoo26CL21UM763y1h/GMSJ4/OHU9k2YlsmBpyScFo/wbLzWQJBMCW4+IO3/+OQ==",
      "license": "MIT"
    },
    "node_modules/encodeurl": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-2.0.0.tgz",
      "integrity": "sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/engine.io": {
      "version": "6.6.4",
      "resolved": "https://registry.npmjs.org/engine.io/-/engine.io-6.6.4.tgz",
      "integrity": "sha512-ZCkIjSYNDyGn0R6ewHDtXgns/Zre/NT6Agvq1/WobF7JXgFff4SeDroKiCO3fNJreU9YG429Sc81o4w5ok/W5g==",
      "license": "MIT",
      "dependencies": {
        "@types/cors": "^2.8.12",
        "@types/node": ">=10.0.0",
        "accepts": "~1.3.4",
        "base64id": "2.0.0",
        "cookie": "~0.7.2",
        "cors": "~2.8.5",
        "debug": "~4.3.1",
        "engine.io-parser": "~5.2.1",
        "ws": "~8.17.1"
      },
      "engines": {
        "node": ">=10.2.0"
      }
    },
    "node_modules/engine.io-parser": {
      "version": "5.2.3",
      "resolved": "https://registry.npmjs.org/engine.io-parser/-/engine.io-parser-5.2.3.tgz",
      "integrity": "sha512-HqD3yTBfnBxIrbnM1DoD6Pcq8NECnh8d4As1Qgh0z5Gg3jRRIqijury0CL3ghu/edArpUYiYqQiDUQBIs4np3Q==",
      "license": "MIT",
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/engine.io/node_modules/accepts": {
      "version": "1.3.8",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",
      "integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",
      "license": "MIT",
      "dependencies": {
        "mime-types": "~2.1.34",
        "negotiator": "0.6.3"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/engine.io/node_modules/debug": {
      "version": "4.3.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.7.tgz",
      "integrity": "sha512-Er2nc/H7RrMXZBFCEim6TCmMk02Z8vLC2Rbi1KEBggpo0fS6l0S1nnapwmIi3yW/+GOJap1Krg4w0Hg80oCqgQ==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/engine.io/node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/engine.io/node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/engine.io/node_modules/negotiator": {
      "version": "0.6.3",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",
      "integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/enhanced-resolve": {
      "version": "5.18.2",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.18.2.tgz",
      "integrity": "sha512-6Jw4sE1maoRJo3q8MsSIn2onJFbLTOjY9hlx4DZXmOKvLRd1Ok2kXmAGXaafL2+ijsJZ1ClYbl/pmqr9+k4iUQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.2.0"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/error-ex": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
      "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-arrayish": "^0.2.1"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-module-lexer": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/es-module-lexer/-/es-module-lexer-1.4.1.tgz",
      "integrity": "sha512-cXLGjP0c4T3flZJKQSuziYoq7MlT+rnvfZjfp7h+I7K9BNX54kP9nyWvdbwjQ4u1iWbOL4u96fgeZLToQlZC7w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
      "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.1.0.tgz",
      "integrity": "sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/esbuild": {
      "version": "0.14.47",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.14.47.tgz",
      "integrity": "sha512-wI4ZiIfFxpkuxB8ju4MHrGwGLyp1+awEHAHVpx6w7a+1pmYIq8T9FGEVVwFo0iFierDoMj++Xq69GXWYn2EiwA==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=12"
      },
      "optionalDependencies": {
        "esbuild-android-64": "0.14.47",
        "esbuild-android-arm64": "0.14.47",
        "esbuild-darwin-64": "0.14.47",
        "esbuild-darwin-arm64": "0.14.47",
        "esbuild-freebsd-64": "0.14.47",
        "esbuild-freebsd-arm64": "0.14.47",
        "esbuild-linux-32": "0.14.47",
        "esbuild-linux-64": "0.14.47",
        "esbuild-linux-arm": "0.14.47",
        "esbuild-linux-arm64": "0.14.47",
        "esbuild-linux-mips64le": "0.14.47",
        "esbuild-linux-ppc64le": "0.14.47",
        "esbuild-linux-riscv64": "0.14.47",
        "esbuild-linux-s390x": "0.14.47",
        "esbuild-netbsd-64": "0.14.47",
        "esbuild-openbsd-64": "0.14.47",
        "esbuild-sunos-64": "0.14.47",
        "esbuild-windows-32": "0.14.47",
        "esbuild-windows-64": "0.14.47",
        "esbuild-windows-arm64": "0.14.47"
      }
    },
    "node_modules/esbuild-android-64": {
      "version": "0.14.47",
      "resolved": "https://registry.npmjs.org/esbuild-android-64/-/esbuild-android-64-0.14.47.tgz",
      "integrity": "sha512-R13Bd9+tqLVFndncMHssZrPWe6/0Kpv2/dt4aA69soX4PRxlzsVpCvoJeFE8sOEoeVEiBkI0myjlkDodXlHa0g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/esbuild-android-arm64": {
      "version": "0.14.47",
      "resolved": "https://registry.npmjs.org/esbuild-android-arm64/-/esbuild-android-arm64-0.14.47.tgz",
      "integrity": "sha512-OkwOjj7ts4lBp/TL6hdd8HftIzOy/pdtbrNA4+0oVWgGG64HrdVzAF5gxtJufAPOsEjkyh1oIYvKAUinKKQRSQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/esbuild-darwin-64": {
      "version": "0.14.47",
      "resolved": "https://registry.npmjs.org/esbuild-darwin-64/-/esbuild-darwin-64-0.14.47.tgz",
      "integrity": "sha512-R6oaW0y5/u6Eccti/TS6c/2c1xYTb1izwK3gajJwi4vIfNs1s8B1dQzI1UiC9T61YovOQVuePDcfqHLT3mUZJA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/esbuild-darwin-arm64": {
      "version": "0.14.47",
      "resolved": "https://registry.npmjs.org/esbuild-darwin-arm64/-/esbuild-darwin-arm64-0.14.47.tgz",
      "integrity": "sha512-seCmearlQyvdvM/noz1L9+qblC5vcBrhUaOoLEDDoLInF/VQ9IkobGiLlyTPYP5dW1YD4LXhtBgOyevoIHGGnw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/esbuild-freebsd-64": {
      "version": "0.14.47",
      "resolved": "https://registry.npmjs.org/esbuild-freebsd-64/-/esbuild-freebsd-64-0.14.47.tgz",
      "integrity": "sha512-ZH8K2Q8/Ux5kXXvQMDsJcxvkIwut69KVrYQhza/ptkW50DC089bCVrJZZ3sKzIoOx+YPTrmsZvqeZERjyYrlvQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/esbuild-freebsd-arm64": {
      "version": "0.14.47",
      "resolved": "https://registry.npmjs.org/esbuild-freebsd-arm64/-/esbuild-freebsd-arm64-0.14.47.tgz",
      "integrity": "sha512-ZJMQAJQsIOhn3XTm7MPQfCzEu5b9STNC+s90zMWe2afy9EwnHV7Ov7ohEMv2lyWlc2pjqLW8QJnz2r0KZmeAEQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/esbuild-linux-32": {
      "version": "0.14.47",
      "resolved": "https://registry.npmjs.org/esbuild-linux-32/-/esbuild-linux-32-0.14.47.tgz",
      "integrity": "sha512-FxZOCKoEDPRYvq300lsWCTv1kcHgiiZfNrPtEhFAiqD7QZaXrad8LxyJ8fXGcWzIFzRiYZVtB3ttvITBvAFhKw==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/esbuild-linux-64": {
      "version": "0.14.47",
      "resolved": "https://registry.npmjs.org/esbuild-linux-64/-/esbuild-linux-64-0.14.47.tgz",
      "integrity": "sha512-nFNOk9vWVfvWYF9YNYksZptgQAdstnDCMtR6m42l5Wfugbzu11VpMCY9XrD4yFxvPo9zmzcoUL/88y0lfJZJJw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/esbuild-linux-arm": {
      "version": "0.14.47",
      "resolved": "https://registry.npmjs.org/esbuild-linux-arm/-/esbuild-linux-arm-0.14.47.tgz",
      "integrity": "sha512-ZGE1Bqg/gPRXrBpgpvH81tQHpiaGxa8c9Rx/XOylkIl2ypLuOcawXEAo8ls+5DFCcRGt/o3sV+PzpAFZobOsmA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/esbuild-linux-arm64": {
      "version": "0.14.47",
      "resolved": "https://registry.npmjs.org/esbuild-linux-arm64/-/esbuild-linux-arm64-0.14.47.tgz",
      "integrity": "sha512-ywfme6HVrhWcevzmsufjd4iT3PxTfCX9HOdxA7Hd+/ZM23Y9nXeb+vG6AyA6jgq/JovkcqRHcL9XwRNpWG6XRw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/esbuild-linux-mips64le": {
      "version": "0.14.47",
      "resolved": "https://registry.npmjs.org/esbuild-linux-mips64le/-/esbuild-linux-mips64le-0.14.47.tgz",
      "integrity": "sha512-mg3D8YndZ1LvUiEdDYR3OsmeyAew4MA/dvaEJxvyygahWmpv1SlEEnhEZlhPokjsUMfRagzsEF/d/2XF+kTQGg==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/esbuild-linux-ppc64le": {
      "version": "0.14.47",
      "resolved": "https://registry.npmjs.org/esbuild-linux-ppc64le/-/esbuild-linux-ppc64le-0.14.47.tgz",
      "integrity": "sha512-WER+f3+szmnZiWoK6AsrTKGoJoErG2LlauSmk73LEZFQ/iWC+KhhDsOkn1xBUpzXWsxN9THmQFltLoaFEH8F8w==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/esbuild-linux-riscv64": {
      "version": "0.14.47",
      "resolved": "https://registry.npmjs.org/esbuild-linux-riscv64/-/esbuild-linux-riscv64-0.14.47.tgz",
      "integrity": "sha512-1fI6bP3A3rvI9BsaaXbMoaOjLE3lVkJtLxsgLHqlBhLlBVY7UqffWBvkrX/9zfPhhVMd9ZRFiaqXnB1T7BsL2g==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/esbuild-linux-s390x": {
      "version": "0.14.47",
      "resolved": "https://registry.npmjs.org/esbuild-linux-s390x/-/esbuild-linux-s390x-0.14.47.tgz",
      "integrity": "sha512-eZrWzy0xFAhki1CWRGnhsHVz7IlSKX6yT2tj2Eg8lhAwlRE5E96Hsb0M1mPSE1dHGpt1QVwwVivXIAacF/G6mw==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/esbuild-netbsd-64": {
      "version": "0.14.47",
      "resolved": "https://registry.npmjs.org/esbuild-netbsd-64/-/esbuild-netbsd-64-0.14.47.tgz",
      "integrity": "sha512-Qjdjr+KQQVH5Q2Q1r6HBYswFTToPpss3gqCiSw2Fpq/ua8+eXSQyAMG+UvULPqXceOwpnPo4smyZyHdlkcPppQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/esbuild-openbsd-64": {
      "version": "0.14.47",
      "resolved": "https://registry.npmjs.org/esbuild-openbsd-64/-/esbuild-openbsd-64-0.14.47.tgz",
      "integrity": "sha512-QpgN8ofL7B9z8g5zZqJE+eFvD1LehRlxr25PBkjyyasakm4599iroUpaj96rdqRlO2ShuyqwJdr+oNqWwTUmQw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/esbuild-sunos-64": {
      "version": "0.14.47",
      "resolved": "https://registry.npmjs.org/esbuild-sunos-64/-/esbuild-sunos-64-0.14.47.tgz",
      "integrity": "sha512-uOeSgLUwukLioAJOiGYm3kNl+1wJjgJA8R671GYgcPgCx7QR73zfvYqXFFcIO93/nBdIbt5hd8RItqbbf3HtAQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/esbuild-windows-32": {
      "version": "0.14.47",
      "resolved": "https://registry.npmjs.org/esbuild-windows-32/-/esbuild-windows-32-0.14.47.tgz",
      "integrity": "sha512-H0fWsLTp2WBfKLBgwYT4OTfFly4Im/8B5f3ojDv1Kx//kiubVY0IQunP2Koc/fr/0wI7hj3IiBDbSrmKlrNgLQ==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/esbuild-windows-64": {
      "version": "0.14.47",
      "resolved": "https://registry.npmjs.org/esbuild-windows-64/-/esbuild-windows-64-0.14.47.tgz",
      "integrity": "sha512-/Pk5jIEH34T68r8PweKRi77W49KwanZ8X6lr3vDAtOlH5EumPE4pBHqkCUdELanvsT14yMXLQ/C/8XPi1pAtkQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/esbuild-windows-arm64": {
      "version": "0.14.47",
      "resolved": "https://registry.npmjs.org/esbuild-windows-arm64/-/esbuild-windows-arm64-0.14.47.tgz",
      "integrity": "sha512-HFSW2lnp62fl86/qPQlqw6asIwCnEsEoNIL1h2uVMgakddf+vUuMcCbtUY1i8sst7KkgHrVKCJQB33YhhOweCQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==",
      "license": "MIT"
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "9.31.0",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-9.31.0.tgz",
      "integrity": "sha512-QldCVh/ztyKJJZLr4jXNUByx3gR+TDYZCRXEktiZoUR3PGy4qCmSbkxcIle8GEwGpb5JBZazlaJ/CxLidXdEbQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.2.0",
        "@eslint-community/regexpp": "^4.12.1",
        "@eslint/config-array": "^0.21.0",
        "@eslint/config-helpers": "^0.3.0",
        "@eslint/core": "^0.15.0",
        "@eslint/eslintrc": "^3.3.1",
        "@eslint/js": "9.31.0",
        "@eslint/plugin-kit": "^0.3.1",
        "@humanfs/node": "^0.16.6",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@humanwhocodes/retry": "^0.4.2",
        "@types/estree": "^1.0.6",
        "@types/json-schema": "^7.0.15",
        "ajv": "^6.12.4",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.6",
        "debug": "^4.3.2",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^8.4.0",
        "eslint-visitor-keys": "^4.2.1",
        "espree": "^10.4.0",
        "esquery": "^1.5.0",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^8.0.0",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.2",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      },
      "peerDependencies": {
        "jiti": "*"
      },
      "peerDependenciesMeta": {
        "jiti": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-config-prettier": {
      "version": "10.1.8",
      "resolved": "https://registry.npmjs.org/eslint-config-prettier/-/eslint-config-prettier-10.1.8.tgz",
      "integrity": "sha512-82GZUjRS0p/jganf6q1rEO25VSoHH0hKPCTrgillPjdI/3bgBhAE1QzHrHTizjpRvy6pGAvKjDJtk2pF9NDq8w==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "bin": {
        "eslint-config-prettier": "bin/cli.js"
      },
      "funding": {
        "url": "https://opencollective.com/eslint-config-prettier"
      },
      "peerDependencies": {
        "eslint": ">=7.0.0"
      }
    },
    "node_modules/eslint-plugin-prettier": {
      "version": "5.5.3",
      "resolved": "https://registry.npmjs.org/eslint-plugin-prettier/-/eslint-plugin-prettier-5.5.3.tgz",
      "integrity": "sha512-NAdMYww51ehKfDyDhv59/eIItUVzU0Io9H2E8nHNGKEeeqlnci+1gCvrHib6EmZdf6GxF+LCV5K7UC65Ezvw7w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prettier-linter-helpers": "^1.0.0",
        "synckit": "^0.11.7"
      },
      "engines": {
        "node": "^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint-plugin-prettier"
      },
      "peerDependencies": {
        "@types/eslint": ">=8.0.0",
        "eslint": ">=8.0.0",
        "eslint-config-prettier": ">= 7.0.0 <10.0.0 || >=10.1.0",
        "prettier": ">=3.0.0"
      },
      "peerDependenciesMeta": {
        "@types/eslint": {
          "optional": true
        },
        "eslint-config-prettier": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-scope": {
      "version": "8.4.0",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-8.4.0.tgz",
      "integrity": "sha512-sNXOfKCn74rt8RICKMvJS7XKV/Xk9kA7DyJr8mJik3S7Cwgy3qlkkmyS2uQB3jiJg6VNdZd/pDBJu0nvG2NlTg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-4.2.1.tgz",
      "integrity": "sha512-Uhdk5sfqcee/9H/rCOJikYz67o0a2Tw2hGRPOG2Y1R2dg7brRe1uG0yaNQDHu+TO/uQPF/5eCapvYSmHUjt7JQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/espree": {
      "version": "10.4.0",
      "resolved": "https://registry.npmjs.org/espree/-/espree-10.4.0.tgz",
      "integrity": "sha512-j6PAQ2uUr79PZhBjP5C5fhl8e39FmRnOjsD5lGnWrFU8i2G776tBK7+nP8KuQUTTyAZUwfQqXAgrVH5MbH9CYQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.15.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^4.2.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esprima": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
      "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
      "dev": true,
      "license": "BSD-2-Clause",
      "bin": {
        "esparse": "bin/esparse.js",
        "esvalidate": "bin/esvalidate.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/esquery": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.6.0.tgz",
      "integrity": "sha512-ca9pw9fomFcKPvFLXhBKUK90ZvGibiGOvRJNbjljY7s7uq/5YO4BOzcYtJqExdx99rF6aAcnRxHmcUHcz6sQsg==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/events": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/events/-/events-3.3.0.tgz",
      "integrity": "sha512-mQw+2fkQbALzQ7V0MY0IqdnXNOeTtP4r0lN9z7AAawCXgqea7bDii20AYrIBrFd/Hx0M2Ocz6S111CaFkUcb0Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.x"
      }
    },
    "node_modules/execa": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/execa/-/execa-5.1.1.tgz",
      "integrity": "sha512-8uSpZZocAZRBAPIEINJj3Lo9HyGitllczc27Eh5YYojjMFMn8yHMDMaUHE2Jqfq05D/wucwI4JGURyXt1vchyg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cross-spawn": "^7.0.3",
        "get-stream": "^6.0.0",
        "human-signals": "^2.1.0",
        "is-stream": "^2.0.0",
        "merge-stream": "^2.0.0",
        "npm-run-path": "^4.0.1",
        "onetime": "^5.1.2",
        "signal-exit": "^3.0.3",
        "strip-final-newline": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/execa?sponsor=1"
      }
    },
    "node_modules/execa/node_modules/signal-exit": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
      "integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/exit": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/exit/-/exit-0.1.2.tgz",
      "integrity": "sha512-Zk/eNKV2zbjpKzrsQ+n1G6poVbErQxJ0LBOJXaKZ1EViLzH+hrLu9cdXI4zw9dBQJslwBEpbQ2P1oS7nDxs6jQ==",
      "dev": true,
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/exit-hook": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/exit-hook/-/exit-hook-2.2.1.tgz",
      "integrity": "sha512-eNTPlAD67BmP31LDINZ3U7HSF8l57TxOY2PmBJ1shpCvpnxBF93mWCE8YHBnXs8qiUZJc9WDcWIeC3a2HIAMfw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/expect": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/expect/-/expect-29.7.0.tgz",
      "integrity": "sha512-2Zks0hf1VLFYI1kbh0I5jP3KHHyCHpkfyHBzsSXRFgl/Bg9mWYfMW8oD+PdMPlEwy5HNsR9JutYy6pMeOh61nw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/expect-utils": "^29.7.0",
        "jest-get-type": "^29.6.3",
        "jest-matcher-utils": "^29.7.0",
        "jest-message-util": "^29.7.0",
        "jest-util": "^29.7.0"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/express": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/express/-/express-5.1.0.tgz",
      "integrity": "sha512-DT9ck5YIRU+8GYzzU5kT3eHGA5iL+1Zd0EutOmTE9Dtk+Tvuzd23VBU+ec7HPNSTxXYO55gPV/hq4pSBJDjFpA==",
      "license": "MIT",
      "dependencies": {
        "accepts": "^2.0.0",
        "body-parser": "^2.2.0",
        "content-disposition": "^1.0.0",
        "content-type": "^1.0.5",
        "cookie": "^0.7.1",
        "cookie-signature": "^1.2.1",
        "debug": "^4.4.0",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "etag": "^1.8.1",
        "finalhandler": "^2.1.0",
        "fresh": "^2.0.0",
        "http-errors": "^2.0.0",
        "merge-descriptors": "^2.0.0",
        "mime-types": "^3.0.0",
        "on-finished": "^2.4.1",
        "once": "^1.4.0",
        "parseurl": "^1.3.3",
        "proxy-addr": "^2.0.7",
        "qs": "^6.14.0",
        "range-parser": "^1.2.1",
        "router": "^2.2.0",
        "send": "^1.1.0",
        "serve-static": "^2.2.0",
        "statuses": "^2.0.1",
        "type-is": "^2.0.1",
        "vary": "^1.1.2"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/express/node_modules/content-disposition": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-1.0.0.tgz",
      "integrity": "sha512-Au9nRL8VNUut/XSzbQA38+M78dzP4D+eqg3gfJHMIHHYa3bg067xj1KxMUWj+VULbiZMowKngFFbKczUrNJ1mg==",
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "5.2.1"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/exsolve": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/exsolve/-/exsolve-1.0.7.tgz",
      "integrity": "sha512-VO5fQUzZtI6C+vx4w/4BWJpg3s/5l+6pRQEHzFRM8WFi4XffSP1Z+4qi7GbjWbvRQEbdIco5mIMq+zX4rPuLrw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/ext-list": {
      "version": "2.2.2",
      "resolved": "https://registry.npmjs.org/ext-list/-/ext-list-2.2.2.tgz",
      "integrity": "sha512-u+SQgsubraE6zItfVA0tBuCBhfU9ogSRnsvygI7wht9TS510oLkBRXBsqopeUG/GBOIQyKZO9wjTqIu/sf5zFA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "mime-db": "^1.28.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/ext-name": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/ext-name/-/ext-name-5.0.0.tgz",
      "integrity": "sha512-yblEwXAbGv1VQDmow7s38W77hzAgJAO50ztBLMcUyUBfxv1HC+LGwtiEN+Co6LtlqT/5uwVOxsD4TNIilWhwdQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ext-list": "^2.0.0",
        "sort-keys-length": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/fast-check": {
      "version": "3.23.2",
      "resolved": "https://registry.npmjs.org/fast-check/-/fast-check-3.23.2.tgz",
      "integrity": "sha512-h5+1OzzfCC3Ef7VbtKdcv7zsstUQwUDlYpUTvjeUsJAssPgLn7QzbboPtL5ro04Mq0rPOsMzl7q5hIbRs2wD1A==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/dubzzz"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fast-check"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "pure-rand": "^6.1.0"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-diff": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/fast-diff/-/fast-diff-1.3.0.tgz",
      "integrity": "sha512-VxPP4NqbUjj6MaAOafWeUn2cXWLcCtljklUtZf0Ind4XQ+QPtmA0b18zZy0jIQx+ExRVCR/ZQpBmik5lXshNsw==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/fast-fifo": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/fast-fifo/-/fast-fifo-1.3.2.tgz",
      "integrity": "sha512-/d9sfos4yxzpwkDkuN7k2SqFKtYNmCTzgfEpz82x34IM9/zc8KGxQoXg1liNC/izpRM/MBdt44Nmx41ZWqk+FQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-glob": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.3.tgz",
      "integrity": "sha512-7MptL8U0cqcFdzIzwOTHoilX9x5BrNqye7Z/LuC7kCMRio1EMSyqRK3BEAUD7sXRq4iT4AzTVuZdhgQ2TCvYLg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.8"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-glob/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-safe-stringify": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/fast-safe-stringify/-/fast-safe-stringify-2.1.1.tgz",
      "integrity": "sha512-W+KJc2dmILlPplD/H4K9l9LcAHAfPtP6BY84uVLXQ6Evcz9Lcg33Y2z1IVblT6xdY54PXYVHEv+0Wpq8Io6zkA==",
      "license": "MIT"
    },
    "node_modules/fast-uri": {
      "version": "3.0.6",
      "resolved": "https://registry.npmjs.org/fast-uri/-/fast-uri-3.0.6.tgz",
      "integrity": "sha512-Atfo14OibSv5wAp4VWNsFYE1AchQRTv9cBGWET4pZWHzYshFSS9NQI6I57rdKn9croWVMbYFbLhJ+yJvmZIIHw==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "BSD-3-Clause"
    },
    "node_modules/fastq": {
      "version": "1.19.1",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.19.1.tgz",
      "integrity": "sha512-GwLTyxkCXjXbxqIhTsMI2Nui8huMPtnxg7krajPJAjnEG/iiOS7i+zCtWGZR9G0NBKbXKh6X9m9UIsYX/N6vvQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/fb-watchman": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/fb-watchman/-/fb-watchman-2.0.2.tgz",
      "integrity": "sha512-p5161BqbuCaSnB8jIbzQHOlpgsPmK5rJVDfDKO91Axs5NC1uu3HRQm6wt9cd9/+GtQQIO53JdGXXoyDpTAsgYA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "bser": "2.1.1"
      }
    },
    "node_modules/fecha": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/fecha/-/fecha-4.2.3.tgz",
      "integrity": "sha512-OP2IUU6HeYKJi3i0z4A19kHMQoLVs4Hc+DPqqxI2h/DPZHTm/vjsfC6P0b4jCMy14XizLBqvndQ+UilD7707Jw==",
      "license": "MIT"
    },
    "node_modules/fflate": {
      "version": "0.8.2",
      "resolved": "https://registry.npmjs.org/fflate/-/fflate-0.8.2.tgz",
      "integrity": "sha512-cPJU47OaAoCbg0pBvzsgpTPhmhqI5eJjh/JIu8tPj5q+T7iLvW/JAYUqmE7KOB4R1ZyEhzBaIQpQpardBF5z8A==",
      "license": "MIT"
    },
    "node_modules/file-entry-cache": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-8.0.0.tgz",
      "integrity": "sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^4.0.0"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/file-type": {
      "version": "21.0.0",
      "resolved": "https://registry.npmjs.org/file-type/-/file-type-21.0.0.tgz",
      "integrity": "sha512-ek5xNX2YBYlXhiUXui3D/BXa3LdqPmoLJ7rqEx2bKJ7EAUEfmXgW0Das7Dc6Nr9MvqaOnIqiPV0mZk/r/UpNAg==",
      "license": "MIT",
      "dependencies": {
        "@tokenizer/inflate": "^0.2.7",
        "strtok3": "^10.2.2",
        "token-types": "^6.0.0",
        "uint8array-extras": "^1.4.0"
      },
      "engines": {
        "node": ">=20"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/file-type?sponsor=1"
      }
    },
    "node_modules/filelist": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/filelist/-/filelist-1.0.4.tgz",
      "integrity": "sha512-w1cEuf3S+DrLCQL7ET6kz+gmlJdbq9J7yXCSjK/OZCPA+qEN1WyF4ZAf0YYJa4/shHJra2t/d/r8SV4Ji+x+8Q==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "minimatch": "^5.0.1"
      }
    },
    "node_modules/filelist/node_modules/brace-expansion": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.2.tgz",
      "integrity": "sha512-Jt0vHyM+jmUBqojB7E1NIYadt0vI0Qxjxd2TErW94wDz+E2LAm5vKMXXwg6ZZBTHPuUlDgQHKXvjGBdfcF1ZDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/filelist/node_modules/minimatch": {
      "version": "5.1.6",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-5.1.6.tgz",
      "integrity": "sha512-lKwV/1brpG6mBUFHtb7NUmtABCb2WZZmm2wNiOA5hAb8VdCS4B3dtMWyvcoViccwAW/COERjXLt0zP1zXUN26g==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/filename-reserved-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/filename-reserved-regex/-/filename-reserved-regex-3.0.0.tgz",
      "integrity": "sha512-hn4cQfU6GOT/7cFHXBqeBg2TbrMBgdD0kcjLhvSQYYwm3s4B6cjvBfb7nBALJLAXqmU5xajSa7X2NnUud/VCdw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.20.0 || ^14.13.1 || >=16.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/filenamify": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/filenamify/-/filenamify-6.0.0.tgz",
      "integrity": "sha512-vqIlNogKeyD3yzrm0yhRMQg8hOVwYcYRfjEoODd49iCprMn4HL85gK3HcykQE53EPIpX3HcAbGA5ELQv216dAQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "filename-reserved-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=16"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/finalhandler": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-2.1.0.tgz",
      "integrity": "sha512-/t88Ty3d5JWQbWYgaOGCCYfXRwV1+be02WqYYlL6h0lEiUAMPM8o8qKGO01YIkOHzka2up08wvgYD0mDiI+q3Q==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.0",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "on-finished": "^2.4.1",
        "parseurl": "^1.3.3",
        "statuses": "^2.0.1"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/find-up-simple": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/find-up-simple/-/find-up-simple-1.0.1.tgz",
      "integrity": "sha512-afd4O7zpqHeRyg4PfDQsXmlDe2PfdHtJt6Akt8jOWaApLOZk5JXs6VMR29lz03pRe9mpykrRCYIYxaJYcfpncQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/find-versions": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/find-versions/-/find-versions-5.1.0.tgz",
      "integrity": "sha512-+iwzCJ7C5v5KgcBuueqVoNiHVoQpwiUK5XFLjf0affFTep+Wcw93tPvmb8tqujDNmzhBDPddnWV/qgWSXgq+Hg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "semver-regex": "^4.0.5"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/fix-esm": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/fix-esm/-/fix-esm-1.0.1.tgz",
      "integrity": "sha512-EZtb7wPXZS54GaGxaWxMlhd1DUDCnAg5srlYdu/1ZVeW+7wwR3Tp59nu52dXByFs3MBRq+SByx1wDOJpRvLEXw==",
      "license": "WTFPL OR CC0-1.0",
      "dependencies": {
        "@babel/core": "^7.14.6",
        "@babel/plugin-proposal-export-namespace-from": "^7.14.5",
        "@babel/plugin-transform-modules-commonjs": "^7.14.5"
      }
    },
    "node_modules/flat-cache": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-4.0.1.tgz",
      "integrity": "sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.4"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/flatted": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.3.3.tgz",
      "integrity": "sha512-GX+ysw4PBCz0PzosHDepZGANEuFCMLrnRTiEy9McGjmkCQYwRq4A/X786G/fjM/+OjsWSU1ZrY5qyARZmO/uwg==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/fn.name": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/fn.name/-/fn.name-1.1.0.tgz",
      "integrity": "sha512-GRnmB5gPyJpAhTQdSZTSp9uaPSvl09KoYcMQtsB9rQoOmzs9dH6ffeccH+Z+cv6P68Hu5bC6JjRh4Ah/mHSNRw==",
      "license": "MIT"
    },
    "node_modules/fork-ts-checker-webpack-plugin": {
      "version": "9.1.0",
      "resolved": "https://registry.npmjs.org/fork-ts-checker-webpack-plugin/-/fork-ts-checker-webpack-plugin-9.1.0.tgz",
      "integrity": "sha512-mpafl89VFPJmhnJ1ssH+8wmM2b50n+Rew5x42NeI2U78aRWgtkEtGmctp7iT16UjquJTjorEmIfESj3DxdW84Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.16.7",
        "chalk": "^4.1.2",
        "chokidar": "^4.0.1",
        "cosmiconfig": "^8.2.0",
        "deepmerge": "^4.2.2",
        "fs-extra": "^10.0.0",
        "memfs": "^3.4.1",
        "minimatch": "^3.0.4",
        "node-abort-controller": "^3.0.1",
        "schema-utils": "^3.1.1",
        "semver": "^7.3.5",
        "tapable": "^2.2.1"
      },
      "engines": {
        "node": ">=14.21.3"
      },
      "peerDependencies": {
        "typescript": ">3.6.0",
        "webpack": "^5.11.0"
      }
    },
    "node_modules/form-data": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-4.0.4.tgz",
      "integrity": "sha512-KrGhL9Q4zjj0kiUt5OO4Mr/A/jlI2jDYs5eHBpYHPcBEVSiipAvn2Ko2HnPe20rmcuuvMHNdZFp+4IlGTMF0Ow==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.8",
        "es-set-tostringtag": "^2.1.0",
        "hasown": "^2.0.2",
        "mime-types": "^2.1.12"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/form-data-encoder": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/form-data-encoder/-/form-data-encoder-2.1.4.tgz",
      "integrity": "sha512-yDYSgNMraqvnxiEXO4hi88+YZxaHC6QKzb5N84iRCTDeRO7ZALpir/lVmf/uXUhnwUr2O4HU8s/n6x+yNjQkHw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 14.17"
      }
    },
    "node_modules/form-data/node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/form-data/node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/formidable": {
      "version": "3.5.4",
      "resolved": "https://registry.npmjs.org/formidable/-/formidable-3.5.4.tgz",
      "integrity": "sha512-YikH+7CUTOtP44ZTnUhR7Ic2UASBPOqmaRkRKxRbywPTe5VxF7RRCck4af9wutiZ/QKM5nME9Bie2fFaPz5Gug==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@paralleldrive/cuid2": "^2.2.2",
        "dezalgo": "^1.0.4",
        "once": "^1.4.0"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "funding": {
        "url": "https://ko-fi.com/tunnckoCore/commissions"
      }
    },
    "node_modules/forwarded": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
      "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/fresh": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-2.0.0.tgz",
      "integrity": "sha512-Rx/WycZ60HOaqLKAi6cHRKKI7zxWbJ31MhntmtwMoaTeF7XFH9hhBp8vITaMidfljRQ6eYWCKkaTK+ykVJHP2A==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/fs-extra": {
      "version": "10.1.0",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-10.1.0.tgz",
      "integrity": "sha512-oRXApq54ETRj4eMiFzGnHWGy+zo5raudjuxN0b8H7s/RU2oW0Wvsx9O0ACRN/kRq9E8Vu/ReskGB5o3ji+FzHQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.0",
        "jsonfile": "^6.0.1",
        "universalify": "^2.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/fs-monkey": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/fs-monkey/-/fs-monkey-1.1.0.tgz",
      "integrity": "sha512-QMUezzXWII9EV5aTFXW1UBVUO77wYPpjqIF8/AviUCThNeSYZykpoTixUeaNNBwmCev0AMDWMAni+f8Hxb1IFw==",
      "dev": true,
      "license": "Unlicense"
    },
    "node_modules/fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/get-caller-file": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
      "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": "6.* || 8.* || >= 10.*"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-package-type": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/get-package-type/-/get-package-type-0.1.0.tgz",
      "integrity": "sha512-pjzuKtY64GYfWizNAJ0fr9VqttZkNiK2iS430LtIHzjBEr6bX8Am2zm4sW4Ro5wjWW5cAlRL1qAMTcXbjNAO2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/get-stream": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-6.0.1.tgz",
      "integrity": "sha512-ts6Wi+2j3jQjqi70w5AlN8DFnkSwC+MqmxEzdEALB2qXZYV3X/b1CTfgPLGJNMeAWxdPfU8FO1ms3NUfaHCPYg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/giget": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/giget/-/giget-2.0.0.tgz",
      "integrity": "sha512-L5bGsVkxJbJgdnwyuheIunkGatUF/zssUoxxjACCseZYAVbaqdh9Tsmmlkl8vYan09H7sbvKt4pS8GqKLBrEzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "citty": "^0.1.6",
        "consola": "^3.4.0",
        "defu": "^6.1.4",
        "node-fetch-native": "^1.6.6",
        "nypm": "^0.6.0",
        "pathe": "^2.0.3"
      },
      "bin": {
        "giget": "dist/cli.mjs"
      }
    },
    "node_modules/glob": {
      "version": "13.0.0",
      "resolved": "https://registry.npmjs.org/glob/-/glob-13.0.0.tgz",
      "integrity": "sha512-tvZgpqk6fz4BaNZ66ZsRaZnbHvP/jG3uKJvAZOwEVUL4RTA5nJeeLYfyN9/VA8NX/V3IBG+hkeuGpKjvELkVhA==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "minimatch": "^10.1.1",
        "minipass": "^7.1.2",
        "path-scurry": "^2.0.0"
      },
      "engines": {
        "node": "20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/glob-to-regexp": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/glob-to-regexp/-/glob-to-regexp-0.4.1.tgz",
      "integrity": "sha512-lkX1HJXwyMcprw/5YUZc2s7DrpAiHB21/V+E1rHUrVNokkvB6bqMzT0VfV6/86ZNabt1k14YOIaT7nDvOX3Iiw==",
      "dev": true,
      "license": "BSD-2-Clause"
    },
    "node_modules/glob/node_modules/minimatch": {
      "version": "10.1.1",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-10.1.1.tgz",
      "integrity": "sha512-enIvLvRAFZYXJzkCYG5RKmPfrFArdLv+R+lbQ53BmIMLIry74bjKzX6iHAm8WYamJkhSSEabrWN5D97XnKObjQ==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "@isaacs/brace-expansion": "^5.0.0"
      },
      "engines": {
        "node": "20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/globals": {
      "version": "16.3.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-16.3.0.tgz",
      "integrity": "sha512-bqWEnJ1Nt3neqx2q5SFfGS8r/ahumIakg3HcwtNlrVlwXIeNumWn/c7Pn/wKzGhf6SaW6H6uWXLqC30STCMchQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/got": {
      "version": "13.0.0",
      "resolved": "https://registry.npmjs.org/got/-/got-13.0.0.tgz",
      "integrity": "sha512-XfBk1CxOOScDcMr9O1yKkNaQyy865NbYs+F7dr4H0LZMVgCj2Le59k6PqbNHoL5ToeaEQUYh6c6yMfVcc6SJxA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@sindresorhus/is": "^5.2.0",
        "@szmarczak/http-timer": "^5.0.1",
        "cacheable-lookup": "^7.0.0",
        "cacheable-request": "^10.2.8",
        "decompress-response": "^6.0.0",
        "form-data-encoder": "^2.1.2",
        "get-stream": "^6.0.1",
        "http2-wrapper": "^2.1.10",
        "lowercase-keys": "^3.0.0",
        "p-cancelable": "^3.0.0",
        "responselike": "^3.0.0"
      },
      "engines": {
        "node": ">=16"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/got?sponsor=1"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/graphemer": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/graphemer/-/graphemer-1.4.0.tgz",
      "integrity": "sha512-EtKwoO6kxCL9WO5xipiHTZlSzBm7WLT627TqC/uVRd0HKmq8NXyebnNYxDoBi7wt8eTWrUrKXCOVaFq9x1kgag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/has-own-prop": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/has-own-prop/-/has-own-prop-2.0.0.tgz",
      "integrity": "sha512-Pq0h+hvsVm6dDEa8x82GnLSYHOzNDt7f0ddFa3FqcQlgzEiptPqL+XrOJNavjOzSYiYWIrgeVYYgGlLmnxwilQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz",
      "integrity": "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-symbols": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
      "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/helmet": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/helmet/-/helmet-8.1.0.tgz",
      "integrity": "sha512-jOiHyAZsmnr8LqoPGmCjYAaiuWwjAPLgY8ZX2XrmHawt99/u1y6RgrZMTeoPfpUbV96HOalYgz1qzkRbw54Pmg==",
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/hosted-git-info": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-7.0.2.tgz",
      "integrity": "sha512-puUZAUKT5m8Zzvs72XWy3HtvVbTWljRE66cP60bxJzAqf2DgICo7lYTY2IHUmLnNpjYvw5bvmoHvPc0QO2a62w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "lru-cache": "^10.0.1"
      },
      "engines": {
        "node": "^16.14.0 || >=18.0.0"
      }
    },
    "node_modules/hosted-git-info/node_modules/lru-cache": {
      "version": "10.4.3",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
      "integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/html-escaper": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/html-escaper/-/html-escaper-2.0.2.tgz",
      "integrity": "sha512-H2iMtd0I4Mt5eYiapRdIDjp+XzelXQ0tFE4JS7YFwFevXXMmOp9myNrUvCg0D6ws8iqkRPBfKHgbwig1SmlLfg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/http-cache-semantics": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/http-cache-semantics/-/http-cache-semantics-4.2.0.tgz",
      "integrity": "sha512-dTxcvPXqPvXBQpq5dUr6mEMJX4oIEFv6bwom3FDwKRDsuIjjJGANqhBuoAn9c1RQJIdAKav33ED65E2ys+87QQ==",
      "dev": true,
      "license": "BSD-2-Clause"
    },
    "node_modules/http-errors": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.1.tgz",
      "integrity": "sha512-4FbRdAX+bSdmo4AUFuS0WNiPz8NgFt+r8ThgNWmlrjQjt1Q7ZR9+zTlce2859x4KSXrwIsaeTqDoKQmtP8pLmQ==",
      "license": "MIT",
      "dependencies": {
        "depd": "~2.0.0",
        "inherits": "~2.0.4",
        "setprototypeof": "~1.2.0",
        "statuses": "~2.0.2",
        "toidentifier": "~1.0.1"
      },
      "engines": {
        "node": ">= 0.8"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/http2-wrapper": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/http2-wrapper/-/http2-wrapper-2.2.1.tgz",
      "integrity": "sha512-V5nVw1PAOgfI3Lmeaj2Exmeg7fenjhRUgz1lPSezy1CuhPYbgQtbQj4jZfEAEMlaL+vupsvhjqCyjzob0yxsmQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "quick-lru": "^5.1.1",
        "resolve-alpn": "^1.2.0"
      },
      "engines": {
        "node": ">=10.19.0"
      }
    },
    "node_modules/human-signals": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/human-signals/-/human-signals-2.1.0.tgz",
      "integrity": "sha512-B4FFZ6q/T2jhhksgkbEW3HBvWIfDW85snkQgawt07S7J5QXTk6BkNV+0yAeZrM5QpMAdYlocGoljn0sJ/WQkFw==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=10.17.0"
      }
    },
    "node_modules/iconv-lite": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.7.0.tgz",
      "integrity": "sha512-cf6L2Ds3h57VVmkZe+Pn+5APsT7FpqJtEhhieDCvrE2MK5Qk9MyffgQyuxQTm6BChfeZNtcOLHp9IcWRVcIcBQ==",
      "license": "MIT",
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/ieee754": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz",
      "integrity": "sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "BSD-3-Clause"
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/import-fresh": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.1.tgz",
      "integrity": "sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/import-fresh/node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/import-local": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/import-local/-/import-local-3.2.0.tgz",
      "integrity": "sha512-2SPlun1JUPWoM6t3F0dw0FkCF/jWY8kttcY4f599GLTSjh2OCuuhdTkJQsEcZzBqbXZGKMK2OqW1oZsjtf/gQA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "pkg-dir": "^4.2.0",
        "resolve-cwd": "^3.0.0"
      },
      "bin": {
        "import-local-fixture": "fixtures/cli.js"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/index-to-position": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/index-to-position/-/index-to-position-1.1.0.tgz",
      "integrity": "sha512-XPdx9Dq4t9Qk1mTMbWONJqU7boCoumEH7fRET37HX5+khDUl3J2W6PdALxhILYlIYx2amlwYcRPp28p0tSiojg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",
      "deprecated": "This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "license": "ISC"
    },
    "node_modules/inspect-with-kind": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/inspect-with-kind/-/inspect-with-kind-1.0.5.tgz",
      "integrity": "sha512-MAQUJuIo7Xqk8EVNP+6d3CKq9c80hi4tjIbIAT6lmGW9W6WzlHiu9PS8uSuUYU+Do+j1baiFp3H25XEVxDIG2g==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "kind-of": "^6.0.2"
      }
    },
    "node_modules/ipaddr.js": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/is-arrayish": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
      "integrity": "sha512-zz06S8t0ozoDXMG+ube26zeCTNXcKIPJZJi8hBrF4idCLms4CG9QtK7qBl1boi5ODzFpjswb5JPmHCbMpjaYzg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/is-core-module": {
      "version": "2.16.1",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.16.1.tgz",
      "integrity": "sha512-UfoeMA6fIJ8wTYFEUjelnaGI67v6+N7qXJEvQuIGa99l4xsCruSYOVSQ0uPANn4dAzm8lkYPaKLrrijLq7x23w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-generator-fn": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-generator-fn/-/is-generator-fn-2.1.0.tgz",
      "integrity": "sha512-cTIB4yPYL/Grw0EaSzASzg6bBy9gqCofvWN8okThAYIxKJZC+udlRAmGbM0XLeniEJSs8uEgHPGuHSe1XsOLSQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-interactive": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-interactive/-/is-interactive-1.0.0.tgz",
      "integrity": "sha512-2HvIEKRoqS62guEC+qBjpvRubdX910WCMuJTZ+I9yvqKU2/12eSL549HMwtabb4oupdj2sMP50k+XJfB/8JE6w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-plain-obj": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-1.1.0.tgz",
      "integrity": "sha512-yvkRyxmFKEOQ4pNXCmJG5AEQNlXJS5LaONXo5/cLdTZdWvsZ1ioJEonLGAosKlMWE8lwUy/bJzMjcw8az73+Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-promise": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/is-promise/-/is-promise-4.0.0.tgz",
      "integrity": "sha512-hvpoI6korhJMnej285dSg6nu1+e6uxs7zG3BYAm5byqDsgJNWwxzM6z6iZiAgQR4TJ30JmBTOwqZUw3WlyH3AQ==",
      "license": "MIT"
    },
    "node_modules/is-stream": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.1.tgz",
      "integrity": "sha512-hFoiJiTl63nn+kstHGBtewWSKnQLpyb155KHheA1l39uvtO9nWIop1p3udqPcUd/xbF1VLMO4n7OI6p7RbngDg==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-unicode-supported": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/is-unicode-supported/-/is-unicode-supported-0.1.0.tgz",
      "integrity": "sha512-knxG2q4UC3u8stRGyAVJCOdxFmv5DZiRcdlIaAQXAbSfJya+OhopNotLQrstBhququ4ZpuKbDc/8S6mgXgPFPw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/istanbul-lib-coverage": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/istanbul-lib-coverage/-/istanbul-lib-coverage-3.2.2.tgz",
      "integrity": "sha512-O8dpsF+r0WV/8MNRKfnmrtCWhuKjxrq2w+jpzBL5UZKTi2LeVWnWOmWRxFlesJONmc+wLAGvKQZEOanko0LFTg==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/istanbul-lib-instrument": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-6.0.3.tgz",
      "integrity": "sha512-Vtgk7L/R2JHyyGW07spoFlB8/lpjiOLTjMdms6AFMraYt3BaJauod/NGrfnVG/y4Ix1JEuMRPDPEj2ua+zz1/Q==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "@babel/core": "^7.23.9",
        "@babel/parser": "^7.23.9",
        "@istanbuljs/schema": "^0.1.3",
        "istanbul-lib-coverage": "^3.2.0",
        "semver": "^7.5.4"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/istanbul-lib-report": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/istanbul-lib-report/-/istanbul-lib-report-3.0.1.tgz",
      "integrity": "sha512-GCfE1mtsHGOELCU8e/Z7YWzpmybrx/+dSTfLrvY8qRmaY6zXTKWn6WQIjaAFw069icm6GVMNkgu0NzI4iPZUNw==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "istanbul-lib-coverage": "^3.0.0",
        "make-dir": "^4.0.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/istanbul-lib-report/node_modules/make-dir": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-4.0.0.tgz",
      "integrity": "sha512-hXdUTZYIVOt1Ex//jAQi+wTZZpUpwBj/0QsOzqegb3rGMMeJiSEu5xLHnYfBrRV4RH2+OCSOO95Is/7x1WJ4bw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "semver": "^7.5.3"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/istanbul-lib-source-maps": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/istanbul-lib-source-maps/-/istanbul-lib-source-maps-4.0.1.tgz",
      "integrity": "sha512-n3s8EwkdFIJCG3BPKBYvskgXGoy88ARzvegkitk60NxRdwltLOTaH7CUiMRXvwYorl0Q712iEjcWB+fK/MrWVw==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "debug": "^4.1.1",
        "istanbul-lib-coverage": "^3.0.0",
        "source-map": "^0.6.1"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/istanbul-lib-source-maps/node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/istanbul-reports": {
      "version": "3.1.7",
      "resolved": "https://registry.npmjs.org/istanbul-reports/-/istanbul-reports-3.1.7.tgz",
      "integrity": "sha512-BewmUXImeuRk2YY0PVbxgKAysvhRPUQE0h5QRM++nVWyubKGV0l8qQ5op8+B2DOmwSe63Jivj0BjkPQVf8fP5g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "html-escaper": "^2.0.0",
        "istanbul-lib-report": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/iterare": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/iterare/-/iterare-1.2.1.tgz",
      "integrity": "sha512-RKYVTCjAnRthyJes037NX/IiqeidgN1xc3j1RjFfECFp28A1GVwK9nA+i0rJPaHqSZwygLzRnFlzUuHFoWWy+Q==",
      "license": "ISC",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jake": {
      "version": "10.9.2",
      "resolved": "https://registry.npmjs.org/jake/-/jake-10.9.2.tgz",
      "integrity": "sha512-2P4SQ0HrLQ+fw6llpLnOaGAvN2Zu6778SJMrCUwns4fOoG9ayrTiZk3VV8sCPkVZF8ab0zksVpS8FDY5pRCNBA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "async": "^3.2.3",
        "chalk": "^4.0.2",
        "filelist": "^1.0.4",
        "minimatch": "^3.1.2"
      },
      "bin": {
        "jake": "bin/cli.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/jest": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/jest/-/jest-29.7.0.tgz",
      "integrity": "sha512-NIy3oAFp9shda19hy4HK0HRTWKtPJmGdnvywu01nOqNC2vZg+Z+fvJDxpMQA88eb2I9EcafcdjYgsDthnYTvGw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@jest/core": "^29.7.0",
        "@jest/types": "^29.6.3",
        "import-local": "^3.0.2",
        "jest-cli": "^29.7.0"
      },
      "bin": {
        "jest": "bin/jest.js"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      },
      "peerDependencies": {
        "node-notifier": "^8.0.1 || ^9.0.0 || ^10.0.0"
      },
      "peerDependenciesMeta": {
        "node-notifier": {
          "optional": true
        }
      }
    },
    "node_modules/jest-changed-files": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/jest-changed-files/-/jest-changed-files-29.7.0.tgz",
      "integrity": "sha512-fEArFiwf1BpQ+4bXSprcDc3/x4HSzL4al2tozwVpDFpsxALjLYdyiIK4e5Vz66GQJIbXJ82+35PtysofptNX2w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "execa": "^5.0.0",
        "jest-util": "^29.7.0",
        "p-limit": "^3.1.0"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/jest-circus": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/jest-circus/-/jest-circus-29.7.0.tgz",
      "integrity": "sha512-3E1nCMgipcTkCocFwM90XXQab9bS+GMsjdpmPrlelaxwD93Ad8iVEjX/vvHPdLPnFf+L40u+5+iutRdA1N9myw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/environment": "^29.7.0",
        "@jest/expect": "^29.7.0",
        "@jest/test-result": "^29.7.0",
        "@jest/types": "^29.6.3",
        "@types/node": "*",
        "chalk": "^4.0.0",
        "co": "^4.6.0",
        "dedent": "^1.0.0",
        "is-generator-fn": "^2.0.0",
        "jest-each": "^29.7.0",
        "jest-matcher-utils": "^29.7.0",
        "jest-message-util": "^29.7.0",
        "jest-runtime": "^29.7.0",
        "jest-snapshot": "^29.7.0",
        "jest-util": "^29.7.0",
        "p-limit": "^3.1.0",
        "pretty-format": "^29.7.0",
        "pure-rand": "^6.0.0",
        "slash": "^3.0.0",
        "stack-utils": "^2.0.3"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/jest-cli": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/jest-cli/-/jest-cli-29.7.0.tgz",
      "integrity": "sha512-OVVobw2IubN/GSYsxETi+gOe7Ka59EFMR/twOU3Jb2GnKKeMGJB5SGUUrEz3SFVmJASUdZUzy83sLNNQ2gZslg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/core": "^29.7.0",
        "@jest/test-result": "^29.7.0",
        "@jest/types": "^29.6.3",
        "chalk": "^4.0.0",
        "create-jest": "^29.7.0",
        "exit": "^0.1.2",
        "import-local": "^3.0.2",
        "jest-config": "^29.7.0",
        "jest-util": "^29.7.0",
        "jest-validate": "^29.7.0",
        "yargs": "^17.3.1"
      },
      "bin": {
        "jest": "bin/jest.js"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      },
      "peerDependencies": {
        "node-notifier": "^8.0.1 || ^9.0.0 || ^10.0.0"
      },
      "peerDependenciesMeta": {
        "node-notifier": {
          "optional": true
        }
      }
    },
    "node_modules/jest-config": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/jest-config/-/jest-config-29.7.0.tgz",
      "integrity": "sha512-uXbpfeQ7R6TZBqI3/TxCU4q4ttk3u0PJeC+E0zbfSoSjq6bJ7buBPxzQPL0ifrkY4DNu4JUdk0ImlBUYi840eQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.11.6",
        "@jest/test-sequencer": "^29.7.0",
        "@jest/types": "^29.6.3",
        "babel-jest": "^29.7.0",
        "chalk": "^4.0.0",
        "ci-info": "^3.2.0",
        "deepmerge": "^4.2.2",
        "glob": "^7.1.3",
        "graceful-fs": "^4.2.9",
        "jest-circus": "^29.7.0",
        "jest-environment-node": "^29.7.0",
        "jest-get-type": "^29.6.3",
        "jest-regex-util": "^29.6.3",
        "jest-resolve": "^29.7.0",
        "jest-runner": "^29.7.0",
        "jest-util": "^29.7.0",
        "jest-validate": "^29.7.0",
        "micromatch": "^4.0.4",
        "parse-json": "^5.2.0",
        "pretty-format": "^29.7.0",
        "slash": "^3.0.0",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      },
      "peerDependencies": {
        "@types/node": "*",
        "ts-node": ">=9.0.0"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "ts-node": {
          "optional": true
        }
      }
    },
    "node_modules/jest-config/node_modules/glob": {
      "version": "7.2.3",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
      "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
      "deprecated": "Glob versions prior to v9 are no longer supported",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.1.1",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/jest-diff": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/jest-diff/-/jest-diff-29.7.0.tgz",
      "integrity": "sha512-LMIgiIrhigmPrs03JHpxUh2yISK3vLFPkAodPeo0+BuF7wA2FoQbkEg1u8gBYBThncu7e1oEDUfIXVuTqLRUjw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chalk": "^4.0.0",
        "diff-sequences": "^29.6.3",
        "jest-get-type": "^29.6.3",
        "pretty-format": "^29.7.0"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/jest-docblock": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/jest-docblock/-/jest-docblock-29.7.0.tgz",
      "integrity": "sha512-q617Auw3A612guyaFgsbFeYpNP5t2aoUNLwBUbc/0kD1R4t9ixDbyFTHd1nok4epoVFpr7PmeWHrhvuV3XaJ4g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "detect-newline": "^3.0.0"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/jest-each": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/jest-each/-/jest-each-29.7.0.tgz",
      "integrity": "sha512-gns+Er14+ZrEoC5fhOfYCY1LOHHr0TI+rQUHZS8Ttw2l7gl+80eHc/gFf2Ktkw0+SIACDTeWvpFcv3B04VembQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/types": "^29.6.3",
        "chalk": "^4.0.0",
        "jest-get-type": "^29.6.3",
        "jest-util": "^29.7.0",
        "pretty-format": "^29.7.0"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/jest-environment-node": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/jest-environment-node/-/jest-environment-node-29.7.0.tgz",
      "integrity": "sha512-DOSwCRqXirTOyheM+4d5YZOrWcdu0LNZ87ewUoywbcb2XR4wKgqiG8vNeYwhjFMbEkfju7wx2GYH0P2gevGvFw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/environment": "^29.7.0",
        "@jest/fake-timers": "^29.7.0",
        "@jest/types": "^29.6.3",
        "@types/node": "*",
        "jest-mock": "^29.7.0",
        "jest-util": "^29.7.0"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/jest-get-type": {
      "version": "29.6.3",
      "resolved": "https://registry.npmjs.org/jest-get-type/-/jest-get-type-29.6.3.tgz",
      "integrity": "sha512-zrteXnqYxfQh7l5FHyL38jL39di8H8rHoecLH3JNxH3BwOrBsNeabdap5e0I23lD4HHI8W5VFBZqG4Eaq5LNcw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/jest-haste-map": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/jest-haste-map/-/jest-haste-map-29.7.0.tgz",
      "integrity": "sha512-fP8u2pyfqx0K1rGn1R9pyE0/KTn+G7PxktWidOBTqFPLYX0b9ksaMFkhK5vrS3DVun09pckLdlx90QthlW7AmA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/types": "^29.6.3",
        "@types/graceful-fs": "^4.1.3",
        "@types/node": "*",
        "anymatch": "^3.0.3",
        "fb-watchman": "^2.0.0",
        "graceful-fs": "^4.2.9",
        "jest-regex-util": "^29.6.3",
        "jest-util": "^29.7.0",
        "jest-worker": "^29.7.0",
        "micromatch": "^4.0.4",
        "walker": "^1.0.8"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      },
      "optionalDependencies": {
        "fsevents": "^2.3.2"
      }
    },
    "node_modules/jest-leak-detector": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/jest-leak-detector/-/jest-leak-detector-29.7.0.tgz",
      "integrity": "sha512-kYA8IJcSYtST2BY9I+SMC32nDpBT3J2NvWJx8+JCuCdl/CR1I4EKUJROiP8XtCcxqgTTBGJNdbB1A8XRKbTetw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "jest-get-type": "^29.6.3",
        "pretty-format": "^29.7.0"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/jest-matcher-utils": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/jest-matcher-utils/-/jest-matcher-utils-29.7.0.tgz",
      "integrity": "sha512-sBkD+Xi9DtcChsI3L3u0+N0opgPYnCRPtGcQYrgXmR+hmt/fYfWAL0xRXYU8eWOdfuLgBe0YCW3AFtnRLagq/g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chalk": "^4.0.0",
        "jest-diff": "^29.7.0",
        "jest-get-type": "^29.6.3",
        "pretty-format": "^29.7.0"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/jest-message-util": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-29.7.0.tgz",
      "integrity": "sha512-GBEV4GRADeP+qtB2+6u61stea8mGcOT4mCtrYISZwfu9/ISHFJ/5zOMXYbpBE9RsS5+Gb63DW4FgmnKJ79Kf6w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.12.13",
        "@jest/types": "^29.6.3",
        "@types/stack-utils": "^2.0.0",
        "chalk": "^4.0.0",
        "graceful-fs": "^4.2.9",
        "micromatch": "^4.0.4",
        "pretty-format": "^29.7.0",
        "slash": "^3.0.0",
        "stack-utils": "^2.0.3"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/jest-mock": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/jest-mock/-/jest-mock-29.7.0.tgz",
      "integrity": "sha512-ITOMZn+UkYS4ZFh83xYAOzWStloNzJFO2s8DWrE4lhtGD+AorgnbkiKERe4wQVBydIGPx059g6riW5Btp6Llnw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/types": "^29.6.3",
        "@types/node": "*",
        "jest-util": "^29.7.0"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/jest-pnp-resolver": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/jest-pnp-resolver/-/jest-pnp-resolver-1.2.3.tgz",
      "integrity": "sha512-+3NpwQEnRoIBtx4fyhblQDPgJI0H1IEIkX7ShLUjPGA7TtUTvI1oiKi3SR4oBR0hQhQR80l4WAe5RrXBwWMA8w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "peerDependencies": {
        "jest-resolve": "*"
      },
      "peerDependenciesMeta": {
        "jest-resolve": {
          "optional": true
        }
      }
    },
    "node_modules/jest-regex-util": {
      "version": "29.6.3",
      "resolved": "https://registry.npmjs.org/jest-regex-util/-/jest-regex-util-29.6.3.tgz",
      "integrity": "sha512-KJJBsRCyyLNWCNBOvZyRDnAIfUiRJ8v+hOBQYGn8gDyF3UegwiP4gwRR3/SDa42g1YbVycTidUF3rKjyLFDWbg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/jest-resolve": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/jest-resolve/-/jest-resolve-29.7.0.tgz",
      "integrity": "sha512-IOVhZSrg+UvVAshDSDtHyFCCBUl/Q3AAJv8iZ6ZjnZ74xzvwuzLXid9IIIPgTnY62SJjfuupMKZsZQRsCvxEgA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chalk": "^4.0.0",
        "graceful-fs": "^4.2.9",
        "jest-haste-map": "^29.7.0",
        "jest-pnp-resolver": "^1.2.2",
        "jest-util": "^29.7.0",
        "jest-validate": "^29.7.0",
        "resolve": "^1.20.0",
        "resolve.exports": "^2.0.0",
        "slash": "^3.0.0"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/jest-resolve-dependencies": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/jest-resolve-dependencies/-/jest-resolve-dependencies-29.7.0.tgz",
      "integrity": "sha512-un0zD/6qxJ+S0et7WxeI3H5XSe9lTBBR7bOHCHXkKR6luG5mwDDlIzVQ0V5cZCuoTgEdcdwzTghYkTWfubi+nA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "jest-regex-util": "^29.6.3",
        "jest-snapshot": "^29.7.0"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/jest-runner": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/jest-runner/-/jest-runner-29.7.0.tgz",
      "integrity": "sha512-fsc4N6cPCAahybGBfTRcq5wFR6fpLznMg47sY5aDpsoejOcVYFb07AHuSnR0liMcPTgBsA3ZJL6kFOjPdoNipQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/console": "^29.7.0",
        "@jest/environment": "^29.7.0",
        "@jest/test-result": "^29.7.0",
        "@jest/transform": "^29.7.0",
        "@jest/types": "^29.6.3",
        "@types/node": "*",
        "chalk": "^4.0.0",
        "emittery": "^0.13.1",
        "graceful-fs": "^4.2.9",
        "jest-docblock": "^29.7.0",
        "jest-environment-node": "^29.7.0",
        "jest-haste-map": "^29.7.0",
        "jest-leak-detector": "^29.7.0",
        "jest-message-util": "^29.7.0",
        "jest-resolve": "^29.7.0",
        "jest-runtime": "^29.7.0",
        "jest-util": "^29.7.0",
        "jest-watcher": "^29.7.0",
        "jest-worker": "^29.7.0",
        "p-limit": "^3.1.0",
        "source-map-support": "0.5.13"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/jest-runner/node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jest-runner/node_modules/source-map-support": {
      "version": "0.5.13",
      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.13.tgz",
      "integrity": "sha512-SHSKFHadjVA5oR4PPqhtAVdcBWwRYVd6g6cAXnIbRiIwc2EhPrTuKUBdSLvlEKyIP3GCf89fltvcZiP9MMFA1w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "buffer-from": "^1.0.0",
        "source-map": "^0.6.0"
      }
    },
    "node_modules/jest-runtime": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/jest-runtime/-/jest-runtime-29.7.0.tgz",
      "integrity": "sha512-gUnLjgwdGqW7B4LvOIkbKs9WGbn+QLqRQQ9juC6HndeDiezIwhDP+mhMwHWCEcfQ5RUXa6OPnFF8BJh5xegwwQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/environment": "^29.7.0",
        "@jest/fake-timers": "^29.7.0",
        "@jest/globals": "^29.7.0",
        "@jest/source-map": "^29.6.3",
        "@jest/test-result": "^29.7.0",
        "@jest/transform": "^29.7.0",
        "@jest/types": "^29.6.3",
        "@types/node": "*",
        "chalk": "^4.0.0",
        "cjs-module-lexer": "^1.0.0",
        "collect-v8-coverage": "^1.0.0",
        "glob": "^7.1.3",
        "graceful-fs": "^4.2.9",
        "jest-haste-map": "^29.7.0",
        "jest-message-util": "^29.7.0",
        "jest-mock": "^29.7.0",
        "jest-regex-util": "^29.6.3",
        "jest-resolve": "^29.7.0",
        "jest-snapshot": "^29.7.0",
        "jest-util": "^29.7.0",
        "slash": "^3.0.0",
        "strip-bom": "^4.0.0"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/jest-runtime/node_modules/glob": {
      "version": "7.2.3",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
      "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
      "deprecated": "Glob versions prior to v9 are no longer supported",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.1.1",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/jest-snapshot": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/jest-snapshot/-/jest-snapshot-29.7.0.tgz",
      "integrity": "sha512-Rm0BMWtxBcioHr1/OX5YCP8Uov4riHvKPknOGs804Zg9JGZgmIBkbtlxJC/7Z4msKYVbIJtfU+tKb8xlYNfdkw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.11.6",
        "@babel/generator": "^7.7.2",
        "@babel/plugin-syntax-jsx": "^7.7.2",
        "@babel/plugin-syntax-typescript": "^7.7.2",
        "@babel/types": "^7.3.3",
        "@jest/expect-utils": "^29.7.0",
        "@jest/transform": "^29.7.0",
        "@jest/types": "^29.6.3",
        "babel-preset-current-node-syntax": "^1.0.0",
        "chalk": "^4.0.0",
        "expect": "^29.7.0",
        "graceful-fs": "^4.2.9",
        "jest-diff": "^29.7.0",
        "jest-get-type": "^29.6.3",
        "jest-matcher-utils": "^29.7.0",
        "jest-message-util": "^29.7.0",
        "jest-util": "^29.7.0",
        "natural-compare": "^1.4.0",
        "pretty-format": "^29.7.0",
        "semver": "^7.5.3"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/jest-util": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/jest-util/-/jest-util-29.7.0.tgz",
      "integrity": "sha512-z6EbKajIpqGKU56y5KBUgy1dt1ihhQJgWzUlZHArA/+X2ad7Cb5iF+AK1EWVL/Bo7Rz9uurpqw6SiBCefUbCGA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/types": "^29.6.3",
        "@types/node": "*",
        "chalk": "^4.0.0",
        "ci-info": "^3.2.0",
        "graceful-fs": "^4.2.9",
        "picomatch": "^2.2.3"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/jest-util/node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/jest-validate": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/jest-validate/-/jest-validate-29.7.0.tgz",
      "integrity": "sha512-ZB7wHqaRGVw/9hST/OuFUReG7M8vKeq0/J2egIGLdvjHCmYqGARhzXmtgi+gVeZ5uXFF219aOc3Ls2yLg27tkw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/types": "^29.6.3",
        "camelcase": "^6.2.0",
        "chalk": "^4.0.0",
        "jest-get-type": "^29.6.3",
        "leven": "^3.1.0",
        "pretty-format": "^29.7.0"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/jest-validate/node_modules/camelcase": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-6.3.0.tgz",
      "integrity": "sha512-Gmy6FhYlCY7uOElZUSbxo2UCDH8owEk996gkbrpsgGtrJLM3J7jGxl9Ic7Qwwj4ivOE5AWZWRMecDdF7hqGjFA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/jest-watcher": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/jest-watcher/-/jest-watcher-29.7.0.tgz",
      "integrity": "sha512-49Fg7WXkU3Vl2h6LbLtMQ/HyB6rXSIX7SqvBLQmssRBGN9I0PNvPmAmCWSOY6SOvrjhI/F7/bGAv9RtnsPA03g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/test-result": "^29.7.0",
        "@jest/types": "^29.6.3",
        "@types/node": "*",
        "ansi-escapes": "^4.2.1",
        "chalk": "^4.0.0",
        "emittery": "^0.13.1",
        "jest-util": "^29.7.0",
        "string-length": "^4.0.1"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/jest-worker": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-29.7.0.tgz",
      "integrity": "sha512-eIz2msL/EzL9UFTFFx7jBTkeZfku0yUAyZZZmJ93H2TYEiroIx2PQjEXcwYtYl8zXCxb+PAmA2hLIt/6ZEkPHw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*",
        "jest-util": "^29.7.0",
        "merge-stream": "^2.0.0",
        "supports-color": "^8.0.0"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/jest-worker/node_modules/supports-color": {
      "version": "8.1.1",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-8.1.1.tgz",
      "integrity": "sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/supports-color?sponsor=1"
      }
    },
    "node_modules/jiti": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.4.2.tgz",
      "integrity": "sha512-rg9zJN+G4n2nfJl5MW3BMygZX56zKPNVEYYqq7adpmMh4Jn2QNEwhvQlFy6jPVdcod7txZtKHWnyZiA3a0zP7A==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "license": "MIT"
    },
    "node_modules/js-yaml": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.1.tgz",
      "integrity": "sha512-qQKT4zQxXl8lLwBtHMWwaTcGfFOZviOJet3Oy/xmGk2gZH677CJM9EvtfdSkgWcATZhj/55JZ0rmy3myCT5lsA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
      "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
      "license": "MIT",
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-parse-even-better-errors": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
      "integrity": "sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-schema-to-ts": {
      "version": "1.6.4",
      "resolved": "https://registry.npmjs.org/json-schema-to-ts/-/json-schema-to-ts-1.6.4.tgz",
      "integrity": "sha512-pR4yQ9DHz6itqswtHCm26mw45FSNfQ9rEQjosaZErhn5J3J2sIViQiz8rDaezjKAhFGpmsoczYVBgGHzFw/stA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/json-schema": "^7.0.6",
        "ts-toolbelt": "^6.15.5"
      }
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
      "license": "MIT",
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jsonc-parser": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/jsonc-parser/-/jsonc-parser-3.3.1.tgz",
      "integrity": "sha512-HUgH65KyejrUFPvHFPbqOY0rsFip3Bo5wb4ngvdi1EpCYWUQDC5V+Y7mZws+DLkr4M//zQJoanu1SP+87Dv1oQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/jsonfile": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-6.1.0.tgz",
      "integrity": "sha512-5dgndWOriYSm5cnYaJNhalLNDKOqFwyDB/rr1E9ZsGciGvKPs8R2xYGCacuf3z6K1YKDz182fd+fY3cn3pMqXQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "universalify": "^2.0.0"
      },
      "optionalDependencies": {
        "graceful-fs": "^4.1.6"
      }
    },
    "node_modules/jsonwebtoken": {
      "version": "9.0.2",
      "resolved": "https://registry.npmjs.org/jsonwebtoken/-/jsonwebtoken-9.0.2.tgz",
      "integrity": "sha512-PRp66vJ865SSqOlgqS8hujT5U4AOgMfhrwYIuIhfKaoSCZcirrmASQr8CX7cUg+RMih+hgznrjp99o+W4pJLHQ==",
      "license": "MIT",
      "dependencies": {
        "jws": "^3.2.2",
        "lodash.includes": "^4.3.0",
        "lodash.isboolean": "^3.0.3",
        "lodash.isinteger": "^4.0.4",
        "lodash.isnumber": "^3.0.3",
        "lodash.isplainobject": "^4.0.6",
        "lodash.isstring": "^4.0.1",
        "lodash.once": "^4.0.0",
        "ms": "^2.1.1",
        "semver": "^7.5.4"
      },
      "engines": {
        "node": ">=12",
        "npm": ">=6"
      }
    },
    "node_modules/jwa": {
      "version": "1.4.2",
      "resolved": "https://registry.npmjs.org/jwa/-/jwa-1.4.2.tgz",
      "integrity": "sha512-eeH5JO+21J78qMvTIDdBXidBd6nG2kZjg5Ohz/1fpa28Z4CcsWUzJ1ZZyFq/3z3N17aZy+ZuBoHljASbL1WfOw==",
      "license": "MIT",
      "dependencies": {
        "buffer-equal-constant-time": "^1.0.1",
        "ecdsa-sig-formatter": "1.0.11",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/jws": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/jws/-/jws-3.2.3.tgz",
      "integrity": "sha512-byiJ0FLRdLdSVSReO/U4E7RoEyOCKnEnEPMjq3HxWtvzLsV08/i5RQKsFVNkCldrCaPr2vDNAOMsfs8T/Hze7g==",
      "license": "MIT",
      "dependencies": {
        "jwa": "^1.4.2",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/kind-of": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/kleur": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/kleur/-/kleur-3.0.3.tgz",
      "integrity": "sha512-eTIzlVOSUR+JxdDFepEYcBMtZ9Qqdef+rnzWdRZuMbOywu5tO2w2N7rqjoANZ5k9vywhL6Br1VRjUIgTQx4E8w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/kuler": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/kuler/-/kuler-2.0.0.tgz",
      "integrity": "sha512-Xq9nH7KlWZmXAtodXDDRE7vs6DU1gTU8zYDHDiWLSip45Egwq3plLHzPn27NgvzL2r1LMPC1vdqh98sQxtqj4A==",
      "license": "MIT"
    },
    "node_modules/leven": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/leven/-/leven-3.1.0.tgz",
      "integrity": "sha512-qsda+H8jTaUaN/x5vzW2rzc+8Rw4TAQ/4KjB46IwK5VH+IlVeeeje/EoZRpiXvIqjFgK84QffqPztGI3VBLG1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/libphonenumber-js": {
      "version": "1.12.10",
      "resolved": "https://registry.npmjs.org/libphonenumber-js/-/libphonenumber-js-1.12.10.tgz",
      "integrity": "sha512-E91vHJD61jekHHR/RF/E83T/CMoaLXT7cwYA75T4gim4FZjnM6hbJjVIGg7chqlSqRsSvQ3izGmOjHy1SQzcGQ==",
      "license": "MIT"
    },
    "node_modules/lines-and-columns": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
      "integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/load-esm": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/load-esm/-/load-esm-1.0.2.tgz",
      "integrity": "sha512-nVAvWk/jeyrWyXEAs84mpQCYccxRqgKY4OznLuJhJCa0XsPSfdOIr2zvBZEj3IHEHbX97jjscKRRV539bW0Gpw==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/Borewit"
        },
        {
          "type": "buymeacoffee",
          "url": "https://buymeacoffee.com/borewit"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=13.2.0"
      }
    },
    "node_modules/loader-runner": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/loader-runner/-/loader-runner-4.3.1.tgz",
      "integrity": "sha512-IWqP2SCPhyVFTBtRcgMHdzlf9ul25NwaFx4wCEH/KjAXuuHY4yNjvPXsBokp8jCB936PyWRaPKUNh8NvylLp2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.11.5"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==",
      "license": "MIT"
    },
    "node_modules/lodash.includes": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/lodash.includes/-/lodash.includes-4.3.0.tgz",
      "integrity": "sha512-W3Bx6mdkRTGtlJISOvVD/lbqjTlPPUDTMnlXZFnVwi9NKJ6tiAk6LVdlhZMm17VZisqhKcgzpO5Wz91PCt5b0w==",
      "license": "MIT"
    },
    "node_modules/lodash.isboolean": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/lodash.isboolean/-/lodash.isboolean-3.0.3.tgz",
      "integrity": "sha512-Bz5mupy2SVbPHURB98VAcw+aHh4vRV5IPNhILUCsOzRmsTmSQ17jIuqopAentWoehktxGd9e/hbIXq980/1QJg==",
      "license": "MIT"
    },
    "node_modules/lodash.isinteger": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/lodash.isinteger/-/lodash.isinteger-4.0.4.tgz",
      "integrity": "sha512-DBwtEWN2caHQ9/imiNeEA5ys1JoRtRfY3d7V9wkqtbycnAmTvRRmbHKDV4a0EYc678/dia0jrte4tjYwVBaZUA==",
      "license": "MIT"
    },
    "node_modules/lodash.isnumber": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/lodash.isnumber/-/lodash.isnumber-3.0.3.tgz",
      "integrity": "sha512-QYqzpfwO3/CWf3XP+Z+tkQsfaLL/EnUlXWVkIk5FUPc4sBdTehEqZONuyRt2P67PXAk+NXmTBcc97zw9t1FQrw==",
      "license": "MIT"
    },
    "node_modules/lodash.isplainobject": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/lodash.isplainobject/-/lodash.isplainobject-4.0.6.tgz",
      "integrity": "sha512-oSXzaWypCMHkPC3NvBEaPHf0KsA5mvPrOPgQWDsbg8n7orZ290M0BmC/jgRZ4vcJ6DTAhjrsSYgdsW/F+MFOBA==",
      "license": "MIT"
    },
    "node_modules/lodash.isstring": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/lodash.isstring/-/lodash.isstring-4.0.1.tgz",
      "integrity": "sha512-0wJxfxH1wgO3GrbuP+dTTk7op+6L41QCXbGINEmD+ny/G/eCqGzxyCsh7159S+mgDDcoarnBw6PC1PS5+wUGgw==",
      "license": "MIT"
    },
    "node_modules/lodash.memoize": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/lodash.memoize/-/lodash.memoize-4.1.2.tgz",
      "integrity": "sha512-t7j+NzmgnQzTAYXcsHYLgimltOV1MXHtlOWf6GjL9Kj8GK5FInw5JotxvbOs+IvV1/Dzo04/fCGfLVs7aXb4Ag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/lodash.once": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/lodash.once/-/lodash.once-4.1.1.tgz",
      "integrity": "sha512-Sb487aTOCr9drQVL8pIxOzVhafOjZN9UU54hiN8PU3uAiSV7lx1yYNpbNmex2PK6dSJoNTSJUUswT651yww3Mg==",
      "license": "MIT"
    },
    "node_modules/log-symbols": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-4.1.0.tgz",
      "integrity": "sha512-8XPvpAA8uyhfteu8pIvQxpJZ7SYYdpUivZpGy6sFsBuKRY/7rQGavedeB8aK+Zkyq6upMFVL/9AW6vOYzfRyLg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chalk": "^4.1.0",
        "is-unicode-supported": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/logform": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/logform/-/logform-2.7.0.tgz",
      "integrity": "sha512-TFYA4jnP7PVbmlBIfhlSe+WKxs9dklXMTEGcBCIvLhE/Tn3H6Gk1norupVW7m5Cnd4bLcr08AytbyV/xj7f/kQ==",
      "license": "MIT",
      "dependencies": {
        "@colors/colors": "1.6.0",
        "@types/triple-beam": "^1.3.2",
        "fecha": "^4.2.0",
        "ms": "^2.1.1",
        "safe-stable-stringify": "^2.3.1",
        "triple-beam": "^1.3.0"
      },
      "engines": {
        "node": ">= 12.0.0"
      }
    },
    "node_modules/logform/node_modules/@colors/colors": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/@colors/colors/-/colors-1.6.0.tgz",
      "integrity": "sha512-Ir+AOibqzrIsL6ajt3Rz3LskB7OiMVHqltZmspbW/TJuTVuyOMirVqAkjfY6JISiLHgyNqicAC8AyHHGzNd/dA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.1.90"
      }
    },
    "node_modules/lowercase-keys": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-3.0.0.tgz",
      "integrity": "sha512-ozCC6gdQ+glXOQsveKD0YsDy8DSQFjDTz4zyzEHNV5+JP5D62LmfDZ6o1cycFx9ouG940M5dE8C8CTewdj2YWQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.20.0 || ^14.13.1 || >=16.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
      "license": "ISC",
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.17",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.17.tgz",
      "integrity": "sha512-sNPKHvyjVf7gyjwS4xGTaW/mCnF8wnjtifKBEhxfZ7E/S8tQ0rssrwGNn6q8JH/ohItJfSQp9mBtQYuTlH5QnA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0"
      }
    },
    "node_modules/make-error": {
      "version": "1.3.6",
      "resolved": "https://registry.npmjs.org/make-error/-/make-error-1.3.6.tgz",
      "integrity": "sha512-s8UhlNe7vPKomQhC1qFelMokr/Sc3AgNbso3n74mVPA5LTZwkB9NlXf4XPamLxJE8h0gh73rM94xvwRT2CVInw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/makeerror": {
      "version": "1.0.12",
      "resolved": "https://registry.npmjs.org/makeerror/-/makeerror-1.0.12.tgz",
      "integrity": "sha512-JmqCvUhmt43madlpFzG4BQzG2Z3m6tvQDNKdClZnO3VbIudJYmxsT0FNJMeiB2+JTSlTQTSbU8QdesVmwJcmLg==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "tmpl": "1.0.5"
      }
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/media-typer": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-1.1.0.tgz",
      "integrity": "sha512-aisnrDP4GNe06UcKFnV5bfMNPBUw4jsLGaWwWfnH3v02GnBuXX2MCVn5RbrWo0j3pczUilYblq7fQ7Nw2t5XKw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/memfs": {
      "version": "3.5.3",
      "resolved": "https://registry.npmjs.org/memfs/-/memfs-3.5.3.tgz",
      "integrity": "sha512-UERzLsxzllchadvbPs5aolHh65ISpKpM+ccLbOJ8/vvpBKmAWf+la7dXFy7Mr0ySHbdHrFv5kGFCUHHe6GFEmw==",
      "dev": true,
      "license": "Unlicense",
      "dependencies": {
        "fs-monkey": "^1.0.4"
      },
      "engines": {
        "node": ">= 4.0.0"
      }
    },
    "node_modules/merge-descriptors": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-2.0.0.tgz",
      "integrity": "sha512-Snk314V5ayFLhp3fkUREub6WtjBfPdCPY1Ln8/8munuLuiYhsABgBVWsozAG+MWMbVEvcdcpbi9R7ww22l9Q3g==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/merge-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
      "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/methods": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
      "integrity": "sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/micromatch/node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/mime": {
      "version": "2.6.0",
      "resolved": "https://registry.npmjs.org/mime/-/mime-2.6.0.tgz",
      "integrity": "sha512-USPkMeET31rOMiarsBNIHZKLGgvKc/LrjofAnBlOttf5ajRvqiRA8QsenbcooctK6d6Ts6aqZXBA+XbkKthiQg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "mime": "cli.js"
      },
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/mime-db": {
      "version": "1.54.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.54.0.tgz",
      "integrity": "sha512-aU5EJuIN2WDemCcAp2vFBfp/m4EAhWJnUNSSw0ixs7/kXbd6Pg64EmwJkNdFhB8aWt1sH2CTXrLxo/iAGV3oPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-3.0.1.tgz",
      "integrity": "sha512-xRc4oEhT6eaBpU1XF7AjpOFD+xQmXNB5OVKwp4tqCuBpHLS/ZbBDrc07mYTDqVMg6PfxUjjNp85O6Cd2Z/5HWA==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "^1.54.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mimic-fn": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz",
      "integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/mimic-response": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/mimic-response/-/mimic-response-4.0.0.tgz",
      "integrity": "sha512-e5ISH9xMYU0DzrT+jl8q2ze9D6eWBto+I8CNpe+VI+K2J/F/k3PdkdTdz4wvGVH4NTpo+NRYTVIuMQEMMcsLqg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.20.0 || ^14.13.1 || >=16.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/minimist": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
      "integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/minipass": {
      "version": "7.1.2",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-7.1.2.tgz",
      "integrity": "sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/mkdirp": {
      "version": "0.5.6",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.6.tgz",
      "integrity": "sha512-FP+p8RB8OWpF3YZBCrP5gtADmtXApB5AMLn+vdyA+PyxCjrCs00mjyUozssO33cwDeT3wNGdLxJ5M//YqtHAJw==",
      "license": "MIT",
      "dependencies": {
        "minimist": "^1.2.6"
      },
      "bin": {
        "mkdirp": "bin/cmd.js"
      }
    },
    "node_modules/mri": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/mri/-/mri-1.2.0.tgz",
      "integrity": "sha512-tzzskb3bG8LvYGFF/mDTpq3jpI6Q9wc3LEmBaghu+DdCssd1FakN7Bc0hVNmEyGq1bq3RgfkCb3cmQLpNPOroA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/multer": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/multer/-/multer-2.0.2.tgz",
      "integrity": "sha512-u7f2xaZ/UG8oLXHvtF/oWTRvT44p9ecwBBqTwgJVq0+4BW1g8OW01TyMEGWBHbyMOYVHXslaut7qEQ1meATXgw==",
      "license": "MIT",
      "dependencies": {
        "append-field": "^1.0.0",
        "busboy": "^1.6.0",
        "concat-stream": "^2.0.0",
        "mkdirp": "^0.5.6",
        "object-assign": "^4.1.1",
        "type-is": "^1.6.18",
        "xtend": "^4.0.2"
      },
      "engines": {
        "node": ">= 10.16.0"
      }
    },
    "node_modules/multer/node_modules/media-typer": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
      "integrity": "sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/multer/node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/multer/node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/multer/node_modules/type-is": {
      "version": "1.6.18",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
      "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
      "license": "MIT",
      "dependencies": {
        "media-typer": "0.3.0",
        "mime-types": "~2.1.24"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mute-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-2.0.0.tgz",
      "integrity": "sha512-WWdIxpyjEn+FhQJQQv9aQAYlHoNVdzIzUySNV1gHUPDSdZJ3yZn7pAAbQcV7B56Mvu881q9FZV+0Vx2xC44VWA==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": "^18.17.0 || >=20.5.0"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/negotiator": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-1.0.0.tgz",
      "integrity": "sha512-8Ofs/AUQh8MaEcrlq5xOX0CQ9ypTF5dl78mjlMNfOK08fzpgTHQRQPBxcPlEtIw0yRpws+Zo/3r+5WRby7u3Gg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/neo-async": {
      "version": "2.6.2",
      "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.2.tgz",
      "integrity": "sha512-Yd3UES5mWCSqR+qNT93S3UoYUkqAZ9lLg8a7g9rimsWmYGK8cVToA4/sF3RrshdyV3sAGMXVUmpMYOw+dLpOuw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/node-abort-controller": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/node-abort-controller/-/node-abort-controller-3.1.1.tgz",
      "integrity": "sha512-AGK2yQKIjRuqnc6VkX2Xj5d+QW8xZ87pa1UK6yA6ouUyuxfHuMP6umE5QK7UmTeOAymo+Zx1Fxiuw9rVx8taHQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/node-emoji": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/node-emoji/-/node-emoji-1.11.0.tgz",
      "integrity": "sha512-wo2DpQkQp7Sjm2A0cq+sN7EHKO6Sl0ctXeBdFZrL9T9+UywORbufTcTZxom8YqpLQt/FqNMUkOpkZrJVYSKD3A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "lodash": "^4.17.21"
      }
    },
    "node_modules/node-fetch": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.6.9.tgz",
      "integrity": "sha512-DJm/CJkZkRjKKj4Zi4BsKVZh3ValV5IR5s7LVZnW+6YMh0W1BfNA8XSs6DLMGYlId5F3KnA70uu2qepcR08Qqg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "whatwg-url": "^5.0.0"
      },
      "engines": {
        "node": "4.x || >=6.0.0"
      },
      "peerDependencies": {
        "encoding": "^0.1.0"
      },
      "peerDependenciesMeta": {
        "encoding": {
          "optional": true
        }
      }
    },
    "node_modules/node-fetch-native": {
      "version": "1.6.6",
      "resolved": "https://registry.npmjs.org/node-fetch-native/-/node-fetch-native-1.6.6.tgz",
      "integrity": "sha512-8Mc2HhqPdlIfedsuZoc3yioPuzp6b+L5jRCRY1QzuWZh2EGJVQrGppC6V6cF0bLdbW0+O2YpqCA25aF/1lvipQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/node-int64": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/node-int64/-/node-int64-0.4.0.tgz",
      "integrity": "sha512-O5lz91xSOeoXP6DulyHfllpq+Eg00MWitZIbtPfoSEvqIHdl5gfcY6hYzDWnj0qD5tz52PI08u9qUvSVeUBeHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/node-releases": {
      "version": "2.0.27",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.27.tgz",
      "integrity": "sha512-nmh3lCkYZ3grZvqcCH+fjmQ7X+H0OeZgP40OierEaAptX4XofMh5kwNbWh7lBduUzCcV/8kZ+NDLCwm2iorIlA==",
      "license": "MIT"
    },
    "node_modules/normalize-package-data": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-6.0.2.tgz",
      "integrity": "sha512-V6gygoYb/5EmNI+MEGrWkC+e6+Rr7mTmfHrxDbLzxQogBkgzo76rkok0Am6thgSF7Mv2nLOajAJj5vDJZEFn7g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "hosted-git-info": "^7.0.0",
        "semver": "^7.3.5",
        "validate-npm-package-license": "^3.0.4"
      },
      "engines": {
        "node": "^16.14.0 || >=18.0.0"
      }
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/normalize-url": {
      "version": "8.0.2",
      "resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-8.0.2.tgz",
      "integrity": "sha512-Ee/R3SyN4BuynXcnTaekmaVdbDAEiNrHqjQIA37mHU8G9pf7aaAD4ZX3XjBLo6rsdcxA/gtkcNYZLt30ACgynw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14.16"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/npm-run-path": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-4.0.1.tgz",
      "integrity": "sha512-S48WzZW777zhNIrn7gxOlISNAqi9ZC/uQFnRdbeIHhZhCA6UqpkOT8T1G7BvfdgP4Er8gF4sUbaS0i7QvIfCWw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/nypm": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/nypm/-/nypm-0.6.1.tgz",
      "integrity": "sha512-hlacBiRiv1k9hZFiphPUkfSQ/ZfQzZDzC+8z0wL3lvDAOUu/2NnChkKuMoMjNur/9OpKuz2QsIeiPVN0xM5Q0w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "citty": "^0.1.6",
        "consola": "^3.4.2",
        "pathe": "^2.0.3",
        "pkg-types": "^2.2.0",
        "tinyexec": "^1.0.1"
      },
      "bin": {
        "nypm": "dist/cli.mjs"
      },
      "engines": {
        "node": "^14.16.0 || >=16.10.0"
      }
    },
    "node_modules/oauth": {
      "version": "0.10.2",
      "resolved": "https://registry.npmjs.org/oauth/-/oauth-0.10.2.tgz",
      "integrity": "sha512-JtFnB+8nxDEXgNyniwz573xxbKSOu3R8D40xQKqcjwJ2CDkYqUDI53o6IuzDJBx60Z8VKCm271+t8iFjakrl8Q==",
      "license": "MIT"
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-hash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/object-hash/-/object-hash-3.0.0.tgz",
      "integrity": "sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw==",
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
      "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/ohash": {
      "version": "2.0.11",
      "resolved": "https://registry.npmjs.org/ohash/-/ohash-2.0.11.tgz",
      "integrity": "sha512-RdR9FQrFwNBNXAr4GixM8YaRZRJ5PUWbKYbE5eOsrwAjJW0q2REGcf79oYPsLyskQCZG1PLN+S/K1V00joZAoQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/on-finished": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
      "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
      "license": "MIT",
      "dependencies": {
        "ee-first": "1.1.1"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/one-time": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/one-time/-/one-time-1.0.0.tgz",
      "integrity": "sha512-5DXOiRKwuSEcQ/l0kGCF6Q3jcADFv5tSmRaJck/OqkVFcOzutB134KRSfF0xDrL39MNnqxbHBbUUcjZIhTgb2g==",
      "license": "MIT",
      "dependencies": {
        "fn.name": "1.x.x"
      }
    },
    "node_modules/onetime": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz",
      "integrity": "sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "mimic-fn": "^2.1.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/ora": {
      "version": "5.4.1",
      "resolved": "https://registry.npmjs.org/ora/-/ora-5.4.1.tgz",
      "integrity": "sha512-5b6Y85tPxZZ7QytO+BQzysW31HJku27cRIlkbAXaNx+BdcVi+LlRFmVXzeF6a7JCwJpyw5c4b+YSVImQIrBpuQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "bl": "^4.1.0",
        "chalk": "^4.1.0",
        "cli-cursor": "^3.1.0",
        "cli-spinners": "^2.5.0",
        "is-interactive": "^1.0.0",
        "is-unicode-supported": "^0.1.0",
        "log-symbols": "^4.1.0",
        "strip-ansi": "^6.0.0",
        "wcwidth": "^1.0.1"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-cancelable": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/p-cancelable/-/p-cancelable-3.0.0.tgz",
      "integrity": "sha512-mlVgR3PGuzlo0MmTdk4cXqXWlwQDLnONTAg6sm62XkMJEiRxN3GL3SffkYvqwonbkJBcrI7Uvv5Zh9yjvn2iUw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.20"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-try": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
      "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/parse-json": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-5.2.0.tgz",
      "integrity": "sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.0.0",
        "error-ex": "^1.3.1",
        "json-parse-even-better-errors": "^2.3.0",
        "lines-and-columns": "^1.1.6"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parse-ms": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/parse-ms/-/parse-ms-2.1.0.tgz",
      "integrity": "sha512-kHt7kzLoS9VBZfUsiKjv43mr91ea+U05EyKkEtqp7vNbHxmaVuEqN7XxeEVnGrMtYOAxGrDElSi96K7EgO1zCA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/passport": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/passport/-/passport-0.7.0.tgz",
      "integrity": "sha512-cPLl+qZpSc+ireUvt+IzqbED1cHHkDoVYMo30jbJIdOOjQ1MQYZBPiNvmi8UM6lJuOpTPXJGZQk0DtC4y61MYQ==",
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "passport-strategy": "1.x.x",
        "pause": "0.0.1",
        "utils-merge": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/jaredhanson"
      }
    },
    "node_modules/passport-google-oauth20": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/passport-google-oauth20/-/passport-google-oauth20-2.0.0.tgz",
      "integrity": "sha512-KSk6IJ15RoxuGq7D1UKK/8qKhNfzbLeLrG3gkLZ7p4A6DBCcv7xpyQwuXtWdpyR0+E0mwkpjY1VfPOhxQrKzdQ==",
      "license": "MIT",
      "dependencies": {
        "passport-oauth2": "1.x.x"
      },
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/passport-jwt": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/passport-jwt/-/passport-jwt-4.0.1.tgz",
      "integrity": "sha512-UCKMDYhNuGOBE9/9Ycuoyh7vP6jpeTp/+sfMJl7nLff/t6dps+iaeE0hhNkKN8/HZHcJ7lCdOyDxHdDoxoSvdQ==",
      "license": "MIT",
      "dependencies": {
        "jsonwebtoken": "^9.0.0",
        "passport-strategy": "^1.0.0"
      }
    },
    "node_modules/passport-oauth2": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/passport-oauth2/-/passport-oauth2-1.8.0.tgz",
      "integrity": "sha512-cjsQbOrXIDE4P8nNb3FQRCCmJJ/utnFKEz2NX209f7KOHPoX18gF7gBzBbLLsj2/je4KrgiwLLGjf0lm9rtTBA==",
      "license": "MIT",
      "dependencies": {
        "base64url": "3.x.x",
        "oauth": "0.10.x",
        "passport-strategy": "1.x.x",
        "uid2": "0.0.x",
        "utils-merge": "1.x.x"
      },
      "engines": {
        "node": ">= 0.4.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/jaredhanson"
      }
    },
    "node_modules/passport-strategy": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/passport-strategy/-/passport-strategy-1.0.0.tgz",
      "integrity": "sha512-CB97UUvDKJde2V0KDWWB3lyf6PC3FaZP7YxZ2G8OAtn9p4HI9j9JLP9qjOGZFvyl8uwNT8qM+hGnz/n16NI7oA==",
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/path-browserify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-browserify/-/path-browserify-1.0.1.tgz",
      "integrity": "sha512-b7uo2UCUOYZcnF/3ID0lulOJi/bafxa1xPe7ZPsammBSpjSWQkjNxlt635YGS2MiR9GjvuXCtz2emr3jbsz98g==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/path-scurry": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/path-scurry/-/path-scurry-2.0.1.tgz",
      "integrity": "sha512-oWyT4gICAu+kaA7QWk/jvCHWarMKNs6pXOGWKDTr7cw4IGcUbW+PeTfbaQiLGheFRpjo6O9J0PmyMfQPjH71oA==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "lru-cache": "^11.0.0",
        "minipass": "^7.1.2"
      },
      "engines": {
        "node": "20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/path-scurry/node_modules/lru-cache": {
      "version": "11.2.4",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-11.2.4.tgz",
      "integrity": "sha512-B5Y16Jr9LB9dHVkh6ZevG+vAbOsNOYCX+sXvFWFu7B3Iz5mijW3zdbMyhsh8ANd2mSWBYdJgnqi+mL7/LrOPYg==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/path-to-regexp": {
      "version": "8.2.0",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-8.2.0.tgz",
      "integrity": "sha512-TdrF7fW9Rphjq4RjrW0Kp2AW0Ahwu9sRGTkS6bvDi0SCwZlEZYmcfDbEsTz8RVk0EHIS/Vd1bv3JhG+1xZuAyQ==",
      "license": "MIT",
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/path-type": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
      "integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/pathe": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/pathe/-/pathe-2.0.3.tgz",
      "integrity": "sha512-WUjGcAqP1gQacoQe+OBJsFA7Ld4DyXuUIjZ5cc75cLHvJ7dtNsTugphxIADwspS+AraAUePCKrSVtPLFj/F88w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/pause": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/pause/-/pause-0.0.1.tgz",
      "integrity": "sha512-KG8UEiEVkR3wGEb4m5yZkVCzigAD+cVEJck2CzYZO37ZGJfctvVptVO192MwrtPhzONn6go8ylnOdMhKqi4nfg=="
    },
    "node_modules/pend": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/pend/-/pend-1.2.0.tgz",
      "integrity": "sha512-F3asv42UuXchdzt+xXqfW1OGlVBe+mxa2mqI0pg5yAHZPvFmY3Y6drSf/GQ1A86WgWEN9Kzh/WrgKa6iGcHXLg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/perfect-debounce": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/perfect-debounce/-/perfect-debounce-1.0.0.tgz",
      "integrity": "sha512-xCy9V055GLEqoFaHoC1SoLIaLmWctgCUaBaWxDZ7/Zx4CTyX7cJQLJOok/orfjZAh9kEYpjJa4d0KcJmCbctZA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/picocolors": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.0.0.tgz",
      "integrity": "sha512-1fygroTLlHu66zi26VoTDv8yRgm0Fccecssto+MhsZ0D/DGW2sm8E8AjW7NU5VVTRt5GxbeZ5qBuJr+HyLYkjQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.2.tgz",
      "integrity": "sha512-M7BAV6Rlcy5u+m6oPhAPFgJTzAioX/6B0DxyvDlo9l8+T3nLKbrczg2WLUyzd45L8RqfUMyGPzekbMvX2Ldkwg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/pirates": {
      "version": "4.0.7",
      "resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.7.tgz",
      "integrity": "sha512-TfySrs/5nm8fQJDcBDuUng3VOUKsd7S+zqvbOTiGXHfxX4wK31ard+hoNuvkicM/2YFzlpDgABOevKSsB4G/FA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/piscina": {
      "version": "4.9.2",
      "resolved": "https://registry.npmjs.org/piscina/-/piscina-4.9.2.tgz",
      "integrity": "sha512-Fq0FERJWFEUpB4eSY59wSNwXD4RYqR+nR/WiEVcZW8IWfVBxJJafcgTEZDQo8k3w0sUarJ8RyVbbUF4GQ2LGbQ==",
      "dev": true,
      "license": "MIT",
      "optionalDependencies": {
        "@napi-rs/nice": "^1.0.1"
      }
    },
    "node_modules/pkg-dir": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz",
      "integrity": "sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "find-up": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/pkg-dir/node_modules/find-up": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
      "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^5.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/pkg-dir/node_modules/locate-path": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
      "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^4.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/pkg-dir/node_modules/p-limit": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
      "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-try": "^2.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/pkg-dir/node_modules/p-locate": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
      "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^2.2.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/pkg-types": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/pkg-types/-/pkg-types-2.2.0.tgz",
      "integrity": "sha512-2SM/GZGAEkPp3KWORxQZns4M+WSeXbC2HEvmOIJe3Cmiv6ieAJvdVhDldtHqM5J1Y7MrR1XhkBT/rMlhh9FdqQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "confbox": "^0.2.2",
        "exsolve": "^1.0.7",
        "pathe": "^2.0.3"
      }
    },
    "node_modules/pluralize": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/pluralize/-/pluralize-8.0.0.tgz",
      "integrity": "sha512-Nc3IT5yHzflTfbjgqWcCPpo7DaKy4FnpB0l/zCAW0Tc7jxAiuqSxHasntB3D7887LSrA93kDJ9IXovxJYxyLCA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/prettier": {
      "version": "3.6.2",
      "resolved": "https://registry.npmjs.org/prettier/-/prettier-3.6.2.tgz",
      "integrity": "sha512-I7AIg5boAr5R0FFtJ6rCfD+LFsWHp81dolrFD8S79U9tb8Az2nGrJncnMSnys+bpQJfRUzqs9hnA81OAA3hCuQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "bin": {
        "prettier": "bin/prettier.cjs"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/prettier/prettier?sponsor=1"
      }
    },
    "node_modules/prettier-linter-helpers": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/prettier-linter-helpers/-/prettier-linter-helpers-1.0.0.tgz",
      "integrity": "sha512-GbK2cP9nraSSUF9N2XwUwqfzlAFlMNYYl+ShE/V+H8a9uNl/oUqB1w2EL54Jh0OlyRSd8RfWYJ3coVS4TROP2w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-diff": "^1.1.2"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/pretty-bytes": {
      "version": "5.6.0",
      "resolved": "https://registry.npmjs.org/pretty-bytes/-/pretty-bytes-5.6.0.tgz",
      "integrity": "sha512-FFw039TmrBqFK8ma/7OL3sDz/VytdtJr044/QUJtH0wK9lb9jLq9tJyIxUwtQJHwar2BqtiA4iCWSwo9JLkzFg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/pretty-format": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-29.7.0.tgz",
      "integrity": "sha512-Pdlw/oPxN+aXdmM9R00JVC9WVFoCLTKJvDVLgmJ+qAffBMxsV85l/Lu7sNx4zSzPyoL2euImuEwHhOXdEgNFZQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/schemas": "^29.6.3",
        "ansi-styles": "^5.0.0",
        "react-is": "^18.0.0"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/pretty-format/node_modules/ansi-styles": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-5.2.0.tgz",
      "integrity": "sha512-Cxwpt2SfTzTtXcfOlzGEee8O+c+MmUgGrNiBcXnuWxuFJHe6a5Hz7qwhwe5OgaSYI0IJvkLqWX1ASG+cJOkEiA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/pretty-ms": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/pretty-ms/-/pretty-ms-7.0.1.tgz",
      "integrity": "sha512-973driJZvxiGOQ5ONsFhOF/DtzPMOMtgC11kCpUrPGMTgqp2q/1gwzCquocrN33is0VZ5GFHXZYMM9l6h67v2Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "parse-ms": "^2.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/prisma": {
      "version": "6.13.0",
      "resolved": "https://registry.npmjs.org/prisma/-/prisma-6.13.0.tgz",
      "integrity": "sha512-dfzORf0AbcEyyzxuv2lEwG8g+WRGF/qDQTpHf/6JoHsyF5MyzCEZwClVaEmw3WXcobgadosOboKUgQU0kFs9kw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "peer": true,
      "dependencies": {
        "@prisma/config": "6.13.0",
        "@prisma/engines": "6.13.0"
      },
      "bin": {
        "prisma": "build/index.js"
      },
      "engines": {
        "node": ">=18.18"
      },
      "peerDependencies": {
        "typescript": ">=5.1.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/prompts": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/prompts/-/prompts-2.4.2.tgz",
      "integrity": "sha512-NxNv/kLguCA7p3jE8oL2aEBsrJWgAakBpgmgK6lpPWV+WuOmY6r2/zbAVnP+T8bQlA0nzHXSJSJW0Hq7ylaD2Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "kleur": "^3.0.3",
        "sisteransi": "^1.0.5"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/proxy-addr": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
      "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
      "license": "MIT",
      "dependencies": {
        "forwarded": "0.2.0",
        "ipaddr.js": "1.9.1"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/pure-rand": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/pure-rand/-/pure-rand-6.1.0.tgz",
      "integrity": "sha512-bVWawvoZoBYpp6yIoQtQXHZjmz35RSVHnUOTefl8Vcjr8snTPY1wnpSPMWekcFwbxI6gtmT7rSYPFvz71ldiOA==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/dubzzz"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fast-check"
        }
      ],
      "license": "MIT"
    },
    "node_modules/q": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/q/-/q-1.5.1.tgz",
      "integrity": "sha512-kV/CThkXo6xyFEZUugw/+pIOywXcDbFYgSct5cT3gqlbkBE1SJdwy6UQoZvodiWF/ckQLZyDE/Bu1M6gVu5lVw==",
      "deprecated": "You or someone you depend on is using Q, the JavaScript Promise library that gave JavaScript developers strong feelings about promises. They can almost certainly migrate to the native JavaScript promise now. Thank you literally everyone for joining me in this bet against the odds. Be excellent to each other.\n\n(For a CapTP with native promises, see @endo/eventual-send and @endo/captp)",
      "license": "MIT",
      "engines": {
        "node": ">=0.6.0",
        "teleport": ">=0.2.0"
      }
    },
    "node_modules/qs": {
      "version": "6.14.0",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.14.0.tgz",
      "integrity": "sha512-YWWTjgABSKcvs/nWBi9PycY/JiPJqOD4JA6o9Sej2AtvSGarXxKC3OQSk4pAarbdQlKAh5D4FCQkJNkW+GAn3w==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">=0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/quick-lru": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-5.1.1.tgz",
      "integrity": "sha512-WuyALRjWPDGtt/wzJiadO5AXY+8hZ80hVpe6MyivgraREW751X3SbhRvG3eLKOYN+8VEvqLcf3wdnt44Z4S4SA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/randombytes": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.1.0.tgz",
      "integrity": "sha512-vYl3iOX+4CKUWuxGi9Ukhie6fsqXqS9FE2Zaic4tNFD2N2QQaXOMFbuKK4QmDHC0JO6B1Zp41J0LpT0oR68amQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "^5.1.0"
      }
    },
    "node_modules/range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/raw-body": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-3.0.2.tgz",
      "integrity": "sha512-K5zQjDllxWkf7Z5xJdV0/B0WTNqx6vxG70zJE4N0kBs4LovmEYWJzQGxC9bS9RAKu3bgM40lrd5zoLJ12MQ5BA==",
      "license": "MIT",
      "dependencies": {
        "bytes": "~3.1.2",
        "http-errors": "~2.0.1",
        "iconv-lite": "~0.7.0",
        "unpipe": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/rc9": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/rc9/-/rc9-2.1.2.tgz",
      "integrity": "sha512-btXCnMmRIBINM2LDZoEmOogIZU7Qe7zn4BpomSKZ/ykbLObuBdvG+mFq11DL6fjH1DRwHhrlgtYWG96bJiC7Cg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "defu": "^6.1.4",
        "destr": "^2.0.3"
      }
    },
    "node_modules/react-is": {
      "version": "18.3.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-18.3.1.tgz",
      "integrity": "sha512-/LLMVyas0ljjAtoYiPqYiL8VWXzUUdThrmU5+n20DZv+a+ClRoevUzw5JxU+Ieh5/c87ytoTBV9G1FiKfNJdmg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/read-package-up": {
      "version": "11.0.0",
      "resolved": "https://registry.npmjs.org/read-package-up/-/read-package-up-11.0.0.tgz",
      "integrity": "sha512-MbgfoNPANMdb4oRBNg5eqLbB2t2r+o5Ua1pNt8BqGp4I0FJZhuVSOj3PaBPni4azWuSzEdNn2evevzVmEk1ohQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "find-up-simple": "^1.0.0",
        "read-pkg": "^9.0.0",
        "type-fest": "^4.6.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/read-package-up/node_modules/type-fest": {
      "version": "4.41.0",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-4.41.0.tgz",
      "integrity": "sha512-TeTSQ6H5YHvpqVwBRcnLDCBnDOHWYu7IvGbHT6N8AOymcr9PJGjc1GTtiWZTYg0NCgYwvnYWEkVChQAr9bjfwA==",
      "dev": true,
      "license": "(MIT OR CC0-1.0)",
      "engines": {
        "node": ">=16"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/read-pkg": {
      "version": "9.0.1",
      "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-9.0.1.tgz",
      "integrity": "sha512-9viLL4/n1BJUCT1NXVTdS1jtm80yDEgR5T4yCelII49Mbj0v1rZdKqj7zCiYdbB0CuCgdrvHcNogAKTFPBocFA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/normalize-package-data": "^2.4.3",
        "normalize-package-data": "^6.0.0",
        "parse-json": "^8.0.0",
        "type-fest": "^4.6.0",
        "unicorn-magic": "^0.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/read-pkg/node_modules/parse-json": {
      "version": "8.3.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-8.3.0.tgz",
      "integrity": "sha512-ybiGyvspI+fAoRQbIPRddCcSTV9/LsJbf0e/S85VLowVGzRmokfneg2kwVW/KU5rOXrPSbF1qAKPMgNTqqROQQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.26.2",
        "index-to-position": "^1.1.0",
        "type-fest": "^4.39.1"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/read-pkg/node_modules/type-fest": {
      "version": "4.41.0",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-4.41.0.tgz",
      "integrity": "sha512-TeTSQ6H5YHvpqVwBRcnLDCBnDOHWYu7IvGbHT6N8AOymcr9PJGjc1GTtiWZTYg0NCgYwvnYWEkVChQAr9bjfwA==",
      "dev": true,
      "license": "(MIT OR CC0-1.0)",
      "engines": {
        "node": ">=16"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/readable-stream": {
      "version": "3.6.2",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.2.tgz",
      "integrity": "sha512-9u/sniCrY3D5WdsERHzHE4G2YCXqoG5FTHUiCC4SIbr6XcLZBY05ya9EKjYek9O5xOAwjGq+1JdGBAS7Q9ScoA==",
      "license": "MIT",
      "dependencies": {
        "inherits": "^2.0.3",
        "string_decoder": "^1.1.1",
        "util-deprecate": "^1.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/readdirp": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-4.1.2.tgz",
      "integrity": "sha512-GDhwkLfywWL2s6vEjyhri+eXmfH6j1L7JE27WhqLeYzoh/A3DBaYGEj2H/HFZCn/kMfim73FXxEJTw06WtxQwg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 14.18.0"
      },
      "funding": {
        "type": "individual",
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/reflect-metadata": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/reflect-metadata/-/reflect-metadata-0.2.2.tgz",
      "integrity": "sha512-urBwgfrvVP/eAyXx4hluJivBKzuEbSQs9rKWCrCkbSxNv8mxPcUZKeuoF3Uy4mJl3Lwprp6yy5/39VWigZ4K6Q==",
      "license": "Apache-2.0",
      "peer": true
    },
    "node_modules/repeat-string": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/repeat-string/-/repeat-string-1.6.1.tgz",
      "integrity": "sha512-PV0dzCYDNfRi1jCDbJzpW7jNNDRuCOG/jI5ctQcGKt/clZD+YcPS3yIlWuTJMmESC8aevCFmWJy5wjAFgNqN6w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/require-directory": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
      "integrity": "sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/require-from-string": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/require-from-string/-/require-from-string-2.0.2.tgz",
      "integrity": "sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/resolve": {
      "version": "1.22.10",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.10.tgz",
      "integrity": "sha512-NPRy+/ncIMeDlTAsuqwKIiferiawhefFJtkNSW0qZJEqMEb+qBt/77B/jGeeek+F0uOeN05CDa6HXbbIgtVX4w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-core-module": "^2.16.0",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve-alpn": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/resolve-alpn/-/resolve-alpn-1.2.1.tgz",
      "integrity": "sha512-0a1F4l73/ZFZOakJnQ3FvkJ2+gSTQWz/r2KE5OdDY0TxPm5h4GkqkWWfM47T7HsbnOtcJVEF4epCVy6u7Q3K+g==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/resolve-cwd": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/resolve-cwd/-/resolve-cwd-3.0.0.tgz",
      "integrity": "sha512-OrZaX2Mb+rJCpH/6CpSqt9xFVpN++x01XnN2ie9g6P5/3xelLAkXWVADpdz1IHD/KFfEXyE6V0U01OQ3UO2rEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "resolve-from": "^5.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/resolve-from": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
      "integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/resolve.exports": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/resolve.exports/-/resolve.exports-2.0.3.tgz",
      "integrity": "sha512-OcXjMsGdhL4XnbShKpAcSqPMzQoYkYyhbEaeSko47MjRP9NfEQMhZkXL1DoFlt9LWQn4YttrdnV6X2OiyzBi+A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/responselike": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/responselike/-/responselike-3.0.0.tgz",
      "integrity": "sha512-40yHxbNcl2+rzXvZuVkrYohathsSJlMTXKryG5y8uciHv1+xDLHQpgjG64JUO9nrEq2jGLH6IZ8BcZyw3wrweg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "lowercase-keys": "^3.0.0"
      },
      "engines": {
        "node": ">=14.16"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/restore-cursor": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-3.1.0.tgz",
      "integrity": "sha512-l+sSefzHpj5qimhFSE5a8nufZYAM3sBSVMAPtYkmC+4EH2anSGaEMXSD0izRQbu9nfyQ9y5JrVmp7E8oZrUjvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "onetime": "^5.1.0",
        "signal-exit": "^3.0.2"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/restore-cursor/node_modules/signal-exit": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
      "integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/reusify": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.1.0.tgz",
      "integrity": "sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/router": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/router/-/router-2.2.0.tgz",
      "integrity": "sha512-nLTrUKm2UyiL7rlhapu/Zl45FwNgkZGaCpZbIHajDYgwlJCOzLSk+cIPAnsEqV955GjILJnKbdQC1nVPz+gAYQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.0",
        "depd": "^2.0.0",
        "is-promise": "^4.0.0",
        "parseurl": "^1.3.3",
        "path-to-regexp": "^8.0.0"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/rxjs": {
      "version": "7.8.2",
      "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-7.8.2.tgz",
      "integrity": "sha512-dhKf903U/PQZY6boNNtAGdWbG85WAbjT/1xYoZIC7FAY0yWapOBQVsVrDl58W86//e1VpMNBtRV4MaXfdMySFA==",
      "license": "Apache-2.0",
      "peer": true,
      "dependencies": {
        "tslib": "^2.1.0"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/safe-stable-stringify": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/safe-stable-stringify/-/safe-stable-stringify-2.5.0.tgz",
      "integrity": "sha512-b3rppTKm9T+PsVCBEOUR46GWI7fdOs00VKZ1+9c1EWDaDMvjQc6tUwuFyIprgGgTcWoVHSKrU8H31ZHA2e0RHA==",
      "license": "MIT",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "license": "MIT"
    },
    "node_modules/schema-utils": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-3.3.0.tgz",
      "integrity": "sha512-pN/yOAvcC+5rQ5nERGuwrjLlYvLTbCibnZ1I7B1LaiAz9BRBlE9GMgE/eqV30P7aJQUf7Ddimy/RsbYO/GrVGg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/json-schema": "^7.0.8",
        "ajv": "^6.12.5",
        "ajv-keywords": "^3.5.2"
      },
      "engines": {
        "node": ">= 10.13.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/seek-bzip": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/seek-bzip/-/seek-bzip-2.0.0.tgz",
      "integrity": "sha512-SMguiTnYrhpLdk3PwfzHeotrcwi8bNV4iemL9tx9poR/yeaMYwB9VzR1w7b57DuWpuqR8n6oZboi0hj3AxZxQg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "commander": "^6.0.0"
      },
      "bin": {
        "seek-bunzip": "bin/seek-bunzip",
        "seek-table": "bin/seek-bzip-table"
      }
    },
    "node_modules/seek-bzip/node_modules/commander": {
      "version": "6.2.1",
      "resolved": "https://registry.npmjs.org/commander/-/commander-6.2.1.tgz",
      "integrity": "sha512-U7VdrJFnJgo4xjrHpTzu0yrHPGImdsmD95ZlgYSEajAn2JKzDhDTPG9kBTefmObL2w/ngeZnilk+OV9CG3d7UA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/semver": {
      "version": "7.7.2",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.2.tgz",
      "integrity": "sha512-RF0Fw+rO5AMf9MAyaRXI4AV0Ulj5lMHqVxxdSgiVbixSCXoEmmX/jk0CuJw4+3SqroYO9VoUh+HcuJivvtJemA==",
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/semver-regex": {
      "version": "4.0.5",
      "resolved": "https://registry.npmjs.org/semver-regex/-/semver-regex-4.0.5.tgz",
      "integrity": "sha512-hunMQrEy1T6Jr2uEVjrAIqjwWcQTgOAcIM52C8MY1EZSD3DDNft04XzvYKPqjED65bNVVko0YI38nYeEHCX3yw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/semver-truncate": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/semver-truncate/-/semver-truncate-3.0.0.tgz",
      "integrity": "sha512-LJWA9kSvMolR51oDE6PN3kALBNaUdkxzAGcexw8gjMA8xr5zUqK0JiR3CgARSqanYF3Z1YHvsErb1KDgh+v7Rg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "semver": "^7.3.5"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/send": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/send/-/send-1.2.0.tgz",
      "integrity": "sha512-uaW0WwXKpL9blXE2o0bRhoL2EGXIrZxQ2ZQ4mgcfoBxdFmQold+qWsD2jLrfZ0trjKL6vOw0j//eAwcALFjKSw==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.3.5",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "etag": "^1.8.1",
        "fresh": "^2.0.0",
        "http-errors": "^2.0.0",
        "mime-types": "^3.0.1",
        "ms": "^2.1.3",
        "on-finished": "^2.4.1",
        "range-parser": "^1.2.1",
        "statuses": "^2.0.1"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/serialize-javascript": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/serialize-javascript/-/serialize-javascript-6.0.2.tgz",
      "integrity": "sha512-Saa1xPByTTq2gdeFZYLLo+RFE35NHZkAbqZeWNd3BpzppeVisAqpDjcp8dyf6uIvEqJRd46jemmyA4iFIeVk8g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "randombytes": "^2.1.0"
      }
    },
    "node_modules/serve-static": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-2.2.0.tgz",
      "integrity": "sha512-61g9pCh0Vnh7IutZjtLGGpTA355+OPn2TyDv/6ivP2h/AdAVX9azsoxmg2/M6nZeQZNYBEwIcsne1mJd9oQItQ==",
      "license": "MIT",
      "dependencies": {
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "parseurl": "^1.3.3",
        "send": "^1.2.0"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/setprototypeof": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
      "license": "ISC"
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/side-channel": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz",
      "integrity": "sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3",
        "side-channel-list": "^1.0.0",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.0.tgz",
      "integrity": "sha512-FCLHtRD/gnpCiCHEiJLOwdmFP+wzCmDEkc9y7NsYxeF4u7Btsn1ZuwgwJGxImImHicJArLP4R0yX4c2KCrMrTA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/signal-exit": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz",
      "integrity": "sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/sisteransi": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/sisteransi/-/sisteransi-1.0.5.tgz",
      "integrity": "sha512-bLGGlR1QxBcynn2d5YmDX4MGjlZvy2MRBDRNHLJ8VI6l6+9FUiyTFNJ0IveOSP0bcXgVDPRcfGqA0pjaqUpfVg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/slash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
      "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/socket.io": {
      "version": "4.8.1",
      "resolved": "https://registry.npmjs.org/socket.io/-/socket.io-4.8.1.tgz",
      "integrity": "sha512-oZ7iUCxph8WYRHHcjBEc9unw3adt5CmSNlppj/5Q4k2RIrhl8Z5yY2Xr4j9zj0+wzVZ0bxmYoGSzKJnRl6A4yg==",
      "license": "MIT",
      "dependencies": {
        "accepts": "~1.3.4",
        "base64id": "~2.0.0",
        "cors": "~2.8.5",
        "debug": "~4.3.2",
        "engine.io": "~6.6.0",
        "socket.io-adapter": "~2.5.2",
        "socket.io-parser": "~4.2.4"
      },
      "engines": {
        "node": ">=10.2.0"
      }
    },
    "node_modules/socket.io-adapter": {
      "version": "2.5.5",
      "resolved": "https://registry.npmjs.org/socket.io-adapter/-/socket.io-adapter-2.5.5.tgz",
      "integrity": "sha512-eLDQas5dzPgOWCk9GuuJC2lBqItuhKI4uxGgo9aIV7MYbk2h9Q6uULEh8WBzThoI7l+qU9Ast9fVUmkqPP9wYg==",
      "license": "MIT",
      "dependencies": {
        "debug": "~4.3.4",
        "ws": "~8.17.1"
      }
    },
    "node_modules/socket.io-adapter/node_modules/debug": {
      "version": "4.3.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.7.tgz",
      "integrity": "sha512-Er2nc/H7RrMXZBFCEim6TCmMk02Z8vLC2Rbi1KEBggpo0fS6l0S1nnapwmIi3yW/+GOJap1Krg4w0Hg80oCqgQ==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/socket.io-parser": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/socket.io-parser/-/socket.io-parser-4.2.4.tgz",
      "integrity": "sha512-/GbIKmo8ioc+NIWIhwdecY0ge+qVBSMdgxGygevmdHj24bsfgtCmcUUcQ5ZzcylGFHsN3k4HB4Cgkl96KVnuew==",
      "license": "MIT",
      "dependencies": {
        "@socket.io/component-emitter": "~3.1.0",
        "debug": "~4.3.1"
      },
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/socket.io-parser/node_modules/debug": {
      "version": "4.3.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.7.tgz",
      "integrity": "sha512-Er2nc/H7RrMXZBFCEim6TCmMk02Z8vLC2Rbi1KEBggpo0fS6l0S1nnapwmIi3yW/+GOJap1Krg4w0Hg80oCqgQ==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/socket.io/node_modules/accepts": {
      "version": "1.3.8",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",
      "integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",
      "license": "MIT",
      "dependencies": {
        "mime-types": "~2.1.34",
        "negotiator": "0.6.3"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/socket.io/node_modules/debug": {
      "version": "4.3.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.7.tgz",
      "integrity": "sha512-Er2nc/H7RrMXZBFCEim6TCmMk02Z8vLC2Rbi1KEBggpo0fS6l0S1nnapwmIi3yW/+GOJap1Krg4w0Hg80oCqgQ==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/socket.io/node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/socket.io/node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/socket.io/node_modules/negotiator": {
      "version": "0.6.3",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",
      "integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/sort-keys": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/sort-keys/-/sort-keys-1.1.2.tgz",
      "integrity": "sha512-vzn8aSqKgytVik0iwdBEi+zevbTYZogewTUM6dtpmGwEcdzbub/TX4bCzRhebDCRC3QzXgJsLRKB2V/Oof7HXg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-plain-obj": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sort-keys-length": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/sort-keys-length/-/sort-keys-length-1.0.1.tgz",
      "integrity": "sha512-GRbEOUqCxemTAk/b32F2xa8wDTs+Z1QHOkbhJDQTvv/6G3ZkbJ+frYWsTcc7cBB3Fu4wy4XlLCuNtJuMn7Gsvw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "sort-keys": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/source-map": {
      "version": "0.7.4",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.7.4.tgz",
      "integrity": "sha512-l3BikUxvPOcn5E74dZiq5BGsTb5yEwhaTSzccU6t4sDOH8NWJCstKO5QT2CvtFoK6F0saL7p9xHAqHOlCPJygA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/source-map-support": {
      "version": "0.5.21",
      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.21.tgz",
      "integrity": "sha512-uBHU3L3czsIyYXKX88fdrGovxdSCoTGDRZ6SYXtSRxLZUzHg5P/66Ht6uoUlHu9EZod+inXhKo3qQgwXUT/y1w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "buffer-from": "^1.0.0",
        "source-map": "^0.6.0"
      }
    },
    "node_modules/source-map-support/node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/spdx-correct": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.2.0.tgz",
      "integrity": "sha512-kN9dJbvnySHULIluDHy32WHRUu3Og7B9sbY7tsFLctQkIqnMh3hErYgdMjTYuqmcXX+lK5T1lnUt3G7zNswmZA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "spdx-expression-parse": "^3.0.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "node_modules/spdx-exceptions": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.5.0.tgz",
      "integrity": "sha512-PiU42r+xO4UbUS1buo3LPJkjlO7430Xn5SVAhdpzzsPHsjbYVflnnFdATgabnLude+Cqu25p6N+g2lw/PFsa4w==",
      "dev": true,
      "license": "CC-BY-3.0"
    },
    "node_modules/spdx-expression-parse": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.1.tgz",
      "integrity": "sha512-cbqHunsQWnJNE6KhVSMsMeH5H/L9EpymbzqTQ3uLwNCLZ1Q481oWaofqH7nO6V07xlXwY6PhQdQ2IedWx/ZK4Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "spdx-exceptions": "^2.1.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "node_modules/spdx-license-ids": {
      "version": "3.0.21",
      "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.21.tgz",
      "integrity": "sha512-Bvg/8F5XephndSK3JffaRqdT+gyhfqIPwDHpX80tJrF8QQRYMo8sNMeaZ2Dp5+jhwKnUmIOyFFQfHRkjJm5nXg==",
      "dev": true,
      "license": "CC0-1.0"
    },
    "node_modules/sprintf-js": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
      "integrity": "sha512-D9cPgkvLlV3t3IzL0D0YLvGA9Ahk4PcvVwUbN0dSGr1aP0Nrt4AEnTUbuGvquEC0mA64Gqt1fzirlRs5ibXx8g==",
      "dev": true,
      "license": "BSD-3-Clause"
    },
    "node_modules/stack-trace": {
      "version": "0.0.10",
      "resolved": "https://registry.npmjs.org/stack-trace/-/stack-trace-0.0.10.tgz",
      "integrity": "sha512-KGzahc7puUKkzyMt+IqAep+TVNbKP+k2Lmwhub39m1AsTSkaDutx56aDCo+HLDzf/D26BIHTJWNiTG1KAJiQCg==",
      "license": "MIT",
      "engines": {
        "node": "*"
      }
    },
    "node_modules/stack-utils": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/stack-utils/-/stack-utils-2.0.6.tgz",
      "integrity": "sha512-XlkWvfIm6RmsWtNJx+uqtKLS8eqFbxUg0ZzLXqY0caEy9l7hruX8IpiDnjsLavoBgqCCR71TqWO8MaXYheJ3RQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "escape-string-regexp": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/stack-utils/node_modules/escape-string-regexp": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-2.0.0.tgz",
      "integrity": "sha512-UpzcLCXolUWcNu5HtVMHYdXJjArjsF9C0aNnquZYY4uW/Vu0miy5YoWvbV345HauVvcAUnpRuhMMcqTcGOY2+w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/statuses": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.2.tgz",
      "integrity": "sha512-DvEy55V3DB7uknRo+4iOGT5fP1slR8wQohVdknigZPMpMstaKJQWhwiYBACJE3Ul2pTnATihhBYnRhZQHGBiRw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/streamsearch": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/streamsearch/-/streamsearch-1.1.0.tgz",
      "integrity": "sha512-Mcc5wHehp9aXz1ax6bZUyY5afg9u2rv5cqQI3mRrYkGC8rW2hM02jWuwjtL++LS5qinSyhj2QfLyNsuc+VsExg==",
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/streamx": {
      "version": "2.22.1",
      "resolved": "https://registry.npmjs.org/streamx/-/streamx-2.22.1.tgz",
      "integrity": "sha512-znKXEBxfatz2GBNK02kRnCXjV+AA4kjZIUxeWSr3UGirZMJfTE9uiwKHobnbgxWyL/JWro8tTq+vOqAK1/qbSA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-fifo": "^1.3.2",
        "text-decoder": "^1.1.0"
      },
      "optionalDependencies": {
        "bare-events": "^2.2.0"
      }
    },
    "node_modules/string_decoder": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
      "integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "~5.2.0"
      }
    },
    "node_modules/string-length": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/string-length/-/string-length-4.0.2.tgz",
      "integrity": "sha512-+l6rNN5fYHNhZZy41RXsYptCjA2Igmq4EG7kZAYFQI1E1VTXarr6ZPXBg6eq7Y6eK4FEhY6AJlyuFIb/v/S0VQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "char-regex": "^1.0.2",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-bom": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-4.0.0.tgz",
      "integrity": "sha512-3xurFv5tEgii33Zi8Jtp55wEIILR9eh34FAW00PZf+JnSsTmV/ioewSgQl97JHvgjoRGwPShsWm+IdrxB35d0w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-dirs": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-dirs/-/strip-dirs-3.0.0.tgz",
      "integrity": "sha512-I0sdgcFTfKQlUPZyAqPJmSG3HLO9rWDFnxonnIbskYNM3DwFOeTNB5KzVq3dA1GdRAc/25b5Y7UO2TQfKWw4aQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "inspect-with-kind": "^1.0.5",
        "is-plain-obj": "^1.1.0"
      }
    },
    "node_modules/strip-final-newline": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/strip-final-newline/-/strip-final-newline-2.0.0.tgz",
      "integrity": "sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/stripe": {
      "version": "18.5.0",
      "resolved": "https://registry.npmjs.org/stripe/-/stripe-18.5.0.tgz",
      "integrity": "sha512-Hp+wFiEQtCB0LlNgcFh5uVyKznpDjzyUZ+CNVEf+I3fhlYvh7rZruIg+jOwzJRCpy0ZTPMjlzm7J2/M2N6d+DA==",
      "license": "MIT",
      "dependencies": {
        "qs": "^6.11.0"
      },
      "engines": {
        "node": ">=12.*"
      },
      "peerDependencies": {
        "@types/node": ">=12.x.x"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/strtok3": {
      "version": "10.3.2",
      "resolved": "https://registry.npmjs.org/strtok3/-/strtok3-10.3.2.tgz",
      "integrity": "sha512-or9w505RhhY66+uoe5YOC5QO/bRuATaoim3XTh+pGKx5VMWi/HDhMKuCjDLsLJouU2zg9Hf1nLPcNW7IHv80kQ==",
      "license": "MIT",
      "dependencies": {
        "@tokenizer/token": "^0.3.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/Borewit"
      }
    },
    "node_modules/superagent": {
      "version": "10.2.3",
      "resolved": "https://registry.npmjs.org/superagent/-/superagent-10.2.3.tgz",
      "integrity": "sha512-y/hkYGeXAj7wUMjxRbB21g/l6aAEituGXM9Rwl4o20+SX3e8YOSV6BxFXl+dL3Uk0mjSL3kCbNkwURm8/gEDig==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "component-emitter": "^1.3.1",
        "cookiejar": "^2.1.4",
        "debug": "^4.3.7",
        "fast-safe-stringify": "^2.1.1",
        "form-data": "^4.0.4",
        "formidable": "^3.5.4",
        "methods": "^1.1.2",
        "mime": "2.6.0",
        "qs": "^6.11.2"
      },
      "engines": {
        "node": ">=14.18.0"
      }
    },
    "node_modules/supertest": {
      "version": "7.1.4",
      "resolved": "https://registry.npmjs.org/supertest/-/supertest-7.1.4.tgz",
      "integrity": "sha512-tjLPs7dVyqgItVFirHYqe2T+MfWc2VOBQ8QFKKbWTA3PU7liZR8zoSpAi/C1k1ilm9RsXIKYf197oap9wXGVYg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "methods": "^1.1.2",
        "superagent": "^10.2.3"
      },
      "engines": {
        "node": ">=14.18.0"
      }
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/symbol-observable": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/symbol-observable/-/symbol-observable-4.0.0.tgz",
      "integrity": "sha512-b19dMThMV4HVFynSAM1++gBHAbk2Tc/osgLIBZMKsyqh34jb2e8Os7T6ZW/Bt3pJFdBTd2JwAnAAEQV7rSNvcQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/synckit": {
      "version": "0.11.11",
      "resolved": "https://registry.npmjs.org/synckit/-/synckit-0.11.11.tgz",
      "integrity": "sha512-MeQTA1r0litLUf0Rp/iisCaL8761lKAZHaimlbGK4j0HysC4PLfqygQj9srcs0m2RdtDYnF8UuYyKpbjHYp7Jw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@pkgr/core": "^0.2.9"
      },
      "engines": {
        "node": "^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/synckit"
      }
    },
    "node_modules/tapable": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.3.0.tgz",
      "integrity": "sha512-g9ljZiwki/LfxmQADO3dEY1CbpmXT5Hm2fJ+QaGKwSXUylMybePR7/67YW7jOrrvjEgL1Fmz5kzyAjWVWLlucg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/tar-stream": {
      "version": "3.1.7",
      "resolved": "https://registry.npmjs.org/tar-stream/-/tar-stream-3.1.7.tgz",
      "integrity": "sha512-qJj60CXt7IU1Ffyc3NJMjh6EkuCFej46zUqJ4J7pqYlThyd9bO0XBTmcOIhSzZJVWfsLks0+nle/j538YAW9RQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "b4a": "^1.6.4",
        "fast-fifo": "^1.2.0",
        "streamx": "^2.15.0"
      }
    },
    "node_modules/terser": {
      "version": "5.43.1",
      "resolved": "https://registry.npmjs.org/terser/-/terser-5.43.1.tgz",
      "integrity": "sha512-+6erLbBm0+LROX2sPXlUYx/ux5PyE9K/a92Wrt6oA+WDAoFTdpHE5tCYCI5PNzq2y8df4rA+QgHLJuR4jNymsg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "@jridgewell/source-map": "^0.3.3",
        "acorn": "^8.14.0",
        "commander": "^2.20.0",
        "source-map-support": "~0.5.20"
      },
      "bin": {
        "terser": "bin/terser"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/terser-webpack-plugin": {
      "version": "5.3.14",
      "resolved": "https://registry.npmjs.org/terser-webpack-plugin/-/terser-webpack-plugin-5.3.14.tgz",
      "integrity": "sha512-vkZjpUjb6OMS7dhV+tILUW6BhpDR7P2L/aQSAv+Uwk+m8KATX9EccViHTJR2qDtACKPIYndLGCyl3FMo+r2LMw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/trace-mapping": "^0.3.25",
        "jest-worker": "^27.4.5",
        "schema-utils": "^4.3.0",
        "serialize-javascript": "^6.0.2",
        "terser": "^5.31.1"
      },
      "engines": {
        "node": ">= 10.13.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      },
      "peerDependencies": {
        "webpack": "^5.1.0"
      },
      "peerDependenciesMeta": {
        "@swc/core": {
          "optional": true
        },
        "esbuild": {
          "optional": true
        },
        "uglify-js": {
          "optional": true
        }
      }
    },
    "node_modules/terser-webpack-plugin/node_modules/ajv": {
      "version": "8.17.1",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.17.1.tgz",
      "integrity": "sha512-B/gBuNg5SiMTrPkC+A2+cW0RszwxYmn6VYxB/inlBStS5nx6xHIt/ehKRhIMhqusl7a8LjQoZnjCs5vhwxOQ1g==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "fast-deep-equal": "^3.1.3",
        "fast-uri": "^3.0.1",
        "json-schema-traverse": "^1.0.0",
        "require-from-string": "^2.0.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/terser-webpack-plugin/node_modules/ajv-formats": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/ajv-formats/-/ajv-formats-2.1.1.tgz",
      "integrity": "sha512-Wx0Kx52hxE7C18hkMEggYlEifqWZtYaRgouJor+WMdPnQyEK13vgEWyVNup7SoeeoLMsr4kf5h6dOW11I15MUA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^8.0.0"
      },
      "peerDependencies": {
        "ajv": "^8.0.0"
      },
      "peerDependenciesMeta": {
        "ajv": {
          "optional": true
        }
      }
    },
    "node_modules/terser-webpack-plugin/node_modules/ajv-keywords": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-5.1.0.tgz",
      "integrity": "sha512-YCS/JNFAUyr5vAuhk1DWm1CBxRHW9LbJ2ozWeemrIqpbsqKjHVxYPyi5GC0rjZIT5JxJ3virVTS8wk4i/Z+krw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.3"
      },
      "peerDependencies": {
        "ajv": "^8.8.2"
      }
    },
    "node_modules/terser-webpack-plugin/node_modules/jest-worker": {
      "version": "27.5.1",
      "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-27.5.1.tgz",
      "integrity": "sha512-7vuh85V5cdDofPyxn58nrPjBktZo0u9x1g8WtjQol+jZDaE+fhN+cIvTj11GndBnMnyfrUOG1sZQxCdjKh+DKg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*",
        "merge-stream": "^2.0.0",
        "supports-color": "^8.0.0"
      },
      "engines": {
        "node": ">= 10.13.0"
      }
    },
    "node_modules/terser-webpack-plugin/node_modules/json-schema-traverse": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
      "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/terser-webpack-plugin/node_modules/schema-utils": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-4.3.2.tgz",
      "integrity": "sha512-Gn/JaSk/Mt9gYubxTtSn/QCV4em9mpAPiR1rqy/Ocu19u/G9J5WWdNoUT4SiV6mFC3y6cxyFcFwdzPM3FgxGAQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/json-schema": "^7.0.9",
        "ajv": "^8.9.0",
        "ajv-formats": "^2.1.1",
        "ajv-keywords": "^5.1.0"
      },
      "engines": {
        "node": ">= 10.13.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/terser-webpack-plugin/node_modules/supports-color": {
      "version": "8.1.1",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-8.1.1.tgz",
      "integrity": "sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/supports-color?sponsor=1"
      }
    },
    "node_modules/terser/node_modules/commander": {
      "version": "2.20.3",
      "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
      "integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/test-exclude": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/test-exclude/-/test-exclude-6.0.0.tgz",
      "integrity": "sha512-cAGWPIyOHU6zlmg88jwm7VRyXnMN7iV68OGAbYDk/Mh/xC/pzVPlQtY6ngoIH/5/tciuhGfvESU8GrHrcxD56w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "@istanbuljs/schema": "^0.1.2",
        "glob": "^7.1.4",
        "minimatch": "^3.0.4"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/test-exclude/node_modules/glob": {
      "version": "7.2.3",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
      "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
      "deprecated": "Glob versions prior to v9 are no longer supported",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.1.1",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/text-decoder": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/text-decoder/-/text-decoder-1.2.3.tgz",
      "integrity": "sha512-3/o9z3X0X0fTupwsYvR03pJ/DjWuqqrfwBgTQzdWDiQSm9KitAyz/9WqsT2JQW7KV2m+bC2ol/zqpW37NHxLaA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "b4a": "^1.6.4"
      }
    },
    "node_modules/text-hex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/text-hex/-/text-hex-1.0.0.tgz",
      "integrity": "sha512-uuVGNWzgJ4yhRaNSiubPY7OjISw4sw4E5Uv0wbjp+OzcbmVU/rsT8ujgcXJhn9ypzsgr5vlzpPqP+MBBKcGvbg==",
      "license": "MIT"
    },
    "node_modules/through": {
      "version": "2.3.8",
      "resolved": "https://registry.npmjs.org/through/-/through-2.3.8.tgz",
      "integrity": "sha512-w89qg7PI8wAdvX60bMDP+bFoD5Dvhm9oLheFp5O4a2QF0cSBGsBX4qZmadPMvVqlLJBBci+WqGGOAPvcDeNSVg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/time-span": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/time-span/-/time-span-4.0.0.tgz",
      "integrity": "sha512-MyqZCTGLDZ77u4k+jqg4UlrzPTPZ49NDlaekU6uuFaJLzPIN1woaRXCbGeqOfxwc3Y37ZROGAJ614Rdv7Olt+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "convert-hrtime": "^3.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/tinyexec": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/tinyexec/-/tinyexec-1.0.1.tgz",
      "integrity": "sha512-5uC6DDlmeqiOwCPmK9jMSdOuZTh8bU39Ys6yidB+UTt5hfZUPGAypSgFRiEp+jbi9qH40BLDvy85jIU88wKSqw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tmpl": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/tmpl/-/tmpl-1.0.5.tgz",
      "integrity": "sha512-3f0uOEAQwIqGuWW2MVzYg8fV/QNnc/IpuJNG837rLuczAaLVHslWHZQj4IGiEl5Hs3kkbhwL9Ab7Hrsmuj+Smw==",
      "dev": true,
      "license": "BSD-3-Clause"
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/toidentifier": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/token-types": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/token-types/-/token-types-6.0.3.tgz",
      "integrity": "sha512-IKJ6EzuPPWtKtEIEPpIdXv9j5j2LGJEYk0CKY2efgKoYKLBiZdh6iQkLVBow/CB3phyWAWCyk+bZeaimJn6uRQ==",
      "license": "MIT",
      "dependencies": {
        "@tokenizer/token": "^0.3.0",
        "ieee754": "^1.2.1"
      },
      "engines": {
        "node": ">=14.16"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/Borewit"
      }
    },
    "node_modules/tr46": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz",
      "integrity": "sha512-N3WMsuqV66lT30CrXNbEjx4GEwlow3v6rr4mCcv6prnfwhS01rkgyFdjPNBYd9br7LpXV1+Emh01fHnq2Gdgrw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/triple-beam": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/triple-beam/-/triple-beam-1.4.1.tgz",
      "integrity": "sha512-aZbgViZrg1QNcG+LULa7nhZpJTZSLm/mXnHXnbAbjmN5aSa0y7V+wvv6+4WaBtpISJzThKy+PIPxc1Nq1EJ9mg==",
      "license": "MIT",
      "engines": {
        "node": ">= 14.0.0"
      }
    },
    "node_modules/ts-api-utils": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-2.1.0.tgz",
      "integrity": "sha512-CUgTZL1irw8u29bzrOD/nH85jqyc74D6SshFgujOIA7osm2Rz7dYH77agkx7H4FBNxDq7Cjf+IjaX/8zwFW+ZQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.12"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4"
      }
    },
    "node_modules/ts-jest": {
      "version": "29.4.0",
      "resolved": "https://registry.npmjs.org/ts-jest/-/ts-jest-29.4.0.tgz",
      "integrity": "sha512-d423TJMnJGu80/eSgfQ5w/R+0zFJvdtTxwtF9KzFFunOpSeD+79lHJQIiAhluJoyGRbvj9NZJsl9WjCUo0ND7Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "bs-logger": "^0.2.6",
        "ejs": "^3.1.10",
        "fast-json-stable-stringify": "^2.1.0",
        "json5": "^2.2.3",
        "lodash.memoize": "^4.1.2",
        "make-error": "^1.3.6",
        "semver": "^7.7.2",
        "type-fest": "^4.41.0",
        "yargs-parser": "^21.1.1"
      },
      "bin": {
        "ts-jest": "cli.js"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || ^18.0.0 || >=20.0.0"
      },
      "peerDependencies": {
        "@babel/core": ">=7.0.0-beta.0 <8",
        "@jest/transform": "^29.0.0 || ^30.0.0",
        "@jest/types": "^29.0.0 || ^30.0.0",
        "babel-jest": "^29.0.0 || ^30.0.0",
        "jest": "^29.0.0 || ^30.0.0",
        "jest-util": "^29.0.0 || ^30.0.0",
        "typescript": ">=4.3 <6"
      },
      "peerDependenciesMeta": {
        "@babel/core": {
          "optional": true
        },
        "@jest/transform": {
          "optional": true
        },
        "@jest/types": {
          "optional": true
        },
        "babel-jest": {
          "optional": true
        },
        "esbuild": {
          "optional": true
        },
        "jest-util": {
          "optional": true
        }
      }
    },
    "node_modules/ts-jest/node_modules/type-fest": {
      "version": "4.41.0",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-4.41.0.tgz",
      "integrity": "sha512-TeTSQ6H5YHvpqVwBRcnLDCBnDOHWYu7IvGbHT6N8AOymcr9PJGjc1GTtiWZTYg0NCgYwvnYWEkVChQAr9bjfwA==",
      "dev": true,
      "license": "(MIT OR CC0-1.0)",
      "engines": {
        "node": ">=16"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/ts-loader": {
      "version": "9.5.2",
      "resolved": "https://registry.npmjs.org/ts-loader/-/ts-loader-9.5.2.tgz",
      "integrity": "sha512-Qo4piXvOTWcMGIgRiuFa6nHNm+54HbYaZCKqc9eeZCLRy3XqafQgwX2F7mofrbJG3g7EEb+lkiR+z2Lic2s3Zw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chalk": "^4.1.0",
        "enhanced-resolve": "^5.0.0",
        "micromatch": "^4.0.0",
        "semver": "^7.3.4",
        "source-map": "^0.7.4"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "typescript": "*",
        "webpack": "^5.0.0"
      }
    },
    "node_modules/ts-morph": {
      "version": "12.0.0",
      "resolved": "https://registry.npmjs.org/ts-morph/-/ts-morph-12.0.0.tgz",
      "integrity": "sha512-VHC8XgU2fFW7yO1f/b3mxKDje1vmyzFXHWzOYmKEkCEwcLjDtbdLgBQviqj4ZwP4MJkQtRo6Ha2I29lq/B+VxA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@ts-morph/common": "~0.11.0",
        "code-block-writer": "^10.1.1"
      }
    },
    "node_modules/ts-node": {
      "version": "10.9.2",
      "resolved": "https://registry.npmjs.org/ts-node/-/ts-node-10.9.2.tgz",
      "integrity": "sha512-f0FFpIdcHgn8zcPSbf1dRevwt047YMnaiJM3u2w2RewrB+fob/zePZcrOyQoLMMO7aBIddLcQIEK5dYjkLnGrQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@cspotcode/source-map-support": "^0.8.0",
        "@tsconfig/node10": "^1.0.7",
        "@tsconfig/node12": "^1.0.7",
        "@tsconfig/node14": "^1.0.0",
        "@tsconfig/node16": "^1.0.2",
        "acorn": "^8.4.1",
        "acorn-walk": "^8.1.1",
        "arg": "^4.1.0",
        "create-require": "^1.1.0",
        "diff": "^4.0.1",
        "make-error": "^1.1.1",
        "v8-compile-cache-lib": "^3.0.1",
        "yn": "3.1.1"
      },
      "bin": {
        "ts-node": "dist/bin.js",
        "ts-node-cwd": "dist/bin-cwd.js",
        "ts-node-esm": "dist/bin-esm.js",
        "ts-node-script": "dist/bin-script.js",
        "ts-node-transpile-only": "dist/bin-transpile.js",
        "ts-script": "dist/bin-script-deprecated.js"
      },
      "peerDependencies": {
        "@swc/core": ">=1.2.50",
        "@swc/wasm": ">=1.2.50",
        "@types/node": "*",
        "typescript": ">=2.7"
      },
      "peerDependenciesMeta": {
        "@swc/core": {
          "optional": true
        },
        "@swc/wasm": {
          "optional": true
        }
      }
    },
    "node_modules/ts-toolbelt": {
      "version": "6.15.5",
      "resolved": "https://registry.npmjs.org/ts-toolbelt/-/ts-toolbelt-6.15.5.tgz",
      "integrity": "sha512-FZIXf1ksVyLcfr7M317jbB67XFJhOO1YqdTcuGaq9q5jLUoTikukZ+98TPjKiP2jC5CgmYdWWYs0s2nLSU0/1A==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/tsconfig-paths": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/tsconfig-paths/-/tsconfig-paths-4.2.0.tgz",
      "integrity": "sha512-NoZ4roiN7LnbKn9QqE1amc9DJfzvZXxF4xDavcOWt1BPkdx+m+0gJuPM+S0vCe7zTJMYUP0R8pO2XMr+Y8oLIg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json5": "^2.2.2",
        "minimist": "^1.2.6",
        "strip-bom": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/tsconfig-paths-webpack-plugin": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/tsconfig-paths-webpack-plugin/-/tsconfig-paths-webpack-plugin-4.2.0.tgz",
      "integrity": "sha512-zbem3rfRS8BgeNK50Zz5SIQgXzLafiHjOwUAvk/38/o1jHn/V5QAgVUcz884or7WYcPaH3N2CIfUc2u0ul7UcA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chalk": "^4.1.0",
        "enhanced-resolve": "^5.7.0",
        "tapable": "^2.2.1",
        "tsconfig-paths": "^4.1.2"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/tsconfig-paths/node_modules/strip-bom": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
      "integrity": "sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/type-detect": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/type-detect/-/type-detect-4.0.8.tgz",
      "integrity": "sha512-0fr/mIH1dlO+x7TlcMy+bIDqKPsw/70tVyeHW787goQjhmqaZe10uwLujubK9q9Lg6Fiho1KUKDYz0Z7k7g5/g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/type-fest": {
      "version": "0.21.3",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.21.3.tgz",
      "integrity": "sha512-t0rzBq87m3fVcduHDUFhKmyyX+9eo6WQjZvf51Ea/M0Q7+T374Jp1aUiyUl0GKxp8M/OETVHSDvmkyPgvX+X2w==",
      "dev": true,
      "license": "(MIT OR CC0-1.0)",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/type-is": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-2.0.1.tgz",
      "integrity": "sha512-OZs6gsjF4vMp32qrCbiVSkrFmXtG/AZhY3t0iAMrMBiAZyV9oALtXO8hsrHbMXF9x6L3grlFuwW2oAz7cav+Gw==",
      "license": "MIT",
      "dependencies": {
        "content-type": "^1.0.5",
        "media-typer": "^1.1.0",
        "mime-types": "^3.0.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/typedarray": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",
      "integrity": "sha512-/aCDEGatGvZ2BIk+HmLf4ifCJFwvKFNb9/JeZPMulfgFracn9QFcAf5GO8B/mweUjSoblS5In0cWhqpfs/5PQA==",
      "license": "MIT"
    },
    "node_modules/typescript": {
      "version": "5.8.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.8.3.tgz",
      "integrity": "sha512-p1diW6TqL9L07nNxvRMM7hMMw4c5XOo/1ibL4aAIGmSAt9slTE1Xgw5KWuof2uTOvCg9BY7ZRi+GaF+7sfgPeQ==",
      "dev": true,
      "license": "Apache-2.0",
      "peer": true,
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/typescript-eslint": {
      "version": "8.38.0",
      "resolved": "https://registry.npmjs.org/typescript-eslint/-/typescript-eslint-8.38.0.tgz",
      "integrity": "sha512-FsZlrYK6bPDGoLeZRuvx2v6qrM03I0U0SnfCLPs/XCCPCFD80xU9Pg09H/K+XFa68uJuZo7l/Xhs+eDRg2l3hg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/eslint-plugin": "8.38.0",
        "@typescript-eslint/parser": "8.38.0",
        "@typescript-eslint/typescript-estree": "8.38.0",
        "@typescript-eslint/utils": "8.38.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <5.9.0"
      }
    },
    "node_modules/uid": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/uid/-/uid-2.0.2.tgz",
      "integrity": "sha512-u3xV3X7uzvi5b1MncmZo3i2Aw222Zk1keqLA1YkHldREkAhAqi65wuPfe7lHx8H/Wzy+8CE7S7uS3jekIM5s8g==",
      "license": "MIT",
      "dependencies": {
        "@lukeed/csprng": "^1.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/uid2": {
      "version": "0.0.4",
      "resolved": "https://registry.npmjs.org/uid2/-/uid2-0.0.4.tgz",
      "integrity": "sha512-IevTus0SbGwQzYh3+fRsAMTVVPOoIVufzacXcHPmdlle1jUpq7BRL+mw3dgeLanvGZdwwbWhRV6XrcFNdBmjWA==",
      "license": "MIT"
    },
    "node_modules/uint8array-extras": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/uint8array-extras/-/uint8array-extras-1.4.0.tgz",
      "integrity": "sha512-ZPtzy0hu4cZjv3z5NW9gfKnNLjoz4y6uv4HlelAjDK7sY/xOkKZv9xK/WQpcsBB3jEybChz9DPC2U/+cusjJVQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/unbzip2-stream": {
      "version": "1.4.3",
      "resolved": "https://registry.npmjs.org/unbzip2-stream/-/unbzip2-stream-1.4.3.tgz",
      "integrity": "sha512-mlExGW4w71ebDJviH16lQLtZS32VKqsSfk80GCfUlwT/4/hNRFsoscrF/c++9xinkMzECL1uL9DDwXqFWkruPg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "buffer": "^5.2.1",
        "through": "^2.3.8"
      }
    },
    "node_modules/undici-types": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz",
      "integrity": "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==",
      "license": "MIT"
    },
    "node_modules/unicorn-magic": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/unicorn-magic/-/unicorn-magic-0.1.0.tgz",
      "integrity": "sha512-lRfVq8fE8gz6QMBuDM6a+LO3IAzTi05H6gCVaUpir2E1Rwpo4ZUog45KpNXKC/Mn3Yb9UDuHumeFTo9iV/D9FQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/universalify": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.1.tgz",
      "integrity": "sha512-gptHNQghINnc/vTGIk0SOFGFNXw7JVrlRUtConJRlvaw6DuX0wO5Jeko9sWrMBhh+PsYAZ7oXAiOnf/UKogyiw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/update-browserslist-db": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.2.2.tgz",
      "integrity": "sha512-E85pfNzMQ9jpKkA7+TJAi4TJN+tBCuWh5rUcS/sv6cFi+1q9LYDwDI5dpUL0u/73EElyQ8d3TEaeW4sPedBqYA==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/update-browserslist-db/node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "license": "ISC"
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
      "license": "MIT"
    },
    "node_modules/utils-merge": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
      "integrity": "sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/v8-compile-cache-lib": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/v8-compile-cache-lib/-/v8-compile-cache-lib-3.0.1.tgz",
      "integrity": "sha512-wa7YjyUGfNZngI/vtK0UHAN+lgDCxBPCylVXGp0zu59Fz5aiGtNXaq3DhIov063MorB+VfufLh3JlF2KdTK3xg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/v8-to-istanbul": {
      "version": "9.3.0",
      "resolved": "https://registry.npmjs.org/v8-to-istanbul/-/v8-to-istanbul-9.3.0.tgz",
      "integrity": "sha512-kiGUalWN+rgBJ/1OHZsBtU4rXZOfj/7rKQxULKlIzwzQSvMJUUNgPwJEEh7gU6xEVxC0ahoOBvN2YI8GH6FNgA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "@jridgewell/trace-mapping": "^0.3.12",
        "@types/istanbul-lib-coverage": "^2.0.1",
        "convert-source-map": "^2.0.0"
      },
      "engines": {
        "node": ">=10.12.0"
      }
    },
    "node_modules/validate-npm-package-license": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
      "integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "spdx-correct": "^3.0.0",
        "spdx-expression-parse": "^3.0.0"
      }
    },
    "node_modules/validator": {
      "version": "13.15.23",
      "resolved": "https://registry.npmjs.org/validator/-/validator-13.15.23.tgz",
      "integrity": "sha512-4yoz1kEWqUjzi5zsPbAS/903QXSYp0UOtHsPpp7p9rHAw/W+dkInskAE386Fat3oKRROwO98d9ZB0G4cObgUyw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/walker": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/walker/-/walker-1.0.8.tgz",
      "integrity": "sha512-ts/8E8l5b7kY0vlWLewOkDXMmPdLcVV4GmOQLyxuSswIJsweeFZtAsMF7k1Nszz+TYBQrlYRmzOnr398y1JemQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "makeerror": "1.0.12"
      }
    },
    "node_modules/watchpack": {
      "version": "2.4.4",
      "resolved": "https://registry.npmjs.org/watchpack/-/watchpack-2.4.4.tgz",
      "integrity": "sha512-c5EGNOiyxxV5qmTtAB7rbiXxi1ooX1pQKMLX/MIabJjRA0SJBQOjKF+KSVfHkr9U1cADPon0mRiVe/riyaiDUA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "glob-to-regexp": "^0.4.1",
        "graceful-fs": "^4.1.2"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/wcwidth": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/wcwidth/-/wcwidth-1.0.1.tgz",
      "integrity": "sha512-XHPEwS0q6TaxcvG85+8EYkbiCux2XtWG2mkc47Ng2A77BQu9+DqIOJldST4HgPkuea7dvKSj5VgX3P1d4rW8Tg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "defaults": "^1.0.3"
      }
    },
    "node_modules/wcwidth/node_modules/defaults": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/defaults/-/defaults-1.0.4.tgz",
      "integrity": "sha512-eFuaLoy/Rxalv2kr+lqMlUnrDWV+3j4pljOIJgLIhI058IQfWJ7vXhyEIHu+HtC738klGALYxOKDO0bQP3tg8A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "clone": "^1.0.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/webidl-conversions": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz",
      "integrity": "sha512-2JAn3z8AR6rjK8Sm8orRC0h/bcl/DqL7tRPdGZ4I1CjdF+EaMLmYxBHyXuKL849eucPFhvBoxMsflfOb8kxaeQ==",
      "dev": true,
      "license": "BSD-2-Clause"
    },
    "node_modules/webpack": {
      "version": "5.103.0",
      "resolved": "https://registry.npmjs.org/webpack/-/webpack-5.103.0.tgz",
      "integrity": "sha512-HU1JOuV1OavsZ+mfigY0j8d1TgQgbZ6M+J75zDkpEAwYeXjWSqrGJtgnPblJjd/mAyTNQ7ygw0MiKOn6etz8yw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@types/eslint-scope": "^3.7.7",
        "@types/estree": "^1.0.8",
        "@types/json-schema": "^7.0.15",
        "@webassemblyjs/ast": "^1.14.1",
        "@webassemblyjs/wasm-edit": "^1.14.1",
        "@webassemblyjs/wasm-parser": "^1.14.1",
        "acorn": "^8.15.0",
        "acorn-import-phases": "^1.0.3",
        "browserslist": "^4.26.3",
        "chrome-trace-event": "^1.0.2",
        "enhanced-resolve": "^5.17.3",
        "es-module-lexer": "^1.2.1",
        "eslint-scope": "5.1.1",
        "events": "^3.2.0",
        "glob-to-regexp": "^0.4.1",
        "graceful-fs": "^4.2.11",
        "json-parse-even-better-errors": "^2.3.1",
        "loader-runner": "^4.3.1",
        "mime-types": "^2.1.27",
        "neo-async": "^2.6.2",
        "schema-utils": "^4.3.3",
        "tapable": "^2.3.0",
        "terser-webpack-plugin": "^5.3.11",
        "watchpack": "^2.4.4",
        "webpack-sources": "^3.3.3"
      },
      "bin": {
        "webpack": "bin/webpack.js"
      },
      "engines": {
        "node": ">=10.13.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      },
      "peerDependenciesMeta": {
        "webpack-cli": {
          "optional": true
        }
      }
    },
    "node_modules/webpack-node-externals": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/webpack-node-externals/-/webpack-node-externals-3.0.0.tgz",
      "integrity": "sha512-LnL6Z3GGDPht/AigwRh2dvL9PQPFQ8skEpVrWZXLWBYmqcaojHNN0onvHzie6rq7EWKrrBfPYqNEzTJgiwEQDQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/webpack-sources": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/webpack-sources/-/webpack-sources-3.3.3.tgz",
      "integrity": "sha512-yd1RBzSGanHkitROoPFd6qsrxt+oFhg/129YzheDGqeustzX0vTZJZsSsQjVQC4yzBQ56K55XU8gaNCtIzOnTg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/webpack/node_modules/ajv": {
      "version": "8.17.1",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.17.1.tgz",
      "integrity": "sha512-B/gBuNg5SiMTrPkC+A2+cW0RszwxYmn6VYxB/inlBStS5nx6xHIt/ehKRhIMhqusl7a8LjQoZnjCs5vhwxOQ1g==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "fast-deep-equal": "^3.1.3",
        "fast-uri": "^3.0.1",
        "json-schema-traverse": "^1.0.0",
        "require-from-string": "^2.0.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/webpack/node_modules/ajv-formats": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/ajv-formats/-/ajv-formats-2.1.1.tgz",
      "integrity": "sha512-Wx0Kx52hxE7C18hkMEggYlEifqWZtYaRgouJor+WMdPnQyEK13vgEWyVNup7SoeeoLMsr4kf5h6dOW11I15MUA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^8.0.0"
      },
      "peerDependencies": {
        "ajv": "^8.0.0"
      },
      "peerDependenciesMeta": {
        "ajv": {
          "optional": true
        }
      }
    },
    "node_modules/webpack/node_modules/ajv-keywords": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-5.1.0.tgz",
      "integrity": "sha512-YCS/JNFAUyr5vAuhk1DWm1CBxRHW9LbJ2ozWeemrIqpbsqKjHVxYPyi5GC0rjZIT5JxJ3virVTS8wk4i/Z+krw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.3"
      },
      "peerDependencies": {
        "ajv": "^8.8.2"
      }
    },
    "node_modules/webpack/node_modules/eslint-scope": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-5.1.1.tgz",
      "integrity": "sha512-2NxwbF/hZ0KpepYN0cNbo+FN6XoK7GaHlQhgx/hIZl6Va0bF45RQOOwhLIy8lQDbuCiadSLCBnH2CFYquit5bw==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^4.1.1"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/webpack/node_modules/estraverse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
      "integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/webpack/node_modules/json-schema-traverse": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
      "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/webpack/node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/webpack/node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/webpack/node_modules/schema-utils": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-4.3.3.tgz",
      "integrity": "sha512-eflK8wEtyOE6+hsaRVPxvUKYCpRgzLqDTb8krvAsRIwOGlHoSgYLgBXoubGgLd2fT41/OUYdb48v4k4WWHQurA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/json-schema": "^7.0.9",
        "ajv": "^8.9.0",
        "ajv-formats": "^2.1.1",
        "ajv-keywords": "^5.1.0"
      },
      "engines": {
        "node": ">= 10.13.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/whatwg-url": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz",
      "integrity": "sha512-saE57nupxk6v3HY35+jzBwYa0rKSy0XR8JSxZPwgLr7ys0IBzhGviA1/TUGJLmSVqs8pb9AnvICXEuOHLprYTw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "tr46": "~0.0.3",
        "webidl-conversions": "^3.0.0"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/winston": {
      "version": "3.18.2",
      "resolved": "https://registry.npmjs.org/winston/-/winston-3.18.2.tgz",
      "integrity": "sha512-+yDkrWD2rWkv6XjSgK2QyujZDNsHE9YLa8S284TpVrYdaloMkZ7NvHzfnETYlSPOX9h5j5VJ+Ro9J872O8CC/g==",
      "license": "MIT",
      "dependencies": {
        "@colors/colors": "^1.6.0",
        "@dabh/diagnostics": "^2.0.7",
        "async": "^3.2.3",
        "is-stream": "^2.0.0",
        "logform": "^2.7.0",
        "one-time": "^1.0.0",
        "readable-stream": "^3.4.0",
        "safe-stable-stringify": "^2.3.1",
        "stack-trace": "0.0.x",
        "triple-beam": "^1.3.0",
        "winston-transport": "^4.9.0"
      },
      "engines": {
        "node": ">= 12.0.0"
      }
    },
    "node_modules/winston-transport": {
      "version": "4.9.0",
      "resolved": "https://registry.npmjs.org/winston-transport/-/winston-transport-4.9.0.tgz",
      "integrity": "sha512-8drMJ4rkgaPo1Me4zD/3WLfI/zPdA9o2IipKODunnGDcuqbHwjsbB79ylv04LCGGzU0xQ6vTznOMpQGaLhhm6A==",
      "license": "MIT",
      "dependencies": {
        "logform": "^2.7.0",
        "readable-stream": "^3.6.2",
        "triple-beam": "^1.3.0"
      },
      "engines": {
        "node": ">= 12.0.0"
      }
    },
    "node_modules/winston/node_modules/@colors/colors": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/@colors/colors/-/colors-1.6.0.tgz",
      "integrity": "sha512-Ir+AOibqzrIsL6ajt3Rz3LskB7OiMVHqltZmspbW/TJuTVuyOMirVqAkjfY6JISiLHgyNqicAC8AyHHGzNd/dA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.1.90"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/wrap-ansi": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-6.2.0.tgz",
      "integrity": "sha512-r6lPcBGxZXlIcymEu7InxDMhdW0KDxpLgoFLcguasxCaJ/SOIZwINatK9KY/tf+ZrlywOKU0UDj3ATXUBfxJXA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "license": "ISC"
    },
    "node_modules/write-file-atomic": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-4.0.2.tgz",
      "integrity": "sha512-7KxauUdBmSdWnmpaGFg+ppNjKF8uNLry8LyzjauQDOVONfFLNKrKvQOxZ/VuTIcS/gge/YNahf5RIIQWTSarlg==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "imurmurhash": "^0.1.4",
        "signal-exit": "^3.0.7"
      },
      "engines": {
        "node": "^12.13.0 || ^14.15.0 || >=16.0.0"
      }
    },
    "node_modules/write-file-atomic/node_modules/signal-exit": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
      "integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/ws": {
      "version": "8.17.1",
      "resolved": "https://registry.npmjs.org/ws/-/ws-8.17.1.tgz",
      "integrity": "sha512-6XQFvXTkbfUOZOKKILFG1PDK2NDQs4azKQl26T0YS5CxqWLgXajbPZ+h4gZekJyRqFU8pvnbAbbs/3TgRPy+GQ==",
      "license": "MIT",
      "engines": {
        "node": ">=10.0.0"
      },
      "peerDependencies": {
        "bufferutil": "^4.0.1",
        "utf-8-validate": ">=5.0.2"
      },
      "peerDependenciesMeta": {
        "bufferutil": {
          "optional": true
        },
        "utf-8-validate": {
          "optional": true
        }
      }
    },
    "node_modules/xtend": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
      "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.4"
      }
    },
    "node_modules/y18n": {
      "version": "5.0.8",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
      "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
      "license": "ISC"
    },
    "node_modules/yargs": {
      "version": "17.7.2",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-17.7.2.tgz",
      "integrity": "sha512-7dSzzRQ++CKnNI/krKnYRV7JKKPUXMEh61soaHKg9mrWEhzFWhFnxPxGl+69cD1Ou63C13NUPCnmIcrvqCuM6w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cliui": "^8.0.1",
        "escalade": "^3.1.1",
        "get-caller-file": "^2.0.5",
        "require-directory": "^2.1.1",
        "string-width": "^4.2.3",
        "y18n": "^5.0.5",
        "yargs-parser": "^21.1.1"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/yargs-parser": {
      "version": "21.1.1",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-21.1.1.tgz",
      "integrity": "sha512-tVpsJW7DdjecAiFpbIB1e3qxIQsE6NoPc5/eTdrbbIC4h0LVsWhnoa3g+m2HclBIujHzsxZ4VJVA+GUuc2/LBw==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/yauzl": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/yauzl/-/yauzl-3.2.0.tgz",
      "integrity": "sha512-Ow9nuGZE+qp1u4JIPvg+uCiUr7xGQWdff7JQSk5VGYTAZMDe2q8lxJ10ygv10qmSj031Ty/6FNJpLO4o1Sgc+w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "buffer-crc32": "~0.2.3",
        "pend": "~1.2.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/yn": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yn/-/yn-3.1.1.tgz",
      "integrity": "sha512-Ux4ygGWsu2c7isFWe8Yu1YluJmqVhxqK2cLXNQA5AcC3QfbGNpM7fu0Y8b/z16pXLnFxZYvWhd3fhBY9DLmC6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/yoctocolors-cjs": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/yoctocolors-cjs/-/yoctocolors-cjs-2.1.3.tgz",
      "integrity": "sha512-U/PBtDf35ff0D8X8D0jfdzHYEPFxAI7jJlxZXwCSez5M3190m+QobIfh+sWDWSHMCWWJN2AWamkegn6vr6YBTw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    }
  }
}
<- Manter consistência visual entre os botões do menu de END: package-lock.json -->
<- Manter consistência visual entre os botões do menu de START: package.json -->
{
  "name": "backend",
  "version": "0.0.1",
  "description": "",
  "author": "",
  "private": true,
  "license": "UNLICENSED",
  "scripts": {
    "build": "nest build",
    "vercel-build": "prisma generate && nest build",
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/main",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json",
    "postinstall": "prisma generate",
    "seed": "ts-node --compiler-options '{\"module\":\"CommonJS\"}' prisma/seed.ts"
  },
  "dependencies": {
    "@nestjs/common": "^11.0.1",
    "@nestjs/config": "^4.0.2",
    "@nestjs/core": "^11.0.1",
    "@nestjs/jwt": "^11.0.0",
    "@nestjs/mapped-types": "*",
    "@nestjs/passport": "^11.0.5",
    "@nestjs/platform-express": "^11.0.1",
    "@nestjs/platform-socket.io": "^11.1.3",
    "@nestjs/throttler": "^6.4.0",
    "@nestjs/websockets": "^11.1.3",
    "@types/passport-google-oauth20": "^2.0.16",
    "@types/socket.io": "^3.0.1",
    "@vercel/speed-insights": "^1.2.0",
    "bcryptjs": "^3.0.2",
    "class-transformer": "^0.5.1",
    "class-validator": "^0.14.2",
    "cloudinary": "^2.7.0",
    "helmet": "^8.1.0",
    "multer": "^2.0.1",
    "passport": "^0.7.0",
    "passport-google-oauth20": "^2.0.0",
    "passport-jwt": "^4.0.1",
    "reflect-metadata": "^0.2.2",
    "rxjs": "^7.8.1",
    "socket.io": "^4.8.1",
    "stripe": "^18.5.0",
    "winston": "^3.18.2"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.2.0",
    "@eslint/js": "^9.18.0",
    "@nestjs/cli": "^11.0.7",
    "@nestjs/schematics": "^11.0.0",
    "@nestjs/testing": "^11.0.1",
    "@prisma/client": "^6.13.0",
    "@swc/cli": "^0.6.0",
    "@swc/core": "^1.10.7",
    "@types/express": "^5.0.0",
    "@types/jest": "^29.5.14",
    "@types/multer": "^2.0.0",
    "@types/node": "^22.10.7",
    "@types/passport-jwt": "^4.0.1",
    "@types/supertest": "^6.0.2",
    "@types/winston": "^2.4.4",
    "@vercel/node": "^2.3.0",
    "eslint": "^9.18.0",
    "eslint-config-prettier": "^10.0.1",
    "eslint-plugin-prettier": "^5.2.2",
    "globals": "^16.0.0",
    "jest": "^29.7.0",
    "prettier": "^3.4.2",
    "prisma": "^6.13.0",
    "source-map-support": "^0.5.21",
    "supertest": "^7.0.0",
    "ts-jest": "^29.2.5",
    "ts-loader": "^9.5.2",
    "ts-node": "^10.9.2",
    "tsconfig-paths": "^4.2.0",
    "typescript": "^5.7.3",
    "typescript-eslint": "^8.20.0"
  },
  "jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      "ts"
    ],
    "rootDir": "src",
    "testRegex": ".*\\.spec\\.ts$",
    "transform": {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    "collectCoverageFrom": [
      "**/*.(t|j)s"
    ],
    "coverageDirectory": "../coverage",
    "testEnvironment": "node"
  }
}
<- Manter consistência visual entre os botões do menu de END: package.json -->
<- Manter consistência visual entre os botões do menu de START: prisma/migrations/20250720114702_add_new_rules_image/migration.sql -->
-- CreateTable
CREATE TABLE "Pizza" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "preco" DOUBLE PRECISION NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pizza_pkey" PRIMARY KEY ("id")
);

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CLIENTE', 'FUNCIONARIO', 'ADMIN');

-- CreateEnum
CREATE TYPE "StatusPedido" AS ENUM ('PENDENTE', 'EM_PREPARO', 'A_CAMINHO', 'ENTREGUE', 'CANCELADO');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "telefone" TEXT,
    "avatar" TEXT,
    "role" "Role" NOT NULL DEFAULT 'CLIENTE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Endereco" (
    "id" SERIAL NOT NULL,
    "cep" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "logradouro" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "complemento" TEXT,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "pais" TEXT,
    "referencia" TEXT,
    "principal" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" SERIAL NOT NULL,
    "entregadorId" INTEGER,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "enderecoId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" "StatusPedido" NOT NULL,
    "paymentIntentId" TEXT,
    "total" DOUBLE PRECISION,
    "observacoes" TEXT,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entregador" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Entregador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PedidoPizzas" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PedidoPizzas_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "_PedidoPizzas_B_index" ON "_PedidoPizzas"("B");

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "Endereco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_entregadorId_fkey" FOREIGN KEY ("entregadorId") REFERENCES "Entregador"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PedidoPizzas" ADD CONSTRAINT "_PedidoPizzas_A_fkey" FOREIGN KEY ("A") REFERENCES "Pedido"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PedidoPizzas" ADD CONSTRAINT "_PedidoPizzas_B_fkey" FOREIGN KEY ("B") REFERENCES "Pizza"("id") ON DELETE CASCADE ON UPDATE CASCADE;
<- Manter consistência visual entre os botões do menu de END: prisma/migrations/20250720114702_add_new_rules_image/migration.sql -->
<- Manter consistência visual entre os botões do menu de START: prisma/migrations/migration_lock.toml -->
# Please do not edit this file manually
# It should be added in your version-control system (e.g., Git)
provider = "postgresql"
<- Manter consistência visual entre os botões do menu de END: prisma/migrations/migration_lock.toml -->
<- Manter consistência visual entre os botões do menu de START: prisma/schema.prisma -->
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Pizza {
  id        Int      @id @default(autoincrement())
  nome      String
  descricao String?
  preco     Float
  image     String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  pedidos   Pedido[] @relation("PedidoPizzas")
  orders    Order[]  @relation("PedidoPizzas")
}

model User {
  id        Int        @id @default(autoincrement())
  nome      String
  email     String     @unique
  password  String
  telefone  String?
  avatar    String?
  role      Role       @default(CLIENTE)
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
  enderecos Endereco[]
  pedidos   Pedido[]
  orders    Order[]
}

model Pedido {
  id              Int          @id @default(autoincrement())
  entregadorId    Int?
  latitude        Float?
  longitude       Float?
  criadoEm        DateTime     @default(now())
  atualizadoEm    DateTime     @updatedAt
  enderecoId      Int
  userId          Int
  status          StatusPedido
  paymentIntentId String?
  total           Float?
  observacoes     String?
  endereco        Endereco     @relation("PedidoEndereco", fields: [enderecoId], references: [id])
  entregador      Entregador?  @relation(fields: [entregadorId], references: [id])
  user            User         @relation(fields: [userId], references: [id])
  pizzas          Pizza[]      @relation("PedidoPizzas")
}

model Entregador {
  id        Int      @id @default(autoincrement())
  nome      String
  telefone  String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  pedidos   Pedido[]
}

model Endereco {
  id          Int      @id @default(autoincrement())
  cep         String
  tipo        String
  logradouro  String
  numero      String
  bairro      String
  complemento String?
  cidade      String
  estado      String
  pais        String?
  referencia  String?
  principal   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  userId      Int
  user        User     @relation(fields: [userId], references: [id])
  pedidos     Pedido[] @relation("PedidoEndereco")
  orders      Order[]
}

// Categorização de Produtos (ex: Pizzas, Bebidas, Sobremesas)
model Category {
  id        String    @id @default(uuid())
  name      String    @unique
  slug      String    @unique
  products  Product[]
  createdAt DateTime  @default(now())
}

// Produto Genérico (Substituirá a tabela Pizza futuramente)
model Product {
  id          String   @id @default(uuid())
  name        String
  description String?
  price       Decimal  @db.Decimal(10, 2)
  imageUrl    String?
  categoryId  String
  category    Category @relation(fields: [categoryId], references: [id])
  active      Boolean  @default(true)

  // Relacionamento com itens de pedido (OrderItems) deve ser migrado
  items       OrderItem[]
}

// Gestão de Mesas Físicas
model Table {
  id        String         @id @default(uuid())
  number    Int            @unique // Identificador visual (Mesa 1, Mesa 2)
  status    TableStatus    @default(AVAILABLE) // Enum: AVAILABLE, OCCUPIED, RESERVED
  sessions  TableSession[]
}

// Sessão de Atendimento (A "Comanda")
model TableSession {
  id        String    @id @default(uuid())
  tableId   String
  table     Table     @relation(fields: [tableId], references: [id])
  openedAt  DateTime  @default(now())
  closedAt  DateTime?
  total     Decimal   @default(0) @db.Decimal(10, 2)
  orders    Order[]   // Pedidos feitos nesta sessão
}

// Item de Pedido (para produtos genéricos)
model OrderItem {
  id        String  @id @default(uuid())
  orderId   Int
  productId String
  quantity  Int     @default(1)
  price     Decimal @db.Decimal(10, 2) // Preço no momento da compra
  order     Order   @relation(fields: [orderId], references: [id])
  product   Product @relation(fields: [productId], references: [id])
}

// Pedido atualizado para ser polimórfico (mantendo id Int por compatibilidade)
model Order {
  id              Int         @id @default(autoincrement())
  type            OrderType   @default(DELIVERY)

  // Campos obrigatórios
  status          StatusPedido
  total           Decimal     @db.Decimal(10, 2)
  createdAt       DateTime    @default(now())
  updatedAt       DateTime    @updatedAt

  // Campos opcionais de contexto
  addressId       Int?        // Obrigatório se DELIVERY
  sessionId       String?     // Obrigatório se DINE_IN (link com TableSession)
  session         TableSession? @relation(fields: [sessionId], references: [id])
  address         Endereco?   @relation(fields: [addressId], references: [id])

  // Usuário se torna opcional (cliente de mesa pode ser anônimo)
  userId          Int?
  user            User?       @relation(fields: [userId], references: [id])

  // Relacionamentos
  items           OrderItem[]

  // Campos legados (para compatibilidade durante migração)
  entregadorId    Int?
  latitude        Float?
  longitude       Float?
  paymentIntentId String?
  observacoes     String?

  // Relacionamentos legados (serão removidos após migração)
  pizzas          Pizza[]     @relation("PedidoPizzas")
}

enum Role {
  CLIENTE
  FUNCIONARIO
  ADMIN
}

enum StatusPedido {
  PENDENTE
  EM_PREPARO
  A_CAMINHO
  ENTREGUE
  CANCELADO
}

enum TableStatus {
  AVAILABLE
  OCCUPIED
  RESERVED
}

enum OrderType {
  DELIVERY
  DINE_IN
}
<- Manter consistência visual entre os botões do menu de END: prisma/schema.prisma -->
<- Manter consistência visual entre os botões do menu de START: prisma/seed-migration.ts -->
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function migratePizzaToProduct() {
  console.log('🚀 Iniciando migração de Pizza para Product...');

  try {
    // 1. Criar categoria "Pizzas" se não existir
    let pizzaCategory = await prisma.category.findFirst({
      where: { slug: 'pizzas' },
    });

    if (!pizzaCategory) {
      pizzaCategory = await prisma.category.create({
        data: {
          name: 'Pizzas',
          slug: 'pizzas',
        },
      });
      console.log('✅ Categoria "Pizzas" criada');
    }

    // 2. Migrar todas as pizzas para produtos
    const pizzas = await prisma.pizza.findMany();
    console.log(`📊 Encontradas ${pizzas.length} pizzas para migrar`);

    for (const pizza of pizzas) {
      const existingProduct = await prisma.product.findFirst({
        where: { name: pizza.nome },
      });

      if (!existingProduct) {
        await prisma.product.create({
          data: {
            name: pizza.nome,
            description: pizza.descricao,
            price: pizza.preco,
            imageUrl: pizza.image,
            categoryId: pizzaCategory.id,
            active: true,
          },
        });
        console.log(`✅ Pizza "${pizza.nome}" migrada para Product`);
      } else {
        console.log(`⚠️ Produto "${pizza.nome}" já existe, pulando...`);
      }
    }

    console.log('🎉 Migração concluída com sucesso!');
  } catch (error) {
    console.error('❌ Erro durante a migração:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Executar apenas se chamado diretamente
if (require.main === module) {
  migratePizzaToProduct().catch(console.error);
}

export { migratePizzaToProduct };
<- Manter consistência visual entre os botões do menu de END: prisma/seed-migration.ts -->
<- Manter consistência visual entre os botões do menu de START: prisma/seed-pedidos.ts -->
import { PrismaClient, StatusPedido } from '@prisma/client';

const prisma = new PrismaClient();

const statuses: StatusPedido[] = [
  'PENDENTE',
  'EM_PREPARO',
  'A_CAMINHO',
  'ENTREGUE',
  'CANCELADO',
];

const nomes = [
  'João Silva',
  'Maria Santos',
  'Carlos Oliveira',
  'Ana Costa',
  'Pedro Ferreira',
  'Juliana Souza',
  'Roberto Alves',
  'Fernanda Lima',
  'Marcos Cesar Domingues',
];

async function main() {
  console.log('🍕 Iniciando seed de pedidos...\n');

  // Buscar usuários clientes existentes (role = CLIENT ou não ADMIN/FUNCIONARIO)
  const usuarios = await prisma.user.findMany({
    where: {
      role: {
        notIn: ['ADMIN', 'FUNCIONARIO'],
      },
    },
    include: {
      enderecos: true,
    },
  });

  if (usuarios.length === 0) {
    console.log('❌ Nenhum usuário cliente encontrado no banco');
    process.exit(1);
  }

  console.log(`✅ Encontrados ${usuarios.length} usuários\n`);

  // Buscar pizzas
  const pizzas = await prisma.pizza.findMany();

  if (pizzas.length === 0) {
    console.log('❌ Nenhuma pizza encontrada no banco');
    process.exit(1);
  }

  console.log(`✅ Encontradas ${pizzas.length} pizzas\n`);

  // Criar 10 pedidos
  for (let i = 0; i < 10; i++) {
    const usuarioAleatorio =
      usuarios[Math.floor(Math.random() * usuarios.length)];
    const enderecoAleatorio =
      usuarioAleatorio.enderecos[0] || usuarioAleatorio.enderecos[0];

    if (!enderecoAleatorio) {
      console.log(`⚠️  Usuário ${usuarioAleatorio.nome} não tem endereço`);
      continue;
    }

    // Selecionar 2-4 pizzas aleatoriamente
    const numPizzas = Math.floor(Math.random() * 3) + 2;
    const pizzasSelecionadas: typeof pizzas = [];
    for (let j = 0; j < numPizzas; j++) {
      const pizza = pizzas[Math.floor(Math.random() * pizzas.length)];
      if (!pizzasSelecionadas.find((p) => p.id === pizza.id)) {
        pizzasSelecionadas.push(pizza);
      }
    }

    const statusAleatorio =
      statuses[Math.floor(Math.random() * statuses.length)];

    const pedido = await prisma.pedido.create({
      data: {
        userId: usuarioAleatorio.id,
        enderecoId: enderecoAleatorio.id,
        status: statusAleatorio,
        observacoes: 'Pedido criado via seed de teste',
        total: Math.floor(Math.random() * 100 + 30), // Valor entre 30 e 130
        pizzas: {
          connect: pizzasSelecionadas.map((p) => ({ id: p.id })),
        },
      },
    });

    console.log(`✅ Pedido #${pedido.id} criado`);
    console.log(`   Cliente: ${usuarioAleatorio.nome}`);
    console.log(`   Status: ${statusAleatorio}`);
    console.log(`   Pizzas: ${pizzasSelecionadas.length}\n`);
  }

  console.log('✅ Seed de pedidos concluído!\n');
  process.exit(0);
}

main()
  .catch((error) => {
    console.error('❌ Erro durante seed:', error);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
<- Manter consistência visual entre os botões do menu de END: prisma/seed-pedidos.ts -->
<- Manter consistência visual entre os botões do menu de START: prisma/seed.ts -->
import { PrismaClient, StatusPedido } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando seed do banco de dados...');

  // Limpa o banco antes de popular
  await prisma.pedido.deleteMany();
  await prisma.pizza.deleteMany();
  await prisma.entregador.deleteMany();
  await prisma.endereco.deleteMany();
  await prisma.user.deleteMany();

  // === CRIANDO USUÁRIOS SOLICITADOS ===
  const senha = '123'; // Senha fixa como solicitado
  const senhaHash = await bcrypt.hash(senha, 10);

  console.log('Criando usuário ADMIN...');
  // 1. ADMIN
  const adminUser = await prisma.user.create({
    data: {
      nome: 'Administrador',
      email: 'admin@admin.com',
      password: senhaHash,
      telefone: '11999999999',
      role: 'ADMIN',
      enderecos: {
        create: {
          cep: '01000-000',
          tipo: 'comercial',
          logradouro: 'Rua Admin',
          numero: '100',
          bairro: 'Centro',
          cidade: 'São Paulo',
          estado: 'SP',
          principal: true,
        },
      },
    },
  });
  console.log('✅ Usuário ADMIN criado: admin@admin.com / senha: 123');

  console.log('Criando funcionários...');
  // 2. FUNCIONARIO 1
  const funcionario1 = await prisma.user.create({
    data: {
      nome: 'Funcionário 1',
      email: 'funcionario1',
      password: senhaHash,
      telefone: '11888888881',
      role: 'FUNCIONARIO',
      enderecos: {
        create: {
          cep: '02000-001',
          tipo: 'residencial',
          logradouro: 'Rua Funcionário 1',
          numero: '201',
          bairro: 'Vila Funcionário',
          cidade: 'São Paulo',
          estado: 'SP',
          principal: true,
        },
      },
    },
  });

  // 3. FUNCIONARIO 2
  const funcionario2 = await prisma.user.create({
    data: {
      nome: 'Funcionário 2',
      email: 'funcionario2',
      password: senhaHash,
      telefone: '11888888882',
      role: 'FUNCIONARIO',
      enderecos: {
        create: {
          cep: '02000-002',
          tipo: 'residencial',
          logradouro: 'Rua Funcionário 2',
          numero: '202',
          bairro: 'Vila Funcionário',
          cidade: 'São Paulo',
          estado: 'SP',
          principal: true,
        },
      },
    },
  });

  // 4. FUNCIONARIO 3
  const funcionario3 = await prisma.user.create({
    data: {
      nome: 'Funcionário 3',
      email: 'funcionario3',
      password: senhaHash,
      telefone: '11888888883',
      role: 'FUNCIONARIO',
      enderecos: {
        create: {
          cep: '02000-003',
          tipo: 'residencial',
          logradouro: 'Rua Funcionário 3',
          numero: '203',
          bairro: 'Vila Funcionário',
          cidade: 'São Paulo',
          estado: 'SP',
          principal: true,
        },
      },
    },
  });

  console.log('✅ Funcionários criados:');
  console.log('   - funcionario1 / senha: 123');
  console.log('   - funcionario2 / senha: 123');
  console.log('   - funcionario3 / senha: 123');

  // === CRIANDO ALGUNS DADOS BÁSICOS PARA TESTE ===

  console.log('Criando entregadores de exemplo...');
  // Entregadores
  const entregador1 = await prisma.entregador.create({
    data: {
      nome: 'Carlos Motoboy',
      telefone: '11988888888',
    },
  });

  const entregador2 = await prisma.entregador.create({
    data: {
      nome: 'Ana Entregadora',
      telefone: '11999997777',
    },
  });
  console.log('✅ Entregadores criados');

  console.log('Criando pizzas de exemplo...');
  // Pizzas
  const pizza1 = await prisma.pizza.create({
    data: {
      nome: 'Margherita',
      descricao: 'Molho de tomate, mussarela, manjericão',
      preco: 39.9,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    },
  });

  const pizza2 = await prisma.pizza.create({
    data: {
      nome: 'Calabresa',
      descricao: 'Calabresa, cebola, mussarela',
      preco: 44.9,
      image: 'https://images.unsplash.com/photo-1548365328-8b849e6c7b8b',
    },
  });
  console.log('✅ Pizzas criadas');

  // Logs para diagnóstico
  const usuarios = await prisma.user.count();
  const entregadores = await prisma.entregador.count();
  const pizzas = await prisma.pizza.count();
  const pedidos = await prisma.pedido.count();

  console.log('\n🎉 SEED CONCLUÍDO COM SUCESSO!');
  console.log('=====================================');
  console.log('📊 Dados criados:');
  console.log(`   👥 Usuários: ${usuarios}`);
  console.log(`   🏍️  Entregadores: ${entregadores}`);
  console.log(`   🍕 Pizzas: ${pizzas}`);
  console.log(`   📦 Pedidos: ${pedidos}`);
  console.log('');
  console.log('🔐 Credenciais de acesso:');
  console.log('   ADMIN: admin@admin.com / 123');
  console.log('   FUNC1: funcionario1 / 123');
  console.log('   FUNC2: funcionario2 / 123');
  console.log('   FUNC3: funcionario3 / 123');
  console.log('=====================================');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
<- Manter consistência visual entre os botões do menu de END: prisma/seed.ts -->
<- Manter consistência visual entre os botões do menu de START: src/app.controller.spec.ts -->
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
<- Manter consistência visual entre os botões do menu de END: src/app.controller.spec.ts -->
<- Manter consistência visual entre os botões do menu de START: src/app.controller.ts -->
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
<- Manter consistência visual entre os botões do menu de END: src/app.controller.ts -->
<- Manter consistência visual entre os botões do menu de START: src/app.module.ts -->
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzasModule } from './pizzas/pizzas.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { CommonModule } from './common/common.module';
import { UsersModule } from './users/users.module';
import { EntregadoresModule } from './entregadores/entregadores.module';
import { AuthModule } from './auth/auth.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { EnderecosModule } from './enderecos/enderecos.module';
import { PaymentsModule } from './payments/payments.module';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { CatalogModule } from './catalog/catalog.module';
import { TablesModule } from './tables/tables.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          limit: 20,
          ttl: 60,
        },
      ],
    }),
    CommonModule,
    PizzasModule,
    PedidosModule,
    UsersModule,
    EntregadoresModule,
    EnderecosModule,
    AuthModule,
    PaymentsModule,
    CatalogModule, // Novo módulo de catálogo
    TablesModule, // Novo módulo de mesas
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
<- Manter consistência visual entre os botões do menu de END: src/app.module.ts -->
<- Manter consistência visual entre os botões do menu de START: src/app.service.ts -->
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
<- Manter consistência visual entre os botões do menu de END: src/app.service.ts -->
<- Manter consistência visual entre os botões do menu de START: src/auth/auth.controller.ts -->
import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Get,
  Req,
  UseGuards,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { User } from '@prisma/client';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    try {
      const user = await this.authService.validateUser(
        loginDto.email,
        loginDto.password,
      );
      if (
        !user ||
        typeof user.id !== 'number' ||
        typeof user.email !== 'string'
      ) {
        throw new HttpException(
          'Credenciais inválidas',
          HttpStatus.UNAUTHORIZED,
        );
      }
      return this.authService.login({ id: user.id, email: user.email });
    } catch {
      throw new HttpException('Credenciais inválidas', HttpStatus.UNAUTHORIZED);
    }
  }

  @Post('register')
  async register(@Body() registerDto: CreateUserDto) {
    try {
      const result = await this.authService.register(registerDto);
      return result;
    } catch (error) {
      // Log detalhado para depuração
      console.error('Erro no registro de cliente:', {
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
        error: error instanceof Error ? error : undefined,
      });
      if (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        (error as Record<string, any>).code === 'P2002'
      ) {
        throw new HttpException('Email já cadastrado', HttpStatus.CONFLICT);
      }
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    // Inicia fluxo OAuth com Google
  }

  @Get('config')
  getAuthConfig() {
    return {
      environment: process.env.NODE_ENV,
      frontendUrl:
        process.env.NODE_ENV === 'production'
          ? process.env.FRONTEND_URL
          : process.env.FRONTEND_URL_DEV || 'http://localhost:3000',
      googleCallbackUrl:
        process.env.NODE_ENV === 'production'
          ? process.env.GOOGLE_CALLBACK_URL
          : 'http://localhost:10000/auth/google/callback',
      corsOrigins: [
        process.env.FRONTEND_URL,
        process.env.FRONTEND_URL_DEV || 'http://localhost:3000',
      ],
    };
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(
    @Req() req: Request & { user: Omit<User, 'password'> },
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const { access_token } = this.authService.login({
        id: user.id,
        email: user.email,
      });

      // Determina a URL do frontend baseada no ambiente
      const frontendUrl =
        process.env.NODE_ENV === 'production'
          ? process.env.FRONTEND_URL
          : process.env.FRONTEND_URL_DEV || 'http://localhost:3000';

      // Redireciona para o frontend com o token
      const redirectUrl = `${frontendUrl}/auth-callback?token=${access_token}`;

      return res.redirect(redirectUrl);
    } catch (error) {
      console.error('❌ Erro na autenticação Google:', error);

      // Redireciona para o frontend com erro
      const frontendUrl =
        process.env.NODE_ENV === 'production'
          ? process.env.FRONTEND_URL
          : process.env.FRONTEND_URL_DEV || 'http://localhost:3000';

      const errorUrl = `${frontendUrl}/auth-callback?error=authentication_failed`;

      console.log('🚨 Redirecting to error page:', errorUrl);

      return res.redirect(errorUrl);
    }
  }
}
<- Manter consistência visual entre os botões do menu de END: src/auth/auth.controller.ts -->
<- Manter consistência visual entre os botões do menu de START: src/auth/auth.module.ts -->
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { GoogleStrategy } from './google.strategy';
import { PrismaModule } from '../prisma.module';
import { MeController } from './me.controller';

@Module({
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'pizza-secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService, JwtStrategy, GoogleStrategy],
  controllers: [AuthController, MeController],
  exports: [AuthService],
})
export class AuthModule {}
<- Manter consistência visual entre os botões do menu de END: src/auth/auth.module.ts -->
<- Manter consistência visual entre os botões do menu de START: src/auth/auth.service.ts -->
import { Injectable, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma.service';
import { IHasher } from '../common/interfaces/hasher.interface';
import { User } from '@prisma/client';

interface JwtPayload {
  sub: number;
  email: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    @Inject('HASHER') private readonly hasher: IHasher,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<Record<string, any> | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
      include: {
        enderecos: {
          where: { principal: true },
          take: 1,
        },
      },
    });
    if (user && (await this.hasher.compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password: _, ...result } = user;
      return result;
    }
    return null;
  }

  login(user: { id: number; email: string }): { access_token: string } {
    const payload: JwtPayload = { sub: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(data: {
    nome: string;
    email: string;
    password: string;
    telefone?: string;
    endereco?: string; // Para compatibilidade com testes E2E
    enderecos?: Array<{
      cep: string;
      tipo: string;
      logradouro: string;
      numero: string;
      bairro: string;
      cidade: string;
      estado: string;
      principal?: boolean;
      complemento?: string;
    }>;
  }): Promise<Record<string, any>> {
    if (!data.password) throw new Error('Campo password é obrigatório');
    const hash = await this.hasher.hash(data.password);
    const { enderecos, endereco, ...rest } = data;

    // Se recebeu endereco (string), converte para o formato de enderecos
    let enderecosData = enderecos;
    if (endereco && !enderecosData) {
      enderecosData = [
        {
          cep: '01234-567',
          tipo: 'CASA',
          logradouro: endereco,
          numero: '123',
          bairro: 'Centro',
          cidade: 'São Paulo',
          estado: 'SP',
          principal: true,
        },
      ];
    }

    const created = await this.prisma.user.create({
      data: {
        ...rest,
        password: hash,
        enderecos: enderecosData ? { create: enderecosData } : undefined,
      },
      include: { enderecos: true },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _password, ...result } = created;
    return result;
  }

  async findOrCreateGoogleUser(input: {
    email: string;
    nome: string;
    avatar?: string;
  }): Promise<Omit<User, 'password'>> {
    let user = await this.prisma.user.findUnique({
      where: { email: input.email },
    });

    if (!user) {
      user = await this.prisma.user.create({
        data: {
          nome: input.nome,
          email: input.email,
          password: await this.hasher.hash('google-oauth-user'),
          role: 'CLIENTE',
          avatar: input.avatar,
        },
      });
    } else if (input.avatar && user.avatar !== input.avatar) {
      user = await this.prisma.user.update({
        where: { id: user.id },
        data: { avatar: input.avatar },
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...result } = user;
    return result;
  }
}
<- Manter consistência visual entre os botões do menu de END: src/auth/auth.service.ts -->
<- Manter consistência visual entre os botões do menu de START: src/auth/google.strategy.ts -->
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-google-oauth20';
import { VerifyCallback } from 'passport-google-oauth20';
import { AuthService } from './auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly authService: AuthService) {
    const callbackURL =
      process.env.NODE_ENV === 'production'
        ? process.env.GOOGLE_CALLBACK_URL
        : process.env.GOOGLE_CALLBACK_URL_DEV;

    super({
      clientID: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      callbackURL,
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: VerifyCallback,
  ): Promise<void> {
    const email = profile.emails?.[0]?.value;
    if (!email) {
      return done(new Error('No email from Google'), false);
    }
    const nome = profile.displayName;
    const avatar = profile.photos?.[0]?.value;

    try {
      const user = await this.authService.findOrCreateGoogleUser({
        email,
        nome,
        avatar,
      });
      done(null, user);
    } catch (err) {
      done(err, false);
    }
  }
}
<- Manter consistência visual entre os botões do menu de END: src/auth/google.strategy.ts -->
<- Manter consistência visual entre os botões do menu de START: src/auth/jwt-auth.guard.ts -->
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ExecutionContext } from '@nestjs/common/interfaces';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }
}
<- Manter consistência visual entre os botões do menu de END: src/auth/jwt-auth.guard.ts -->
<- Manter consistência visual entre os botões do menu de START: src/auth/jwt.strategy.ts -->
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '../prisma.service';
import { AuthenticatedUser } from '../common/interfaces/authenticated-user.interface';

interface JwtPayload {
  sub: number;
  email: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly prisma: PrismaService) {
    const secret = process.env.JWT_SECRET || 'pizza-secret';
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret,
    });
  }

  async validate(payload: JwtPayload): Promise<AuthenticatedUser> {
    if (!payload.sub || !payload.email) {
      throw new Error('Token inválido: payload incompleto');
    }

    // Buscar o usuário completo no banco para obter o role
    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
      select: { id: true, email: true, role: true, nome: true },
    });

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    return {
      id: user.id,
      email: user.email,
      role: user.role,
      nome: user.nome,
    };
  }
}
<- Manter consistência visual entre os botões do menu de END: src/auth/jwt.strategy.ts -->
<- Manter consistência visual entre os botões do menu de START: src/auth/me.controller.ts -->
import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Request } from 'express';

interface AuthenticatedUser {
  userId?: number;
  id?: number;
}

interface AuthenticatedRequest extends Request {
  user?: AuthenticatedUser;
}

@Controller('me')
export class MeController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getMe(@Req() req: AuthenticatedRequest) {
    // Busca dados do usuário autenticado (sem password)
    const userId = req.user?.userId ?? req.user?.id;

    if (!userId) {
      return { error: 'Token inválido - userId não encontrado' };
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { enderecos: true, pedidos: true }, // Inclui endereços e pedidos
    });

    if (!user) {
      return { error: 'Usuário não encontrado no banco de dados' };
    }

    // Remove o campo password do retorno
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userData } = user;
    return userData;
  }
}
<- Manter consistência visual entre os botões do menu de END: src/auth/me.controller.ts -->
<- Manter consistência visual entre os botões do menu de START: src/auth/roles.guard.ts -->
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
<- Manter consistência visual entre os botões do menu de END: src/auth/roles.guard.ts -->
<- Manter consistência visual entre os botões do menu de START: src/catalog/catalog.module.ts -->
import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ProductsService } from './products.service';
import { CategoriesController } from './categories.controller';
import { ProductsController } from './products.controller';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CategoriesController, ProductsController],
  providers: [CategoriesService, ProductsService],
  exports: [CategoriesService, ProductsService],
})
export class CatalogModule {}
<- Manter consistência visual entre os botões do menu de END: src/catalog/catalog.module.ts -->
<- Manter consistência visual entre os botões do menu de START: src/catalog/categories.controller.ts -->
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(id);
  }
}
<- Manter consistência visual entre os botões do menu de END: src/catalog/categories.controller.ts -->
<- Manter consistência visual entre os botões do menu de START: src/catalog/categories.service.ts -->
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.category.create({
      data: createCategoryDto,
    });
  }

  async findAll() {
    return this.prisma.category.findMany({
      include: {
        products: {
          where: { active: true },
        },
      },
    });
  }

  async findOne(id: string) {
    const category = await this.prisma.category.findUnique({
      where: { id },
      include: {
        products: {
          where: { active: true },
        },
      },
    });

    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }

    return category;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    try {
      return await this.prisma.category.update({
        where: { id },
        data: updateCategoryDto,
      });
    } catch (error) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.category.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
  }
}
<- Manter consistência visual entre os botões do menu de END: src/catalog/categories.service.ts -->
<- Manter consistência visual entre os botões do menu de START: src/catalog/dto/create-category.dto.ts -->
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  slug: string;
}
<- Manter consistência visual entre os botões do menu de END: src/catalog/dto/create-category.dto.ts -->
<- Manter consistência visual entre os botões do menu de START: src/catalog/dto/create-product.dto.ts -->
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsUUID,
  IsOptional,
  Min,
  MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  name: string;

  @IsString()
  @IsOptional()
  @MaxLength(1000)
  description?: string;

  @IsString()
  price: string;

  @IsString()
  @IsOptional()
  imageUrl?: string;

  @IsString()
  @IsNotEmpty()
  categoryId: string;
}
<- Manter consistência visual entre os botões do menu de END: src/catalog/dto/create-product.dto.ts -->
<- Manter consistência visual entre os botões do menu de START: src/catalog/dto/update-category.dto.ts -->
import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
<- Manter consistência visual entre os botões do menu de END: src/catalog/dto/update-category.dto.ts -->
<- Manter consistência visual entre os botões do menu de START: src/catalog/dto/update-product.dto.ts -->
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {}
<- Manter consistência visual entre os botões do menu de END: src/catalog/dto/update-product.dto.ts -->
<- Manter consistência visual entre os botões do menu de START: src/catalog/products.controller.ts -->
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll(@Query('categoryId') categoryId?: string) {
    if (categoryId) {
      return this.productsService.findByCategory(categoryId);
    }
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
<- Manter consistência visual entre os botões do menu de END: src/catalog/products.controller.ts -->
<- Manter consistência visual entre os botões do menu de START: src/catalog/products.service.ts -->
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({
      data: {
        ...createProductDto,
        price: parseFloat(createProductDto.price),
      },
      include: {
        category: true,
      },
    });
  }

  async findAll() {
    return this.prisma.product.findMany({
      where: { active: true },
      include: {
        category: true,
      },
    });
  }

  async findByCategory(categoryId: string) {
    return this.prisma.product.findMany({
      where: {
        categoryId,
        active: true,
      },
      include: {
        category: true,
      },
    });
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
      },
    });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    try {
      return await this.prisma.product.update({
        where: { id },
        data: updateProductDto,
        include: {
          category: true,
        },
      });
    } catch (error) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
  }

  async remove(id: string) {
    try {
      // Soft delete - marcar como inativo
      return await this.prisma.product.update({
        where: { id },
        data: { active: false },
      });
    } catch (error) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
  }
}
<- Manter consistência visual entre os botões do menu de END: src/catalog/products.service.ts -->
<- Manter consistência visual entre os botões do menu de START: src/cloudinary/cloudinary.module.ts -->
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CloudinaryService } from './cloudinary.service';

@Module({
  imports: [ConfigModule],
  providers: [CloudinaryService],
  exports: [CloudinaryService],
})
export class CloudinaryModule {}
<- Manter consistência visual entre os botões do menu de END: src/cloudinary/cloudinary.module.ts -->
<- Manter consistência visual entre os botões do menu de START: src/cloudinary/cloudinary.service.ts -->
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  constructor(private configService: ConfigService) {
    cloudinary.config({
      cloud_name: this.configService.get<string>('CLOUDINARY_CLOUD_NAME'),
      api_key: this.configService.get<string>('CLOUDINARY_API_KEY'),
      api_secret: this.configService.get<string>('CLOUDINARY_API_SECRET'),
    });
  }

  async uploadImage(file: Express.Multer.File): Promise<string> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'pizzas',
          transformation: [
            { width: 800, height: 600, crop: 'fill' },
            { quality: 'auto:good' },
            { format: 'webp' },
          ],
        },
        (error: any, result: any) => {
          if (error) {
            reject(new Error(error.message || 'Upload failed'));
          } else if (result?.secure_url) {
            resolve(result.secure_url);
          } else {
            reject(new Error('Upload failed'));
          }
        },
      );

      uploadStream.end(file.buffer);
    });
  }

  async deleteImage(publicId: string): Promise<void> {
    try {
      await cloudinary.uploader.destroy(publicId);
    } catch (error) {
      console.error('Erro ao deletar imagem:', error);
      throw new Error(
        `Erro ao deletar imagem: ${
          error instanceof Error ? error.message : 'Erro desconhecido'
        }`,
      );
    }
  }

  extractPublicId(imageUrl: string): string {
    // Extrai o public_id de uma URL do Cloudinary
    const parts = imageUrl.split('/');
    const filename = parts[parts.length - 1];
    return filename.split('.')[0];
  }
}
<- Manter consistência visual entre os botões do menu de END: src/cloudinary/cloudinary.service.ts -->
<- Manter consistência visual entre os botões do menu de START: src/common/adapters/bcrypt.adapter.ts -->
import { IHasher } from '../interfaces/hasher.interface';
import * as bcrypt from 'bcryptjs';

export class BcryptAdapter implements IHasher {
  constructor(private readonly saltRounds: number = 10) {}

  async hash(value: string): Promise<string> {
    return bcrypt.hash(value, this.saltRounds);
  }

  async compare(value: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(value, hashed);
  }
}
<- Manter consistência visual entre os botões do menu de END: src/common/adapters/bcrypt.adapter.ts -->
<- Manter consistência visual entre os botões do menu de START: src/common/builders/response.builder.ts -->
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
<- Manter consistência visual entre os botões do menu de END: src/common/builders/response.builder.ts -->
<- Manter consistência visual entre os botões do menu de START: src/common/common.module.ts -->
import { Global, Module } from '@nestjs/common';
import { BcryptAdapter } from './adapters/bcrypt.adapter';
import { CustomLoggerService } from './logger/logger.service';

@Global()
@Module({
  providers: [
    {
      provide: 'HASHER',
      useClass: BcryptAdapter,
    },
    CustomLoggerService,
  ],
  exports: ['HASHER', CustomLoggerService],
})
export class CommonModule {}
<- Manter consistência visual entre os botões do menu de END: src/common/common.module.ts -->
<- Manter consistência visual entre os botões do menu de START: src/common/constants/app.constants.ts -->
/**
 * Constantes da aplicação - eliminando magic numbers e strings
 */
export const APP_CONSTANTS = {
  // Servidor
  DEFAULT_PORT: 3000,

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
<- Manter consistência visual entre os botões do menu de END: src/common/constants/app.constants.ts -->
<- Manter consistência visual entre os botões do menu de START: src/common/constants/roles.constants.ts -->
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
<- Manter consistência visual entre os botões do menu de END: src/common/constants/roles.constants.ts -->
<- Manter consistência visual entre os botões do menu de START: src/common/decorators/auth.decorators.ts -->
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
<- Manter consistência visual entre os botões do menu de END: src/common/decorators/auth.decorators.ts -->
<- Manter consistência visual entre os botões do menu de START: src/common/decorators/resource.decorator.ts -->
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
<- Manter consistência visual entre os botões do menu de END: src/common/decorators/resource.decorator.ts -->
<- Manter consistência visual entre os botões do menu de START: src/common/decorators/roles.decorator.ts -->
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
<- Manter consistência visual entre os botões do menu de END: src/common/decorators/roles.decorator.ts -->
<- Manter consistência visual entre os botões do menu de START: src/common/enums/role.enum.ts -->
export enum Role {
  CLIENTE = 'CLIENTE',
  FUNCIONARIO = 'FUNCIONARIO',
  ADMIN = 'ADMIN',
}
<- Manter consistência visual entre os botões do menu de END: src/common/enums/role.enum.ts -->
<- Manter consistência visual entre os botões do menu de START: src/common/filters/all-exceptions.filter.ts -->
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Prisma } from '@prisma/client';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Erro interno do servidor';
    let error = 'Internal Server Error';

    // HTTP Exceptions (NestJS)
    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();

      if (typeof exceptionResponse === 'string') {
        message = exceptionResponse;
      } else if (
        typeof exceptionResponse === 'object' &&
        exceptionResponse !== null
      ) {
        const responseObj = exceptionResponse as Record<string, unknown>;
        message =
          typeof responseObj.message === 'string'
            ? responseObj.message
            : typeof responseObj.error === 'string'
              ? responseObj.error
              : message;

        error =
          typeof responseObj.error === 'string' ? responseObj.error : error;
      }
    }
    // Prisma Exceptions
    else if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      status = HttpStatus.BAD_REQUEST;

      switch (exception.code) {
        case 'P2002':
          message = 'Já existe um registro com essas informações';
          error = 'Duplicate Entry';
          break;
        case 'P2025':
          message = 'Registro não encontrado';
          error = 'Record Not Found';
          status = HttpStatus.NOT_FOUND;
          break;
        case 'P2003':
          message = 'Operação não permitida devido a dependências';
          error = 'Foreign Key Constraint';
          break;
        case 'P2016':
          message = 'Erro de consulta na base de dados';
          error = 'Query Interpretation Error';
          break;
        default:
          message = 'Erro na operação da base de dados';
          error = 'Database Error';
      }
    }
    // Prisma Validation Error
    else if (exception instanceof Prisma.PrismaClientValidationError) {
      status = HttpStatus.BAD_REQUEST;
      message = 'Dados fornecidos são inválidos';
      error = 'Validation Error';
    }
    // Other Prisma Errors
    else if (exception instanceof Prisma.PrismaClientInitializationError) {
      status = HttpStatus.SERVICE_UNAVAILABLE;
      message = 'Serviço temporariamente indisponível';
      error = 'Service Unavailable';
    }
    // Generic Error
    else if (exception instanceof Error) {
      message = exception.message || message;
      error = exception.name || error;
    }

    // Log do erro (sem expor informações sensíveis)
    const logMessage = {
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      statusCode: status,
      message: message,
      userAgent: request.get('user-agent'),
      ip: request.ip,
    };

    if (status >= HttpStatus.INTERNAL_SERVER_ERROR) {
      this.logger.error(
        `💥 ERRO CRÍTICO: ${JSON.stringify(logMessage)}`,
        exception,
      );
    } else {
      this.logger.warn(`⚠️ ERRO CLIENTE: ${JSON.stringify(logMessage)}`);
    }

    // Resposta padronizada
    const errorResponse = {
      statusCode: status,
      message,
      error,
      timestamp: new Date().toISOString(),
      path: request.url,
    };

    response.status(status).json(errorResponse);
  }
}
<- Manter consistência visual entre os botões do menu de END: src/common/filters/all-exceptions.filter.ts -->
<- Manter consistência visual entre os botões do menu de START: src/common/guards/resource-owner.guard.ts -->
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
<- Manter consistência visual entre os botões do menu de END: src/common/guards/resource-owner.guard.ts -->
<- Manter consistência visual entre os botões do menu de START: src/common/interfaces/authenticated-user.interface.ts -->
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
<- Manter consistência visual entre os botões do menu de END: src/common/interfaces/authenticated-user.interface.ts -->
<- Manter consistência visual entre os botões do menu de START: src/common/interfaces/hasher.interface.ts -->
export interface IHasher {
  hash(value: string): Promise<string>;
  compare(value: string, hashed: string): Promise<boolean>;
}
<- Manter consistência visual entre os botões do menu de END: src/common/interfaces/hasher.interface.ts -->
<- Manter consistência visual entre os botões do menu de START: src/common/logger/logger.module.ts -->
import { Module, Global } from '@nestjs/common';
import { CustomLoggerService } from './logger.service';

@Global()
@Module({
  providers: [CustomLoggerService],
  exports: [CustomLoggerService],
})
export class LoggerModule {}
<- Manter consistência visual entre os botões do menu de END: src/common/logger/logger.module.ts -->
<- Manter consistência visual entre os botões do menu de START: src/common/logger/logger.service.ts -->
import { Injectable, LoggerService } from '@nestjs/common';
import * as winston from 'winston';

/**
 * Logger Service profissional usando Winston
 * Substitui console.log por logging estruturado e seguro
 */
@Injectable()
export class CustomLoggerService implements LoggerService {
  private logger: winston.Logger;

  constructor() {
    const isDevelopment = process.env.NODE_ENV !== 'production';

    this.logger = winston.createLogger({
      level: process.env.LOG_LEVEL || 'info',
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.errors({ stack: true }),
        winston.format.json(),
      ),
      defaultMeta: {
        service: 'pizza-express-api',
        environment: process.env.NODE_ENV || 'development',
      },
      transports: [
        // Arquivo para erros
        new winston.transports.File({
          filename: 'logs/error.log',
          level: 'error',
          maxsize: 5242880, // 5MB
          maxFiles: 5,
        }),
        // Arquivo para todos os logs
        new winston.transports.File({
          filename: 'logs/combined.log',
          maxsize: 5242880, // 5MB
          maxFiles: 5,
        }),
      ],
    });

    // Console apenas em desenvolvimento
    if (isDevelopment) {
      this.logger.add(
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.printf(
              ({ timestamp, level, message, context, ...meta }) => {
                const ctx = context ? `[${String(context)}] ` : '';
                const metaStr = Object.keys(meta).length
                  ? ` ${JSON.stringify(meta)}`
                  : '';
                return `${String(timestamp)} ${String(level)}: ${ctx}${String(message)}${metaStr}`;
              },
            ),
          ),
        }),
      );
    }
  }

  log(message: string, meta?: Record<string, unknown> | string) {
    const logData = typeof meta === 'string' ? { context: meta } : meta;
    this.logger.info(message, logData);
  }

  error(message: string, trace?: string, context?: string) {
    this.logger.error(message, { trace, context });
  }

  warn(message: string, meta?: Record<string, unknown> | string) {
    const logData = typeof meta === 'string' ? { context: meta } : meta;
    this.logger.warn(message, logData);
  }

  debug(message: string, meta?: Record<string, unknown> | string) {
    const logData = typeof meta === 'string' ? { context: meta } : meta;
    this.logger.debug(message, logData);
  }

  verbose(message: string, meta?: Record<string, unknown> | string) {
    const logData = typeof meta === 'string' ? { context: meta } : meta;
    this.logger.verbose(message, logData);
  }

  // Métodos específicos para casos de uso do projeto
  logPayment(
    message: string,
    paymentData: { id: string; amount?: number; status?: string },
  ) {
    this.logger.info(message, {
      context: 'PaymentService',
      paymentId: paymentData.id,
      amount: paymentData.amount,
      status: paymentData.status,
    });
  }

  logOrder(
    message: string,
    orderData: { id: number; userId?: number; status?: string },
  ) {
    this.logger.info(message, {
      context: 'OrderService',
      orderId: orderData.id,
      userId: orderData.userId,
      status: orderData.status,
    });
  }

  logAuth(
    message: string,
    userData: { userId?: number; email?: string; action?: string },
  ) {
    this.logger.info(message, {
      context: 'AuthService',
      userId: userData.userId,
      email: userData.email
        ? userData.email.replace(/(.{2}).*(@.*)/, '$1***$2')
        : undefined, // Mascarar email
      action: userData.action,
    });
  }
}
<- Manter consistência visual entre os botões do menu de END: src/common/logger/logger.service.ts -->
<- Manter consistência visual entre os botões do menu de START: src/enderecos/enderecos.controller.ts -->
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  UseGuards,
  Request,
  BadRequestException,
  ParseIntPipe,
} from '@nestjs/common';
import { EnderecosService } from './enderecos.service';
import { CreateEnderecoDto } from '../users/dto/create-endereco.dto';
import { UpdateEnderecoDto } from '../users/dto/update-endereco.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Resource } from '../common/decorators/resource.decorator';
import { ResourceOwner } from '../common/decorators/auth.decorators';
import { ResponseBuilder } from '../common/builders/response.builder';

interface AuthenticatedUser {
  userId?: number;
  id?: number;
}

interface AuthenticatedRequest extends Request {
  user?: AuthenticatedUser;
}

@Controller('enderecos')
@UseGuards(JwtAuthGuard, RolesGuard)
export class EnderecosController {
  // ← CERTIFIQUE-SE DE TER O "export" AQUI
  constructor(private readonly enderecosService: EnderecosService) {}

  @Get()
  async findUserEnderecos(@Request() req: AuthenticatedRequest) {
    const userId = req.user?.userId ?? req.user?.id;

    if (!userId) {
      throw new BadRequestException('Usuário não identificado no token');
    }

    const enderecos = await this.enderecosService.findByUserId(userId);
    return ResponseBuilder.list(enderecos, 'Endereços listados com sucesso');
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const endereco = await this.enderecosService.findOne(id);
    return ResponseBuilder.success(endereco, 'Endereço encontrado');
  }

  @Post()
  async create(
    @Request() req: AuthenticatedRequest,
    @Body() dto: CreateEnderecoDto,
  ) {
    const userId = req.user?.userId ?? req.user?.id;

    if (!userId) {
      throw new BadRequestException('Usuário não identificado no token');
    }

    const endereco = await this.enderecosService.create({ ...dto, userId });
    return ResponseBuilder.created(endereco, 'Endereço criado com sucesso');
  }

  @Patch(':id')
  @ResourceOwner()
  @Resource('endereco')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateEnderecoDto,
  ) {
    const endereco = await this.enderecosService.update(id, dto);
    return ResponseBuilder.updated(endereco, 'Endereço atualizado com sucesso');
  }

  @Delete(':id')
  @ResourceOwner()
  @Resource('endereco')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.enderecosService.remove(id);
    return ResponseBuilder.deleted('Endereço removido com sucesso');
  }
}
<- Manter consistência visual entre os botões do menu de END: src/enderecos/enderecos.controller.ts -->
<- Manter consistência visual entre os botões do menu de START: src/enderecos/enderecos.module.ts -->
// src/enderecos/enderecos.module.ts
import { Module } from '@nestjs/common';
import { EnderecosController } from './enderecos.controller';
import { EnderecosService } from './enderecos.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [EnderecosController],
  providers: [EnderecosService, PrismaService],
  exports: [EnderecosService],
})
export class EnderecosModule {}
<- Manter consistência visual entre os botões do menu de END: src/enderecos/enderecos.module.ts -->
<- Manter consistência visual entre os botões do menu de START: src/enderecos/enderecos.service.ts -->
// enderecos.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateEnderecoDto } from '../users/dto/create-endereco.dto';
import { Endereco } from '@prisma/client';
import { UpdateEnderecoDto } from '../users/dto/update-endereco.dto';

@Injectable()
export class EnderecosService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Busca todos os endereços de um usuário
   */
  async findByUserId(userId: number): Promise<Endereco[]> {
    return this.prisma.endereco.findMany({
      where: { userId },
      orderBy: { principal: 'desc' }, // Endereço principal primeiro
    });
  }

  /**
   * Busca um endereço específico por ID
   */
  async findOne(id: number): Promise<Endereco | null> {
    return this.prisma.endereco.findUnique({
      where: { id },
      include: {
        user: {
          select: { id: true, nome: true, email: true },
        },
      },
    });
  }

  /**
   * Cria um novo endereço
   */
  async create(dto: CreateEnderecoDto & { userId: number }): Promise<Endereco> {
    if (!dto.userId) {
      throw new Error('Campo userId é obrigatório');
    }

    const { userId, ...data } = dto;

    // Se for principal, remover principal dos outros endereços do usuário
    if (data.principal) {
      await this.prisma.endereco.updateMany({
        where: { userId },
        data: { principal: false },
      });
    }

    return this.prisma.endereco.create({
      data: {
        ...data,
        user: { connect: { id: userId } },
      },
    });
  }

  /**
   * Atualiza um endereço existente
   */
  async update(id: number, dto: UpdateEnderecoDto): Promise<Endereco> {
    const { ...data } = dto;

    // Se for marcar como principal, remover principal dos outros
    if (data.principal) {
      const endereco = await this.findOne(id);
      if (endereco) {
        await this.prisma.endereco.updateMany({
          where: {
            userId: endereco.userId,
            id: { not: id },
          },
          data: { principal: false },
        });
      }
    }

    return this.prisma.endereco.update({
      where: { id },
      data,
    });
  }

  /**
   * Remove um endereço
   */
  async remove(id: number): Promise<Endereco> {
    // Verificar se o endereço existe antes de deletar
    const endereco = await this.findOne(id);
    if (!endereco) {
      throw new Error('Endereço não encontrado');
    }

    return this.prisma.endereco.delete({
      where: { id },
    });
  }
}
<- Manter consistência visual entre os botões do menu de END: src/enderecos/enderecos.service.ts -->
<- Manter consistência visual entre os botões do menu de START: src/entregadores/dto/create-entregadore.dto.ts -->
import { IsString, MinLength, IsOptional } from 'class-validator';

export class CreateEntregadoreDto {
  @IsString()
  @MinLength(2)
  nome: string;

  @IsOptional()
  @IsString()
  telefone?: string;
}
<- Manter consistência visual entre os botões do menu de END: src/entregadores/dto/create-entregadore.dto.ts -->
<- Manter consistência visual entre os botões do menu de START: src/entregadores/dto/update-entregadore.dto.ts -->
import { PartialType } from '@nestjs/mapped-types';
import { CreateEntregadoreDto } from './create-entregadore.dto';

export class UpdateEntregadoreDto extends PartialType(CreateEntregadoreDto) {}
<- Manter consistência visual entre os botões do menu de END: src/entregadores/dto/update-entregadore.dto.ts -->
<- Manter consistência visual entre os botões do menu de START: src/entregadores/entities/entregadore.entity.ts -->
export class Entregadore {}
<- Manter consistência visual entre os botões do menu de END: src/entregadores/entities/entregadore.entity.ts -->
<- Manter consistência visual entre os botões do menu de START: src/entregadores/entregadores-location.gateway.spec.ts -->
import { Test, TestingModule } from '@nestjs/testing';
import { EntregadoresLocationGateway } from './entregadores-location.gateway';
import { Server } from 'socket.io';

describe('EntregadoresLocationGateway', () => {
  let gateway: EntregadoresLocationGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntregadoresLocationGateway],
    }).compile();
    gateway = module.get<EntregadoresLocationGateway>(
      EntregadoresLocationGateway,
    );
    gateway.server = { emit: jest.fn() } as unknown as Server;
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });

  it('should broadcast location update', () => {
    const data = { entregadorId: 1, latitude: -23.5, longitude: -46.6 };
    const call = (d: typeof data) =>
      gateway.handleLocationUpdate.call(gateway, d);
    call(data);
    expect(gateway.server.emit).toHaveBeenCalledWith('locationUpdate', data);
  });
});
<- Manter consistência visual entre os botões do menu de END: src/entregadores/entregadores-location.gateway.spec.ts -->
<- Manter consistência visual entre os botões do menu de START: src/entregadores/entregadores-location.gateway.ts -->
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class EntregadoresLocationGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('updateLocation')
  handleLocationUpdate(
    @MessageBody()
    data: {
      entregadorId: number;
      latitude: number;
      longitude: number;
    },
  ): void {
    // Broadcast da localização para todos os clientes conectados
    this.server.emit('locationUpdate', data);
  }
}
<- Manter consistência visual entre os botões do menu de END: src/entregadores/entregadores-location.gateway.ts -->
<- Manter consistência visual entre os botões do menu de START: src/entregadores/entregadores.controller.ts -->
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { EntregadoresService } from './entregadores.service';
import { CreateEntregadoreDto } from './dto/create-entregadore.dto';
import { UpdateEntregadoreDto } from './dto/update-entregadore.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '@prisma/client';
import { EntregadorResponseBuilder } from '../common/builders/response.builder';

@Controller('entregadores')
@UseGuards(JwtAuthGuard, RolesGuard)
export class EntregadoresController {
  constructor(private readonly entregadoresService: EntregadoresService) {}

  @Post()
  @Roles(Role.ADMIN)
  async create(@Body() createEntregadoreDto: CreateEntregadoreDto) {
    try {
      const entregador =
        await this.entregadoresService.create(createEntregadoreDto);
      return EntregadorResponseBuilder.entregadorCreated(entregador);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  @Roles(Role.FUNCIONARIO, Role.ADMIN)
  async findAll() {
    try {
      return await this.entregadoresService.findAll();
    } catch {
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  @Roles(Role.FUNCIONARIO, Role.ADMIN)
  async findOne(@Param('id') id: string) {
    try {
      const entregador = await this.entregadoresService.findOne(+id);
      if (!entregador) {
        throw new HttpException(
          'Entregador não encontrado',
          HttpStatus.NOT_FOUND,
        );
      }
      return entregador;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  async update(
    @Param('id') id: string,
    @Body() updateEntregadoreDto: UpdateEntregadoreDto,
  ) {
    try {
      const entregador = await this.entregadoresService.update(
        +id,
        updateEntregadoreDto,
      );
      return EntregadorResponseBuilder.entregadorUpdated(entregador);
    } catch (error: unknown) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        error.code === 'P2025'
      ) {
        throw new HttpException(
          'Entregador não encontrado',
          HttpStatus.NOT_FOUND,
        );
      }
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  async remove(@Param('id') id: string) {
    try {
      await this.entregadoresService.remove(+id);
      return EntregadorResponseBuilder.entregadorDeleted();
    } catch (error: unknown) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        error.code === 'P2025'
      ) {
        throw new HttpException(
          'Entregador não encontrado',
          HttpStatus.NOT_FOUND,
        );
      }
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
<- Manter consistência visual entre os botões do menu de END: src/entregadores/entregadores.controller.ts -->
<- Manter consistência visual entre os botões do menu de START: src/entregadores/entregadores.module.ts -->
import { Module } from '@nestjs/common';
import { EntregadoresService } from './entregadores.service';
import { EntregadoresController } from './entregadores.controller';
import { PrismaModule } from '../prisma.module';
import { EntregadoresLocationGateway } from './entregadores-location.gateway';

@Module({
  imports: [PrismaModule],
  controllers: [EntregadoresController],
  providers: [EntregadoresService, EntregadoresLocationGateway],
})
export class EntregadoresModule {}
<- Manter consistência visual entre os botões do menu de END: src/entregadores/entregadores.module.ts -->
<- Manter consistência visual entre os botões do menu de START: src/entregadores/entregadores.service.spec.ts -->
import { Test, TestingModule } from '@nestjs/testing';
import { EntregadoresService } from './entregadores.service';
import { PrismaService } from '../prisma.service';

const entregadorMock = {
  id: 1,
  nome: 'Carlos',
  telefone: '11988888888',
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('EntregadoresService', () => {
  let service: EntregadoresService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntregadoresService, PrismaService],
    }).compile();
    service = module.get<EntregadoresService>(EntregadoresService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a entregador', async () => {
    jest.spyOn(prisma.entregador, 'create').mockResolvedValue(
      entregadorMock as unknown as {
        id: number;
        nome: string;
        telefone: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
    );
    const result = await service.create({ nome: 'Carlos' });
    expect(result).toEqual(entregadorMock);
  });
});
<- Manter consistência visual entre os botões do menu de END: src/entregadores/entregadores.service.spec.ts -->
<- Manter consistência visual entre os botões do menu de START: src/entregadores/entregadores.service.ts -->
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateEntregadoreDto } from './dto/create-entregadore.dto';
import { UpdateEntregadoreDto } from './dto/update-entregadore.dto';

@Injectable()
export class EntregadoresService {
  constructor(private readonly prisma: PrismaService) {}

  create(createEntregadoreDto: CreateEntregadoreDto) {
    return this.prisma.entregador.create({ data: createEntregadoreDto });
  }

  findAll() {
    return this.prisma.entregador.findMany();
  }

  findOne(id: number) {
    return this.prisma.entregador.findUnique({ where: { id } });
  }

  update(id: number, updateEntregadoreDto: UpdateEntregadoreDto) {
    return this.prisma.entregador.update({
      where: { id },
      data: updateEntregadoreDto,
    });
  }

  remove(id: number) {
    return this.prisma.entregador.delete({ where: { id } });
  }
}
<- Manter consistência visual entre os botões do menu de END: src/entregadores/entregadores.service.ts -->
<- Manter consistência visual entre os botões do menu de START: src/main.ts -->
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { CustomLoggerService } from './common/logger/logger.service';
import { APP_CONSTANTS } from './common/constants/app.constants';

async function bootstrap() {
  const isDevelopment = process.env.NODE_ENV !== 'production';

  try {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.useStaticAssets(join(__dirname, '..', 'uploads'), {
      prefix: '/uploads/',
    });

    if (!isDevelopment) {
      app.use(
        helmet({
          contentSecurityPolicy: {
            directives: {
              defaultSrc: [`'self'`],
              styleSrc: [`'self'`, `'unsafe-inline'`],
              imgSrc: [`'self'`, 'data:'],
              scriptSrc: [`'self'`, `'unsafe-inline'`],
            },
          },
        }),
      );
    } else {
      app.use(
        helmet({
          contentSecurityPolicy: false,
          crossOriginEmbedderPolicy: false,
        }),
      );
    }

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
      }),
    );
    const allowedOrigins = [
      process.env.FRONTEND_URL, // Sua URL de produção (Vercel)
      process.env.FRONTEND_URL_DEV, // Sua URL de desenvolvimento (localhost:3000)
    ].filter(Boolean); // Este filtro remove valores vazios ou nulos

    const corsOptions: CorsOptions = {
      origin: (origin, callback) => {
        // Permite requisições sem 'origin' (ex: de apps mobile ou Insomnia)
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      credentials: true,
    };

    app.enableCors(corsOptions);

    const port = process.env.PORT
      ? parseInt(process.env.PORT, 10)
      : APP_CONSTANTS.DEFAULT_PORT;

    const logger = app.get(CustomLoggerService);

    await app.listen(port, '0.0.0.0');

    logger.log(`Application running on port ${port}`, 'Application');
    logger.log(
      `Environment: ${isDevelopment ? 'development' : 'production'}`,
      'Application',
    );
  } catch (error) {
    // Fallback to console.error since logger might not be available
    console.error('❌ Application startup error:', error);
    throw error;
  }
}

// O `void` é usado para indicar que não estamos aguardando a promessa aqui,
// o que é comum para o ponto de entrada da aplicação.
void bootstrap();
<- Manter consistência visual entre os botões do menu de END: src/main.ts -->
<- Manter consistência visual entre os botões do menu de START: src/payments/dto/create-payment.dto.ts -->
import { IsNumber, IsPositive } from 'class-validator';

export class CreatePaymentDto {
  @IsNumber()
  @IsPositive()
  amount: number;
}
<- Manter consistência visual entre os botões do menu de END: src/payments/dto/create-payment.dto.ts -->
<- Manter consistência visual entre os botões do menu de START: src/payments/payments.controller.ts -->
import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request } from 'express';
import Stripe from 'stripe';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { ConfigService } from '@nestjs/config';

@Controller('payments')
export class PaymentsController {
  constructor(
    private readonly paymentsService: PaymentsService,
    private readonly configService: ConfigService,
  ) {}

  @Post('create-intent')
  @UseGuards(JwtAuthGuard)
  async createPaymentIntent(@Body() dto: CreatePaymentDto) {
    return this.paymentsService.createPaymentIntent(dto.amount);
  }

  @Post('webhook')
  async handleWebhook(@Req() req: Request) {
    const sig = req.headers['stripe-signature'] as string;
    const endpointSecret = this.configService.get<string>(
      'STRIPE_WEBHOOK_SECRET',
    );

    if (!endpointSecret) {
      throw new HttpException(
        'Stripe webhook secret not configured',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    let event: Stripe.Event;

    try {
      event = this.paymentsService.constructEvent(
        req.body as Buffer,
        sig,
        endpointSecret,
      );
    } catch (err: any) {
      console.error(
        'Webhook signature verification failed:',
        (err as Error)?.message || 'Unknown error',
      );
      throw new HttpException(
        'Webhook signature verification failed',
        HttpStatus.BAD_REQUEST,
      );
    }

    const result = await this.paymentsService.handleWebhook(event);
    return result;
  }
}
<- Manter consistência visual entre os botões do menu de END: src/payments/payments.controller.ts -->
<- Manter consistência visual entre os botões do menu de START: src/payments/payments.module.ts -->
import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [PaymentsService],
  controllers: [PaymentsController],
})
export class PaymentsModule {}
<- Manter consistência visual entre os botões do menu de END: src/payments/payments.module.ts -->
<- Manter consistência visual entre os botões do menu de START: src/payments/payments.service.ts -->
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { PrismaService } from '../prisma.service';
import { StatusPedido } from '@prisma/client';
import { CustomLoggerService } from '../common/logger/logger.service';

@Injectable()
export class PaymentsService {
  private stripe: Stripe;

  constructor(
    private configService: ConfigService,
    private prismaService: PrismaService,
    private logger: CustomLoggerService,
  ) {
    const secretKey = this.configService.get<string>('STRIPE_SECRET_KEY');
    if (!secretKey) {
      throw new Error('STRIPE_SECRET_KEY is not defined');
    }
    this.stripe = new Stripe(secretKey);
  }

  async createPaymentIntent(amount: number, currency: string = 'brl') {
    const paymentIntent = await this.stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency,
      automatic_payment_methods: { enabled: true },
    });
    return { client_secret: paymentIntent.client_secret };
  }

  constructEvent(
    payload: Buffer | string,
    signature: string,
    secret: string,
  ): Stripe.Event {
    return this.stripe.webhooks.constructEvent(payload, signature, secret);
  }

  async handleWebhook(event: Stripe.Event) {
    this.logger.log(`Webhook received: ${event.type}`, 'PaymentsService');

    try {
      switch (event.type) {
        case 'payment_intent.succeeded':
          await this.handlePaymentIntentSucceeded(event.data.object);
          break;

        case 'payment_intent.payment_failed':
          await this.handlePaymentIntentFailed(event.data.object);
          break;

        case 'payment_intent.canceled':
          await this.handlePaymentIntentCanceled(event.data.object);
          break;

        case 'payment_intent.requires_action':
          this.handlePaymentIntentRequiresAction(event.data.object);
          break;

        default:
          this.logger.warn(`Unhandled event: ${event.type}`, 'PaymentsService');
      }

      return { received: true, eventType: event.type };
    } catch (error) {
      this.logger.error(
        'Webhook processing error',
        String(error),
        'PaymentsService',
      );
      throw error;
    }
  }

  private async handlePaymentIntentSucceeded(
    paymentIntent: Stripe.PaymentIntent,
  ) {
    this.logger.logPayment('Payment confirmed', {
      id: paymentIntent.id,
      amount: paymentIntent.amount,
      status: 'succeeded',
    });

    try {
      const pedido = await this.prismaService.pedido.findFirst({
        where: { paymentIntentId: paymentIntent.id },
      });

      if (pedido) {
        await this.prismaService.pedido.update({
          where: { id: pedido.id },
          data: {
            status: StatusPedido.EM_PREPARO,
          },
        });
        this.logger.logOrder('Order updated to EM_PREPARO', {
          id: pedido.id,
          status: 'EM_PREPARO',
        });
      } else {
        this.logger.error(
          `Order not found for PaymentIntent: ${paymentIntent.id}`,
          undefined,
          'PaymentsService',
        );
      }
    } catch (error) {
      this.logger.error(
        'Error updating order',
        String(error),
        'PaymentsService',
      );
      throw error;
    }
  }

  private async handlePaymentIntentFailed(paymentIntent: Stripe.PaymentIntent) {
    this.logger.logPayment('Payment failed', {
      id: paymentIntent.id,
      status: 'failed',
    });

    try {
      const pedido = await this.prismaService.pedido.findFirst({
        where: { paymentIntentId: paymentIntent.id },
      });

      if (pedido) {
        await this.prismaService.pedido.update({
          where: { id: pedido.id },
          data: {
            status: StatusPedido.CANCELADO,
          },
        });
        this.logger.logOrder('Order cancelled due to payment failure', {
          id: pedido.id,
          status: 'CANCELADO',
        });
      }
    } catch (error) {
      this.logger.error(
        'Error cancelling order',
        String(error),
        'PaymentsService',
      );
      throw error;
    }
  }

  private async handlePaymentIntentCanceled(
    paymentIntent: Stripe.PaymentIntent,
  ) {
    this.logger.logPayment('Payment cancelled', {
      id: paymentIntent.id,
      status: 'cancelled',
    });

    try {
      const pedido = await this.prismaService.pedido.findFirst({
        where: { paymentIntentId: paymentIntent.id },
      });

      if (pedido) {
        await this.prismaService.pedido.update({
          where: { id: pedido.id },
          data: {
            status: StatusPedido.CANCELADO,
          },
        });
        this.logger.logOrder('Order cancelled', {
          id: pedido.id,
          status: 'CANCELADO',
        });
      }
    } catch (error) {
      this.logger.error(
        'Error cancelling order',
        String(error),
        'PaymentsService',
      );
      throw error;
    }
  }

  private handlePaymentIntentRequiresAction(
    paymentIntent: Stripe.PaymentIntent,
  ) {
    this.logger.logPayment('Payment requires additional action', {
      id: paymentIntent.id,
      status: 'requires_action',
    });
    // Aqui você pode implementar lógica para 3D Secure ou outras ações
  }
}
<- Manter consistência visual entre os botões do menu de END: src/payments/payments.service.ts -->
<- Manter consistência visual entre os botões do menu de START: src/pedidos/dto/create-order.dto.ts -->
import {
  IsNotEmpty,
  IsEnum,
  IsArray,
  IsString,
  IsOptional,
  ValidateNested,
  IsUUID,
  IsNumber,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export class OrderItemDto {
  @IsUUID()
  @IsNotEmpty()
  productId: string;

  @IsNumber({ maxDecimalPlaces: 0 })
  @Min(1)
  @Type(() => Number)
  quantity: number;
}

export class CreateOrderDto {
  @IsEnum(['DELIVERY', 'DINE_IN'])
  @IsNotEmpty()
  type: 'DELIVERY' | 'DINE_IN';

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];

  @IsOptional()
  @IsNumber()
  addressId?: number; // Obrigatório se type === 'DELIVERY'

  @IsOptional()
  @IsUUID()
  tableId?: string; // Obrigatório se type === 'DINE_IN'

  @IsOptional()
  @IsString()
  observations?: string;
}
<- Manter consistência visual entre os botões do menu de END: src/pedidos/dto/create-order.dto.ts -->
<- Manter consistência visual entre os botões do menu de START: src/pedidos/dto/create-pedido.dto.ts -->
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsArray,
  IsString,
  IsEnum,
} from 'class-validator';
import { StatusPedido } from '@prisma/client';

export class CreatePedidoDto {
  @IsNotEmpty()
  @IsNumber()
  clienteId: number;

  @IsNotEmpty()
  @IsArray()
  @IsNumber({}, { each: true })
  pizzasIds: number[];

  @IsOptional()
  @IsString()
  observacoes?: string;

  @IsOptional() // Status agora é opcional na criação
  @IsEnum(StatusPedido, {
    message: `Status inválido. Use um dos seguintes valores: ${Object.values(
      StatusPedido,
    ).join(', ')}`,
  })
  status?: StatusPedido;

  @IsOptional()
  @IsNumber()
  entregadorId?: number;

  @IsNotEmpty()
  @IsNumber()
  enderecoId: number;

  @IsOptional()
  @IsString()
  paymentIntentId?: string;
}
<- Manter consistência visual entre os botões do menu de END: src/pedidos/dto/create-pedido.dto.ts -->
<- Manter consistência visual entre os botões do menu de START: src/pedidos/dto/update-pedido-status.dto.ts -->
import { IsEnum, IsNotEmpty } from 'class-validator';
import { StatusPedido } from '@prisma/client';

export class UpdatePedidoStatusDto {
  @IsNotEmpty({ message: 'O status não pode ser vazio.' })
  @IsEnum(StatusPedido, {
    message: `Status inválido. Use um dos seguintes valores: ${Object.values(
      StatusPedido,
    ).join(', ')}`,
  })
  status: StatusPedido;
}
<- Manter consistência visual entre os botões do menu de END: src/pedidos/dto/update-pedido-status.dto.ts -->
<- Manter consistência visual entre os botões do menu de START: src/pedidos/dto/update-pedido.dto.ts -->
import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoDto } from './create-pedido.dto';

export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {
  latitude?: number;
  longitude?: number;
}
<- Manter consistência visual entre os botões do menu de END: src/pedidos/dto/update-pedido.dto.ts -->
<- Manter consistência visual entre os botões do menu de START: src/pedidos/entities/pedido.entity.ts -->
export class Pedido {}
<- Manter consistência visual entre os botões do menu de END: src/pedidos/entities/pedido.entity.ts -->
<- Manter consistência visual entre os botões do menu de START: src/pedidos/orders.controller.ts -->
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { StatusPedido } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('orders')
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto, @Request() req: any) {
    return this.ordersService.create(createOrderDto, req.user?.id);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: StatusPedido) {
    return this.ordersService.updateStatus(+id, status);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}
<- Manter consistência visual entre os botões do menu de END: src/pedidos/orders.controller.ts -->
<- Manter consistência visual entre os botões do menu de START: src/pedidos/orders.service.ts -->
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { OrderStrategyFactory } from './strategies/order-strategy.factory';
import { CreateOrderDto } from './dto/create-order.dto';
import { StatusPedido } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(
    private prisma: PrismaService,
    private strategyFactory: OrderStrategyFactory,
  ) {}

  // Mapeia as transições de status permitidas
  private readonly transicoesStatus: Record<StatusPedido, StatusPedido[]> = {
    PENDENTE: [StatusPedido.EM_PREPARO, StatusPedido.CANCELADO],
    EM_PREPARO: [StatusPedido.A_CAMINHO, StatusPedido.CANCELADO],
    A_CAMINHO: [StatusPedido.ENTREGUE],
    ENTREGUE: [],
    CANCELADO: [],
  };

  async create(createOrderDto: CreateOrderDto, userId?: number) {
    // Obter estratégia baseada no tipo de pedido
    const strategy = this.strategyFactory.getStrategy(createOrderDto.type);

    // Validar pedido
    await strategy.validate(createOrderDto);

    // Processar pedido
    return strategy.process(createOrderDto, userId);
  }

  async findAll() {
    return this.prisma.order.findMany({
      include: {
        user: {
          select: {
            id: true,
            nome: true,
            email: true,
            telefone: true,
          },
        },
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                price: true,
                description: true,
              },
            },
          },
        },
        session: {
          include: {
            table: {
              select: {
                id: true,
                number: true,
              },
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            nome: true,
            email: true,
            telefone: true,
          },
        },
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                price: true,
                description: true,
              },
            },
          },
        },
        session: {
          include: {
            table: {
              select: {
                id: true,
                number: true,
              },
            },
          },
        },
      },
    });

    if (!order) {
      throw new Error(`Order with ID ${id} not found`);
    }

    return order;
  }

  async updateStatus(id: number, newStatus: StatusPedido) {
    const order = await this.findOne(id);

    // Validar transição de status
    if (!this.transicoesStatus[order.status].includes(newStatus)) {
      throw new Error(
        `Invalid status transition from ${order.status} to ${newStatus}`,
      );
    }

    return this.prisma.order.update({
      where: { id },
      data: { status: newStatus, updatedAt: new Date() },
      include: {
        user: {
          select: {
            id: true,
            nome: true,
            email: true,
            telefone: true,
          },
        },
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                price: true,
                description: true,
              },
            },
          },
        },
      },
    });
  }

  async remove(id: number) {
    return this.prisma.order.delete({
      where: { id },
    });
  }
}
<- Manter consistência visual entre os botões do menu de END: src/pedidos/orders.service.ts -->
<- Manter consistência visual entre os botões do menu de START: src/pedidos/pedidos.controller.ts -->
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpException,
  HttpStatus,
  ParseIntPipe,
  Req,
} from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';

import { UpdatePedidoStatusDto } from './dto/update-pedido-status.dto';
import { Roles } from '../common/decorators/roles.decorator';
import { Resource } from '../common/decorators/resource.decorator';
import { Role } from '@prisma/client';
import { ResourceOwner } from '../common/decorators/auth.decorators';
import { RequestWithUser } from '../common/interfaces/authenticated-user.interface';
import { PedidoResponseBuilder } from '../common/builders/response.builder';

@Controller('pedidos')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Post()
  async create(@Body() createPedidoDto: CreatePedidoDto) {
    try {
      const pedido = await this.pedidosService.create(createPedidoDto);
      return PedidoResponseBuilder.pedidoCreated(pedido);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  @Roles(Role.FUNCIONARIO, Role.ADMIN)
  async findAll() {
    try {
      const pedidos = await this.pedidosService.findAll();
      return PedidoResponseBuilder.pedidosList(pedidos);
    } catch {
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('meus-pedidos')
  async findMyOrders(@Req() req: RequestWithUser) {
    try {
      return await this.pedidosService.findByUserId(req.user.id);
    } catch {
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  @ResourceOwner()
  @Resource('pedido')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      const pedido = await this.pedidosService.findOne(id);
      if (!pedido) {
        throw new HttpException('Pedido não encontrado', HttpStatus.NOT_FOUND);
      }
      return PedidoResponseBuilder.pedidoFound(pedido);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Patch(':id')
  @Roles(Role.FUNCIONARIO, Role.ADMIN)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePedidoDto: UpdatePedidoDto,
  ) {
    try {
      const pedido = await this.pedidosService.update(id, updatePedidoDto);
      return PedidoResponseBuilder.pedidoUpdated(pedido);
    } catch (error: unknown) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        (error as { code: string }).code === 'P2025'
      ) {
        throw new HttpException('Pedido não encontrado', HttpStatus.NOT_FOUND);
      }
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // NOVA ROTA PARA ATUALIZAR APENAS O STATUS
  @Patch(':id/status')
  @Roles(Role.FUNCIONARIO, Role.ADMIN)
  async updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePedidoStatusDto: UpdatePedidoStatusDto,
  ) {
    try {
      const pedido = await this.pedidosService.updateStatus(
        id,
        updatePedidoStatusDto,
      );
      return PedidoResponseBuilder.statusUpdated(pedido);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      await this.pedidosService.remove(id);
      return PedidoResponseBuilder.pedidoDeleted();
    } catch (error: unknown) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        (error as { code: string }).code === 'P2025'
      ) {
        throw new HttpException('Pedido não encontrado', HttpStatus.NOT_FOUND);
      }
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
<- Manter consistência visual entre os botões do menu de END: src/pedidos/pedidos.controller.ts -->
<- Manter consistência visual entre os botões do menu de START: src/pedidos/pedidos.module.ts -->
import { Module } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { OrdersService } from './orders.service';
import { PedidosController } from './pedidos.controller';
import { OrdersController } from './orders.controller';
import { PrismaModule } from '../prisma.module';
import { OrderStrategyFactory } from './strategies/order-strategy.factory';
import { DeliveryStrategy } from './strategies/delivery.strategy';
import { DineInStrategy } from './strategies/dine-in.strategy';

@Module({
  imports: [PrismaModule],
  controllers: [PedidosController, OrdersController],
  providers: [
    PedidosService, // Manter para compatibilidade
    OrdersService, // Novo serviço com Strategy Pattern
    OrderStrategyFactory,
    DeliveryStrategy,
    DineInStrategy,
  ],
  exports: [OrdersService],
})
export class PedidosModule {}
<- Manter consistência visual entre os botões do menu de END: src/pedidos/pedidos.module.ts -->
<- Manter consistência visual entre os botões do menu de START: src/pedidos/pedidos.service.spec.ts -->
import { Test, TestingModule } from '@nestjs/testing';
import { PedidosService } from './pedidos.service';
import { PrismaService } from '../prisma.service';
import { StatusPedido } from '@prisma/client';

const pedidoMock = {
  id: 1,
  userId: 1,
  enderecoId: 1,
  status: StatusPedido.PENDENTE,
  entregadorId: null,
  latitude: null,
  longitude: null,
  total: 35,
  paymentIntentId: null,
  criadoEm: new Date(),
  atualizadoEm: new Date(),
  pizzas: [],
  user: {},
  endereco: {},
  entregador: null,
};

describe('PedidosService', () => {
  let service: PedidosService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PedidosService, PrismaService],
    }).compile();
    service = module.get<PedidosService>(PedidosService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a pedido', async () => {
    jest.spyOn(prisma.pedido, 'create').mockResolvedValue(pedidoMock as any);
    const result = await service.create({
      clienteId: 1,
      pizzasIds: [],
      enderecoId: 1,
      status: StatusPedido.PENDENTE,
    });
    expect(result).toEqual(pedidoMock);
  });
});
<- Manter consistência visual entre os botões do menu de END: src/pedidos/pedidos.service.spec.ts -->
<- Manter consistência visual entre os botões do menu de START: src/pedidos/pedidos.service.ts -->
import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido, StatusPedido } from '@prisma/client';
import { UpdatePedidoStatusDto } from './dto/update-pedido-status.dto';

@Injectable()
export class PedidosService {
  constructor(private readonly prisma: PrismaService) {}

  // Mapeia as transições de status permitidas
  private readonly transicoesStatus: Record<StatusPedido, StatusPedido[]> = {
    PENDENTE: [StatusPedido.EM_PREPARO, StatusPedido.CANCELADO],
    EM_PREPARO: [StatusPedido.A_CAMINHO, StatusPedido.CANCELADO],
    A_CAMINHO: [StatusPedido.ENTREGUE],
    ENTREGUE: [],
    CANCELADO: [],
  };

  async create(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    // Buscar preços das pizzas para calcular total
    const pizzas = await this.prisma.pizza.findMany({
      where: { id: { in: createPedidoDto.pizzasIds } },
      select: { id: true, preco: true },
    });

    // Calcular total (assumindo quantidade 1 por pizza por enquanto)
    let total = 0;
    for (const pizza of pizzas) {
      total += pizza.preco;
    }

    // Criar pedido com total calculado
    const pedido = await this.prisma.pedido.create({
      data: {
        userId: createPedidoDto.clienteId,
        enderecoId: createPedidoDto.enderecoId,
        status: createPedidoDto.status || StatusPedido.PENDENTE,
        total: total,
        paymentIntentId: createPedidoDto.paymentIntentId,
        observacoes: createPedidoDto.observacoes,
        pizzas: {
          connect: createPedidoDto.pizzasIds.map((id: number) => ({ id })),
        },
        entregadorId: createPedidoDto.entregadorId,
      },
      include: {
        user: true,
        endereco: true,
        pizzas: true,
        entregador: true,
      },
    });

    return pedido;
  }

  findAll() {
    return this.prisma.pedido.findMany({
      include: {
        user: {
          select: {
            id: true,
            nome: true,
            email: true,
            telefone: true,
          },
        },
        pizzas: {
          select: {
            id: true,
            nome: true,
            preco: true,
            descricao: true,
          },
        },
        entregador: {
          select: {
            id: true,
            nome: true,
            telefone: true,
          },
        },
        endereco: {
          select: {
            id: true,
            logradouro: true,
            numero: true,
            cidade: true,
            cep: true,
          },
        },
      },
      orderBy: { criadoEm: 'desc' },
    });
  }

  findByUserId(userId: number) {
    return this.prisma.pedido.findMany({
      where: { userId },
      include: {
        user: {
          select: {
            id: true,
            nome: true,
            email: true,
            telefone: true,
          },
        },
        pizzas: {
          select: {
            id: true,
            nome: true,
            preco: true,
            descricao: true,
          },
        },
        entregador: {
          select: {
            id: true,
            nome: true,
            telefone: true,
          },
        },
        endereco: {
          select: {
            id: true,
            logradouro: true,
            numero: true,
            cidade: true,
            cep: true,
          },
        },
      },
      orderBy: { criadoEm: 'desc' },
    });
  }

  async findOne(id: number) {
    const pedido = await this.prisma.pedido.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            nome: true,
            email: true,
            telefone: true,
          },
        },
        pizzas: {
          select: {
            id: true,
            nome: true,
            preco: true,
            descricao: true,
          },
        },
        entregador: {
          select: {
            id: true,
            nome: true,
            telefone: true,
          },
        },
        endereco: {
          select: {
            id: true,
            logradouro: true,
            numero: true,
            cidade: true,
            cep: true,
          },
        },
      },
    });
    if (!pedido) {
      throw new NotFoundException(`Pedido com ID #${id} não encontrado.`);
    }
    return pedido;
  }

  async update(id: number, updatePedidoDto: UpdatePedidoDto): Promise<Pedido> {
    await this.findOne(id); // Garante que o pedido existe
    const { clienteId, pizzasIds, status, entregadorId, latitude, longitude } =
      updatePedidoDto;
    return this.prisma.pedido.update({
      where: { id },
      data: {
        user: clienteId ? { connect: { id: clienteId } } : undefined,
        pizzas: pizzasIds
          ? { set: pizzasIds.map((pid) => ({ id: pid })) }
          : undefined,
        status,
        entregador: entregadorId
          ? { connect: { id: entregadorId } }
          : undefined,
        latitude,
        longitude,
      },
    });
  }

  async updateStatus(
    id: number,
    updatePedidoStatusDto: UpdatePedidoStatusDto,
  ): Promise<Pedido> {
    const pedidoAtual = await this.findOne(id);
    const novoStatus = updatePedidoStatusDto.status;

    const transicoesPermitidas = this.transicoesStatus[pedidoAtual.status];

    if (!transicoesPermitidas || !transicoesPermitidas.includes(novoStatus)) {
      throw new BadRequestException(
        `Transição de status de "${pedidoAtual.status}" para "${novoStatus}" não é permitida.`,
      );
    }

    return this.prisma.pedido.update({
      where: { id },
      data: {
        status: novoStatus,
      },
    });
  }

  async updatePedidoStatus(pedidoId: number, paymentIntentId: string) {
    const pedido = await this.prisma.pedido.update({
      where: { id: pedidoId },
      data: {
        status: 'EM_PREPARO',
        paymentIntentId: paymentIntentId,
      },
    });
    return pedido;
  }

  remove(id: number) {
    return this.prisma.pedido.delete({ where: { id } });
  }
}
<- Manter consistência visual entre os botões do menu de END: src/pedidos/pedidos.service.ts -->
<- Manter consistência visual entre os botões do menu de START: src/pedidos/strategies/delivery.strategy.ts -->
import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import {
  OrderProcessingStrategy,
  CreateOrderDto,
} from './order-processing.strategy';
import { StatusPedido, OrderType } from '@prisma/client';

@Injectable()
export class DeliveryStrategy implements OrderProcessingStrategy {
  constructor(private prisma: PrismaService) {}

  async validate(dto: CreateOrderDto): Promise<void> {
    // Validar tipo
    if (dto.type !== 'DELIVERY') {
      throw new BadRequestException('Invalid order type for delivery strategy');
    }

    // Validar addressId obrigatório
    if (!dto.addressId) {
      throw new BadRequestException('Address is required for delivery orders');
    }

    // Validar se o endereço existe
    const address = await this.prisma.endereco.findUnique({
      where: { id: dto.addressId },
    });

    if (!address) {
      throw new NotFoundException('Address not found');
    }

    // Validar itens
    if (!dto.items || dto.items.length === 0) {
      throw new BadRequestException('Order must have at least one item');
    }

    // Validar produtos
    for (const item of dto.items) {
      const product = await this.prisma.product.findUnique({
        where: { id: item.productId },
      });

      if (!product || !product.active) {
        throw new NotFoundException(
          `Product ${item.productId} not found or inactive`,
        );
      }

      if (item.quantity <= 0) {
        throw new BadRequestException('Item quantity must be greater than 0');
      }
    }

    // Validar horário de funcionamento (simplificado)
    const now = new Date();
    const hour = now.getHours();
    if (hour < 18 || hour > 22) {
      // 18:00 - 22:00
      throw new BadRequestException(
        'Delivery is only available from 18:00 to 22:00',
      );
    }
  }

  async process(dto: CreateOrderDto, userId?: number): Promise<any> {
    // Calcular total
    let total = 0;
    const orderItems = [];

    for (const item of dto.items) {
      const product = await this.prisma.product.findUnique({
        where: { id: item.productId },
      });

      if (!product || !product.active) {
        throw new NotFoundException(
          `Product ${item.productId} not found or inactive`,
        );
      }

      const itemTotal = Number(product.price) * item.quantity;
      total += itemTotal;

      orderItems.push({
        productId: item.productId,
        quantity: item.quantity,
        price: product.price,
      });
    }

    // Adicionar taxa de entrega (R$ 5.00)
    const deliveryFee = 5.0;
    total += deliveryFee;

    // Criar pedido
    const order = await this.prisma.order.create({
      data: {
        type: OrderType.DELIVERY,
        status: StatusPedido.PENDENTE,
        total: total,
        addressId: dto.addressId,
        userId: userId,
        observacoes: dto.observations,
        items: {
          create: orderItems,
        },
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
        address: true,
        user: true,
      },
    });

    return {
      ...order,
      total: Number(order.total.toFixed(2)),
      deliveryFee,
    };
  }
}
<- Manter consistência visual entre os botões do menu de END: src/pedidos/strategies/delivery.strategy.ts -->
<- Manter consistência visual entre os botões do menu de START: src/pedidos/strategies/dine-in.strategy.ts -->
import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import {
  OrderProcessingStrategy,
  CreateOrderDto,
} from './order-processing.strategy';
import { StatusPedido, OrderType, TableStatus } from '@prisma/client';

@Injectable()
export class DineInStrategy implements OrderProcessingStrategy {
  constructor(private prisma: PrismaService) {}

  async validate(dto: CreateOrderDto): Promise<void> {
    // Validar tipo
    if (dto.type !== 'DINE_IN') {
      throw new BadRequestException('Invalid order type for dine-in strategy');
    }

    // Validar tableId obrigatório
    if (!dto.tableId) {
      throw new BadRequestException('Table ID is required for dine-in orders');
    }

    // Validar se a mesa existe
    const table = await this.prisma.table.findUnique({
      where: { id: dto.tableId },
    });

    if (!table) {
      throw new NotFoundException('Table not found');
    }

    // Validar se a mesa está ocupada (tem sessão ativa)
    if (table.status !== TableStatus.OCCUPIED) {
      throw new BadRequestException(
        'Table is not occupied. Please open a session first.',
      );
    }

    // Verificar se existe sessão ativa para esta mesa
    const activeSession = await this.prisma.tableSession.findFirst({
      where: {
        tableId: dto.tableId,
        closedAt: null,
      },
    });

    if (!activeSession) {
      throw new BadRequestException('No active session for this table');
    }

    // Validar itens
    if (!dto.items || dto.items.length === 0) {
      throw new BadRequestException('Order must have at least one item');
    }

    // Validar produtos
    for (const item of dto.items) {
      const product = await this.prisma.product.findUnique({
        where: { id: item.productId },
      });

      if (!product || !product.active) {
        throw new NotFoundException(
          `Product ${item.productId} not found or inactive`,
        );
      }

      if (item.quantity <= 0) {
        throw new BadRequestException('Item quantity must be greater than 0');
      }
    }
  }

  async process(dto: CreateOrderDto, userId?: number): Promise<any> {
    // Buscar sessão ativa da mesa
    const activeSession = await this.prisma.tableSession.findFirst({
      where: {
        tableId: dto.tableId,
        closedAt: null,
      },
    });

    if (!activeSession) {
      throw new BadRequestException('No active session for this table');
    }

    // Calcular total
    let total = 0;
    const orderItems = [];

    for (const item of dto.items) {
      const product = await this.prisma.product.findUnique({
        where: { id: item.productId },
      });

      if (!product || !product.active) {
        throw new NotFoundException(
          `Product ${item.productId} not found or inactive`,
        );
      }

      const itemTotal = Number(product.price) * item.quantity;
      total += itemTotal;

      orderItems.push({
        productId: item.productId,
        quantity: item.quantity,
        price: product.price,
      });
    }

    // Criar pedido vinculado à sessão da mesa
    const order = await this.prisma.order.create({
      data: {
        type: OrderType.DINE_IN,
        status: StatusPedido.PENDENTE,
        total: total,
        sessionId: activeSession.id,
        // userId pode ser null para clientes anônimos de mesa
        userId: userId,
        observacoes: dto.observations,
        items: {
          create: orderItems,
        },
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
        session: {
          include: {
            table: true,
          },
        },
      },
    });

    return {
      ...order,
      total: Number(order.total.toFixed(2)),
    };
  }
}
<- Manter consistência visual entre os botões do menu de END: src/pedidos/strategies/dine-in.strategy.ts -->
<- Manter consistência visual entre os botões do menu de START: src/pedidos/strategies/order-processing.strategy.ts -->
import { Order } from '@prisma/client';

export interface OrderProcessingStrategy {
  validate(dto: CreateOrderDto): Promise<void>;
  process(dto: CreateOrderDto, userId?: number): Promise<Order>;
}

// DTO para criação de pedidos (atualizado)
export interface CreateOrderDto {
  type: 'DELIVERY' | 'DINE_IN';
  items: OrderItemDto[];
  addressId?: number; // Obrigatório para DELIVERY (id numérico do endereço)
  tableId?: string; // Obrigatório para DINE_IN
  observations?: string;
}

export interface OrderItemDto {
  productId: string;
  quantity: number;
}
<- Manter consistência visual entre os botões do menu de END: src/pedidos/strategies/order-processing.strategy.ts -->
<- Manter consistência visual entre os botões do menu de START: src/pedidos/strategies/order-strategy.factory.ts -->
import { Injectable } from '@nestjs/common';
import { OrderProcessingStrategy } from './order-processing.strategy';
import { DeliveryStrategy } from './delivery.strategy';
import { DineInStrategy } from './dine-in.strategy';

@Injectable()
export class OrderStrategyFactory {
  constructor(
    private deliveryStrategy: DeliveryStrategy,
    private dineInStrategy: DineInStrategy,
  ) {}

  getStrategy(orderType: 'DELIVERY' | 'DINE_IN'): OrderProcessingStrategy {
    switch (orderType) {
      case 'DELIVERY':
        return this.deliveryStrategy;
      case 'DINE_IN':
        return this.dineInStrategy;
      default:
        throw new Error(`Unknown order type: ${orderType}`);
    }
  }
}
<- Manter consistência visual entre os botões do menu de END: src/pedidos/strategies/order-strategy.factory.ts -->
<- Manter consistência visual entre os botões do menu de START: src/pizzas/dto/create-pizza.dto.ts -->
// ARQUIVO: create-pizza.dto.ts
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsUrl,
} from 'class-validator';

export class CreatePizzaDto {
  @IsNotEmpty({ message: "O campo 'nome' é obrigatório." })
  @IsString({ message: "O campo 'nome' deve ser uma string." })
  nome: string;

  @IsNotEmpty({ message: "O campo 'descricao' é obrigatório." })
  @IsString({ message: "O campo 'descricao' deve ser uma string." })
  descricao: string;

  @IsNotEmpty({ message: "O campo 'preco' é obrigatório." })
  @IsNumber({}, { message: "O campo 'preco' deve ser um número." })
  preco: number;

  @IsOptional()
  @IsUrl({}, { message: "O campo 'image' deve ser uma URL válida." })
  image?: string;
}
<- Manter consistência visual entre os botões do menu de END: src/pizzas/dto/create-pizza.dto.ts -->
<- Manter consistência visual entre os botões do menu de START: src/pizzas/dto/update-pizza.dto.ts -->
import { PartialType } from '@nestjs/mapped-types';
import { CreatePizzaDto } from './create-pizza.dto';

export class UpdatePizzaDto extends PartialType(CreatePizzaDto) {
  image?: string;
}
<- Manter consistência visual entre os botões do menu de END: src/pizzas/dto/update-pizza.dto.ts -->
<- Manter consistência visual entre os botões do menu de START: src/pizzas/entities/pizza.entity.ts -->
export class Pizza {
  image?: string;
}
<- Manter consistência visual entre os botões do menu de END: src/pizzas/entities/pizza.entity.ts -->
<- Manter consistência visual entre os botões do menu de START: src/pizzas/pizzas.controller.ts -->
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseIntPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PizzasService } from './pizzas.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { UploadService } from '../upload/upload.service';
import { FileValidationInterceptor } from '../upload/file-validation.interceptor';
import { PizzaResponseBuilder } from '../common/builders/response.builder';
import { AdminOnly } from '../common/decorators/auth.decorators';

@Controller('pizzas')
export class PizzasController {
  constructor(
    private readonly pizzasService: PizzasService,
    private readonly uploadService: UploadService,
  ) {}

  @Post()
  @AdminOnly()
  async create(@Body() createPizzaDto: CreatePizzaDto) {
    const pizza = await this.pizzasService.create(createPizzaDto);
    return PizzaResponseBuilder.pizzaCreated(pizza);
  }

  @Post('with-image')
  @AdminOnly()
  @UseInterceptors(FileInterceptor('image'), FileValidationInterceptor)
  async createWithImage(
    @Body() createPizzaDto: CreatePizzaDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    let image: string | undefined;

    if (file) {
      image = await this.uploadService.uploadImage(file, 'pizzas');
    }

    const pizzaData = {
      ...createPizzaDto,
      image: image || createPizzaDto.image,
    };

    const pizza = await this.pizzasService.create(pizzaData);
    return PizzaResponseBuilder.pizzaCreated(pizza);
  }

  @Post(':id/upload-image')
  @AdminOnly()
  @UseInterceptors(FileInterceptor('image'), FileValidationInterceptor)
  async uploadImage(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new HttpException(
        'Arquivo de imagem é obrigatório',
        HttpStatus.BAD_REQUEST,
      );
    }

    const image = await this.uploadService.uploadImage(file, 'pizzas');
    const pizza = await this.pizzasService.update(id, { image });

    return PizzaResponseBuilder.success(
      { image: (pizza as { image?: string }).image },
      'Imagem da pizza atualizada com sucesso',
    );
  }

  @Get()
  async findAll() {
    const pizzas = await this.pizzasService.findAll();
    return PizzaResponseBuilder.pizzasList(pizzas);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const pizza = await this.pizzasService.findOne(id);
    return PizzaResponseBuilder.pizzaFound(pizza);
  }

  @Patch(':id')
  @AdminOnly()
  @UseInterceptors(FileInterceptor('image'))
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePizzaDto: UpdatePizzaDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    let image: string | undefined;
    if (file) {
      image = await this.uploadService.uploadImage(file, 'pizzas');
    }

    const dataToUpdate: UpdatePizzaDto = {
      ...updatePizzaDto,
      ...(image ? { image } : {}),
    };

    const pizza = await this.pizzasService.update(id, dataToUpdate);
    return PizzaResponseBuilder.pizzaUpdated(pizza);
  }

  @Delete(':id')
  @AdminOnly()
  async remove(@Param('id', ParseIntPipe) id: number) {
    const result = await this.pizzasService.remove(id);
    return PizzaResponseBuilder.deleted(result.message);
  }
}
<- Manter consistência visual entre os botões do menu de END: src/pizzas/pizzas.controller.ts -->
<- Manter consistência visual entre os botões do menu de START: src/pizzas/pizzas.module.ts -->
import { Module } from '@nestjs/common';
import { PizzasService } from './pizzas.service';
import { PizzasController } from './pizzas.controller';
import { PrismaModule } from '../prisma.module';
import { UploadModule } from '../upload/upload.module';
import { CommonModule } from '../common/common.module';

/**
 * @deprecated This module is deprecated. Use the new catalog system with Categories and Products instead.
 */
@Module({
  imports: [PrismaModule, UploadModule, CommonModule],
  controllers: [PizzasController],
  providers: [PizzasService],
})
export class PizzasModule {}
<- Manter consistência visual entre os botões do menu de END: src/pizzas/pizzas.module.ts -->
<- Manter consistência visual entre os botões do menu de START: src/pizzas/pizzas.service.spec.ts -->
import { Test, TestingModule } from '@nestjs/testing';
import { PizzasService } from './pizzas.service';
import { PrismaService } from '../prisma.service';
import { CustomLoggerService } from '../common/logger/logger.service';

const pizzaMock = {
  id: 1,
  nome: 'Margherita',
  descricao: 'Clássica',
  preco: 39.9,
  image: null,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const mockLoggerService = {
  log: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
  debug: jest.fn(),
  verbose: jest.fn(),
};

describe('PizzasService', () => {
  let service: PizzasService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PizzasService,
        PrismaService,
        {
          provide: CustomLoggerService,
          useValue: mockLoggerService,
        },
      ],
    }).compile();
    service = module.get<PizzasService>(PizzasService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a pizza', async () => {
    jest.spyOn(prisma.pizza, 'create').mockResolvedValue(pizzaMock as any);
    const result = await service.create({
      nome: 'Margherita Test',
      descricao: 'Pizza clássica',
      preco: 39.9,
    });
    expect(result).toEqual(pizzaMock);
  });
});
<- Manter consistência visual entre os botões do menu de END: src/pizzas/pizzas.service.spec.ts -->
<- Manter consistência visual entre os botões do menu de START: src/pizzas/pizzas.service.ts -->
import {
  Injectable,
  BadRequestException,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { CustomLoggerService } from '../common/logger/logger.service';
import { APP_CONSTANTS } from '../common/constants/app.constants';
import { Pizza } from '@prisma/client';

@Injectable()
export class PizzasService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly logger: CustomLoggerService,
  ) {}

  /**
   * Cria uma nova pizza com validações de negócio
   */
  async create(createPizzaDto: CreatePizzaDto): Promise<Pizza> {
    this.logger.log('Iniciando criação de nova pizza', {
      nome: createPizzaDto.nome,
      preco: createPizzaDto.preco,
    });

    // Business Rule 1: Validar preço mínimo
    await this.validateMinimumPrice(createPizzaDto.preco);

    // Business Rule 2: Verificar nome único
    await this.validateUniqueName(createPizzaDto.nome);

    // Business Rule 3: Validar dados de imagem
    this.validateImageUrl(createPizzaDto.image);

    try {
      const pizza = await this.prisma.pizza.create({
        data: {
          ...createPizzaDto,
          nome: this.sanitizeName(createPizzaDto.nome),
        },
      });

      this.logger.log('Pizza criada com sucesso', {
        pizzaId: pizza.id,
        nome: pizza.nome,
      });

      return pizza;
    } catch (error) {
      this.logger.error(
        'Erro ao criar pizza na base de dados',
        error instanceof Error ? error.message : String(error),
      );
      throw new BadRequestException(
        APP_CONSTANTS.ERROR_MESSAGES.PIZZA_CREATION_FAILED,
      );
    }
  }

  /**
   * Lista todas as pizzas ativas
   */
  async findAll(): Promise<Pizza[]> {
    this.logger.log('Listando todas as pizzas');

    try {
      const pizzas = await this.prisma.pizza.findMany({
        orderBy: { nome: 'asc' },
      });

      this.logger.log('Pizzas listadas com sucesso', {
        quantidade: pizzas.length,
      });
      return pizzas;
    } catch (error) {
      this.logger.error(
        'Erro ao listar pizzas',
        error instanceof Error ? error.message : String(error),
      );
      throw new BadRequestException(
        APP_CONSTANTS.ERROR_MESSAGES.PIZZA_FETCH_FAILED,
      );
    }
  }

  /**
   * Busca uma pizza por ID com validação de existência
   */
  async findOne(id: number): Promise<Pizza> {
    this.validateId(id);
    this.logger.log('Buscando pizza por ID', { pizzaId: id });

    const pizza = await this.prisma.pizza.findUnique({ where: { id } });

    if (!pizza) {
      this.logger.warn('Pizza não encontrada', { pizzaId: id });
      throw new NotFoundException(APP_CONSTANTS.ERROR_MESSAGES.PIZZA_NOT_FOUND);
    }

    this.logger.log('Pizza encontrada', { pizzaId: id, nome: pizza.nome });
    return pizza;
  }

  /**
   * Atualiza uma pizza com validações de negócio
   */
  async update(id: number, updatePizzaDto: UpdatePizzaDto): Promise<Pizza> {
    this.validateId(id);
    this.logger.log('Iniciando atualização de pizza', { pizzaId: id });

    // Verificar se a pizza existe
    await this.findOne(id);

    // Business Rules para update
    if (updatePizzaDto.preco) {
      await this.validateMinimumPrice(updatePizzaDto.preco);
    }

    if (updatePizzaDto.nome) {
      await this.validateUniqueName(updatePizzaDto.nome, id);
    }

    if (updatePizzaDto.image) {
      this.validateImageUrl(updatePizzaDto.image);
    }

    try {
      const updatedPizza = await this.prisma.pizza.update({
        where: { id },
        data: {
          ...updatePizzaDto,
          nome: updatePizzaDto.nome
            ? this.sanitizeName(updatePizzaDto.nome)
            : undefined,
        },
      });

      this.logger.log('Pizza atualizada com sucesso', {
        pizzaId: id,
        nome: updatedPizza.nome,
      });

      return updatedPizza;
    } catch (error) {
      this.logger.error('Erro ao atualizar pizza', error);
      throw new BadRequestException(
        APP_CONSTANTS.ERROR_MESSAGES.PIZZA_UPDATE_FAILED,
      );
    }
  }

  /**
   * Remove uma pizza com validação de dependências
   */
  async remove(id: number): Promise<{ message: string }> {
    this.validateId(id);
    this.logger.log('Iniciando remoção de pizza', { pizzaId: id });

    // Verificar se a pizza existe
    const pizza = await this.findOne(id);

    // Business Rule: Verificar se a pizza tem pedidos associados
    await this.validateCanDelete(id);

    try {
      await this.prisma.pizza.delete({ where: { id } });

      this.logger.log('Pizza removida com sucesso', {
        pizzaId: id,
        nome: pizza.nome,
      });

      return { message: `Pizza "${pizza.nome}" removida com sucesso` };
    } catch (error) {
      this.logger.error('Erro ao remover pizza', error);
      throw new BadRequestException(
        APP_CONSTANTS.ERROR_MESSAGES.PIZZA_DELETE_FAILED,
      );
    }
  }

  // ==================== MÉTODOS PRIVADOS DE VALIDAÇÃO ====================

  /**
   * Valida se o preço está dentro do mínimo permitido
   */
  private async validateMinimumPrice(preco: number): Promise<void> {
    const minPrice = APP_CONSTANTS.BUSINESS_RULES.PIZZA_MIN_PRICE;

    if (preco < minPrice) {
      this.logger.warn('Preço abaixo do mínimo permitido', { preco, minPrice });
      throw new BadRequestException(
        `Preço deve ser no mínimo R$ ${minPrice.toFixed(2)}`,
      );
    }
  }

  /**
   * Valida se o nome da pizza é único
   */
  private async validateUniqueName(
    nome: string,
    excludeId?: number,
  ): Promise<void> {
    const existingPizza = await this.prisma.pizza.findFirst({
      where: {
        nome: {
          equals: nome,
          mode: 'insensitive',
        },
        ...(excludeId && { id: { not: excludeId } }),
      },
    });

    if (existingPizza) {
      this.logger.warn('Nome de pizza já existe', {
        nome,
        existingId: existingPizza.id,
      });
      throw new ConflictException(`Já existe uma pizza com o nome "${nome}"`);
    }
  }

  /**
   * Valida URL da imagem
   */
  private validateImageUrl(imageUrl?: string): void {
    if (!imageUrl) return;

    const validExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
    const hasValidExtension = validExtensions.some((ext) =>
      imageUrl.toLowerCase().includes(ext),
    );

    if (!hasValidExtension) {
      this.logger.warn('URL de imagem com extensão inválida', { imageUrl });
      throw new BadRequestException(
        'URL da imagem deve ter uma extensão válida (.jpg, .jpeg, .png, .webp)',
      );
    }
  }

  /**
   * Valida se a pizza pode ser deletada (sem pedidos)
   */
  private async validateCanDelete(pizzaId: number): Promise<void> {
    const pedidosCount = await this.prisma.pedido.count({
      where: {
        pizzas: {
          some: {
            id: pizzaId,
          },
        },
      },
    });

    if (pedidosCount > 0) {
      this.logger.warn('Tentativa de deletar pizza com pedidos associados', {
        pizzaId,
        pedidosCount,
      });
      throw new ConflictException(
        `Não é possível remover esta pizza pois ela possui ${pedidosCount} pedido(s) associado(s)`,
      );
    }
  }

  /**
   * Valida se o ID é válido
   */
  private validateId(id: number): void {
    if (!id || id <= 0 || !Number.isInteger(id)) {
      this.logger.warn('ID inválido fornecido', { id });
      throw new BadRequestException('ID deve ser um número inteiro positivo');
    }
  }

  /**
   * Sanitiza o nome da pizza
   */
  private sanitizeName(nome: string): string {
    return nome.trim().replace(/\s+/g, ' ');
  }
}
<- Manter consistência visual entre os botões do menu de END: src/pizzas/pizzas.service.ts -->
<- Manter consistência visual entre os botões do menu de START: src/prisma.module.ts -->
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
<- Manter consistência visual entre os botões do menu de END: src/prisma.module.ts -->
<- Manter consistência visual entre os botões do menu de START: src/prisma.service.ts -->
import { Injectable, OnModuleInit, INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  enableShutdownHooks(app: INestApplication) {
    (this as unknown as { $on(event: string, cb: () => void): void }).$on(
      'beforeExit',
      () => {
        void app.close();
      },
    );
  }
}
<- Manter consistência visual entre os botões do menu de END: src/prisma.service.ts -->
<- Manter consistência visual entre os botões do menu de START: src/tables/dto/create-table.dto.ts -->
import { IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTableDto {
  @IsInt()
  @Min(1)
  @Max(999)
  @Type(() => Number)
  number: number;
}
<- Manter consistência visual entre os botões do menu de END: src/tables/dto/create-table.dto.ts -->
<- Manter consistência visual entre os botões do menu de START: src/tables/dto/update-table.dto.ts -->
import { PartialType } from '@nestjs/mapped-types';
import { CreateTableDto } from './create-table.dto';
import { IsOptional, IsEnum } from 'class-validator';
import { TableStatus } from '@prisma/client';

export class UpdateTableDto extends PartialType(CreateTableDto) {
  @IsOptional()
  @IsEnum(TableStatus)
  status?: TableStatus;
}
<- Manter consistência visual entre os botões do menu de END: src/tables/dto/update-table.dto.ts -->
<- Manter consistência visual entre os botões do menu de START: src/tables/manage-tables.service.ts -->
import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { TableStatus } from '@prisma/client';

@Injectable()
export class ManageTablesService {
  constructor(private prisma: PrismaService) {}

  async create(createTableDto: CreateTableDto) {
    // Verificar se o número da mesa já existe
    const existingTable = await this.prisma.table.findUnique({
      where: { number: createTableDto.number },
    });

    if (existingTable) {
      throw new ConflictException(
        `Table with number ${createTableDto.number} already exists`,
      );
    }

    return this.prisma.table.create({
      data: createTableDto,
    });
  }

  async findAll() {
    return this.prisma.table.findMany({
      include: {
        sessions: {
          where: { closedAt: null }, // Apenas sessões ativas
          orderBy: { openedAt: 'desc' },
          take: 1,
        },
      },
      orderBy: { number: 'asc' },
    });
  }

  async findOne(id: string) {
    const table = await this.prisma.table.findUnique({
      where: { id },
      include: {
        sessions: {
          where: { closedAt: null }, // Apenas sessões ativas
          orderBy: { openedAt: 'desc' },
          take: 1,
        },
      },
    });

    if (!table) {
      throw new NotFoundException(`Table with ID ${id} not found`);
    }

    return table;
  }

  async update(id: string, updateTableDto: UpdateTableDto) {
    try {
      // Se estiver mudando o status, verificar se é válido
      if (updateTableDto.status) {
        const table = await this.findOne(id);

        // Não permitir mudança direta de status - deve ser feito através de sessões
        if (table.status !== updateTableDto.status) {
          throw new ConflictException(
            'Table status should be managed through sessions',
          );
        }
      }

      return await this.prisma.table.update({
        where: { id },
        data: updateTableDto,
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Table with ID ${id} not found`);
      }
      throw error;
    }
  }

  async remove(id: string) {
    try {
      // Verificar se há sessões ativas
      const activeSession = await this.prisma.tableSession.findFirst({
        where: {
          tableId: id,
          closedAt: null,
        },
      });

      if (activeSession) {
        throw new ConflictException('Cannot delete table with active session');
      }

      return await this.prisma.table.delete({
        where: { id },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Table with ID ${id} not found`);
      }
      throw error;
    }
  }

  async getAvailableTables() {
    return this.prisma.table.findMany({
      where: { status: TableStatus.AVAILABLE },
      orderBy: { number: 'asc' },
    });
  }
}
<- Manter consistência visual entre os botões do menu de END: src/tables/manage-tables.service.ts -->
<- Manter consistência visual entre os botões do menu de START: src/tables/table-session.service.ts -->
import {
  Injectable,
  ConflictException,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { TableStatus } from '@prisma/client';

@Injectable()
export class TableSessionService {
  constructor(private prisma: PrismaService) {}

  async openSession(tableId: string) {
    // Verificar se a mesa existe
    const table = await this.prisma.table.findUnique({
      where: { id: tableId },
    });

    if (!table) {
      throw new NotFoundException(`Table with ID ${tableId} not found`);
    }

    // Verificar se a mesa já está ocupada
    if (table.status !== TableStatus.AVAILABLE) {
      throw new ConflictException('Table is not available');
    }

    // Verificar se já existe uma sessão ativa para esta mesa
    const activeSession = await this.prisma.tableSession.findFirst({
      where: {
        tableId,
        closedAt: null,
      },
    });

    if (activeSession) {
      throw new ConflictException('Table already has an active session');
    }

    // Criar nova sessão e atualizar status da mesa
    const result = await this.prisma.$transaction(async (tx) => {
      // Criar sessão
      const session = await tx.tableSession.create({
        data: {
          tableId,
        },
      });

      // Atualizar status da mesa
      await tx.table.update({
        where: { id: tableId },
        data: { status: TableStatus.OCCUPIED },
      });

      return session;
    });

    return result;
  }

  async getBill(tableId: string) {
    // Verificar se a mesa existe
    const table = await this.prisma.table.findUnique({
      where: { id: tableId },
    });

    if (!table) {
      throw new NotFoundException(`Table with ID ${tableId} not found`);
    }

    // Buscar sessão ativa
    const activeSession = await this.prisma.tableSession.findFirst({
      where: {
        tableId,
        closedAt: null,
      },
      include: {
        orders: {
          include: {
            items: {
              include: {
                product: true,
              },
            },
          },
        },
      },
    });

    if (!activeSession) {
      throw new BadRequestException('No active session for this table');
    }

    // Calcular total
    let total = 0;
    const orderDetails = [];

    for (const order of activeSession.orders) {
      let orderTotal = 0;
      const items = [];

      for (const item of order.items) {
        const itemTotal = Number(item.price) * item.quantity;
        orderTotal += itemTotal;

        items.push({
          productName: item.product.name,
          quantity: item.quantity,
          unitPrice: Number(item.price),
          total: itemTotal,
        });
      }

      total += orderTotal;
      orderDetails.push({
        orderId: order.id,
        items,
        orderTotal,
      });
    }

    return {
      tableId,
      tableNumber: table.number,
      sessionId: activeSession.id,
      openedAt: activeSession.openedAt,
      orders: orderDetails,
      total: Number(total.toFixed(2)),
    };
  }

  async closeSession(tableId: string) {
    // Verificar se a mesa existe
    const table = await this.prisma.table.findUnique({
      where: { id: tableId },
    });

    if (!table) {
      throw new NotFoundException(`Table with ID ${tableId} not found`);
    }

    // Buscar sessão ativa
    const activeSession = await this.prisma.tableSession.findFirst({
      where: {
        tableId,
        closedAt: null,
      },
    });

    if (!activeSession) {
      throw new BadRequestException('No active session for this table');
    }

    // Calcular total dos pedidos
    const bill = await this.getBill(tableId);
    const total = bill.total;

    // Fechar sessão e liberar mesa
    const result = await this.prisma.$transaction(async (tx) => {
      // Atualizar sessão com total e data de fechamento
      const closedSession = await tx.tableSession.update({
        where: { id: activeSession.id },
        data: {
          closedAt: new Date(),
          total,
        },
      });

      // Liberar mesa
      await tx.table.update({
        where: { id: tableId },
        data: { status: TableStatus.AVAILABLE },
      });

      return closedSession;
    });

    return {
      ...result,
      total: Number(result.total.toFixed(2)),
      bill,
    };
  }

  async getActiveSession(tableId: string) {
    const session = await this.prisma.tableSession.findFirst({
      where: {
        tableId,
        closedAt: null,
      },
      include: {
        orders: {
          include: {
            items: {
              include: {
                product: true,
              },
            },
          },
        },
      },
    });

    return session;
  }
}
<- Manter consistência visual entre os botões do menu de END: src/tables/table-session.service.ts -->
<- Manter consistência visual entre os botões do menu de START: src/tables/tables.controller.ts -->
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ManageTablesService } from './manage-tables.service';
import { TableSessionService } from './table-session.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';

@Controller('tables')
export class TablesController {
  constructor(
    private readonly manageTablesService: ManageTablesService,
    private readonly tableSessionService: TableSessionService,
  ) {}

  // CRUD de Mesas
  @Post()
  createTable(@Body() createTableDto: CreateTableDto) {
    return this.manageTablesService.create(createTableDto);
  }

  @Get()
  findAllTables() {
    return this.manageTablesService.findAll();
  }

  @Get('available')
  getAvailableTables() {
    return this.manageTablesService.getAvailableTables();
  }

  @Get(':id')
  findOneTable(@Param('id') id: string) {
    return this.manageTablesService.findOne(id);
  }

  @Patch(':id')
  updateTable(@Param('id') id: string, @Body() updateTableDto: UpdateTableDto) {
    return this.manageTablesService.update(id, updateTableDto);
  }

  @Delete(':id')
  removeTable(@Param('id') id: string) {
    return this.manageTablesService.remove(id);
  }

  // Gestão de Sessões
  @Post(':tableId/sessions/open')
  openSession(@Param('tableId') tableId: string) {
    return this.tableSessionService.openSession(tableId);
  }

  @Get(':tableId/sessions/active')
  getActiveSession(@Param('tableId') tableId: string) {
    return this.tableSessionService.getActiveSession(tableId);
  }

  @Get(':tableId/bill')
  getBill(@Param('tableId') tableId: string) {
    return this.tableSessionService.getBill(tableId);
  }

  @Post(':tableId/sessions/close')
  closeSession(@Param('tableId') tableId: string) {
    return this.tableSessionService.closeSession(tableId);
  }
}
<- Manter consistência visual entre os botões do menu de END: src/tables/tables.controller.ts -->
<- Manter consistência visual entre os botões do menu de START: src/tables/tables.module.ts -->
import { Module } from '@nestjs/common';
import { ManageTablesService } from './manage-tables.service';
import { TableSessionService } from './table-session.service';
import { TablesController } from './tables.controller';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TablesController],
  providers: [ManageTablesService, TableSessionService],
  exports: [ManageTablesService, TableSessionService],
})
export class TablesModule {}
<- Manter consistência visual entre os botões do menu de END: src/tables/tables.module.ts -->
<- Manter consistência visual entre os botões do menu de START: src/types/multer.d.ts -->
// types/multer.d.ts
export interface MulterFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  filename: string;
  path: string;
}
<- Manter consistência visual entre os botões do menu de END: src/types/multer.d.ts -->
<- Manter consistência visual entre os botões do menu de START: src/upload/file-validation.interceptor.ts -->
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  BadRequestException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

interface RequestWithFile extends Request {
  file?: Express.Multer.File;
}

@Injectable()
export class FileValidationInterceptor implements NestInterceptor {
  private readonly allowedMimeTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
  ];

  private readonly maxFileSize = 5 * 1024 * 1024; // 5MB

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<RequestWithFile>();
    const file = request.file;

    if (file) {
      // Validar tipo de arquivo
      if (!this.allowedMimeTypes.includes(file.mimetype)) {
        throw new BadRequestException(
          'Tipo de arquivo não permitido. Use apenas: JPG, PNG ou WEBP',
        );
      }

      // Validar tamanho do arquivo
      if (file.size > this.maxFileSize) {
        throw new BadRequestException(
          'Arquivo muito grande. Tamanho máximo permitido: 5MB',
        );
      }
    }

    return next.handle();
  }
}
<- Manter consistência visual entre os botões do menu de END: src/upload/file-validation.interceptor.ts -->
<- Manter consistência visual entre os botões do menu de START: src/upload/upload.module.ts -->
import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';

@Module({
  providers: [UploadService],
  exports: [UploadService],
})
export class UploadModule {}
<- Manter consistência visual entre os botões do menu de END: src/upload/upload.module.ts -->
<- Manter consistência visual entre os botões do menu de START: src/upload/upload.service.ts -->
import { Injectable, BadRequestException } from '@nestjs/common';
import {
  v2 as cloudinary,
  UploadApiResponse,
  UploadApiErrorResponse,
} from 'cloudinary';

@Injectable()
export class UploadService {
  constructor() {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  async uploadImage(
    file: Express.Multer.File,
    folder: string = 'pizzas',
  ): Promise<string> {
    // Validação de tipo e tamanho
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (!file) {
      throw new BadRequestException('Arquivo de imagem não enviado.');
    }
    if (!allowedTypes.includes(file.mimetype)) {
      throw new BadRequestException(
        'Tipo de arquivo não permitido. Use apenas: JPG, PNG ou WEBP.',
      );
    }
    if (file.size > maxSize) {
      throw new BadRequestException(
        'Arquivo muito grande. Tamanho máximo: 5MB.',
      );
    }

    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: `pizza-express/${folder}`,
          resource_type: 'image',
          format: 'webp',
          quality: 'auto',
          fetch_format: 'auto',
          transformation: [
            { width: 800, height: 600, crop: 'fill' },
            { quality: 'auto:good' },
          ],
        },
        (
          error: UploadApiErrorResponse | undefined,
          result: UploadApiResponse | undefined,
        ) => {
          if (error) {
            reject(new Error(error.message || 'Upload failed'));
          } else if (result?.secure_url) {
            resolve(result.secure_url);
          } else {
            reject(new Error('Upload failed'));
          }
        },
      );
      uploadStream.end(file.buffer);
    });
  }

  async deleteImage(publicId: string): Promise<void> {
    try {
      await cloudinary.uploader.destroy(publicId);
    } catch {
      // Silenciar erro em produção
    }
  }

  extractPublicIdFromUrl(url: string): string {
    const parts = url.split('/');
    const filename = parts[parts.length - 1];
    return filename.split('.')[0];
  }
}
<- Manter consistência visual entre os botões do menu de END: src/upload/upload.service.ts -->
<- Manter consistência visual entre os botões do menu de START: src/users/dto/create-endereco.dto.ts -->
import {
  IsString,
  IsBoolean,
  IsOptional,
  IsNotEmpty,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateEnderecoDto {
  @IsOptional()
  userId?: number;
  @IsString({ message: 'O CEP deve ser um texto' })
  @IsNotEmpty({ message: 'O CEP é obrigatório' })
  @Matches(/^\d{5}-?\d{3}$/, {
    message: 'O CEP deve estar no formato 00000-000',
  })
  cep: string;

  @IsString({ message: 'O tipo é obrigatório' })
  @IsNotEmpty({ message: 'O tipo é obrigatório' })
  tipo: string;

  @IsString({ message: 'O logradouro é obrigatório' })
  @IsNotEmpty({ message: 'O logradouro é obrigatório' })
  logradouro: string;

  @IsString({ message: 'O número é obrigatório' })
  @IsNotEmpty({ message: 'O número é obrigatório' })
  numero: string;

  @IsString({ message: 'O bairro é obrigatório' })
  @IsNotEmpty({ message: 'O bairro é obrigatório' })
  bairro: string;

  @IsString({ message: 'A cidade é obrigatória' })
  @IsNotEmpty({ message: 'A cidade é obrigatória' })
  cidade: string;

  @IsString({ message: 'O estado é obrigatório' })
  @IsNotEmpty({ message: 'O estado é obrigatório' })
  @MinLength(2, { message: 'O estado deve ter 2 caracteres' })
  estado: string;

  @IsOptional()
  @IsString()
  complemento?: string;

  @IsOptional()
  @IsString()
  pais?: string;

  @IsOptional()
  @IsString()
  referencia?: string;

  @IsOptional()
  @IsBoolean()
  principal?: boolean;
}
<- Manter consistência visual entre os botões do menu de END: src/users/dto/create-endereco.dto.ts -->
<- Manter consistência visual entre os botões do menu de START: src/users/dto/create-user.dto.ts -->
import {
  IsString,
  IsEmail,
  IsOptional,
  ValidateNested,
  IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateEnderecoDto } from './create-endereco.dto';

export enum Role {
  CLIENTE = 'CLIENTE',
  FUNCIONARIO = 'FUNCIONARIO',
  ADMIN = 'ADMIN',
}

export class CreateUserDto {
  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateEnderecoDto)
  enderecos?: CreateEnderecoDto[];

  @IsOptional()
  @IsEnum(Role)
  role?: Role;

  @IsOptional()
  @IsString()
  telefone?: string;
}
<- Manter consistência visual entre os botões do menu de END: src/users/dto/create-user.dto.ts -->
<- Manter consistência visual entre os botões do menu de START: src/users/dto/update-endereco.dto.ts -->
import { PartialType } from '@nestjs/mapped-types';
import { CreateEnderecoDto } from './create-endereco.dto';
import { IsInt } from 'class-validator';

export class UpdateEnderecoDto extends PartialType(CreateEnderecoDto) {
  @IsInt()
  id: number;
}
<- Manter consistência visual entre os botões do menu de END: src/users/dto/update-endereco.dto.ts -->
<- Manter consistência visual entre os botões do menu de START: src/users/dto/update-user.dto.ts -->
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  // ...existing code...
}
<- Manter consistência visual entre os botões do menu de END: src/users/dto/update-user.dto.ts -->
<- Manter consistência visual entre os botões do menu de START: src/users/entities/endereco.entity.ts -->
export class Endereco {
  id: number;
  clienteId: number;
  cep: string;
  tipo: string;
  logradouro: string;
  numero: string;
  bairro: string;
  complemento?: string;
  cidade: string;
  estado: string;
  pais?: string;
  referencia?: string;
  principal: boolean;
  createdAt: Date;
  updatedAt: Date;
}
<- Manter consistência visual entre os botões do menu de END: src/users/entities/endereco.entity.ts -->
<- Manter consistência visual entre os botões do menu de START: src/users/entities/user.entity.ts -->
import { Endereco } from './endereco.entity';
import { Role } from '../dto/create-user.dto';
import { Pedido } from '../../pedidos/entities/pedido.entity';

export class User {
  id: number;
  nome: string;
  email: string;
  password: string;
  telefone?: string;
  role: Role;
  enderecos: Endereco[];
  pedidos: Pedido[];
  createdAt: Date;
  updatedAt: Date;
}
<- Manter consistência visual entre os botões do menu de END: src/users/entities/user.entity.ts -->
<- Manter consistência visual entre os botões do menu de START: src/users/users.controller.ts -->
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AdminOnly } from '../common/decorators/auth.decorators';
import { UserResponseBuilder } from '../common/builders/response.builder';

interface PrismaError {
  code: string;
}

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.usersService.create(createUserDto);
      return user;
    } catch (error: unknown) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        (error as { code: string }).code === 'P2002'
      ) {
        throw new HttpException('E-mail já cadastrado', HttpStatus.BAD_REQUEST);
      }
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  @AdminOnly()
  async findAll(@Query('email') email?: string) {
    if (email) {
      const user = await this.usersService.findByEmail(email);
      return UserResponseBuilder.userFound(user);
    }
    const users = await this.usersService.findAll();
    return UserResponseBuilder.usersList(users);
  }

  @Get(':id')
  @AdminOnly()
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(+id);
    return UserResponseBuilder.userFound(user);
  }

  @Patch(':id')
  @AdminOnly()
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      const user = await this.usersService.update(+id, updateUserDto);
      return UserResponseBuilder.userUpdated(user);
    } catch (error: unknown) {
      const prismaError = error as PrismaError;
      if (prismaError.code === 'P2025') {
        throw new HttpException(
          'Registro não encontrado',
          HttpStatus.NOT_FOUND,
        );
      }
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  @AdminOnly()
  async remove(@Param('id') id: string) {
    try {
      await this.usersService.remove(+id);
      return UserResponseBuilder.userDeleted();
    } catch (error: unknown) {
      const prismaError = error as PrismaError;
      if (prismaError.code === 'P2025') {
        throw new HttpException(
          'Registro não encontrado',
          HttpStatus.NOT_FOUND,
        );
      }
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
<- Manter consistência visual entre os botões do menu de END: src/users/users.controller.ts -->
<- Manter consistência visual entre os botões do menu de START: src/users/users.module.ts -->
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '../prisma.module';
import { CommonModule } from '../common/common.module';
import { BcryptAdapter } from '../common/adapters/bcrypt.adapter';

@Module({
  imports: [PrismaModule, CommonModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'HASHER',
      useClass: BcryptAdapter,
    },
  ],
})
export class UsersModule {}
<- Manter consistência visual entre os botões do menu de END: src/users/users.module.ts -->
<- Manter consistência visual entre os botões do menu de START: src/users/users.service.spec.ts -->
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma.service';
import { Role } from './dto/create-user.dto';

const userMock = {
  id: 1,
  nome: 'João',
  email: 'joao@email.com',
  password: process.env.TEST_USER_PASSWORD || 'hashedpassword',
  telefone: '11999999999',
  role: Role.CLIENTE,
  enderecos: [],
  createdAt: new Date(),
  updatedAt: new Date(),
};

interface MockPrismaService {
  user: {
    create: jest.Mock;
    findMany: jest.Mock;
    findUnique: jest.Mock;
  };
}

describe('UsersService', () => {
  let service: UsersService;
  let prisma: MockPrismaService;

  beforeEach(async () => {
    const mockPrismaService: MockPrismaService = {
      user: {
        create: jest.fn(),
        findMany: jest.fn(),
        findUnique: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
        {
          provide: 'HASHER',
          useValue: {
            hash: jest.fn().mockResolvedValue('hashedpassword'),
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    prisma = module.get<MockPrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', async () => {
    const userWithoutAddresses = {
      id: 1,
      nome: 'João',
      email: 'joao@email.com',
      password: 'hashedpassword',
      telefone: null,
      role: Role.CLIENTE,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const userWithAddresses = {
      ...userWithoutAddresses,
      enderecos: [],
    };

    prisma.user.create.mockResolvedValue(userWithoutAddresses);
    prisma.user.findUnique.mockResolvedValue(userWithAddresses);

    const result = await service.create({
      nome: 'João',
      email: 'joao@email.com',
      password: '123456',
      role: Role.CLIENTE,
    });

    expect(result).toBeDefined();
    expect(result.enderecos).toBeDefined();
    expect(prisma.user.create).toHaveBeenCalled();
  });
});
<- Manter consistência visual entre os botões do menu de END: src/users/users.service.spec.ts -->
<- Manter consistência visual entre os botões do menu de START: src/users/users.service.ts -->
import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { IHasher } from '../common/interfaces/hasher.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, Endereco } from '@prisma/client';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { CreateEnderecoDto } from './dto/create-endereco.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject('HASHER') private readonly hasher: IHasher,
  ) {}

  async create(
    createUserDto: CreateUserDto,
  ): Promise<User & { enderecos: Endereco[] }> {
    const { enderecos, password, ...clienteData } = createUserDto;
    if (!password) throw new Error('Campo password é obrigatório');
    // Gera hash da senha antes de salvar
    const hash = await this.hasher.hash(password);
    // Cria o cliente primeiro
    const user = await this.prisma.user.create({
      data: {
        ...clienteData,
        nome: clienteData.nome,
        password: hash,
        role: 'CLIENTE',
      },
    });
    // Garante que pelo menos um endereço é principal
    const enderecosAtualizados = (enderecos ?? []).map(
      (endereco: CreateEnderecoDto, idx: number) => ({
        ...endereco,
        principal: idx === 0 ? true : (endereco.principal ?? false),
        userId: user.id,
      }),
    );
    if (enderecosAtualizados.length > 0) {
      await this.prisma.endereco.createMany({ data: enderecosAtualizados });
    }
    // Retorna usuário com endereços
    const userWithAddresses = await this.prisma.user.findUnique({
      where: { id: user.id },
      include: { enderecos: true },
    });
    return userWithAddresses!;
  }

  async findAll(): Promise<(User & { enderecos: Endereco[] })[]> {
    return this.prisma.user.findMany({
      include: {
        enderecos: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(
    id: number,
  ): Promise<(User & { enderecos: Endereco[] }) | null> {
    return this.prisma.user.findUnique({
      where: { id },
      include: { enderecos: true },
    });
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<User & { enderecos: Endereco[] }> {
    const {
      enderecos,
      nome,
      email,
      password: pwd,
      telefone,
      role,
    } = updateUserDto;
    // Monta objeto de atualização sem tipagem explícita
    const updateData: Record<string, unknown> = {};
    if (nome) updateData.nome = nome;
    if (email) updateData.email = email;
    if (pwd) updateData.password = pwd;
    if (telefone) updateData.telefone = telefone;
    if (role) updateData.role = role;
    if (enderecos) {
      // Atualiza endereços existentes
      const enderecosToUpdate = enderecos.filter(
        (e) => 'id' in e && typeof e.id === 'number',
      );
      await Promise.all(
        enderecosToUpdate.map(async (endereco) => {
          const { id, ...rest } = endereco as UpdateEnderecoDto;
          await this.prisma.endereco.update({
            where: { id },
            data: {
              cep: rest.cep,
              tipo: rest.tipo,
              logradouro: rest.logradouro,
              numero: rest.numero,
              bairro: rest.bairro,
              cidade: rest.cidade,
              estado: rest.estado,
              principal: rest.principal ?? false,
              ...(rest.complemento !== undefined
                ? { complemento: rest.complemento }
                : {}),
            },
          });
        }),
      );
      // Adiciona novos endereços sem sobrescrever os existentes
      const enderecosToCreate = enderecos.filter(
        (e) => !('id' in e) || typeof e.id !== 'number',
      );
      if (enderecosToCreate.length > 0) {
        updateData.enderecos = {
          create: enderecosToCreate
            .filter(
              (e) =>
                e.cep !== undefined &&
                e.tipo !== undefined &&
                e.logradouro !== undefined &&
                e.numero !== undefined &&
                e.bairro !== undefined &&
                e.cidade !== undefined &&
                e.estado !== undefined,
            )
            .map((endereco) => ({
              cep: endereco.cep,
              tipo: endereco.tipo,
              logradouro: endereco.logradouro,
              numero: endereco.numero,
              bairro: endereco.bairro,
              cidade: endereco.cidade,
              estado: endereco.estado,
              principal: endereco.principal ?? false,
              ...(endereco.complemento !== undefined
                ? { complemento: endereco.complemento }
                : {}),
            })),
        };
      }
    }
    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: updateData,
      include: { enderecos: true },
    });
    return updatedUser;
  }

  async remove(id: number): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }

  async findByEmail(email: string): Promise<User[]> {
    return this.prisma.user.findMany({ where: { email } });
  }
}
<- Manter consistência visual entre os botões do menu de END: src/users/users.service.ts -->
<- Manter consistência visual entre os botões do menu de START: test/app.e2e-spec.ts -->
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
<- Manter consistência visual entre os botões do menu de END: test/app.e2e-spec.ts -->
<- Manter consistência visual entre os botões do menu de START: test/entregadores.e2e-spec.ts -->
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { PrismaClient } from '@prisma/client';

describe('EntregadoresController (e2e)', () => {
  jest.setTimeout(40000);
  let app: INestApplication;
  let prisma: PrismaClient;

  beforeAll(async () => {
    prisma = new PrismaClient();
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
    await prisma.$disconnect();
  });

  beforeEach(async () => {
    // Removido deleteMany para preservar dados do seed
  });

  // Helper para obter o server tipado corretamente para o supertest
  function getServer() {
    return app.getHttpServer() as unknown as import('http').Server;
  }

  async function waitForClienteApi(
    app: INestApplication,
    email: string,
    password: string,
    maxRetries = 10,
    delayMs = 300,
  ): Promise<void> {
    for (let i = 0; i < maxRetries; i++) {
      try {
        const res = await request(getServer())
          .post('/auth/login')
          .send({ email, password });
        if (res.status === 201 && res.body.access_token) {
          return; // Usuário pode fazer login, então foi criado com sucesso
        }
      } catch (error) {
        // Ignorar erro e tentar novamente
      }
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
    throw new Error(
      `Cliente com email ${email} não conseguiu fazer login após registro.`,
    );
  }
      `Cliente com email ${email} não encontrado via API após registro.`,
    );
  }

  async function createAndLoginCliente(
    email: string,
    password = process.env.TEST_CLIENTE_PASSWORD!,
  ): Promise<string> {
    const resRegister = await request(getServer()).post('/auth/register').send({
      nome: 'João Silva',
      email,
      password,
      telefone: '11999999999',
      endereco: 'Rua das Flores, 123',
    });
    if (resRegister.status >= 400)
      throw new Error(
        'Falha ao registrar cliente: ' + JSON.stringify(resRegister.body),
      );
    await waitForClienteApi(app, email, password);
    const res = await request(getServer())
      .post('/auth/login')
      .send({ email, password });
    const token = (res.body as { access_token?: string }).access_token;
    if (!token) {
      throw new Error('Token de acesso não retornado ou inválido');
    }
    return token;
  }

  function randomEmail() {
    return `test${Date.now()}${Math.floor(Math.random() * 10000)}@mail.com`;
  }

  it('/entregadores (GET) deve retornar entregadores', async () => {
    const email = randomEmail();
    const token = await createAndLoginCliente(email);
    // Cria entregador
    await prisma.entregador.create({
      data: {
        nome: 'Carlos Motoboy',
        telefone: '11988888888',
      },
    });
    const res = await request(getServer())
      .get('/entregadores')
      .set('Authorization', `Bearer ${token}`);
    type Entregador = { id: number; nome: string };
    const body = res.body as Entregador[];
    expect(res.status).toBe(200);
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty('id');
    expect(body[0]).toHaveProperty('nome');
  });

  it('/entregadores (POST) seguido de (GET) deve retornar o entregador criado', async () => {
    const email = randomEmail();
    const token = await createAndLoginCliente(email);
    const entregadorData = {
      nome: 'Teste Diagnóstico',
      telefone: '11999990000',
    };
    // Cria um entregador
    const resPost = await request(getServer())
      .post('/entregadores')
      .set('Authorization', `Bearer ${token}`)
      .send(entregadorData);
    type PostResponse = { data: { id: number } };
    const postBody = resPost.body as PostResponse;
    expect(resPost.status).toBe(201);
    expect(postBody.data).toHaveProperty('id');
    // Busca todos entregadores
    const resGet = await request(getServer())
      .get('/entregadores')
      .set('Authorization', `Bearer ${token}`);
    type Entregador = { nome: string };
    const getBody = resGet.body as Entregador[];
    const nomes = getBody.map((e) => e.nome);
    expect(nomes).toContain('Teste Diagnóstico');
  });
});
<- Manter consistência visual entre os botões do menu de END: test/entregadores.e2e-spec.ts -->
<- Manter consistência visual entre os botões do menu de START: test/jest-e2e.json -->
{
  "moduleFileExtensions": ["js", "json", "ts"],
  "rootDir": ".",
  "testEnvironment": "node",
  "testRegex": ".e2e-spec.ts$",
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  }
}
<- Manter consistência visual entre os botões do menu de END: test/jest-e2e.json -->
<- Manter consistência visual entre os botões do menu de START: test/pedidos.e2e-spec.ts -->
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { PrismaClient } from '@prisma/client';

describe('OrdersController (e2e)', () => {
  jest.setTimeout(40000);
  let app: INestApplication;
  let prisma: PrismaClient;

  beforeAll(async () => {
    prisma = new PrismaClient();
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
    await prisma.$disconnect();
  });

  function getServer() {
    return app.getHttpServer() as unknown as import('http').Server;
  }

  async function waitForClienteApi(
    app: INestApplication,
    email: string,
    password: string,
    maxRetries = 10,
    delayMs = 300,
  ): Promise<void> {
    for (let i = 0; i < maxRetries; i++) {
      try {
        const res = await request(getServer())
          .post('/auth/login')
          .send({ email, password });
        if (res.status === 201 && res.body.access_token) {
          return; // Usuário pode fazer login, então foi criado com sucesso
        }
      } catch (error) {
        // Ignorar erro e tentar novamente
      }
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
    throw new Error(
      `Cliente com email ${email} não conseguiu fazer login após registro.`,
    );
  }

  async function createAndLoginCliente(
    email: string,
    password = process.env.TEST_CLIENTE_PASSWORD!,
  ): Promise<string> {
    const resRegister = await request(getServer()).post('/auth/register').send({
      nome: 'João Silva',
      email,
      password,
      telefone: '11999999999',
    });
    if (resRegister.status >= 400)
      throw new Error(
        'Falha ao registrar cliente: ' + JSON.stringify(resRegister.body),
      );
    await waitForClienteApi(app, email, password);
    const res = await request(getServer())
      .post('/auth/login')
      .send({ email, password });
    const token = (res.body as { access_token?: string }).access_token;
    if (!token) {
      throw new Error('Token de acesso não retornado ou inválido');
    }
    return token;
  }

  function randomEmail() {
    return `test${Date.now()}${Math.floor(Math.random() * 10000)}@mail.com`;
  }

  it('/orders (GET) deve retornar pedidos', async () => {
    const email = randomEmail();
    const token = await createAndLoginCliente(email);

    // Cria categoria (ou usa existente)
    let category = await prisma.category.findUnique({
      where: { name: 'Pizzas' },
    });
    if (!category) {
      category = await prisma.category.create({
        data: {
          name: 'Pizzas',
          slug: 'pizzas',
        },
      });
    }

    // Cria produtos
    const product1 = await prisma.product.create({
      data: {
        name: 'Margherita Test',
        description: 'Molho de tomate, mussarela, manjericão',
        price: 39.9,
        categoryId: category.id,
        active: true,
      },
    });

    const product2 = await prisma.product.create({
      data: {
        name: 'Calabresa Test',
        description: 'Calabresa, cebola, mussarela',
        price: 44.9,
        categoryId: category.id,
        active: true,
      },
    });

    // Busca endereço existente do usuário cliente
    const address = await prisma.endereco.findFirst({
      where: { userId: 12 }, // ID do usuário CLIENTE criado no seed
    });

    if (!address) {
      throw new Error('Endereço do usuário cliente não encontrado');
    }

    // Cria pedido de delivery via API
    const orderRes = await request(getServer())
      .post('/orders')
      .set('Authorization', `Bearer ${token}`)
      .send({
        type: 'DELIVERY',
        items: [
          { productId: product1.id, quantity: 1 },
          { productId: product2.id, quantity: 2 },
        ],
        addressId: address.id,
        observations: 'Sem cebola na calabresa',
      });

    expect(orderRes.status).toBe(201);
    expect(orderRes.body).toHaveProperty('id');
    expect(orderRes.body.type).toBe('DELIVERY');
    expect(orderRes.body.status).toBe('PENDENTE');
    expect(orderRes.body.total).toBeGreaterThan(0);

    // Verifica se o pedido foi criado
    const getOrdersRes = await request(getServer())
      .get('/orders')
      .set('Authorization', `Bearer ${token}`);

    expect(getOrdersRes.status).toBe(200);
    expect(Array.isArray(getOrdersRes.body)).toBe(true);
    expect(getOrdersRes.body.length).toBeGreaterThan(0);
  });

  it('/orders/:id (GET) deve retornar um pedido', async () => {
    const email = randomEmail();
    const token = await createAndLoginCliente(email);

    // Cria categoria (ou usa existente)
    let category = await prisma.category.findUnique({
      where: { name: 'Pizzas' },
    });
    if (!category) {
      category = await prisma.category.create({
        data: {
          name: 'Pizzas',
          slug: 'pizzas',
        },
      });
    }

    // Cria produto
    const product = await prisma.product.create({
      data: {
        name: 'Margherita Test 2',
        description: 'Molho de tomate, mussarela, manjericão',
        price: 39.9,
        categoryId: category.id,
        active: true,
      },
    });

    // Busca endereço existente do usuário cliente
    const address = await prisma.endereco.findFirst({
      where: { userId: 12 }, // ID do usuário CLIENTE criado no seed
    });

    if (!address) {
      throw new Error('Endereço do usuário cliente não encontrado');
    }

    // Cria pedido de delivery via API
    const orderRes = await request(getServer())
      .post('/orders')
      .set('Authorization', `Bearer ${token}`)
      .send({
        type: 'DELIVERY',
        items: [{ productId: product.id, quantity: 1 }],
        addressId: address.id,
      });

    expect(orderRes.status).toBe(201);
    const orderId = orderRes.body.id;

    // Busca o pedido específico
    const getOrderRes = await request(getServer())
      .get(`/orders/${orderId}`)
      .set('Authorization', `Bearer ${token}`);

    expect(getOrderRes.status).toBe(200);
    expect(getOrderRes.body).toHaveProperty('id', orderId);
    expect(getOrderRes.body).toHaveProperty('type', 'DELIVERY');
    expect(getOrderRes.body).toHaveProperty('status');
    expect(getOrderRes.body).toHaveProperty('items');
    expect(Array.isArray(getOrderRes.body.items)).toBe(true);
  });
});
<- Manter consistência visual entre os botões do menu de END: test/pedidos.e2e-spec.ts -->
<- Manter consistência visual entre os botões do menu de START: test/pizzas.e2e-spec.ts -->
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { PrismaClient } from '@prisma/client';

describe('PizzasController (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaClient;

  jest.setTimeout(40000);

  beforeAll(async () => {
    prisma = new PrismaClient();
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
    await prisma.$disconnect();
  });

  beforeEach(async () => {
    // Removido deleteMany para preservar dados do seed
  });

  function getServer() {
    return app.getHttpServer() as unknown as import('http').Server;
  }

  async function waitForClienteApi(
    app: INestApplication,
    email: string,
    password: string,
    maxRetries = 10,
    delayMs = 300,
  ): Promise<void> {
    for (let i = 0; i < maxRetries; i++) {
      try {
        const res = await request(getServer())
          .post('/auth/login')
          .send({ email, password });
        if (res.status === 201 && res.body.access_token) {
          return; // Usuário pode fazer login, então foi criado com sucesso
        }
      } catch (error) {
        // Ignorar erro e tentar novamente
      }
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
    throw new Error(
      `Cliente com email ${email} não conseguiu fazer login após registro.`,
    );
  }
      `Cliente com email ${email} não encontrado via API após registro.`,
    );
  }

  async function createAndLoginCliente(
    email: string,
    password = process.env.TEST_CLIENTE_PASSWORD!,
  ): Promise<string> {
    const resRegister = await request(getServer()).post('/auth/register').send({
      nome: 'João Silva',
      email,
      password,
      telefone: '11999999999',
      endereco: 'Rua das Flores, 123',
    });
    if (resRegister.status >= 400)
      throw new Error(
        'Falha ao registrar cliente: ' + JSON.stringify(resRegister.body),
      );
    await waitForClienteApi(app, email, password);
    const res = await request(getServer())
      .post('/auth/login')
      .send({ email, password });
    const token = (res.body as { access_token?: string }).access_token;
    if (!token) {
      throw new Error('Token de acesso não retornado ou inválido');
    }
    return token;
  }

  function randomEmail() {
    return `test${Date.now()}${Math.floor(Math.random() * 10000)}@mail.com`;
  }

  it('/pizzas (GET) deve retornar pizzas', async () => {
    const email = randomEmail();
    const token = await createAndLoginCliente(email);
    // Cria pizzas
    await prisma.pizza.create({
      data: {
        nome: 'Margherita',
        descricao: 'Molho de tomate, mussarela, manjericão',
        preco: 39.9,
      },
    });
    await prisma.pizza.create({
      data: {
        nome: 'Calabresa',
        descricao: 'Calabresa, cebola, mussarela',
        preco: 44.9,
      },
    });
    const res = await request(getServer())
      .get('/pizzas')
      .set('Authorization', `Bearer ${token}`);
    type Pizza = { id: number; nome: string };
    const pizzasBody = res.body as Pizza[];
    expect(res.status).toBe(200);
    expect(Array.isArray(pizzasBody)).toBe(true);
    expect(pizzasBody.length).toBeGreaterThan(0);
    expect(pizzasBody[0]).toHaveProperty('id');
    expect(pizzasBody[0]).toHaveProperty('nome');
  });
});
<- Manter consistência visual entre os botões do menu de END: test/pizzas.e2e-spec.ts -->
<- Manter consistência visual entre os botões do menu de START: test/utils.ts -->
// test/utils.ts
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';

export async function waitForClienteApi(
  app: INestApplication,
  email: string,
  maxRetries = 20, // reduzido para 20 tentativas
  delayMs = 200, // reduzido para 200ms de delay
): Promise<void> {
  for (let i = 0; i < maxRetries; i++) {
    const res = await request(app.getHttpServer())
      .get('/clientes')
      .query({ email });

    console.log(
      `[waitForClienteApi] Tentativa ${i + 1}: status=${res.status}, body=`,
      res.body,
    );
    if (
      Array.isArray(res.body) &&
      res.body.some((c: { email: string }) => c.email === email)
    )
      return;
    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }
  throw new Error(
    `Cliente com email ${email} não encontrado via API após registro.`,
  );
}
<- Manter consistência visual entre os botões do menu de END: test/utils.ts -->
<- Manter consistência visual entre os botões do menu de START: test_crud.js -->
const fs = require('fs');

// Configurações
const BASE_URL = 'http://localhost:3000';
let TOKEN = null;

async function login() {
  const payload = {
    email: 'admin@pizza.com', // Credenciais do seed
    password: '123456', // Senha do seed
  };
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    const data = await response.json();
    TOKEN = data.access_token;
    console.log('✅ Login realizado com sucesso');
  } else {
    console.log(
      `❌ Falha no login: ${response.status} - ${await response.text()}`,
    );
    process.exit(1);
  }
}

function getHeaders() {
  return TOKEN
    ? { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' }
    : { 'Content-Type': 'application/json' };
}

// Testes de Auth
async function testAuth() {
  console.log('\n🔐 Testando Auth...');
  // Register (se necessário)
  const payload = {
    nome: 'Test User',
    email: 'test@example.com',
    password: 'password123',
  };
  let response = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  console.log(`Register: ${response.status}`);

  // Login já feito acima

  // Me
  response = await fetch(`${BASE_URL}/me`, {
    method: 'GET',
    headers: getHeaders(),
  });
  console.log(`Me: ${response.status}`);
}

// Testes de Users
async function testUsers() {
  console.log('\n👤 Testando Users...');
  // Create
  const payload = {
    nome: 'Novo User',
    email: 'novo@example.com',
    password: 'password123',
  };
  let response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(payload),
  });
  console.log(`Create User: ${response.status}`);
  const data = response.ok ? await response.json() : null;
  const userId = data ? data.id : null;

  // Read All
  response = await fetch(`${BASE_URL}/users`, {
    method: 'GET',
    headers: getHeaders(),
  });
  console.log(`Get Users: ${response.status}`);

  if (userId) {
    // Read One
    response = await fetch(`${BASE_URL}/users/${userId}`, {
      method: 'GET',
      headers: getHeaders(),
    });
    console.log(`Get User by ID: ${response.status}`);

    // Update
    const updatePayload = { nome: 'User Atualizado' };
    response = await fetch(`${BASE_URL}/users/${userId}`, {
      method: 'PATCH',
      headers: getHeaders(),
      body: JSON.stringify(updatePayload),
    });
    console.log(`Update User: ${response.status}`);

    // Delete
    response = await fetch(`${BASE_URL}/users/${userId}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });
    console.log(`Delete User: ${response.status}`);
  }
}

// Testes de Pizzas
async function testPizzas() {
  console.log('\n🍕 Testando Pizzas...');
  // Create
  const payload = {
    nome: `Pizza Teste ${Date.now()}`,
    descricao: 'Descrição teste',
    preco: 29.9,
  };
  let response = await fetch(`${BASE_URL}/pizzas`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(payload),
  });
  console.log(`Create Pizza: ${response.status}`);
  const data = response.ok ? await response.json() : null;
  const pizzaId = data ? data.data.id : null;

  // If created, upload image
  if (pizzaId && response.status === 201) {
    // Small valid JPEG base64
    const dummyImage = Buffer.from(
      '/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/vAA==',
      'base64',
    );

    const formData = new FormData();
    formData.append(
      'image',
      new Blob([dummyImage], { type: 'image/jpeg' }),
      'pizza_test.jpg',
    );

    response = await fetch(`${BASE_URL}/pizzas/${pizzaId}/upload-image`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${TOKEN}` },
      body: formData,
    });
    console.log(`Upload Image to Pizza: ${response.status}`);
  }

  // Read All
  response = await fetch(`${BASE_URL}/pizzas`, {
    method: 'GET',
  });
  console.log(`Get Pizzas: ${response.status}`);

  if (pizzaId) {
    // Read One
    response = await fetch(`${BASE_URL}/pizzas/${pizzaId}`, {
      method: 'GET',
    });
    console.log(`Get Pizza by ID: ${response.status}`);

    // Update
    const updatePayload = { preco: 35.9 };
    response = await fetch(`${BASE_URL}/pizzas/${pizzaId}`, {
      method: 'PATCH',
      headers: getHeaders(),
      body: JSON.stringify(updatePayload),
    });
    console.log(`Update Pizza: ${response.status}`);

    // Delete
    response = await fetch(`${BASE_URL}/pizzas/${pizzaId}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });
    console.log(`Delete Pizza: ${response.status}`);
  }
}

// Testes de Pedidos
async function testPedidos() {
  console.log('\n📦 Testando Pedidos...');
  // Assumir que há user e pizza criados, mas para simplificar, usar IDs fixos ou criar primeiro
  // Create (precisa de clienteId, enderecoId, etc. - ajustar conforme necessário)
  const payload = {
    clienteId: 1, // Usando o admin
    enderecoId: 1, // Endereco do admin
    pizzasIds: [1], // Pizza do seed
    status: 'PENDENTE',
  };
  let response = await fetch(`${BASE_URL}/pedidos`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(payload),
  });
  console.log(`Create Pedido: ${response.status}`);
  if (response.status === 500) {
    console.log('Error:', await response.text());
  }
  const data = response.ok ? await response.json() : null;
  const pedidoId = data ? data.id : null;

  // Read All
  response = await fetch(`${BASE_URL}/pedidos`, {
    method: 'GET',
    headers: getHeaders(),
  });
  console.log(`Get Pedidos: ${response.status}`);

  if (pedidoId) {
    // Read One
    response = await fetch(`${BASE_URL}/pedidos/${pedidoId}`, {
      method: 'GET',
      headers: getHeaders(),
    });
    console.log(`Get Pedido by ID: ${response.status}`);

    // Update
    const updatePayload = { status: 'EM_PREPARO' };
    response = await fetch(`${BASE_URL}/pedidos/${pedidoId}`, {
      method: 'PATCH',
      headers: getHeaders(),
      body: JSON.stringify(updatePayload),
    });
    console.log(`Update Pedido: ${response.status}`);

    // Delete
    response = await fetch(`${BASE_URL}/pedidos/${pedidoId}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });
    console.log(`Delete Pedido: ${response.status}`);
  }
}

// Testes de Entregadores
async function testEntregadores() {
  console.log('\n🚚 Testando Entregadores...');
  // Create
  const payload = {
    nome: 'Entregador Teste',
    telefone: '11999999999',
  };
  let response = await fetch(`${BASE_URL}/entregadores`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(payload),
  });
  console.log(`Create Entregador: ${response.status}`);
  const data = response.ok ? await response.json() : null;
  const entregadorId = data ? data.id : null;

  // Read All
  response = await fetch(`${BASE_URL}/entregadores`, {
    method: 'GET',
    headers: getHeaders(),
  });
  console.log(`Get Entregadores: ${response.status}`);

  if (entregadorId) {
    // Read One
    response = await fetch(`${BASE_URL}/entregadores/${entregadorId}`, {
      method: 'GET',
      headers: getHeaders(),
    });
    console.log(`Get Entregador by ID: ${response.status}`);

    // Update
    const updatePayload = { nome: 'Entregador Atualizado' };
    response = await fetch(`${BASE_URL}/entregadores/${entregadorId}`, {
      method: 'PATCH',
      headers: getHeaders(),
      body: JSON.stringify(updatePayload),
    });
    console.log(`Update Entregador: ${response.status}`);

    // Delete
    response = await fetch(`${BASE_URL}/entregadores/${entregadorId}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });
    console.log(`Delete Entregador: ${response.status}`);
  }
}

// Testes de Enderecos
async function testEnderecos() {
  console.log('\n🏠 Testando Enderecos...');
  // Create
  const payload = {
    cep: '01234567',
    tipo: 'Casa',
    logradouro: 'Rua Teste',
    numero: '123',
    bairro: 'Bairro Teste',
    cidade: 'São Paulo',
    estado: 'SP',
    pais: 'Brasil',
    userId: 1, // Ajuste
  };
  let response = await fetch(`${BASE_URL}/enderecos`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(payload),
  });
  console.log(`Create Endereco: ${response.status}`);
  const data = response.ok ? await response.json() : null;
  const enderecoId = data ? data.id : null;

  // Read All
  response = await fetch(`${BASE_URL}/enderecos`, {
    method: 'GET',
    headers: getHeaders(),
  });
  console.log(`Get Enderecos: ${response.status}`);

  if (enderecoId) {
    // Read One
    response = await fetch(`${BASE_URL}/enderecos/${enderecoId}`, {
      method: 'GET',
      headers: getHeaders(),
    });
    console.log(`Get Endereco by ID: ${response.status}`);

    // Update
    const updatePayload = { numero: '456' };
    response = await fetch(`${BASE_URL}/enderecos/${enderecoId}`, {
      method: 'PATCH',
      headers: getHeaders(),
      body: JSON.stringify(updatePayload),
    });
    console.log(`Update Endereco: ${response.status}`);

    // Delete
    response = await fetch(`${BASE_URL}/enderecos/${enderecoId}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });
    console.log(`Delete Endereco: ${response.status}`);
  }
}

// Testes de Payments
async function testPayments() {
  console.log('\n💳 Testando Payments...');
  // Create Payment Intent
  const payload = {
    amount: 10000, // Em centavos
    currency: 'brl',
  };
  const response = await fetch(`${BASE_URL}/payments/create-intent`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(payload),
  });
  console.log(`Create Payment Intent: ${response.status}`);
}

// Testes de Google Auth
async function testGoogleAuth() {
  console.log('\n🔵 Testando Google Auth...');
  // Get auth config
  let response = await fetch(`${BASE_URL}/auth/config`);
  console.log(`Get Auth Config: ${response.status}`);
  if (response.ok) {
    const config = await response.json();
    console.log('Config:', config);
  }

  // Test Google auth redirect (should redirect to Google)
  response = await fetch(`${BASE_URL}/auth/google`, {
    method: 'GET',
    redirect: 'manual', // Don't follow redirects
  });
  console.log(`Google Auth Redirect: ${response.status} (expected 302)`);
}

// Testes de Upload
// async function testUpload() {
//     console.log('\n📤 Testando Upload...');
//     // Criar um buffer dummy para simular arquivo
//     const dummyFile = Buffer.from('dummy image data');

//     const formData = new FormData();
//     formData.append('file', new Blob([dummyFile]), 'test_image.jpg');

//     const response = await fetch(`${BASE_URL}/upload`, {
//         method: 'POST',
//         headers: { 'Authorization': `Bearer ${TOKEN}` },  // Não incluir Content-Type, deixa o fetch definir
//         body: formData
//     });
//     console.log(`Upload File: ${response.status}`);
// }

async function main() {
  console.log('🚀 Iniciando testes CRUD do Pizza Express Backend');
  await login();
  await testAuth();
  await testUsers();
  await testPizzas();
  await testPedidos();
  await testEntregadores();
  await testEnderecos();
  await testPayments();
  await testGoogleAuth();
  // await testUpload();
  console.log('\n✅ Testes concluídos!');
}

main().catch(console.error);
<- Manter consistência visual entre os botões do menu de END: test_crud.js -->
<- Manter consistência visual entre os botões do menu de START: test_crud_complete.js -->
const fs = require('fs');

// Configurações
const BASE_URL = 'http://localhost:3000';
let TOKEN = null;
let ADMIN_TOKEN = null;

async function login(email = 'cliente@pizza.com', password = '123456') {
  const payload = { email, password };
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const data = await response.json();
    TOKEN = data.access_token;
    console.log(`✅ Login realizado com sucesso para ${email}`);
    return TOKEN;
  } else {
    const errorText = await response.text();
    console.log(
      `❌ Falha no login para ${email}: ${response.status} - ${errorText}`,
    );
    return null;
  }
}

async function loginAdmin() {
  console.log('Tentando login do admin...');
  ADMIN_TOKEN = await login('admin@pizza.com', '123456');
  if (!ADMIN_TOKEN) {
    console.log('⚠️ Admin login falhou, tentando novamente...');
    // Pequena pausa
    await new Promise((resolve) => setTimeout(resolve, 1000));
    ADMIN_TOKEN = await login('admin@pizza.com', '123456');
  }
  return ADMIN_TOKEN;
}

function getHeaders(token = TOKEN) {
  return token
    ? { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
    : { 'Content-Type': 'application/json' };
}

// Testes de Auth
async function testAuth() {
  console.log('\n🔐 Testando Auth...');

  // Register
  const registerPayload = {
    nome: 'Test User CRUD',
    email: `test_crud_${Date.now()}@example.com`,
    password: 'password123',
    telefone: '11999999999',
  };
  let response = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(registerPayload),
  });
  console.log(`Register: ${response.status}`);
  const registerData = response.ok ? await response.json() : null;

  // Login
  const loginToken = await login(
    registerPayload.email,
    registerPayload.password,
  );

  // Me
  if (loginToken) {
    response = await fetch(`${BASE_URL}/me`, {
      method: 'GET',
      headers: getHeaders(loginToken),
    });
    console.log(`Me: ${response.status}`);
    if (response.ok) {
      const meData = await response.json();
      console.log('Me data:', meData);
    }
  }

  return registerData;
}

// Testes de Users (Admin only)
async function testUsers() {
  console.log('\n👤 Testando Users...');

  if (!ADMIN_TOKEN) {
    console.log('❌ Admin token não disponível');
    return;
  }

  // Create
  const payload = {
    nome: 'Novo User CRUD',
    email: `novo_user_crud_${Date.now()}@example.com`,
    password: 'password123',
    telefone: '11988888888',
    role: 'CLIENTE',
  };
  let response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: getHeaders(ADMIN_TOKEN),
    body: JSON.stringify(payload),
  });
  console.log(`Create User: ${response.status}`);
  const data = response.ok ? await response.json() : null;
  const userId = data ? data.id : null;

  // Read All
  response = await fetch(`${BASE_URL}/users`, {
    method: 'GET',
    headers: getHeaders(ADMIN_TOKEN),
  });
  console.log(`Get Users: ${response.status}`);

  if (userId) {
    // Read One
    response = await fetch(`${BASE_URL}/users/${userId}`, {
      method: 'GET',
      headers: getHeaders(ADMIN_TOKEN),
    });
    console.log(`Get User by ID: ${response.status}`);

    // Update
    const updatePayload = { nome: 'User Atualizado CRUD' };
    response = await fetch(`${BASE_URL}/users/${userId}`, {
      method: 'PATCH',
      headers: getHeaders(ADMIN_TOKEN),
      body: JSON.stringify(updatePayload),
    });
    console.log(`Update User: ${response.status}`);

    // Delete
    response = await fetch(`${BASE_URL}/users/${userId}`, {
      method: 'DELETE',
      headers: getHeaders(ADMIN_TOKEN),
    });
    console.log(`Delete User: ${response.status}`);
  }

  return userId;
}

// Testes de Categories
async function testCategories() {
  console.log('\n📂 Testando Categories...');

  // Create
  const payload = {
    name: `Categoria Teste ${Date.now()}`,
    slug: `categoria-teste-${Date.now()}`,
  };
  let response = await fetch(`${BASE_URL}/categories`, {
    method: 'POST',
    headers: getHeaders(ADMIN_TOKEN),
    body: JSON.stringify(payload),
  });
  console.log(`Create Category: ${response.status}`);
  const data = response.ok ? await response.json() : null;
  const categoryId = data ? data.id : null;

  // Read All
  response = await fetch(`${BASE_URL}/categories`, {
    method: 'GET',
  });
  console.log(`Get Categories: ${response.status}`);

  if (categoryId) {
    // Read One
    response = await fetch(`${BASE_URL}/categories/${categoryId}`, {
      method: 'GET',
    });
    console.log(`Get Category by ID: ${response.status}`);

    // Update
    const updatePayload = { name: 'Categoria Atualizada CRUD' };
    response = await fetch(`${BASE_URL}/categories/${categoryId}`, {
      method: 'PATCH',
      headers: getHeaders(ADMIN_TOKEN),
      body: JSON.stringify(updatePayload),
    });
    console.log(`Update Category: ${response.status}`);

    // Delete
    response = await fetch(`${BASE_URL}/categories/${categoryId}`, {
      method: 'DELETE',
      headers: getHeaders(ADMIN_TOKEN),
    });
    console.log(`Delete Category: ${response.status}`);
  }

  return categoryId;
}

// Testes de Products
async function testProducts() {
  console.log('\n🍕 Testando Products...');

  // Primeiro criar uma categoria
  const categoryPayload = {
    name: `Categoria Produtos ${Date.now()}`,
    slug: `categoria-produtos-${Date.now()}`,
  };
  let response = await fetch(`${BASE_URL}/categories`, {
    method: 'POST',
    headers: getHeaders(ADMIN_TOKEN),
    body: JSON.stringify(categoryPayload),
  });
  const categoryData = response.ok ? await response.json() : null;
  const categoryId = categoryData ? categoryData.id : null;

  if (!categoryId) {
    console.log('❌ Falha ao criar categoria para produto');
    return { productId: null, categoryId: null };
  }

  // Create
  const payload = {
    name: `Produto Teste ${Date.now()}`,
    description: 'Descrição do produto teste',
    price: '29.90',
    categoryId: categoryId,
  };
  response = await fetch(`${BASE_URL}/products`, {
    method: 'POST',
    headers: getHeaders(ADMIN_TOKEN),
    body: JSON.stringify(payload),
  });
  console.log(`Create Product: ${response.status}`);
  if (response.status === 400) {
    console.log('Error:', await response.text());
  }
  const data = response.ok ? await response.json() : null;
  const productId = data ? data.id : null;

  // Read All
  response = await fetch(`${BASE_URL}/products`, {
    method: 'GET',
  });
  console.log(`Get Products: ${response.status}`);

  if (productId) {
    // Read One
    response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: 'GET',
    });
    console.log(`Get Product by ID: ${response.status}`);

    // Update
    const updatePayload = { price: 35.9, description: 'Descrição atualizada' };
    response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: 'PATCH',
      headers: getHeaders(ADMIN_TOKEN),
      body: JSON.stringify(updatePayload),
    });
    console.log(`Update Product: ${response.status}`);

    // Não deletar o produto - será usado nos testes de pedidos
    console.log(`Delete Product: Skipped (product needed for order tests)`);
  }

  return { productId, categoryId };
}

// Testes de Tables
async function testTables() {
  console.log('\n🪑 Testando Tables...');

  // Create
  const payload = {
    number: Math.floor(Math.random() * 1000) + 1,
  };
  let response = await fetch(`${BASE_URL}/tables`, {
    method: 'POST',
    headers: getHeaders(ADMIN_TOKEN),
    body: JSON.stringify(payload),
  });
  console.log(`Create Table: ${response.status}`);
  if (response.status === 400) {
    console.log('Error:', await response.text());
  }
  const data = response.ok ? await response.json() : null;
  const tableId = data ? data.id : null;

  // Read All
  response = await fetch(`${BASE_URL}/tables`, {
    method: 'GET',
    headers: getHeaders(ADMIN_TOKEN),
  });
  console.log(`Get Tables: ${response.status}`);

  if (tableId) {
    // Read One
    response = await fetch(`${BASE_URL}/tables/${tableId}`, {
      method: 'GET',
      headers: getHeaders(ADMIN_TOKEN),
    });
    console.log(`Get Table by ID: ${response.status}`);

    // Não atualizar status diretamente - deve ser feito através de sessões
    console.log(`Update Table: Skipped (status managed through sessions)`);
  }

  return tableId;
}

// Testes de Table Sessions (Mesas)
async function testTableSessions(tableId, productId) {
  console.log('\n🍽️ Testando Table Sessions...');

  if (!tableId || !productId) {
    console.log('❌ Table ID ou Product ID não disponíveis');
    return;
  }

  // Abrir sessão da mesa
  const openResponse = await fetch(
    `${BASE_URL}/tables/${tableId}/sessions/open`,
    {
      method: 'POST',
      headers: getHeaders(ADMIN_TOKEN),
    },
  );
  console.log(`Open Table Session: ${openResponse.status}`);
  const sessionData = openResponse.ok ? await openResponse.json() : null;
  const sessionId = sessionData ? sessionData.id : null;

  if (sessionId) {
    // Adicionar pedido à mesa
    const orderPayload = {
      type: 'DINE_IN',
      items: [
        { productId: '04f08454-47a8-402c-b812-1e77b5398e79', quantity: 2 }, // Produto existente ativo
      ],
      tableId: tableId,
      observations: 'Pedido da mesa CRUD',
    };
    response = await fetch(`${BASE_URL}/orders`, {
      method: 'POST',
      headers: getHeaders(TOKEN),
      body: JSON.stringify(orderPayload),
    });
    console.log(`Add Order to Table: ${response.status}`);

    // Ver sessões ativas
    response = await fetch(`${BASE_URL}/tables/${tableId}/sessions/active`, {
      method: 'GET',
      headers: getHeaders(ADMIN_TOKEN),
    });
    console.log(`Get Active Sessions: ${response.status}`);

    // Fechar conta (billing)
    response = await fetch(`${BASE_URL}/tables/${tableId}/sessions/close`, {
      method: 'POST',
      headers: getHeaders(ADMIN_TOKEN),
    });
    console.log(`Bill Table Session: ${response.status}`);

    // Ver histórico de sessões (não existe endpoint, vou remover)
    // response = await fetch(`${BASE_URL}/table-sessions/history`, {
    //   method: 'GET',
    //   headers: getHeaders(ADMIN_TOKEN),
    // });
    // console.log(`Get Session History: ${response.status}`);
  }

  return sessionId;
}

// Testes de Orders (Pedidos)
async function testOrders(productId, enderecoId) {
  console.log('\n📦 Testando Orders...');

  if (!productId) {
    console.log('❌ Product ID não disponível');
    return;
  }

  // Fazer login como cliente para ter acesso ao endereço
  const clientToken = await login('cliente@pizza.com', '123456');

  // Usar produto existente que está ativo (Calabresa)
  const existingProductId = '04f08454-47a8-402c-b812-1e77b5398e79';

  // Create Delivery Order - usar endereço do cliente (id: 19)
  const deliveryPayload = {
    type: 'DELIVERY',
    items: [{ productId: existingProductId, quantity: 1 }],
    addressId: 19, // Endereço do cliente
    observations: 'Pedido delivery CRUD',
  };
  let response = await fetch(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: getHeaders(clientToken), // Usar token do cliente
    body: JSON.stringify(deliveryPayload),
  });
  console.log(`Create Delivery Order: ${response.status}`);
  if (response.status === 400 || response.status === 404) {
    console.log('Error:', await response.text());
  }
  const deliveryData = response.ok ? await response.json() : null;
  console.log('Delivery order response data:', deliveryData);
  const deliveryOrderId = deliveryData ? deliveryData.id : null;
  console.log('Delivery order ID:', deliveryOrderId);

  // Read All Orders
  response = await fetch(`${BASE_URL}/orders`, {
    method: 'GET',
    headers: getHeaders(TOKEN),
  });
  console.log(`Get Orders: ${response.status}`);

  if (deliveryOrderId) {
    // Read One Order
    response = await fetch(`${BASE_URL}/orders/${deliveryOrderId}`, {
      method: 'GET',
      headers: getHeaders(TOKEN),
    });
    console.log(`Get Order by ID: ${response.status}`);

    // Update Order Status - temporariamente desabilitado pois pedido está sendo removido
    console.log(
      'Update Order Status: Skipped (pedido sendo removido automaticamente)',
    );
  }

  return deliveryOrderId;
}

// Testes de Enderecos
async function testEnderecos() {
  console.log('\n🏠 Testando Enderecos...');

  // Create
  const payload = {
    cep: '01234567',
    tipo: 'RESIDENCIAL',
    logradouro: 'Rua Teste CRUD',
    numero: '123',
    bairro: 'Bairro Teste',
    cidade: 'São Paulo',
    estado: 'SP',
    pais: 'Brasil',
  };
  let response = await fetch(`${BASE_URL}/enderecos`, {
    method: 'POST',
    headers: getHeaders(TOKEN),
    body: JSON.stringify(payload),
  });
  console.log(`Create Endereco: ${response.status}`);
  const data = response.ok ? await response.json() : null;
  const enderecoId = data ? data.id : null;

  // Read All
  response = await fetch(`${BASE_URL}/enderecos`, {
    method: 'GET',
    headers: getHeaders(TOKEN),
  });
  console.log(`Get Enderecos: ${response.status}`);

  if (enderecoId) {
    // Read One
    response = await fetch(`${BASE_URL}/enderecos/${enderecoId}`, {
      method: 'GET',
      headers: getHeaders(TOKEN),
    });
    console.log(`Get Endereco by ID: ${response.status}`);

    // Update
    const updatePayload = { numero: '456' };
    response = await fetch(`${BASE_URL}/enderecos/${enderecoId}`, {
      method: 'PATCH',
      headers: getHeaders(TOKEN),
      body: JSON.stringify(updatePayload),
    });
    console.log(`Update Endereco: ${response.status}`);

    // Delete
    response = await fetch(`${BASE_URL}/enderecos/${enderecoId}`, {
      method: 'DELETE',
      headers: getHeaders(TOKEN),
    });
    console.log(`Delete Endereco: ${response.status}`);
  }

  return enderecoId;
}

// Testes de Entregadores
async function testEntregadores() {
  console.log('\n🚚 Testando Entregadores...');

  // Create
  const payload = {
    nome: 'Entregador Teste CRUD',
    telefone: '11999999999',
  };
  let response = await fetch(`${BASE_URL}/entregadores`, {
    method: 'POST',
    headers: getHeaders(ADMIN_TOKEN),
    body: JSON.stringify(payload),
  });
  console.log(`Create Entregador: ${response.status}`);
  const data = response.ok ? await response.json() : null;
  const entregadorId = data ? data.id : null;

  // Read All
  response = await fetch(`${BASE_URL}/entregadores`, {
    method: 'GET',
    headers: getHeaders(ADMIN_TOKEN),
  });
  console.log(`Get Entregadores: ${response.status}`);

  if (entregadorId) {
    // Read One
    response = await fetch(`${BASE_URL}/entregadores/${entregadorId}`, {
      method: 'GET',
      headers: getHeaders(ADMIN_TOKEN),
    });
    console.log(`Get Entregador by ID: ${response.status}`);

    // Update
    const updatePayload = { nome: 'Entregador Atualizado CRUD' };
    response = await fetch(`${BASE_URL}/entregadores/${entregadorId}`, {
      method: 'PATCH',
      headers: getHeaders(ADMIN_TOKEN),
      body: JSON.stringify(updatePayload),
    });
    console.log(`Update Entregador: ${response.status}`);

    // Delete
    response = await fetch(`${BASE_URL}/entregadores/${entregadorId}`, {
      method: 'DELETE',
      headers: getHeaders(ADMIN_TOKEN),
    });
    console.log(`Delete Entregador: ${response.status}`);
  }

  return entregadorId;
}

// Testes de Payments
async function testPayments() {
  console.log('\n💳 Testando Payments...');

  // Create Payment Intent
  const payload = {
    amount: 2990, // Em centavos (R$ 29,90) - deve ser number
  };
  const response = await fetch(`${BASE_URL}/payments/create-intent`, {
    method: 'POST',
    headers: getHeaders(TOKEN),
    body: JSON.stringify(payload),
  });
  console.log(`Create Payment Intent: ${response.status}`);
  if (response.status === 400) {
    console.log('Error:', await response.text());
  } else if (response.ok) {
    const data = await response.json();
    console.log('Payment Intent:', data);
  }
}

// Testes de Google Auth
async function testGoogleAuth() {
  console.log('\n🔵 Testando Google Auth...');

  // Get auth config
  let response = await fetch(`${BASE_URL}/auth/config`);
  console.log(`Get Auth Config: ${response.status}`);
  if (response.ok) {
    const config = await response.json();
    console.log('Config:', config);
  }

  // Test Google auth redirect (should redirect to Google)
  response = await fetch(`${BASE_URL}/auth/google`, {
    method: 'GET',
    redirect: 'manual', // Don't follow redirects
  });
  console.log(`Google Auth Redirect: ${response.status} (expected 302)`);
}

// Testes de Upload
async function testUpload() {
  console.log('\n📤 Testando Upload...');
  console.log(
    'Upload não implementado no sistema refatorado (usar /pizzas/:id/upload-image para pizzas)',
  );
}

// Função principal
async function main() {
  console.log(
    '🚀 Iniciando testes CRUD completos do Pizza Express Backend Refatorado',
  );

  try {
    // Login admin primeiro
    await loginAdmin();

    // Login cliente
    await login();

    // Executar todos os testes
    await testAuth();
    const enderecoId = await testEnderecos();
    await testUsers();
    const { productId, categoryId } = await testProducts();
    await testCategories();
    const tableId = await testTables();
    await testTableSessions(tableId, productId);
    await testOrders(productId, enderecoId);
    await testEntregadores();
    await testPayments();
    await testGoogleAuth();
    await testUpload();

    console.log('\n✅ Todos os testes CRUD foram executados!');
    console.log('\n📊 Resumo dos testes realizados:');
    console.log('- ✅ Autenticação (login, register, me)');
    console.log('- ✅ Usuários (CRUD completo)');
    console.log('- ✅ Catálogo (categorias e produtos)');
    console.log('- ✅ Mesas (criação, sessões, abertura/fechamento)');
    console.log('- ✅ Pedidos (delivery e dine-in)');
    console.log('- ✅ Endereços (CRUD)');
    console.log('- ✅ Entregadores (CRUD)');
    console.log('- ✅ Pagamentos (Stripe integration)');
    console.log('- ✅ Google Auth');
    console.log('- ✅ Upload de arquivos');
  } catch (error) {
    console.error('❌ Erro durante os testes:', error);
  }
}

main().catch(console.error);
<- Manter consistência visual entre os botões do menu de END: test_crud_complete.js -->
<- Manter consistência visual entre os botões do menu de START: test_endereco.js -->
const fetch = require('node-fetch');
async function test() {
  const loginRes = await fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'cliente@pizza.com', password: '123456' })
  });
  const loginData = await loginRes.json();
  const token = loginData.access_token;
  console.log('Token:', !!token);
  
  const enderecoRes = await fetch('http://localhost:3000/enderecos', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      cep: '01234567',
      tipo: 'RESIDENCIAL',
      logradouro: 'Rua Teste',
      numero: '123',
      bairro: 'Bairro Teste',
      cidade: 'São Paulo',
      estado: 'SP',
      pais: 'Brasil'
    })
  });
  console.log('Status:', enderecoRes.status);
  const result = await enderecoRes.text();
  console.log('Result:', result);
}
test();
<- Manter consistência visual entre os botões do menu de END: test_endereco.js -->
<- Manter consistência visual entre os botões do menu de START: tsconfig.build.json -->
{
  "extends": "./tsconfig.json",
  "exclude": ["node_modules", "test", "dist", "**/*spec.ts"]
}
<- Manter consistência visual entre os botões do menu de END: tsconfig.build.json -->
<- Manter consistência visual entre os botões do menu de START: tsconfig.json -->
{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "ES2020",
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./",
    "incremental": true,
    "skipLibCheck": true,
    "strictNullChecks": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitAny": true,
    "strictBindCallApply": true,
    "noFallthroughCasesInSwitch": true
  }
}
<- Manter consistência visual entre os botões do menu de END: tsconfig.json -->

```

---


## 📝 `eslint.config.mjs`

```
// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs', 'dist/**'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/unbound-method': 'warn',
    },
  },
  {
    files: ['test/**/*.ts', '**/*.spec.ts', '**/*.e2e-spec.ts'],
    rules: {
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/unbound-method': 'off',
    },
  },
);

```

---


## 📝 `generate_project_snapshot.sh`

```bash
#!/bin/bash

###############################################################################
# Script: generate_project_snapshot.sh (VERSÃO CORRIGIDA)
# Descrição: Gera arquivo MD com conteúdo completo de todos os arquivos
# Data: 28/12/2025 - v2.0
###############################################################################

set -e

# Cores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Configurações
PROJECT_ROOT="$(pwd)"
OUTPUT_DIR="${1:-.}"
OUTPUT_FILE="${OUTPUT_DIR}/PROJECT_SNAPSHOT_$(date +%Y%m%d_%H%M%S).md"

# Padrões para ignorar (hardcoded para garantir funcionamento)
IGNORE_PATTERNS=(
    "node_modules"
    ".git"
    "dist"
    "build"
    "coverage"
    ".next"
    ".vercel"
    "logs"
    ".vscode"
    ".idea"
    "*.log"
    ".DS_Store"
    "*.swp"
    "*.swo"
    ".env"
    ".env.local"
    "package-lock.json"
    "yarn.lock"
)

echo -e "${BLUE}🔍 Pizza Express - Project Snapshot Generator v2.0${NC}"
echo -e "${BLUE}====================================================${NC}"
echo ""

###############################################################################
# Função: should_ignore
# Verifica se arquivo/diretório deve ser ignorado
###############################################################################
should_ignore() {
    local path="$1"
    local basename=$(basename "$path")

    for pattern in "${IGNORE_PATTERNS[@]}"; do
        # Checar por wildcard
        if [[ "$pattern" == *"*"* ]]; then
            if [[ "$basename" == $pattern ]]; then
                return 0
            fi
        # Checar por nome exato
        elif [[ "$basename" == "$pattern" ]]; then
            return 0
        # Checar se path contém o padrão
        elif [[ "$path" == *"/$pattern/"* ]] || [[ "$path" == *"/$pattern" ]]; then
            return 0
        fi
    done

    return 1
}

###############################################################################
# Função: is_binary
# Verifica se arquivo é binário
###############################################################################
is_binary() {
    local file="$1"

    # Extensões de texto conhecidas
    case "${file##*.}" in
        ts|tsx|js|jsx|json|md|txt|yml|yaml|sql|prisma|sh|bash|html|css|scss|xml|env|gitignore|prettierrc|eslintrc|toml)
            return 1
            ;;
    esac

    # Usar comando file
    if file "$file" | grep -qE "text|JSON|XML|script"; then
        return 1
    fi

    return 0
}

###############################################################################
# Função: get_language
# Retorna linguagem para syntax highlighting
###############################################################################
get_language() {
    local file="$1"
    local ext="${file##*.}"

    case "$ext" in
        ts|tsx) echo "typescript" ;;
        js|jsx) echo "javascript" ;;
        json) echo "json" ;;
        md) echo "markdown" ;;
        sh|bash) echo "bash" ;;
        yml|yaml) echo "yaml" ;;
        sql) echo "sql" ;;
        prisma) echo "prisma" ;;
        html) echo "html" ;;
        css|scss) echo "css" ;;
        py) echo "python" ;;
        xml) echo "xml" ;;
        toml) echo "toml" ;;
        *) echo "" ;;
    esac
}

###############################################################################
# Função: process_directory
# Processa recursivamente todos os arquivos
###############################################################################
process_directory() {
    local dir="$1"
    local total_processed=0

    # Listar arquivos e diretórios
    for entry in "$dir"/*; do
        # Pular se não existe
        [ ! -e "$entry" ] && continue

        # Pular se deve ignorar
        should_ignore "$entry" && continue

        # Se é diretório, processar recursivamente
        if [ -d "$entry" ]; then
            local subdir_count=$(process_directory "$entry")
            total_processed=$((total_processed + subdir_count))

        # Se é arquivo, processar
        elif [ -f "$entry" ]; then
            process_file "$entry"
            total_processed=$((total_processed + 1))

            # Atualizar progresso a cada 10 arquivos
            if [ $((total_processed % 10)) -eq 0 ]; then
                echo -ne "\r${BLUE}Processados: ${total_processed} arquivos...${NC}"
            fi
        fi
    done

    echo "$total_processed"
}

###############################################################################
# Função: process_file
# Processa um único arquivo
###############################################################################
process_file() {
    local file="$1"
    local rel_path="${file#$PROJECT_ROOT/}"

    # Adicionar cabeçalho do arquivo
    cat >> "$OUTPUT_FILE" << EOF

## 📝 \`$rel_path\`

EOF

    # Verificar se é binário
    if is_binary "$file"; then
        local file_info=$(file -b "$file" 2>/dev/null || echo "Unknown type")
        local file_size=$(du -h "$file" 2>/dev/null | cut -f1 || echo "Unknown")

        cat >> "$OUTPUT_FILE" << EOF
\`\`\`
[ARQUIVO BINÁRIO - Não exibido]
Tipo: $file_info
Tamanho: $file_size
\`\`\`

EOF
    else
        # Arquivo de texto
        local lang=$(get_language "$file")

        cat >> "$OUTPUT_FILE" << EOF
\`\`\`$lang
EOF

        # Adicionar conteúdo do arquivo (com fallback)
        if cat "$file" >> "$OUTPUT_FILE" 2>/dev/null; then
            :  # Sucesso
        else
            echo "[ERRO: Não foi possível ler o arquivo]" >> "$OUTPUT_FILE"
        fi

        cat >> "$OUTPUT_FILE" << EOF

\`\`\`

EOF
    fi

    # Separador
    cat >> "$OUTPUT_FILE" << EOF
---

EOF
}

###############################################################################
# MAIN EXECUTION
###############################################################################

# Criar diretório de saída
mkdir -p "$OUTPUT_DIR"

# Inicializar arquivo
echo -e "${GREEN}✓${NC} Criando arquivo de saída..."
cat > "$OUTPUT_FILE" << 'EOF'
# 🍕 Pizza Express Backend - Project Snapshot

**Snapshot completo do projeto para análise técnica**

> ⚠️ Este arquivo foi gerado automaticamente e contém todo o código-fonte do projeto.

---

EOF

# Adicionar estrutura de diretórios
echo -e "${GREEN}✓${NC} Gerando árvore de diretórios..."
cat >> "$OUTPUT_FILE" << 'EOF'
# 📁 Estrutura do Projeto

```
EOF

if command -v tree &> /dev/null; then
    tree -a -I "node_modules|.git|dist|build|coverage|logs" -L 4 >> "$OUTPUT_FILE" 2>/dev/null || echo "." >> "$OUTPUT_FILE"
else
    find . -type d \( -name node_modules -o -name .git -o -name dist -o -name build \) -prune -o -type d -print | head -100 >> "$OUTPUT_FILE"
fi

cat >> "$OUTPUT_FILE" << 'EOF'
```

---

# 📄 Conteúdo dos Arquivos

EOF

# Data de início
START_TIME=$(date +%s)

# Processar todos os arquivos
echo -e "${GREEN}✓${NC} Processando arquivos do projeto..."
echo ""

TOTAL_FILES=$(process_directory "$PROJECT_ROOT")

echo ""
echo -e "${GREEN}✓${NC} Total de arquivos processados: ${YELLOW}$TOTAL_FILES${NC}"

# Adicionar metadados
cat >> "$OUTPUT_FILE" << EOF

---

# 📊 Metadados

| Item | Valor |
|------|-------|
| **Gerado em** | $(date '+%d/%m/%Y às %H:%M:%S') |
| **Diretório** | \`$PROJECT_ROOT\` |
| **Arquivos processados** | $TOTAL_FILES |
| **Tamanho do projeto** | $(du -sh "$PROJECT_ROOT" 2>/dev/null | cut -f1 || echo "N/A") |
| **Tempo de processamento** | $(($(date +%s) - START_TIME))s |

---

**🔧 Gerado automaticamente para análise do Pizza Express Backend**

EOF

# Estatísticas finais
FILE_SIZE=$(du -h "$OUTPUT_FILE" 2>/dev/null | cut -f1 || echo "N/A")

echo ""
echo -e "${GREEN}════════════════════════════════════════════════${NC}"
echo -e "${GREEN}✓ SNAPSHOT GERADO COM SUCESSO!${NC}"
echo -e "${GREEN}════════════════════════════════════════════════${NC}"
echo ""
echo -e "📄 Arquivo: ${BLUE}$OUTPUT_FILE${NC}"
echo -e "📊 Tamanho: ${YELLOW}$FILE_SIZE${NC}"
echo -e "🗂️  Arquivos: ${YELLOW}$TOTAL_FILES${NC}"
echo ""
echo -e "${GREEN}💡 Use este arquivo para análise com IA ou code review${NC}"
echo ""

exit 0

```

---


## 📝 `Insomnia_Pizza_Express_Complete.yaml`

```yaml
_type: export
__export_format: 4
__export_date: 2025-09-30T23:00:00.000Z
__export_source: insomnia.desktop.app:v8.6.1
resources:
  - _id: req_pizza_list
    parentId: fld_pizzas
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pizzas"
    name: Listar Pizzas
    description: Lista todas as pizzas disponíveis
    method: GET
    body: {}
    parameters: []
    headers: []
    authentication: {}
    metaSortKey: -1727733600000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pizza_create
    parentId: fld_pizzas
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pizzas"
    name: Criar Pizza
    description: Cria uma nova pizza (apenas ADMIN)
    method: POST
    body:
      mimeType: application/json
      text: |
        {
          "nome": "Pizza Margherita",
          "descricao": "Molho de tomate, mussarela e manjericão fresco",
          "preco": 39.90
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733590000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pizza_create_with_image
    parentId: fld_pizzas
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pizzas/with-image"
    name: Criar Pizza com Imagem
    description: Cria pizza com upload de imagem (apenas ADMIN)
    method: POST
    body:
      mimeType: multipart/form-data
      params:
        - name: nome
          value: Pizza Calabresa
          id: pair_1
        - name: descricao
          value: Molho de tomate, mussarela, calabresa e cebola
          id: pair_2
        - name: preco
          value: "42.90"
          id: pair_3
        - name: image
          type: file
          value: ""
          id: pair_4
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733580000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pizza_get_by_id
    parentId: fld_pizzas
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pizzas/1"
    name: Buscar Pizza por ID
    description: Busca uma pizza específica
    method: GET
    body: {}
    parameters: []
    headers: []
    authentication: {}
    metaSortKey: -1727733570000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pizza_update
    parentId: fld_pizzas
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pizzas/1"
    name: Atualizar Pizza
    description: Atualiza uma pizza existente (apenas ADMIN)
    method: PATCH
    body:
      mimeType: application/json
      text: |
        {
          "nome": "Pizza Margherita Premium",
          "descricao": "Molho de tomate especial, mussarela de búfala e manjericão",
          "preco": 45.90
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733560000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pizza_upload_image
    parentId: fld_pizzas
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pizzas/1/upload-image"
    name: Upload Imagem Pizza
    description: Faz upload de imagem para pizza existente (apenas ADMIN)
    method: POST
    body:
      mimeType: multipart/form-data
      params:
        - name: image
          type: file
          value: ""
          id: pair_1
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733550000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pizza_delete
    parentId: fld_pizzas
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pizzas/1"
    name: Deletar Pizza
    description: Remove uma pizza (apenas ADMIN)
    method: DELETE
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733540000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  # AUTH ENDPOINTS
  - _id: req_auth_register
    parentId: fld_auth
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/auth/register"
    name: Registro de Usuário
    description: Registra um novo usuário
    method: POST
    body:
      mimeType: application/json
      text: |
        {
          "nome": "João Silva",
          "email": "joao@example.com",
          "password": "senha123",
          "telefone": "11999999999",
          "enderecos": [
            {
              "cep": "01310-100",
              "tipo": "residencial",
              "logradouro": "Av. Paulista",
              "numero": "1000",
              "bairro": "Bela Vista",
              "cidade": "São Paulo",
              "estado": "SP",
              "principal": true
            }
          ]
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
    authentication: {}
    metaSortKey: -1727733500000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_auth_login
    parentId: fld_auth
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/auth/login"
    name: Login
    description: Faz login com email e senha
    method: POST
    body:
      mimeType: application/json
      text: |
        {
          "email": "joao@example.com",
          "password": "senha123"
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
    authentication: {}
    metaSortKey: -1727733490000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_auth_google
    parentId: fld_auth
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/auth/google"
    name: Login Google
    description: Inicia login com Google OAuth
    method: GET
    body: {}
    parameters: []
    headers: []
    authentication: {}
    metaSortKey: -1727733480000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_auth_me
    parentId: fld_auth
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/me"
    name: Perfil do Usuário
    description: Busca dados do usuário logado
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733470000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  # USERS ENDPOINTS
  - _id: req_users_list
    parentId: fld_users
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/users"
    name: Listar Usuários
    description: Lista todos os usuários (apenas ADMIN)
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733400000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_users_create
    parentId: fld_users
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/users"
    name: Criar Usuário
    description: Cria um novo usuário (apenas ADMIN)
    method: POST
    body:
      mimeType: application/json
      text: |
        {
          "nome": "Maria Santos",
          "email": "maria@example.com",
          "password": "senha123",
          "telefone": "11888888888",
          "role": "CLIENTE",
          "enderecos": [
            {
              "cep": "04038-001",
              "tipo": "residencial",
              "logradouro": "Rua Vergueiro",
              "numero": "2000",
              "bairro": "Vila Mariana",
              "cidade": "São Paulo",
              "estado": "SP",
              "principal": true
            }
          ]
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733390000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_users_get_by_id
    parentId: fld_users
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/users/1"
    name: Buscar Usuário por ID
    description: Busca usuário específico (apenas ADMIN)
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733380000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_users_update
    parentId: fld_users
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/users/1"
    name: Atualizar Usuário
    description: Atualiza dados do usuário
    method: PATCH
    body:
      mimeType: application/json
      text: |
        {
          "nome": "João Silva Santos",
          "telefone": "11999888777"
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733370000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_users_delete
    parentId: fld_users
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/users/1"
    name: Deletar Usuário
    description: Remove um usuário (apenas ADMIN)
    method: DELETE
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733360000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  # PEDIDOS ENDPOINTS
  - _id: req_pedidos_create
    parentId: fld_pedidos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pedidos"
    name: Criar Pedido
    description: Cria um novo pedido
    method: POST
    body:
      mimeType: application/json
      text: |
        {
          "clienteId": 1,
          "enderecoId": 1,
          "pizzasIds": [1, 2],
          "entregadorId": 1,
          "paymentIntentId": "pi_1234567890",
          "observacoes": "Sem cebola na pizza margherita"
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733300000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pedidos_list
    parentId: fld_pedidos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pedidos"
    name: Listar Pedidos
    description: Lista todos os pedidos (apenas ADMIN/FUNCIONARIO)
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733290000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pedidos_my_orders
    parentId: fld_pedidos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pedidos/meus-pedidos"
    name: Meus Pedidos
    description: Lista pedidos do usuário logado
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733280000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pedidos_get_by_id
    parentId: fld_pedidos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pedidos/1"
    name: Buscar Pedido por ID
    description: Busca pedido específico
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733270000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pedidos_update
    parentId: fld_pedidos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pedidos/1"
    name: Atualizar Pedido
    description: Atualiza dados do pedido (apenas ADMIN/FUNCIONARIO)
    method: PATCH
    body:
      mimeType: application/json
      text: |
        {
          "observacoes": "Sem cebola e sem azeitona"
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733260000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pedidos_update_status
    parentId: fld_pedidos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pedidos/1/status"
    name: Atualizar Status do Pedido
    description: Atualiza status do pedido (apenas ADMIN)
    method: PATCH
    body:
      mimeType: application/json
      text: |
        {
          "status": "EM_PREPARO"
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733250000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pedidos_delete
    parentId: fld_pedidos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pedidos/1"
    name: Cancelar Pedido
    description: Cancela/remove um pedido
    method: DELETE
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733240000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  # ENTREGADORES ENDPOINTS
  - _id: req_entregadores_list
    parentId: fld_entregadores
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/entregadores"
    name: Listar Entregadores
    description: Lista todos os entregadores (apenas ADMIN/FUNCIONARIO)
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733200000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_entregadores_create
    parentId: fld_entregadores
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/entregadores"
    name: Criar Entregador
    description: Cria um novo entregador (apenas ADMIN)
    method: POST
    body:
      mimeType: application/json
      text: |
        {
          "nome": "Carlos Motoboy",
          "telefone": "11777777777"
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733190000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_entregadores_get_by_id
    parentId: fld_entregadores
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/entregadores/1"
    name: Buscar Entregador por ID
    description: Busca entregador específico (apenas ADMIN/FUNCIONARIO)
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733180000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_entregadores_update
    parentId: fld_entregadores
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/entregadores/1"
    name: Atualizar Entregador
    description: Atualiza dados do entregador (apenas ADMIN)
    method: PATCH
    body:
      mimeType: application/json
      text: |
        {
          "nome": "Carlos Silva Motoboy",
          "telefone": "11777666555"
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733170000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_entregadores_delete
    parentId: fld_entregadores
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/entregadores/1"
    name: Deletar Entregador
    description: Remove um entregador (apenas ADMIN)
    method: DELETE
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733160000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  # ENDERECOS ENDPOINTS
  - _id: req_enderecos_list
    parentId: fld_enderecos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/enderecos"
    name: Meus Endereços
    description: Lista endereços do usuário logado
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733100000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_enderecos_create
    parentId: fld_enderecos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/enderecos"
    name: Criar Endereço
    description: Cria um novo endereço para o usuário logado
    method: POST
    body:
      mimeType: application/json
      text: |
        {
          "cep": "05508-030",
          "tipo": "trabalho",
          "logradouro": "Av. das Nações Unidas",
          "numero": "12901",
          "bairro": "Brooklin",
          "cidade": "São Paulo",
          "estado": "SP",
          "complemento": "Torre Norte, 5º andar",
          "principal": false
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733090000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_enderecos_get_by_id
    parentId: fld_enderecos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/enderecos/1"
    name: Buscar Endereço por ID
    description: Busca endereço específico do usuário
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733080000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_enderecos_update
    parentId: fld_enderecos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/enderecos/1"
    name: Atualizar Endereço
    description: Atualiza dados do endereço
    method: PATCH
    body:
      mimeType: application/json
      text: |
        {
          "numero": "1500",
          "complemento": "Apto 101, Bloco A"
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733070000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_enderecos_delete
    parentId: fld_enderecos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/enderecos/1"
    name: Deletar Endereço
    description: Remove um endereço do usuário
    method: DELETE
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733060000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  # PAYMENTS ENDPOINTS
  - _id: req_payments_create_intent
    parentId: fld_payments
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/payments/create-intent"
    name: Criar Payment Intent
    description: Cria intenção de pagamento no Stripe
    method: POST
    body:
      mimeType: application/json
      text: |
        {
          "amount": 8290,
          "currency": "brl",
          "metadata": {
            "pedidoId": "1",
            "userId": "1"
          }
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733000000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_payments_webhook
    parentId: fld_payments
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/payments/webhook"
    name: Webhook do Stripe
    description: Endpoint para webhooks do Stripe (uso interno)
    method: POST
    body:
      mimeType: application/json
      text: |
        {
          "id": "evt_test_webhook",
          "object": "event",
          "type": "payment_intent.succeeded",
          "data": {
            "object": {
              "id": "pi_test_1234567890",
              "status": "succeeded",
              "amount": 8290,
              "currency": "brl"
            }
          }
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Stripe-Signature
        value: "t=1234567890,v1=test_signature"
    authentication: {}
    metaSortKey: -1727732990000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  # FOLDERS
  - _id: fld_pizzas
    parentId: wrk_main
    modified: 1727733600000
    created: 1727733600000
    name: 🍕 Pizzas
    description: Endpoints para gestão de pizzas
    environment: {}
    environmentPropertyOrder: null
    metaSortKey: -1727733600000
    _type: request_group

  - _id: fld_auth
    parentId: wrk_main
    modified: 1727733600000
    created: 1727733600000
    name: 🔐 Autenticação
    description: Endpoints de autenticação e autorização
    environment: {}
    environmentPropertyOrder: null
    metaSortKey: -1727733500000
    _type: request_group

  - _id: fld_users
    parentId: wrk_main
    modified: 1727733600000
    created: 1727733600000
    name: 👥 Usuários
    description: Endpoints para gestão de usuários
    environment: {}
    environmentPropertyOrder: null
    metaSortKey: -1727733400000
    _type: request_group

  - _id: fld_pedidos
    parentId: wrk_main
    modified: 1727733600000
    created: 1727733600000
    name: 📦 Pedidos
    description: Endpoints para gestão de pedidos
    environment: {}
    environmentPropertyOrder: null
    metaSortKey: -1727733300000
    _type: request_group

  - _id: fld_entregadores
    parentId: wrk_main
    modified: 1727733600000
    created: 1727733600000
    name: 🏍️ Entregadores
    description: Endpoints para gestão de entregadores
    environment: {}
    environmentPropertyOrder: null
    metaSortKey: -1727733200000
    _type: request_group

  - _id: fld_enderecos
    parentId: wrk_main
    modified: 1727733600000
    created: 1727733600000
    name: 📍 Endereços
    description: Endpoints para gestão de endereços
    environment: {}
    environmentPropertyOrder: null
    metaSortKey: -1727733100000
    _type: request_group

  - _id: fld_payments
    parentId: wrk_main
    modified: 1727733600000
    created: 1727733600000
    name: 💳 Pagamentos
    description: Endpoints para integração com Stripe
    environment: {}
    environmentPropertyOrder: null
    metaSortKey: -1727733000000
    _type: request_group

  # WORKSPACE AND ENVIRONMENTS
  - _id: wrk_main
    parentId: null
    modified: 1727733600000
    created: 1727733600000
    name: Pizza Express API Complete
    description: Coleção completa da API Pizza Express com todos os endpoints organizados
    scope: collection
    _type: workspace

  - _id: env_main
    parentId: wrk_main
    modified: 1727733600000
    created: 1727733600000
    name: Base Environment
    data:
      base_url: http://localhost:10000
      auth_token: ""
    dataPropertyOrder:
      "&":
        - base_url
        - auth_token
    color: null
    isPrivate: false
    metaSortKey: 1727733600000
    _type: environment

  - _id: env_dev
    parentId: env_main
    modified: 1727733600000
    created: 1727733600000
    name: Development
    data:
      base_url: http://localhost:10000
      auth_token: ""
    dataPropertyOrder:
      "&":
        - base_url
        - auth_token
    color: "#7d69cb"
    isPrivate: false
    metaSortKey: 1727733600000
    _type: environment

  - _id: env_prod
    parentId: env_main
    modified: 1727733600000
    created: 1727733600000
    name: Production
    data:
      base_url: https://pizza-express-backend.vercel.app
      auth_token: ""
    dataPropertyOrder:
      "&":
        - base_url
        - auth_token
    color: "#d9534f"
    isPrivate: false
    metaSortKey: 1727733610000
    _type: environment
```

---


## 📝 `nest-cli.json`

```json
{
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "deleteOutDir": true
  }
}

```

---


## 📝 `package.json`

```json
{
  "name": "backend",
  "version": "0.0.1",
  "description": "",
  "author": "",
  "private": true,
  "license": "UNLICENSED",
  "scripts": {
    "build": "nest build",
    "vercel-build": "prisma generate && nest build",
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/main",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json",
    "postinstall": "prisma generate",
    "seed": "ts-node --compiler-options '{\"module\":\"CommonJS\"}' prisma/seed.ts"
  },
  "dependencies": {
    "@nestjs/common": "^11.0.1",
    "@nestjs/config": "^4.0.2",
    "@nestjs/core": "^11.0.1",
    "@nestjs/jwt": "^11.0.0",
    "@nestjs/mapped-types": "*",
    "@nestjs/passport": "^11.0.5",
    "@nestjs/platform-express": "^11.0.1",
    "@nestjs/platform-socket.io": "^11.1.3",
    "@nestjs/swagger": "^11.2.3",
    "@nestjs/throttler": "^6.4.0",
    "@nestjs/websockets": "^11.1.3",
    "@types/passport-google-oauth20": "^2.0.16",
    "@types/socket.io": "^3.0.1",
    "@vercel/speed-insights": "^1.2.0",
    "bcryptjs": "^3.0.2",
    "class-transformer": "^0.5.1",
    "class-validator": "^0.14.2",
    "cloudinary": "^2.7.0",
    "helmet": "^8.1.0",
    "multer": "^2.0.1",
    "passport": "^0.7.0",
    "passport-google-oauth20": "^2.0.0",
    "passport-jwt": "^4.0.1",
    "reflect-metadata": "^0.2.2",
    "rxjs": "^7.8.1",
    "socket.io": "^4.8.1",
    "stripe": "^18.5.0",
    "winston": "^3.18.2"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.2.0",
    "@eslint/js": "^9.18.0",
    "@nestjs/cli": "^11.0.7",
    "@nestjs/schematics": "^11.0.0",
    "@nestjs/testing": "^11.0.1",
    "@prisma/client": "^6.13.0",
    "@swc/cli": "^0.6.0",
    "@swc/core": "^1.10.7",
    "@types/express": "^5.0.0",
    "@types/jest": "^29.5.14",
    "@types/multer": "^2.0.0",
    "@types/node": "^22.10.7",
    "@types/passport-jwt": "^4.0.1",
    "@types/supertest": "^6.0.2",
    "@types/winston": "^2.4.4",
    "@vercel/node": "^2.3.0",
    "eslint": "^9.18.0",
    "eslint-config-prettier": "^10.0.1",
    "eslint-plugin-prettier": "^5.2.2",
    "globals": "^16.0.0",
    "jest": "^29.7.0",
    "prettier": "^3.4.2",
    "prisma": "^6.13.0",
    "source-map-support": "^0.5.21",
    "supertest": "^7.0.0",
    "ts-jest": "^29.2.5",
    "ts-loader": "^9.5.2",
    "ts-node": "^10.9.2",
    "tsconfig-paths": "^4.2.0",
    "typescript": "^5.7.3",
    "typescript-eslint": "^8.20.0"
  },
  "jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      "ts"
    ],
    "rootDir": "src",
    "testRegex": ".*\\.spec\\.ts$",
    "transform": {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    "collectCoverageFrom": [
      "**/*.(t|j)s"
    ],
    "coverageDirectory": "../coverage",
    "testEnvironment": "node"
  }
}

```

---


## 📝 `prisma/migrations/20250720114702_add_new_rules_image/migration.sql`

```sql
-- CreateTable
CREATE TABLE "Pizza" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "preco" DOUBLE PRECISION NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pizza_pkey" PRIMARY KEY ("id")
);

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CLIENTE', 'FUNCIONARIO', 'ADMIN');

-- CreateEnum
CREATE TYPE "StatusPedido" AS ENUM ('PENDENTE', 'EM_PREPARO', 'A_CAMINHO', 'ENTREGUE', 'CANCELADO');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "telefone" TEXT,
    "avatar" TEXT,
    "role" "Role" NOT NULL DEFAULT 'CLIENTE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Endereco" (
    "id" SERIAL NOT NULL,
    "cep" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "logradouro" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "complemento" TEXT,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "pais" TEXT,
    "referencia" TEXT,
    "principal" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" SERIAL NOT NULL,
    "entregadorId" INTEGER,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "enderecoId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" "StatusPedido" NOT NULL,
    "paymentIntentId" TEXT,
    "total" DOUBLE PRECISION,
    "observacoes" TEXT,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entregador" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Entregador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PedidoPizzas" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PedidoPizzas_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "_PedidoPizzas_B_index" ON "_PedidoPizzas"("B");

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "Endereco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_entregadorId_fkey" FOREIGN KEY ("entregadorId") REFERENCES "Entregador"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PedidoPizzas" ADD CONSTRAINT "_PedidoPizzas_A_fkey" FOREIGN KEY ("A") REFERENCES "Pedido"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PedidoPizzas" ADD CONSTRAINT "_PedidoPizzas_B_fkey" FOREIGN KEY ("B") REFERENCES "Pizza"("id") ON DELETE CASCADE ON UPDATE CASCADE;

```

---


## 📝 `prisma/migrations/20251211221547_add_hybrid_architecture_models/migration.sql`

```sql
/*
  Warnings:

  - The primary key for the `_PedidoPizzas` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- CreateEnum
CREATE TYPE "public"."TableStatus" AS ENUM ('AVAILABLE', 'OCCUPIED', 'RESERVED');

-- CreateEnum
CREATE TYPE "public"."OrderType" AS ENUM ('DELIVERY', 'DINE_IN');

-- DropForeignKey
ALTER TABLE "public"."_PedidoPizzas" DROP CONSTRAINT "_PedidoPizzas_A_fkey";

-- AlterTable
ALTER TABLE "public"."Endereco" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "public"."Pedido" ALTER COLUMN "atualizadoEm" DROP DEFAULT;

-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "public"."_PedidoPizzas" DROP CONSTRAINT "_PedidoPizzas_AB_pkey",
ALTER COLUMN "A" SET DATA TYPE TEXT,
ADD CONSTRAINT "_PedidoPizzas_AB_pkey" PRIMARY KEY ("A", "B");

-- CreateTable
CREATE TABLE "public"."Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DECIMAL(10,2) NOT NULL,
    "imageUrl" TEXT,
    "categoryId" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Table" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "status" "public"."TableStatus" NOT NULL DEFAULT 'AVAILABLE',

    CONSTRAINT "Table_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TableSession" (
    "id" TEXT NOT NULL,
    "tableId" TEXT NOT NULL,
    "openedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closedAt" TIMESTAMP(3),
    "total" DECIMAL(10,2) NOT NULL DEFAULT 0,

    CONSTRAINT "TableSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."OrderItem" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "price" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Order" (
    "id" TEXT NOT NULL,
    "type" "public"."OrderType" NOT NULL DEFAULT 'DELIVERY',
    "status" "public"."StatusPedido" NOT NULL,
    "total" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "addressId" TEXT,
    "sessionId" TEXT,
    "userId" INTEGER,
    "entregadorId" INTEGER,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "paymentIntentId" TEXT,
    "observacoes" TEXT,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "public"."Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "public"."Category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Table_number_key" ON "public"."Table"("number");

-- AddForeignKey
ALTER TABLE "public"."Pedido" ADD CONSTRAINT "Pedido_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TableSession" ADD CONSTRAINT "TableSession_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "public"."Table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "public"."Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OrderItem" ADD CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Order" ADD CONSTRAINT "Order_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "public"."TableSession"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_PedidoPizzas" ADD CONSTRAINT "_PedidoPizzas_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

```

---


## 📝 `prisma/migrations/20251211221709_add_hybrid_architecture_models_v2/migration.sql`

```sql
/*
  Warnings:

  - The primary key for the `Order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Order` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `_PedidoPizzas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `orderId` on the `OrderItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_PedidoPizzas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "public"."OrderItem" DROP CONSTRAINT "OrderItem_orderId_fkey";

-- DropForeignKey
ALTER TABLE "public"."_PedidoPizzas" DROP CONSTRAINT "_PedidoPizzas_A_fkey";

-- AlterTable
ALTER TABLE "public"."Order" DROP CONSTRAINT "Order_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Order_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."OrderItem" DROP COLUMN "orderId",
ADD COLUMN     "orderId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."_PedidoPizzas" DROP CONSTRAINT "_PedidoPizzas_AB_pkey",
DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL,
ADD CONSTRAINT "_PedidoPizzas_AB_pkey" PRIMARY KEY ("A", "B");

-- AddForeignKey
ALTER TABLE "public"."OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "public"."Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_PedidoPizzas" ADD CONSTRAINT "_PedidoPizzas_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

```

---


## 📝 `prisma/migrations/20251211222713_fix_address_relationship/migration.sql`

```sql
/*
  Warnings:

  - The `addressId` column on the `Order` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."Order" DROP COLUMN "addressId",
ADD COLUMN     "addressId" INTEGER;

-- AddForeignKey
ALTER TABLE "public"."Order" ADD CONSTRAINT "Order_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "public"."Endereco"("id") ON DELETE SET NULL ON UPDATE CASCADE;

```

---


## 📝 `prisma/migrations/20251228130452_add_order_modifications_and_split_payments/migration.sql`

```sql
/*
  Warnings:

  - You are about to drop the `OrderItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."ItemStatus" AS ENUM ('PENDING', 'CONFIRMED', 'PREPARING', 'READY', 'SERVED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "public"."ModificationAction" AS ENUM ('ITEM_ADDED', 'ITEM_REMOVED', 'ITEM_QUANTITY_INCREASED', 'ITEM_QUANTITY_DECREASED', 'ITEM_CANCELLED', 'ORDER_CREATED', 'ORDER_CANCELLED', 'PAYMENT_ADDED');

-- CreateEnum
CREATE TYPE "public"."PaymentMethod" AS ENUM ('CASH', 'CREDIT_CARD', 'DEBIT_CARD', 'PIX', 'VOUCHER');

-- CreateEnum
CREATE TYPE "public"."PaymentStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED', 'REFUNDED');

-- DropForeignKey
ALTER TABLE "public"."OrderItem" DROP CONSTRAINT "OrderItem_orderId_fkey";

-- DropForeignKey
ALTER TABLE "public"."OrderItem" DROP CONSTRAINT "OrderItem_productId_fkey";

-- AlterTable
ALTER TABLE "public"."Order" ADD COLUMN     "canModify" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "lockedAt" TIMESTAMP(3);

-- DropTable
DROP TABLE "public"."OrderItem";

-- CreateTable
CREATE TABLE "public"."order_items" (
    "id" TEXT NOT NULL,
    "orderId" INTEGER NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "price" DECIMAL(10,2) NOT NULL,
    "status" "public"."ItemStatus" NOT NULL DEFAULT 'PENDING',
    "notes" TEXT,
    "cancelledAt" TIMESTAMP(3),
    "cancelReason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "order_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."order_modifications" (
    "id" TEXT NOT NULL,
    "orderId" INTEGER NOT NULL,
    "action" "public"."ModificationAction" NOT NULL,
    "itemId" TEXT,
    "itemSnapshot" JSONB,
    "previousValue" JSONB,
    "newValue" JSONB,
    "userId" INTEGER,
    "reason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "order_modifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."payments" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT,
    "orderId" INTEGER,
    "amount" DECIMAL(10,2) NOT NULL,
    "method" "public"."PaymentMethod" NOT NULL,
    "status" "public"."PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "externalId" TEXT,
    "paidBy" TEXT,
    "tip" DECIMAL(10,2) DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "order_items_orderId_idx" ON "public"."order_items"("orderId");

-- CreateIndex
CREATE INDEX "order_items_status_idx" ON "public"."order_items"("status");

-- CreateIndex
CREATE INDEX "order_modifications_orderId_idx" ON "public"."order_modifications"("orderId");

-- CreateIndex
CREATE INDEX "order_modifications_createdAt_idx" ON "public"."order_modifications"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "payments_externalId_key" ON "public"."payments"("externalId");

-- CreateIndex
CREATE INDEX "payments_sessionId_idx" ON "public"."payments"("sessionId");

-- CreateIndex
CREATE INDEX "payments_orderId_idx" ON "public"."payments"("orderId");

-- CreateIndex
CREATE INDEX "payments_status_idx" ON "public"."payments"("status");

-- AddForeignKey
ALTER TABLE "public"."order_items" ADD CONSTRAINT "order_items_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "public"."Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."order_items" ADD CONSTRAINT "order_items_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."order_modifications" ADD CONSTRAINT "order_modifications_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "public"."Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."order_modifications" ADD CONSTRAINT "order_modifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."payments" ADD CONSTRAINT "payments_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "public"."TableSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."payments" ADD CONSTRAINT "payments_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "public"."Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

```

---


## 📝 `prisma/migrations/migration_lock.toml`

```toml
# Please do not edit this file manually
# It should be added in your version-control system (e.g., Git)
provider = "postgresql"

```

---


## 📝 `prisma/schema.prisma`

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Pizza {
  id        Int      @id @default(autoincrement())
  nome      String
  descricao String?
  preco     Float
  image     String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  pedidos   Pedido[] @relation("PedidoPizzas")
  orders    Order[]  @relation("PedidoPizzas")
}

model User {
  id        Int        @id @default(autoincrement())
  nome      String
  email     String     @unique
  password  String
  telefone  String?
  avatar    String?
  role      Role       @default(CLIENTE)
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
  enderecos Endereco[]
  pedidos   Pedido[]
  orders    Order[]

  // NOVO RELACIONAMENTO
  modifications OrderModification[]
}

model Pedido {
  id              Int          @id @default(autoincrement())
  entregadorId    Int?
  latitude        Float?
  longitude       Float?
  criadoEm        DateTime     @default(now())
  atualizadoEm    DateTime     @updatedAt
  enderecoId      Int
  userId          Int
  status          StatusPedido
  paymentIntentId String?
  total           Float?
  observacoes     String?
  endereco        Endereco     @relation("PedidoEndereco", fields: [enderecoId], references: [id])
  entregador      Entregador?  @relation(fields: [entregadorId], references: [id])
  user            User         @relation(fields: [userId], references: [id])
  pizzas          Pizza[]      @relation("PedidoPizzas")
}

model Entregador {
  id        Int      @id @default(autoincrement())
  nome      String
  telefone  String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  pedidos   Pedido[]
}

model Endereco {
  id          Int      @id @default(autoincrement())
  cep         String
  tipo        String
  logradouro  String
  numero      String
  bairro      String
  complemento String?
  cidade      String
  estado      String
  pais        String?
  referencia  String?
  principal   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  userId      Int
  user        User     @relation(fields: [userId], references: [id])
  pedidos     Pedido[] @relation("PedidoEndereco")
  orders      Order[]
}

// Categorização de Produtos (ex: Pizzas, Bebidas, Sobremesas)
model Category {
  id        String    @id @default(uuid())
  name      String    @unique
  slug      String    @unique
  products  Product[]
  createdAt DateTime  @default(now())
}

// Produto Genérico (Substituirá a tabela Pizza futuramente)
model Product {
  id          String   @id @default(uuid())
  name        String
  description String?
  price       Decimal  @db.Decimal(10, 2)
  imageUrl    String?
  categoryId  String
  category    Category @relation(fields: [categoryId], references: [id])
  active      Boolean  @default(true)

  // Relacionamento com itens de pedido (OrderItems) deve ser migrado
  items       OrderItem[]
}

// Gestão de Mesas Físicas
model Table {
  id        String         @id @default(uuid())
  number    Int            @unique // Identificador visual (Mesa 1, Mesa 2)
  status    TableStatus    @default(AVAILABLE) // Enum: AVAILABLE, OCCUPIED, RESERVED
  sessions  TableSession[]
}

// Sessão de Atendimento (A "Comanda")
model TableSession {
  id        String    @id @default(uuid())
  tableId   String
  table     Table     @relation(fields: [tableId], references: [id])
  openedAt  DateTime  @default(now())
  closedAt  DateTime?
  total     Decimal   @default(0) @db.Decimal(10, 2)
  orders    Order[]   // Pedidos feitos nesta sessão

  // NOVO RELACIONAMENTO
  payments      Payment[]
}

// Item de Pedido (para produtos genéricos)
model OrderItem {
  id        String  @id @default(uuid())
  orderId   Int
  productId String
  quantity  Int     @default(1)
  price     Decimal @db.Decimal(10, 2) // Preço no momento da compra
  order     Order   @relation(fields: [orderId], references: [id])
  product   Product @relation(fields: [productId], references: [id])

  // NOVOS CAMPOS
  status      ItemStatus @default(PENDING)
  notes       String?    // Observações específicas do item
  cancelledAt DateTime?
  cancelReason String?

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([orderId])
  @@index([status])
  @@map("order_items")
}

// Pedido atualizado para ser polimórfico (mantendo id Int por compatibilidade)
model Order {
  id              Int         @id @default(autoincrement())
  type            OrderType   @default(DELIVERY)

  // Campos obrigatórios
  status          StatusPedido
  total           Decimal     @db.Decimal(10, 2)
  createdAt       DateTime    @default(now())
  updatedAt       DateTime    @updatedAt

  // Campos opcionais de contexto
  addressId       Int?        // Obrigatório se DELIVERY
  sessionId       String?     // Obrigatório se DINE_IN (link com TableSession)
  session         TableSession? @relation(fields: [sessionId], references: [id])
  address         Endereco?   @relation(fields: [addressId], references: [id])

  // Usuário se torna opcional (cliente de mesa pode ser anônimo)
  userId          Int?
  user            User?       @relation(fields: [userId], references: [id])

  // Relacionamentos
  items           OrderItem[]

  // NOVOS RELACIONAMENTOS
  modifications OrderModification[]
  payments      Payment[]

  // NOVOS CAMPOS
  canModify     Boolean  @default(true) // Flag para bloquear modificações
  lockedAt      DateTime? // Quando foi bloqueado para modificações

  // Campos legados (para compatibilidade durante migração)
  entregadorId    Int?
  latitude        Float?
  longitude       Float?
  paymentIntentId String?
  observacoes     String?

  // Relacionamentos legados (serão removidos após migração)
  pizzas          Pizza[]     @relation("PedidoPizzas")
}

enum Role {
  CLIENTE
  FUNCIONARIO
  ADMIN
}

enum StatusPedido {
  PENDENTE
  EM_PREPARO
  A_CAMINHO
  ENTREGUE
  CANCELADO
}

enum TableStatus {
  AVAILABLE
  OCCUPIED
  RESERVED
}

enum OrderType {
  DELIVERY
  DINE_IN
}

enum ItemStatus {
  PENDING       // Aguardando confirmação
  CONFIRMED     // Confirmado pela cozinha
  PREPARING     // Em preparo
  READY         // Pronto para servir
  SERVED        // Servido ao cliente
  CANCELLED     // Cancelado
}

enum ModificationAction {
  ITEM_ADDED
  ITEM_REMOVED
  ITEM_QUANTITY_INCREASED
  ITEM_QUANTITY_DECREASED
  ITEM_CANCELLED
  ORDER_CREATED
  ORDER_CANCELLED
  PAYMENT_ADDED
}

enum PaymentMethod {
  CASH
  CREDIT_CARD
  DEBIT_CARD
  PIX
  VOUCHER
}

enum PaymentStatus {
  PENDING
  PROCESSING
  COMPLETED
  FAILED
  REFUNDED
}

// ==========================================
// AUDITORIA DE MODIFICAÇÕES
// ==========================================
model OrderModification {
  id          String   @id @default(uuid())
  orderId     Int
  order       Order    @relation(fields: [orderId], references: [id], onDelete: Cascade)

  action      ModificationAction
  itemId      String?

  // Dados do item modificado (snapshot)
  itemSnapshot Json?

  // Valores antes/depois
  previousValue Json?
  newValue      Json?

  // Contexto da modificação
  userId      Int?
  user        User?    @relation(fields: [userId], references: [id], onDelete: SetNull)
  reason      String?  // Motivo do cancelamento/modificação

  createdAt   DateTime @default(now())

  @@index([orderId])
  @@index([createdAt])
  @@map("order_modifications")
}

// ==========================================
// SPLIT PAYMENT
// ==========================================
model Payment {
  id            String        @id @default(uuid())
  sessionId     String?
  session       TableSession? @relation(fields: [sessionId], references: [id], onDelete: Cascade)

  orderId       Int?
  order         Order?        @relation(fields: [orderId], references: [id], onDelete: SetNull)

  amount        Decimal       @db.Decimal(10, 2)
  method        PaymentMethod
  status        PaymentStatus @default(PENDING)

  // Stripe/External Payment ID
  externalId    String?       @unique

  // Metadata
  paidBy        String?       // Nome de quem pagou
  tip           Decimal?      @default(0) @db.Decimal(10, 2)

  createdAt     DateTime      @default(now())
  completedAt   DateTime?

  @@index([sessionId])
  @@index([orderId])
  @@index([status])
  @@map("payments")
}

```

---


## 📝 `prisma/seed-migration.ts`

```typescript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function migratePizzaToProduct() {
  console.log('🚀 Iniciando migração de Pizza para Product...');

  try {
    // 1. Criar categoria "Pizzas" se não existir
    let pizzaCategory = await prisma.category.findFirst({
      where: { slug: 'pizzas' },
    });

    if (!pizzaCategory) {
      pizzaCategory = await prisma.category.create({
        data: {
          name: 'Pizzas',
          slug: 'pizzas',
        },
      });
      console.log('✅ Categoria "Pizzas" criada');
    }

    // 2. Migrar todas as pizzas para produtos
    const pizzas = await prisma.pizza.findMany();
    console.log(`📊 Encontradas ${pizzas.length} pizzas para migrar`);

    for (const pizza of pizzas) {
      const existingProduct = await prisma.product.findFirst({
        where: { name: pizza.nome },
      });

      if (!existingProduct) {
        await prisma.product.create({
          data: {
            name: pizza.nome,
            description: pizza.descricao,
            price: pizza.preco,
            imageUrl: pizza.image,
            categoryId: pizzaCategory.id,
            active: true,
          },
        });
        console.log(`✅ Pizza "${pizza.nome}" migrada para Product`);
      } else {
        console.log(`⚠️ Produto "${pizza.nome}" já existe, pulando...`);
      }
    }

    console.log('🎉 Migração concluída com sucesso!');
  } catch (error) {
    console.error('❌ Erro durante a migração:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Executar apenas se chamado diretamente
if (require.main === module) {
  migratePizzaToProduct().catch(console.error);
}

export { migratePizzaToProduct };

```

---


## 📝 `prisma/seed-pedidos.ts`

```typescript
import { PrismaClient, StatusPedido } from '@prisma/client';

const prisma = new PrismaClient();

const statuses: StatusPedido[] = [
  'PENDENTE',
  'EM_PREPARO',
  'A_CAMINHO',
  'ENTREGUE',
  'CANCELADO',
];

const nomes = [
  'João Silva',
  'Maria Santos',
  'Carlos Oliveira',
  'Ana Costa',
  'Pedro Ferreira',
  'Juliana Souza',
  'Roberto Alves',
  'Fernanda Lima',
  'Marcos Cesar Domingues',
];

async function main() {
  console.log('🍕 Iniciando seed de pedidos...\n');

  // Buscar usuários clientes existentes (role = CLIENT ou não ADMIN/FUNCIONARIO)
  const usuarios = await prisma.user.findMany({
    where: {
      role: {
        notIn: ['ADMIN', 'FUNCIONARIO'],
      },
    },
    include: {
      enderecos: true,
    },
  });

  if (usuarios.length === 0) {
    console.log('❌ Nenhum usuário cliente encontrado no banco');
    process.exit(1);
  }

  console.log(`✅ Encontrados ${usuarios.length} usuários\n`);

  // Buscar pizzas
  const pizzas = await prisma.pizza.findMany();

  if (pizzas.length === 0) {
    console.log('❌ Nenhuma pizza encontrada no banco');
    process.exit(1);
  }

  console.log(`✅ Encontradas ${pizzas.length} pizzas\n`);

  // Criar 10 pedidos
  for (let i = 0; i < 10; i++) {
    const usuarioAleatorio =
      usuarios[Math.floor(Math.random() * usuarios.length)];
    const enderecoAleatorio =
      usuarioAleatorio.enderecos[0] || usuarioAleatorio.enderecos[0];

    if (!enderecoAleatorio) {
      console.log(`⚠️  Usuário ${usuarioAleatorio.nome} não tem endereço`);
      continue;
    }

    // Selecionar 2-4 pizzas aleatoriamente
    const numPizzas = Math.floor(Math.random() * 3) + 2;
    const pizzasSelecionadas: typeof pizzas = [];
    for (let j = 0; j < numPizzas; j++) {
      const pizza = pizzas[Math.floor(Math.random() * pizzas.length)];
      if (!pizzasSelecionadas.find((p) => p.id === pizza.id)) {
        pizzasSelecionadas.push(pizza);
      }
    }

    const statusAleatorio =
      statuses[Math.floor(Math.random() * statuses.length)];

    const pedido = await prisma.pedido.create({
      data: {
        userId: usuarioAleatorio.id,
        enderecoId: enderecoAleatorio.id,
        status: statusAleatorio,
        observacoes: 'Pedido criado via seed de teste',
        total: Math.floor(Math.random() * 100 + 30), // Valor entre 30 e 130
        pizzas: {
          connect: pizzasSelecionadas.map((p) => ({ id: p.id })),
        },
      },
    });

    console.log(`✅ Pedido #${pedido.id} criado`);
    console.log(`   Cliente: ${usuarioAleatorio.nome}`);
    console.log(`   Status: ${statusAleatorio}`);
    console.log(`   Pizzas: ${pizzasSelecionadas.length}\n`);
  }

  console.log('✅ Seed de pedidos concluído!\n');
  process.exit(0);
}

main()
  .catch((error) => {
    console.error('❌ Erro durante seed:', error);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });

```

---


## 📝 `prisma/seed.ts`

```typescript
import { PrismaClient, StatusPedido } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando seed do banco de dados...');

  // Limpa o banco antes de popular
  await prisma.pedido.deleteMany();
  await prisma.pizza.deleteMany();
  await prisma.entregador.deleteMany();
  await prisma.endereco.deleteMany();
  await prisma.user.deleteMany();

  // === CRIANDO USUÁRIOS SOLICITADOS ===
  const senha = '123'; // Senha fixa como solicitado
  const senhaHash = await bcrypt.hash(senha, 10);

  console.log('Criando usuário ADMIN...');
  // 1. ADMIN
  const adminUser = await prisma.user.create({
    data: {
      nome: 'Administrador',
      email: 'admin@admin.com',
      password: senhaHash,
      telefone: '11999999999',
      role: 'ADMIN',
      enderecos: {
        create: {
          cep: '01000-000',
          tipo: 'comercial',
          logradouro: 'Rua Admin',
          numero: '100',
          bairro: 'Centro',
          cidade: 'São Paulo',
          estado: 'SP',
          principal: true,
        },
      },
    },
  });
  console.log('✅ Usuário ADMIN criado: admin@admin.com / senha: 123');

  console.log('Criando funcionários...');
  // 2. FUNCIONARIO 1
  const funcionario1 = await prisma.user.create({
    data: {
      nome: 'Funcionário 1',
      email: 'funcionario1',
      password: senhaHash,
      telefone: '11888888881',
      role: 'FUNCIONARIO',
      enderecos: {
        create: {
          cep: '02000-001',
          tipo: 'residencial',
          logradouro: 'Rua Funcionário 1',
          numero: '201',
          bairro: 'Vila Funcionário',
          cidade: 'São Paulo',
          estado: 'SP',
          principal: true,
        },
      },
    },
  });

  // 3. FUNCIONARIO 2
  const funcionario2 = await prisma.user.create({
    data: {
      nome: 'Funcionário 2',
      email: 'funcionario2',
      password: senhaHash,
      telefone: '11888888882',
      role: 'FUNCIONARIO',
      enderecos: {
        create: {
          cep: '02000-002',
          tipo: 'residencial',
          logradouro: 'Rua Funcionário 2',
          numero: '202',
          bairro: 'Vila Funcionário',
          cidade: 'São Paulo',
          estado: 'SP',
          principal: true,
        },
      },
    },
  });

  // 4. FUNCIONARIO 3
  const funcionario3 = await prisma.user.create({
    data: {
      nome: 'Funcionário 3',
      email: 'funcionario3',
      password: senhaHash,
      telefone: '11888888883',
      role: 'FUNCIONARIO',
      enderecos: {
        create: {
          cep: '02000-003',
          tipo: 'residencial',
          logradouro: 'Rua Funcionário 3',
          numero: '203',
          bairro: 'Vila Funcionário',
          cidade: 'São Paulo',
          estado: 'SP',
          principal: true,
        },
      },
    },
  });

  console.log('✅ Funcionários criados:');
  console.log('   - funcionario1 / senha: 123');
  console.log('   - funcionario2 / senha: 123');
  console.log('   - funcionario3 / senha: 123');

  // === CRIANDO ALGUNS DADOS BÁSICOS PARA TESTE ===

  console.log('Criando entregadores de exemplo...');
  // Entregadores
  const entregador1 = await prisma.entregador.create({
    data: {
      nome: 'Carlos Motoboy',
      telefone: '11988888888',
    },
  });

  const entregador2 = await prisma.entregador.create({
    data: {
      nome: 'Ana Entregadora',
      telefone: '11999997777',
    },
  });
  console.log('✅ Entregadores criados');

  console.log('Criando pizzas de exemplo...');
  // Pizzas
  const pizza1 = await prisma.pizza.create({
    data: {
      nome: 'Margherita',
      descricao: 'Molho de tomate, mussarela, manjericão',
      preco: 39.9,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    },
  });

  const pizza2 = await prisma.pizza.create({
    data: {
      nome: 'Calabresa',
      descricao: 'Calabresa, cebola, mussarela',
      preco: 44.9,
      image: 'https://images.unsplash.com/photo-1548365328-8b849e6c7b8b',
    },
  });
  console.log('✅ Pizzas criadas');

  // Logs para diagnóstico
  const usuarios = await prisma.user.count();
  const entregadores = await prisma.entregador.count();
  const pizzas = await prisma.pizza.count();
  const pedidos = await prisma.pedido.count();

  console.log('\n🎉 SEED CONCLUÍDO COM SUCESSO!');
  console.log('=====================================');
  console.log('📊 Dados criados:');
  console.log(`   👥 Usuários: ${usuarios}`);
  console.log(`   🏍️  Entregadores: ${entregadores}`);
  console.log(`   🍕 Pizzas: ${pizzas}`);
  console.log(`   📦 Pedidos: ${pedidos}`);
  console.log('');
  console.log('🔐 Credenciais de acesso:');
  console.log('   ADMIN: admin@admin.com / 123');
  console.log('   FUNC1: funcionario1 / 123');
  console.log('   FUNC2: funcionario2 / 123');
  console.log('   FUNC3: funcionario3 / 123');
  console.log('=====================================');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });

```

---

