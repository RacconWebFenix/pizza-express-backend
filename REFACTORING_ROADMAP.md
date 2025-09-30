# 🔧 PIZZA EXPRESS - REFACTORING ROADMAP

## 📋 Status Atual
- **Versão**: 1.0.0
- **Data Análise**: 30/09/2025
- **Nota Atual**: 8.2/10
- **Meta**: 9.5/10

## 🎯 ESTRATÉGIA DE REFATORAÇÃO POR PRIORIDADE

### ⚠️ **FASE 1: CRÍTICO - PRODUÇÃO E SEGURANÇA** (Alta Prioridade)

#### 1.1 ✅ CONCLUÍDO - Substituir Console.log por Logger Profissional
**Tempo Real**: 3 horas | **Impacto**: ALTO | **Status**: ✅ IMPLEMENTADO

**Problema Resolvido**:
```typescript
// ANTES: src/payments/payments.service.ts - 8 console.log inseguros
console.log(`💰 Pagamento confirmado: ${paymentIntent.id}`);

// DEPOIS: Logger estruturado e seguro
this.logger.logPayment('Payment confirmed', {
  id: paymentIntent.id,
  status: 'succeeded',
});
```

**Implementação Completa**:
1. **Instalar Winston**:
   ```bash
   npm install winston
   npm install @types/winston -D
   ```

2. **Criar Logger Service**:
   ```typescript
   // src/common/logger/logger.service.ts
   import { Injectable, LoggerService } from '@nestjs/common';
   import * as winston from 'winston';

   @Injectable()
   export class CustomLoggerService implements LoggerService {
     private logger: winston.Logger;

     constructor() {
       this.logger = winston.createLogger({
         level: process.env.LOG_LEVEL || 'info',
         format: winston.format.combine(
           winston.format.timestamp(),
           winston.format.errors({ stack: true }),
           winston.format.json()
         ),
         transports: [
           new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
           new winston.transports.File({ filename: 'logs/combined.log' }),
           ...(process.env.NODE_ENV !== 'production' ? 
             [new winston.transports.Console()] : [])
         ]
       });
     }
   }
   ```

3. **Arquivos para Modificar**:
   - `src/payments/payments.service.ts` (8 console.log)
   - `src/main.ts` (2 console.log)
   - `prisma/seed.ts` (12+ console.log)

#### 1.2 ✅ CONCLUÍDO - Extrair Magic Numbers e Strings  
**Tempo Real**: 1 hora | **Impacto**: MÉDIO | **Status**: ✅ IMPLEMENTADO

**Problema Resolvido**:
```typescript
// ANTES: Magic numbers espalhados
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 10000;

// DEPOIS: Constantes organizadas
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : APP_CONSTANTS.DEFAULT_PORT;
```

**Implementação Completa**:
1. **Criar arquivo de constantes**:
   ```typescript
   // src/common/constants/app.constants.ts
   export const APP_CONSTANTS = {
     DEFAULT_PORT: 10000,
     BCRYPT_SALT_ROUNDS: 10,
     JWT_EXPIRATION: '24h',
     THROTTLE_LIMIT: 20,
     THROTTLE_TTL: 60,
   } as const;

   export const ERROR_MESSAGES = {
     USER_NOT_FOUND: 'Usuário não encontrado',
     INVALID_CREDENTIALS: 'Credenciais inválidas',
     ACCESS_DENIED: 'Acesso negado',
     RESOURCE_NOT_FOUND: 'Recurso não encontrado',
   } as const;
   ```

2. **Arquivos para Modificar**:
   - `src/main.ts`
   - `src/common/adapters/bcrypt.adapter.ts`
   - `src/app.module.ts` (ThrottlerModule config)

---

### 🏗️ **FASE 2: ARQUITETURA - REFATORAÇÃO MAJOR** (Prioridade Alta)

#### 2.1 💊 Resolver Services Anêmicos (MAIOR PROBLEMA)
**Tempo Estimado**: 8-10 horas | **Impacto**: MUITO ALTO

**Problema Atual**:
```typescript
// src/pizzas/pizzas.service.ts - Service muito simples
create(createPizzaDto: CreatePizzaDto) {
  return this.prisma.pizza.create({ data: createPizzaDto });
}
// Apenas CRUD básico, sem regras de negócio
```

