# Upload de Imagens para Pizzas

## Endpoints Disponíveis

### 1. Criar Pizza com Imagem
**POST** `/pizzas/with-image`

**Content-Type:** `multipart/form-data`

**Headers:**
```
Authorization: Bearer <jwt-token>
Content-Type: multipart/form-data
```

**Body (form-data):**
- `nome` (text): Nome da pizza
- `descricao` (text): Descrição da pizza
- `preco` (number): Preço da pizza
- `imagem` (file): Arquivo de imagem (JPG, PNG, WEBP - máx 5MB)

**Exemplo usando curl:**
```bash
curl -X POST \
  http://localhost:3005/pizzas/with-image \
  -H 'Authorization: Bearer YOUR_JWT_TOKEN' \
  -F 'nome=Pizza Margherita' \
  -F 'descricao=Molho de tomate, mussarela e manjericão' \
  -F 'preco=25.90' \
  -F 'imagem=@/caminho/para/sua/imagem.jpg'
```

### 2. Adicionar/Atualizar Imagem de Pizza Existente
**POST** `/pizzas/:id/upload-image`

**Content-Type:** `multipart/form-data`

**Headers:**
```
Authorization: Bearer <jwt-token>
Content-Type: multipart/form-data
```

**Body (form-data):**
- `imagem` (file): Arquivo de imagem (JPG, PNG, WEBP - máx 5MB)

**Exemplo usando curl:**
```bash
curl -X POST \
  http://localhost:3005/pizzas/1/upload-image \
  -H 'Authorization: Bearer YOUR_JWT_TOKEN' \
  -F 'imagem=@/caminho/para/nova/imagem.jpg'
```

### 3. Criar Pizza Sem Imagem (endpoint original)
**POST** `/pizzas`

**Content-Type:** `application/json`

**Headers:**
```
Authorization: Bearer <jwt-token>
Content-Type: application/json
```

**Body (JSON):**
```json
{
  "nome": "Pizza Margherita",
  "descricao": "Molho de tomate, mussarela e manjericão",
  "preco": 25.90,
  "imagemUrl": "https://exemplo.com/imagem-opcional.jpg"
}
```

## Configurações Cloudinary

As imagens são automaticamente:
- Convertidas para formato WEBP
- Redimensionadas para 800x600px
- Otimizadas para qualidade automática
- Armazenadas na pasta `pizza-express/pizzas/`

## Validações

- **Tipos de arquivo permitidos:** JPG, JPEG, PNG, WEBP
- **Tamanho máximo:** 5MB
- **Autenticação:** JWT obrigatório

## Responses

### Sucesso (201 Created):
```json
{
  "statusCode": 201,
  "message": "Pizza criada com sucesso",
  "data": {
    "id": 1,
    "nome": "Pizza Margherita",
    "descricao": "Molho de tomate, mussarela e manjericão",
    "preco": 25.90,
    "imagemUrl": "https://res.cloudinary.com/doqqzdqsg/image/upload/v1640000000/pizza-express/pizzas/abc123.webp"
  }
}
```

### Erro de Validação (400 Bad Request):
```json
{
  "statusCode": 400,
  "message": "Tipo de arquivo não permitido. Use apenas: JPG, PNG ou WEBP",
  "error": "Bad Request"
}
```

## Teste com Insomnia/Postman

1. Crie uma nova requisição POST
2. Configure a URL: `http://localhost:3005/pizzas/with-image`
3. Adicione o header Authorization com seu JWT token
4. Na aba Body, selecione "Multipart Form"
5. Adicione os campos:
   - `nome` (Text)
   - `descricao` (Text) 
   - `preco` (Text)
   - `imagem` (File)
