![CI](https://github.com/seu-usuario/pizza-express/actions/workflows/ci.yml/badge.svg)

# Pizza Express API

API REST para gestão de pizzaria, desenvolvida com NestJS, Prisma e PostgreSQL. Possui autenticação JWT, validação robusta, tratamento de erros claro, CI/CD com GitHub Actions e testes e2e completos.

## Tecnologias

- **Node.js** + **NestJS**
- **Prisma ORM** + **PostgreSQL**
- **class-validator** para validação
- **JWT** para autenticação
- **Jest** + **Supertest** para testes e2e
- **GitHub Actions** para CI/CD

## Como rodar localmente

1. **Clone o repositório**
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure o banco de dados no arquivo `.env`:
   ```env
   DATABASE_URL="<sua-string-de-conexão>"
   ```
4. Rode as migrations e o seed:
   ```bash
   npx prisma migrate reset --force && npx prisma db seed
   ```
5. Inicie a API:
   ```bash
   npm run start:dev
   ```
6. Para rodar os testes e2e:
   ```bash
   npm run test:e2e
   ```

## Execução dos Testes End-to-End (e2e)

Para garantir a robustez e evitar falhas intermitentes causadas por concorrência entre testes, execute os testes e2e sempre em modo sequencial:

```
npx jest --config ./test/jest-e2e.json --runInBand
```

## CI/CD

- O projeto possui pipeline automatizado com GitHub Actions.
- A cada push/pull request, o linter e todos os testes são executados automaticamente.
- Arquivos sensíveis e de ambiente são ignorados pelo `.gitignore`.

## Estrutura de Pastas

- `src/` - Código-fonte principal
  - `auth/` - Autenticação e JWT
  - `clientes/` - CRUD de clientes
  - `entregadores/` - CRUD de entregadores
  - `pizzas/` - CRUD de pizzas
  - `pedidos/` - CRUD de pedidos
  - `prisma.service.ts` - Integração com o Prisma
  - `main.ts` - Bootstrap da aplicação
- `prisma/` - Migrations, schema e seed do banco
- `test/` - Testes e2e robustos

## Segurança

- Arquivos `.env` e bancos locais não são versionados.
- JWT obrigatório para rotas protegidas.
- CI/CD impede deploy de código com erros de lint ou testes quebrados.

## Fluxo de Autenticação

- Cadastro de cliente: `POST /auth/register`
- Login: `POST /auth/login` (retorna JWT)
- Rotas protegidas exigem header: `Authorization: Bearer <token>`

## Documentação e Testes de API

- Veja o arquivo `API_DOC.md` para detalhes de endpoints e exemplos.
- Coleção Insomnia disponível em `pizza-express-insomnia.json`.
- Swagger disponível em `/api` quando a aplicação está rodando.

## Contribuição

- Faça fork e branch para suas features/correções.
- Garanta que o linter e os testes estejam passando antes de abrir PR.

---

Projeto desenvolvido para fins didáticos e de demonstração.
