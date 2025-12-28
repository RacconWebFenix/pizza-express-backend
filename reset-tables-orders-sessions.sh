#!/bin/bash

echo "🔄 RESET COMPLETO - PEDIDOS, SESSÕES E MESAS"
echo "============================================"
echo ""

# Executar limpeza via API
echo "🗑️  PASSO 1: Limpando mesas via API..."
./clean-tables-api.sh

if [ $? -ne 0 ]; then
    echo "❌ Falha na limpeza. Abortando."
    exit 1
fi

echo ""
echo "⚠️  IMPORTANTE: Para limpar pedidos e sessões completamente,"
echo "   você precisa executar o script SQL no banco de dados:"
echo ""
echo "   📄 Abra o arquivo: clean-orders-sessions.sql"
echo "   🔧 Execute no Prisma Studio: npx prisma studio"
echo "      - Aba 'SQL' > Cole o conteúdo do arquivo > Run"
echo ""
echo "   Ou copie e execute diretamente no pgAdmin/PostgreSQL:"
echo "   ------------------------------------"
cat clean-orders-sessions.sql
echo "   ------------------------------------"
echo ""
read -p "Pressione ENTER após executar o SQL de limpeza dos pedidos e sessões..."

echo ""
echo "🏗️  PASSO 2: Recriando mesas básicas..."
./recreate-basic-tables.sh

if [ $? -ne 0 ]; then
    echo "❌ Falha na recriação. Abortando."
    exit 1
fi

echo ""
echo "🎉 RESET COMPLETO REALIZADO COM SUCESSO!"
echo "========================================="
echo ""
echo "📋 O que foi feito:"
echo "  ✅ Limpas todas as tabelas de pedidos, sessões e mesas"
echo "  ✅ Recriadas 10 mesas básicas (números 1-10)"
echo ""
echo "🚀 Pronto para novos testes!"
echo ""
echo "💡 Dica: Execute os testes novamente para verificar se tudo funciona."