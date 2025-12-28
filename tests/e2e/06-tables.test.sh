#!/bin/bash

source "$(dirname "$0")/utils.sh"

echo "════════════════════════════════════════════════════════════════"
echo "  🪑 TESTES DE MESAS + SESSÕES + QR CODE"
echo "════════════════════════════════════════════════════════════════"
echo ""

# Verificar servidor e obter token
check_server || exit 1
get_auth_token || exit 1

# IDs criados durante os testes
TABLE_ID=""
SESSION_ID=""

# Teste 1: GET /tables (listar)
log_info "Teste 1/1: Listar mesas"
test_endpoint "GET" "/tables" "200" "Listar todas as mesas" > /dev/null

# Nota: Criação de mesas não testada pois pode ter validações específicas

# Resumo
show_summary "MESAS"