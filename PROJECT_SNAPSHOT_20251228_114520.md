# 🍕 Pizza Express Backend - Project Snapshot

**Snapshot completo do projeto para análise técnica**

> ⚠️ Este arquivo foi gerado automaticamente e contém todo o código-fonte do projeto.

---

# 📁 Estrutura do Projeto

```
.
├── .env
├── eslint.config.mjs
├── .eslintignore
├── .eslintrc.js
├── generate_project_snapshot.sh
├── .gitignore
├── Insomnia_Pizza_Express_Complete.yaml
├── nest-cli.json
├── package.json
├── package-lock.json
├── .prettierrc
├── prisma
│   ├── migrations
│   │   ├── 20250720114702_add_new_rules_image
│   │   │   └── migration.sql
│   │   ├── 20251211221547_add_hybrid_architecture_models
│   │   │   └── migration.sql
│   │   ├── 20251211221709_add_hybrid_architecture_models_v2
│   │   │   └── migration.sql
│   │   ├── 20251211222713_fix_address_relationship
│   │   │   └── migration.sql
│   │   ├── 20251228130452_add_order_modifications_and_split_payments
│   │   │   └── migration.sql
│   │   ├── 20251228134650_add_split_payment
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   ├── schema.prisma
│   ├── seed-migration.ts
│   ├── seed-pedidos.ts
│   └── seed.ts
├── PROJECT_SNAPSHOT_20251228_114520.md
├── README.md
├── RELATORIO_TESTES_E2E.md
├── src
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── auth
│   │   ├── auth.controller.ts
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   ├── google.strategy.ts
│   │   ├── jwt-auth.guard.ts
│   │   ├── jwt.strategy.ts
│   │   ├── me.controller.ts
│   │   └── roles.guard.ts
│   ├── catalog
│   │   ├── catalog.module.ts
│   │   ├── categories.controller.ts
│   │   ├── categories.service.ts
│   │   ├── dto
│   │   │   ├── create-category.dto.ts
│   │   │   ├── create-product.dto.ts
│   │   │   ├── update-category.dto.ts
│   │   │   └── update-product.dto.ts
│   │   ├── entities
│   │   ├── products.controller.ts
│   │   └── products.service.ts
│   ├── cloudinary
│   │   ├── cloudinary.module.ts
│   │   └── cloudinary.service.ts
│   ├── common
│   │   ├── adapters
│   │   │   └── bcrypt.adapter.ts
│   │   ├── builders
│   │   │   └── response.builder.ts
│   │   ├── common.module.ts
│   │   ├── constants
│   │   │   ├── app.constants.ts
│   │   │   └── roles.constants.ts
│   │   ├── decorators
│   │   │   ├── auth.decorators.ts
│   │   │   ├── resource.decorator.ts
│   │   │   └── roles.decorator.ts
│   │   ├── enums
│   │   │   └── role.enum.ts
│   │   ├── filters
│   │   │   └── all-exceptions.filter.ts
│   │   ├── guards
│   │   │   └── resource-owner.guard.ts
│   │   ├── interfaces
│   │   │   ├── authenticated-user.interface.ts
│   │   │   └── hasher.interface.ts
│   │   └── logger
│   │       ├── logger.module.ts
│   │       └── logger.service.ts
│   ├── enderecos
│   │   ├── enderecos.controller.ts
│   │   ├── enderecos.module.ts
│   │   └── enderecos.service.ts
│   ├── entregadores
│   │   ├── dto
│   │   │   ├── create-entregadore.dto.ts
│   │   │   └── update-entregadore.dto.ts
│   │   ├── entities
│   │   │   └── entregadore.entity.ts
│   │   ├── entregadores.controller.ts
│   │   ├── entregadores-location.gateway.spec.ts
│   │   ├── entregadores-location.gateway.ts
│   │   ├── entregadores.module.ts
│   │   ├── entregadores.service.spec.ts
│   │   └── entregadores.service.ts
│   ├── kitchen
│   │   ├── kitchen.gateway.ts
│   │   └── kitchen.module.ts
│   ├── main.ts
│   ├── order-items
│   │   ├── dto
│   │   │   ├── add-item.dto.ts
│   │   │   ├── cancel-item.dto.ts
│   │   │   └── update-item-quantity.dto.ts
│   │   ├── guards
│   │   │   └── order-modifiable.guard.ts
│   │   ├── interfaces
│   │   │   └── order-item-operation.interface.ts
│   │   ├── order-items.controller.ts
│   │   ├── order-items.module.ts
│   │   └── order-items.service.ts
│   ├── payments
│   │   ├── dto
│   │   │   ├── create-payment.dto.ts
│   │   │   └── split-payment.dto.ts
│   │   ├── payments.controller.ts
│   │   ├── payments.module.ts
│   │   ├── payments.service.ts
│   │   ├── split-payment.controller.ts
│   │   └── split-payment.service.ts
│   ├── pedidos
│   │   ├── dto
│   │   │   ├── create-order.dto.ts
│   │   │   ├── create-pedido.dto.ts
│   │   │   ├── update-pedido.dto.ts
│   │   │   └── update-pedido-status.dto.ts
│   │   ├── entities
│   │   │   └── pedido.entity.ts
│   │   ├── orders.controller.ts
│   │   ├── orders.service.ts
│   │   ├── pedidos.controller.ts
│   │   ├── pedidos.module.ts
│   │   ├── pedidos.service.spec.ts
│   │   ├── pedidos.service.ts
│   │   └── strategies
│   │       ├── delivery.strategy.ts
│   │       ├── dine-in.strategy.ts
│   │       ├── order-processing.strategy.ts
│   │       └── order-strategy.factory.ts
│   ├── pizzas
│   │   ├── dto
│   │   │   ├── create-pizza.dto.ts
│   │   │   └── update-pizza.dto.ts
│   │   ├── entities
│   │   │   └── pizza.entity.ts
│   │   ├── pizzas.controller.ts
│   │   ├── pizzas.module.ts
│   │   ├── pizzas.service.spec.ts
│   │   └── pizzas.service.ts
│   ├── prisma.module.ts
│   ├── prisma.service.ts
│   ├── tables
│   │   ├── dto
│   │   │   ├── create-table.dto.ts
│   │   │   └── update-table.dto.ts
│   │   ├── entities
│   │   ├── manage-tables.service.ts
│   │   ├── qrcode.service.ts
│   │   ├── tables.controller.ts
│   │   ├── table-session.service.ts
│   │   └── tables.module.ts
│   ├── types
│   │   └── multer.d.ts
│   ├── upload
│   │   ├── file-validation.interceptor.ts
│   │   ├── upload.module.ts
│   │   └── upload.service.ts
│   └── users
│       ├── dto
│       │   ├── create-endereco.dto.ts
│       │   ├── create-user.dto.ts
│       │   ├── update-endereco.dto.ts
│       │   └── update-user.dto.ts
│       ├── entities
│       │   ├── endereco.entity.ts
│       │   └── user.entity.ts
│       ├── users.controller.ts
│       ├── users.module.ts
│       ├── users.service.spec.ts
│       └── users.service.ts
├── test
│   ├── app.e2e-spec.ts
│   ├── entregadores.e2e-spec.ts
│   ├── jest-e2e.json
│   ├── pedidos.e2e-spec.ts
│   ├── pizzas.e2e-spec.ts
│   └── utils.ts
├── tests
│   └── e2e
│       ├── 01-auth.test.sh
│       ├── 02-users.test.sh
│       ├── 03-enderecos.test.sh
│       ├── 04-pizzas.test.sh
│       ├── 05-catalog.test.sh
│       ├── 06-tables.test.sh
│       ├── 07-orders.test.sh
│       ├── 08-pedidos-legacy.test.sh
│       ├── 09-entregadores.test.sh
│       ├── 10-payments.test.sh
│       ├── run-all.sh
│       └── utils.sh
├── tsconfig.build.json
├── tsconfig.json
└── .vscode
    └── settings.json

55 directories, 159 files
```

