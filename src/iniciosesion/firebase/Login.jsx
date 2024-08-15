import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './FirebaseSesion';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onForgotPassword, onLoginSuccess }) => {
  // Estados para manejar el email, password, error y estado de carga
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Estado para manejar el modo de restablecimiento de contraseña
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
  
  // Estado para manejar el correo de restablecimiento de contraseña
  const [resetEmail, setResetEmail] = useState('');

  const navigate = useNavigate();

  // Función para manejar el inicio de sesión
  const handleLogin = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Autentica al usuario con Firebase
      await signInWithEmailAndPassword(auth, email, password);
      
      // Limpia los campos de email y password tras el inicio de sesión
      setEmail('');
      setPassword('');

      // Si hay una función `onLoginSuccess`, se ejecuta
      if (onLoginSuccess) {
        onLoginSuccess();
      }

      // Redirige al perfil del usuario
      navigate('/perfil');
    } catch (error) {
      // Muestra mensajes de error específicos según el código del error
      const errorMessages = {
        'auth/user-not-found': 'ERROR: el usuario no existe. <a href="/register" class="create-account-link">Cree una cuenta</a>.',
        'auth/wrong-password': 'ERROR: contraseña incorrecta. <a href="/register" class="create-account-link">Cree una cuenta</a>.',
        'auth/invalid-credential': 'ERROR: de usuario. Por favor, verifique su información de inicio de sesión.',
      };
      setError(errorMessages[error.code] || `Error: ${error.message}`);
      
      // Limpia los campos tras un intento fallido
      setEmail('');
      setPassword('');
    } finally {
      setLoading(false); // Termina el estado de carga
    }
  }, [email, password, navigate, onLoginSuccess]);

  // Maneja el clic en "¿Olvidaste tu contraseña?"
  const handleForgotPasswordClick = useCallback((e) => {
    e.preventDefault();
    if (email) {
      setForgotPasswordMode(true);
      setResetEmail(email);
      onForgotPassword(email); // Ejecuta la función para iniciar el proceso de restablecimiento de contraseña
    } else {
      setError('Por favor, ingresa tu correo electrónico para restablecer la contraseña');
    }
  }, [email, onForgotPassword]);

  // Maneja el envío del correo para restablecer la contraseña
  const handleResetPassword = useCallback(async (e) => {
    e.preventDefault();
    if (resetEmail) {
      try {
        // Envía el correo de restablecimiento de contraseña
        await sendPasswordResetEmail(auth, resetEmail);
        
        // Limpia los estados y sale del modo de restablecimiento
        setError('');
        setResetEmail('');
        setForgotPasswordMode(false);
      } catch (error) {
        setError('Hubo un error al enviar el correo de restablecimiento. Por favor, inténtalo de nuevo.');
      }
    } else {
      setError('Por favor, ingresa tu correo electrónico para enviar el código de restablecimiento');
    }
  }, [resetEmail]);

  return (
    <div className="login-container">
      {/* Formulario para iniciar sesión o restablecer la contraseña */}
      <form onSubmit={forgotPasswordMode ? handleResetPassword : handleLogin}>
        <input
          type="email"
          className="input_login"
          value={forgotPasswordMode ? resetEmail : email}
          onChange={(e) => forgotPasswordMode ? setResetEmail(e.target.value) : setEmail(e.target.value)}
          placeholder="Email"
          required
          autoComplete="email"
          disabled={loading}
        />
        
        {!forgotPasswordMode && (
          <input
            type="password"
            className="input_login"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
            autoComplete="current-password"
            disabled={loading}
          />
        )}
        
        {/* Mensaje de error si existe */}
        {error && <p className="error-message" dangerouslySetInnerHTML={{ __html: error }} />}
        
        {/* Botón para enviar el formulario */}
        <button type="submit" disabled={loading}>
          {loading ? 'Enviando...' : forgotPasswordMode ? 'ENVIAR CÓDIGO' : 'INICIAR SESIÓN'}
        </button>
        
        {/* Botón para restablecer la contraseña si no está en el modo de restablecimiento */}
        {!forgotPasswordMode && (
          <>
            <p className="mensaje_login">
              ¿Has olvidado tu contraseña? Haz clic en el botón y te enviaremos un código al email para restablecer tu contraseña.
            </p>
            <button 
              className='reset_password' 
              onClick={handleForgotPasswordClick}
              disabled={loading}
            >
              ENVIAR CÓDIGO PARA RESTABLECER LA CONTRASEÑA
            </button>
          </>
        )}
      </form>
    </div>
  );
};

Login.propTypes = {
  // Propiedades esperadas por el componente
  onForgotPassword: PropTypes.func.isRequired,
  onLoginSuccess: PropTypes.func,
};

export default Login;
