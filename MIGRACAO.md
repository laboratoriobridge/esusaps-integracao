# Migração do site de integração: Jekyll → Docusaurus

Esta branch inicia a migração do site publicado em
<https://integracao.esusaps.bridge.ufsc.tech> do Jekyll para o Docusaurus,
seguindo as mesmas premissas usadas na migração do **esus-aps-doc**
(branch `docusaurus-migration`, pasta `website/`).

O site ainda **não** foi cortado: o HTML Jekyll continua publicado na raiz
deste repositório. O que existe hoje é o projeto Docusaurus completo em
`website/`, que já gera um site equivalente ao atual.

## Como o site era gerado

Pelo "Tutorial para gerar o site do LEDI":

1. as collections `_ledi`, `_dw` e `_sistemas_externos` eram copiadas de
   **esus-aps-doc** para **esusab-integracao-private**;
2. lá se removia `dicionario-epa.md` e todos os `*-piloto.md`, tirava-se o
   `parent: integracao` dos `index.md` e atualizava-se `version:` no
   `_config.yml`;
3. `jekyll build` gerava `docs/_site`, cujo conteúdo era copiado à mão para
   a raiz **deste** repositório (`build-site.sh` automatizava parte disso);
4. a versão anterior era congelada numa pasta `v<versão>`.

## Como fica com o Docusaurus

O repositório privado deixa de ser necessário como intermediário: o
conteúdo já convertido vive em **esus-aps-doc**
(`website/collections/{integracao,ledi,dw,sistemas_externos}`), que segue
sendo a **fonte de verdade** do conteúdo, e é trazido para
`website/collections/` aqui.

Os passos 2 e 3 viram configuração e código versionado:

| Passo do tutorial | Onde vive agora |
|---|---|
| Remover `dicionario-epa.md` e `*-piloto.md` | filtro aplicado ao sincronizar o conteúdo (ver abaixo) |
| Remover `parent: integracao` dos `index.md` | desnecessário: a collection `integracao` é a raiz do site (`routeBasePath: ''`) |
| `version:` do `_config.yml` | `SITE_VERSION` em `website/src/data/integracao.ts` |
| `jekyll build` + cópia manual de `_site/*` | `npm run publish` (`scripts/publish-site.sh`) |
| `pdf.html` (Rakefile) | página `/print` + botão "Imprimir" no breadcrumb |
| `search.html` + `search.json` | busca local (`@easyops-cn/docusaurus-search-local`) |
| Congelar `v<versão>` | inalterado — as pastas `v<versão>` nunca são tocadas |

## Estrutura

```
website/
  collections/
    integracao/          # raiz do site  -> /
    ledi/                # -> /ledi
    dw/                  # -> /dw
    sistemas_externos/   # -> /sistemas_externos
  scripts/
    contentGraph.ts              # árvore de navegação a partir do front matter
    anchorSlug.ts                # âncoras "à moda kramdown" -> github-slugger
    generate-jekyll-redirects.ts # mapa de URLs antigas (.html) -> novas
  src/
    remark/     # regras de conversão em tempo de build (ver abaixo)
    theme/      # breadcrumb + botão de impressão, paginação em pt-BR
    components/, utils/, pages/print/   # seleção e impressão de páginas
    data/integracao.ts                  # rótulos e SITE_VERSION
scripts/publish-site.sh   # website/build -> raiz do repositório
v<versão>/                # HTML congelado de versões anteriores — não migrar
```

### Regras de conversão aplicadas no build

O conteúdo em `collections/` é sincronizado do esus-aps-doc sem edição
manual, então tudo que precisa ser ajustado vira **regra** — assim a próxima
sincronização não desfaz o ajuste. As regras se dividem em dois lugares:

- **no conversor do esus-aps-doc** (`website/scripts/migrate-jekyll/`), para
  o que é forma do conteúdo — é lá, por exemplo, que
  `normalizeChangelogHeadings` põe cada versão do changelog num nível de
  heading que entra no menu da direita, e `normalizeSpacelessHeadings`
  conserta o heading ATX sem espaço que o kramdown aceitava e o CommonMark
  não;
- **aqui, em `website/src/remark/`**, para o que depende de resolver contra
  a árvore de documentos deste site:

| Plugin | O que resolve |
|---|---|
| `resolveDocLinks` | `:link{}`/`:url{}` (as tags `{% link %}`/`{% url %}` do Jekyll) e âncoras "à moda kramdown" |
| `numberedItems` | `:nr` (numeração automática de itens) |
| `pageVariables` | `:page{field=…}` (`{{ page.x }}` do Jekyll) |
| `demoteNumberedHeadings` | `# 1. Objetivo` era numeração de seção, não título de página — rebaixa um nível para ganhar `id` próprio |

