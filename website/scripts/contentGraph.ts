import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import {anchorAliasMapFromMarkdown} from './anchorSlug';

// Registro das collections que compõem o site de integração. Cada entrada
// nova aqui passa a participar automaticamente da árvore global de
// navegação e da resolução de {% link %}/{% url %} — sem precisar duplicar
// lógica.
//
// O conteúdo destas collections é a saída da migração feita em
// esus-aps-doc (website/collections/{integracao,ledi,dw,sistemas_externos}),
// que é a fonte de verdade — este repositório só publica. Ver
// ../../MIGRACAO.md.
export interface CollectionConfig {
  name: string;
  sourceDir: string; // relativo à raiz de website/
  /** Prefixo de rota. String vazia = raiz do site. */
  routeBasePath: string;
}

export const COLLECTIONS: CollectionConfig[] = [
  // "integracao" é a instância default do preset classic e ocupa a RAIZ do
  // site: no Jekyll, o index.html publicado em
  // integracao.esusaps.bridge.ufsc.tech/ é o _integracao/index.md (ver o
  // passo 3.2 do tutorial de publicação, que copia _site/index.html pra
  // raiz do repositório). Por isso, diferente do esus-aps-doc, aqui não
  // existe /integracao/ nem uma home em src/pages/index.tsx.
  {name: 'integracao', sourceDir: 'collections/integracao', routeBasePath: ''},
  {name: 'ledi', sourceDir: 'collections/ledi', routeBasePath: 'ledi'},
  {name: 'dw', sourceDir: 'collections/dw', routeBasePath: 'dw'},
  {name: 'sistemas_externos', sourceDir: 'collections/sistemas_externos', routeBasePath: 'sistemas_externos'},
];

/** Collection servida pela instância default do preset classic. */
export const DEFAULT_COLLECTION = 'integracao';

/**
 * `routeBasePath` no formato que o plugin-content-docs espera: guardamos ''
 * para a raiz (para o `filter(Boolean)` do cálculo de `url` funcionar), mas
 * o Docusaurus exige '/' nesse caso.
 */
export function docusaurusRouteBasePath(collection: CollectionConfig): string {
  return collection.routeBasePath === '' ? '/' : collection.routeBasePath;
}

interface DocNode {
  id: string;
  /**
   * Id interno real do Docusaurus para este doc: sempre
   * `<diretório>/<id>` quando o arquivo está numa subpasta, mesmo com
   * `id` explícito no front matter (comportamento documentado como
   * "legado" no próprio plugin-content-docs). Usado só nas referências
   * de sidebar (`link: {type: 'doc', id}`) — a resolução de
   * `{% link %}`/`{% url %}` usa `url`, calculada por nós, e continua
   * baseada no `id` "puro" do Jekyll.
   */
  docusaurusId: string;
  title: string;
  order: number;
  parent: string | null;
  published: boolean;
  // `draft: true` (distinto de `published: false`) é respeitado nativamente
  // pelo plugin-content-docs do Docusaurus: o doc não gera HTML no build de
  // produção e some da navegação, mas continua em `byId`/`roots` porque
  // outras coisas (ex. resolução de `{% link %}`) podem referenciá-lo. Só
  // getPrintIndex() filtra por isso: buildSidebarFor()/getMainDocId() já
  // não alcançam essas raízes por outro caminho (não aparecem no
  // menu/navbar), então nunca precisaram filtrar.
  draft: boolean;
  collection: string;
  relPath: string;
  absFile: string;
  url: string;
  children: DocNode[];
}

export interface SidebarCategoryItem {
  type: 'category';
  label: string;
  link: {type: 'doc'; id: string};
  items: SidebarItem[];
}
export interface SidebarLinkItem {
  type: 'link';
  label: string;
  href: string;
}
export type SidebarItem = string | SidebarCategoryItem | SidebarLinkItem;

const WEBSITE_ROOT = path.resolve(__dirname, '..');

