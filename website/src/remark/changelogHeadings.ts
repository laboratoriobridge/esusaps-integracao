import path from 'node:path';
import type {Root, Heading} from 'mdast';
import {visit} from 'unist-util-visit';
import {toString as mdastToString} from 'mdast-util-to-string';
import type {VFile} from 'vfile';

/**
 * As páginas de "principais alterações" (LEDI e DW) são changelogs: uma
 * seção por versão e, dentro dela, a lista de alterações daquela versão.
 *
 * No Jekyll o nível de cada heading foi escolhido pelo tamanho da fonte, não
 * pela estrutura — e o menu da direita do Docusaurus (o TOC) é montado a
 * partir justamente do nível do heading, na faixa padrão h2–h3. O resultado
 * herdado da conversão era:
 *
 * - LEDI: as versões são `###`, mas três alterações também ficaram como
 *   `###` em vez de `####` (linhas "1. Atualizações em regras de vacinação",
 *   "2. Atualizações no cadastro individual" e "3. Novas regras para
 *   aplicação do imunobiológico...") — apareciam no TOC lado a lado com as
 *   versões;
 * - DW: TODAS as versões são `####`, abaixo da faixa do TOC — a página não
 *   tinha menu nenhum.
 *
 * Regra: numa página de changelog, heading de versão é h2 — o único nível
 * dentro da faixa do TOC, então o menu da direita lista exatamente uma
 * entrada por versão. Todo heading que não é versão vira h4
 * (deliberadamente pulando h3, que ainda apareceria no menu).
 *
 * Achatar num nível só, em vez de preservar o nível relativo de origem, é
 * proposital: essas páginas são de dois níveis por construção (versão >
 * alteração), e as três alterações que estão um nível acima das outras 59
 * são justamente o erro de digitação herdado do Jekyll — preservar essa
 * diferença seria preservar o defeito, deixando alterações irmãs
 * renderizadas em tamanhos diferentes dentro da mesma versão.
 *
 * Precisa rodar em `beforeDefaultRemarkPlugins`: o TOC é extraído por um
 * plugin interno do @docusaurus/mdx-loader que roda ANTES dos
 * `remarkPlugins` normais, ou seja, enxergaria os níveis originais mesmo
 * depois de reescritos aqui.
 */
const CHANGELOG_BASENAME = 'principais_alteracoes';

/** `Versão 8.4.2` (LEDI) e `Principais alterações da v.5.4.22 para a v.5.4.23 do e-SUS APS:` (DW). */
const VERSION_HEADING_RE = /^(?:\d+\.\s*)?(?:Versão\s+\d|Principais alterações d)/i;

const VERSION_DEPTH = 2;
const CHANGE_DEPTH = 4;

export function isChangelogFile(filePath: string | undefined): boolean {
  if (!filePath) return false;
  return path.basename(filePath).replace(/\.mdx?$/, '') === CHANGELOG_BASENAME;
}

export default function remarkChangelogHeadings() {
  return (tree: Root, file: VFile) => {
    if (!isChangelogFile(file.path)) return;

    const headings: Heading[] = [];
    visit(tree, 'heading', (heading: Heading) => {
      headings.push(heading);
    });

    for (const heading of headings) {
      const isVersion = VERSION_HEADING_RE.test(mdastToString(heading).trim());
      heading.depth = isVersion ? VERSION_DEPTH : CHANGE_DEPTH;
    }
  };
}
