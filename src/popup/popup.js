document.addEventListener('DOMContentLoaded', () => {
  const pingBtn = document.getElementById('ping');
  const statusEl = document.getElementById('status');
  const showInstallsBtn = document.getElementById('show-installs');
  const openOptionsBtn = document.getElementById('open-options');

  pingBtn.addEventListener('click', async () => {
    try {
      const res = await chrome.runtime.sendMessage({ type: 'PING' });
      statusEl.textContent = `Background respondeu: ${res.time}`;
    } catch (err) {
      statusEl.textContent = `Erro: ${err.message || err}`;
    }
  });

  showInstallsBtn.addEventListener('click', async () => {
    chrome.storage.local.get('installs', (data) => {
      if (data.installs) {
        const when = new Date(data.installs).toLocaleString();
        statusEl.textContent = `Instalado em: ${when}`;
      } else {
        statusEl.textContent = 'Nenhum registro de instalação.';
      }
    });
  });

  openOptionsBtn.addEventListener('click', () => {
    chrome.runtime.openOptionsPage();
  });
});