const cssHref = chrome.runtime.getURL('assets/main.css');

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = cssHref;

link.onload = () => {
  console.log('Tailwind CSS loaded');

  import(chrome.runtime.getURL('assets/main.js'))
    .then(() => {
      if (window.mountReactApp) {
        window.mountReactApp();
        console.log('React app mounted');
      } else {
        console.error('mountReactApp not found');
      }
    })
    .catch((err) => console.error('Failed to load React app:', err));
};

link.onerror = () => {
  console.error('Failed to load Tailwind CSS:', cssHref);
};

document.head.appendChild(link);
