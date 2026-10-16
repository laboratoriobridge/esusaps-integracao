import React, {createContext, useContext, useRef, type ReactNode} from 'react';

/**
 * Contador da diretiva `:nr` (`{% nr %}` no Jekyll original). No Jekyll, um
 * `{% include_relative %}` era expandido inline ANTES do markdown ser
 * processado, então um parcial incluído (ex.: "_regras_especificas.md")
 * compartilhava o mesmo contador da página que o incluiu. Na conversão pra
 * MDX, esses parciais viraram imports de componente (ver
 * scripts/migrate-jekyll/index.ts, toComponentName) — cada `.mdx` é
 * compilado como módulo independente, então um contador calculado em tempo
 * de build (por arquivo, no remark) não sobrevive à fronteira do import: o
 * parcial reinicia do zero e a numeração final duplica ("1, 1, 2, 2, 3...").
 * Resolvido em tempo de execução em vez de build: NumberedItemsScope
 * (montado uma vez por página em src/theme/MDXContent) fornece um contador
 * mutável via Context, e cada <NumberedItem/> — não importa em qual arquivo
 * MDX foi originalmente escrito — incrementa essa mesma instância na ordem
 * em que a árvore é renderizada.
 */
const NumberedItemsContext = createContext<{value: number} | null>(null);

export function NumberedItemsScope({children}: {children: ReactNode}): ReactNode {
  const counterRef = useRef({value: 0});
  return (
    <NumberedItemsContext.Provider value={counterRef.current}>
      {children}
    </NumberedItemsContext.Provider>
  );
}

export default function NumberedItem({
  reset,
  bold,
}: {
  reset?: string;
  bold?: string;
}): ReactNode {
  const counter = useContext(NumberedItemsContext);
  if (!counter) {
    throw new Error('<NumberedItem /> (gerado por :nr) usado fora de uma página com NumberedItemsScope');
  }
  if (reset === 'true') {
    counter.value = 0;
  }
  counter.value += 1;
  const label = `${counter.value}. `;
  return bold === 'false' ? <>{label}</> : <strong>{label}</strong>;
}
