import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import {buildSidebarFor} from '../scripts/contentGraph';

const sidebars: SidebarsConfig = {
  lediSidebar: buildSidebarFor('ledi'),
};

export default sidebars;
