# 🍕 Pizza Express API & Frontend Guide

---

## 📦 Backend - Pizza Express

### 🚦 Funcionalidades
- Autenticação JWT + Google OAuth com captura de avatar
- CRUD de usuários (migrado de clientes), pizzas, pedidos, entregadores
- Upload de imagens via Cloudinary
- **💳 Sistema de pagamentos Stripe completo com webhooks**
- WebSockets para entregadores
- Documentação Swagger
- Docker Ready

### 💳 Sistema de Pagamentos
- **Payment Intents** do Stripe para processamento seguro
- **Webhooks** para confirmação automática de pagamentos
- **Integração completa** com fluxo de pedidos
- **Atualização automática** de status após pagamento confirmado

**📖 Documentação detalhada:** Ver `Payment_Flow_Documentation.md`

### 🏗️ Arquitetura
- NestJS + TypeScript
- PostgreSQL + Prisma ORM
- JWT Bearer Token + Google OAuth Strategy
- Cloudinary para imagens
- Testes: Jest + Supertest
- Deploy: Vercel

#### Estrutura de Módulos
```
src/
├── auth/           [PROTEGIDO] - JWT, OAuth Google, guards, estratégias
├── users/          - CRUD de usuários (migrado de clientes)
├── entregadores/   - CRUD + WebSocket para localização
├── enderecos/      - CRUD de endereços (vinculados ao usuário)
├── pedidos/        - Sistema de pedidos com enderecoId
├── pizzas/         - CRUD de pizzas + upload de imagens
├── upload/         - Serviços de upload (Cloudinary)
├── prisma.module.ts - Configuração do Prisma
└── main.ts         [PROTEGIDO] - Bootstrap da aplicação
```

### 🛡️ Segurança & Políticas
- Não editar arquivos protegidos sem permissão
- Não commitar sem autorização
- Endpoints protegidos com `@UseGuards(JwtAuthGuard)`
- **PROIBIDO uso de tipagem do tipo `any`!**
- Respostas padronizadas:
```typescript
{
  statusCode: 201,
  message: "Descrição da ação",
  data: objeto_retornado
}
```

### 🧑‍💻 DTOs & Validação
- Usar class-validator: `IsNotEmpty`, `IsString`, `IsNumber`, `IsOptional`, `IsUrl`
- Imports organizados
- **Tipagem rigorosa**: Evitar `any`, usar tipos específicos

### 🐘 Banco de Dados (Prisma)
- **User** (id, nome, email, password, telefone, avatar?, role)
- **Endereco** (id, userId, cep, tipo, logradouro, numero, bairro, cidade, estado, principal)
- **Pizza** (id, nome, descricao, preco, imagemUrl?)
- **Pedido** (id, userId, enderecoId, pizzas[], status, observacoes, total, createdAt)
- **Entregador** (id, nome, email, telefone, veiculo, placa)

#### Comandos úteis
```bash
npx prisma migrate dev --name nome_da_migracao
npx prisma migrate deploy
npx prisma studio
npx prisma migrate reset --force  # Para resetar em dev
```

### 🔐 Autenticação
- JWT obrigatório em todos endpoints (exceto `/auth/register`, `/auth/login`, `/auth/google`)
- **Google OAuth**: `/auth/google` (redireciona) → `/auth/google/callback` (processa)
- Avatar capturado automaticamente do Google e salvo no campo `User.avatar`
- Payload JWT: `{ sub: userId, email, role }`
- Endpoint `/me` retorna dados do usuário logado incluindo avatar

### 🌍 CORS & Deploy
- Dev: `http://localhost:3000`
- Prod: `process.env.FRONTEND_URL`
- Deploy: Vercel
- Google OAuth: Callback configurado para produção

### 🧪 Testes
```bash
npm run test         # Testes unitários
npm run test:e2e     # Testes e2e (sequencial)
npm run test:cov     # Coverage
```

---

## � Documentação da API - Insomnia Collection

### 📁 Arquivos Disponíveis
- **`Insomnia_complete.yaml`** - Coleção completa com TODOS os endpoints
- **`WebSocket_Documentation.md`** - Documentação específica do WebSocket

### 🚀 Como Usar

#### 1. Importar no Insomnia
1. Abra o Insomnia
2. **Application > Preferences > Data > Import Data > From File**
3. Selecione `Insomnia_complete.yaml`
4. Clique em "Import"

