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
SESSION_ID=""
ORDER_DELIVERY_ID=""
ORDER_DINEIN_ID=""

# ==================== PREPARAÇÃO ====================

# Buscar produto disponível
log_info "Preparação: Buscando produto disponível"
response=$(curl -s "$BASE_URL/products" -H "Authorization: Bearer $TOKEN")
PRODUCT_ID=$(echo "$response" | grep -o '"id":"[^"]*' | head -n1 | sed 's/"id":"//')

if [ -z "$PRODUCT_ID" ]; then
    log_error "❌ Nenhum produto encontrado, abortando testes"
    exit 1
fi
log_success "✅ Produto encontrado: $PRODUCT_ID"

# Buscar mesa disponível
log_info "Preparação: Buscando mesa disponível"
response=$(curl -s "$BASE_URL/tables" -H "Authorization: Bearer $TOKEN")
TABLE_ID=$(echo "$response" | grep -o '"id":"[^"]*' | head -n1 | sed 's/"id":"//')

if [ -z "$TABLE_ID" ]; then
    log_error "❌ Nenhuma mesa encontrada, abortando testes"
    exit 1
fi
log_success "✅ Mesa encontrada: $TABLE_ID"

# Buscar endereço disponível
log_info "Preparação: Buscando endereço disponível"
response=$(curl -s "$BASE_URL/enderecos" -H "Authorization: Bearer $TOKEN")
ADDRESS_ID=$(echo "$response" | grep -o '"id":[0-9]*' | head -n1 | sed 's/"id"://')

if [ -z "$ADDRESS_ID" ]; then
    log_error "❌ Nenhum endereço encontrado, abortando testes"
    exit 1
fi
log_success "✅ Endereço encontrado: $ADDRESS_ID"

# ==================== TESTES ====================

# Teste 1: GET /orders (listar todos)
log_info "Teste 1/8: Listar todos os pedidos"
test_endpoint "GET" "/orders" "200" "Listar pedidos"

# Teste 2: Criar sessão de mesa para DINE_IN
log_info "Teste 4/8: Criar sessão de mesa para DINE_IN"

# Verificar se a mesa está disponível
table_status=$(curl -s "$BASE_URL/tables/$TABLE_ID" -H "Authorization: Bearer $TOKEN" | grep -o '"status":"[^"]*' | sed 's/"status":"//')

if [ "$table_status" != "AVAILABLE" ]; then
    log_warning "⚠️ Mesa $TABLE_ID não está disponível (status: $table_status), pulando testes DINE_IN"
    ORDER_DINEIN_ID=""
    SESSION_ID=""
else
    response=$(curl -s -X POST "$BASE_URL/tables/$TABLE_ID/sessions/open" \
        -H "Authorization: Bearer $TOKEN" \
        -H "Content-Type: application/json" \
        -d '{}')

    SESSION_ID=$(echo "$response" | grep -o '"id":"[^"]*' | sed 's/"id":"//')

    if [ -n "$SESSION_ID" ]; then
        log_success "✅ Sessão criada: $SESSION_ID"
    else
        log_error "❌ Falha ao criar sessão"
        echo "Resposta: $response"
        SESSION_ID=""
        ORDER_DINEIN_ID=""
    fi
fi

# Teste 5: Criar pedido DELIVERY
log_info "Teste 5/8: Criar pedido DELIVERY"
response=$(curl -s -X POST "$BASE_URL/orders" \
    -H "Authorization: Bearer $TOKEN" \
    -H "Content-Type: application/json" \
    -d "{
        \"type\": \"DELIVERY\",
        \"items\": [{\"productId\": \"$PRODUCT_ID\", \"quantity\": 1}],
        \"addressId\": $ADDRESS_ID,
        \"observacoes\": \"Teste delivery via E2E\"
    }")

# Extração mais robusta do ID - pegar apenas o ID do pedido (primeiro id)
ORDER_DELIVERY_ID=$(echo "$response" | sed -n 's/^{"id":\([0-9]*\).*/\1/p')

if [ -n "$ORDER_DELIVERY_ID" ] && echo "$response" | grep -q '"type":"DELIVERY"'; then
    log_success "✅ Pedido DELIVERY criado: $ORDER_DELIVERY_ID"
else
    log_error "❌ Falha ao criar pedido DELIVERY"
    echo "Resposta: $response"
    echo "ORDER_DELIVERY_ID extraído: '$ORDER_DELIVERY_ID'"
fi

# Teste 6: Criar pedido DINE_IN
log_info "Teste 6/8: Criar pedido DINE_IN"
if [ -z "$SESSION_ID" ]; then
    log_warning "⚠️ Sessão não criada, pulando teste de pedido DINE_IN"
    ORDER_DINEIN_ID=""
