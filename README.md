# 🍕 Pizza Express Backend# 🍕 Pizza Express Backend# 🍕 Pizza Express API & Frontend Guide



<div align="center">



![Pizza Express](https://img.shields.io/badge/Pizza-Express-red?style=for-the-badge&logo=pizza&logoColor=white)<div align="center">---

![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=for-the-badge)

![Version](https://img.shields.io/badge/Version-2.0.0-blue?style=for-the-badge)



**API REST completa para sistema de delivery de pizzas com arquitetura moderna e escalável**![Pizza Express](https://img.shields.io/badge/Pizza-Express-red?style=for-the-badge&logo=pizza&logoColor=white)## 📦 Backend - Pizza Express



[![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)](https://nodejs.org/)![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=for-the-badge)

[![NestJS](https://img.shields.io/badge/NestJS-11.x-red?logo=nestjs)](https://nestjs.com/)

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)![Version](https://img.shields.io/badge/Version-2.0.0-blue?style=for-the-badge)### 🚦 Funcionalidades

[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14+-blue?logo=postgresql)](https://postgresql.org/)

[![Prisma](https://img.shields.io/badge/Prisma-6.x-indigo?logo=prisma)](https://prisma.io/)- Autenticação JWT + Google OAuth com captura de avatar

[![Stripe](https://img.shields.io/badge/Stripe-Payments-purple?logo=stripe)](https://stripe.com/)

**API REST completa para sistema de delivery de pizzas com arquitetura moderna e escalável**- CRUD de usuários (migrado de clientes), pizzas, pedidos, entregadores

[🚀 Instalação](#instalação) • [📖 API Docs](#api-endpoints) • [💳 Pagamentos](#sistema-de-pagamentos) • [🔌 WebSocket](#websocket-real-time)

- Upload de imagens via Cloudinary

</div>

[🚀 Demo](#demo) • [📖 Documentação](#documentação) • [🛠️ Instalação](#instalação) • [🔧 API](#api-endpoints)- **💳 Sistema de pagamentos Stripe completo com webhooks**

---

- WebSockets para entregadores

## 📋 Visão Geral

</div>- Documentação Swagger

O **Pizza Express Backend** é uma API REST robusta desenvolvida com **NestJS** e **TypeScript**, oferecendo uma solução completa para sistemas de delivery de pizzas. Com arquitetura limpa, segurança avançada e integração com serviços modernos.

- Docker Ready

### 🎯 **Principais Características**

---

- ⚡ **Performance Otimizada** - Queries N+1 eliminadas, responses padronizadas

- 🛡️ **Segurança Avançada** - JWT + OAuth2, Rate Limiting, Global Exception Filter### 💳 Sistema de Pagamentos

- 🏗️ **Arquitetura Limpa** - SOLID principles, Domain Services, Clean Code

- 📊 **Monitoramento** - Logging estruturado Winston, Error tracking completo## 📋 Visão Geral- **Payment Intents** do Stripe para processamento seguro

- 🔄 **Real-time** - WebSocket para tracking de entregadores

- 💳 **Pagamentos** - Integração completa Stripe com webhooks- **Webhooks** para confirmação automática de pagamentos

- 📱 **Mobile Ready** - API otimizada para aplicações mobile

O **Pizza Express Backend** é uma API REST robusta e moderna desenvolvida para sistemas de delivery de pizzas. Construída com **NestJS** e **TypeScript**, oferece uma arquitetura limpa, escalável e production-ready com foco em performance e segurança.- **Integração completa** com fluxo de pedidos

---

- **Atualização automática** de status após pagamento confirmado

## 🚀 Features Principais

### 🎯 **Principais Características**

### 🍕 **Sistema de Pizzas**

- ✅ CRUD completo com validações rigorosas**📖 Documentação detalhada:** Ver `Payment_Flow_Documentation.md`

- ✅ Upload de imagens via Cloudinary

- ✅ Preços dinâmicos e controle de estoque- ⚡ **Performance Otimizada** - Queries N+1 eliminadas, cache inteligente

- ✅ Busca e filtros avançados

- 🛡️ **Segurança Avançada** - JWT + OAuth2, Rate Limiting, CORS configurado### 🏗️ Arquitetura

### 👥 **Gestão de Usuários**

- ✅ Registro e autenticação JWT- 🏗️ **Arquitetura Limpa** - SOLID principles, Domain Services, Clean Code- NestJS + TypeScript

- ✅ Login social (Google OAuth) com avatar

- ✅ Sistema de roles (Cliente, Admin, Funcionário)- 📊 **Monitoramento** - Logging estruturado com Winston, Error tracking- PostgreSQL + Prisma ORM

- ✅ Gestão de múltiplos endereços

- 🔄 **Real-time** - WebSocket para tracking de entregadores- JWT Bearer Token + Google OAuth Strategy

### 📦 **Sistema de Pedidos**

- ✅ Criação com múltiplas pizzas- 💳 **Pagamentos** - Integração completa com Stripe- Cloudinary para imagens

- ✅ Tracking de status em tempo real

- ✅ Histórico completo de pedidos- 📱 **Mobile Ready** - API otimizada para apps mobile- Testes: Jest + Supertest

- ✅ Cálculo automático de preços e taxas

- ✅ Observações personalizadas- Deploy: Vercel



### 🏍️ **Gestão de Entregadores**---

- ✅ CRUD completo de entregadores

- ✅ Tracking GPS em tempo real#### Estrutura de Módulos

- ✅ Status de disponibilidade

- ✅ WebSocket para localização## 🚀 Features Principais```



### 💳 **Sistema de Pagamentos**src/

- ✅ Integração completa Stripe

- ✅ Payment Intents seguros### 🍕 **Sistema de Pizzas**├── auth/           [PROTEGIDO] - JWT, OAuth Google, guards, estratégias

- ✅ Webhooks para confirmação automática

- ✅ Múltiplos métodos de pagamento- ✅ CRUD completo com validações├── users/          - CRUD de usuários (migrado de clientes)



### 📍 **Gestão de Endereços**- ✅ Upload de imagens (Cloudinary)├── entregadores/   - CRUD + WebSocket para localização

- ✅ Múltiplos endereços por usuário

- ✅ Endereço principal automático- ✅ Categorização e filtros├── enderecos/      - CRUD de endereços (vinculados ao usuário)

- ✅ Validação de CEP e geolocalização

- ✅ Controle de estoque├── pedidos/        - Sistema de pedidos com enderecoId

---

- ✅ Preços dinâmicos├── pizzas/         - CRUD de pizzas + upload de imagens

## 🏗️ Arquitetura Técnica

├── upload/         - Serviços de upload (Cloudinary)

### **Stack Principal**

- **Framework**: NestJS 11.x### 👥 **Gestão de Usuários**├── prisma.module.ts - Configuração do Prisma

- **Language**: TypeScript 5.x (100% Type Safety)

- **Database**: PostgreSQL + Prisma ORM 6.x- ✅ Registro e autenticação└── main.ts         [PROTEGIDO] - Bootstrap da aplicação

- **Authentication**: JWT + Passport + Google OAuth

- **File Upload**: Cloudinary integration- ✅ Login social (Google OAuth)```

- **Payments**: Stripe complete integration

- **Real-time**: Socket.IO WebSocket- ✅ Perfis de usuário com avatares

- **Logging**: Winston structured logging

- **Validation**: Class Validator + Class Transformer- ✅ Sistema de roles (Cliente, Admin, Funcionário)### 🛡️ Segurança & Políticas

- **Testing**: Jest + Supertest

- ✅ Gestão de endereços múltiplos- Não editar arquivos protegidos sem permissão

### **Padrões Arquiteturais Implementados**

- ✅ **SOLID Principles** rigorosamente aplicados- Não commitar sem autorização

- ✅ **Clean Architecture** com Domain Services

- ✅ **Repository Pattern** via Prisma### 📦 **Sistema de Pedidos**- Endpoints protegidos com `@UseGuards(JwtAuthGuard)`

- ✅ **Decorator Pattern** para Guards customizados

- ✅ **Builder Pattern** para Response DTOs- ✅ Criação de pedidos com múltiplas pizzas- **PROIBIDO uso de tipagem do tipo `any`!**

- ✅ **Strategy Pattern** para métodos de autenticação

- ✅ Tracking de status em tempo real- Respostas padronizadas:

### **Qualidade & Performance**

- ⚡ **N+1 Queries** completamente eliminadas- ✅ Histórico completo de pedidos```typescript

- 🛡️ **Global Exception Filter** customizado

- 🔒 **Rate Limiting** configurado (20 req/min)- ✅ Cálculo automático de preços{

- 📊 **Structured Logging** profissional

- 🔐 **Security Headers** via Helmet.js- ✅ Observações personalizadas  statusCode: 201,

- ✨ **Zero `any` types** - 100% Type Safety

  message: "Descrição da ação",

---

### 🏍️ **Gestão de Entregadores**  data: objeto_retornado

## 🛠️ Instalação

- ✅ CRUD de entregadores}

### **Pré-requisitos**

- Node.js 18+- ✅ Tracking GPS em tempo real```

- PostgreSQL 14+

- npm ou yarn- ✅ Status de disponibilidade

- Contas: Cloudinary, Stripe, Google OAuth

- ✅ Histórico de entregas### 🧑‍💻 DTOs & Validação

### **1. Clone e Instale**

```bash- ✅ WebSocket para localização- Usar class-validator: `IsNotEmpty`, `IsString`, `IsNumber`, `IsOptional`, `IsUrl`

git clone https://github.com/RacconWebFenix/pizza-express-backend.git

cd pizza-express-backend- Imports organizados

npm install

```### 💳 **Sistema de Pagamentos**- **Tipagem rigorosa**: Evitar `any`, usar tipos específicos



### **2. Configure Variáveis de Ambiente**- ✅ Integração completa com Stripe

```bash

cp .env.example .env- ✅ Payment Intents seguros### 🐘 Banco de Dados (Prisma)

```

- ✅ Webhooks para confirmação- **User** (id, nome, email, password, telefone, avatar?, role)

**Edite o `.env` com suas configurações:**

```env- ✅ Múltiplos métodos de pagamento- **Endereco** (id, userId, cep, tipo, logradouro, numero, bairro, cidade, estado, principal)

# Database

DATABASE_URL="postgresql://user:password@localhost:5432/pizza_express"- ✅ Controle de transações- **Pizza** (id, nome, descricao, preco, imagemUrl?)



# JWT- **Pedido** (id, userId, enderecoId, pizzas[], status, observacoes, total, createdAt)

JWT_SECRET="your-super-secret-jwt-key-min-32-chars"

### 📍 **Gestão de Endereços**- **Entregador** (id, nome, email, telefone, veiculo, placa)

# Google OAuth

GOOGLE_CLIENT_ID="your-google-client-id"- ✅ Múltiplos endereços por usuário

GOOGLE_CLIENT_SECRET="your-google-client-secret"

- ✅ Endereço principal automático#### Comandos úteis

# Cloudinary

CLOUDINARY_CLOUD_NAME="your-cloud-name"- ✅ Validação de CEP```bash

CLOUDINARY_API_KEY="your-api-key"

CLOUDINARY_API_SECRET="your-api-secret"- ✅ Geolocalizaçãonpx prisma migrate dev --name nome_da_migracao



# Stripenpx prisma migrate deploy

STRIPE_SECRET_KEY="sk_test_your-stripe-secret-key"

STRIPE_WEBHOOK_SECRET="whsec_your-webhook-secret"---npx prisma studio



# App Configurationnpx prisma migrate reset --force  # Para resetar em dev

NODE_ENV="development"

PORT=10000## 🏗️ Arquitetura Técnica```

FRONTEND_URL="http://localhost:3000"

LOG_LEVEL="info"

```

### **Stack Principal**### 🔐 Autenticação

### **3. Configure Banco de Dados**

```bash- **Backend Framework**: NestJS 11.x- JWT obrigatório em todos endpoints (exceto `/auth/register`, `/auth/login`, `/auth/google`)

# Execute migrations

npx prisma migrate dev- **Language**: TypeScript 5.x- **Google OAuth**: `/auth/google` (redireciona) → `/auth/google/callback` (processa)



# Gere o cliente Prisma- **Database**: PostgreSQL- Avatar capturado automaticamente do Google e salvo no campo `User.avatar`

npx prisma generate

- **ORM**: Prisma 6.x- Payload JWT: `{ sub: userId, email, role }`

# Popule dados iniciais (opcional)

npm run seed- **Authentication**: JWT + Passport- Endpoint `/me` retorna dados do usuário logado incluindo avatar

```

- **File Upload**: Cloudinary

### **4. Execute o Projeto**

```bash- **Payments**: Stripe### 🌍 CORS & Deploy

# Desenvolvimento com hot reload

npm run start:dev- **Real-time**: Socket.IO- Dev: `http://localhost:3000`



# Build e produção- **Logging**: Winston- Prod: `process.env.FRONTEND_URL`

npm run build

npm run start:prod- **Validation**: Class Validator- Deploy: Vercel



# Modo debug- **Testing**: Jest- Google OAuth: Callback configurado para produção

npm run start:debug

```



🎉 **API rodando em**: `http://localhost:10000`### **Padrões Arquiteturais**### 🧪 Testes



---- ✅ **SOLID Principles** aplicados```bash



## 🔧 API Endpoints- ✅ **Clean Architecture** com Domain Servicesnpm run test         # Testes unitários



### 🔐 **Autenticação**- ✅ **Repository Pattern** com Prismanpm run test:e2e     # Testes e2e (sequencial)

```http

POST   /auth/register          # Registro com endereços- ✅ **Decorator Pattern** para Guards customizadosnpm run test:cov     # Coverage

POST   /auth/login             # Login email/senha

GET    /auth/google            # Iniciar OAuth Google- ✅ **Builder Pattern** para Response DTOs```

GET    /auth/google/callback   # Callback OAuth

GET    /auth/config            # Config do Google OAuth- ✅ **Strategy Pattern** para diferentes auth methods

GET    /me                     # Perfil do usuário logado

```---



**Exemplo - Registro:**### **Performance & Segurança**

```json

POST /auth/register- ⚡ **N+1 Queries** eliminadas## � Documentação da API - Insomnia Collection

{

  "nome": "João Silva",- 🛡️ **Global Exception Filter** customizado  

  "email": "joao@example.com",

  "password": "senha123",- 🔒 **Rate Limiting** configurado### 📁 Arquivos Disponíveis

  "telefone": "11999999999",

  "enderecos": [{- 📊 **Structured Logging** profissional- **`Insomnia_complete.yaml`** - Coleção completa com TODOS os endpoints

    "cep": "01310-100",

    "tipo": "residencial",- 🔐 **Helmet.js** para security headers- **`WebSocket_Documentation.md`** - Documentação específica do WebSocket

    "logradouro": "Av. Paulista",

    "numero": "1000",- ✨ **Type Safety** 100% (zero `any`)

    "bairro": "Bela Vista",

    "cidade": "São Paulo",### 🚀 Como Usar

    "estado": "SP",

    "principal": true---

  }]

}#### 1. Importar no Insomnia

```

## 🛠️ Instalação1. Abra o Insomnia

### 🍕 **Pizzas**

```http2. **Application > Preferences > Data > Import Data > From File**

GET    /pizzas                 # Listar todas (público)

GET    /pizzas/:id             # Buscar por ID (público)### **Pré-requisitos**3. Selecione `Insomnia_complete.yaml`

POST   /pizzas                 # Criar pizza [ADMIN]

POST   /pizzas/with-image      # Criar com imagem [ADMIN]- Node.js 18+ 4. Clique em "Import"

POST   /pizzas/:id/upload-image # Upload imagem [ADMIN]

PATCH  /pizzas/:id             # Atualizar [ADMIN]- PostgreSQL 14+

DELETE /pizzas/:id             # Deletar [ADMIN]

```- npm ou yarn#### 2. Configurar Ambiente



**Exemplo - Criar Pizza:**- **Localhost**: Para desenvolvimento local

```json

POST /pizzas### **1. Clone o Repositório**- **Production**: Para ambiente de produção

Authorization: Bearer <token>

{```bash- Configure as variáveis:

  "nome": "Pizza Margherita",

  "descricao": "Molho de tomate, mussarela, manjericão",git clone https://github.com/RacconWebFenix/pizza-express-backend.git  - `base_url`: URL da API

  "preco": 39.90

}cd pizza-express-backend  - `jwt`: Token JWT (obtenha fazendo login)

```

```  - `user_id`, `pizza_id`, etc.: IDs para testes

### 📦 **Pedidos**

```http

GET    /pedidos                # Listar todos [ADMIN/FUNC]

GET    /pedidos/meus-pedidos   # Meus pedidos [USER]### **2. Instale as Dependências**#### 3. Fluxo de Teste Recomendado

GET    /pedidos/:id            # Buscar por ID [OWNER/ADMIN]

POST   /pedidos                # Criar pedido [USER]```bash1. **Login**: `POST /auth/login` → Copie o token JWT

PATCH  /pedidos/:id            # Atualizar [ADMIN/FUNC]

PATCH  /pedidos/:id/status     # Atualizar status [ADMIN]npm install2. **Configure JWT**: Cole o token na variável `jwt` do ambiente

DELETE /pedidos/:id            # Cancelar [OWNER/ADMIN]

``````3. **Teste endpoints**: Comece pelos GETs, depois POSTs



**Exemplo - Criar Pedido:**4. **Para WebSocket**: Use Postman ou Thunder Client (não suportado no Insomnia)

```json

POST /pedidos### **3. Configure as Variáveis de Ambiente**

Authorization: Bearer <token>

{```bash### 📊 Endpoints Documentados

  "clienteId": 1,

  "enderecoId": 1,cp .env.example .env

  "pizzasIds": [1, 2, 3],

  "entregadorId": 1,```#### 🔐 Autenticação (5 endpoints)

  "paymentIntentId": "pi_1234567890",

  "observacoes": "Sem cebola na margherita"- Login tradicional e Google OAuth

}

```Edite o arquivo `.env` com suas configurações:- Configurações e perfil do usuário



### 👥 **Usuários**

```http

GET    /users                  # Listar [ADMIN]```env#### 👥 Usuários (6 endpoints)

GET    /users/:id              # Buscar por ID [ADMIN]

POST   /users                  # Criar [ADMIN]# Database- CRUD completo + busca por email

PATCH  /users/:id              # Atualizar [USER/ADMIN]

DELETE /users/:id              # Deletar [ADMIN]DATABASE_URL="postgresql://user:password@localhost:5432/pizza_express"

```

#### 🏠 Endereços (5 endpoints)

### 🏍️ **Entregadores**

```http# JWT- CRUD de endereços vinculados ao usuário

GET    /entregadores           # Listar [ADMIN/FUNC]

GET    /entregadores/:id       # Buscar [ADMIN/FUNC]JWT_SECRET="your-super-secret-jwt-key"

POST   /entregadores           # Criar [ADMIN]

PATCH  /entregadores/:id       # Atualizar [ADMIN]#### 🍕 Pizzas (7 endpoints)

DELETE /entregadores/:id       # Deletar [ADMIN]

```# Google OAuth- CRUD + upload de imagens (3 formas diferentes)



### 📍 **Endereços**GOOGLE_CLIENT_ID="your-google-client-id"

```http

GET    /enderecos              # Meus endereços [USER]GOOGLE_CLIENT_SECRET="your-google-client-secret"#### 📦 Pedidos (6 endpoints)

GET    /enderecos/:id          # Buscar [OWNER]

POST   /enderecos              # Criar [USER]- CRUD + atualização de status + cálculo automático de total

PATCH  /enderecos/:id          # Atualizar [OWNER]

DELETE /enderecos/:id          # Deletar [OWNER]# Cloudinary

```

CLOUDINARY_CLOUD_NAME="your-cloud-name"#### 🚴 Entregadores (5 endpoints)

### 💳 **Pagamentos**

```httpCLOUDINARY_API_KEY="your-api-key"- CRUD de entregadores

POST   /payments/create-intent # Criar Payment Intent

POST   /payments/webhook       # Webhook Stripe (interno)CLOUDINARY_API_SECRET="your-api-secret"

```

#### 💳 Pagamentos (2 endpoints)

---

# Stripe- Stripe Payment Intents + Webhooks

## 💳 Sistema de Pagamentos

STRIPE_SECRET_KEY="sk_test_your-stripe-secret"

### **🔄 Fluxo Completo de Pagamento**

STRIPE_WEBHOOK_SECRET="whsec_your-webhook-secret"#### 🏠 App (1 endpoint)

#### **1. Frontend cria Payment Intent**

```javascript- Status da API

// Frontend - Criar intenção de pagamento

const response = await fetch('/payments/create-intent', {# App

  method: 'POST',

  headers: {NODE_ENV="development"### 🔧 Exemplos de Uso

    'Content-Type': 'application/json',

    'Authorization': `Bearer ${token}`PORT=10000

  },

  body: JSON.stringify({FRONTEND_URL="http://localhost:3000"#### Login e obtenção de token

    amount: 7590, // R$ 75,90 em centavos

    currency: 'brl',``````bash

    metadata: {

      userId: '1',# 1. Fazer login

      items: 'Pizza Margherita, Pizza Calabresa'

    }### **4. Configure o Banco de Dados**POST /auth/login

  })

});```bash{



const { client_secret } = await response.json();# Execute as migrations  "email": "admin@admin.com",

```

npx prisma migrate dev  "password": "123456"

#### **2. Processa pagamento com Stripe**

```javascript}

// Frontend - Confirmar pagamento

import { loadStripe } from '@stripe/stripe-js';# Popule com dados iniciais (opcional)



const stripe = await loadStripe('pk_test_...');npm run seed# 2. Copiar token da resposta e colar na variável 'jwt'

const result = await stripe.confirmPayment({

  clientSecret: client_secret,``````

  confirmParams: {

    return_url: 'http://localhost:3000/success',

  },

});### **5. Execute o Projeto**#### Criar pedido completo



if (result.error) {```bash```bash

  console.error('Erro no pagamento:', result.error);

} else {# Desenvolvimento# Headers

  // Pagamento confirmado via webhook

  console.log('Pagamento processado!');npm run start:devAuthorization: Bearer {{jwt}}

}

```



#### **3. Webhook confirma automaticamente**# Produção# Body

```typescript

// Backend - Webhook do Stripe (automático)npm run build{

@Post('webhook')

async handleWebhook(@Req() req: Request) {npm run start:prod  "clienteId": 1,

  const sig = req.headers['stripe-signature'];

  const event = stripe.webhooks.constructEvent(```  "enderecoId": 1,

    req.body, sig, process.env.STRIPE_WEBHOOK_SECRET

  );  "pizzasIds": [1, 2],



  if (event.type === 'payment_intent.succeeded') {🎉 **API rodando em**: `http://localhost:10000`  "paymentIntentId": "pi_stripe_..."

    // Atualizar status do pedido para CONFIRMADO

    await this.pedidosService.confirmPayment(}

      event.data.object.id

    );---```

  }

}

```

## 🔧 API Endpoints### ⚠️ Considerações Importantes

### **💡 Configuração do Stripe**

- **JWT obrigatório** em quase todos os endpoints

#### **Frontend Setup**

```bash### 🔐 **Autenticação**- **Upload de imagens**: Use `multipart/form-data`

npm install @stripe/stripe-js @stripe/react-stripe-js

``````http- **WebSocket**: Documentado separadamente em `WebSocket_Documentation.md`



```javascriptPOST   /auth/register          # Registro de usuário- **Rate limiting**: Implementado nos endpoints de upload

// React - Stripe Provider

import { Elements } from '@stripe/react-stripe-js';POST   /auth/login             # Login com email/senha  - **Validações**: Todos os campos obrigatórios estão documentados

import { loadStripe } from '@stripe/stripe-js';

GET    /auth/google            # Login com Google

const stripePromise = loadStripe('pk_test_your_key');

GET    /auth/google/callback   # Callback do Google### 🐛 Troubleshooting

function App() {

  return (GET    /me                     # Perfil do usuário logado- **Erro 401**: Verifique se o JWT está configurado corretamente

    <Elements stripe={stripePromise}>

      <PaymentForm />```- **Erro 400**: Campos obrigatórios faltando ou formato inválido

    </Elements>

  );- **Erro 413**: Imagem muito grande (máx. 5MB)

}

```### 🍕 **Pizzas**- **WebSocket não conecta**: Verifique CORS e autenticação



#### **Webhook Configuration**```http

```bash

# Stripe CLI para testes locaisGET    /pizzas                 # Listar todas as pizzas---

stripe listen --forward-to localhost:10000/payments/webhook

GET    /pizzas/:id             # Buscar pizza por ID

# Em produção, configure no Stripe Dashboard:

# https://dashboard.stripe.com/webhooksPOST   /pizzas                 # Criar nova pizza [ADMIN]## �🔄 Mudanças da Migração (Clientes → Users)

# Endpoint: https://sua-api.com/payments/webhook

# Events: payment_intent.succeeded, payment_intent.payment_failedPOST   /pizzas/with-image      # Criar pizza com imagem [ADMIN]

```

POST   /pizzas/:id/upload-image # Upload de imagem [ADMIN]### ✅ Alterações Implementadas

---

PATCH  /pizzas/:id             # Atualizar pizza [ADMIN]- **Tabela `Cliente` → `User`**: Renomeação completa no banco

## 🔌 WebSocket Real-time

DELETE /pizzas/:id             # Deletar pizza [ADMIN]- **Campo `avatar`**: Adicionado para armazenar URL da foto do Google

### **📡 Gateway de Localização**

- **URL**: `ws://localhost:10000/entregadores-location````- **Rotas atualizadas**: `/clientes/*` → `/users/*`

- **Auth**: JWT Bearer token no handshake

- **DTOs migrados**: `CreateClienteDto` → `CreateUserDto`, etc.

### **📨 Eventos Disponíveis**

### 📦 **Pedidos**- **Relacionamentos**: `clienteId` → `userId` nos pedidos

#### **Cliente → Servidor**

```javascript```http- **Campo `enderecoId`**: Adicionado nos pedidos (substitui `enderecoEntrega`)

const socket = new WebSocket('ws://localhost:10000/entregadores-location');

GET    /pedidos                # Listar todos os pedidos [ADMIN]- **Google OAuth**: Estratégia completa com captura de avatar

// Atualizar localização do entregador

socket.send(JSON.stringify({GET    /pedidos/meus-pedidos   # Meus pedidos [USER]- **Testes**: Todos os arquivos de teste atualizados

  event: 'updateLocation',

  data: {GET    /pedidos/:id            # Buscar pedido por ID

    entregadorId: 1,

    latitude: -23.550520,POST   /pedidos                # Criar novo pedido [USER]### 🔗 Endpoints Atualizados

    longitude: -46.633308,

    pedidoId: 123PATCH  /pedidos/:id            # Atualizar pedido [USER/ADMIN]- `POST /auth/register` - Registro de usuário

  }

}));PATCH  /pedidos/:id/status     # Atualizar status [ADMIN]- `POST /auth/login` - Login tradicional

```

DELETE /pedidos/:id            # Cancelar pedido [USER/ADMIN]- `GET /auth/google` - Início do OAuth Google

#### **Servidor → Cliente**

```javascript```- `GET /auth/google/callback` - Callback do Google

// Receber atualizações de localização

socket.onmessage = (event) => {- `GET /me` - Dados do usuário logado (inclui avatar)

  const data = JSON.parse(event.data);

  ### 👥 **Usuários**- `GET /users` - Listar usuários

  if (data.event === 'locationUpdated') {

    console.log('Nova localização:', data.payload);```http- `POST /users` - Criar usuário

    // Atualizar mapa em tempo real

    updateMapMarker(data.payload.latitude, data.payload.longitude);GET    /users                  # Listar usuários [ADMIN]- `PATCH /users/:id` - Atualizar usuário

  }

};GET    /users/:id              # Buscar usuário por ID [ADMIN]- `DELETE /users/:id` - Deletar usuário

```

POST   /users                  # Criar usuário [ADMIN]

### **🗺️ Integração com Frontend**

```javascriptPATCH  /users/:id              # Atualizar usuário [USER/ADMIN]---

// React Hook para WebSocket

import { useEffect, useState } from 'react';DELETE /users/:id              # Deletar usuário [ADMIN]



function useDeliveryTracking(pedidoId) {```## 📤 Upload de Imagens (Cloudinary)

  const [location, setLocation] = useState(null);

  const [socket, setSocket] = useState(null);



  useEffect(() => {### 🏍️ **Entregadores**### Endpoints

    const ws = new WebSocket('ws://localhost:10000/entregadores-location');

    ```http- `POST /pizzas` - Criar pizza (JSON sem imagem)

    ws.onopen = () => {

      console.log('Conectado ao tracking');GET    /entregadores           # Listar entregadores [ADMIN]- `POST /pizzas/with-image` - Criar pizza com upload de imagem

      setSocket(ws);

    };GET    /entregadores/:id       # Buscar entregador [ADMIN]- `POST /pizzas/:id/upload-image` - Fazer upload/atualizar imagem de pizza existente



    ws.onmessage = (event) => {POST   /entregadores           # Criar entregador [ADMIN]

      const data = JSON.parse(event.data);

      if (data.pedidoId === pedidoId) {PATCH  /entregadores/:id       # Atualizar entregador [ADMIN]#### Exemplo de uso (curl)

        setLocation({

          lat: data.latitude,DELETE /entregadores/:id       # Deletar entregador [ADMIN]```bash

          lng: data.longitude

        });```curl -X POST \

      }

    };  http://localhost:3005/pizzas/with-image \



    return () => ws.close();### 📍 **Endereços**  -H 'Authorization: Bearer YOUR_JWT_TOKEN' \

  }, [pedidoId]);

```http  -F 'nome=Pizza Margherita' \

  return { location, socket };

}GET    /enderecos              # Meus endereços [USER]  -F 'descricao=Molho de tomate, mussarela e manjericão' \

```

GET    /enderecos/:id          # Buscar endereço [USER]  -F 'preco=25.90' \

---

POST   /enderecos              # Criar endereço [USER]  -F 'imagem=@/caminho/para/sua/imagem.jpg'

## 📊 Response Format

PATCH  /enderecos/:id          # Atualizar endereço [USER]```

### **✅ Respostas de Sucesso**

```jsonDELETE /enderecos/:id          # Deletar endereço [USER]

{

  "statusCode": 200,```#### Validações

  "message": "Operação realizada com sucesso",

  "data": {- Tipos permitidos: JPG, JPEG, PNG, WEBP

    "id": 1,

    "nome": "Pizza Margherita",### 💳 **Pagamentos**- Tamanho máximo: 5MB

    "preco": 39.90

  }```http- JWT obrigatório

}

```POST   /payments/create-intent # Criar Payment Intent



### **❌ Respostas de Erro**POST   /payments/webhook       # Webhook do Stripe#### Configuração Cloudinary

```json

{```- Pasta: `pizza-express/pizzas/`

  "statusCode": 400,

  "message": "Dados fornecidos são inválidos",- Redimensionamento: 800x600px

  "error": "Bad Request",

  "timestamp": "2025-09-30T23:00:00.000Z",### 📡 **WebSocket Events**- Formato: WEBP

  "path": "/pizzas"

}```javascript- Otimização automática

```

// Cliente → Servidor

### **🎯 Códigos de Status**

- `200` - Sucessosocket.emit('updateLocation', { #### Resposta de sucesso

- `201` - Recurso criado

- `400` - Dados inválidos  entregadorId: 1, ```json

- `401` - Não autenticado

- `403` - Sem permissão  latitude: -23.5505, {

- `404` - Recurso não encontrado

- `429` - Rate limit excedido  longitude: -46.6333   "statusCode": 201,

- `500` - Erro interno

});  "message": "Pizza criada com sucesso",

---

  "data": {

## 🚀 Deploy

// Servidor → Cliente    "id": 1,

### **Vercel (Recomendado)**

```bashsocket.on('locationUpdated', (data) => {    "nome": "Pizza Margherita",

# 1. Instalar Vercel CLI

npm i -g vercel  console.log('Nova localização:', data);    "descricao": "Molho de tomate, mussarela e manjericão",



# 2. Deploy});    "preco": 25.90,

vercel --prod

```    "imagemUrl": "https://res.cloudinary.com/.../pizza-express/pizzas/abc123.webp"

# 3. Configurar variáveis de ambiente no dashboard

# DATABASE_URL, JWT_SECRET, STRIPE_*, etc.  }

```

---}

### **Docker**

```dockerfile```

FROM node:18-alpine

WORKDIR /app## 📊 Response Format

COPY package*.json ./

RUN npm ci --only=production---

COPY . .

RUN npx prisma generateTodas as respostas seguem um padrão consistente:

RUN npm run build

EXPOSE 10000## 🖥️ Frontend - Guia de Integração Next.js

CMD ["npm", "run", "start:prod"]

```### **Sucesso**



### **Railway/Render**```json### URLs da API

```json

// railway.json ou render.yaml{- Dev: `http://localhost:3005`

{

  "build": {  "statusCode": 200,- Prod: `https://pizza-express-backend.vercel.app`

    "builder": "NIXPACKS"

  },  "message": "Operação realizada com sucesso",

  "deploy": {

    "startCommand": "npm run start:prod",  "data": {### Fluxo de Autenticação

    "healthcheckPath": "/"

  }    // Dados retornados- Login tradicional: `POST /auth/login`

}

```  }- Registro: `POST /auth/register`



---}- **Google OAuth**: Redirecionar para `GET /auth/google`



## 🧪 Testes```- Dados do usuário: `GET /me` (inclui avatar se logado via Google)



### **Executar Testes**

```bash

# Testes unitários### **Erro**### Fluxo de Usuários (Users)

npm run test

```json- Listar usuários: `GET /users`

# Testes com coverage

npm run test:cov{- Criar usuário: `POST /users` (JSON com endereços obrigatórios)



# Testes e2e  "statusCode": 400,- Buscar usuário: `GET /users/:id`

npm run test:e2e

  "message": "Mensagem de erro clara",- Atualizar usuário: `PATCH /users/:id`

# Watch mode

npm run test:watch  "error": "Bad Request",- Deletar usuário: `DELETE /users/:id`



# Debug tests  "timestamp": "2025-09-30T20:00:00.000Z",

npm run test:debug

```  "path": "/api/endpoint"### Fluxo de Pizzas com Imagens



### **Coverage Report**}- Listar pizzas: `GET /pizzas`

```bash

# Gerar relatório de cobertura```- Criar pizza sem imagem: `POST /pizzas` (JSON)

npm run test:cov

- Criar pizza com imagem: `POST /pizzas/with-image` (form-data)

# Abrir relatório HTML

open coverage/lcov-report/index.html---- Upload de imagem: `POST /pizzas/:id/upload-image` (form-data)

```

- Atualizar pizza: `PATCH /pizzas/:id`

---

## 🚀 Deploy- Deletar pizza: `DELETE /pizzas/:id`

## 📁 Estrutura do Projeto



```

pizza-express-backend/### **Vercel (Recomendado)**### Fluxo de Pedidos (Atualizado)

├── src/

│   ├── auth/                   # 🔐 Autenticação JWT + OAuth```bash- Criar pedido: `POST /pedidos` (com `userId` e `enderecoId`)

│   │   ├── guards/            # Guards customizados

│   │   ├── strategies/        # Passport strategies# Install Vercel CLI- Listar pedidos: `GET /pedidos`

│   │   └── dto/               # DTOs de auth

│   ├── common/                 # 🛠️ Módulos compartilhadosnpm i -g vercel- Atualizar pedido: `PATCH /pedidos/:id`

│   │   ├── builders/          # Response builders

│   │   ├── constants/         # Constantes globais

│   │   ├── decorators/        # Decorators customizados

│   │   ├── filters/           # Exception filters# Deploy#### Exemplo de integração (Next.js)

│   │   └── logger/            # Sistema de logging

│   ├── pizzas/                 # 🍕 Gestão de pizzasvercel --prod```typescript

│   ├── pedidos/               # 📦 Sistema de pedidos

│   ├── users/                 # 👥 Gestão de usuários```// Login com Google OAuth

│   ├── entregadores/          # 🏍️ Gestão de entregadores

│   ├── enderecos/             # 📍 Gestão de endereçosconst handleGoogleLogin = () => {

│   ├── payments/              # 💳 Sistema de pagamentos

│   └── upload/                # 📤 Sistema de upload### **Docker**  window.location.href = `${API_URL}/auth/google`;

├── prisma/                     # 🗄️ Database schema & migrations

├── test/                       # 🧪 Testes e2e```dockerfile};

└── docs/                       # 📚 Documentação adicional

```FROM node:18-alpine



---WORKDIR /app// Criar pizza com imagem



## 🔒 SegurançaCOPY package*.json ./const formData = new FormData();



### **🛡️ Medidas Implementadas**RUN npm ci --only=productionformData.append('nome', pizza.nome);

- ✅ **JWT Authentication** com refresh tokens

- ✅ **Rate Limiting** (20 req/min por IP)COPY . .formData.append('descricao', pizza.descricao);

- ✅ **CORS** configurado para domínios específicos

- ✅ **Helmet.js** para security headersRUN npx prisma generateformData.append('preco', pizza.preco.toString());

- ✅ **Input Validation** com class-validator

- ✅ **SQL Injection Protection** via PrismaRUN npm run buildformData.append('imagem', imagem);

- ✅ **XSS Protection** em todas as respostas

- ✅ **Password Hashing** com bcryptEXPOSE 10000



### **🔑 Role-Based Access Control**CMD ["npm", "run", "start:prod"]await fetch(`${API_URL}/pizzas/with-image`, {

```typescript

// Decorators customizados para proteção```  method: 'POST',

@AdminOnly()              // Apenas administradores

@UserOnly()               // Usuários autenticados  headers: { Authorization: `Bearer ${token}` },

@ResourceOwner()          // Dono do recurso

@Roles(Role.FUNCIONARIO)  // Roles específicas### **Environment Variables**  body: formData,

```

Configure as seguintes variáveis no seu provedor:});

---

- `DATABASE_URL`

## 📈 Monitoramento

- `JWT_SECRET`// Criar pedido (nova estrutura)

### **📊 Logging com Winston**

```typescript- `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET`await fetch(`${API_URL}/pedidos`, {

// Logs estruturados em produção

this.logger.info('Payment processed', {- `CLOUDINARY_*` credentials  method: 'POST',

  userId: 1,

  amount: 7590,- `STRIPE_*` credentials  headers: { 

  paymentId: 'pi_123',

  timestamp: new Date().toISOString()    'Authorization': `Bearer ${token}`,

});

```---    'Content-Type': 'application/json'



### **🚨 Error Tracking**  },

```typescript

// Global Exception Filter captura todos os erros## 🧪 Testes  body: JSON.stringify({

@Catch()

export class AllExceptionsFilter {    userId: user.id,

  catch(exception: unknown, host: ArgumentsHost) {

    // Log estruturado + resposta padronizada```bash    pizzaIds: [1, 2, 3],

    // Integração com Sentry/LogRocket disponível

  }# Testes unitários    enderecoId: endereco.id, // ← Novo campo obrigatório

}

```npm run test    observacoes: 'Sem cebola'



---  }),



## 🤝 Contribuição# Testes com coverage});



### **Como Contribuir**npm run test:cov```

1. Fork o projeto

2. Crie branch: `git checkout -b feature/MinhaFeature`

3. Commit: `git commit -m 'feat: Minha nova feature'`

4. Push: `git push origin feature/MinhaFeature`# Testes e2e#### Dicas

5. Abra Pull Request

npm run test:e2e- Validar tipo/tamanho do arquivo no frontend

### **📋 Padrões de Código**

- ✅ **TypeScript strict mode** obrigatório- Mostrar feedback visual durante uploads

- ✅ **ESLint + Prettier** configurados

- ✅ **Conventional Commits** required# Watch mode- Tratar erros de API

- ✅ **SOLID principles** aplicados

- ✅ **100% Type Safety** (zero `any`)npm run test:watch- Usar JWT em todas as requisições

- ✅ **Clean Code** practices

- ✅ **TDD** para features críticas```- **Avatar do Google**: Acessível via endpoint `/me` após login OAuth



### **🔍 Code Review Guidelines**

- Controllers devem ter <100 linhas

- Services contêm regras de negócio------

- Testes obrigatórios para novas features

- Documentação atualizada

- Zero breaking changes sem major version

## 📁 Estrutura do Projeto## 📝 Workflow Recomendado

---

1. Ler código existente antes de modificar

## 📊 Performance

```2. **Seguir regras de tipagem**: Nunca usar `any`

### **⚡ Otimizações Implementadas**

- ✅ **N+1 Queries** eliminadas com `select` específicossrc/3. Validar build/lint após mudanças (0 erros obrigatório)

- ✅ **Database Indexing** otimizado

- ✅ **Response Compression** habilitada├── auth/                   # Autenticação e autorização4. Executar testes relevantes

- ✅ **Connection Pooling** configurado

- ✅ **Caching Strategy** para dados estáticos├── common/                 # Módulos compartilhados5. Atualizar documentação se necessário

- ✅ **Query Optimization** via Prisma

│   ├── builders/          # Response builders6. Solicitar permissão para alterações críticas

### **📈 Métricas**

- **Response Time**: <100ms (média)│   ├── constants/         # Constantes da aplicação

- **Throughput**: 1000+ req/s

- **Memory Usage**: <512MB│   ├── decorators/        # Decorators customizados---

- **Database Queries**: Otimizadas para <5ms

│   ├── filters/           # Exception filters

---

│   └── logger/            # Sistema de logging## 📚 Histórico e Contato

## 🛣️ Roadmap

├── pizzas/                # Gestão de pizzas- **Última atualização**: 3 de agosto de 2025

### **📅 Próximas Features**

- [ ] 🔍 **Search & Filters** avançados├── pedidos/               # Sistema de pedidos- **Versão**: 2.0 (Migração Users + OAuth Google)

- [ ] 📊 **Analytics Dashboard** para admins

- [ ] 🎯 **Push Notifications** via Firebase├── users/                 # Gestão de usuários- Suporte: suporte@pizzaexpress.com

- [ ] 📱 **Mobile App** React Native

- [ ] 🤖 **Chatbot** de atendimento├── entregadores/          # Gestão de entregadores- Issues: [GitHub Issues](https://github.com/RacconWebFenix/pizza-express-backend/issues)

- [ ] 📈 **A/B Testing** framework

- [ ] 🌍 **Internationalization** (i18n)├── enderecos/             # Gestão de endereços

- [ ] 🔄 **GraphQL** API alternative

├── payments/              # Sistema de pagamentos---

---

└── upload/                # Sistema de upload

## ❓ FAQ

```**Feito com ❤️ usando NestJS + Prisma + Cloudinary + Google OAuth**

### **🤔 Perguntas Frequentes**



**Q: Como resetar senha de usuário?**---

A: Implemente endpoint `/auth/forgot-password` com envio de email.

## 🤝 Contribuição

**Q: Como adicionar novos métodos de pagamento?**

A: Extend PaymentsService e configure novos providers no Stripe.### **Como Contribuir**

1. Fork o projeto

**Q: Como configurar environment de staging?**2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)

A: Duplique `.env` para `.env.staging` e configure CI/CD.3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)

4. Push para a branch (`git push origin feature/AmazingFeature`)

**Q: Como fazer backup do banco?**5. Abra um Pull Request

A: Use `pg_dump` para PostgreSQL ou configure backups automáticos.

### **Padrões de Código**

**Q: Como monitorar performance?**- ✅ TypeScript strict mode

A: Integre APM tools como New Relic, DataDog ou Grafana.- ✅ ESLint + Prettier configurados

- ✅ Conventional Commits

---- ✅ SOLID principles

- ✅ 100% Type Safety (zero `any`)

## 📞 Suporte

### **Guidelines**

### **🆘 Canais de Suporte**- Mantenha os controllers limpos (<100 linhas)

- 📧 **Email**: suporte@pizzaexpress.com- Use Domain Services para regras de negócio

- 💬 **Discord**: [Pizza Express Dev](https://discord.gg/pizzaexpress)- Implemente testes para novas features

- 🐛 **Issues**: [GitHub Issues](https://github.com/RacconWebFenix/pizza-express-backend/issues)- Documente APIs complexas

- 📖 **Wiki**: [Documentação Completa](https://github.com/RacconWebFenix/pizza-express-backend/wiki)- Siga os padrões de Response DTOs



### **⏰ SLA**---

- 🚨 **Critical**: <2h

- ⚠️ **High**: <24h  ## 📚 Documentação Adicional

- 📋 **Medium**: <72h

- 💡 **Low**: <1 week- 📋 [Payment Flow Documentation](./Payment_Flow_Documentation.md)

- 🔌 [WebSocket Documentation](./WebSocket_Documentation.md)

---- 🔧 [Refactoring Roadmap](./REFACTORING_ROADMAP.md)

- 📱 [Frontend Integration](./frontend-payment-integration.md)

## 📄 Licença

---

Este projeto está sob licença **MIT**. Veja [LICENSE](LICENSE) para detalhes.

## 📄 Licença

```

MIT LicenseEste projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.



Copyright (c) 2025 RacconWebFenix---



Permission is hereby granted, free of charge, to any person obtaining a copy## 👥 Autores

of this software and associated documentation files...

```- **RacconWebFenix** - *Desenvolvimento inicial* - [@RacconWebFenix](https://github.com/RacconWebFenix)



------



## 👥 Time## 🙏 Agradecimentos



### **🏆 Contribuidores**- NestJS team pela framework incrível

- **[@RacconWebFenix](https://github.com/RacconWebFenix)** - *Creator & Lead Developer*- Prisma team pelo ORM fantástico

- **[Você?](https://github.com/RacconWebFenix/pizza-express-backend/contribute)** - *Próximo contribuidor*- Stripe pela integração de pagamentos

- Cloudinary pelo serviço de imagens

### **🙏 Agradecimentos**

- **NestJS Team** - Framework incrível---

- **Prisma Team** - ORM fantástico  

- **Stripe** - Sistema de pagamentos robusto<div align="center">

- **Cloudinary** - Serviço de imagens confiável

- **Comunidade Open Source** - Inspiração constante**⭐ Se este projeto te ajudou, não esqueça de dar uma estrela!**



---[![GitHub stars](https://img.shields.io/github/stars/RacconWebFenix/pizza-express-backend.svg?style=social&label=Star)](https://github.com/RacconWebFenix/pizza-express-backend/stargazers)



## 📊 Stats</div>

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/RacconWebFenix/pizza-express-backend?style=social)
![GitHub forks](https://img.shields.io/github/forks/RacconWebFenix/pizza-express-backend?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/RacconWebFenix/pizza-express-backend?style=social)

![GitHub issues](https://img.shields.io/github/issues/RacconWebFenix/pizza-express-backend)
![GitHub pull requests](https://img.shields.io/github/issues-pr/RacconWebFenix/pizza-express-backend)
![GitHub last commit](https://img.shields.io/github/last-commit/RacconWebFenix/pizza-express-backend)

**⭐ Se este projeto te ajudou, não esqueça de dar uma estrela!**

</div>

---

<div align="center">

**Feito com ❤️ usando NestJS + TypeScript + Prisma**

*Sistema de delivery de pizzas moderno, escalável e production-ready*

**🍕 Pizza Express - Delivering Excellence! 🚀**

</div>