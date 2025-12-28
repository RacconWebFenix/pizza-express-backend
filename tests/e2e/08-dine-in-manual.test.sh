#!/bin/bash

source "$(dirname "$0")/utils.sh"

echo "════════════════════════════════════════════════════════════════"
echo "  🪑 TESTE MANUAL - MESAS + SESSÕES + PEDIDOS DINE_IN"
echo "════════════════════════════════════════════════════════════════"
echo ""

# ==================== CONFIGURAÇÃO ====================

# Credenciais do admin
ADMIN_EMAIL="admin@admin.com"
ADMIN_PASSWORD="123"

# ==================== INÍCIO DOS TESTES ====================

# Verificar se servidor está rodando
log_info "Verificando se servidor está rodando..."
if ! check_server; then
    log_error "Servidor não está rodando em $BASE_URL"
    exit 1
fi
log_success "Servidor está rodando"

# Fazer login
log_info "Fazendo login com $ADMIN_EMAIL..."
get_auth_token "$ADMIN_EMAIL" "$ADMIN_PASSWORD"
if [ -z "$TOKEN" ]; then
    log_error "Falha no login"
    exit 1
fi
log_success "Login realizado com sucesso"

# ==================== TESTE 1: LISTAR MESAS ====================

log_info "Teste 1: Listando mesas disponíveis"
response=$(curl -s "$BASE_URL/tables" -H "Authorization: Bearer $TOKEN")
if echo "$response" | grep -q '"id"'; then
    log_success "Mesas listadas com sucesso"
    echo "Mesas encontradas:"
    echo "$response" | grep -o '"id":"[^"]*","number":[0-9]*' | head -3
else
    log_error "Falha ao listar mesas"
    echo "Resposta: $response"
fi

# ==================== TESTE 2: CRIAR NOVA MESA ====================

log_info "Teste 2: Criando nova mesa"
# Gerar número único para a mesa usando timestamp (entre 1-999)
TABLE_NUMBER=$((1 + $(date +%s) % 998))

log_info "Tentando criar mesa com número: $TABLE_NUMBER"
response=$(curl -s -X POST "$BASE_URL/tables" \
    -H "Authorization: Bearer $TOKEN" \
    -H "Content-Type: application/json" \
    -d "{
        \"number\": $TABLE_NUMBER
    }")

echo "Resposta completa: $response"

TABLE_ID=$(echo "$response" | grep -o '"id":"[^"]*' | sed 's/"id":"//')

if [ -n "$TABLE_ID" ]; then
    log_success "Mesa criada: $TABLE_ID (Número: $TABLE_NUMBER)"
else
    log_error "Falha ao criar mesa"
    echo "Resposta: $response"
    exit 1
fi

# ==================== TESTE 3: ABRIR SESSÃO ====================

log_info "Teste 3: Abrindo sessão para mesa $TABLE_ID"
response=$(curl -s -X POST "$BASE_URL/tables/$TABLE_ID/sessions/open" \
    -H "Authorization: Bearer $TOKEN" \
    -H "Content-Type: application/json" \
    -d '{}')

SESSION_ID=$(echo "$response" | grep -o '"id":"[^"]*' | sed 's/"id":"//')

if [ -n "$SESSION_ID" ]; then
    log_success "Sessão aberta: $SESSION_ID"
else
    log_error "Falha ao abrir sessão"
    echo "Resposta: $response"
    exit 1
fi

# ==================== TESTE 4: BUSCAR PRODUTO ====================

log_info "Teste 4: Buscando produto disponível"
response=$(curl -s "$BASE_URL/products" -H "Authorization: Bearer $TOKEN")
PRODUCT_ID=$(echo "$response" | grep -o '"id":"[^"]*' | head -n1 | sed 's/"id":"//')

if [ -n "$PRODUCT_ID" ]; then
    log_success "Produto encontrado: $PRODUCT_ID"
else
    log_error "Nenhum produto encontrado"
    exit 1
fi

# ==================== TESTE 5: CRIAR PEDIDO DINE_IN ====================

log_info "Teste 5: Criando pedido DINE_IN na sessão $SESSION_ID"
response=$(curl -s -X POST "$BASE_URL/orders" \
    -H "Authorization: Bearer $TOKEN" \
    -H "Content-Type: application/json" \
    -d "{
        \"type\": \"DINE_IN\",
        \"items\": [{\"productId\": \"$PRODUCT_ID\", \"quantity\": 2}],
        \"sessionId\": \"$SESSION_ID\",
        \"observacoes\": \"Pedido de teste criado manualmente\"
    }")

