/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AmbientAudioProvider } from './pages/components/AmbientAudioProvider';
import '../index.css';

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container); // For React 18+
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <AmbientAudioProvider>
          <App />
        </AmbientAudioProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}
