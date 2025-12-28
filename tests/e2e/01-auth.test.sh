#!/bin/bash

source "$(dirname "$0")/utils.sh"

echo "════════════════════════════════════════════════════════════════"
echo "  🔐 TESTES DE AUTENTICAÇÃO"
echo "════════════════════════════════════════════════════════════════"
echo ""

# Verificar servidor
check_server || exit 1

# Teste 1: Login com credenciais corretas
log_info "Teste 1/5: Login com credenciais corretas"
response=$(test_endpoint "POST" "/auth/login" "201" "Login ADMIN" \
    '{"email":"admin@admin.com","password":"123"}')

if [ $? -eq 0 ]; then
    TOKEN=$(extract_json_field "$response" "access_token")
    assert_json_field_exists "$response" "access_token" "Login response"
fi

# Teste 2: Login com senha incorreta
log_info "Teste 2/5: Login com senha incorreta"
test_endpoint "POST" "/auth/login" "401" "Login senha incorreta" \
    '{"email":"admin@admin.com","password":"senhaerrada"}' > /dev/null 2>&1

if [ $? -eq 0 ]; then
    log_success "Login rejeitado corretamente"
    ((TESTS_PASSED++))
else
    log_error "Login deveria ter sido rejeitado"
    ((TESTS_FAILED++))
fi

# Teste 3: Login com email inexistente
log_info "Teste 3/5: Login com email inexistente"
test_endpoint "POST" "/auth/login" "401" "Login email inexistente" \
    '{"email":"naoexiste@example.com","password":"123"}' > /dev/null 2>&1

if [ $? -eq 0 ]; then
    log_success "Login rejeitado corretamente"
    ((TESTS_PASSED++))
else
    log_error "Login deveria ter sido rejeitado"
    ((TESTS_FAILED++))
fi

# Teste 4: GET /me com token válido
log_info "Teste 4/5: GET /me com token válido"
response=$(test_endpoint "GET" "/me" "200" "Buscar perfil do usuário")

if [ $? -eq 0 ]; then
    assert_json_field_exists "$response" "id" "Perfil do usuário"
    assert_json_field_exists "$response" "email" "Perfil do usuário"
    assert_json_field_exists "$response" "nome" "Perfil do usuário"
    assert_json_field_exists "$response" "role" "Perfil do usuário"
fi

# Teste 5: GET /me sem token (deve falhar)
log_info "Teste 5/5: GET /me sem token"
OLD_TOKEN="$TOKEN"
TOKEN=""
test_endpoint "GET" "/me" "401" "Buscar perfil sem token" > /dev/null 2>&1

if [ $? -eq 0 ]; then
    log_success "Endpoint protegido corretamente"
    ((TESTS_PASSED++))
else
    log_error "Endpoint deveria estar protegido"
    ((TESTS_FAILED++))
fi
TOKEN="$OLD_TOKEN"

# Resumo
show_summary "AUTENTICAÇÃO"