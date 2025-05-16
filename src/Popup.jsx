import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import { useEffect, useState } from 'react';

function Popup() {

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Load stored value on popup open
    chrome.storage.local.get(['showReactApp'], (result) => {
      console.log(result);
      setEnabled(result.showReactApp || false);
    });

  }, []);

  const toggle = () => {
    const newVal = !enabled;
    setEnabled(newVal);

    // Save to storage
    chrome.storage.local.set({ showReactApp: newVal });

    // Send message to background script to notify toggle state change
    chrome.runtime.sendMessage({
      action: 'toggleReactApp',
      show: newVal,
    });

  };

  return (
    <div className='flex flex-col gap-2 items-center'>
      <h2 className='underline text-center font-semibold'>YouTube Summarizer</h2>
      <button className='border-1 border-black p-2 rounded ' onClick={() => alert('Clicked!')}>Summarize</button>
      <button className='border-1 border-black p-2 rounded ' onClick={toggle}>{enabled?"Hide":"Show"}</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('popup-root'));
root.render(<Popup />);
