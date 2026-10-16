import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import {buildSidebarFor} from '../scripts/contentGraph';

const sidebars: SidebarsConfig = {
  sistemasExternosSidebar: buildSidebarFor('sistemas_externos'),
};

export default sidebars;