let cachedGraph: {byId: Map<string, DocNode>; roots: DocNode[]} | null = null;

function walkMarkdownFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    // Arquivos/pastas com "_" na frente são partials (ex.: convertidos de
    // {% include_relative %}), mesma convenção que o próprio Docusaurus usa
    // para excluir arquivos do roteamento.
    if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue;
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkMarkdownFiles(abs));
    } else if (/\.(md|mdx)$/.test(entry.name)) {
      results.push(abs);
    }
  }
  return results;
}

// Replica @docusaurus/plugin-content-docs: o id interno do doc é sempre
// `<dirname-relativo>/<id>`, mesmo com `id` explícito no front matter.
function computeDocusaurusId(relPath: string, jekyllId: string): string {
  const dirName = path.dirname(relPath).split(path.sep).join('/');
  return dirName === '.' ? jekyllId : `${dirName}/${jekyllId}`;
}

/**
 * Replica @docusaurus/plugin-content-docs/lib/slug.js exatamente: sem
 * `slug:` explícito no front matter (não usamos), o slug é o `id` do front
 * matter (não o nome do arquivo!) acrescido do diretório — a menos que o
 * arquivo seja um "index" de categoria (`index`, `readme`, ou
 * `<pasta>/<pasta>.md`), caso em que o slug é só o diretório.
 */
function slugFor(relPath: string, jekyllId: string): string {
  const dirName = path.dirname(relPath).split(path.sep).join('/');
  const fileName = path.basename(relPath).replace(/\.(mdx|md)$/, '');
  const parentDirName = dirName === '.' ? '' : dirName.split('/').pop()!;

  const isCategoryIndex =
    fileName.toLowerCase() === 'index' ||
    fileName.toLowerCase() === 'readme' ||
    fileName.toLowerCase() === parentDirName.toLowerCase();

  if (isCategoryIndex) {
    return dirName === '.' ? '' : dirName;
  }
  return dirName === '.' ? jekyllId : `${dirName}/${jekyllId}`;
}

function buildGraph() {
  if (cachedGraph) return cachedGraph;

  const byId = new Map<string, DocNode>();

  for (const collection of COLLECTIONS) {
    const absDir = path.join(WEBSITE_ROOT, collection.sourceDir);
    if (!fs.existsSync(absDir)) continue;

    for (const absFile of walkMarkdownFiles(absDir)) {
      const relPath = path.relative(absDir, absFile);
      const {data} = matter(fs.readFileSync(absFile, 'utf8'));

      if (!data.id) {
        throw new Error(`[contentGraph] campo "id" ausente no front matter de ${absFile}`);
      }
      if (!data.title) {
        throw new Error(`[contentGraph] campo "title" ausente no front matter de ${absFile}`);
      }
      if (byId.has(data.id)) {
        const other = byId.get(data.id)!;
        throw new Error(
          `[contentGraph] id duplicado "${data.id}": ${absFile} e ${other.collection}/${other.relPath}`,
        );
      }

      const slug = slugFor(relPath, data.id);
      const url = '/' + [collection.routeBasePath, slug].filter(Boolean).join('/');
      const order = Number(data.order);

      byId.set(data.id, {
        id: data.id,
        docusaurusId: computeDocusaurusId(relPath, data.id),
        title: data.title,
        order: Number.isFinite(order) ? order : 1,
        parent: data.parent ?? null,
        published: data.published !== false,
        draft: data.draft === true,
        collection: collection.name,
        relPath,
        absFile,
        url,
        children: [],
      });
    }
  }

  const roots: DocNode[] = [];
  for (const node of byId.values()) {
    if (node.parent == null) {
      roots.push(node);
      continue;
    }
    const parentNode = byId.get(node.parent);
    if (!parentNode) {
      // O NavGenerator.rb original ignora silenciosamente um "parent"
      // inexistente (a página some da navegação sem aviso — um bug de
      // conteúdo pré-existente no Jekyll, não introduzido por esta
      // conversão). Viramos root em vez de derrubar o build: assim a
      // página ao menos aparece na sidebar, em vez de sumir sem ninguém
      // perceber como acontecia antes.
      console.warn(
        `[contentGraph] [aviso] "${node.id}" (${node.collection}/${node.relPath}) referencia parent "${node.parent}", que não existe — tratando como raiz`,
      );
      roots.push(node);
      continue;
    }
    parentNode.children.push(node);
  }

  const sortSiblings = (nodes: DocNode[]) => {
    nodes.sort((a, b) => (a.order !== b.order ? a.order - b.order : a.title.localeCompare(b.title)));
    nodes.forEach((n) => sortSiblings(n.children));
  };
  sortSiblings(roots);

  cachedGraph = {byId, roots};
  return cachedGraph;
}

