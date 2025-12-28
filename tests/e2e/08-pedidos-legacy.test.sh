#!/bin/bash

source "$(dirname "$0")/utils.sh"

echo "════════════════════════════════════════════════════════════════"
echo "  📦 TESTES DE PEDIDOS LEGADOS"
echo "════════════════════════════════════════════════════════════════"
echo ""

# Verificar servidor e obter token
check_server || exit 1
get_auth_token || exit 1

# IDs criados durante os testes
PEDIDO_ID=""

# Teste 1: GET /pedidos (listar)
log_info "Teste 1/3: Listar pedidos"
test_endpoint "GET" "/pedidos" "200" "Listar todos os pedidos" > /dev/null

# Teste 2: GET /pedidos/meus-pedidos
log_info "Teste 2/3: Listar meus pedidos"
test_endpoint "GET" "/pedidos/meus-pedidos" "200" "Listar meus pedidos" > /dev/null

# Teste 3: Buscar pedido existente (se houver)
response=$(curl -s "$BASE_URL/pedidos" -H "Authorization: Bearer $TOKEN")
PEDIDO_ID=$(echo "$response" | grep -o '"id":[0-9]*' | head -n1 | sed 's/"id"://')

if [ -n "$PEDIDO_ID" ]; then
    log_info "Teste 3/3: Buscar pedido existente"
    test_endpoint "GET" "/pedidos/$PEDIDO_ID" "200" "Buscar pedido $PEDIDO_ID" > /dev/null
else
    log_info "Teste 3/3: Nenhum pedido encontrado para buscar"
fi

# Nota: Criação e atualização de pedidos legados não testadas pois podem ter validações específicas

# Resumo
show_summary "PEDIDOS LEGADOS"