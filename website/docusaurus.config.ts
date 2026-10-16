import {themes as prismThemes} from 'prism-react-renderer';
import type {Config, Plugin} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkDirective from 'remark-directive';
import remarkResolveDocLinks from './src/remark/resolveDocLinks';
import remarkNumberedItems from './src/remark/numberedItems';
import remarkDemoteNumberedHeadings from './src/remark/demoteNumberedHeadings';
import remarkPageVariables from './src/remark/pageVariables';
import {
  COLLECTIONS,
  DEFAULT_COLLECTION,
  docusaurusRouteBasePath,
  getMainDocId,
  getPrintIndex,
  type PrintNode,
} from './scripts/contentGraph';
import {COLLECTION_LABELS, INTEGRACAO_CHILDREN, SITE_VERSION} from './src/data/integracao';
import jekyllRedirects from './src/data/jekyllRedirects.json';

// Plugin local só pra expor a árvore de documentos (scripts/contentGraph.ts,
// só roda em Node) pro client via useGlobalData/usePluginData — jeito
// idiomático do Docusaurus de levar dado calculado em build-time pro
// browser. Usado pela página de seleção de impressão (src/pages/print) e
// pelo botão de impressão (src/theme/DocBreadcrumbs, src/components/PrintMenu),
// que juntos substituem o pdf.html gerado pelo Rakefile no Jekyll.
// Definido como função inline (não como arquivo separado em src/plugins/)
// porque a resolução de plugins do Docusaurus (loadPluginConfigs ->
// resolveModuleName) trata qualquer string como nome de pacote e usa
// `require.resolve` puro, que não sabe resolver `.ts` — só funciona apontar
// pra um arquivo local se ele já for `.js` puro.
function printIndexPlugin(): Plugin<unknown> {
  return {
    name: 'print-index-plugin',
    async loadContent(): Promise<PrintNode[]> {
      return getPrintIndex();
    },
    async contentLoaded({content, actions}) {
      actions.setGlobalData(content);
    },
  };
}

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// remark-directive precisa rodar antes dos nossos plugins (ele que transforma
// a sintaxe `:link{...}`/`:nr` em nós de diretiva no mdast). Repetido em cada
// instância de plugin-content-docs, já que o Docusaurus não tem um
// `remarkPlugins` global — só por instância (docs/blog/pages).
const collectionRemarkPlugins = [
  remarkDirective,
  remarkDemoteNumberedHeadings,
  remarkResolveDocLinks,
  remarkNumberedItems,
];

// `:page{field=...}` precisa resolver ANTES do plugin interno `contentTitle`
// do mdx-loader (que extrai o texto do h1 pra metadata.title/paginação/TOC
// via mdast-util-to-string, ainda sem entender diretivas). O mdx-loader roda
// `options.remarkPlugins` só DEPOIS de contentTitle; `beforeDefaultRemarkPlugins`
// é o único ponto de extensão anterior a ele (ver @docusaurus/mdx-loader
// processor.js).
const beforeDefaultRemarkPlugins = [remarkPageVariables];

// Uma instância de plugin-content-docs por collection, exceto a default
// (essa usa a instância do preset classic, configurada abaixo).
const additionalDocsPlugins: Config['plugins'] = COLLECTIONS.filter(
  (collection) => collection.name !== DEFAULT_COLLECTION,
).map((collection) => [
  '@docusaurus/plugin-content-docs',
  {
    id: collection.name,
    path: collection.sourceDir,
    routeBasePath: docusaurusRouteBasePath(collection),
    sidebarPath: `./sidebars/${collection.name}.ts`,
    remarkPlugins: collectionRemarkPlugins,
    beforeDefaultRemarkPlugins,
  } satisfies Partial<import('@docusaurus/plugin-content-docs').Options>,
]);

const defaultCollection = COLLECTIONS.find((collection) => collection.name === DEFAULT_COLLECTION)!;

