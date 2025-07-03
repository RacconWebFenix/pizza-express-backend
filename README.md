![CI](https://github.com/seu-usuario/pizza-express/actions/workflows/ci.yml/badge.svg)

# 🍕 Pizza Express API

Uma API completa para gerenciamento de pizzarias, desenvolvida com NestJS, Prisma e PostgreSQL com upload de imagens via Cloudinary.

## 🚀 Funcionalidades

- **🔐 Autenticação JWT** - Sistema de login seguro para clientes
- **👥 Gestão de Clientes** - CRUD completo para clientes
- **🍕 Catálogo de Pizzas** - Gerenciamento do cardápio com upload de imagens
- **📷 Upload de Imagens** - Integração com Cloudinary (processamento automático, CDN global)
- **📋 Sistema de Pedidos** - Controle completo de pedidos
- **🚚 Gestão de Entregadores** - Acompanhamento de entregas em tempo real via WebSockets
- **📖 Documentação OpenAPI/Swagger** - Documentação interativa (desenvolvimento)
- **🐳 Docker Ready** - Configurado para deploy com Docker

## 🛠️ Tecnologias

- **NestJS** - Framework Node.js robusto e escalável
- **Prisma** - ORM moderno para bancos de dados
- **PostgreSQL** - Banco de dados relacional
- **Cloudinary** - Armazenamento e processamento de imagens na nuvem
- **JWT** - Autenticação segura
- **WebSockets** - Comunicação em tempo real para entregas
- **TypeScript** - Linguagem tipada
- **Jest** + **Supertest** - Testes automatizados
- **Docker** - Containerização para produção

## 📋 Pré-requisitos

- Node.js 18+
- PostgreSQL 15+ ou Docker
- Conta no Cloudinary (gratuita)
- npm ou yarn

## 🔧 Instalação

### 1. Clone e instale dependências

```bash
git clone <url-do-repositorio>
cd pizza-express-backend
npm install
```

### 2. Configure variáveis de ambiente

```bash
cp .env.example .env
```

Edite o arquivo `.env`:

```env
# Banco de dados
DATABASE_URL="postgresql://usuario:senha@localhost:5432/pizza_express"

# JWT
JWT_SECRET="seu-jwt-secret-super-seguro"

# Servidor
NODE_ENV="development"
PORT=3005
FRONTEND_URL="http://localhost:3000"

# Cloudinary (obrigatório para upload de imagens)
CLOUDINARY_CLOUD_NAME="seu-cloud-name"
CLOUDINARY_API_KEY="sua-api-key"
CLOUDINARY_API_SECRET="seu-api-secret"

# Teste (desenvolvimento)
TEST_CLIENTE_PASSWORD="senha123"
```

### 3. Configure o banco de dados

```bash
# Execute as migrações
npx prisma migrate deploy

# Seed do banco (opcional)
npx prisma db seed
```

## 🚀 Execução

### Desenvolvimento
```bash
npm run start:dev    # Modo watch com hot reload
npm run start:debug  # Modo debug
```

### Produção
```bash
npm run build        # Build da aplicação
npm run start:prod   # Inicia em produção
```

### Docker
```bash
# Build da imagem
docker build -t pizza-express-api .

# Executar container
docker run -p 3005:3005 --env-file .env pizza-express-api
```

## 📚 Documentação da API

### Swagger (Desenvolvimento)
```
http://localhost:3005/docs
```

### Endpoints JSON/YAML
- **JSON**: `http://localhost:3005/docs/json`
- **YAML**: `http://localhost:3005/docs/yaml`

## 📷 Upload de Imagens - Cloudinary

### Configuração
O projeto utiliza **Cloudinary** para armazenamento na nuvem com:
- ✅ **CDN Global** - Entrega rápida mundial
- ✅ **Processamento Automático** - Redimensionamento (800x600), otimização, WebP
- ✅ **Backup Seguro** - Imagens protegidas na nuvem
- ✅ **Escalabilidade** - Suporte a milhões de imagens

### Endpoints de Upload

#### 1. Upload Simples de Imagem
```bash
POST /pizzas/upload-image
Authorization: Bearer <token>
Content-Type: multipart/form-data

# Campos:
# - image: arquivo (JPEG, JPG, PNG, GIF - máx 5MB)
```

**Resposta:**
```json
{
  "statusCode": 200,
  "message": "Imagem enviada com sucesso",
  "data": {
    "imageUrl": "https://res.cloudinary.com/pizzariaexpress/image/upload/v1.../pizzas/nome.webp",
    "originalname": "pizza-margherita.jpg",
    "mimetype": "image/jpeg",
    "size": 245760
  }
}
```

#### 2. Criar Pizza com Imagem
```bash
POST /pizzas/with-image
Authorization: Bearer <token>
Content-Type: multipart/form-data

# Campos:
# - image: arquivo de imagem (opcional)
# - nome: string
# - descricao: string  
# - preco: number
```

### Exemplo Frontend (JavaScript)
```javascript
// Upload simples
const formData = new FormData();
formData.append('image', fileInput.files[0]);

const response = await fetch('/api/pizzas/upload-image', {
  method: 'POST',
  headers: { 'Authorization': `Bearer ${token}` },
  body: formData
});

// Criar pizza com imagem
const pizzaData = new FormData();
pizzaData.append('image', file);
pizzaData.append('nome', 'Pizza Margherita');
pizzaData.append('descricao', 'Molho, mussarela e manjericão');
pizzaData.append('preco', '25.90');

await fetch('/api/pizzas/with-image', {
  method: 'POST',
  headers: { 'Authorization': `Bearer ${token}` },
  body: pizzaData
});
```

## 🔐 Autenticação

### Login de Cliente
```bash
POST /auth/login
Content-Type: application/json

{
  "email": "cliente@exemplo.com",
  "password": "senha123"
}
```

### Uso do Token
```bash
Authorization: Bearer <jwt-token>
```

## 🗄️ Principais Endpoints

| Método | Endpoint | Descrição | Auth |
|--------|----------|-----------|------|
| POST | `/auth/login` | Login de cliente | ❌ |
| GET | `/auth/me` | Dados do usuário logado | ✅ |
| GET | `/pizzas` | Listar pizzas | ✅ |
| POST | `/pizzas` | Criar pizza | ✅ |
| POST | `/pizzas/upload-image` | Upload de imagem | ✅ |
| POST | `/pizzas/with-image` | Criar pizza com imagem | ✅ |
| GET | `/pedidos` | Listar pedidos | ✅ |
| POST | `/pedidos` | Criar pedido | ✅ |
| GET | `/clientes` | Listar clientes | ✅ |
| POST | `/clientes` | Cadastrar cliente | ❌ |

## 🧪 Testes

```bash
# Testes unitários
npm run test

# Testes e2e (sempre sequenciais)
npm run test:e2e

# Coverage
npm run test:cov

# Lint
npm run lint
```

## 🗄️ Banco de Dados

### Prisma Commands
```bash
# Nova migração
npx prisma migrate dev --name nome-da-migracao

# Aplicar migrações (produção)
npx prisma migrate deploy

# Reset banco (desenvolvimento)
npx prisma migrate reset --force

# Visualizar dados
npx prisma studio
```

### Schema Principal
```prisma
model Pizza {
  id        Int      @id @default(autoincrement())
  nome      String
  descricao String
  preco     Float
  imagemUrl String?  // URL do Cloudinary
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Cliente {
  id       Int    @id @default(autoincrement())
  nome     String
  email    String @unique
  password String
  // ... outros campos
}
```

## 📁 Estrutura do Projeto

```
src/
├── auth/              # 🔐 Módulo de autenticação JWT
├── clientes/          # 👥 Módulo de clientes
├── entregadores/      # 🚚 Módulo de entregadores + WebSockets
├── pedidos/           # 📋 Módulo de pedidos
├── pizzas/            # 🍕 Módulo de pizzas + upload
├── cloudinary/        # 📷 Serviço de upload Cloudinary
├── prisma.module.ts   # 🗄️ Configuração do Prisma
├── app.module.ts      # 🏠 Módulo principal
└── main.ts           # 🚀 Ponto de entrada

prisma/
├── migrations/        # 📝 Migrações do banco
├── schema.prisma     # 🗄️ Schema do banco
└── seed.ts           # 🌱 Dados iniciais

docker/
├── Dockerfile        # 🐳 Imagem Docker
└── docker-compose.yml # 🐳 Orquestração
```

## 🌐 Deploy

### Vercel (Recomendado)
```bash
# Deploy automático via GitHub
# Configurar variáveis de ambiente no dashboard da Vercel
```

### Docker
```bash
# Build
docker build -t pizza-express-api .

# Run
docker run -p 3005:3005 \
  -e DATABASE_URL="..." \
  -e JWT_SECRET="..." \
  -e CLOUDINARY_CLOUD_NAME="..." \
  pizza-express-api
```

### Variáveis de Ambiente (Produção)
```env
NODE_ENV=production
DATABASE_URL=postgresql://...
JWT_SECRET=super-secret-key
FRONTEND_URL=https://meuapp.com,https://app.exemplo.com
CLOUDINARY_CLOUD_NAME=pizzariaexpress
CLOUDINARY_API_KEY=sua-api-key
CLOUDINARY_API_SECRET=seu-api-secret
```

## 🔧 Scripts Disponíveis

```bash
npm run build          # 🏗️  Build da aplicação
npm run start          # 🚀 Inicia em produção
npm run start:dev      # 🔥 Desenvolvimento com hot reload
npm run start:debug    # 🐛 Modo debug
npm run lint           # 🧹 Linter + auto-fix
npm run test           # 🧪 Testes unitários
npm run test:e2e       # 🔄 Testes end-to-end
npm run test:cov       # 📊 Coverage de testes
```

## 🎯 Recursos Avançados

### WebSockets (Entregadores)
```javascript
// Conectar ao WebSocket
const socket = io('http://localhost:3005');

// Escutar atualizações de localização
socket.on('location-update', (data) => {
  console.log('Nova localização:', data);
});
```

### Rate Limiting
- **20 requests por minuto** por IP
- Proteção contra spam e ataques

### CORS Configurado
- URLs do frontend permitidas via `FRONTEND_URL`
- Suporte a múltiplos domínios

## 🤝 Contribuição

1. **Fork** o projeto
2. **Crie** uma branch (`git checkout -b feature/MinhaFeature`)
3. **Commit** suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. **Push** para a branch (`git push origin feature/MinhaFeature`)
5. **Abra** um Pull Request

## 📝 Licença

Este projeto está sob a licença **MIT**.

## 🐛 Suporte

- **Issues**: [GitHub Issues](https://github.com/seu-usuario/pizza-express-backend/issues)
- **Wiki**: Documentação completa no GitHub
- **Email**: suporte@pizzaexpress.com

---

⚡ **Feito com ❤️ usando NestJS + Prisma + Cloudinary**