Uma sutileza que vale conhecer antes de mexer em nível de heading: o menu da
direita é extraído por um plugin interno do `@docusaurus/mdx-loader` que roda
**antes** dos `remarkPlugins` normais. Ou seja, quem decide o que entra no
menu é o nível gravado no arquivo convertido — `demoteNumberedHeadings`, que
roda depois, muda o `id` e a tag renderizada, não o menu. Por isso a
normalização dos changelogs é regra do conversor, e não um plugin remark
daqui.

### Diferenças em relação ao esus-aps-doc

- A collection `integracao` é a **instância default** do preset classic e
  ocupa a raiz (`/`), não `/integracao`. Por isso não há
  `src/pages/index.tsx` aqui, e o `DocBreadcrumbs` não precisa reconstruir
  o nível "Integração e-SUS APS" (ele é o próprio Home).
- `DOCS_STRICT_LINKS` vem **ligado** por padrão: as quatro collections são
  fechadas em si mesmas (nenhum `:link`/`:url` aponta pra fora), então um id
  não resolvido é erro de verdade e derruba o build.
- Existe o selo de versão na navbar, herdado do cabeçalho Jekyll.
- Não existe `scripts/migrate-jekyll/`: a conversão de Liquid → MDX já foi
  feita no esus-aps-doc; aqui só se sincroniza o resultado.

## Comandos

```bash
cd website
nvm use            # Node 20 (ver .nvmrc)
npm install
npm start          # desenvolvimento em http://localhost:3000
npm run build      # gera website/build
npm run publish    # build + publica na raiz do repositório
npm run generate:redirects   # regenera src/data/jekyllRedirects.json
npm run typecheck
```

Com Docker: `cd website && docker compose up`.

## Sincronizar conteúdo do esus-aps-doc

```bash
SRC=../esus-aps-doc/website/collections
rm -rf website/collections/{integracao,ledi,dw,sistemas_externos}
cp -r $SRC/{integracao,ledi,dw,sistemas_externos} website/collections/
# passo 2.7 do tutorial: conteúdo piloto não vai para o site público
find website/collections \( -name '*-piloto.*' -o -name 'dicionario-epa.*' \) -delete
(cd website && npm run generate:redirects && npm run build)
```

## Estado atual

Já validado:

- `npm run build` e `npm run typecheck` passam; o build reporta um único
  `onBrokenLinks` (o PDF do CADSUS, item 6 abaixo);
- menu da direita das páginas de "principais alterações": 30 versões (LEDI)
  e 21 versões (DW), uma entrada por versão e nada além disso;
- 360 rotas geradas, cobrindo as 193 páginas hoje publicadas fora das
  pastas `v<versão>` (mesma árvore de navegação, mesmos títulos);
- 167 redirecionamentos de URL antiga (`.html`) para a nova, com origem e
  destino conferidos contra o build — nenhuma URL hoje no ar fica órfã;
- `CNAME` e `.nojekyll` saem no build (`website/static/`).

Em aberto antes do corte:

1. **Revisão visual** página a página comparando com o site atual — o tema
   muda (Infima no lugar do tema Jekyll), então convém conferir tabelas
   largas, imagens e a página `/print`.
2. **Deploy**: definir se a publicação continua sendo commit do HTML na
   `gh-pages` (via `scripts/publish-site.sh`) ou se passa a ser um GitHub
   Action que roda o build. Hoje não existe workflow neste repositório.
3. **Corte**: remover da raiz o HTML Jekyll (`css/`, `fonts/`, `js/`,
   `docs/`, `ledi/`, `dw/`, `sistemas_externos/`, `index.html`, `pdf.html`,
   `search.html`, `search.json`, `Rakefile`, `build-site.sh`) e publicar o
   build. O `publish-site.sh` já faz essa limpeza, preservando as pastas
   `v<versão>`.
4. **Congelar a versão atual** em `v850/` antes do corte, seguindo o passo 1
   do tutorial — o processo de versionamento não muda com o Docusaurus.
5. **Conferir a versão no corte.** O conteúdo em `collections/` está no
   **LEDI 8.7.0** (sincronizado do esus-aps-doc), enquanto o site Jekyll no
   ar ainda publica a **8.5.0** — `SITE_VERSION` acompanha o conteúdo
   empacotado, não o que está no ar. Confirmar qual das duas deve ir pro ar
   no corte.
6. **Link do PDF de Especificação CADSUS.** Em
   `ledi/documentacao/referencias/dicionario`, o link para
   `Especificacao_CADSUS.pdf` está como HTML cru
   (`<a href="Especificacao_CADSUS.pdf">`) no conteúdo do esus-aps-doc. HTML
   cru não passa pelo webpack, então o arquivo não é empacotado e o link
   aponta pra um caminho que não existe no build — é o único
   `onBrokenLinks` que o build reporta. Voltar para link markdown
   (`[![](img/pdf.jpg)](Especificacao_CADSUS.pdf "…")`, como estava antes)
   resolve; é conteúdo, então a correção é no esus-aps-doc.