**Solução**:
1. **Implementar Domain Services**:
   ```typescript
   // src/pizzas/pizzas.service.ts - VERSÃO MELHORADA
   async create(createPizzaDto: CreatePizzaDto): Promise<Pizza> {
     // Validar se pizza já existe
     await this.validatePizzaUniqueness(createPizzaDto.nome);
     
     // Validar preço
     this.validatePrice(createPizzaDto.preco);
     
     // Validar imagem se fornecida
     if (createPizzaDto.image) {
       await this.validateImageUrl(createPizzaDto.image);
     }
     
     try {
       return await this.prisma.pizza.create({ data: createPizzaDto });
     } catch (error) {
       throw new BadRequestException('Erro ao criar pizza');
     }
   }

   private async validatePizzaUniqueness(nome: string): Promise<void> {
     const existingPizza = await this.prisma.pizza.findFirst({
       where: { nome: { equals: nome, mode: 'insensitive' } }
     });
     
     if (existingPizza) {
       throw new ConflictException('Pizza com este nome já existe');
     }
   }

   private validatePrice(preco: number): void {
     if (preco <= 0) {
       throw new BadRequestException('Preço deve ser maior que zero');
     }
     if (preco > 999.99) {
       throw new BadRequestException('Preço não pode exceder R$ 999,99');
     }
   }
   ```

2. **Services Prioritários para Refatorar**:
   - ✅ `PizzasService` (mais crítico - sem validações)
   - ✅ `UsersService` (validações básicas existem, melhorar)
   - ✅ `EntregadoresService` (muito simples)

#### 2.2 🎛️ Desinchar Controllers
**Tempo Estimado**: 6-8 horas | **Impacto**: ALTO

**Problema Atual**:
```typescript
// src/pizzas/pizzas.controller.ts - 215 LINHAS!
// Muito try/catch repetitivo
// Lógica de response no controller
```

**Solução**:
1. **Criar Response Builder**:
   ```typescript
   // src/common/builders/response.builder.ts
   export class ResponseBuilder {
     static success<T>(data: T, message = 'Operação realizada com sucesso') {
       return {
         statusCode: 200,
         message,
         data,
         timestamp: new Date().toISOString(),
       };
     }

     static created<T>(data: T, message = 'Recurso criado com sucesso') {
       return {
         statusCode: 201,
         message,
         data,
         timestamp: new Date().toISOString(),
       };
     }
   }
   ```

2. **Criar Global Exception Filter**:
   ```typescript
   // src/common/filters/global-exception.filter.ts
   @Catch()
   export class GlobalExceptionFilter implements ExceptionFilter {
     catch(exception: unknown, host: ArgumentsHost) {
       // Padronizar todas as respostas de erro
     }
   }
   ```

3. **Controllers para Refatorar**:
   - ✅ `PizzasController` (215 linhas → target: <100)
   - ✅ `UsersController` (error handling repetitivo)
   - ✅ `PedidosController` (lógica complexa)

---

### 🔄 **FASE 3: DUPLICAÇÃO E PATTERNS** (Prioridade Média)

#### 3.1 🛡️ Eliminar Duplicação de Guards
**Tempo Estimado**: 3-4 horas | **Impacto**: MÉDIO

**Problema Atual**:
```typescript
// Repetido 18 vezes no projeto
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.ADMIN)
```

**Solução**:
1. **Criar Decorators Compostos**:
   ```typescript
   // src/common/decorators/auth.decorators.ts
   export const AdminOnly = () => applyDecorators(
     UseGuards(JwtAuthGuard, RolesGuard),
     Roles(Role.ADMIN)
   );

   export const FuncionarioOrAdmin = () => applyDecorators(
     UseGuards(JwtAuthGuard, RolesGuard),
     Roles(Role.FUNCIONARIO, Role.ADMIN)
   );

   export const ResourceOwner = (resourceType?: string) => applyDecorators(
     UseGuards(JwtAuthGuard, ResourceOwnerGuard),
     ...(resourceType ? [Resource(resourceType)] : [])
   );
   ```

2. **Uso Simplificado**:
   ```typescript
   // ANTES
   @UseGuards(JwtAuthGuard, RolesGuard)
   @Roles(Role.ADMIN)
   
   // DEPOIS
   @AdminOnly()
   ```

3. **Arquivos para Refatorar**:
   - Todos os controllers (18 ocorrências)

#### 3.2 📤 Padronizar Response DTOs
**Tempo Estimado**: 2-3 horas | **Impacto**: MÉDIO

**Solução**:
```typescript
// src/common/interfaces/api-response.interface.ts
export interface ApiResponse<T = any> {
  statusCode: number;
  message: string;
  data?: T;
  errors?: string[];
  timestamp: string;
  path?: string;
}
```

---

### ⚡ **FASE 4: OTIMIZAÇÃO E QUALIDADE** (Prioridade Baixa)

#### 4.1 🚀 Resolver N+1 Queries
**Tempo Estimado**: 2-3 horas | **Impacto**: MÉDIO

**Locais Identificados**:
```typescript
// src/pedidos/pedidos.service.ts - Includes aninhados
include: { user: true, pizzas: true, entregador: true, endereco: true }

// Otimizar com select específico quando possível
```

#### 4.2 🔧 Melhorar Error Handling Global
**Tempo Estimado**: 2-3 horas | **Impacto**: MÉDIO

**Implementar**:
- Global Exception Filter completo
- Structured logging de erros
- Error tracking (Sentry integration)

---

### 🎨 **FASE 5: REFINAMENTO** (Prioridade Baixa)

