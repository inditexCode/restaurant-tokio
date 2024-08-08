// src/VisibilidadModales.jsx
import React, { useState } from 'react';
import Login from './Login'; 
import ResetPassword from './ResetPassword'; 
import './App.css'; 

const VisibilidadModales = () => {
  const [showLoginModal, setShowLoginModal] = useState(true);
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);

  const handleForgotPasswordClick = () => {
    setShowLoginModal(false);
    setShowResetPasswordModal(true);
  };

  const handleCloseResetPassword = () => {
    setShowResetPasswordModal(false);
    setShowLoginModal(true);
  };

  const handleLoginSuccess = () => {
    setShowLoginModal(false);
  };

  return (
    <div className="app">
      {showLoginModal && (
        <div className="modal login-modal">
          <Login onLoginSuccess={handleLoginSuccess} />
        </div>
      )}

      {showResetPasswordModal && (
        <div className="modal reset-password-modal">
          <button onClick={handleCloseResetPassword}>Cerrar</button>
          <ResetPassword />
        </div>
      )}
    </div>
  );
};

export default VisibilidadModales;