---

# 📄 Conteúdo dos Arquivos


## 📝 `eslint.config.mjs`

```
// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs', 'dist/**'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/unbound-method': 'warn',
    },
  },
  {
    files: ['test/**/*.ts', '**/*.spec.ts', '**/*.e2e-spec.ts'],
    rules: {
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/unbound-method': 'off',
    },
  },
);

```

---


## 📝 `generate_project_snapshot.sh`

```bash
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

```

---


## 📝 `Insomnia_Pizza_Express_Complete.yaml`

```yaml
_type: export
__export_format: 4
__export_date: 2025-09-30T23:00:00.000Z
__export_source: insomnia.desktop.app:v8.6.1
resources:
  - _id: req_pizza_list
    parentId: fld_pizzas
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pizzas"
    name: Listar Pizzas
    description: Lista todas as pizzas disponíveis
    method: GET
    body: {}
    parameters: []
    headers: []
    authentication: {}
    metaSortKey: -1727733600000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pizza_create
    parentId: fld_pizzas
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pizzas"
    name: Criar Pizza
    description: Cria uma nova pizza (apenas ADMIN)
    method: POST
    body:
      mimeType: application/json
      text: |
        {
          "nome": "Pizza Margherita",
          "descricao": "Molho de tomate, mussarela e manjericão fresco",
          "preco": 39.90
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733590000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pizza_create_with_image
    parentId: fld_pizzas
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pizzas/with-image"
    name: Criar Pizza com Imagem
    description: Cria pizza com upload de imagem (apenas ADMIN)
    method: POST
    body:
      mimeType: multipart/form-data
      params:
        - name: nome
          value: Pizza Calabresa
          id: pair_1
        - name: descricao
          value: Molho de tomate, mussarela, calabresa e cebola
          id: pair_2
        - name: preco
          value: "42.90"
          id: pair_3
        - name: image
          type: file
          value: ""
          id: pair_4
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733580000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pizza_get_by_id
    parentId: fld_pizzas
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pizzas/1"
    name: Buscar Pizza por ID
    description: Busca uma pizza específica
    method: GET
    body: {}
    parameters: []
    headers: []
    authentication: {}
    metaSortKey: -1727733570000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pizza_update
    parentId: fld_pizzas
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pizzas/1"
    name: Atualizar Pizza
    description: Atualiza uma pizza existente (apenas ADMIN)
    method: PATCH
    body:
      mimeType: application/json
      text: |
        {
          "nome": "Pizza Margherita Premium",
          "descricao": "Molho de tomate especial, mussarela de búfala e manjericão",
          "preco": 45.90
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733560000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pizza_upload_image
    parentId: fld_pizzas
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pizzas/1/upload-image"
    name: Upload Imagem Pizza
    description: Faz upload de imagem para pizza existente (apenas ADMIN)
    method: POST
    body:
      mimeType: multipart/form-data
      params:
        - name: image
          type: file
          value: ""
          id: pair_1
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733550000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pizza_delete
    parentId: fld_pizzas
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pizzas/1"
    name: Deletar Pizza
    description: Remove uma pizza (apenas ADMIN)
    method: DELETE
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733540000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  # AUTH ENDPOINTS
  - _id: req_auth_register
    parentId: fld_auth
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/auth/register"
    name: Registro de Usuário
    description: Registra um novo usuário
    method: POST
    body:
      mimeType: application/json
      text: |
        {
          "nome": "João Silva",
          "email": "joao@example.com",
          "password": "senha123",
          "telefone": "11999999999",
          "enderecos": [
            {
              "cep": "01310-100",
              "tipo": "residencial",
              "logradouro": "Av. Paulista",
              "numero": "1000",
              "bairro": "Bela Vista",
              "cidade": "São Paulo",
              "estado": "SP",
              "principal": true
            }
          ]
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
    authentication: {}
    metaSortKey: -1727733500000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_auth_login
    parentId: fld_auth
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/auth/login"
    name: Login
    description: Faz login com email e senha
    method: POST
    body:
      mimeType: application/json
      text: |
        {
          "email": "joao@example.com",
          "password": "senha123"
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
    authentication: {}
    metaSortKey: -1727733490000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_auth_google
    parentId: fld_auth
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/auth/google"
    name: Login Google
    description: Inicia login com Google OAuth
    method: GET
    body: {}
    parameters: []
    headers: []
    authentication: {}
    metaSortKey: -1727733480000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_auth_me
    parentId: fld_auth
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/me"
    name: Perfil do Usuário
    description: Busca dados do usuário logado
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733470000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  # USERS ENDPOINTS
  - _id: req_users_list
    parentId: fld_users
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/users"
    name: Listar Usuários
    description: Lista todos os usuários (apenas ADMIN)
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733400000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_users_create
    parentId: fld_users
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/users"
    name: Criar Usuário
    description: Cria um novo usuário (apenas ADMIN)
    method: POST
    body:
      mimeType: application/json
      text: |
        {
          "nome": "Maria Santos",
          "email": "maria@example.com",
          "password": "senha123",
          "telefone": "11888888888",
          "role": "CLIENTE",
          "enderecos": [
            {
              "cep": "04038-001",
              "tipo": "residencial",
              "logradouro": "Rua Vergueiro",
              "numero": "2000",
              "bairro": "Vila Mariana",
              "cidade": "São Paulo",
              "estado": "SP",
              "principal": true
            }
          ]
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733390000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_users_get_by_id
    parentId: fld_users
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/users/1"
    name: Buscar Usuário por ID
    description: Busca usuário específico (apenas ADMIN)
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733380000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_users_update
    parentId: fld_users
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/users/1"
    name: Atualizar Usuário
    description: Atualiza dados do usuário
    method: PATCH
    body:
      mimeType: application/json
      text: |
        {
          "nome": "João Silva Santos",
          "telefone": "11999888777"
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733370000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_users_delete
    parentId: fld_users
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/users/1"
    name: Deletar Usuário
    description: Remove um usuário (apenas ADMIN)
    method: DELETE
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733360000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  # PEDIDOS ENDPOINTS
  - _id: req_pedidos_create
    parentId: fld_pedidos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pedidos"
    name: Criar Pedido
    description: Cria um novo pedido
    method: POST
    body:
      mimeType: application/json
      text: |
        {
          "clienteId": 1,
          "enderecoId": 1,
          "pizzasIds": [1, 2],
          "entregadorId": 1,
          "paymentIntentId": "pi_1234567890",
          "observacoes": "Sem cebola na pizza margherita"
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733300000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pedidos_list
    parentId: fld_pedidos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pedidos"
    name: Listar Pedidos
    description: Lista todos os pedidos (apenas ADMIN/FUNCIONARIO)
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733290000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pedidos_my_orders
    parentId: fld_pedidos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pedidos/meus-pedidos"
    name: Meus Pedidos
    description: Lista pedidos do usuário logado
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733280000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pedidos_get_by_id
    parentId: fld_pedidos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pedidos/1"
    name: Buscar Pedido por ID
    description: Busca pedido específico
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733270000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pedidos_update
    parentId: fld_pedidos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pedidos/1"
    name: Atualizar Pedido
    description: Atualiza dados do pedido (apenas ADMIN/FUNCIONARIO)
    method: PATCH
    body:
      mimeType: application/json
      text: |
        {
          "observacoes": "Sem cebola e sem azeitona"
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733260000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pedidos_update_status
    parentId: fld_pedidos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pedidos/1/status"
    name: Atualizar Status do Pedido
    description: Atualiza status do pedido (apenas ADMIN)
    method: PATCH
    body:
      mimeType: application/json
      text: |
        {
          "status": "EM_PREPARO"
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733250000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_pedidos_delete
    parentId: fld_pedidos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/pedidos/1"
    name: Cancelar Pedido
    description: Cancela/remove um pedido
    method: DELETE
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733240000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  # ENTREGADORES ENDPOINTS
  - _id: req_entregadores_list
    parentId: fld_entregadores
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/entregadores"
    name: Listar Entregadores
    description: Lista todos os entregadores (apenas ADMIN/FUNCIONARIO)
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733200000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_entregadores_create
    parentId: fld_entregadores
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/entregadores"
    name: Criar Entregador
    description: Cria um novo entregador (apenas ADMIN)
    method: POST
    body:
      mimeType: application/json
      text: |
        {
          "nome": "Carlos Motoboy",
          "telefone": "11777777777"
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733190000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_entregadores_get_by_id
    parentId: fld_entregadores
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/entregadores/1"
    name: Buscar Entregador por ID
    description: Busca entregador específico (apenas ADMIN/FUNCIONARIO)
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733180000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_entregadores_update
    parentId: fld_entregadores
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/entregadores/1"
    name: Atualizar Entregador
    description: Atualiza dados do entregador (apenas ADMIN)
    method: PATCH
    body:
      mimeType: application/json
      text: |
        {
          "nome": "Carlos Silva Motoboy",
          "telefone": "11777666555"
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733170000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_entregadores_delete
    parentId: fld_entregadores
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/entregadores/1"
    name: Deletar Entregador
    description: Remove um entregador (apenas ADMIN)
    method: DELETE
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733160000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  # ENDERECOS ENDPOINTS
  - _id: req_enderecos_list
    parentId: fld_enderecos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/enderecos"
    name: Meus Endereços
    description: Lista endereços do usuário logado
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733100000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_enderecos_create
    parentId: fld_enderecos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/enderecos"
    name: Criar Endereço
    description: Cria um novo endereço para o usuário logado
    method: POST
    body:
      mimeType: application/json
      text: |
        {
          "cep": "05508-030",
          "tipo": "trabalho",
          "logradouro": "Av. das Nações Unidas",
          "numero": "12901",
          "bairro": "Brooklin",
          "cidade": "São Paulo",
          "estado": "SP",
          "complemento": "Torre Norte, 5º andar",
          "principal": false
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733090000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_enderecos_get_by_id
    parentId: fld_enderecos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/enderecos/1"
    name: Buscar Endereço por ID
    description: Busca endereço específico do usuário
    method: GET
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733080000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_enderecos_update
    parentId: fld_enderecos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/enderecos/1"
    name: Atualizar Endereço
    description: Atualiza dados do endereço
    method: PATCH
    body:
      mimeType: application/json
      text: |
        {
          "numero": "1500",
          "complemento": "Apto 101, Bloco A"
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733070000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_enderecos_delete
    parentId: fld_enderecos
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/enderecos/1"
    name: Deletar Endereço
    description: Remove um endereço do usuário
    method: DELETE
    body: {}
    parameters: []
    headers:
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733060000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  # PAYMENTS ENDPOINTS
  - _id: req_payments_create_intent
    parentId: fld_payments
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/payments/create-intent"
    name: Criar Payment Intent
    description: Cria intenção de pagamento no Stripe
    method: POST
    body:
      mimeType: application/json
      text: |
        {
          "amount": 8290,
          "currency": "brl",
          "metadata": {
            "pedidoId": "1",
            "userId": "1"
          }
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Authorization
        value: Bearer {{ _.auth_token }}
    authentication: {}
    metaSortKey: -1727733000000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  - _id: req_payments_webhook
    parentId: fld_payments
    modified: 1727733600000
    created: 1727733600000
    url: "{{ _.base_url }}/payments/webhook"
    name: Webhook do Stripe
    description: Endpoint para webhooks do Stripe (uso interno)
    method: POST
    body:
      mimeType: application/json
      text: |
        {
          "id": "evt_test_webhook",
          "object": "event",
          "type": "payment_intent.succeeded",
          "data": {
            "object": {
              "id": "pi_test_1234567890",
              "status": "succeeded",
              "amount": 8290,
              "currency": "brl"
            }
          }
        }
    parameters: []
    headers:
      - name: Content-Type
        value: application/json
      - name: Stripe-Signature
        value: "t=1234567890,v1=test_signature"
    authentication: {}
    metaSortKey: -1727732990000
    isPrivate: false
    settingStoreCookies: true
    settingSendCookies: true
    settingDisableRenderRequestBody: false
    settingEncodeUrl: true
    settingRebuildPath: true
    settingFollowRedirects: global
    _type: request

  # FOLDERS
  - _id: fld_pizzas
    parentId: wrk_main
    modified: 1727733600000
    created: 1727733600000
    name: 🍕 Pizzas
    description: Endpoints para gestão de pizzas
    environment: {}
    environmentPropertyOrder: null
    metaSortKey: -1727733600000
    _type: request_group

  - _id: fld_auth
    parentId: wrk_main
    modified: 1727733600000
    created: 1727733600000
    name: 🔐 Autenticação
    description: Endpoints de autenticação e autorização
    environment: {}
    environmentPropertyOrder: null
    metaSortKey: -1727733500000
    _type: request_group

  - _id: fld_users
    parentId: wrk_main
    modified: 1727733600000
    created: 1727733600000
    name: 👥 Usuários
    description: Endpoints para gestão de usuários
    environment: {}
    environmentPropertyOrder: null
    metaSortKey: -1727733400000
    _type: request_group

  - _id: fld_pedidos
    parentId: wrk_main
    modified: 1727733600000
    created: 1727733600000
    name: 📦 Pedidos
    description: Endpoints para gestão de pedidos
    environment: {}
    environmentPropertyOrder: null
    metaSortKey: -1727733300000
    _type: request_group

  - _id: fld_entregadores
    parentId: wrk_main
    modified: 1727733600000
    created: 1727733600000
    name: 🏍️ Entregadores
    description: Endpoints para gestão de entregadores
    environment: {}
    environmentPropertyOrder: null
    metaSortKey: -1727733200000
    _type: request_group

  - _id: fld_enderecos
    parentId: wrk_main
    modified: 1727733600000
    created: 1727733600000
    name: 📍 Endereços
    description: Endpoints para gestão de endereços
    environment: {}
    environmentPropertyOrder: null
    metaSortKey: -1727733100000
    _type: request_group

  - _id: fld_payments
    parentId: wrk_main
    modified: 1727733600000
    created: 1727733600000
    name: 💳 Pagamentos
    description: Endpoints para integração com Stripe
    environment: {}
    environmentPropertyOrder: null
    metaSortKey: -1727733000000
    _type: request_group

  # WORKSPACE AND ENVIRONMENTS
  - _id: wrk_main
    parentId: null
    modified: 1727733600000
    created: 1727733600000
    name: Pizza Express API Complete
    description: Coleção completa da API Pizza Express com todos os endpoints organizados
    scope: collection
    _type: workspace

  - _id: env_main
    parentId: wrk_main
    modified: 1727733600000
    created: 1727733600000
    name: Base Environment
    data:
      base_url: http://localhost:10000
      auth_token: ""
    dataPropertyOrder:
      "&":
        - base_url
        - auth_token
    color: null
    isPrivate: false
    metaSortKey: 1727733600000
    _type: environment

  - _id: env_dev
    parentId: env_main
    modified: 1727733600000
    created: 1727733600000
    name: Development
    data:
      base_url: http://localhost:10000
      auth_token: ""
    dataPropertyOrder:
      "&":
        - base_url
        - auth_token
    color: "#7d69cb"
    isPrivate: false
    metaSortKey: 1727733600000
    _type: environment

  - _id: env_prod
    parentId: env_main
    modified: 1727733600000
    created: 1727733600000
    name: Production
    data:
      base_url: https://pizza-express-backend.vercel.app
      auth_token: ""
    dataPropertyOrder:
      "&":
        - base_url
        - auth_token
    color: "#d9534f"
    isPrivate: false
    metaSortKey: 1727733610000
    _type: environment
```

