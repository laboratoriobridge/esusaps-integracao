#!/usr/bin/env bash
#
# Publica a saída do Docusaurus (website/build) na raiz deste repositório,
# que é o que o GitHub Pages serve na branch gh-pages.
#
# Substitui o build-site.sh do Jekyll (que clonava esusab-integracao-private
# como submódulo, rodava `jekyll build` e copiava `_site/*` pra raiz), e com
# ele os passos 3.1 a 3.3 do "Tutorial para gerar o site do LEDI".
#
# Uso:
#   cd website && npm run publish        # build + publicação
#   bash scripts/publish-site.sh         # só publicação (build já feito)
#
# O que NUNCA é tocado:
#   - v<versão>/  — snapshots de versões já publicadas, HTML congelado
#   - website/, scripts/, .git/, .github/ e qualquer arquivo .md da raiz
#
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BUILD_DIR="$REPO_ROOT/website/build"

if [[ ! -d "$BUILD_DIR" ]]; then
  echo "erro: $BUILD_DIR não existe — rode 'npm run build' em website/ primeiro." >&2
  exit 1
fi

# Sobras do site Jekyll. Só existem até o primeiro publish depois do
# corte; a partir daí a lista não casa com nada e o loop é inócuo.
LEGACY_ENTRIES=(
  css fonts js docs
  Rakefile search.json build-site.sh
)

# Nada aqui pode ser removido, aconteça o que acontecer: é a rede de
# proteção pro caso de o build passar a emitir um nome que colida com
# fonte ou com as versões congeladas.
is_protected() {
  case "$1" in
    .|..|.git|.github|.gitignore|website|scripts|*.md) return 0 ;;
    v[0-9]*) return 0 ;;
    *) return 1 ;;
  esac
}

remove_entry() {
  local name="$1"
  if is_protected "$name"; then
    echo "  (protegido, mantido) $name"
    return
  fi
  if [[ -e "$REPO_ROOT/$name" || -L "$REPO_ROOT/$name" ]]; then
    echo "  removendo $name"
    rm -rf "${REPO_ROOT:?}/$name"
  fi
}

echo "Limpando a publicação anterior na raiz de $REPO_ROOT"
# Tudo que o build gera hoje (some antes de ser recopiado, pra páginas
# apagadas do conteúdo não sobreviverem como HTML órfão)...
while IFS= read -r -d '' entry; do
  remove_entry "$(basename "$entry")"
done < <(find "$BUILD_DIR" -mindepth 1 -maxdepth 1 -print0)
# ...e o que o Jekyll gerava e o Docusaurus não gera mais.
for entry in "${LEGACY_ENTRIES[@]}"; do
  remove_entry "$entry"
done

echo "Copiando $BUILD_DIR -> $REPO_ROOT"
# O ponto-barra final e o `-a` preservam os arquivos ocultos (.nojekyll).
cp -a "$BUILD_DIR/." "$REPO_ROOT/"

echo
echo "Pronto. Confira com 'git status' e valide a navegação antes de commitar:"
echo "  - a raiz (index.html) abre a página de integração;"
echo "  - /ledi, /dw e /sistemas_externos abrem as respectivas documentações;"
echo "  - as pastas v<versão> continuam intactas."