const config: Config = {
  title: 'Integração e-SUS APS PEC',
  tagline: 'Integração e-SUS APS PEC',
  favicon: 'img/logo-esus.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // O default do Docusaurus é tratar TODO markdown (mesmo .md) como MDX, o
  // que faz HTML cru virar JSX estrito (tag sem fechamento quebra o build,
  // atributo sem aspas quebra o build, "{palavra}" vira tentativa de
  // expressão JS). Conteúdo convertido do Jekyll está cheio disso — prosa
  // técnica usa `<algo>` como placeholder e `<td>`/`<a name=x>` sem aspas
  // o tempo todo, nunca foi escrito pensando em JSX. "detect" resolve pela
  // extensão: `.md` (a maioria) vira CommonMark puro; só os `.mdx` gerados
  // para páginas com `{% include %}` (que precisam de `import`/`<Componente />`)
  // continuam usando o parser MDX de verdade.
  markdown: {
    format: 'detect',
  },

  // Domínio onde o site Jekyll está publicado hoje (ver CNAME na raiz do
  // repositório) — usado como canonical/sitemap/OG.
  url: 'https://integracao.esusaps.bridge.ufsc.tech',
  baseUrl: '/',

  organizationName: 'laboratoriobridge',
  projectName: 'esusaps-integracao',

  // 'warn' em vez de 'throw' porque o conteúdo referencia assets com
  // extensões que o webpack do Docusaurus não empacota por padrão
  // (ex. .xml/.xsd cru via link markdown comum) — não é erro de conteúdo.
  // Links entre documentos, esses sim, já falham cedo: são resolvidos por
  // id em src/remark/resolveDocLinks.ts, que roda em modo estrito.
  onBrokenLinks: 'warn',

  // Conteúdo Jekyll usa <a name="x"> (ou <legend id="x">) como alvo de
  // âncora em prosa, não heading — o checker do Docusaurus só reconhece
  // como âncora válida o que passa pelo componente Heading. Ele nunca olha
  // id/name de outros elementos, então não tem como esses avisos
  // desaparecerem trocando `name` por `id` no conteúdo. 'ignore' silencia
  // esse falso positivo estrutural sem mascarar link quebrado de verdade
  // (isso é `onBrokenLinks`, acima).
  onBrokenAnchors: 'ignore',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  plugins: [
    ...additionalDocsPlugins,
    printIndexPlugin,
    // URL antiga do Jekyll é baseada no nome do arquivo e termina em
    // ".html"; a nova é baseada no "id" do front matter — divergem em boa
    // parte do site. O mapa é gerado por
    // `npm run generate:redirects` (scripts/generate-jekyll-redirects.ts).
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: (jekyllRedirects as Array<{from: string; to: string}>).map(({from, to}) => ({
          from,
          to,
        })),
      } satisfies Record<string, unknown>,
    ],
  ],

  // Busca 100% local (índice Lunr.js gerado no build, sem nenhuma chamada
  // externa), substituindo o search.html + search.json do tema Jekyll.
  // Precisa do `docsRouteBasePath` explícito porque o default do plugin só
  // indexa `/docs`; aqui cada collection é uma instância própria de
  // plugin-content-docs com routeBasePath próprio (ver COLLECTIONS).
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: 'pt',
        indexPages: true,
        docsRouteBasePath: COLLECTIONS.map(docusaurusRouteBasePath),
        // Os defaults do plugin são 'docs'/'blog', que não existem aqui
        // (cada collection tem sua própria pasta e não há blog) — sem isto
        // ele avisa "`docsDir` doesn't exist" a cada build.
        docsDir: COLLECTIONS.map((collection) => collection.sourceDir),
        blogDir: [],
        // Página utilitária (src/pages/print), não é conteúdo navegável.
        ignoreFiles: [/^print(\/|$)/],
      } satisfies Record<string, unknown>,
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          path: defaultCollection.sourceDir,
          routeBasePath: docusaurusRouteBasePath(defaultCollection),
          sidebarPath: './sidebars.ts',
          remarkPlugins: collectionRemarkPlugins,
          beforeDefaultRemarkPlugins,
        },
        // Documentação técnica, sem posts — o Jekyll original também nunca
        // teve blog/RSS.
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/bridge-logo-lg.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Integração e-SUS APS PEC',
      logo: {
        alt: 'e-SUS APS',
        src: 'img/logo-esus.png',
        href: '/',
      },
      items: [
        ...INTEGRACAO_CHILDREN.map((name) => ({
          // "type: doc" com docId explícito em vez de "docSidebar": o
          // docSidebar deixa o Docusaurus escolher sozinho o "doc
          // principal" da sidebar (primeiro da lista interna, sem
          // respeitar nossa árvore) — na prática cai numa página qualquer
          // em vez da raiz lógica da collection.
          type: 'doc' as const,
          docsPluginId: name,
          docId: getMainDocId(name),
          position: 'left' as const,
          label: COLLECTION_LABELS[name] ?? name,
        })),
        {
          // Selo de versão do cabeçalho Jekyll ({{ site.version }} em
          // _layouts/default.html). Item `html` porque todo item de navbar
          // "de verdade" no Docusaurus é um link, e este é só um rótulo.
          type: 'html',
          position: 'right',
          value: `<span class="navbar__version">versão ${SITE_VERSION}</span>`,
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
