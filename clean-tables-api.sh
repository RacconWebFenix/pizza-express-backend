#!/bin/bash

echo "🧹 LIMPEZA DIRETA - Via API"
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

# Buscar mesas disponíveis e tentar removê-las
echo "🗑️  Removendo mesas disponíveis (sem sessões ativas)..."

# Primeiro, vamos buscar apenas mesas disponíveis (sem sessões ativas)
available_tables_response=$(curl -s "http://localhost:3000/tables/available" -H "Authorization: Bearer $TOKEN")

if echo "$available_tables_response" | grep -q '"id"'; then
    # Extrair IDs das mesas disponíveis
    available_table_ids=$(echo "$available_tables_response" | grep -o '"id":"[^"]*"' | sed 's/"id":"\([^"]*\)"/\1/')

    if [ -n "$available_table_ids" ]; then
        echo "$available_table_ids" | while read -r table_id; do
            if [ -n "$table_id" ]; then
                echo "  Removendo mesa ID: $table_id..."
                delete_response=$(curl -s -X DELETE "http://localhost:3000/tables/$table_id" -H "Authorization: Bearer $TOKEN")
                if echo "$delete_response" | grep -q '"id"'; then
                    echo "    ✅ Mesa removida com sucesso"
                else
                    echo "    ❌ Erro ao remover mesa: $delete_response"
                fi
            fi
        done
    else
        echo "  ℹ️  Nenhuma mesa disponível para remover"
    fi
else
    echo "  ℹ️  Nenhuma mesa disponível encontrada"
fi

# Agora tentar remover mesas ocupadas (com sessões ativas) - isso vai falhar, mas informa o usuário
echo ""
echo "🔍 Verificando mesas com sessões ativas..."
all_tables_response=$(curl -s "http://localhost:3000/tables" -H "Authorization: Bearer $TOKEN")

# Filtrar mesas que têm sessões (não disponíveis)
occupied_table_ids=$(echo "$all_tables_response" | grep -B 5 '"status":"OCCUPIED"' | grep '"id":"[^"]*"' | sed 's/.*"id":"\([^"]*\)".*/\1/' | sort | uniq)

if [ -n "$occupied_table_ids" ]; then
    echo "⚠️  Mesas com sessões ativas encontradas (não podem ser removidas):"
    echo "$occupied_table_ids" | while read -r table_id; do
        if [ -n "$table_id" ]; then
            echo "    📋 Mesa ID: $table_id (tem sessão ativa)"
        fi
    done
    echo ""
    echo "💡 Para remover estas mesas, primeiro execute o script SQL de limpeza"
    echo "   que remove pedidos e sessões: clean-orders-sessions.sql"
else
    echo "✅ Nenhuma mesa com sessão ativa encontrada"
fi

echo ""
echo "✅ Limpeza de mesas concluída!"
echo ""
echo "💡 Agora execute o script de recriação:"
echo "   ./recreate-basic-tables.sh"