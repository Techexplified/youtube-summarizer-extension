import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import { useEffect, useState } from 'react';
import Accordion from './components/Accordion';

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
    try {
      const newVal = !enabled;
      setEnabled(newVal);

      // Save to storage
      chrome.storage.local.set({ showReactApp: newVal });

      // Send message to background script to notify toggle state change
      chrome.runtime.sendMessage({
        action: 'toggleReactApp',
        show: newVal,
      });
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className='w-[300px] h-[200px] flex flex-col gap-2 justify-around items-center'>
      <h2 className='underline text-center font-semibold text-xl underline'>YouTube Summarizer</h2>
      <button className='w-fit border-1 border-black p-2 rounded ' onClick={toggle}>{enabled ? "Hide" : "Show"}</button>
      <p>Made with ❤️ love by Explified</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('popup-root'));
root.render(<Popup />);
