#!/bin/bash

source "$(dirname "$0")/utils.sh"

echo "════════════════════════════════════════════════════════════════"
echo "  🚚 TESTES DE ENTREGADORES"
echo "════════════════════════════════════════════════════════════════"
echo ""

# Verificar servidor e obter token
check_server || exit 1
get_auth_token || exit 1

# ID criado durante os testes
ENTREGADOR_ID=""

# Teste 1: GET /entregadores (listar)
log_info "Teste 1/1: Listar entregadores"
test_endpoint "GET" "/entregadores" "200" "Listar todos os entregadores" > /dev/null

# Nota: Criação de entregadores não testada pois pode ter validações específicas

# Resumo
show_summary "ENTREGADORES"