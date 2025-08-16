/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AmbientAudioProvider } from './components/AmbientAudioProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AmbientAudioProvider>
        <App />
      </AmbientAudioProvider>
    </BrowserRouter>
  </React.StrictMode>
);
