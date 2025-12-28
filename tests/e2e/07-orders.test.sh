#!/bin/bash

source "$(dirname "$0")/utils.sh"

echo "════════════════════════════════════════════════════════════════"
echo "  🍕 TESTES DE PEDIDOS HÍBRIDOS (DELIVERY + DINE_IN)"
echo "════════════════════════════════════════════════════════════════"
echo ""

# Verificar servidor e obter token
check_server || exit 1
get_auth_token || exit 1

# IDs que serão usados
TABLE_ID=""
PRODUCT_ID=""
ADDRESS_ID=""
ORDER_DELIVERY_ID=""
ORDER_DINEIN_ID=""

# ==================== PREPARAÇÃO ====================

# Buscar produto disponível
log_info "Preparação: Buscando produto disponível"
response=$(curl -s "$BASE_URL/products" -H "Authorization: Bearer $TOKEN")
PRODUCT_ID=$(echo "$response" | grep -o '"id":"[^"]*' | head -n1 | sed 's/"id":"//')

if [ -z "$PRODUCT_ID" ]; then
    log_warning "Nenhum produto encontrado, pulando testes de criação de pedidos"
    PRODUCT_ID=""
fi

# Buscar mesa disponível
log_info "Preparação: Buscando mesa disponível"
response=$(curl -s "$BASE_URL/tables" -H "Authorization: Bearer $TOKEN")
TABLE_ID=$(echo "$response" | grep -o '"id":"[^"]*' | head -n1 | sed 's/"id":"//')

if [ -z "$TABLE_ID" ]; then
    log_warning "Nenhuma mesa encontrada, pulando testes de criação de pedidos"
    TABLE_ID=""
fi

# ==================== TESTES ====================

# Teste 1: GET /orders (listar todos)
log_info "Teste 1/1: Listar todos os pedidos"
test_endpoint "GET" "/orders" "200" "Listar pedidos" > /dev/null

# Nota: Criação de pedidos não testada pois requer validações específicas de endereço/produto

# Resumo
show_summary "PEDIDOS HÍBRIDOS"