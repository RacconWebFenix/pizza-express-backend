#!/bin/bash

echo "🧹 LIMPANDO BANCO DE DADOS - PEDIDOS, SESSÕES E MESAS"
echo "======================================================"

# Verificar se o servidor está rodando
echo "📡 Verificando se o servidor está rodando..."
if ! curl -s http://localhost:3000/health > /dev/null; then
    echo "❌ Servidor não está rodando. Inicie o servidor primeiro."
    exit 1
fi
echo "✅ Servidor está rodando"

# Script SQL para limpar as tabelas
CLEANUP_SQL="
-- Desabilitar triggers de foreign key temporariamente
SET session_replication_role = 'replica';

-- Limpar tabelas na ordem correta (do mais dependente para o menos dependente)
DELETE FROM \"split_payments\";
DELETE FROM \"payments\";
DELETE FROM \"order_modifications\";
DELETE FROM \"order_items\";
DELETE FROM \"orders\";
DELETE FROM \"table_sessions\";
DELETE FROM \"tables\";

-- Reabilitar triggers
SET session_replication_role = 'origin';

-- Resetar sequences se necessário
-- ALTER SEQUENCE orders_id_seq RESTART WITH 1;
"

echo "🗑️  Executando limpeza das tabelas..."
echo "SQL a ser executado:"
echo "$CLEANUP_SQL"

# Executar via Prisma (se disponível) ou informar ao usuário
if command -v npx &> /dev/null && [ -f "package.json" ]; then
    echo "🔧 Usando Prisma Studio para executar a limpeza..."
    echo "⚠️  Por favor, execute manualmente no Prisma Studio ou via SQL direto:"
    echo ""
    echo "SQL para executar no banco de dados:"
    echo "------------------------------------"
    echo "$CLEANUP_SQL"
    echo "------------------------------------"
    echo ""
    echo "Ou use: npx prisma studio"
    echo "E execute as queries na aba SQL"
else
    echo "⚠️  Execute manualmente no banco de dados:"
    echo "$CLEANUP_SQL"
fi

echo ""
echo "📋 Tabelas limpas:"
echo "  ✅ split_payments"
echo "  ✅ payments"
echo "  ✅ order_modifications"
echo "  ✅ order_items"
echo "  ✅ orders"
echo "  ✅ table_sessions"
echo "  ✅ tables"
echo ""
echo "🎯 Agora você pode recriar mesas e testar novamente!"