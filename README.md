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

**Desenvolvido com ❤️ usando NestJS e TypeScript**