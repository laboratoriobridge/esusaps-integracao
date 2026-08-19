import type {Root, Text, Strong} from 'mdast';
import type {MdxJsxTextElement} from 'mdast-util-mdx-jsx';
import type {TextDirective} from 'mdast-util-directive';
import {visit} from 'unist-util-visit';
import type {VFile} from 'vfile';

/**
 * Resolve a diretiva `:nr{reset=true bold=false}`, gerada a partir de
 * `{% nr %}` do Jekyll.
 *
 * Em arquivos `.md` comuns (a grande maioria — ~865 dos ~940 usos de `:nr`),
 * a numeração é resolvida em tempo de build, contando dentro da própria
 * árvore: cada arquivo processado pelo unified recebe uma chamada própria
 * com estado zerado, sem risco de um arquivo "vazar" numeração para o
 * próximo (ao contrário do NrTag.rb original, que dependia de um
 * `page[:nrcount]` mutável por render — mas que no Jekyll também incluía
 * inline, via `{% include_relative %}`, qualquer parcial referenciado ANTES
 * do markdown ser processado).
 *
 * Em `.mdx`, porém, um `{% include_relative %}` que apontava pra um trecho
 * com `:nr` virou um IMPORT de componente (ver scripts/migrate-jekyll,
 * toComponentName) — cada `.mdx` é compilado como módulo independente, então
 * o parcial recomeça sua própria contagem do zero, e a numeração final da
 * página duplica ("1, 1, 2, 2, 3..."). Pra esses arquivos, em vez de resolver
 * em build time, emitimos um componente `<NumberedItem/>` (ver
 * src/components/NumberedItem) que resolve o número em tempo de execução,
 * via um contador em Context compartilhado por toda a página (montado em
 * src/theme/MDXContent) — não importa em qual `.mdx` (principal ou
 * parcial importado) o `:nr` foi originalmente escrito.
 */
export default function remarkNumberedItems() {
  return (tree: Root, file: VFile) => {
    const isMdx = file.extname === '.mdx';
    let count = 0;

    visit(tree, 'textDirective', (node: TextDirective, index, parent) => {
      if (node.name !== 'nr') return;
      if (parent == null || index == null) return;

      const reset = node.attributes?.reset === 'true';
      const bold = node.attributes?.bold !== 'false';

      if (isMdx) {
        const attributes = [
          ...(reset ? [{type: 'mdxJsxAttribute' as const, name: 'reset', value: 'true'}] : []),
          ...(bold ? [] : [{type: 'mdxJsxAttribute' as const, name: 'bold', value: 'false'}]),
        ];
        const replacement: MdxJsxTextElement = {
          type: 'mdxJsxTextElement',
          name: 'NumberedItem',
          attributes,
          children: [],
        };
        parent.children[index] = replacement;
        return;
      }

      if (reset) count = 0;
      count += 1;
      const label = `${count}. `;
      const replacement: Strong | Text = bold
        ? {type: 'strong', children: [{type: 'text', value: label}]}
        : {type: 'text', value: `${count}\\. `};
      parent.children[index] = replacement;
    });
  };
}
