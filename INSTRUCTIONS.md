# 🤖 INSTRUÇÕES PARA IAs - Pizza Express Backend

## 🚨 POLÍTICAS DE SEGURANÇA CRÍTICAS

### ❌ PROIBIDO SEM PERMISSÃO EXPLÍCITA:

1. **📁 ARQUIVOS/PASTAS PROTEGIDOS:**
   - `src/auth/` - Sistema de autenticação completo
   - `package.json` - Dependências e configurações do projeto
   - `src/main.ts` - Ponto de entrada da aplicação
   - `.env` - Variáveis de ambiente sensíveis

2. **🚫 AÇÕES RESTRITAS:**
   - `git commit` - Commits devem ser autorizados
   - Criar novos arquivos com `create_file`
   - Remover/deletar arquivos existentes
   - Modificar configurações do banco (migrations)

### ✅ PERMITIDO:

- Editar arquivos existentes (exceto protegidos)
- Ler qualquer arquivo do projeto
- Executar comandos de build/test/lint
- Verificar status do git
- Criar branches (já existe: `feat/image-upload`)

## 🏗️ ARQUITETURA DO PROJETO

### **Tecnologias:**
- **Framework:** NestJS + TypeScript
- **Banco de dados:** PostgreSQL + Prisma ORM
- **Autenticação:** JWT Bearer Token
- **Upload:** Cloudinary (configurado)
- **Testes:** Jest + Supertest
- **Deploy:** Vercel

### **Estrutura de Módulos:**
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

## 📝 PADRÕES DE CÓDIGO

### **Controllers:**
- Todos protegidos com `@UseGuards(JwtAuthGuard)`
- Respostas padronizadas:
```typescript
{
  statusCode: 201,
  message: "Descrição da ação",
  data: objeto_retornado
}
```

### **Error Handling:**
```typescript
catch (error) {
  if ((error as { code?: string })?.code === 'P2025') {
    throw new HttpException('Não encontrado', HttpStatus.NOT_FOUND);
  }
  throw new HttpException('Erro interno', HttpStatus.INTERNAL_SERVER_ERROR);
}
```

### **DTOs:**
- Usar class-validator para validação
- Imports: `IsNotEmpty`, `IsString`, `IsNumber`, `IsOptional`

## 🖼️ SISTEMA DE UPLOAD

### **Configuração atual:**
- **Provider:** Cloudinary (credenciais no .env)
- **Pasta:** `pizza-express/pizzas/`
- **Formatos aceitos:** JPG, PNG, WEBP
- **Tamanho máximo:** 5MB
- **Redimensionamento:** 800x600px automático

### **Endpoints de upload:**
- `POST /pizzas/with-image` - Criar pizza com imagem
- `POST /pizzas/:id/upload-image` - Atualizar imagem

### **Validação:**
- Interceptor: `FileValidationInterceptor`
- Tipos MIME e tamanho verificados

## 🧪 TESTES

### **Comandos:**
```bash
npm run test         # Testes unitários
npm run test:e2e     # Testes e2e (SEMPRE sequencial)
npm run test:cov     # Coverage
```

### **Importante:**
- Testes e2e devem rodar sequencialmente para evitar conflitos
- Usar dados de teste padronizados
- Limpar estado entre testes

## 🗄️ BANCO DE DADOS

### **Prisma Commands:**
```bash
npx prisma migrate dev --name nome_da_migracao
npx prisma migrate deploy
npx prisma studio
```

### **Schema atual:**
- Cliente (id, nome, email, password, telefone)
- Pizza (id, nome, descricao, preco, imagemUrl)
- Pedido (relaciona cliente + pizzas)
- Entregador (id, nome, email, telefone)
- MonitoramentoEntrega (WebSocket tracking)

## 🔐 AUTENTICAÇÃO

### **JWT Strategy:**
- Secret: `process.env.JWT_SECRET`
- Bearer token obrigatório em todos endpoints
- Payload: `{ sub: clienteId, email }`

### **Guards aplicados:**
- Todos controllers usam `@UseGuards(JwtAuthGuard)`
- Endpoints públicos: apenas login/registro

## 🌐 CORS & DEPLOY

### **CORS:**
- Dev: `http://localhost:3000`
- Prod: `process.env.FRONTEND_URL` (split por vírgula)

### **Deploy:**
- Platform: Vercel
- Build: `npm run build`
- Start: `npm run start:prod`

## 🔧 DESENVOLVIMENTO

### **Branch atual:** `feat/image-upload`

### **Lint:**
```bash
npm run lint      # ESLint com --fix
```

### **Padrões de lint:**
- Usar interfaces tipadas em vez de `any`
- Error handling com tipos específicos
- Imports organizados

## 📋 WORKFLOW RECOMENDADO

1. **Análise:** Ler código existente antes de modificar
2. **Validação:** Verificar build e lint após mudanças
3. **Teste:** Executar testes relevantes
4. **Documentação:** Atualizar docs se necessário
5. **Permissão:** Solicitar autorização para commits/arquivos críticos

## 🚨 LEMBRETES IMPORTANTES

- **NUNCA** commitar sem permissão
- **SEMPRE** verificar arquivos protegidos antes de editar
- **PREFERIR** leitura de context em vez de múltiplas read_file calls
- **TESTAR** funcionalidades após implementar
- **MANTER** padrões de resposta da API
- **RESPEITAR** estrutura de módulos do NestJS

## 📞 CONTATO COM USUÁRIO

Quando precisar de permissão:
- Explicar claramente o que será feito
- Justificar a necessidade da modificação
- Aguardar aprovação explícita
- Confirmar entendimento das restrições

---

**Última atualização:** 28 de junho de 2025
**Status do projeto:** Upload de imagens implementado, aguardando testes
