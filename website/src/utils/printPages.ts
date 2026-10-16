import type {PrintTarget} from './printIndex';

const CONTENT_SELECTOR = '.theme-doc-markdown';
const CONTAINER_ID = 'print-multi-root';
const PRINTING_CLASS = 'printing-multi';
const RENDER_TIMEOUT_MS = 20_000;
const POLL_INTERVAL_MS = 100;

function waitForSelector(doc: Document, selector: string, deadline: number): Promise<Element | null> {
  return new Promise((resolve) => {
    function check() {
      const el = doc.querySelector(selector);
      if (el || Date.now() >= deadline) {
        resolve(el);
        return;
      }
      setTimeout(check, POLL_INTERVAL_MS);
    }
    check();
  });
}

// Um `fetch(url)` cru só traz o HTML já renderizado no build estático de
// produção. No `docusaurus start` (dev), cada rota serve o mesmo shell vazio
// da SPA e o conteúdo só existe depois do React hidratar no cliente — por
// isso carregamos a página de verdade num iframe oculto (mesma origem) e
// esperamos o .theme-doc-markdown aparecer, em vez de tentar ler o HTML bruto.
async function fetchDocContent(url: string): Promise<Element | null> {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('aria-hidden', 'true');
  iframe.style.position = 'fixed';
  iframe.style.top = '-10000px';
  iframe.style.left = '-10000px';
  iframe.style.width = '1024px';
  iframe.style.height = '768px';
  document.body.appendChild(iframe);
  try {
    await new Promise<void>((resolve, reject) => {
      iframe.addEventListener('load', () => resolve(), {once: true});
      iframe.addEventListener('error', () => reject(new Error(`failed to load ${url}`)), {once: true});
      iframe.src = url;
    });
    const doc = iframe.contentDocument;
    if (!doc) return null;
    const content = await waitForSelector(doc, CONTENT_SELECTOR, Date.now() + RENDER_TIMEOUT_MS);
    return content ? (content.cloneNode(true) as Element) : null;
  } catch {
    return null;
  } finally {
    iframe.remove();
  }
}

// Imprime várias páginas como um único documento: carrega cada URL (mesma
// origem — o próprio site, sem API externa nenhuma), extrai só o conteúdo do
// doc (.theme-doc-markdown, mesmo bloco que @theme/DocItem/Content gera) e
// injeta tudo fora da tela em #print-multi-root. O CSS de impressão
// (src/css/custom.css) troca o que fica visível só durante a impressão.
export async function printPages(targets: PrintTarget[]): Promise<void> {
  if (targets.length === 0) return;

  document.getElementById(CONTAINER_ID)?.remove();
  const container = document.createElement('div');
  container.id = CONTAINER_ID;

  for (const target of targets) {
    const content = await fetchDocContent(target.url);
    const section = document.createElement('section');
    section.className = 'print-multi-section';
    if (content) {
      section.appendChild(content.cloneNode(true));
    } else {
      const notice = document.createElement('p');
      notice.textContent = `Não foi possível carregar "${target.title}" (${target.url}) para impressão.`;
      section.appendChild(notice);
    }
    container.appendChild(section);
  }

  document.body.appendChild(container);
  document.documentElement.classList.add(PRINTING_CLASS);

  const cleanup = () => {
    document.documentElement.classList.remove(PRINTING_CLASS);
    container.remove();
    window.removeEventListener('afterprint', cleanup);
  };
  window.addEventListener('afterprint', cleanup);
  // Fallback: nem todo navegador dispara `afterprint` de forma confiável em
  // todos os fluxos de "salvar como PDF" — evita deixar o container preso
  // no DOM indefinidamente caso isso não aconteça.
  setTimeout(cleanup, 5 * 60 * 1000);

  // Dois frames pro navegador aplicar layout do conteúdo recém-injetado
  // antes de abrir o diálogo de impressão.
  await new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });
  window.print();
}

export function printCurrentPage(): void {
  window.print();
}
