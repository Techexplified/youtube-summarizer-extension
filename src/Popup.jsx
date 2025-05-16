import React from 'react';
import ReactDOM from 'react-dom/client';

function Popup() {
  return (
    <div style={{ padding: '1rem' }}>
      <h2 className='underline'>YouTube Summarizer</h2>
      <button onClick={() => alert('Clicked!')}>Summarize</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('popup-root'));
root.render(<Popup />);