---


## 📝 `nest-cli.json`

```json
{
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "deleteOutDir": true
  }
}

```

---


## 📝 `package.json`

```json
{
  "name": "backend",
  "version": "0.0.1",
  "description": "",
  "author": "",
  "private": true,
  "license": "UNLICENSED",
  "scripts": {
    "build": "nest build",
    "vercel-build": "prisma generate && nest build",
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/main",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json",
    "postinstall": "prisma generate",
    "seed": "ts-node --compiler-options '{\"module\":\"CommonJS\"}' prisma/seed.ts"
  },
  "dependencies": {
    "@nestjs/common": "^11.0.1",
    "@nestjs/config": "^4.0.2",
    "@nestjs/core": "^11.0.1",
    "@nestjs/jwt": "^11.0.0",
    "@nestjs/mapped-types": "*",
    "@nestjs/passport": "^11.0.5",
    "@nestjs/platform-express": "^11.0.1",
    "@nestjs/platform-socket.io": "^11.1.3",
    "@nestjs/swagger": "^11.2.3",
    "@nestjs/throttler": "^6.4.0",
    "@nestjs/websockets": "^11.1.3",
    "@types/passport-google-oauth20": "^2.0.16",
    "@types/socket.io": "^3.0.1",
    "@vercel/speed-insights": "^1.2.0",
    "bcryptjs": "^3.0.2",
    "class-transformer": "^0.5.1",
    "class-validator": "^0.14.2",
    "cloudinary": "^2.7.0",
    "helmet": "^8.1.0",
    "multer": "^2.0.1",
    "passport": "^0.7.0",
    "passport-google-oauth20": "^2.0.0",
    "passport-jwt": "^4.0.1",
    "qrcode": "^1.5.4",
    "reflect-metadata": "^0.2.2",
    "rxjs": "^7.8.1",
    "socket.io": "^4.8.1",
    "stripe": "^18.5.0",
    "winston": "^3.18.2"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.2.0",
    "@eslint/js": "^9.18.0",
    "@nestjs/cli": "^11.0.7",
    "@nestjs/schematics": "^11.0.0",
    "@nestjs/testing": "^11.0.1",
    "@prisma/client": "^6.13.0",
    "@swc/cli": "^0.6.0",
    "@swc/core": "^1.10.7",
    "@types/express": "^5.0.0",
    "@types/jest": "^29.5.14",
    "@types/multer": "^2.0.0",
    "@types/node": "^22.10.7",
    "@types/passport-jwt": "^4.0.1",
    "@types/qrcode": "^1.5.6",
    "@types/supertest": "^6.0.2",
    "@types/winston": "^2.4.4",
    "@vercel/node": "^2.3.0",
    "eslint": "^9.18.0",
    "eslint-config-prettier": "^10.0.1",
    "eslint-plugin-prettier": "^5.2.2",
    "globals": "^16.0.0",
    "jest": "^29.7.0",
    "prettier": "^3.4.2",
    "prisma": "^6.13.0",
    "source-map-support": "^0.5.21",
    "supertest": "^7.0.0",
    "ts-jest": "^29.2.5",
    "ts-loader": "^9.5.2",
    "ts-node": "^10.9.2",
    "tsconfig-paths": "^4.2.0",
    "typescript": "^5.7.3",
    "typescript-eslint": "^8.20.0"
  },
  "jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      "ts"
    ],
    "rootDir": "src",
    "testRegex": ".*\\.spec\\.ts$",
    "transform": {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    "collectCoverageFrom": [
      "**/*.(t|j)s"
    ],
    "coverageDirectory": "../coverage",
    "testEnvironment": "node"
  }
}

```

