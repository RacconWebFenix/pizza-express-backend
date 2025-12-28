#!/bin/bash

source "$(dirname "$0")/utils.sh"

echo "════════════════════════════════════════════════════════════════"
echo "  📍 TESTES DE ENDEREÇOS"
echo "════════════════════════════════════════════════════════════════"
echo ""

# Verificar servidor e obter token
check_server || exit 1
get_auth_token || exit 1

# ID criado durante os testes
ENDERECO_ID=""

# Teste 1: GET /enderecos (listar)
log_info "Teste 1/5: Listar endereços"
test_endpoint "GET" "/enderecos" "200" "Listar todos os endereços" > /dev/null

# Teste 2: POST /enderecos (criar)
timestamp=$(date +%s)
log_info "Teste 2/5: Criar endereço"
response=$(test_endpoint "POST" "/enderecos" "201" "Criar endereço de teste" \
    "{\"cep\":\"01310-10$((timestamp % 100))\",\"tipo\":\"residencial\",\"logradouro\":\"Av Paulista\",\"numero\":\"1000\",\"bairro\":\"Bela Vista\",\"cidade\":\"São Paulo\",\"estado\":\"SP\"}")

if [ $? -eq 0 ]; then
    ENDERECO_ID=$(extract_json_number "$response" "id")
    log_info "Endereço criado com ID: $ENDERECO_ID"
fi

# Teste 3: GET /enderecos/:id (buscar por ID)
if [ -n "$ENDERECO_ID" ]; then
    log_info "Teste 3/4: Buscar endereço por ID"
    test_endpoint "GET" "/enderecos/$ENDERECO_ID" "200" \
        "Buscar endereço $ENDERECO_ID" > /dev/null
fi

# Teste 4: DELETE /enderecos/:id
if [ -n "$ENDERECO_ID" ]; then
    log_info "Teste 4/4: Deletar endereço"
    test_endpoint "DELETE" "/enderecos/$ENDERECO_ID" "200" \
        "Deletar endereço $ENDERECO_ID" > /dev/null
fi

# Resumo
show_summary "ENDEREÇOS"