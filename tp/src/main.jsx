import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // 👈 asegurate de importar esto

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* 👈 aquí envolvemos toda la app */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
