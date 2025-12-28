#!/bin/bash

echo "🏪 POPULANDO CATÁLOGO COM PRODUTOS PARA TESTES"
echo "=============================================="
echo ""

# Verificar se servidor está rodando
echo "📡 Verificando servidor..."
if ! curl -s http://localhost:3000/health > /dev/null; then
    echo "❌ Servidor não está rodando"
    exit 1
fi
echo "✅ Servidor está rodando"

# Fazer login como admin
echo "🔐 Fazendo login como admin..."
TOKEN=$(curl -s -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@admin.com","password":"123"}' | grep -o '"access_token":"[^"]*' | sed 's/"access_token":"//')

if [ -z "$TOKEN" ]; then
    echo "❌ Falha no login"
    exit 1
fi
echo "✅ Login realizado com sucesso"

# Criar categoria Pizzas
echo "🍕 Criando categoria Pizzas..."
CATEGORY_RESPONSE=$(curl -s -X POST http://localhost:3000/categories \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name":"Pizzas","slug":"pizzas"}')

CATEGORY_ID=$(echo "$CATEGORY_RESPONSE" | grep -o '"id":"[^"]*' | sed 's/"id":"//')

if [ -z "$CATEGORY_ID" ]; then
    echo "❌ Falha ao criar categoria Pizzas"
    exit 1
fi
echo "✅ Categoria Pizzas criada: $CATEGORY_ID"

# Criar categoria Bebidas
echo "🥤 Criando categoria Bebidas..."
BEVERAGE_RESPONSE=$(curl -s -X POST http://localhost:3000/categories \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name":"Bebidas","slug":"bebidas"}')

BEVERAGE_ID=$(echo "$BEVERAGE_RESPONSE" | grep -o '"id":"[^"]*' | sed 's/"id":"//')

if [ -z "$BEVERAGE_ID" ]; then
    echo "❌ Falha ao criar categoria Bebidas"
    exit 1
fi
echo "✅ Categoria Bebidas criada: $BEVERAGE_ID"

# Criar produtos
echo ""
echo "📦 Criando produtos..."

# Pizza Margherita
echo "  🍕 Criando Pizza Margherita..."
curl -s -X POST http://localhost:3000/products \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Pizza Margherita\",\"description\":\"Molho de tomate, mussarela, manjericão\",\"price\":\"35.00\",\"categoryId\":\"$CATEGORY_ID\"}" > /dev/null
echo "    ✅ Pizza Margherita criada"

# Pizza Calabresa
echo "  🍕 Criando Pizza Calabresa..."
curl -s -X POST http://localhost:3000/products \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Pizza Calabresa\",\"description\":\"Molho de tomate, mussarela, calabresa\",\"price\":\"38.00\",\"categoryId\":\"$CATEGORY_ID\"}" > /dev/null
echo "    ✅ Pizza Calabresa criada"

# Coca-Cola
echo "  🥤 Criando Coca-Cola..."
curl -s -X POST http://localhost:3000/products \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Coca-Cola\",\"description\":\"Refrigerante 2L\",\"price\":\"8.50\",\"categoryId\":\"$BEVERAGE_ID\"}" > /dev/null
echo "    ✅ Coca-Cola criada"

# Água
echo "  🥤 Criando Água..."
curl -s -X POST http://localhost:3000/products \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Água\",\"description\":\"Água mineral 500ml\",\"price\":\"3.00\",\"categoryId\":\"$BEVERAGE_ID\"}" > /dev/null
echo "    ✅ Água criada"

echo ""
echo "🎉 Catálogo populado com sucesso!"
echo "   📊 Produtos criados: 4"
echo "   📁 Categorias criadas: 2"