else
    response=$(curl -s -X POST "$BASE_URL/orders" \
        -H "Authorization: Bearer $TOKEN" \
        -H "Content-Type: application/json" \
        -d "{
            \"type\": \"DINE_IN\",
            \"items\": [{\"productId\": \"$PRODUCT_ID\", \"quantity\": 1}],
            \"sessionId\": \"$SESSION_ID\",
            \"observacoes\": \"Teste dine-in via E2E\"
        }")

    ORDER_DINEIN_ID=$(echo "$response" | sed -n 's/^{"id":\([0-9]*\).*/\1/p')

    if [ -n "$ORDER_DINEIN_ID" ] && echo "$response" | grep -q '"type":"DINE_IN"'; then
        log_success "✅ Pedido DINE_IN criado: $ORDER_DINEIN_ID"
    else
        log_error "❌ Falha ao criar pedido DINE_IN"
        echo "Resposta: $response"
        ORDER_DINEIN_ID=""
    fi
fi

# Agora que os pedidos foram criados, testar os filtros

# Teste 5: GET /orders?type=DELIVERY (filtrar delivery)
log_info "Teste 5/8: Filtrar pedidos DELIVERY"
response=$(curl -s "$BASE_URL/orders?type=DELIVERY" -H "Authorization: Bearer $TOKEN")
if echo "$response" | grep -q '"type":"DELIVERY"'; then
    log_success "✅ Filtro DELIVERY funciona"
else
    log_error "❌ Filtro DELIVERY não funciona"
fi

# Teste 6: GET /orders?type=DINE_IN (filtrar dine-in)
log_info "Teste 6/8: Filtrar pedidos DINE_IN"
response=$(curl -s "$BASE_URL/orders?type=DINE_IN" -H "Authorization: Bearer $TOKEN")
if echo "$response" | grep -q '"type":"DINE_IN"'; then
    log_success "✅ Filtro DINE_IN funciona"
else
    log_error "❌ Filtro DINE_IN não funciona"
fi

# Teste 7: Verificar isolamento dos filtros
log_info "Teste 7/8: Verificar isolamento dos filtros"

# Verificar que pedido DELIVERY aparece apenas no filtro DELIVERY
response=$(curl -s "$BASE_URL/orders?type=DELIVERY" -H "Authorization: Bearer $TOKEN")
if echo "$response" | grep -q "\"id\":$ORDER_DELIVERY_ID"; then
    if [ -z "$ORDER_DINEIN_ID" ] || ! echo "$response" | grep -q "\"id\":$ORDER_DINEIN_ID"; then
        log_success "✅ Filtro DELIVERY isola corretamente"
    else
        log_error "❌ Filtro DELIVERY não isola corretamente"
    fi
else
    log_error "❌ Pedido DELIVERY não encontrado no filtro DELIVERY"
fi

# Verificar que pedido DINE_IN aparece apenas no filtro DINE_IN (se foi criado)
if [ -n "$ORDER_DINEIN_ID" ]; then
    response=$(curl -s "$BASE_URL/orders?type=DINE_IN" -H "Authorization: Bearer $TOKEN")
    if echo "$response" | grep -q "\"id\":$ORDER_DINEIN_ID" && ! echo "$response" | grep -q "\"id\":$ORDER_DELIVERY_ID"; then
        log_success "✅ Filtro DINE_IN isola corretamente"
    else
        log_error "❌ Filtro DINE_IN não isola corretamente"
    fi
else
    log_warning "⚠️ Pedido DINE_IN não criado, pulando verificação de isolamento DINE_IN"
fi

# Teste 8: Atualizar status do pedido DELIVERY
log_info "Teste 8/8: Atualizar status do pedido DELIVERY"
if [ -n "$ORDER_DELIVERY_ID" ]; then
    log_info "ORDER_DELIVERY_ID: $ORDER_DELIVERY_ID"
    
    # Verificar se servidor ainda está rodando
    if ! check_server; then
        log_error "❌ Servidor não está mais rodando"
        exit 1
    fi
    
    # Garantir que temos um token válido
    if [ -z "$TOKEN" ] || [ ${#TOKEN} -lt 10 ]; then
        log_warning "Token inválido, obtendo novo token..."
        get_auth_token
    fi
    
    response=$(curl -s -w "\nHTTP_STATUS:%{http_code}" -X PATCH "$BASE_URL/orders/$ORDER_DELIVERY_ID/status" \
        -H "Authorization: Bearer $TOKEN" \
        -H "Content-Type: application/json" \
        -d '{"status": "EM_PREPARO"}')
    
    http_status=$(echo "$response" | grep "HTTP_STATUS:" | sed 's/HTTP_STATUS://')
    response_body=$(echo "$response" | sed '/HTTP_STATUS:/d')
    
    if [ "$http_status" = "200" ] && echo "$response_body" | grep -q '"status":"EM_PREPARO"'; then
        log_success "✅ Status do pedido DELIVERY atualizado"
    else
        log_error "❌ Falha ao atualizar status do pedido DELIVERY"
        echo "HTTP Status: $http_status"
        echo "Resposta: $response_body"
    fi
else
    log_warning "⚠️ Pulando teste de status (pedido DELIVERY não criado)"
fi

# ==================== LIMPEZA ====================

# Fechar sessão da mesa
if [ -n "$SESSION_ID" ]; then
    log_info "Limpando: Fechando sessão da mesa"
    curl -s -X POST "$BASE_URL/tables/$TABLE_ID/sessions/close" \
        -H "Authorization: Bearer $TOKEN" > /dev/null
fi

# Resumo
show_summary "PEDIDOS HÍBRIDOS"