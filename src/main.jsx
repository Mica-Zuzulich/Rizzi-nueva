// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// Importa el BrowserRouter aquí
import { BrowserRouter } from 'react-router-dom'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 👈 ENVUELVE LA APLICACIÓN COMPLETA AQUÍ */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);