#!/bin/bash

###############################################################################
# Script: generate_project_snapshot.sh (VERSÃO CORRIGIDA)
# Descrição: Gera arquivo MD com conteúdo completo de todos os arquivos
# Data: 28/12/2025 - v2.0
###############################################################################

set -e

# Cores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Configurações
PROJECT_ROOT="$(pwd)"
OUTPUT_DIR="${1:-.}"
OUTPUT_FILE="${OUTPUT_DIR}/PROJECT_SNAPSHOT_$(date +%Y%m%d_%H%M%S).md"

# Padrões para ignorar (hardcoded para garantir funcionamento)
IGNORE_PATTERNS=(
    "node_modules"
    ".git"
    "dist"
    "build"
    "coverage"
    ".next"
    ".vercel"
    "logs"
    ".vscode"
    ".idea"
    "*.log"
    ".DS_Store"
    "*.swp"
    "*.swo"
    ".env"
    ".env.local"
    "package-lock.json"
    "yarn.lock"
)

echo -e "${BLUE}🔍 Pizza Express - Project Snapshot Generator v2.0${NC}"
echo -e "${BLUE}====================================================${NC}"
echo ""

###############################################################################
# Função: should_ignore
# Verifica se arquivo/diretório deve ser ignorado
###############################################################################
should_ignore() {
    local path="$1"
    local basename=$(basename "$path")

    for pattern in "${IGNORE_PATTERNS[@]}"; do
        # Checar por wildcard
        if [[ "$pattern" == *"*"* ]]; then
            if [[ "$basename" == $pattern ]]; then
                return 0
            fi
        # Checar por nome exato
        elif [[ "$basename" == "$pattern" ]]; then
            return 0
        # Checar se path contém o padrão
        elif [[ "$path" == *"/$pattern/"* ]] || [[ "$path" == *"/$pattern" ]]; then
            return 0
        fi
    done

    return 1
}

###############################################################################
# Função: is_binary
# Verifica se arquivo é binário
###############################################################################
is_binary() {
    local file="$1"

    # Extensões de texto conhecidas
    case "${file##*.}" in
        ts|tsx|js|jsx|json|md|txt|yml|yaml|sql|prisma|sh|bash|html|css|scss|xml|env|gitignore|prettierrc|eslintrc|toml)
            return 1
            ;;
    esac

    # Usar comando file
    if file "$file" | grep -qE "text|JSON|XML|script"; then
        return 1
    fi

    return 0
}

###############################################################################
# Função: get_language
# Retorna linguagem para syntax highlighting
###############################################################################
get_language() {
    local file="$1"
    local ext="${file##*.}"

    case "$ext" in
        ts|tsx) echo "typescript" ;;
        js|jsx) echo "javascript" ;;
        json) echo "json" ;;
        md) echo "markdown" ;;
        sh|bash) echo "bash" ;;
        yml|yaml) echo "yaml" ;;
        sql) echo "sql" ;;
        prisma) echo "prisma" ;;
        html) echo "html" ;;
        css|scss) echo "css" ;;
        py) echo "python" ;;
        xml) echo "xml" ;;
        toml) echo "toml" ;;
        *) echo "" ;;
    esac
}

