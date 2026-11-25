/* Local, user-initiated sharing only. No SDK, analytics or network requests. */
(() => {
  'use strict';
  document.querySelectorAll('[data-rf-share]').forEach((section) => {
    const title = section.dataset.title;
    const url = section.dataset.url;
    const native = section.querySelector('[data-share-native]');
    const copy = section.querySelector('[data-share-copy]');
    const status = section.querySelector('[role="status"]');
    const fallback = section.querySelector('[data-share-fallback]');
    const input = fallback.querySelector('input');
    let busy = false;
    copy.hidden = false;
    if (typeof navigator.share === 'function') {
      native.hidden = false;
      native.addEventListener('click', async () => {
        if (busy) return;
        busy = true;
        status.textContent = '';
        try {
          await navigator.share({ title, url });
        } catch (error) {
          if (!error || error.name !== 'AbortError') {
            status.textContent = '共有できませんでした。URLコピーをご利用ください。';
          }
        } finally {
          busy = false;
        }
      });
    }
    copy.addEventListener('click', async () => {
      status.textContent = '';
      try {
        await navigator.clipboard.writeText(url);
        fallback.hidden = true;
        status.textContent = 'URLをコピーしました';
      } catch (error) {
        status.textContent = '自動コピーできませんでした。下のURLを手動でコピーしてください。';
        fallback.hidden = false;
        input.focus();
        input.select();
        input.setSelectionRange(0, input.value.length);
      }
    });
  });
})();
