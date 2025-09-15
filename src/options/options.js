document.addEventListener('DOMContentLoaded', () => {
  const colorInput = document.getElementById('color');
  const saveBtn = document.getElementById('save');
  const msg = document.getElementById('msg');

  chrome.storage.local.get({ highlightColor: '#ec0089' }, (data) => {
    colorInput.value = data.highlightColor || '#ec0089';
  });

  saveBtn.addEventListener('click', () => {
    const color = colorInput.value;
    chrome.storage.local.set({ highlightColor: color }, () => {
      msg.textContent = 'Salvo!';
      setTimeout(() => (msg.textContent = ''), 1500);
    });
  });
});