const cssHref = chrome.runtime.getURL('assets/main.css');
const scriptHref = chrome.runtime.getURL('assets/main.js');

let isMounted = false;
let observer = null;

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = cssHref;
document.head.appendChild(link);

link.onload = () => {
  console.log('Tailwind CSS loaded');

  // Immediately try mounting once, in case DOM is ready
  chrome.storage.local.get(['showReactApp'], (result) => {
    if (result.showReactApp) {
      tryMountReactApp();
    }
  });

  observeDOMChanges();
};

function tryMountReactApp() {
  const container = document.querySelector('#panels');
  if (container && !document.getElementById('explified-extension')) {
    import(scriptHref)
      .then(() => {
        if (window.mountReactApp) {
          window.mountReactApp();
          isMounted = true;
          console.log('extension app mounted');
        } else {
          console.error('extension not found');
        }
      })
      .catch(err => console.error('Failed to load:', err));
  }
}

function unmountReactApp() {
  const existing = document.getElementById('explified-extension');
  if (existing) {
    existing.remove();
    console.log('React app unmounted');
  }
  isMounted = false;
}

function observeDOMChanges() {
  if (observer) observer.disconnect();

  observer = new MutationObserver(() => {
    chrome.storage.local.get(['showReactApp'], (result) => {
      if (result.showReactApp && !document.getElementById('explified-extension')) {
        tryMountReactApp();
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'toggleReactApp') {
    if (message.show) {
      tryMountReactApp();
    } else {
      unmountReactApp();
    }
  }
});

