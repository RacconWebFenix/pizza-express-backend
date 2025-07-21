# 🍕 Pizza Express API & Frontend Guide

---

## 📦 Backend - Pizza Express

### 🚦 Funcionalidades
- Autenticação JWT
- CRUD de clientes, pizzas, pedidos, entregadores
- Upload de imagens via Cloudinary
- WebSockets para entregadores
- Documentação Swagger
- Docker Ready

### 🏗️ Arquitetura
- NestJS + TypeScript
- PostgreSQL + Prisma ORM
- JWT Bearer Token
- Cloudinary para imagens
- Testes: Jest + Supertest
- Deploy: Vercel

#### Estrutura de Módulos
```
src/
├── auth/           [PROTEGIDO] - JWT, guards, estratégias
├── clientes/       - CRUD de clientes
├── entregadores/   - CRUD + WebSocket para localização
├── pedidos/        - Sistema de pedidos
├── pizzas/         - CRUD de pizzas + upload de imagens
├── upload/         - Serviços de upload (Cloudinary)
├── prisma.module.ts - Configuração do Prisma
└── main.ts         [PROTEGIDO] - Bootstrap da aplicação
```

### 🛡️ Segurança & Políticas
- Não editar arquivos protegidos sem permissão
- Não commitar sem autorização
- Endpoints protegidos com `@UseGuards(JwtAuthGuard)`
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

### 🐘 Banco de Dados (Prisma)
- Cliente (id, nome, email, password, telefone)
- Pizza (id, nome, descricao, preco, image)
- Pedido (relaciona cliente + pizzas)
- Entregador (id, nome, email, telefone)

#### Comandos úteis
```bash
npx prisma migrate dev --name nome_da_migracao
npx prisma migrate deploy
npx prisma studio
```

### 🔐 Autenticação
- JWT obrigatório em todos endpoints (exceto login/registro)
- Payload: `{ sub: clienteId, email }`

### 🌍 CORS & Deploy
- Dev: `http://localhost:3000`
- Prod: `process.env.FRONTEND_URL`
- Deploy: Vercel

### 🧪 Testes
```bash
npm run test         # Testes unitários
npm run test:e2e     # Testes e2e (sequencial)
npm run test:cov     # Coverage
```

---

## 📤 Upload de Imagens (Cloudinary)

### Endpoints
- `POST /pizzas/with-image` - Criar pizza com imagem
- `POST /pizzas/:id/upload-image` - Atualizar imagem
- `POST /pizzas` - Criar pizza sem imagem

#### Exemplo de uso (curl)
```bash
curl -X POST \
  http://localhost:3005/pizzas/with-image \
  -H 'Authorization: Bearer YOUR_JWT_TOKEN' \
  -F 'nome=Pizza Margherita' \
  -F 'descricao=Molho de tomate, mussarela e manjericão' \
  -F 'preco=25.90' \
  -F 'image=@/caminho/para/sua/imagem.jpg'
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
    "image": "https://res.cloudinary.com/.../pizza-express/pizzas/abc123.webp"
  }
}
```

---

## 🖥️ Frontend - Guia de Integração Next.js

### URLs da API
- Dev: `http://localhost:3005`
- Prod: `https://pizza-express-backend.vercel.app`

### Fluxo de Pizzas com Imagens
- Listar pizzas: `GET /pizzas`
- Criar pizza sem imagem: `POST /pizzas` (JSON)
- Criar pizza com imagem: `POST /pizzas/with-image` (form-data)
- Upload de imagem: `POST /pizzas/:id/upload-image` (form-data)
- Atualizar pizza: `PATCH /pizzas/:id`
- Deletar pizza: `DELETE /pizzas/:id`

#### Exemplo de integração (Next.js)
```typescript
// Criar pizza com imagem
const formData = new FormData();
formData.append('nome', pizza.nome);
formData.append('descricao', pizza.descricao);
formData.append('preco', pizza.preco.toString());
formData.append('image', imagem);

await fetch('/api/pizzas/with-image', {
  method: 'POST',
  headers: { Authorization: `Bearer ${token}` },
  body: formData,
});
```

#### Dicas
- Validar tipo/tamanho do arquivo no frontend
- Mostrar feedback visual durante uploads
- Tratar erros de API
- Usar JWT em todas as requisições

---

## 📝 Workflow Recomendado
1. Ler código existente antes de modificar
2. Validar build/lint após mudanças
3. Executar testes relevantes
4. Atualizar documentação se necessário
5. Solicitar permissão para alterações críticas

---

## 📚 Histórico e Contato
- Última atualização: 28 de junho de 2025
- Suporte: suporte@pizzaexpress.com
- Issues: [GitHub Issues](https://github.com/seu-usuario/pizza-express-backend/issues)

---

**Feito com ❤️ usando NestJS + Prisma + Cloudinary**
