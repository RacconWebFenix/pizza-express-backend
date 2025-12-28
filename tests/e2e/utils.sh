#!/bin/bash

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Variáveis globais
BASE_URL="${BASE_URL:-http://localhost:3000}"
ADMIN_EMAIL="admin@admin.com"
ADMIN_PASSWORD="123"
TOKEN=""
TESTS_PASSED=0
TESTS_FAILED=0

# Função para log de sucesso
log_success() {
    echo -e "${GREEN}✅ $1${NC}"
    ((TESTS_PASSED++))
}

# Função para log de erro
log_error() {
    echo -e "${RED}❌ $1${NC}"
    ((TESTS_FAILED++))
}

# Função para log de info
log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Função para log de warning
log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# Função para fazer login e obter token
get_auth_token() {
    local email="${1:-$ADMIN_EMAIL}"
    local password="${2:-$ADMIN_PASSWORD}"

    local response=$(curl -s -X POST "$BASE_URL/auth/login" \
        -H "Content-Type: application/json" \
        -d "{\"email\":\"$email\",\"password\":\"$password\"}")

    TOKEN=$(echo "$response" | grep -o '"access_token":"[^"]*' | sed 's/"access_token":"//')

    if [ -z "$TOKEN" ]; then
        log_error "Falha ao obter token de autenticação"
        return 1
    fi

    log_success "Token obtido com sucesso"
    return 0
}

# Função genérica para testar endpoint
test_endpoint() {
    local method="$1"
    local endpoint="$2"
    local expected_status="$3"
    local description="$4"
    local data="$5"
    local extra_headers="$6"

    log_info "Testando: $description"

    local headers="Content-Type: application/json"
    if [ -n "$TOKEN" ]; then
        headers="$headers|Authorization: Bearer $TOKEN"
    fi
    if [ -n "$extra_headers" ]; then
        headers="$headers|$extra_headers"
    fi

    local curl_cmd="curl -s -w '\n%{http_code}' -X $method '$BASE_URL$endpoint'"

    # Adicionar headers
    IFS='|' read -ra HEADERS <<< "$headers"
    for header in "${HEADERS[@]}"; do
        curl_cmd="$curl_cmd -H '$header'"
    done

    # Adicionar body se houver
    if [ -n "$data" ]; then
        curl_cmd="$curl_cmd -d '$data'"
    fi

    # Executar curl
    local response=$(eval $curl_cmd)
    local status_code=$(echo "$response" | tail -n1)
    local body=$(echo "$response" | sed '$d')

    # Validar status code
    if [ "$status_code" = "$expected_status" ]; then
        log_success "$description - Status $status_code"
        echo "$body" # Retorna body para uso posterior
        return 0
    else
        log_error "$description - Esperado $expected_status, recebido $status_code"
        echo "Response: $body" >&2
        return 1
    fi
}

# Função para extrair campo JSON
extract_json_field() {
    local json="$1"
    local field="$2"
    echo "$json" | jq -r ".$field // empty" 2>/dev/null || echo ""
}

# Função para extrair campo JSON numérico
extract_json_number() {
    local json="$1"
    local field="$2"
    echo "$json" | jq -r ".$field // empty" 2>/dev/null || echo ""
}

# Função para validar campo JSON existe
assert_json_field_exists() {
    local json="$1"
    local field="$2"
    local description="$3"

    if echo "$json" | grep -q '"'"$field"'"'; then
        log_success "$description - Campo '$field' presente"
        return 0
    else
        log_error "$description - Campo '$field' ausente"
        return 1
    fi
}

# Função para mostrar resumo final
show_summary() {
    local module_name="$1"
    local total=$((TESTS_PASSED + TESTS_FAILED))

    echo ""
    echo "════════════════════════════════════════════════════════════════"
    echo "  📊 RESUMO - $module_name"
    echo "════════════════════════════════════════════════════════════════"
    echo -e "  ${GREEN}✅ Testes Passando: $TESTS_PASSED/$total${NC}"

    if [ $TESTS_FAILED -gt 0 ]; then
        echo -e "  ${RED}❌ Testes Falhando: $TESTS_FAILED/$total${NC}"
        echo "════════════════════════════════════════════════════════════════"
        return 1
    else
        echo "════════════════════════════════════════════════════════════════"
        echo -e "  ${GREEN}🎉 TODOS OS TESTES PASSARAM!${NC}"
        echo "════════════════════════════════════════════════════════════════"
        return 0
    fi
}

# Função para verificar se servidor está rodando
check_server() {
    log_info "Verificando se servidor está rodando..."

    if curl -s "$BASE_URL" > /dev/null 2>&1; then
        log_success "Servidor está rodando em $BASE_URL"
        return 0
    else
        log_error "Servidor não está acessível em $BASE_URL"
        log_info "Certifique-se de que o servidor está rodando: npm run start:dev"
        return 1
    fi
}