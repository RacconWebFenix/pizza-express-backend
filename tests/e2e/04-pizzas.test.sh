#!/bin/bash

source "$(dirname "$0")/utils.sh"

echo "════════════════════════════════════════════════════════════════"
echo "  🍕 TESTES DE PIZZAS (LEGADO)"
echo "════════════════════════════════════════════════════════════════"
echo ""

# Verificar servidor e obter token
check_server || exit 1
get_auth_token || exit 1

# ID criado durante os testes
PIZZA_ID=""

# Teste 1: GET /pizzas (listar)
log_info "Teste 1/1: Listar pizzas"
test_endpoint "GET" "/pizzas" "200" "Listar todas as pizzas" > /dev/null

# Nota: Criação de pizzas legadas não testada pois pode ter validações específicas

# Resumo
show_summary "PIZZAS LEGADO"