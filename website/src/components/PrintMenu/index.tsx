import React, {type ReactNode, useState} from 'react';
import clsx from 'clsx';
import {useLocation} from '@docusaurus/router';
import Link from '@docusaurus/Link';
import {usePluginData} from '@docusaurus/useGlobalData';
import {findPrintNodeByUrl, flattenPrintNode, type PrintNode} from '@site/src/utils/printIndex';
import {printCurrentPage, printPages} from '@site/src/utils/printPages';

import styles from './styles.module.css';

export default function PrintMenu(): ReactNode {
  const {pathname} = useLocation();
  const printIndex = usePluginData('print-index-plugin') as PrintNode[];
  const [open, setOpen] = useState(false);
  const [printing, setPrinting] = useState(false);

  const currentNode = findPrintNodeByUrl(printIndex, pathname);
  const subpageCount = currentNode ? currentNode.children.length : 0;

  async function handlePrintWithChildren() {
    if (!currentNode) return;
    setOpen(false);
    setPrinting(true);
    try {
      await printPages(flattenPrintNode(currentNode));
    } finally {
      setPrinting(false);
    }
  }

  return (
    // "print-menu" (classe global, não do CSS module) é o seletor que
    // src/css/custom.css usa pra esconder o botão no @media print.
    <div className={clsx(styles.printMenu, 'print-menu')}>
      <button
        type="button"
        className={styles.printMenuButton}
        aria-haspopup="menu"
        aria-expanded={open}
        disabled={printing}
        onClick={() => setOpen((value) => !value)}>
        {printing ? 'Preparando impressão…' : 'Imprimir ▾'}
      </button>
      {open && (
        <>
          {/* Fecha o menu ao clicar fora, sem depender de listener global. */}
          <div className={styles.printMenuBackdrop} onClick={() => setOpen(false)} />
          <ul className={styles.printMenuList} role="menu">
            <li role="none">
              <button
                type="button"
                role="menuitem"
                className={styles.printMenuItem}
                onClick={() => {
                  setOpen(false);
                  printCurrentPage();
                }}>
                Imprimir esta página
              </button>
            </li>
            {subpageCount > 0 && (
              <li role="none">
                <button
                  type="button"
                  role="menuitem"
                  className={styles.printMenuItem}
                  onClick={handlePrintWithChildren}>
                  Imprimir esta página e subpáginas ({subpageCount})
                </button>
              </li>
            )}
            <li role="none">
              <Link
                role="menuitem"
                className={styles.printMenuItem}
                to={currentNode ? `/print?doc=${encodeURIComponent(currentNode.id)}` : '/print'}>
                Selecionar páginas para impressão…
              </Link>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}
