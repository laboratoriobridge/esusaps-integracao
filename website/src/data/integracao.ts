// Módulo compartilhado entre docusaurus.config.ts (Node) e componentes de
// tema no browser (ex. src/theme/DocBreadcrumbs) — não pode importar nada
// que só exista em Node (fs, path etc.), diferente de scripts/contentGraph.ts.

/**
 * Versão do LEDI publicada por este site. Substitui a variável `version` do
 * `_config.yml` do Jekyll (esusab-integracao-private), que alimentava o
 * selo "versão x.y.z" ao lado do título no cabeçalho. Atualizar aqui é o
 * equivalente ao passo 2.10 do tutorial de publicação.
 *
 * Acompanha o conteúdo em `collections/`, sincronizado do esus-aps-doc — o
 * site Jekyll no ar ainda publica a 8.5.0. Ressincronizar o conteúdo e
 * subir este número são o mesmo passo; ver ../../MIGRACAO.md.
 */
export const SITE_VERSION = '8.7.0';

export const COLLECTION_LABELS: Record<string, string> = {
  integracao: 'Integração e-SUS APS',
  ledi: 'LEDI',
  dw: 'DW PEC',
  sistemas_externos: 'Sistemas externos',
};

// Collections que, no Jekyll, tinham `parent: integracao`. Aqui a
// "integracao" é a própria raiz do site (routeBasePath ''), então esse pai
// coincide com o Home do breadcrumb — diferente do esus-aps-doc, onde
// /integracao é um nível intermediário que precisa ser reconstruído à mão
// (ver src/theme/DocBreadcrumbs/index.tsx).
export const INTEGRACAO_CHILDREN = ['ledi', 'dw', 'sistemas_externos'] as const;
