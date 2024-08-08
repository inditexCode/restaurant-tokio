// src/ResetPassword.jsx
import React, { useState } from 'react';
import { auth } from './FirebaseSesion';
import { sendPasswordResetEmail } from 'firebase/auth';
import './ResetPassword.css';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return re.test(email);
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Email no válido');
      return;
    }
    
    try {
      await sendPasswordResetEmail(auth, email);
      setIsEmailSent(true);
      setMessage('Se ha enviado un correo electrónico para restablecer tu contraseña. Revisa tu correo para obtener el enlace de restablecimiento.');
      setTimeout(() => {
        setEmail('');
        setMessage('');
        setError('');
        setIsEmailSent(false);
      }, 3000);
    } catch (error) {
      setError(`Error: ${error.message}`);
    }
  };

  return (
    <div className="reset-password-container">
      <h2>Restablecer Contraseña</h2>
      <form onSubmit={handleSendEmail}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          autoComplete="email"
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
          title="El email debe tener un formato válido (ejemplo@dominio.com)."
        />
        <button type="submit">Enviar correo para restablecer contraseña</button>
        {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>}
      </form>
    </div>
  );
};

export default ResetPassword;
