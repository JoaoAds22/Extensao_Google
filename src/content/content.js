(async function () {
  try {
    const { highlightColor = '#ec0089' } = await chrome.storage.local.get('highlightColor');
    const color = highlightColor || '#ec0089';

    for (const a of document.querySelectorAll('a')) {
      a.style.outline = `2px solid ${color}`;
      a.style.padding = '2px';
    }
  } catch (e) {
    console.warn('Content script: erro ao obter preferências', e);
  }
})();