#### 2. Configurar Ambiente
- **Localhost**: Para desenvolvimento local
- **Production**: Para ambiente de produção
- Configure as variáveis:
  - `base_url`: URL da API
  - `jwt`: Token JWT (obtenha fazendo login)
  - `user_id`, `pizza_id`, etc.: IDs para testes

#### 3. Fluxo de Teste Recomendado
1. **Login**: `POST /auth/login` → Copie o token JWT
2. **Configure JWT**: Cole o token na variável `jwt` do ambiente
3. **Teste endpoints**: Comece pelos GETs, depois POSTs
4. **Para WebSocket**: Use Postman ou Thunder Client (não suportado no Insomnia)

### 📊 Endpoints Documentados

#### 🔐 Autenticação (5 endpoints)
- Login tradicional e Google OAuth
- Configurações e perfil do usuário

#### 👥 Usuários (6 endpoints)
- CRUD completo + busca por email

#### 🏠 Endereços (5 endpoints)
- CRUD de endereços vinculados ao usuário

#### 🍕 Pizzas (7 endpoints)
- CRUD + upload de imagens (3 formas diferentes)

#### 📦 Pedidos (6 endpoints)
- CRUD + atualização de status + cálculo automático de total

#### 🚴 Entregadores (5 endpoints)
- CRUD de entregadores

#### 💳 Pagamentos (2 endpoints)
- Stripe Payment Intents + Webhooks

#### 🏠 App (1 endpoint)
- Status da API

### 🔧 Exemplos de Uso

#### Login e obtenção de token
```bash
# 1. Fazer login
POST /auth/login
{
  "email": "admin@admin.com",
  "password": "123456"
}

# 2. Copiar token da resposta e colar na variável 'jwt'
```

#### Criar pedido completo
```bash
# Headers
Authorization: Bearer {{jwt}}

# Body
{
  "clienteId": 1,
  "enderecoId": 1,
  "pizzasIds": [1, 2],
  "paymentIntentId": "pi_stripe_..."
}
```

### ⚠️ Considerações Importantes
- **JWT obrigatório** em quase todos os endpoints
- **Upload de imagens**: Use `multipart/form-data`
- **WebSocket**: Documentado separadamente em `WebSocket_Documentation.md`
- **Rate limiting**: Implementado nos endpoints de upload
- **Validações**: Todos os campos obrigatórios estão documentados

### 🐛 Troubleshooting
- **Erro 401**: Verifique se o JWT está configurado corretamente
- **Erro 400**: Campos obrigatórios faltando ou formato inválido
- **Erro 413**: Imagem muito grande (máx. 5MB)
- **WebSocket não conecta**: Verifique CORS e autenticação

---

## �🔄 Mudanças da Migração (Clientes → Users)

### ✅ Alterações Implementadas
- **Tabela `Cliente` → `User`**: Renomeação completa no banco
- **Campo `avatar`**: Adicionado para armazenar URL da foto do Google
- **Rotas atualizadas**: `/clientes/*` → `/users/*`
- **DTOs migrados**: `CreateClienteDto` → `CreateUserDto`, etc.
- **Relacionamentos**: `clienteId` → `userId` nos pedidos
- **Campo `enderecoId`**: Adicionado nos pedidos (substitui `enderecoEntrega`)
- **Google OAuth**: Estratégia completa com captura de avatar
- **Testes**: Todos os arquivos de teste atualizados

### 🔗 Endpoints Atualizados
- `POST /auth/register` - Registro de usuário
- `POST /auth/login` - Login tradicional
- `GET /auth/google` - Início do OAuth Google
- `GET /auth/google/callback` - Callback do Google
- `GET /me` - Dados do usuário logado (inclui avatar)
- `GET /users` - Listar usuários
- `POST /users` - Criar usuário
- `PATCH /users/:id` - Atualizar usuário
- `DELETE /users/:id` - Deletar usuário

---

## 📤 Upload de Imagens (Cloudinary)

### Endpoints
- `POST /pizzas` - Criar pizza (JSON sem imagem)
- `POST /pizzas/with-image` - Criar pizza com upload de imagem
- `POST /pizzas/:id/upload-image` - Fazer upload/atualizar imagem de pizza existente

