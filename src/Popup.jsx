import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"

function Popup() {
  return (
    <div className='flex flex-col gap-2 items-center'>
      <h2 className='underline text-center font-semibold'>YouTube Summarizer</h2>
      <button className='border-1 border-black p-2 rounded ' onClick={() => alert('Clicked!')}>Summarize</button>
      <button className='border-1 border-black p-2 rounded ' onClick={() => alert('Clicked!')}>Toggle</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('popup-root'));
root.render(<Popup />);