ORDER_ID=$(echo "$response" | sed -n 's/^{"id":\([0-9]*\).*/\1/p')

if [ -n "$ORDER_ID" ] && echo "$response" | grep -q '"type":"DINE_IN"'; then
    log_success "Pedido DINE_IN criado: $ORDER_ID"
else
    log_error "Falha ao criar pedido DINE_IN"
    echo "Resposta: $response"
    exit 1
fi

# ==================== TESTE 6: VERIFICAR PEDIDO CRIADO ====================

log_info "Teste 6: Verificando pedido criado"
response=$(curl -s "$BASE_URL/orders/$ORDER_ID" -H "Authorization: Bearer $TOKEN")

if echo "$response" | grep -q "\"id\":$ORDER_ID" && echo "$response" | grep -q '"type":"DINE_IN"'; then
    log_success "Pedido verificado com sucesso"
    echo "Detalhes do pedido:"
    echo "$response" | grep -E '"id"|"type"|"status"|"total"|"sessionId"'
else
    log_error "Falha ao verificar pedido"
    echo "Resposta: $response"
fi

# ==================== TESTE 7: VERIFICAR SESSÃO ATUALIZADA ====================

log_info "Teste 7: Verificando sessão atualizada"
response=$(curl -s "$BASE_URL/tables/$TABLE_ID/sessions/active" -H "Authorization: Bearer $TOKEN")

if echo "$response" | grep -q "\"id\":\"$SESSION_ID\"" && echo "$response" | grep -q '"total"'; then
    log_success "Sessão atualizada corretamente"
    echo "Total da sessão:"
    echo "$response" | grep -o '"total":"[^"]*"'
else
    log_error "Sessão não foi atualizada corretamente"
    echo "Resposta: $response"
fi

# ==================== TESTE 8: VERIFICAR CONTA ====================

log_info "Teste 8: Verificando conta da mesa"
response=$(curl -s "$BASE_URL/tables/$TABLE_ID/bill" -H "Authorization: Bearer $TOKEN")

if echo "$response" | grep -q '"orders"' && echo "$response" | grep -q '"total"'; then
    log_success "Conta da mesa gerada corretamente"
    echo "Resumo da conta:"
    echo "$response" | grep -E '"total"|"orderCount"'
else
    log_error "Falha ao gerar conta da mesa"
    echo "Resposta: $response"
fi

# ==================== TESTE 9: ATUALIZAR STATUS DO PEDIDO ====================

log_info "Teste 9: Atualizando status do pedido para EM_PREPARO"
response=$(curl -s -X PATCH "$BASE_URL/orders/$ORDER_ID/status" \
    -H "Authorization: Bearer $TOKEN" \
    -H "Content-Type: application/json" \
    -d '{"status": "EM_PREPARO"}')

if echo "$response" | grep -q '"status":"EM_PREPARO"'; then
    log_success "Status do pedido atualizado para EM_PREPARO"
else
    log_error "Falha ao atualizar status do pedido"
    echo "Resposta: $response"
fi

# ==================== TESTE 10: FECHAR SESSÃO ====================

log_info "Teste 10: Fechando sessão da mesa"
response=$(curl -s -X POST "$BASE_URL/tables/$TABLE_ID/sessions/close" \
    -H "Authorization: Bearer $TOKEN")

if echo "$response" | grep -q '"closedAt"' && echo "$response" | grep -q '"total"'; then
    log_success "Sessão fechada com sucesso"
    echo "Sessão finalizada:"
    echo "$response" | grep -E '"id"|"closedAt"|"total"'
else
    log_error "Falha ao fechar sessão"
    echo "Resposta: $response"
fi

# ==================== LIMPEZA ====================

log_info "Limpando: Removendo mesa de teste"
curl -s -X DELETE "$BASE_URL/tables/$TABLE_ID" \
    -H "Authorization: Bearer $TOKEN" > /dev/null

# ==================== RESUMO ====================

echo ""
echo "════════════════════════════════════════════════════════════════"
echo "  📊 RESUMO - TESTE MANUAL DINE_IN"
echo "════════════════════════════════════════════════════════════════"

if [ $TESTS_PASSED -gt 0 ]; then
    echo -e "${GREEN}✅ Testes Passando: $TESTS_PASSED${NC}"
fi

if [ $TESTS_FAILED -gt 0 ]; then
    echo -e "${RED}❌ Testes Falhando: $TESTS_FAILED${NC}"
fi

if [ $TESTS_FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 TODOS OS TESTES PASSARAM!${NC}"
else
    echo -e "${RED}❌ Alguns testes falharam${NC}"
fi

echo "════════════════════════════════════════════════════════════════"