#### Exemplo de uso (curl)
```bash
curl -X POST \
  http://localhost:3005/pizzas/with-image \
  -H 'Authorization: Bearer YOUR_JWT_TOKEN' \
  -F 'nome=Pizza Margherita' \
  -F 'descricao=Molho de tomate, mussarela e manjericão' \
  -F 'preco=25.90' \
  -F 'imagem=@/caminho/para/sua/imagem.jpg'
```

#### Validações
- Tipos permitidos: JPG, JPEG, PNG, WEBP
- Tamanho máximo: 5MB
- JWT obrigatório

#### Configuração Cloudinary
- Pasta: `pizza-express/pizzas/`
- Redimensionamento: 800x600px
- Formato: WEBP
- Otimização automática

#### Resposta de sucesso
```json
{
  "statusCode": 201,
  "message": "Pizza criada com sucesso",
  "data": {
    "id": 1,
    "nome": "Pizza Margherita",
    "descricao": "Molho de tomate, mussarela e manjericão",
    "preco": 25.90,
    "imagemUrl": "https://res.cloudinary.com/.../pizza-express/pizzas/abc123.webp"
  }
}
```

---

## 🖥️ Frontend - Guia de Integração Next.js

### URLs da API
- Dev: `http://localhost:3005`
- Prod: `https://pizza-express-backend.vercel.app`

### Fluxo de Autenticação
- Login tradicional: `POST /auth/login`
- Registro: `POST /auth/register`
- **Google OAuth**: Redirecionar para `GET /auth/google`
- Dados do usuário: `GET /me` (inclui avatar se logado via Google)

### Fluxo de Usuários (Users)
- Listar usuários: `GET /users`
- Criar usuário: `POST /users` (JSON com endereços obrigatórios)
- Buscar usuário: `GET /users/:id`
- Atualizar usuário: `PATCH /users/:id`
- Deletar usuário: `DELETE /users/:id`

### Fluxo de Pizzas com Imagens
- Listar pizzas: `GET /pizzas`
- Criar pizza sem imagem: `POST /pizzas` (JSON)
- Criar pizza com imagem: `POST /pizzas/with-image` (form-data)
- Upload de imagem: `POST /pizzas/:id/upload-image` (form-data)
- Atualizar pizza: `PATCH /pizzas/:id`
- Deletar pizza: `DELETE /pizzas/:id`

### Fluxo de Pedidos (Atualizado)
- Criar pedido: `POST /pedidos` (com `userId` e `enderecoId`)
- Listar pedidos: `GET /pedidos`
- Atualizar pedido: `PATCH /pedidos/:id`

#### Exemplo de integração (Next.js)
```typescript
// Login com Google OAuth
const handleGoogleLogin = () => {
  window.location.href = `${API_URL}/auth/google`;
};

// Criar pizza com imagem
const formData = new FormData();
formData.append('nome', pizza.nome);
formData.append('descricao', pizza.descricao);
formData.append('preco', pizza.preco.toString());
formData.append('imagem', imagem);

await fetch(`${API_URL}/pizzas/with-image`, {
  method: 'POST',
  headers: { Authorization: `Bearer ${token}` },
  body: formData,
});

// Criar pedido (nova estrutura)
await fetch(`${API_URL}/pedidos`, {
  method: 'POST',
  headers: { 
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    userId: user.id,
    pizzaIds: [1, 2, 3],
    enderecoId: endereco.id, // ← Novo campo obrigatório
    observacoes: 'Sem cebola'
  }),
});
```

#### Dicas
- Validar tipo/tamanho do arquivo no frontend
- Mostrar feedback visual durante uploads
- Tratar erros de API
- Usar JWT em todas as requisições
- **Avatar do Google**: Acessível via endpoint `/me` após login OAuth

---

## 📝 Workflow Recomendado
1. Ler código existente antes de modificar
2. **Seguir regras de tipagem**: Nunca usar `any`
3. Validar build/lint após mudanças (0 erros obrigatório)
4. Executar testes relevantes
5. Atualizar documentação se necessário
6. Solicitar permissão para alterações críticas

---

## 📚 Histórico e Contato
- **Última atualização**: 3 de agosto de 2025
- **Versão**: 2.0 (Migração Users + OAuth Google)
- Suporte: suporte@pizzaexpress.com
- Issues: [GitHub Issues](https://github.com/RacconWebFenix/pizza-express-backend/issues)

---

**Feito com ❤️ usando NestJS + Prisma + Cloudinary + Google OAuth**
