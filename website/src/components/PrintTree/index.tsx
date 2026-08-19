import React, {type ReactNode} from 'react';
import {type PrintNode, collectSubtreeIds} from '@site/src/utils/printIndex';

import styles from './styles.module.css';

interface PrintTreeProps {
  nodes: PrintNode[];
  selected: Set<string>;
  onToggle: (node: PrintNode) => void;
  filter: string;
}

function matchesFilter(node: PrintNode, filter: string): boolean {
  if (!filter) return true;
  if (node.title.toLowerCase().includes(filter)) return true;
  return node.children.some((child) => matchesFilter(child, filter));
}

type CheckState = 'checked' | 'unchecked' | 'indeterminate';

function getCheckState(node: PrintNode, selected: Set<string>): CheckState {
  const ids = collectSubtreeIds(node);
  const selectedCount = ids.filter((id) => selected.has(id)).length;
  if (selectedCount === 0) return 'unchecked';
  if (selectedCount === ids.length) return 'checked';
  return 'indeterminate';
}

function TreeNode({
  node,
  selected,
  onToggle,
  filter,
}: {node: PrintNode} & Omit<PrintTreeProps, 'nodes'>): ReactNode {
  if (!matchesFilter(node, filter)) return null;
  const state = getCheckState(node, selected);

  return (
    <li className={styles.treeItem}>
      <label className={styles.treeLabel}>
        <input
          type="checkbox"
          checked={state === 'checked'}
          ref={(el) => {
            if (el) el.indeterminate = state === 'indeterminate';
          }}
          onChange={() => onToggle(node)}
        />
        <span>{node.title}</span>
      </label>
      {node.children.length > 0 && (
        <ul className={styles.treeList}>
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} selected={selected} onToggle={onToggle} filter={filter} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function PrintTree({nodes, selected, onToggle, filter}: PrintTreeProps): ReactNode {
  return (
    <ul className={styles.treeList}>
      {nodes.map((node) => (
        <TreeNode key={node.id} node={node} selected={selected} onToggle={onToggle} filter={filter} />
      ))}
    </ul>
  );
}
