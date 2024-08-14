import React, { useState, useEffect } from 'react';
import { auth } from './FirebaseSesion';
import { sendPasswordResetEmail } from 'firebase/auth';
import './ResetPassword.css';

const ResetPassword = ({ email, onClose }) => {
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setIsEmailSent(true);
      setMessage('Se ha enviado un correo electrónico para restablecer tu contraseña.');
      // Cierra el modal inmediatamente después de enviar el correo
      onClose();
    } catch (error) {
      console.error('Error al enviar el correo de restablecimiento:', error);
      setError('Hubo un error al enviar el correo de restablecimiento. Por favor, inténtalo de nuevo.');
    }
  };

  useEffect(() => {
    return () => {
      setError('');
      setMessage('');
      setIsEmailSent(false);
    };
  }, []);

  return (
    <div className="reset-password-container">
      <form onSubmit={handleResetPassword}>
        <input
          type="email"
          value={email}
          readOnly
          placeholder="Email"
        />
        <button type="submit">
          ENVIAR CÓDIGO
        </button>
        {message && <p className="message">{message}</p>}
        {error && <p className="error">{error}</p>}
        <button type="button" onClick={onClose}>Cerrar</button>
      </form>
    </div>
  );
};

export default ResetPassword;
