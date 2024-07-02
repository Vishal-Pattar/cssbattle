import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ShowResultProvider } from './hooks/useShowResult';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShowResultProvider>
        <App />
    </ShowResultProvider>
  </React.StrictMode>
);