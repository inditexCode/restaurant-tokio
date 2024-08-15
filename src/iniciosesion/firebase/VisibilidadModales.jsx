import React, { useState, useCallback } from 'react';
import Login from './Login';
import ResetPassword from './ResetPassword';
import Modal from './Modal';

const VisibilidadModales = () => {
  const [showLoginModal, setShowLoginModal] = useState(true); // Estado para mostrar el modal de login
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false); // Estado para mostrar el modal de reset password
  const [modalKey, setModalKey] = useState(0); // Clave única para forzar el reinicio de los modales
  const [emailForReset, setEmailForReset] = useState(''); // Email para restablecimiento de contraseña

  // Maneja el éxito del login, cierra el modal y reinicia la clave del modal
  const handleLoginSuccess = useCallback(() => {
    setShowLoginModal(false);
    setModalKey(prevKey => prevKey + 1);
  }, []);

  // Maneja el clic en "Olvidé mi contraseña", abre el modal de reset password
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

  // Cierra el modal de reset password y vuelve a mostrar el de login
  const closeResetPasswordModal = () => {
    setShowResetPasswordModal(false);
    setShowLoginModal(true);
  };

  // Cierra el modal de login y reinicia la clave del modal
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
