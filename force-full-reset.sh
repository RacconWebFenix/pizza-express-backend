#!/bin/bash

echo "💥 RESET FORÇADO COMPLETO - PRISMA MIGRATE RESET"
echo "================================================="
echo ""

echo "⚠️  ATENÇÃO: Este script vai resetar TODO o banco de dados!"
echo "   Isso inclui usuários, produtos, categorias e tudo mais."
echo ""
echo "   Use apenas se quiser um banco completamente limpo."
echo ""

read -p "Tem certeza que quer continuar? (digite 'SIM' para confirmar): " confirm

if [ "$confirm" != "SIM" ]; then
    echo "❌ Operação cancelada pelo usuário."
    exit 1
fi

echo ""
echo "🔄 Executando prisma migrate reset..."

# Executar o reset forçado
npx prisma migrate reset --force

if [ $? -eq 0 ]; then
    echo "✅ Reset completo realizado com sucesso!"
    echo ""
    echo "🏗️ Agora execute o script de recriação:"
    echo "   ./recreate-basic-tables.sh"
    echo ""
    echo "💡 Ou execute o script completo:"
    echo "   ./reset-tables-orders-sessions.sh"
else
    echo "❌ Falha no reset. Verifique os logs acima."
    exit 1
fi