#!/bin/bash

echo "════════════════════════════════════════════════════════════════"
echo "  🧪 SUITE COMPLETA DE TESTES E2E - PIZZA EXPRESS"
echo "════════════════════════════════════════════════════════════════"
echo ""

# Definir URL base
export BASE_URL="${BASE_URL:-http://localhost:3000}"

# Diretório dos testes
TEST_DIR="$(dirname "$0")"

# Contadores globais
TOTAL_MODULES=0
PASSED_MODULES=0
FAILED_MODULES=0

# Array para armazenar resultados
declare -a RESULTS

# Função para executar módulo de teste
run_module() {
    local module_file="$1"
    local module_name=$(basename "$module_file" .test.sh)

    ((TOTAL_MODULES++))

    echo ""
    echo "▶️  Executando: $module_name"
    echo "────────────────────────────────────────────────────────────────"

    # Executar teste e capturar exit code
    bash "$module_file"
    local exit_code=$?

    if [ $exit_code -eq 0 ]; then
        ((PASSED_MODULES++))
        RESULTS+=("✅ $module_name - PASSOU")
    else
        ((FAILED_MODULES++))
        RESULTS+=("❌ $module_name - FALHOU")
    fi

    echo ""
}

# Executar todos os módulos em ordem
run_module "$TEST_DIR/01-auth.test.sh"
run_module "$TEST_DIR/02-users.test.sh"
run_module "$TEST_DIR/03-enderecos.test.sh"
run_module "$TEST_DIR/04-pizzas.test.sh"
run_module "$TEST_DIR/05-catalog.test.sh"
run_module "$TEST_DIR/06-tables.test.sh"
run_module "$TEST_DIR/07-orders.test.sh"
run_module "$TEST_DIR/08-pedidos-legacy.test.sh"
run_module "$TEST_DIR/09-entregadores.test.sh"
run_module "$TEST_DIR/10-payments.test.sh"

# Mostrar relatório final
echo "════════════════════════════════════════════════════════════════"
echo "  📊 RELATÓRIO FINAL - SUITE COMPLETA"
echo "════════════════════════════════════════════════════════════════"
echo ""
echo "📋 Resultados por Módulo:"
for result in "${RESULTS[@]}"; do
    echo "  $result"
done
echo ""
echo "📈 Estatísticas:"
echo "  Total de Módulos: $TOTAL_MODULES"
echo "  ✅ Módulos Passando: $PASSED_MODULES"
echo "  ❌ Módulos Falhando: $FAILED_MODULES"
echo ""

if [ $FAILED_MODULES -eq 0 ]; then
    echo "════════════════════════════════════════════════════════════════"
    echo "  🎉 TODOS OS MÓDULOS PASSARAM COM SUCESSO!"
    echo "════════════════════════════════════════════════════════════════"
    exit 0
else
    echo "════════════════════════════════════════════════════════════════"
    echo "  ⚠️  ALGUNS MÓDULOS FALHARAM - REVISAR LOGS ACIMA"
    echo "════════════════════════════════════════════════════════════════"
    exit 1
fi