#### 5.1 📝 Limpar Comentários Excessivos
**Tempo Estimado**: 1-2 horas | **Impacto**: BAIXO

**Remover comentários como**:
```typescript
/**
 * Guard para verificação de roles baseado em princípios SOLID
 * - Single Responsibility: Apenas verifica autorização de roles
 * - Open/Closed: Extensível para novas funcionalidades...
 */
// Comentário muito detalhado para algo simples
```

**Manter apenas**:
- Regras de negócio complexas
- Workarounds temporários
- APIs externas com peculiaridades

#### 5.2 🧪 Melhorar Cobertura de Testes
**Tempo Estimado**: 4-6 horas | **Impacto**: MÉDIO

**Implementar**:
- Testes de guards customizados
- Testes de integração completos
- Mocks adequados para Prisma

---

## 📅 CRONOGRAMA EXECUTIVO

### **SPRINT 1 (5 dias úteis)** - Fundações Críticas
- [x] ✅ **CONCLUÍDO**: Logger profissional + Constants
- [ ] **Próximo**: Global Exception Filter + Response Builder  
- [ ] **Pendente**: Validação e ajustes

**Status**: ✅ FASES 1.1, 1.2, 2.1, 2.2 e 3.1 CONCLUÍDAS (30/09/2025)  
**Entregável**: Domain Services + Logger + Constants + Response Builder + Guard Decorators implementados
**Testes**: ✅ Upload de imagem real testado com sucesso (201 Created)
**Phase 3.1**: ✅ Decorators compostos eliminaram 14+ linhas de duplicação em 4 controllers

### **SPRINT 2 (10 dias úteis)** - Arquitetura Core
- [x] ✅ **CONCLUÍDO**: Services anêmicos → Domain services (PizzasService)
- [x] ✅ **CONCLUÍDO**: Response Builder Pattern + Controller refactoring (30/09/2025)
- [x] ✅ **CONCLUÍDO**: Guard Decorators - Eliminou duplicação em 4 controllers (30/09/2025)
- [x] **Dia 1-5**: PizzasService transformado em domain service robusto
- [x] **Dia 6-10**: Controllers refatorados + Error handling

**Entregável**: Arquitetura limpa e maintível

### **SPRINT 3 (5 dias úteis)** - DRY e Performance
- [x] **Dia 1-3**: Decorators compostos + Duplicação
- [x] **Dia 4-5**: N+1 queries + Response padronização

**Entregável**: Código DRY e performático

### **SPRINT 4 (3 dias úteis)** - Polish Final
- [x] **Dia 1**: Comentários cleanup
- [x] **Dia 2-3**: Testes complementares + Documentação

**Entregável**: Código production-ready

---

## 🎯 CRITÉRIOS DE ACEITAÇÃO

### **MÉTRICAS DE SUCESSO**
| Métrica | Atual | Meta | Como Medir |
|---------|-------|------|------------|
| **Console.logs** | 20+ | 0 | `grep -r "console.log" src/` |
| **Code Smells** | 8 identificados | ≤2 | SonarQube/ESLint |
| **Duplicação Guards** | 18 repetições | 4 decorators | Busca manual |
| **Lines per Controller** | 215 (máx) | <100 | wc -l por arquivo |
| **Test Coverage** | ~70% | >85% | `npm run test:cov` |
| **Build Time** | Atual | -20% | `time npm run build` |

### **TESTES DE REGRESSÃO**
```bash
# Executar após cada fase
npm run test
npm run test:e2e
npm run build
npm run start:prod # Validar produção
```

### **CHECKLIST FINAL**
- [ ] Zero console.log em produção
- [ ] Services com regras de negócio adequadas  
- [ ] Controllers < 100 linhas cada
- [ ] Guards não duplicados
- [ ] Responses padronizadas
- [ ] Error handling global funcionando
- [ ] Testes passando (>85% coverage)
- [ ] Build sem warnings
- [ ] Performance mantida ou melhorada

---

## 🚀 COMEÇAR AGORA

### **PASSO IMEDIATO** (30 minutos):
1. Criar branch: `git checkout -b refactor/phase-1-logger`
2. Instalar Winston: `npm install winston @types/winston -D`
3. Criar `src/common/logger/` e implementar CustomLoggerService
4. Substituir primeiro console.log em `payments.service.ts`

### **PRIMEIRO DIA**:
- Finalizar logger implementation
- Remover todos console.log de produção
- Criar constants file
- Commit e PR da Fase 1

---

## 📞 NOTAS IMPORTANTES

- **Não quebrar funcionalidades existentes**
- **Testes devem passar em cada commit**
- **Deploy incremental fase por fase**
- **Documentar breaking changes se houver**
- **Code review obrigatório para arquitetura major**

---

*Última atualização: 30/09/2025*  
*Responsável: Equipe de Desenvolvimento*  
*Aprovação: Tech Lead*