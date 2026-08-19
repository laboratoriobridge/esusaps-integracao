import path from 'node:path';
import type {Root, Heading} from 'mdast';
import {visit} from 'unist-util-visit';
import {toString as mdastToString} from 'mdast-util-to-string';
import type {VFile} from 'vfile';
import {isChangelogFile} from './changelogHeadings';

/**
 * O tema do Docusaurus nunca dá `id` pra heading `depth === 1` — "H1
 * headings do not need an id because they don't appear in the TOC"
 * (@docusaurus/theme-classic/theme/Heading). No Jekyll convertido, porém,
 * `# 1. Objetivo`/`## 1.1 Sub-item`/`### 1.1.1 Sub-sub-item` são só a
 * numeração de SEÇÃO da página (a página não tem um h1 "de título"
 * separado — o título já vem do front matter), não headings "de página" de
 * verdade. Qualquer `{% link %}`/`{% url %}` do Jekyll com `#anchor`
 * apontando pra uma dessas seções é permanentemente inalcançável em
 * Docusaurus, não importa o texto do anchor.
 *
 * Rebaixa em um nível qualquer heading que pareça seção numerada ("1.
 * Título" h1→h2, "1.1 Título" h2→h3, "1.1.1 Título" h3→h4, e assim
 * sucessivamente) — assim ganham `id`/TOC — e deixa qualquer heading não
 * numerado (raro, mas existe: títulos de tabela avulsos como "# Acessos")
 * como está.
 *
 * Exceção: /ledi/documentacao/estrutura_arquivos/* usa números como parte
 * do nome de campos de dicionário de dados (ex. "### #1 headerTransport"),
 * não como numeração de seção — a hierarquia de headings ali é
 * intencional e não deve ser mexida.
 *
 * Exceção: as páginas de "principais alterações" têm hierarquia própria,
 * definida por src/remark/changelogHeadings.ts — aplicar os dois em cima
 * da mesma página desfaria o que aquele plugin acabou de arrumar.
 */
const NUMBERED_HEADING_RE = /^\d+(?:\.\d+)*\.?\s/;
const EXCLUDED_PATH_SEGMENT = '/ledi/documentacao/estrutura_arquivos/';

export default function remarkDemoteNumberedHeadings() {
  return (tree: Root, file: VFile) => {
    if (file.path?.split(path.sep).join('/').includes(EXCLUDED_PATH_SEGMENT)) return;
    if (isChangelogFile(file.path)) return;

    visit(tree, 'heading', (heading: Heading) => {
      if (heading.depth >= 6) return;
      const text = mdastToString(heading);
      if (NUMBERED_HEADING_RE.test(text)) {
        heading.depth = (heading.depth + 1) as Heading['depth'];
      }
    });
  };
}
