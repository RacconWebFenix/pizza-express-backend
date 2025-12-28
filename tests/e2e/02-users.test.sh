#!/bin/bash

source "$(dirname "$0")/utils.sh"

echo "════════════════════════════════════════════════════════════════"
echo "  👥 TESTES DE USUÁRIOS (ADMIN ONLY)"
echo "════════════════════════════════════════════════════════════════"
echo ""

# Verificar servidor e obter token
check_server || exit 1
get_auth_token || exit 1

# ID criado durante os testes
USER_ID=""

# Teste 1: GET /users (listar)
log_info "Teste 1/5: Listar usuários"
test_endpoint "GET" "/users" "200" "Listar todos os usuários" > /dev/null

# Teste 2: POST /users (criar)
timestamp=$(date +%s)
log_info "Teste 2/5: Criar usuário"
response=$(test_endpoint "POST" "/users" "201" "Criar usuário de teste" \
    "{\"nome\":\"Usuario Teste $timestamp\",\"email\":\"teste$timestamp@example.com\",\"password\":\"123\",\"role\":\"CLIENTE\"}")

if [ $? -eq 0 ]; then
    USER_ID=$(extract_json_number "$response" "id")
    log_info "Usuário criado com ID: $USER_ID"
fi

# Teste 3: GET /users/:id (buscar por ID)
if [ -n "$USER_ID" ]; then
    log_info "Teste 3/5: Buscar usuário por ID"
    test_endpoint "GET" "/users/$USER_ID" "200" \
        "Buscar usuário $USER_ID" > /dev/null
fi

# Teste 4: PATCH /users/:id (atualizar)
if [ -n "$USER_ID" ]; then
    log_info "Teste 4/5: Atualizar usuário"
    test_endpoint "PATCH" "/users/$USER_ID" "200" \
        "Atualizar usuário" \
        '{"nome":"Usuario Teste Atualizado"}' > /dev/null
fi

# Teste 5: DELETE /users/:id
if [ -n "$USER_ID" ]; then
    log_info "Teste 5/5: Deletar usuário"
    test_endpoint "DELETE" "/users/$USER_ID" "200" \
        "Deletar usuário $USER_ID" > /dev/null
fi

# Resumo
show_summary "USUÁRIOS"