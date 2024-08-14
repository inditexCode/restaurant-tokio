import React, { useState, useCallback } from 'react';
import Login from './Login';
import ResetPassword from './ResetPassword';
import Modal from './Modal';

const VisibilidadModales = () => {
  const [showLoginModal, setShowLoginModal] = useState(true);
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
  const [modalKey, setModalKey] = useState(0);
  const [emailForReset, setEmailForReset] = useState('');

  const handleLoginSuccess = useCallback(() => {
    setShowLoginModal(false);
    setModalKey(prevKey => prevKey + 1);
  }, []);

  const handleForgotPasswordClick = (email) => {
    if (email) {
      setEmailForReset(email);
      setShowLoginModal(false);
      setShowResetPasswordModal(true);
      setModalKey(prevKey => prevKey + 1);
    } else {
      console.error('Email no proporcionado para restablecimiento de contraseña');
    }
  };

  const closeResetPasswordModal = () => {
    setShowResetPasswordModal(false);
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
    setModalKey(prevKey => prevKey + 1); // Reinicia la clave del modal para forzar el reinicio
  };

  return (
    <div className="app">
      {showLoginModal && (
        <Modal key={`login-${modalKey}`} isOpen={showLoginModal} onClose={handleCloseLoginModal}>
          <Login 
            onForgotPassword={handleForgotPasswordClick} 
            onLoginSuccess={handleLoginSuccess} 
            onClose={handleCloseLoginModal} 
          />
        </Modal>
      )}

      {showResetPasswordModal && (
        <Modal key={`reset-${modalKey}`} isOpen={showResetPasswordModal} onClose={closeResetPasswordModal}>
          <ResetPassword email={emailForReset} onClose={closeResetPasswordModal} />
        </Modal>
      )}
    </div>
  );
};

export default VisibilidadModales;
