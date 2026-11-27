import React, {type ReactNode, useMemo, useState} from 'react';
import {useLocation} from '@docusaurus/router';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {usePluginData} from '@docusaurus/useGlobalData';
import {type PrintNode, buildNodeIndex, collectSubtreeIds} from '@site/src/utils/printIndex';
import {printPages} from '@site/src/utils/printPages';
import PrintTree from '@site/src/components/PrintTree';

import styles from './styles.module.css';

export default function PrintSelectorPage(): ReactNode {
  const printIndex = usePluginData('print-index-plugin') as PrintNode[];
  const {search} = useLocation();
  const nodeIndex = useMemo(() => buildNodeIndex(printIndex), [printIndex]);

  // Chegando pelo link "Selecionar páginas para impressão" do PrintMenu
  // (src/components/PrintMenu), a página atual já vem pré-selecionada com
  // suas subpáginas em vez de abrir a árvore inteira vazia.
  const [selected, setSelected] = useState<Set<string>>(() => {
    const initialDocId = new URLSearchParams(search).get('doc');
    const node = initialDocId ? nodeIndex.get(initialDocId) : undefined;
    return node ? new Set(collectSubtreeIds(node)) : new Set();
  });
  const [filter, setFilter] = useState('');
  const [printing, setPrinting] = useState(false);

  function toggleNode(node: PrintNode) {
    const ids = collectSubtreeIds(node);
    setSelected((prev) => {
      const next = new Set(prev);
      const allSelected = ids.every((id) => next.has(id));
      ids.forEach((id) => (allSelected ? next.delete(id) : next.add(id)));
      return next;
    });
  }

  async function handlePrint() {
    const targets = [...selected]
      .map((id) => nodeIndex.get(id))
      .filter((node): node is PrintNode => Boolean(node))
      .map((node) => ({url: node.url, title: node.title}));
    if (targets.length === 0) return;
    setPrinting(true);
    try {
      await printPages(targets);
    } finally {
      setPrinting(false);
    }
  }

  return (
    <Layout
      title="Selecionar páginas para impressão"
      description="Escolha quais páginas da documentação imprimir em um único PDF.">
      <div className={styles.page}>
        <Heading as="h1">Selecionar páginas para impressão</Heading>
        <p>
          Marque as páginas que deseja imprimir — marcar uma categoria seleciona todas as suas
          subpáginas. No diálogo de impressão do navegador, escolha &quot;Salvar como PDF&quot; para
          gerar um arquivo.
        </p>
        <div className={styles.toolbar}>
          <input
            type="search"
            placeholder="Filtrar por título…"
            value={filter}
            onChange={(event) => setFilter(event.currentTarget.value.toLowerCase())}
            className={styles.filterInput}
          />
          <button
            type="button"
            className="button button--secondary button--sm"
            onClick={() => setSelected(new Set())}>
            Limpar seleção
          </button>
        </div>
        <PrintTree nodes={printIndex} selected={selected} onToggle={toggleNode} filter={filter} />
      </div>
      <div className={styles.printBar}>
        <span>{selected.size} página(s) selecionada(s)</span>
        <button
          type="button"
          className="button button--primary"
          disabled={selected.size === 0 || printing}
          onClick={handlePrint}>
          {printing ? 'Preparando impressão…' : 'Imprimir selecionadas'}
        </button>
      </div>
    </Layout>
  );
}
