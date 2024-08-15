import React, { useState, useEffect } from 'react';
import { auth } from './FirebaseSesion';
import { sendPasswordResetEmail } from 'firebase/auth';
import './ResetPassword.css';

const ResetPassword = ({ email, onClose }) => {
  const [error, setError] = useState(''); // Estado para manejar errores
  const [message, setMessage] = useState(''); // Estado para manejar mensajes de éxito
  const [isEmailSent, setIsEmailSent] = useState(false); // Estado para verificar si el correo ha sido enviado

  
  /** Maneja el envío del correo de restablecimiento de contraseña
   * La función handleResetPassword es asincrónica porque está utilizando await para manejar la llamada a la función sendPasswordResetEmail de Firebase.
   *  Esta función es una operación asíncrona que envía un correo electrónico de restablecimiento de contraseña al usuario.
   */
  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email); // Envía el correo de restablecimiento de contraseña
      setIsEmailSent(true);
      setMessage('Se ha enviado un correo electrónico para restablecer tu contraseña.');
      onClose(); // Cierra el modal después de enviar el correo
    } catch (error) {
      setError('Hubo un error al enviar el correo de restablecimiento. Por favor, inténtalo de nuevo.');
    }
  };

  // Limpia los estados cuando se desmonta el componente
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
        {message && <p className="message">{message}</p>} {/* Muestra el mensaje de éxito */}
        {error && <p className="error">{error}</p>} {/* Muestra el mensaje de error */}
        <button type="button" onClick={onClose}>Cerrar</button> {/* Botón para cerrar el modal */}
      </form>
    </div>
  );
};

export default ResetPassword;
