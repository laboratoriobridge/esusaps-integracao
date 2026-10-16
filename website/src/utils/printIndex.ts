// `import type` é apagado na build do client (nunca puxa scripts/contentGraph.ts,
// que usa `fs`/`path` — só existe em Node). O dado em si chega pelo
// print-index-plugin (src/plugins/printIndex), via useGlobalData.
import type {PrintNode} from '../../scripts/contentGraph';

export type {PrintNode};

function normalizeUrl(url: string): string {
  return url.replace(/\/+$/, '') || '/';
}

export function findPrintNodeByUrl(nodes: PrintNode[], url: string): PrintNode | undefined {
  const target = normalizeUrl(url);
  for (const node of nodes) {
    if (normalizeUrl(node.url) === target) return node;
    const found = findPrintNodeByUrl(node.children, url);
    if (found) return found;
  }
  return undefined;
}

export interface PrintTarget {
  url: string;
  title: string;
}

export function flattenPrintNode(node: PrintNode): PrintTarget[] {
  return [
    {url: node.url, title: node.title},
    ...node.children.flatMap(flattenPrintNode),
  ];
}

export function buildNodeIndex(nodes: PrintNode[]): Map<string, PrintNode> {
  const map = new Map<string, PrintNode>();
  function visit(node: PrintNode) {
    map.set(node.id, node);
    node.children.forEach(visit);
  }
  nodes.forEach(visit);
  return map;
}

export function collectSubtreeIds(node: PrintNode): string[] {
  return [node.id, ...node.children.flatMap(collectSubtreeIds)];
}
