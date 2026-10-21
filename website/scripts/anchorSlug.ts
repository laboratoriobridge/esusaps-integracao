import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remarkDirective from 'remark-directive';
import {visit} from 'unist-util-visit';
import {toString as mdastToString} from 'mdast-util-to-string';
import {createSlugger} from '@docusaurus/utils';
import type {Root, Heading} from 'mdast';

/**
 * O kramdown do Jekyll (auto_ids) gerava anchors de heading removendo
 * acentos/pontuação como um bloco só, virando um único "-": "Atendimento
 * Vacinação" -> "atendimento-vacina-o" (o "çã" inteiro colapsa num hífen).
 * Os `{% link id#anchor %}` originais foram escritos à mão pelos autores
 * olhando esse resultado renderizado. O github-slugger do Docusaurus, por
 * outro lado, remove só a pontuação e preserva acentos: mesmo heading vira
 * "atendimento-vacinação". Resultado: qualquer anchor herdado do Jekyll que
 * tenha acento aponta pro id errado no build novo — não por erro de
 * conteúdo, é só os dois slugifiers divergindo. `legacyKramdownSlug` replica
 * o algoritmo antigo pra permitir mapear "anchor de anchor".
 */
function legacyKramdownSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Varre os headings de uma árvore mdast já parseada e monta o mapa
 * "anchor à moda kramdown" -> "id real gerado pelo github-slugger", na
 * mesma ordem em que os headings aparecem (importante: o slugger é stateful
 * e sufixa duplicatas como "-1", "-2", igual o Docusaurus faz).
 */
export function buildAnchorAliasMap(root: Root): Map<string, string> {
  const slugger = createSlugger();
  const map = new Map<string, string>();
  visit(root, 'heading', (heading: Heading) => {
    const text = mdastToString(heading);
    const realId = slugger.slug(text);
    const legacyId = legacyKramdownSlug(text);
    // Primeira ocorrência vence — igual ao kramdown/slugger, que também não
    // reprocessam uma id já usada.
    if (!map.has(legacyId)) map.set(legacyId, realId);
  });
  return map;
}

/**
 * Mesma coisa, mas a partir do markdown cru (usado pelo contentGraph, que
 * não tem a árvore mdast já parseada de outra página à mão).
 */
export function anchorAliasMapFromMarkdown(content: string): Map<string, string> {
  // remark-directive entra aqui só pra árvore de parsing não tropeçar nas
  // diretivas `:link`/`:nr` do conteúdo — headings não são afetados por
  // isso, é só pra evitar que ":texto" vire ruído em volta de um heading.
  const tree = unified().use(remarkParse).use(remarkDirective).parse(content) as Root;
  return buildAnchorAliasMap(tree);
}
