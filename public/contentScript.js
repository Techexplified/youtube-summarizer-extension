// const cssHref = chrome.runtime.getURL('assets/main.css');

// const link = document.createElement('link');
// link.rel = 'stylesheet';
// link.href = cssHref;

// link.onload = () => {
//   console.log('Tailwind CSS loaded');

//   import(chrome.runtime.getURL('assets/main.js'))
//     .then(() => {
//       if (window.mountReactApp) {
//         window.mountReactApp();
//         console.log('React app mounted');
//       } else {
//         console.error('mountReactApp not found');
//       }
//     })
//     .catch((err) => console.error('Failed to load React app:', err));
// };

// link.onerror = () => {
//   console.error('Failed to load Tailwind CSS:', cssHref);
// };

// document.head.appendChild(link);

const cssHref = chrome.runtime.getURL('assets/main.css');
const scriptHref = chrome.runtime.getURL('assets/main.js');

let isMounted = false;
let mountNode = null;

// Load Tailwind CSS
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = cssHref;

link.onload = () => {
  console.log('✅ Tailwind CSS loaded');

  // Load React app if showReactApp is true in storage
  chrome.storage.local.get(['showReactApp'], (result) => {
    if (result.showReactApp) {
      loadReactApp();
    }
  });
};

link.onerror = () => {
  console.error('❌ Failed to load Tailwind CSS:', cssHref);
};

document.head.appendChild(link);

// Load and mount React app
function loadReactApp() {
  if (isMounted) return;

  import(scriptHref)
    .then(() => {
      if (window.mountReactApp) {
        window.mountReactApp();
        isMounted = true;
        console.log('✅ React app mounted');
      } else {
        console.log('❌ mountReactApp not found on window');
      }
    })
    .catch((err) => console.error('❌ Failed to load React app:', err));
}

// Unmount React app (removes it from the DOM)
function unmountReactApp() {
  const existing = document.getElementById('my-react-popup');
  if (existing) {
    existing.remove();
    console.log('🧹 React app unmounted');
  }
  isMounted = false;
}

// 🔁 Listen for messages from background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'toggleReactApp') {
    // console.log(message.show);
    if (message.show) {
      loadReactApp();
    } else {
      unmountReactApp();
    }
  }
});
