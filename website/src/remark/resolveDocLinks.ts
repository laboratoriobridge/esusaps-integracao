import type {Root, Link, Text, PhrasingContent} from 'mdast';
import type {TextDirective} from 'mdast-util-directive';
import {visit} from 'unist-util-visit';
import type {VFile} from 'vfile';
import {resolveDocById, resolveAnchor} from '../../scripts/contentGraph';
import {buildAnchorAliasMap} from '../../scripts/anchorSlug';

/**
 * As quatro collections deste site (integracao/ledi/dw/sistemas_externos)
 * são fechadas em si mesmas: nenhum `:link`/`:url` aponta pra fora delas
 * (verificado na migração). Por isso aqui o padrão é ESTRITO — um id não
 * resolvido derruba o build, igual ao AutolinkTag.rb do Jekyll, em vez de
 * publicar silenciosamente um link virado texto. Só releve
 * (DOCS_STRICT_LINKS=false) durante uma sincronização de conteúdo em
 * andamento, quando o esus-aps-doc já referencia algo ainda não trazido
 * pra cá.
 */
const STRICT_LINKS = process.env.DOCS_STRICT_LINKS !== 'false';

function plainText(children: PhrasingContent[], fallback: string): string {
  const text = children.find((child): child is Text => child.type === 'text');
  return text?.value ?? fallback;
}

/**
 * Resolve as diretivas `:link[Título]{id=alvo}` e `:url{id=alvo}`, geradas
 * pelo script de conversão a partir de `{% link %}`/`{% url %}` do Jekyll.
 */
export default function remarkResolveDocLinks() {
  return (tree: Root, file: VFile) => {
    // Links markdown crus pra âncora da própria página (`[texto](#anchor)`)
    // carregam o anchor "à moda kramdown" herdado do Jekyll (ver
    // anchorSlug.ts) — resolve contra os headings desta mesma árvore, sem
    // precisar ir até o contentGraph (a página já está com a gente aqui).
    const localAnchorAliases = buildAnchorAliasMap(tree);
    visit(tree, 'link', (node: Link) => {
      if (!node.url.startsWith('#')) return;
      const legacyAnchor = node.url.slice(1);
      const realAnchor = localAnchorAliases.get(legacyAnchor);
      if (realAnchor) node.url = `#${realAnchor}`;
    });

    visit(tree, 'textDirective', (node: TextDirective, index, parent) => {
      if (node.name !== 'link' && node.name !== 'url') return;
      if (parent == null || index == null) return;

      const id = node.attributes?.id;
      if (!id) {
        throw new Error(`[remarkResolveDocLinks] diretiva :${node.name} sem atributo "id" em ${file.path}`);
      }

      const target = resolveDocById(id);
      if (!target) {
        const message = `link não encontrado: id "${id}" (referenciado em ${file.path})`;
        if (STRICT_LINKS) {
          throw new Error(`[remarkResolveDocLinks] ${message}`);
        }
        console.warn(`[remarkResolveDocLinks] [aviso] ${message} — mantendo texto original`);
        const fallback: Text = {type: 'text', value: plainText(node.children, id)};
        parent.children[index] = fallback;
        return;
      }

      const rawAnchor = node.attributes?.anchor;
      const anchor = rawAnchor ? resolveAnchor(id, rawAnchor) : undefined;
      const url = anchor ? `${target.url}#${anchor}` : target.url;

      if (node.name === 'url') {
        const replacement: Text = {type: 'text', value: url};
        parent.children[index] = replacement;
        return;
      }

      const label = node.children.length > 0 ? node.children : [{type: 'text', value: target.title} as Text];
      const replacement: Link = {type: 'link', url, children: label};
      parent.children[index] = replacement;
    });
  };
}
