// Gera src/data/jekyllRedirects.json: mapa das URLs que o site Jekyll
// publicava (baseadas no CAMINHO do arquivo, sempre terminando em ".html")
// para as URLs do Docusaurus (baseadas no `id` do front matter). As duas
// divergem em boa parte do site, e as antigas já estiveram no ar — links
// externos e favoritos apontam pra elas.
//
// Uso: npm run generate:redirects
//
// Roda sob demanda, não a cada build: o Jekyll deixa de ser fonte de
// verdade quando este site for pro ar, então o mapa só precisa cobrir o que
// já esteve publicado. Rode de novo quando um `id`/caminho de arquivo mudar
// enquanto o Jekyll ainda for o site no ar.

import fs from 'node:fs';
import path from 'node:path';
import {COLLECTIONS, getDocEntries} from './contentGraph';

interface Redirect {
  from: string;
  to: string;
}

const WEBSITE_ROOT = path.resolve(__dirname, '..');
const OUTPUT = path.join(WEBSITE_ROOT, 'src/data/jekyllRedirects.json');

const routeBasePathByCollection = new Map(
  COLLECTIONS.map((collection) => [collection.name, collection.routeBasePath]),
);

/** Caminho do arquivo que o Docusaurus grava no build para uma URL. */
function outputFileFor(url: string): string {
  const clean = url.replace(/^\/+/, '').replace(/\/+$/, '');
  return clean === '' ? 'index.html' : `${clean}/index.html`;
}

// Redirecionamentos fixos: páginas que o Jekyll gerava por conta própria
// (Rakefile/plugins) e que aqui viraram outra coisa.
const STATIC_REDIRECTS: Redirect[] = [
  // pdf.html era a página única com o site inteiro concatenado, feita pra
  // ser impressa; virou o seletor de páginas para impressão.
  {from: '/pdf.html', to: '/print'},
  // search.html era a busca própria do tema Jekyll (search.json + jQuery);
  // virou a busca local do @easyops-cn/docusaurus-search-local.
  {from: '/search.html', to: '/search'},
];

function main(): void {
  const redirects: Redirect[] = [...STATIC_REDIRECTS];
  const seen = new Set(redirects.map((redirect) => redirect.from));

  for (const entry of getDocEntries()) {
    const routeBasePath = routeBasePathByCollection.get(entry.collection);
    if (routeBasePath === undefined) continue;

    // O sufixo `_pagina` é invenção do conversor (website/scripts/migrate-jekyll
    // em esus-aps-doc): o Docusaurus trata `<pasta>/<pasta>.md` como índice
    // da pasta e colidiria com o index.md que já existe ali, coisa que o
    // Jekyll não fazia. A URL antiga é a do arquivo original, sem o sufixo.
    const relPathNoExt = entry.relPath.replace(/\.(md|mdx)$/, '').replace(/_pagina$/, '');
    const from = '/' + [routeBasePath, `${relPathNoExt}.html`].filter(Boolean).join('/');

    // Onde o nome do arquivo já coincide com a rota nova (páginas de
    // índice: `foo/index.md` -> `/foo/` -> `foo/index.html`), o
    // redirecionamento gravaria por cima da própria página.
    if (outputFileFor(entry.url) === from.replace(/^\//, '')) continue;
    if (seen.has(from)) {
      throw new Error(`[generate-jekyll-redirects] origem duplicada: ${from}`);
    }

    seen.add(from);
    redirects.push({from, to: entry.url});
  }

  redirects.sort((a, b) => a.from.localeCompare(b.from));
  fs.writeFileSync(OUTPUT, `${JSON.stringify(redirects, null, 2)}\n`, 'utf8');
  console.log(`${redirects.length} redirecionamentos -> ${path.relative(WEBSITE_ROOT, OUTPUT)}`);
}

main();
