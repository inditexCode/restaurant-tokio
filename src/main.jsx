import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './iniciosesion/firebase/AuthProvider'; // Asegúrate de la ruta correcta
import Apps from './Apps';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthProvider> {/* Envuelve tu aplicación con el AuthProvider */}
        <Apps />
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>
);