###############################################################################
# Função: process_directory
# Processa recursivamente todos os arquivos
###############################################################################
process_directory() {
    local dir="$1"
    local total_processed=0

    # Listar arquivos e diretórios
    for entry in "$dir"/*; do
        # Pular se não existe
        [ ! -e "$entry" ] && continue

        # Pular se deve ignorar
        should_ignore "$entry" && continue

        # Se é diretório, processar recursivamente
        if [ -d "$entry" ]; then
            local subdir_count=$(process_directory "$entry")
            total_processed=$((total_processed + subdir_count))

        # Se é arquivo, processar
        elif [ -f "$entry" ]; then
            process_file "$entry"
            total_processed=$((total_processed + 1))

            # Atualizar progresso a cada 10 arquivos
            if [ $((total_processed % 10)) -eq 0 ]; then
                echo -ne "\r${BLUE}Processados: ${total_processed} arquivos...${NC}"
            fi
        fi
    done

    echo "$total_processed"
}

###############################################################################
# Função: process_file
# Processa um único arquivo
###############################################################################
process_file() {
    local file="$1"
    local rel_path="${file#$PROJECT_ROOT/}"

    # Adicionar cabeçalho do arquivo
    cat >> "$OUTPUT_FILE" << EOF

## 📝 \`$rel_path\`

EOF

    # Verificar se é binário
    if is_binary "$file"; then
        local file_info=$(file -b "$file" 2>/dev/null || echo "Unknown type")
        local file_size=$(du -h "$file" 2>/dev/null | cut -f1 || echo "Unknown")

        cat >> "$OUTPUT_FILE" << EOF
\`\`\`
[ARQUIVO BINÁRIO - Não exibido]
Tipo: $file_info
Tamanho: $file_size
\`\`\`

EOF
    else
        # Arquivo de texto
        local lang=$(get_language "$file")

        cat >> "$OUTPUT_FILE" << EOF
\`\`\`$lang
EOF

        # Adicionar conteúdo do arquivo (com fallback)
        if cat "$file" >> "$OUTPUT_FILE" 2>/dev/null; then
            :  # Sucesso
        else
            echo "[ERRO: Não foi possível ler o arquivo]" >> "$OUTPUT_FILE"
        fi

        cat >> "$OUTPUT_FILE" << EOF

\`\`\`

EOF
    fi

    # Separador
    cat >> "$OUTPUT_FILE" << EOF
---

EOF
}

###############################################################################
# MAIN EXECUTION
###############################################################################

# Criar diretório de saída
mkdir -p "$OUTPUT_DIR"

# Inicializar arquivo
echo -e "${GREEN}✓${NC} Criando arquivo de saída..."
cat > "$OUTPUT_FILE" << 'EOF'
# 🍕 Pizza Express Backend - Project Snapshot

**Snapshot completo do projeto para análise técnica**

> ⚠️ Este arquivo foi gerado automaticamente e contém todo o código-fonte do projeto.

---

EOF

# Adicionar estrutura de diretórios
echo -e "${GREEN}✓${NC} Gerando árvore de diretórios..."
cat >> "$OUTPUT_FILE" << 'EOF'
# 📁 Estrutura do Projeto

```
EOF

if command -v tree &> /dev/null; then
    tree -a -I "node_modules|.git|dist|build|coverage|logs" -L 4 >> "$OUTPUT_FILE" 2>/dev/null || echo "." >> "$OUTPUT_FILE"
else
    find . -type d \( -name node_modules -o -name .git -o -name dist -o -name build \) -prune -o -type d -print | head -100 >> "$OUTPUT_FILE"
fi

cat >> "$OUTPUT_FILE" << 'EOF'
```

---

# 📄 Conteúdo dos Arquivos

EOF

# Data de início
START_TIME=$(date +%s)

# Processar todos os arquivos
echo -e "${GREEN}✓${NC} Processando arquivos do projeto..."
echo ""

TOTAL_FILES=$(process_directory "$PROJECT_ROOT")

echo ""
echo -e "${GREEN}✓${NC} Total de arquivos processados: ${YELLOW}$TOTAL_FILES${NC}"

# Adicionar metadados
cat >> "$OUTPUT_FILE" << EOF

---

# 📊 Metadados

| Item | Valor |
|------|-------|
| **Gerado em** | $(date '+%d/%m/%Y às %H:%M:%S') |
| **Diretório** | \`$PROJECT_ROOT\` |
| **Arquivos processados** | $TOTAL_FILES |
| **Tamanho do projeto** | $(du -sh "$PROJECT_ROOT" 2>/dev/null | cut -f1 || echo "N/A") |
| **Tempo de processamento** | $(($(date +%s) - START_TIME))s |

---

**🔧 Gerado automaticamente para análise do Pizza Express Backend**

EOF

# Estatísticas finais
FILE_SIZE=$(du -h "$OUTPUT_FILE" 2>/dev/null | cut -f1 || echo "N/A")

echo ""
echo -e "${GREEN}════════════════════════════════════════════════${NC}"
echo -e "${GREEN}✓ SNAPSHOT GERADO COM SUCESSO!${NC}"
echo -e "${GREEN}════════════════════════════════════════════════${NC}"
echo ""
echo -e "📄 Arquivo: ${BLUE}$OUTPUT_FILE${NC}"
echo -e "📊 Tamanho: ${YELLOW}$FILE_SIZE${NC}"
echo -e "🗂️  Arquivos: ${YELLOW}$TOTAL_FILES${NC}"
echo ""
echo -e "${GREEN}💡 Use este arquivo para análise com IA ou code review${NC}"
echo ""

exit 0
