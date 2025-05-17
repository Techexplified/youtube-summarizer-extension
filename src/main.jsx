import React, { StrictMode } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './App.jsx';
import "./index.css"


function isYouTubeDarkMode() {
  const app = document.querySelector('ytd-app') || document.body;
  const bgColor = getComputedStyle(app).getPropertyValue('background-color');

  // Convert to RGB and check darkness
  const rgb = bgColor.match(/\d+/g)?.map(Number);
  if (!rgb) return false;

  const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
  return brightness < 128; // If brightness is low, it's dark
}


// Attach to window
window.mountReactApp = function () {
  function tryMount() {
    const container = document.querySelector('#panels');
    if (!container) {
      // console.log('#panels not found, retrying in 500ms...');
      setTimeout(tryMount, 500);
      return;
    }

    let mountNode = document.getElementById('explified-extension');
    if (!mountNode) {
      mountNode = document.createElement('div');
      mountNode.id = 'explified-extension';
      container.appendChild(mountNode);
    }

    const isDark = isYouTubeDarkMode();

    // console.log(isDark);

    const root = ReactDOM.createRoot(mountNode);
    root.render(<App isDark = {isDark} />);
    // console.log('React app mounted!');
  }

  tryMount();
};

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <App />
// //   </StrictMode>,
// // )

