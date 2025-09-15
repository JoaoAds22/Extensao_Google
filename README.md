# Extensão desenvolvida por João Cesar, em alinhamento às diretrizes do prof. Romes nas aulas do Bootcamp II. 

---

### Concebida como um MVP funcional de extensão para Google Chrome com Manifest V3, o fluxo orquestra camadas de apresentação e serviço: um popup com botão envia mensagem ao background, o service worker responde ao popup, e o content script realça links em páginas previamente definidas. O estado é persistido de forma enxuta via chrome.storage (armazenamento local) e o pacote inclui ícones personalizados — leve, objetivo e pronto para iterar.

### A solução está organizada em pastas: src/ (popup, content, background), icons/ (arte da extensão), docs/ (landing publicada via GitHub Pages), além de manifest.json e README.md.
Instalação manual: baixe o repositório em .zip ou faça o clone; no Chrome, acesse chrome://extensions/, ative o Modo desenvolvedor, clique em “Carregar sem compactação” e selecione a pasta do projeto. A landing do projeto está publicada pelo GitHub Pages a partir da pasta /docs — o link de acesso encontra-se indicado no repositório.
