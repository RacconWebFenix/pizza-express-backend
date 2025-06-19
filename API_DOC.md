# API REST - Pizza Express Backend

## Autenticação

### Login

- `POST /auth/login` — Realiza login e retorna um token JWT
  - Body: `{ "email": "joao@email.com", "password": "123456" }`
  - Resposta: `{ "access_token": "..." }`

### Registro

- `POST /auth/register` — Cria um novo cliente
  - Body: `{ "nome": "João", "email": "joao@email.com", "password": "123456", "telefone": "11999999999", "endereco": "Rua das Flores, 123" }`

---

## Pizzas

- `GET /pizzas` — Lista todas as pizzas _(JWT obrigatório)_
- `GET /pizzas/:id` — Detalhe de uma pizza _(JWT obrigatório)_
- `POST /pizzas` — Cria uma pizza _(JWT obrigatório)_
- `PATCH /pizzas/:id` — Atualiza uma pizza _(JWT obrigatório)_
- `DELETE /pizzas/:id` — Remove uma pizza _(JWT obrigatório)_

## Clientes

- `GET /clientes` — Lista todos os clientes _(JWT obrigatório)_
- `GET /clientes/:id` — Detalhe de um cliente _(JWT obrigatório)_
- `POST /clientes` — Cria um cliente _(JWT obrigatório, use /auth/register para registro público)_
- `PATCH /clientes/:id` — Atualiza um cliente _(JWT obrigatório)_
- `DELETE /clientes/:id` — Remove um cliente _(JWT obrigatório)_

## Entregadores

- `GET /entregadores` — Lista todos os entregadores _(JWT obrigatório)_
- `GET /entregadores/:id` — Detalhe de um entregador _(JWT obrigatório)_
- `POST /entregadores` — Cria um entregador _(JWT obrigatório)_
- `PATCH /entregadores/:id` — Atualiza um entregador _(JWT obrigatório)_
- `DELETE /entregadores/:id` — Remove um entregador _(JWT obrigatório)_

## Pedidos

- `GET /pedidos` — Lista todos os pedidos (com cliente, pizzas e entregador) _(JWT obrigatório)_
- `GET /pedidos/:id` — Detalhe de um pedido _(JWT obrigatório)_
- `POST /pedidos` — Cria um pedido _(JWT obrigatório)_
- `PATCH /pedidos/:id` — Atualiza status, localização, etc _(JWT obrigatório)_
- `DELETE /pedidos/:id` — Remove um pedido _(JWT obrigatório)_

## Monitoramento de entrega

- Atualize latitude/longitude do pedido via `PATCH /pedidos/:id` com `{ latitude, longitude }`
- Consulte a localização atual do pedido via `GET /pedidos/:id`

---

## Observações

- Todos os endpoints retornam JSON.
- Endpoints protegidos exigem header: `Authorization: Bearer <token>`
- Use `/auth/login` para obter o token JWT.
- Para integração, use ferramentas como Insomnia, Postman ou fetch/Axios no frontend.
- Documentação Swagger disponível em `/api`.

---

## Exemplos de uso

### Login

```http
POST /auth/login
{
  "email": "joao@email.com",
  "password": "123456"
}
```

### Criar pizza

```http
POST /pizzas
{
  "nome": "Quatro Queijos",
  "descricao": "Mussarela, parmesão, provolone, gorgonzola",
  "preco": 49.9
}
```

### Atualizar localização do pedido

```http
PATCH /pedidos/1
{
  "latitude": -23.55,
  "longitude": -46.63
}
```

---

## CI/CD e Segurança

- Pipeline automatizado com GitHub Actions para lint e testes.
- Arquivos sensíveis e de ambiente não são versionados.
- Testes e2e e unitários garantem robustez.

---

Coleção Insomnia disponível em `pizza-express-insomnia.json`.
