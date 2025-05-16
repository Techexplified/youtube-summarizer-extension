console.log("Hello from content script!");

// Load your bundled React app
// Dynamically import your React bundle and call the mount function
import(chrome.runtime.getURL('assets/main.js'))
  .then(() => {
    if (window.mountReactApp) {
      window.mountReactApp();
      console.log('✅ React component injected');
    } else {
      console.error('❌ mountReactApp not found on window');
    }
  })
  .catch((err) => console.error('❌ Failed to inject React app:', err));