export interface DocEntry {
  id: string;
  collection: string;
  /** Caminho do arquivo relativo ao `sourceDir` da collection. */
  relPath: string;
  /** URL final no Docusaurus. */
  url: string;
}

/**
 * Todos os docs registrados, achatados. Usado por
 * scripts/generate-jekyll-redirects.ts para casar cada página com a URL que
 * ela tinha no Jekyll (derivada do caminho do arquivo, não do `id`).
 */
export function getDocEntries(): DocEntry[] {
  return [...buildGraph().byId.values()].map(({id, collection, relPath, url}) => ({
    id,
    collection,
    relPath: relPath.split(path.sep).join('/'),
    url,
  }));
}

export function resolveDocById(id: string): {url: string; title: string} | undefined {
  const node = buildGraph().byId.get(id);
  return node ? {url: node.url, title: node.title} : undefined;
}

// Um mapa de anchor por doc (não por id de link) — cada página só precisa
// ser lida e parseada uma vez, não importa quantos `:link{anchor=...}`
// diferentes apontem pra ela.
const anchorAliasCache = new Map<string, Map<string, string>>();

function getAnchorAliasMap(node: DocNode): Map<string, string> {
  let map = anchorAliasCache.get(node.absFile);
  if (!map) {
    const {content} = matter(fs.readFileSync(node.absFile, 'utf8'));
    map = anchorAliasMapFromMarkdown(content);
    anchorAliasCache.set(node.absFile, map);
  }
  return map;
}

/**
 * Traduz um anchor "à moda kramdown" (herdado literalmente do Jekyll, ver
 * anchorSlug.ts) pro id real gerado pelo github-slugger na página de
 * destino. Quando não encontra correspondência (anchor não bate com nenhum
 * heading conhecido — ex.: aponta pra um `<a name>` cru, não pra um
 * heading), devolve o anchor original sem alterar: mantém o comportamento
 * anterior nesses casos em vez de quebrar o link.
 */
export function resolveAnchor(id: string, legacyAnchor: string): string {
  const node = buildGraph().byId.get(id);
  if (!node) return legacyAnchor;
  return getAnchorAliasMap(node).get(legacyAnchor) ?? legacyAnchor;
}

/**
 * Docusaurus escolhe sozinho o "doc principal" de uma sidebar para o link
 * de item de navbar do tipo `docSidebar` (pega o primeiro doc da lista
 * interna, sem respeitar nossa árvore) — na prática aponta pra uma página
 * qualquer, não pra raiz lógica da collection. Usamos isto para apontar o
 * item de navbar explicitamente (`type: 'doc'`) para a raiz de verdade.
 */
