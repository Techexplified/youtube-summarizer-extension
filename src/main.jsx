import React, { StrictMode } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './App.jsx';
import "./index.css"

// Attach to window
window.mountReactApp = function () {
  function tryMount() {
    const container = document.querySelector('#panels');
    if (!container) {
      console.log('#panels not found, retrying in 500ms...');
      setTimeout(tryMount, 500);
      return;
    }

    let mountNode = document.getElementById('my-react-popup');
    if (!mountNode) {
      mountNode = document.createElement('div');
      mountNode.id = 'my-react-popup';
      container.appendChild(mountNode);
    }

    const root = ReactDOM.createRoot(mountNode);
    root.render(<App />);
    console.log('React app mounted!');
  }

  tryMount();
};

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <App />
// //   </StrictMode>,
// // )

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import "./index.css"

// let root = null;

// window.mountReactApp = function () {
//   function tryMount() {
//     const container = document.querySelector('#panels');
//     if (!container) {
//       console.log('#panels not found, retrying in 500ms...');
//       setTimeout(tryMount, 500);
//       return;
//     }

//     let mountNode = document.getElementById('my-react-popup');
//     if (!mountNode) {
//       mountNode = document.createElement('div');
//       mountNode.id = 'my-react-popup';
//       container.appendChild(mountNode);
//     }

//     if (!root) {
//       root = ReactDOM.createRoot(mountNode);
//     }
//     root.render(<App />);
//     console.log('React app mounted!');
//   }

//   tryMount();
// };

// window.unmountReactApp = function () {
//   if (root) {
//     root.unmount();
//     root = null;
//     const mountNode = document.getElementById('my-react-popup');
//     if (mountNode) {
//       mountNode.remove();
//     }
//     console.log('React app unmounted!');
//   }
// };
