import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// ✅ สมัครใช้งาน Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((reg) => {
        console.log('Service worker registered.', reg);
      })
      .catch((err) => {
        console.log('Service worker registration failed:', err);
      });
  });
}
