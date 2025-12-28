#!/bin/bash

source "$(dirname "$0")/utils.sh"

echo "════════════════════════════════════════════════════════════════"
echo "  💳 TESTES DE PAGAMENTOS + SPLIT PAYMENT"
echo "════════════════════════════════════════════════════════════════"
echo ""

# Verificar servidor e obter token
check_server || exit 1
get_auth_token || exit 1

# ==================== PREPARAÇÃO ====================

# Buscar um pedido existente
log_info "Preparação: Buscando pedido existente"
response=$(curl -s "$BASE_URL/orders" -H "Authorization: Bearer $TOKEN")
ORDER_ID=$(echo "$response" | grep -o '"id":[0-9]*' | head -n1 | sed 's/"id"://')

if [ -z "$ORDER_ID" ]; then
    log_warning "Nenhum pedido encontrado, pulando testes de pagamentos"
    ORDER_ID=""
fi

# ==================== TESTES ====================

# Teste 1: GET /payments/split/order/:id (se houver pedido)
if [ -n "$ORDER_ID" ]; then
    log_info "Teste 1/1: Buscar splits do pedido"
    test_endpoint "GET" "/payments/split/order/$ORDER_ID" "200" \
        "Buscar splits do pedido $ORDER_ID" > /dev/null
else
    log_info "Teste 1/1: Nenhum pedido encontrado para testar splits"
fi

# Nota: Criação de pagamentos não testada pois endpoints podem não estar implementados

# Resumo
show_summary "PAGAMENTOS"