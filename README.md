# 🍕 Pizza Express Backend# 🍕 Pizza Express API & Frontend Guide



<div align="center">---



![Pizza Express](https://img.shields.io/badge/Pizza-Express-red?style=for-the-badge&logo=pizza&logoColor=white)## 📦 Backend - Pizza Express

![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=for-the-badge)

![Version](https://img.shields.io/badge/Version-2.0.0-blue?style=for-the-badge)### 🚦 Funcionalidades

- Autenticação JWT + Google OAuth com captura de avatar

**API REST completa para sistema de delivery de pizzas com arquitetura moderna e escalável**- CRUD de usuários (migrado de clientes), pizzas, pedidos, entregadores

- Upload de imagens via Cloudinary

[🚀 Demo](#demo) • [📖 Documentação](#documentação) • [🛠️ Instalação](#instalação) • [🔧 API](#api-endpoints)- **💳 Sistema de pagamentos Stripe completo com webhooks**

- WebSockets para entregadores

</div>- Documentação Swagger

- Docker Ready

---

### 💳 Sistema de Pagamentos

## 📋 Visão Geral- **Payment Intents** do Stripe para processamento seguro

- **Webhooks** para confirmação automática de pagamentos

O **Pizza Express Backend** é uma API REST robusta e moderna desenvolvida para sistemas de delivery de pizzas. Construída com **NestJS** e **TypeScript**, oferece uma arquitetura limpa, escalável e production-ready com foco em performance e segurança.- **Integração completa** com fluxo de pedidos

- **Atualização automática** de status após pagamento confirmado

### 🎯 **Principais Características**

**📖 Documentação detalhada:** Ver `Payment_Flow_Documentation.md`

- ⚡ **Performance Otimizada** - Queries N+1 eliminadas, cache inteligente

- 🛡️ **Segurança Avançada** - JWT + OAuth2, Rate Limiting, CORS configurado### 🏗️ Arquitetura

- 🏗️ **Arquitetura Limpa** - SOLID principles, Domain Services, Clean Code- NestJS + TypeScript

- 📊 **Monitoramento** - Logging estruturado com Winston, Error tracking- PostgreSQL + Prisma ORM

- 🔄 **Real-time** - WebSocket para tracking de entregadores- JWT Bearer Token + Google OAuth Strategy

- 💳 **Pagamentos** - Integração completa com Stripe- Cloudinary para imagens

- 📱 **Mobile Ready** - API otimizada para apps mobile- Testes: Jest + Supertest

- Deploy: Vercel

---

#### Estrutura de Módulos

## 🚀 Features Principais```

src/

### 🍕 **Sistema de Pizzas**├── auth/           [PROTEGIDO] - JWT, OAuth Google, guards, estratégias

- ✅ CRUD completo com validações├── users/          - CRUD de usuários (migrado de clientes)

- ✅ Upload de imagens (Cloudinary)├── entregadores/   - CRUD + WebSocket para localização

- ✅ Categorização e filtros├── enderecos/      - CRUD de endereços (vinculados ao usuário)

- ✅ Controle de estoque├── pedidos/        - Sistema de pedidos com enderecoId

- ✅ Preços dinâmicos├── pizzas/         - CRUD de pizzas + upload de imagens

├── upload/         - Serviços de upload (Cloudinary)

### 👥 **Gestão de Usuários**├── prisma.module.ts - Configuração do Prisma

- ✅ Registro e autenticação└── main.ts         [PROTEGIDO] - Bootstrap da aplicação

- ✅ Login social (Google OAuth)```

- ✅ Perfis de usuário com avatares

- ✅ Sistema de roles (Cliente, Admin, Funcionário)### 🛡️ Segurança & Políticas

- ✅ Gestão de endereços múltiplos- Não editar arquivos protegidos sem permissão

- Não commitar sem autorização

### 📦 **Sistema de Pedidos**- Endpoints protegidos com `@UseGuards(JwtAuthGuard)`

- ✅ Criação de pedidos com múltiplas pizzas- **PROIBIDO uso de tipagem do tipo `any`!**

- ✅ Tracking de status em tempo real- Respostas padronizadas:

- ✅ Histórico completo de pedidos```typescript

- ✅ Cálculo automático de preços{

- ✅ Observações personalizadas  statusCode: 201,

  message: "Descrição da ação",

### 🏍️ **Gestão de Entregadores**  data: objeto_retornado

- ✅ CRUD de entregadores}

- ✅ Tracking GPS em tempo real```

- ✅ Status de disponibilidade

- ✅ Histórico de entregas### 🧑‍💻 DTOs & Validação

- ✅ WebSocket para localização- Usar class-validator: `IsNotEmpty`, `IsString`, `IsNumber`, `IsOptional`, `IsUrl`

- Imports organizados

### 💳 **Sistema de Pagamentos**- **Tipagem rigorosa**: Evitar `any`, usar tipos específicos

- ✅ Integração completa com Stripe

- ✅ Payment Intents seguros### 🐘 Banco de Dados (Prisma)

- ✅ Webhooks para confirmação- **User** (id, nome, email, password, telefone, avatar?, role)

- ✅ Múltiplos métodos de pagamento- **Endereco** (id, userId, cep, tipo, logradouro, numero, bairro, cidade, estado, principal)

- ✅ Controle de transações- **Pizza** (id, nome, descricao, preco, imagemUrl?)

- **Pedido** (id, userId, enderecoId, pizzas[], status, observacoes, total, createdAt)

### 📍 **Gestão de Endereços**- **Entregador** (id, nome, email, telefone, veiculo, placa)

- ✅ Múltiplos endereços por usuário

- ✅ Endereço principal automático#### Comandos úteis

- ✅ Validação de CEP```bash

- ✅ Geolocalizaçãonpx prisma migrate dev --name nome_da_migracao

npx prisma migrate deploy

---npx prisma studio

npx prisma migrate reset --force  # Para resetar em dev

## 🏗️ Arquitetura Técnica```



### **Stack Principal**### 🔐 Autenticação

- **Backend Framework**: NestJS 11.x- JWT obrigatório em todos endpoints (exceto `/auth/register`, `/auth/login`, `/auth/google`)

- **Language**: TypeScript 5.x- **Google OAuth**: `/auth/google` (redireciona) → `/auth/google/callback` (processa)

- **Database**: PostgreSQL- Avatar capturado automaticamente do Google e salvo no campo `User.avatar`

- **ORM**: Prisma 6.x- Payload JWT: `{ sub: userId, email, role }`

- **Authentication**: JWT + Passport- Endpoint `/me` retorna dados do usuário logado incluindo avatar

- **File Upload**: Cloudinary

- **Payments**: Stripe### 🌍 CORS & Deploy

- **Real-time**: Socket.IO- Dev: `http://localhost:3000`

- **Logging**: Winston- Prod: `process.env.FRONTEND_URL`

- **Validation**: Class Validator- Deploy: Vercel

- **Testing**: Jest- Google OAuth: Callback configurado para produção



### **Padrões Arquiteturais**### 🧪 Testes

- ✅ **SOLID Principles** aplicados```bash

- ✅ **Clean Architecture** com Domain Servicesnpm run test         # Testes unitários

- ✅ **Repository Pattern** com Prismanpm run test:e2e     # Testes e2e (sequencial)

- ✅ **Decorator Pattern** para Guards customizadosnpm run test:cov     # Coverage

- ✅ **Builder Pattern** para Response DTOs```

- ✅ **Strategy Pattern** para diferentes auth methods

---

### **Performance & Segurança**

- ⚡ **N+1 Queries** eliminadas## � Documentação da API - Insomnia Collection

- 🛡️ **Global Exception Filter** customizado  

- 🔒 **Rate Limiting** configurado### 📁 Arquivos Disponíveis

- 📊 **Structured Logging** profissional- **`Insomnia_complete.yaml`** - Coleção completa com TODOS os endpoints

- 🔐 **Helmet.js** para security headers- **`WebSocket_Documentation.md`** - Documentação específica do WebSocket

- ✨ **Type Safety** 100% (zero `any`)

### 🚀 Como Usar

---

#### 1. Importar no Insomnia

## 🛠️ Instalação1. Abra o Insomnia

2. **Application > Preferences > Data > Import Data > From File**

### **Pré-requisitos**3. Selecione `Insomnia_complete.yaml`

- Node.js 18+ 4. Clique em "Import"

- PostgreSQL 14+

- npm ou yarn#### 2. Configurar Ambiente

- **Localhost**: Para desenvolvimento local

### **1. Clone o Repositório**- **Production**: Para ambiente de produção

```bash- Configure as variáveis:

git clone https://github.com/RacconWebFenix/pizza-express-backend.git  - `base_url`: URL da API

cd pizza-express-backend  - `jwt`: Token JWT (obtenha fazendo login)

```  - `user_id`, `pizza_id`, etc.: IDs para testes



### **2. Instale as Dependências**#### 3. Fluxo de Teste Recomendado

```bash1. **Login**: `POST /auth/login` → Copie o token JWT

npm install2. **Configure JWT**: Cole o token na variável `jwt` do ambiente

```3. **Teste endpoints**: Comece pelos GETs, depois POSTs

4. **Para WebSocket**: Use Postman ou Thunder Client (não suportado no Insomnia)

### **3. Configure as Variáveis de Ambiente**

```bash### 📊 Endpoints Documentados

cp .env.example .env

```#### 🔐 Autenticação (5 endpoints)

- Login tradicional e Google OAuth

Edite o arquivo `.env` com suas configurações:- Configurações e perfil do usuário



```env#### 👥 Usuários (6 endpoints)

# Database- CRUD completo + busca por email

DATABASE_URL="postgresql://user:password@localhost:5432/pizza_express"

#### 🏠 Endereços (5 endpoints)

# JWT- CRUD de endereços vinculados ao usuário

JWT_SECRET="your-super-secret-jwt-key"

#### 🍕 Pizzas (7 endpoints)

# Google OAuth- CRUD + upload de imagens (3 formas diferentes)

GOOGLE_CLIENT_ID="your-google-client-id"

GOOGLE_CLIENT_SECRET="your-google-client-secret"#### 📦 Pedidos (6 endpoints)

- CRUD + atualização de status + cálculo automático de total

# Cloudinary

CLOUDINARY_CLOUD_NAME="your-cloud-name"#### 🚴 Entregadores (5 endpoints)

CLOUDINARY_API_KEY="your-api-key"- CRUD de entregadores

CLOUDINARY_API_SECRET="your-api-secret"

#### 💳 Pagamentos (2 endpoints)

# Stripe- Stripe Payment Intents + Webhooks

STRIPE_SECRET_KEY="sk_test_your-stripe-secret"

STRIPE_WEBHOOK_SECRET="whsec_your-webhook-secret"#### 🏠 App (1 endpoint)

- Status da API

# App

NODE_ENV="development"### 🔧 Exemplos de Uso

PORT=10000

FRONTEND_URL="http://localhost:3000"#### Login e obtenção de token

``````bash

# 1. Fazer login

### **4. Configure o Banco de Dados**POST /auth/login

```bash{

# Execute as migrations  "email": "admin@admin.com",

npx prisma migrate dev  "password": "123456"

}

# Popule com dados iniciais (opcional)

npm run seed# 2. Copiar token da resposta e colar na variável 'jwt'

``````



### **5. Execute o Projeto**#### Criar pedido completo

```bash```bash

# Desenvolvimento# Headers

npm run start:devAuthorization: Bearer {{jwt}}



# Produção# Body

npm run build{

npm run start:prod  "clienteId": 1,

```  "enderecoId": 1,

  "pizzasIds": [1, 2],

🎉 **API rodando em**: `http://localhost:10000`  "paymentIntentId": "pi_stripe_..."

}

---```



## 🔧 API Endpoints### ⚠️ Considerações Importantes

- **JWT obrigatório** em quase todos os endpoints

### 🔐 **Autenticação**- **Upload de imagens**: Use `multipart/form-data`

```http- **WebSocket**: Documentado separadamente em `WebSocket_Documentation.md`

POST   /auth/register          # Registro de usuário- **Rate limiting**: Implementado nos endpoints de upload

POST   /auth/login             # Login com email/senha  - **Validações**: Todos os campos obrigatórios estão documentados

GET    /auth/google            # Login com Google

GET    /auth/google/callback   # Callback do Google### 🐛 Troubleshooting

GET    /me                     # Perfil do usuário logado- **Erro 401**: Verifique se o JWT está configurado corretamente

```- **Erro 400**: Campos obrigatórios faltando ou formato inválido

- **Erro 413**: Imagem muito grande (máx. 5MB)

### 🍕 **Pizzas**- **WebSocket não conecta**: Verifique CORS e autenticação

```http

GET    /pizzas                 # Listar todas as pizzas---

GET    /pizzas/:id             # Buscar pizza por ID

POST   /pizzas                 # Criar nova pizza [ADMIN]## �🔄 Mudanças da Migração (Clientes → Users)

POST   /pizzas/with-image      # Criar pizza com imagem [ADMIN]

POST   /pizzas/:id/upload-image # Upload de imagem [ADMIN]### ✅ Alterações Implementadas

PATCH  /pizzas/:id             # Atualizar pizza [ADMIN]- **Tabela `Cliente` → `User`**: Renomeação completa no banco

DELETE /pizzas/:id             # Deletar pizza [ADMIN]- **Campo `avatar`**: Adicionado para armazenar URL da foto do Google

```- **Rotas atualizadas**: `/clientes/*` → `/users/*`

- **DTOs migrados**: `CreateClienteDto` → `CreateUserDto`, etc.

### 📦 **Pedidos**- **Relacionamentos**: `clienteId` → `userId` nos pedidos

```http- **Campo `enderecoId`**: Adicionado nos pedidos (substitui `enderecoEntrega`)

GET    /pedidos                # Listar todos os pedidos [ADMIN]- **Google OAuth**: Estratégia completa com captura de avatar

GET    /pedidos/meus-pedidos   # Meus pedidos [USER]- **Testes**: Todos os arquivos de teste atualizados

GET    /pedidos/:id            # Buscar pedido por ID

POST   /pedidos                # Criar novo pedido [USER]### 🔗 Endpoints Atualizados

PATCH  /pedidos/:id            # Atualizar pedido [USER/ADMIN]- `POST /auth/register` - Registro de usuário

PATCH  /pedidos/:id/status     # Atualizar status [ADMIN]- `POST /auth/login` - Login tradicional

DELETE /pedidos/:id            # Cancelar pedido [USER/ADMIN]- `GET /auth/google` - Início do OAuth Google

```- `GET /auth/google/callback` - Callback do Google

- `GET /me` - Dados do usuário logado (inclui avatar)

### 👥 **Usuários**- `GET /users` - Listar usuários

```http- `POST /users` - Criar usuário

GET    /users                  # Listar usuários [ADMIN]- `PATCH /users/:id` - Atualizar usuário

GET    /users/:id              # Buscar usuário por ID [ADMIN]- `DELETE /users/:id` - Deletar usuário

POST   /users                  # Criar usuário [ADMIN]

PATCH  /users/:id              # Atualizar usuário [USER/ADMIN]---

DELETE /users/:id              # Deletar usuário [ADMIN]

```## 📤 Upload de Imagens (Cloudinary)



### 🏍️ **Entregadores**### Endpoints

```http- `POST /pizzas` - Criar pizza (JSON sem imagem)

GET    /entregadores           # Listar entregadores [ADMIN]- `POST /pizzas/with-image` - Criar pizza com upload de imagem

GET    /entregadores/:id       # Buscar entregador [ADMIN]- `POST /pizzas/:id/upload-image` - Fazer upload/atualizar imagem de pizza existente

POST   /entregadores           # Criar entregador [ADMIN]

PATCH  /entregadores/:id       # Atualizar entregador [ADMIN]#### Exemplo de uso (curl)

DELETE /entregadores/:id       # Deletar entregador [ADMIN]```bash

```curl -X POST \

  http://localhost:3005/pizzas/with-image \

### 📍 **Endereços**  -H 'Authorization: Bearer YOUR_JWT_TOKEN' \

```http  -F 'nome=Pizza Margherita' \

GET    /enderecos              # Meus endereços [USER]  -F 'descricao=Molho de tomate, mussarela e manjericão' \

GET    /enderecos/:id          # Buscar endereço [USER]  -F 'preco=25.90' \

POST   /enderecos              # Criar endereço [USER]  -F 'imagem=@/caminho/para/sua/imagem.jpg'

PATCH  /enderecos/:id          # Atualizar endereço [USER]```

DELETE /enderecos/:id          # Deletar endereço [USER]

```#### Validações

- Tipos permitidos: JPG, JPEG, PNG, WEBP

### 💳 **Pagamentos**- Tamanho máximo: 5MB

```http- JWT obrigatório

POST   /payments/create-intent # Criar Payment Intent

POST   /payments/webhook       # Webhook do Stripe#### Configuração Cloudinary

```- Pasta: `pizza-express/pizzas/`

- Redimensionamento: 800x600px

### 📡 **WebSocket Events**- Formato: WEBP

```javascript- Otimização automática

// Cliente → Servidor

socket.emit('updateLocation', { #### Resposta de sucesso

  entregadorId: 1, ```json

  latitude: -23.5505, {

  longitude: -46.6333   "statusCode": 201,

});  "message": "Pizza criada com sucesso",

  "data": {

// Servidor → Cliente    "id": 1,

socket.on('locationUpdated', (data) => {    "nome": "Pizza Margherita",

  console.log('Nova localização:', data);    "descricao": "Molho de tomate, mussarela e manjericão",

});    "preco": 25.90,

```    "imagemUrl": "https://res.cloudinary.com/.../pizza-express/pizzas/abc123.webp"

  }

---}

```

## 📊 Response Format

---

Todas as respostas seguem um padrão consistente:

## 🖥️ Frontend - Guia de Integração Next.js

### **Sucesso**

```json### URLs da API

{- Dev: `http://localhost:3005`

  "statusCode": 200,- Prod: `https://pizza-express-backend.vercel.app`

  "message": "Operação realizada com sucesso",

  "data": {### Fluxo de Autenticação

    // Dados retornados- Login tradicional: `POST /auth/login`

  }- Registro: `POST /auth/register`

}- **Google OAuth**: Redirecionar para `GET /auth/google`

```- Dados do usuário: `GET /me` (inclui avatar se logado via Google)



### **Erro**### Fluxo de Usuários (Users)

```json- Listar usuários: `GET /users`

{- Criar usuário: `POST /users` (JSON com endereços obrigatórios)

  "statusCode": 400,- Buscar usuário: `GET /users/:id`

  "message": "Mensagem de erro clara",- Atualizar usuário: `PATCH /users/:id`

  "error": "Bad Request",- Deletar usuário: `DELETE /users/:id`

  "timestamp": "2025-09-30T20:00:00.000Z",

  "path": "/api/endpoint"### Fluxo de Pizzas com Imagens

}- Listar pizzas: `GET /pizzas`

```- Criar pizza sem imagem: `POST /pizzas` (JSON)

- Criar pizza com imagem: `POST /pizzas/with-image` (form-data)

---- Upload de imagem: `POST /pizzas/:id/upload-image` (form-data)

- Atualizar pizza: `PATCH /pizzas/:id`

## 🚀 Deploy- Deletar pizza: `DELETE /pizzas/:id`



### **Vercel (Recomendado)**### Fluxo de Pedidos (Atualizado)

```bash- Criar pedido: `POST /pedidos` (com `userId` e `enderecoId`)

# Install Vercel CLI- Listar pedidos: `GET /pedidos`

npm i -g vercel- Atualizar pedido: `PATCH /pedidos/:id`



# Deploy#### Exemplo de integração (Next.js)

vercel --prod```typescript

```// Login com Google OAuth

const handleGoogleLogin = () => {

### **Docker**  window.location.href = `${API_URL}/auth/google`;

```dockerfile};

FROM node:18-alpine

WORKDIR /app// Criar pizza com imagem

COPY package*.json ./const formData = new FormData();

RUN npm ci --only=productionformData.append('nome', pizza.nome);

COPY . .formData.append('descricao', pizza.descricao);

RUN npx prisma generateformData.append('preco', pizza.preco.toString());

RUN npm run buildformData.append('imagem', imagem);

EXPOSE 10000

CMD ["npm", "run", "start:prod"]await fetch(`${API_URL}/pizzas/with-image`, {

```  method: 'POST',

  headers: { Authorization: `Bearer ${token}` },

### **Environment Variables**  body: formData,

Configure as seguintes variáveis no seu provedor:});

- `DATABASE_URL`

- `JWT_SECRET`// Criar pedido (nova estrutura)

- `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET`await fetch(`${API_URL}/pedidos`, {

- `CLOUDINARY_*` credentials  method: 'POST',

- `STRIPE_*` credentials  headers: { 

    'Authorization': `Bearer ${token}`,

---    'Content-Type': 'application/json'

  },

## 🧪 Testes  body: JSON.stringify({

    userId: user.id,

```bash    pizzaIds: [1, 2, 3],

# Testes unitários    enderecoId: endereco.id, // ← Novo campo obrigatório

npm run test    observacoes: 'Sem cebola'

  }),

# Testes com coverage});

npm run test:cov```



# Testes e2e#### Dicas

npm run test:e2e- Validar tipo/tamanho do arquivo no frontend

- Mostrar feedback visual durante uploads

# Watch mode- Tratar erros de API

npm run test:watch- Usar JWT em todas as requisições

```- **Avatar do Google**: Acessível via endpoint `/me` após login OAuth



------



## 📁 Estrutura do Projeto## 📝 Workflow Recomendado

1. Ler código existente antes de modificar

```2. **Seguir regras de tipagem**: Nunca usar `any`

src/3. Validar build/lint após mudanças (0 erros obrigatório)

├── auth/                   # Autenticação e autorização4. Executar testes relevantes

├── common/                 # Módulos compartilhados5. Atualizar documentação se necessário

│   ├── builders/          # Response builders6. Solicitar permissão para alterações críticas

│   ├── constants/         # Constantes da aplicação

│   ├── decorators/        # Decorators customizados---

│   ├── filters/           # Exception filters

│   └── logger/            # Sistema de logging## 📚 Histórico e Contato

├── pizzas/                # Gestão de pizzas- **Última atualização**: 3 de agosto de 2025

├── pedidos/               # Sistema de pedidos- **Versão**: 2.0 (Migração Users + OAuth Google)

├── users/                 # Gestão de usuários- Suporte: suporte@pizzaexpress.com

├── entregadores/          # Gestão de entregadores- Issues: [GitHub Issues](https://github.com/RacconWebFenix/pizza-express-backend/issues)

├── enderecos/             # Gestão de endereços

├── payments/              # Sistema de pagamentos---

└── upload/                # Sistema de upload

```**Feito com ❤️ usando NestJS + Prisma + Cloudinary + Google OAuth**


---

## 🤝 Contribuição

### **Como Contribuir**
1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### **Padrões de Código**
- ✅ TypeScript strict mode
- ✅ ESLint + Prettier configurados
- ✅ Conventional Commits
- ✅ SOLID principles
- ✅ 100% Type Safety (zero `any`)

### **Guidelines**
- Mantenha os controllers limpos (<100 linhas)
- Use Domain Services para regras de negócio
- Implemente testes para novas features
- Documente APIs complexas
- Siga os padrões de Response DTOs

---

## 📚 Documentação Adicional

- 📋 [Payment Flow Documentation](./Payment_Flow_Documentation.md)
- 🔌 [WebSocket Documentation](./WebSocket_Documentation.md)
- 🔧 [Refactoring Roadmap](./REFACTORING_ROADMAP.md)
- 📱 [Frontend Integration](./frontend-payment-integration.md)

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👥 Autores

- **RacconWebFenix** - *Desenvolvimento inicial* - [@RacconWebFenix](https://github.com/RacconWebFenix)

---

## 🙏 Agradecimentos

- NestJS team pela framework incrível
- Prisma team pelo ORM fantástico
- Stripe pela integração de pagamentos
- Cloudinary pelo serviço de imagens

---

<div align="center">

**⭐ Se este projeto te ajudou, não esqueça de dar uma estrela!**

[![GitHub stars](https://img.shields.io/github/stars/RacconWebFenix/pizza-express-backend.svg?style=social&label=Star)](https://github.com/RacconWebFenix/pizza-express-backend/stargazers)

</div>