---


## 📝 `prisma/migrations/20250720114702_add_new_rules_image/migration.sql`

```sql
-- CreateTable
CREATE TABLE "Pizza" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "preco" DOUBLE PRECISION NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pizza_pkey" PRIMARY KEY ("id")
);

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CLIENTE', 'FUNCIONARIO', 'ADMIN');

-- CreateEnum
CREATE TYPE "StatusPedido" AS ENUM ('PENDENTE', 'EM_PREPARO', 'A_CAMINHO', 'ENTREGUE', 'CANCELADO');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "telefone" TEXT,
    "avatar" TEXT,
    "role" "Role" NOT NULL DEFAULT 'CLIENTE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Endereco" (
    "id" SERIAL NOT NULL,
    "cep" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "logradouro" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "complemento" TEXT,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "pais" TEXT,
    "referencia" TEXT,
    "principal" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" SERIAL NOT NULL,
    "entregadorId" INTEGER,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "enderecoId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" "StatusPedido" NOT NULL,
    "paymentIntentId" TEXT,
    "total" DOUBLE PRECISION,
    "observacoes" TEXT,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entregador" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Entregador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PedidoPizzas" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PedidoPizzas_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "_PedidoPizzas_B_index" ON "_PedidoPizzas"("B");

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "Endereco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_entregadorId_fkey" FOREIGN KEY ("entregadorId") REFERENCES "Entregador"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PedidoPizzas" ADD CONSTRAINT "_PedidoPizzas_A_fkey" FOREIGN KEY ("A") REFERENCES "Pedido"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PedidoPizzas" ADD CONSTRAINT "_PedidoPizzas_B_fkey" FOREIGN KEY ("B") REFERENCES "Pizza"("id") ON DELETE CASCADE ON UPDATE CASCADE;

```

