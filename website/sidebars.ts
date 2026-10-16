import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import {buildSidebarFor, DEFAULT_COLLECTION} from './scripts/contentGraph';

// Instância default do preset classic — a collection "integracao", servida
// na raiz do site (ver COLLECTIONS em scripts/contentGraph.ts).
const sidebars: SidebarsConfig = {
  integracaoSidebar: buildSidebarFor(DEFAULT_COLLECTION),
};

export default sidebars;
