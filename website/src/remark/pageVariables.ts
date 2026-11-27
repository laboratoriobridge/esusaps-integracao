import type {Root, Text} from 'mdast';
import type {TextDirective} from 'mdast-util-directive';
import {visit} from 'unist-util-visit';
import type {VFile} from 'vfile';

/**
 * Resolve a diretiva `:page{field=nome}`, gerada a partir de
 * `{{ page.nome }}` do Jekyll (raro: só usado nas páginas de Termos de Uso,
 * pra não repetir "5.4.16"/"02/10/2025" várias vezes na mesma página).
 * Interpola o campo do front matter DESTA página em tempo de build — o
 * mdx-loader do Docusaurus anexa o front matter cru (antes de qualquer
 * validação do plugin-content-docs) em `file.data.frontMatter`, então o
 * campo só precisa existir no front matter do próprio arquivo, sem exigir
 * um mecanismo de dados à parte.
 */
export default function remarkPageVariables() {
  return (tree: Root, file: VFile) => {
    const frontMatter = (file.data as {frontMatter?: Record<string, unknown>}).frontMatter ?? {};

    visit(tree, 'textDirective', (node: TextDirective, index, parent) => {
      if (node.name !== 'page') return;
      if (parent == null || index == null) return;

      const field = node.attributes?.field;
      if (!field) {
        throw new Error(`[remarkPageVariables] diretiva :page sem atributo "field" em ${file.path}`);
      }

      const value = frontMatter[field];
      if (value === undefined || value === null || typeof value === 'object') {
        throw new Error(
          `[remarkPageVariables] campo "${field}" ausente (ou não escalar) no front matter de ${file.path}`,
        );
      }

      const replacement: Text = {type: 'text', value: String(value)};
      parent.children[index] = replacement;
    });
  };
}