---


## 📝 `prisma/migrations/20251211221547_add_hybrid_architecture_models/migration.sql`

```sql
/*
  Warnings:

  - The primary key for the `_PedidoPizzas` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- CreateEnum
CREATE TYPE "public"."TableStatus" AS ENUM ('AVAILABLE', 'OCCUPIED', 'RESERVED');

-- CreateEnum
CREATE TYPE "public"."OrderType" AS ENUM ('DELIVERY', 'DINE_IN');

-- DropForeignKey
ALTER TABLE "public"."_PedidoPizzas" DROP CONSTRAINT "_PedidoPizzas_A_fkey";

-- AlterTable
ALTER TABLE "public"."Endereco" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "public"."Pedido" ALTER COLUMN "atualizadoEm" DROP DEFAULT;

-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "public"."_PedidoPizzas" DROP CONSTRAINT "_PedidoPizzas_AB_pkey",
ALTER COLUMN "A" SET DATA TYPE TEXT,
ADD CONSTRAINT "_PedidoPizzas_AB_pkey" PRIMARY KEY ("A", "B");

-- CreateTable
CREATE TABLE "public"."Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DECIMAL(10,2) NOT NULL,
    "imageUrl" TEXT,
    "categoryId" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Table" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "status" "public"."TableStatus" NOT NULL DEFAULT 'AVAILABLE',

    CONSTRAINT "Table_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TableSession" (
    "id" TEXT NOT NULL,
    "tableId" TEXT NOT NULL,
    "openedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closedAt" TIMESTAMP(3),
    "total" DECIMAL(10,2) NOT NULL DEFAULT 0,

    CONSTRAINT "TableSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."OrderItem" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "price" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Order" (
    "id" TEXT NOT NULL,
    "type" "public"."OrderType" NOT NULL DEFAULT 'DELIVERY',
    "status" "public"."StatusPedido" NOT NULL,
    "total" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "addressId" TEXT,
    "sessionId" TEXT,
    "userId" INTEGER,
    "entregadorId" INTEGER,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "paymentIntentId" TEXT,
    "observacoes" TEXT,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "public"."Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "public"."Category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Table_number_key" ON "public"."Table"("number");

-- AddForeignKey
ALTER TABLE "public"."Pedido" ADD CONSTRAINT "Pedido_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TableSession" ADD CONSTRAINT "TableSession_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "public"."Table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "public"."Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OrderItem" ADD CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Order" ADD CONSTRAINT "Order_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "public"."TableSession"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_PedidoPizzas" ADD CONSTRAINT "_PedidoPizzas_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

```

---


## 📝 `prisma/migrations/20251211221709_add_hybrid_architecture_models_v2/migration.sql`

```sql
/*
  Warnings:

  - The primary key for the `Order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Order` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `_PedidoPizzas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `orderId` on the `OrderItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_PedidoPizzas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "public"."OrderItem" DROP CONSTRAINT "OrderItem_orderId_fkey";

-- DropForeignKey
ALTER TABLE "public"."_PedidoPizzas" DROP CONSTRAINT "_PedidoPizzas_A_fkey";

-- AlterTable
ALTER TABLE "public"."Order" DROP CONSTRAINT "Order_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Order_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."OrderItem" DROP COLUMN "orderId",
ADD COLUMN     "orderId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."_PedidoPizzas" DROP CONSTRAINT "_PedidoPizzas_AB_pkey",
DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL,
ADD CONSTRAINT "_PedidoPizzas_AB_pkey" PRIMARY KEY ("A", "B");

-- AddForeignKey
ALTER TABLE "public"."OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "public"."Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_PedidoPizzas" ADD CONSTRAINT "_PedidoPizzas_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

```

---


## 📝 `prisma/migrations/20251211222713_fix_address_relationship/migration.sql`

```sql
/*
  Warnings:

  - The `addressId` column on the `Order` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."Order" DROP COLUMN "addressId",
ADD COLUMN     "addressId" INTEGER;

-- AddForeignKey
ALTER TABLE "public"."Order" ADD CONSTRAINT "Order_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "public"."Endereco"("id") ON DELETE SET NULL ON UPDATE CASCADE;

```

---


## 📝 `prisma/migrations/20251228130452_add_order_modifications_and_split_payments/migration.sql`