export function getMainDocId(collectionName: string): string {
  const {byId} = buildGraph();
  // Mesma definição de "raiz" usada em buildSidebarFor: sem parent, ou com
  // parent em outra collection.
  const roots = [...byId.values()].filter((node) => {
    if (node.collection !== collectionName || !node.published) return false;
    const parentNode = node.parent ? byId.get(node.parent) : undefined;
    return !parentNode || parentNode.collection !== collectionName;
  });

  // "order"/"title" sozinhos não bastam: uma página órfã (parent quebrado,
  // vira raiz — ver aviso "tratando como raiz" acima) pode ter o mesmo
  // order=0 da raiz de verdade e ganhar no desempate alfabético. A raiz
  // real da collection é a que tem a árvore de fato — desempata por
  // tamanho da subárvore primeiro.
  function subtreeSize(node: DocNode): number {
    return 1 + node.children.reduce((sum, child) => sum + subtreeSize(child), 0);
  }

  roots.sort((a, b) => {
    const bySize = subtreeSize(b) - subtreeSize(a);
    if (bySize !== 0) return bySize;
    return a.order !== b.order ? a.order - b.order : a.title.localeCompare(b.title);
  });
  const main = roots[0];
  if (!main) {
    throw new Error(`[contentGraph] nenhuma raiz publicada encontrada para a collection "${collectionName}"`);
  }
  return main.docusaurusId;
}

export interface PrintNode {
  id: string;
  title: string;
  url: string;
  children: PrintNode[];
}

// Árvore global (cruzando collections, igual ao parent/children "cru" do
// Jekyll) usada pela página de seleção de impressão (src/pages/print) e
// pelo botão de impressão (src/theme/DocBreadcrumbs) — o substituto do
// pdf.html gerado pelo Rakefile no Jekyll. Filtra `published` (mesmo
// critério de buildSidebarFor) e também `draft`, que o plugin-content-docs
// já exclui do build de produção e da navegação; sem esse filtro aqui, a
// árvore de impressão ofereceria um link morto pra uma página que o resto
// do site esconde de propósito. Qualquer um dos dois derruba a subárvore
// inteira.
export function getPrintIndex(): PrintNode[] {
  const {roots} = buildGraph();

  function toPrintNode(node: DocNode): PrintNode | null {
    if (!node.published || node.draft) return null;
    return {
      id: node.id,
      title: node.title,
      url: node.url,
      children: node.children
        .map(toPrintNode)
        .filter((child): child is PrintNode => child !== null),
    };
  }

  return roots
    .map(toPrintNode)
    .filter((node): node is PrintNode => node !== null);
}

export function buildSidebarFor(collectionName: string): SidebarItem[] {
  const {byId} = buildGraph();

  // "Raiz" para efeito desta sidebar: sem parent, OU com parent em outra
  // collection (ex.: ledi tem parent: integracao — mas dentro da própria
  // sidebar da ledi, ledi tem que aparecer no topo, não sumir por estar
  // pendurada como filha de um nó de outra instância).
  const collectionRoots = [...byId.values()].filter((node) => {
    if (node.collection !== collectionName) return false;
    const parentNode = node.parent ? byId.get(node.parent) : undefined;
    return !parentNode || parentNode.collection !== collectionName;
  });

  function toSidebarItem(node: DocNode): SidebarItem | null {
    if (!node.published) return null;

    // Um "parent" pode apontar pra um id de outra collection (ex.: ledi/dw/
    // sistemas_externos têm parent: integracao) — a árvore no Jekyll
    // original é global, cruzando collections livremente. Mas cada
    // collection virou uma instância própria de plugin-content-docs, e uma
    // sidebar só pode referenciar (type: doc) ids da SUA PRÓPRIA instância.
    // Pra um nó de outra collection, viramos link simples (URL calculada
    // por nós) sem recursão — a subárvore dele já tem sidebar própria.
    if (node.collection !== collectionName) {
      return {type: 'link', label: node.title, href: node.url};
    }

    const items = node.children
      .map(toSidebarItem)
      .filter((item): item is SidebarItem => item !== null);

    if (items.length === 0) return node.docusaurusId;
    return {
      type: 'category',
      label: node.title,
      link: {type: 'doc', id: node.docusaurusId},
      items,
    };
  }

  return collectionRoots
    .sort((a, b) => (a.order !== b.order ? a.order - b.order : a.title.localeCompare(b.title)))
    .map(toSidebarItem)
    .filter((item): item is SidebarItem => item !== null);
}
