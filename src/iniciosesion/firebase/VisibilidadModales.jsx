import React, { useState, useCallback } from 'react';
import Login from './Login';
import ResetPassword from './ResetPassword';
import Modal from './Modal';
import './App.css';

const VisibilidadModales = () => {
  const [showLoginModal, setShowLoginModal] = useState(true);
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
  const [modalKey, setModalKey] = useState(0);

  // Función para manejar el cierre del modal de login después del inicio de sesión exitoso
  const handleLoginSuccess = useCallback(() => {
    console.log('handleLoginSuccess llamado');
    setShowLoginModal(false);
    // Forzar un cambio en el estado para el re-renderizado del modal
    setModalKey(prevKey => prevKey + 1);
  }, []);

  // Función para manejar el clic en "Olvidé mi contraseña"
  const handleForgotPasswordClick = () => {
    setShowLoginModal(false);
    setShowResetPasswordModal(true);
    setModalKey(prevKey => prevKey + 1);
  };

  // Función para cerrar el modal de restablecimiento de contraseña
  const handleCloseResetPassword = () => {
    setShowResetPasswordModal(false);
    setShowLoginModal(true);
    setModalKey(prevKey => prevKey + 1);
  };

  return (
    <div className="app">
      {showLoginModal && (
        <Modal key={`login-${modalKey}`} isOpen={showLoginModal} onClose={() => setShowLoginModal(false)}>
          <Login onForgotPassword={handleForgotPasswordClick} onLoginSuccess={handleLoginSuccess} />
        </Modal>
      )}

      {showResetPasswordModal && (
        <Modal key={`reset-${modalKey}`} isOpen={showResetPasswordModal} onClose={handleCloseResetPassword}>
          <ResetPassword />
        </Modal>
      )}
    </div>
  );
};

export default VisibilidadModales;