```sql
/*
  Warnings:

  - You are about to drop the `OrderItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."ItemStatus" AS ENUM ('PENDING', 'CONFIRMED', 'PREPARING', 'READY', 'SERVED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "public"."ModificationAction" AS ENUM ('ITEM_ADDED', 'ITEM_REMOVED', 'ITEM_QUANTITY_INCREASED', 'ITEM_QUANTITY_DECREASED', 'ITEM_CANCELLED', 'ORDER_CREATED', 'ORDER_CANCELLED', 'PAYMENT_ADDED');

-- CreateEnum
CREATE TYPE "public"."PaymentMethod" AS ENUM ('CASH', 'CREDIT_CARD', 'DEBIT_CARD', 'PIX', 'VOUCHER');

-- CreateEnum
CREATE TYPE "public"."PaymentStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED', 'REFUNDED');

-- DropForeignKey
ALTER TABLE "public"."OrderItem" DROP CONSTRAINT "OrderItem_orderId_fkey";

-- DropForeignKey
ALTER TABLE "public"."OrderItem" DROP CONSTRAINT "OrderItem_productId_fkey";

-- AlterTable
ALTER TABLE "public"."Order" ADD COLUMN     "canModify" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "lockedAt" TIMESTAMP(3);

-- DropTable
DROP TABLE "public"."OrderItem";

-- CreateTable
CREATE TABLE "public"."order_items" (
    "id" TEXT NOT NULL,
    "orderId" INTEGER NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "price" DECIMAL(10,2) NOT NULL,
    "status" "public"."ItemStatus" NOT NULL DEFAULT 'PENDING',
    "notes" TEXT,
    "cancelledAt" TIMESTAMP(3),
    "cancelReason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "order_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."order_modifications" (
    "id" TEXT NOT NULL,
    "orderId" INTEGER NOT NULL,
    "action" "public"."ModificationAction" NOT NULL,
    "itemId" TEXT,
    "itemSnapshot" JSONB,
    "previousValue" JSONB,
    "newValue" JSONB,
    "userId" INTEGER,
    "reason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "order_modifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."payments" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT,
    "orderId" INTEGER,
    "amount" DECIMAL(10,2) NOT NULL,
    "method" "public"."PaymentMethod" NOT NULL,
    "status" "public"."PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "externalId" TEXT,
    "paidBy" TEXT,
    "tip" DECIMAL(10,2) DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "order_items_orderId_idx" ON "public"."order_items"("orderId");

-- CreateIndex
CREATE INDEX "order_items_status_idx" ON "public"."order_items"("status");

-- CreateIndex
CREATE INDEX "order_modifications_orderId_idx" ON "public"."order_modifications"("orderId");

-- CreateIndex
CREATE INDEX "order_modifications_createdAt_idx" ON "public"."order_modifications"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "payments_externalId_key" ON "public"."payments"("externalId");

-- CreateIndex
CREATE INDEX "payments_sessionId_idx" ON "public"."payments"("sessionId");

-- CreateIndex
CREATE INDEX "payments_orderId_idx" ON "public"."payments"("orderId");

-- CreateIndex
CREATE INDEX "payments_status_idx" ON "public"."payments"("status");

-- AddForeignKey
ALTER TABLE "public"."order_items" ADD CONSTRAINT "order_items_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "public"."Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."order_items" ADD CONSTRAINT "order_items_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."order_modifications" ADD CONSTRAINT "order_modifications_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "public"."Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."order_modifications" ADD CONSTRAINT "order_modifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."payments" ADD CONSTRAINT "payments_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "public"."TableSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."payments" ADD CONSTRAINT "payments_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "public"."Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

```

---


## 📝 `prisma/migrations/20251228134650_add_split_payment/migration.sql`

```sql
-- CreateTable
CREATE TABLE "public"."SplitPayment" (
    "id" TEXT NOT NULL,
    "orderId" INTEGER NOT NULL,
    "userId" INTEGER,
    "amount" DECIMAL(10,2) NOT NULL,
    "paymentIntentId" TEXT NOT NULL,
    "status" "public"."PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SplitPayment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."SplitPayment" ADD CONSTRAINT "SplitPayment_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "public"."Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SplitPayment" ADD CONSTRAINT "SplitPayment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

```

---


## 📝 `prisma/migrations/migration_lock.toml`

```toml
# Please do not edit this file manually
# It should be added in your version-control system (e.g., Git)
provider = "postgresql"

```

---


## 📝 `prisma/schema.prisma`

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Pizza {
  id        Int      @id @default(autoincrement())
  nome      String
  descricao String?
  preco     Float
  image     String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  pedidos   Pedido[] @relation("PedidoPizzas")
  orders    Order[]  @relation("PedidoPizzas")
}

model User {
  id        Int        @id @default(autoincrement())
  nome      String
  email     String     @unique
  password  String
  telefone  String?
  avatar    String?
  role      Role       @default(CLIENTE)
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
  enderecos Endereco[]
  pedidos   Pedido[]
  orders    Order[]
  splitPayments SplitPayment[]

  // NOVO RELACIONAMENTO
  modifications OrderModification[]
}

model Pedido {
  id              Int          @id @default(autoincrement())
  entregadorId    Int?
  latitude        Float?
  longitude       Float?
  criadoEm        DateTime     @default(now())
  atualizadoEm    DateTime     @updatedAt
  enderecoId      Int
  userId          Int
  status          StatusPedido
  paymentIntentId String?
  total           Float?
  observacoes     String?
  endereco        Endereco     @relation("PedidoEndereco", fields: [enderecoId], references: [id])
  entregador      Entregador?  @relation(fields: [entregadorId], references: [id])
  user            User         @relation(fields: [userId], references: [id])
  pizzas          Pizza[]      @relation("PedidoPizzas")
}

model Entregador {
  id        Int      @id @default(autoincrement())
  nome      String
  telefone  String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  pedidos   Pedido[]
}

model Endereco {
  id          Int      @id @default(autoincrement())
  cep         String
  tipo        String
  logradouro  String
  numero      String
  bairro      String
  complemento String?
  cidade      String
  estado      String
  pais        String?
  referencia  String?
  principal   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  userId      Int
  user        User     @relation(fields: [userId], references: [id])
  pedidos     Pedido[] @relation("PedidoEndereco")
  orders      Order[]
}

// Categorização de Produtos (ex: Pizzas, Bebidas, Sobremesas)
model Category {
  id        String    @id @default(uuid())
  name      String    @unique
  slug      String    @unique
  products  Product[]
  createdAt DateTime  @default(now())
}

// Produto Genérico (Substituirá a tabela Pizza futuramente)
model Product {
  id          String   @id @default(uuid())
  name        String
  description String?
  price       Decimal  @db.Decimal(10, 2)
  imageUrl    String?
  categoryId  String
  category    Category @relation(fields: [categoryId], references: [id])
  active      Boolean  @default(true)

  // Relacionamento com itens de pedido (OrderItems) deve ser migrado
  items       OrderItem[]
}

// Gestão de Mesas Físicas
model Table {
  id        String         @id @default(uuid())
  number    Int            @unique // Identificador visual (Mesa 1, Mesa 2)
  status    TableStatus    @default(AVAILABLE) // Enum: AVAILABLE, OCCUPIED, RESERVED
  sessions  TableSession[]
}

// Sessão de Atendimento (A "Comanda")
model TableSession {
  id        String    @id @default(uuid())
  tableId   String
  table     Table     @relation(fields: [tableId], references: [id])
  openedAt  DateTime  @default(now())
  closedAt  DateTime?
  total     Decimal   @default(0) @db.Decimal(10, 2)
  orders    Order[]   // Pedidos feitos nesta sessão

  // NOVO RELACIONAMENTO
  payments      Payment[]
}

// Item de Pedido (para produtos genéricos)
model OrderItem {
  id        String  @id @default(uuid())
  orderId   Int
  productId String
  quantity  Int     @default(1)
  price     Decimal @db.Decimal(10, 2) // Preço no momento da compra
  order     Order   @relation(fields: [orderId], references: [id])
  product   Product @relation(fields: [productId], references: [id])

  // NOVOS CAMPOS
  status      ItemStatus @default(PENDING)
  notes       String?    // Observações específicas do item
  cancelledAt DateTime?
  cancelReason String?

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([orderId])
  @@index([status])
  @@map("order_items")
}

// Pedido atualizado para ser polimórfico (mantendo id Int por compatibilidade)
model Order {
  id              Int         @id @default(autoincrement())
  type            OrderType   @default(DELIVERY)

  // Campos obrigatórios
  status          StatusPedido
  total           Decimal     @db.Decimal(10, 2)
  createdAt       DateTime    @default(now())
  updatedAt       DateTime    @updatedAt

  // Campos opcionais de contexto
  addressId       Int?        // Obrigatório se DELIVERY
  sessionId       String?     // Obrigatório se DINE_IN (link com TableSession)
  session         TableSession? @relation(fields: [sessionId], references: [id])
  address         Endereco?   @relation(fields: [addressId], references: [id])

  // Usuário se torna opcional (cliente de mesa pode ser anônimo)
  userId          Int?
  user            User?       @relation(fields: [userId], references: [id])

  // Relacionamentos
  items           OrderItem[]

  // NOVOS RELACIONAMENTOS
  modifications OrderModification[]
  payments      Payment[]
  splitPayments SplitPayment[]

  // NOVOS CAMPOS
  canModify     Boolean  @default(true) // Flag para bloquear modificações
  lockedAt      DateTime? // Quando foi bloqueado para modificações

  // Campos legados (para compatibilidade durante migração)
  entregadorId    Int?
  latitude        Float?
  longitude       Float?
  paymentIntentId String?
  observacoes     String?

  // Relacionamentos legados (serão removidos após migração)
  pizzas          Pizza[]     @relation("PedidoPizzas")
}

enum Role {
  CLIENTE
  FUNCIONARIO
  ADMIN
}

enum StatusPedido {
  PENDENTE
  EM_PREPARO
  A_CAMINHO
  ENTREGUE
  CANCELADO
}

enum TableStatus {
  AVAILABLE
  OCCUPIED
  RESERVED
}

enum OrderType {
  DELIVERY
  DINE_IN
}

enum ItemStatus {
  PENDING       // Aguardando confirmação
  CONFIRMED     // Confirmado pela cozinha
  PREPARING     // Em preparo
  READY         // Pronto para servir
  SERVED        // Servido ao cliente
  CANCELLED     // Cancelado
}

enum ModificationAction {
  ITEM_ADDED
  ITEM_REMOVED
  ITEM_QUANTITY_INCREASED
  ITEM_QUANTITY_DECREASED
  ITEM_CANCELLED
  ORDER_CREATED
  ORDER_CANCELLED
  PAYMENT_ADDED
}

enum PaymentMethod {
  CASH
  CREDIT_CARD
  DEBIT_CARD
  PIX
  VOUCHER
}

enum PaymentStatus {
  PENDING
  PROCESSING
  COMPLETED
  FAILED
  REFUNDED
}

// ==========================================
// AUDITORIA DE MODIFICAÇÕES
// ==========================================
model OrderModification {
  id          String   @id @default(uuid())
  orderId     Int
  order       Order    @relation(fields: [orderId], references: [id], onDelete: Cascade)

  action      ModificationAction
  itemId      String?

  // Dados do item modificado (snapshot)
  itemSnapshot Json?

  // Valores antes/depois
  previousValue Json?
  newValue      Json?

  // Contexto da modificação
  userId      Int?
  user        User?    @relation(fields: [userId], references: [id], onDelete: SetNull)
  reason      String?  // Motivo do cancelamento/modificação

  createdAt   DateTime @default(now())

  @@index([orderId])
  @@index([createdAt])
  @@map("order_modifications")
}

// ==========================================
// SPLIT PAYMENT
// ==========================================
model Payment {
  id            String        @id @default(uuid())
  sessionId     String?
  session       TableSession? @relation(fields: [sessionId], references: [id], onDelete: Cascade)

  orderId       Int?
  order         Order?        @relation(fields: [orderId], references: [id], onDelete: SetNull)

  amount        Decimal       @db.Decimal(10, 2)
  method        PaymentMethod
  status        PaymentStatus @default(PENDING)

  // Stripe/External Payment ID
  externalId    String?       @unique

  // Metadata
  paidBy        String?       // Nome de quem pagou
  tip           Decimal?      @default(0) @db.Decimal(10, 2)

  createdAt     DateTime      @default(now())
  completedAt   DateTime?

  @@index([sessionId])
  @@index([orderId])
  @@index([status])
  @@map("payments")
}

// ==================== SPLIT PAYMENT ====================

model SplitPayment {
  id               String        @id @default(uuid())
  orderId          Int
  userId           Int?
  amount           Decimal       @db.Decimal(10, 2)
  paymentIntentId  String
  status           PaymentStatus @default(PENDING)
  createdAt        DateTime      @default(now())
  updatedAt        DateTime      @updatedAt

  order Order @relation(fields: [orderId], references: [id])
  user  User? @relation(fields: [userId], references: [id])
}

```

---


## 📝 `prisma/seed-migration.ts`

```typescript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function migratePizzaToProduct() {
  console.log('🚀 Iniciando migração de Pizza para Product...');

  try {
    // 1. Criar categoria "Pizzas" se não existir
    let pizzaCategory = await prisma.category.findFirst({
      where: { slug: 'pizzas' },
    });

    if (!pizzaCategory) {
      pizzaCategory = await prisma.category.create({
        data: {
          name: 'Pizzas',
          slug: 'pizzas',
        },
      });
      console.log('✅ Categoria "Pizzas" criada');
    }

    // 2. Migrar todas as pizzas para produtos
    const pizzas = await prisma.pizza.findMany();
    console.log(`📊 Encontradas ${pizzas.length} pizzas para migrar`);

    for (const pizza of pizzas) {
      const existingProduct = await prisma.product.findFirst({
        where: { name: pizza.nome },
      });

      if (!existingProduct) {
        await prisma.product.create({
          data: {
            name: pizza.nome,
            description: pizza.descricao,
            price: pizza.preco,
            imageUrl: pizza.image,
            categoryId: pizzaCategory.id,
            active: true,
          },
        });
        console.log(`✅ Pizza "${pizza.nome}" migrada para Product`);
      } else {
        console.log(`⚠️ Produto "${pizza.nome}" já existe, pulando...`);
      }
    }

    console.log('🎉 Migração concluída com sucesso!');
  } catch (error) {
    console.error('❌ Erro durante a migração:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Executar apenas se chamado diretamente
if (require.main === module) {
  migratePizzaToProduct().catch(console.error);
}

export { migratePizzaToProduct };

```

---


## 📝 `prisma/seed-pedidos.ts`

```typescript
import { PrismaClient, StatusPedido } from '@prisma/client';

const prisma = new PrismaClient();

const statuses: StatusPedido[] = [
  'PENDENTE',
  'EM_PREPARO',
  'A_CAMINHO',
  'ENTREGUE',
  'CANCELADO',
];

const nomes = [
  'João Silva',
  'Maria Santos',
  'Carlos Oliveira',
  'Ana Costa',
  'Pedro Ferreira',
  'Juliana Souza',
  'Roberto Alves',
  'Fernanda Lima',
  'Marcos Cesar Domingues',
];

async function main() {
  console.log('🍕 Iniciando seed de pedidos...\n');

  // Buscar usuários clientes existentes (role = CLIENT ou não ADMIN/FUNCIONARIO)
  const usuarios = await prisma.user.findMany({
    where: {
      role: {
        notIn: ['ADMIN', 'FUNCIONARIO'],
      },
    },
    include: {
      enderecos: true,
    },
  });

  if (usuarios.length === 0) {
    console.log('❌ Nenhum usuário cliente encontrado no banco');
    process.exit(1);
  }

  console.log(`✅ Encontrados ${usuarios.length} usuários\n`);

  // Buscar pizzas
  const pizzas = await prisma.pizza.findMany();

  if (pizzas.length === 0) {
    console.log('❌ Nenhuma pizza encontrada no banco');
    process.exit(1);
  }

  console.log(`✅ Encontradas ${pizzas.length} pizzas\n`);

  // Criar 10 pedidos
  for (let i = 0; i < 10; i++) {
    const usuarioAleatorio =
      usuarios[Math.floor(Math.random() * usuarios.length)];
    const enderecoAleatorio =
      usuarioAleatorio.enderecos[0] || usuarioAleatorio.enderecos[0];

    if (!enderecoAleatorio) {
      console.log(`⚠️  Usuário ${usuarioAleatorio.nome} não tem endereço`);
      continue;
    }

    // Selecionar 2-4 pizzas aleatoriamente
    const numPizzas = Math.floor(Math.random() * 3) + 2;
    const pizzasSelecionadas: typeof pizzas = [];
    for (let j = 0; j < numPizzas; j++) {
      const pizza = pizzas[Math.floor(Math.random() * pizzas.length)];
      if (!pizzasSelecionadas.find((p) => p.id === pizza.id)) {
        pizzasSelecionadas.push(pizza);
      }
    }

    const statusAleatorio =
      statuses[Math.floor(Math.random() * statuses.length)];

    const pedido = await prisma.pedido.create({
      data: {
        userId: usuarioAleatorio.id,
        enderecoId: enderecoAleatorio.id,
        status: statusAleatorio,
        observacoes: 'Pedido criado via seed de teste',
        total: Math.floor(Math.random() * 100 + 30), // Valor entre 30 e 130
        pizzas: {
          connect: pizzasSelecionadas.map((p) => ({ id: p.id })),
        },
      },
    });

    console.log(`✅ Pedido #${pedido.id} criado`);
    console.log(`   Cliente: ${usuarioAleatorio.nome}`);
    console.log(`   Status: ${statusAleatorio}`);
    console.log(`   Pizzas: ${pizzasSelecionadas.length}\n`);
  }

  console.log('✅ Seed de pedidos concluído!\n');
  process.exit(0);
}

main()
  .catch((error) => {
    console.error('❌ Erro durante seed:', error);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });

```

---


## 📝 `prisma/seed.ts`

```typescript
import { PrismaClient, StatusPedido } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando seed do banco de dados...');

  // Limpa o banco antes de popular
  await prisma.pedido.deleteMany();
  await prisma.pizza.deleteMany();
  await prisma.entregador.deleteMany();
  await prisma.endereco.deleteMany();
  await prisma.user.deleteMany();

  // === CRIANDO USUÁRIOS SOLICITADOS ===
  const senha = '123'; // Senha fixa como solicitado
  const senhaHash = await bcrypt.hash(senha, 10);

  console.log('Criando usuário ADMIN...');
  // 1. ADMIN
  const adminUser = await prisma.user.create({
    data: {
      nome: 'Administrador',
      email: 'admin@admin.com',
      password: senhaHash,
      telefone: '11999999999',
      role: 'ADMIN',
      enderecos: {
        create: {
          cep: '01000-000',
          tipo: 'comercial',
          logradouro: 'Rua Admin',
          numero: '100',
          bairro: 'Centro',
          cidade: 'São Paulo',
          estado: 'SP',
          principal: true,
        },
      },
    },
  });
  console.log('✅ Usuário ADMIN criado: admin@admin.com / senha: 123');

  console.log('Criando funcionários...');
  // 2. FUNCIONARIO 1
  const funcionario1 = await prisma.user.create({
    data: {
      nome: 'Funcionário 1',
      email: 'funcionario1',
      password: senhaHash,
      telefone: '11888888881',
      role: 'FUNCIONARIO',
      enderecos: {
        create: {
          cep: '02000-001',
          tipo: 'residencial',
          logradouro: 'Rua Funcionário 1',
          numero: '201',
          bairro: 'Vila Funcionário',
          cidade: 'São Paulo',
          estado: 'SP',
          principal: true,
        },
      },
    },
  });

  // 3. FUNCIONARIO 2
  const funcionario2 = await prisma.user.create({
    data: {
      nome: 'Funcionário 2',
      email: 'funcionario2',
      password: senhaHash,
      telefone: '11888888882',
      role: 'FUNCIONARIO',
      enderecos: {
        create: {
          cep: '02000-002',
          tipo: 'residencial',
          logradouro: 'Rua Funcionário 2',
          numero: '202',
          bairro: 'Vila Funcionário',
          cidade: 'São Paulo',
          estado: 'SP',
          principal: true,
        },
      },
    },
  });

  // 4. FUNCIONARIO 3
  const funcionario3 = await prisma.user.create({
    data: {
      nome: 'Funcionário 3',
      email: 'funcionario3',
      password: senhaHash,
      telefone: '11888888883',
      role: 'FUNCIONARIO',
      enderecos: {
        create: {
          cep: '02000-003',
          tipo: 'residencial',
          logradouro: 'Rua Funcionário 3',
          numero: '203',
          bairro: 'Vila Funcionário',
          cidade: 'São Paulo',
          estado: 'SP',
          principal: true,
        },
      },
    },
  });

  console.log('✅ Funcionários criados:');
  console.log('   - funcionario1 / senha: 123');
  console.log('   - funcionario2 / senha: 123');
  console.log('   - funcionario3 / senha: 123');

  // === CRIANDO ALGUNS DADOS BÁSICOS PARA TESTE ===

  console.log('Criando entregadores de exemplo...');
  // Entregadores
  const entregador1 = await prisma.entregador.create({
    data: {
      nome: 'Carlos Motoboy',
      telefone: '11988888888',
    },
  });

  const entregador2 = await prisma.entregador.create({
    data: {
      nome: 'Ana Entregadora',
      telefone: '11999997777',
    },
  });
  console.log('✅ Entregadores criados');

  console.log('Criando pizzas de exemplo...');
  // Pizzas
  const pizza1 = await prisma.pizza.create({
    data: {
      nome: 'Margherita',
      descricao: 'Molho de tomate, mussarela, manjericão',
      preco: 39.9,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    },
  });

  const pizza2 = await prisma.pizza.create({
    data: {
      nome: 'Calabresa',
      descricao: 'Calabresa, cebola, mussarela',
      preco: 44.9,
      image: 'https://images.unsplash.com/photo-1548365328-8b849e6c7b8b',
    },
  });
  console.log('✅ Pizzas criadas');

  // Logs para diagnóstico
  const usuarios = await prisma.user.count();
  const entregadores = await prisma.entregador.count();
  const pizzas = await prisma.pizza.count();
  const pedidos = await prisma.pedido.count();

  console.log('\n🎉 SEED CONCLUÍDO COM SUCESSO!');
  console.log('=====================================');
  console.log('📊 Dados criados:');
  console.log(`   👥 Usuários: ${usuarios}`);
  console.log(`   🏍️  Entregadores: ${entregadores}`);
  console.log(`   🍕 Pizzas: ${pizzas}`);
  console.log(`   📦 Pedidos: ${pedidos}`);
  console.log('');
  console.log('🔐 Credenciais de acesso:');
  console.log('   ADMIN: admin@admin.com / 123');
  console.log('   FUNC1: funcionario1 / 123');
  console.log('   FUNC2: funcionario2 / 123');
  console.log('   FUNC3: funcionario3 / 123');
  console.log('=====================================');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });

```

---

