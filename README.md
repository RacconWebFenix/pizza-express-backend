![CI](https://github.com/seu-usuario/pizza-express/actions/workflows/ci.yml/badge.svg)

# Pizza Express API

Uma API completa para gerenciamento de pizzarias, desenvolvida com NestJS, Prisma e PostgreSQL.

## 🚀 Funcionalidades

- **Autenticação JWT** - Sistema de login seguro
- **Gestão de Clientes** - CRUD completo para clientes
- **Catálogo de Pizzas** - Gerenciamento do cardápio
- **Sistema de Pedidos** - Controle completo de pedidos
- **Gestão de Entregadores** - Acompanhamento de entregas em tempo real
- **Documentação OpenAPI/Swagger** - Documentação interativa (apenas em desenvolvimento)

## 🛠️ Tecnologias

- **NestJS** - Framework Node.js
- **Prisma** - ORM moderno para bancos de dados
- **PostgreSQL** - Banco de dados relacional
- **JWT** - Autenticação segura
- **WebSockets** - Comunicação em tempo real
- **TypeScript** - Linguagem tipada
- **OpenAPI/Swagger** - Documentação da API
- **Jest** + **Supertest** - Testes automatizados
- **GitHub Actions** - CI/CD

## 📋 Pré-requisitos

- Node.js 18+
- PostgreSQL 15+
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd pizza-express-backend
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:
```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/pizza_express"
JWT_SECRET="seu-jwt-secret-aqui"
NODE_ENV="development"
```

4. Execute as migrações do banco:
```bash
npx prisma migrate deploy
```

5. Seed do banco (opcional):
```bash
npx prisma db seed
```

## 🚀 Execução

### Desenvolvimento
```bash
# Modo watch
npm run start:dev

# Modo debug
npm run start:debug
```

### Produção
```bash
# Build
npm run build

# Start
npm run start:prod
```

## 📚 Documentação da API

A documentação OpenAPI/Swagger está disponível apenas em ambiente de desenvolvimento:

```
http://localhost:3005/docs
```

### Endpoints JSON/YAML

- **JSON**: `http://localhost:3005/docs/json`
- **YAML**: `http://localhost:3005/docs/yaml`

## 🧪 Testes

Para garantir a robustez e evitar falhas intermitentes, execute os testes e2e sempre em modo sequencial:

```bash
# Testes unitários
npm run test

# Testes e2e (modo sequencial)
npm run test:e2e

# Coverage
npm run test:cov
```

## 📦 Scripts Disponíveis

```bash
npm run build          # Build da aplicação
npm run start          # Inicia em modo produção
npm run start:dev      # Inicia em modo desenvolvimento
npm run start:debug    # Inicia em modo debug
npm run lint           # Executa o linter
npm run test           # Executa os testes
npm run test:e2e       # Executa os testes e2e
npm run test:cov       # Executa testes com coverage
```

## 🗄️ Banco de Dados

### Migrações
```bash
# Criar nova migração
npx prisma migrate dev --name nome-da-migracao

# Aplicar migrações
npx prisma migrate deploy

# Reset do banco
npx prisma migrate reset --force
```

### Prisma Studio
```bash
npx prisma studio
```

## 🌐 Deploy

### Vercel
O projeto está configurado para deploy automático no Vercel. O arquivo `vercel.json` já está configurado.

### Variáveis de Ambiente para Produção
- `DATABASE_URL` - URL do banco PostgreSQL
- `JWT_SECRET` - Chave secreta para JWT
- `NODE_ENV` - Deve ser "production"
- `FRONTEND_URL` - URLs permitidas para CORS (separadas por vírgula)

## 🔒 Autenticação

A API utiliza JWT Bearer Token. Para acessar endpoints protegidos:

```bash
Authorization: Bearer <seu-jwt-token>
```

## 📁 Estrutura do Projeto

```
src/
├── auth/              # Módulo de autenticação
├── clientes/          # Módulo de clientes
├── entregadores/      # Módulo de entregadores
├── pedidos/           # Módulo de pedidos
├── pizzas/            # Módulo de pizzas
├── prisma.module.ts   # Configuração do Prisma
├── prisma.service.ts  # Serviço do Prisma
├── app.module.ts      # Módulo principal
└── main.ts           # Ponto de entrada

prisma/
├── migrations/        # Migrações do banco
├── schema.prisma     # Schema do banco
└── seed.ts           # Dados iniciais

test/                 # Testes e2e
```

## 🎯 CI/CD

O projeto possui pipeline automatizado com GitHub Actions que:
- Executa testes automatizados
- Verifica qualidade do código
- Gera documentação OpenAPI
- Faz deploy automático no Vercel

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT.

## 🐛 Problemas

Encontrou um bug? Abra uma [issue](https://github.com/seu-usuario/pizza-express-backend/issues).
