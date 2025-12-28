#!/bin/bash

echo "🏗️  RECRIANDO MESAS BÁSICAS"
echo "==========================="

# Verificar se o servidor está rodando
echo "📡 Verificando se o servidor está rodando..."
if ! curl -s http://localhost:3000/health > /dev/null; then
    echo "❌ Servidor não está rodando. Inicie o servidor primeiro."
    exit 1
fi
echo "✅ Servidor está rodando"

# Fazer login para obter token
echo "🔐 Fazendo login como admin..."
TOKEN=$(curl -s -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@admin.com","password":"123"}' | grep -o '"access_token":"[^"]*' | sed 's/"access_token":"//')

if [ -z "$TOKEN" ]; then
    echo "❌ Falha no login"
    exit 1
fi
echo "✅ Login realizado com sucesso"

# Primeiro, tentar deletar mesas existentes (se houver)
echo "🗑️  Removendo mesas existentes..."
for numero in "${MESAS[@]}"; do
    # Buscar mesa por número
    table_response=$(curl -s "http://localhost:3000/tables" -H "Authorization: Bearer $TOKEN")
    table_id=$(echo "$table_response" | grep -o '"id":"[^"]*","number":'$numero'' | sed 's/.*"id":"\([^"]*\)".*/\1/')

    if [ -n "$table_id" ]; then
        echo "  Removendo Mesa $numero (ID: $table_id)..."
        delete_response=$(curl -s -X DELETE "http://localhost:3000/tables/$table_id" -H "Authorization: Bearer $TOKEN")
        if echo "$delete_response" | grep -q '"id"'; then
            echo "    ✅ Mesa $numero removida"
        else
            echo "    ⚠️  Não foi possível remover Mesa $numero: $delete_response"
        fi
    fi
done

echo ""

MESAS=(1 2 3 4 5 6 7 8 9 10)

for numero in "${MESAS[@]}"; do
    echo "  Criando mesa $numero..."
    response=$(curl -s -X POST "http://localhost:3000/tables" \
      -H "Authorization: Bearer $TOKEN" \
      -H "Content-Type: application/json" \
      -d "{\"number\": $numero}")

    if echo "$response" | grep -q '"id"'; then
        echo "    ✅ Mesa $numero criada com sucesso"
    else
        echo "    ❌ Falha ao criar Mesa $numero: $response"
    fi
done

echo ""
echo "📋 Mesas criadas:"
for numero in "${MESAS[@]}"; do
    echo "  🪑 Mesa $numero"
done

echo ""
echo "🎯 Mesas básicas recriadas! Pronto para testar."