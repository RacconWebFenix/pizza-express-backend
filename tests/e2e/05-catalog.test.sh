#!/bin/bash

source "$(dirname "$0")/utils.sh"

echo "════════════════════════════════════════════════════════════════"
echo "  📦 TESTES DE CATÁLOGO (Categories + Products)"
echo "════════════════════════════════════════════════════════════════"
echo ""

# Verificar servidor e obter token
check_server || exit 1
get_auth_token || exit 1

# IDs criados durante os testes
CATEGORY_ID=""
PRODUCT_ID=""

# ==================== CATEGORIES ====================

# Teste 1: GET /categories (listar)
log_info "Teste 1/10: Listar categorias"
test_endpoint "GET" "/categories" "200" "Listar todas as categorias" > /dev/null

# Teste 2: POST /categories (criar)
timestamp=$(date +%s)
log_info "Teste 2/10: Criar categoria"
response=$(test_endpoint "POST" "/categories" "201" "Criar categoria de teste" \
    "{\"name\":\"Bebidas Teste $timestamp\",\"slug\":\"bebidas-teste-$timestamp\"}")

if [ $? -eq 0 ]; then
    CATEGORY_ID=$(extract_json_field "$response" "id")
    log_info "Categoria criada com ID: $CATEGORY_ID"
fi

# Teste 3: GET /categories/:id (buscar por ID)
if [ -n "$CATEGORY_ID" ]; then
    log_info "Teste 3/10: Buscar categoria por ID"
    test_endpoint "GET" "/categories/$CATEGORY_ID" "200" \
        "Buscar categoria $CATEGORY_ID" > /dev/null
fi

# Teste 4: PATCH /categories/:id (atualizar)
if [ -n "$CATEGORY_ID" ]; then
    log_info "Teste 4/10: Atualizar categoria"
    test_endpoint "PATCH" "/categories/$CATEGORY_ID" "200" \
        "Atualizar categoria" \
        '{"name":"Bebidas Teste Atualizada"}' > /dev/null
fi

# ==================== PRODUCTS ====================

# Teste 5: GET /products (listar)
log_info "Teste 5/10: Listar produtos"
test_endpoint "GET" "/products" "200" "Listar todos os produtos" > /dev/null

# Teste 6: POST /products (criar)
if [ -n "$CATEGORY_ID" ]; then
    log_info "Teste 6/10: Criar produto"
    response=$(test_endpoint "POST" "/products" "201" "Criar produto de teste" \
        "{\"name\":\"Coca-Cola Teste\",\"description\":\"Refrigerante 2L\",\"price\":\"8.50\",\"categoryId\":\"$CATEGORY_ID\"}")

    if [ $? -eq 0 ]; then
        PRODUCT_ID=$(extract_json_field "$response" "id")
        log_info "Produto criado com ID: $PRODUCT_ID"
    fi
fi

# Teste 7: GET /products/:id (buscar por ID)
if [ -n "$PRODUCT_ID" ]; then
    log_info "Teste 7/10: Buscar produto por ID"
    test_endpoint "GET" "/products/$PRODUCT_ID" "200" \
        "Buscar produto $PRODUCT_ID" > /dev/null
fi

# Teste 8: GET /products?categoryId=X (filtrar por categoria)
if [ -n "$CATEGORY_ID" ]; then
    log_info "Teste 8/10: Filtrar produtos por categoria"
    test_endpoint "GET" "/products?categoryId=$CATEGORY_ID" "200" \
        "Filtrar produtos da categoria $CATEGORY_ID" > /dev/null
fi

# Teste 9: PATCH /products/:id (atualizar)
if [ -n "$PRODUCT_ID" ]; then
    log_info "Teste 9/10: Atualizar produto"
    test_endpoint "PATCH" "/products/$PRODUCT_ID" "200" \
        "Atualizar produto" \
        '{"price":"9.00"}' > /dev/null
fi

# ==================== CLEANUP ====================

# Teste 10: DELETE /products/:id (soft delete)
if [ -n "$PRODUCT_ID" ]; then
    log_info "Teste 10/10: Deletar produto (soft delete)"
    test_endpoint "DELETE" "/products/$PRODUCT_ID" "200" \
        "Deletar produto $PRODUCT_ID" > /dev/null
fi

# Cleanup: Deletar categoria (após todos os testes)
if [ -n "$CATEGORY_ID" ]; then
    log_info "Cleanup: Deletando categoria de teste"
    curl -s -X DELETE "$BASE_URL/categories/$CATEGORY_ID" \
        -H "Authorization: Bearer $TOKEN" > /dev/null 2>&1
    log_info "Categoria deletada: $CATEGORY_ID"
fi

# Resumo
show_summary "CATÁLOGO"