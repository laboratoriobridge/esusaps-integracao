import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import {buildSidebarFor} from '../scripts/contentGraph';

const sidebars: SidebarsConfig = {
  dwSidebar: buildSidebarFor('dw'),
};

export default sidebars;
