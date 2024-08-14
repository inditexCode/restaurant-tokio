import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './FirebaseSesion';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onForgotPassword, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');

      if (onLoginSuccess) {
        onLoginSuccess();
      }

      navigate('/perfil');
    } catch (error) {
      const errorMessages = {
        'auth/user-not-found': 'ERROR: el usuario no existe. <a href="/register" class="create-account-link">Cree una cuenta</a>.',
        'auth/wrong-password': 'ERROR: contraseña incorrecta. <a href="/register" class="create-account-link">Cree una cuenta</a>.',
        'auth/invalid-credential': 'ERROR: de usuario. Por favor, verifique su información de inicio de sesión.',
      };
      setError(errorMessages[error.code] || `Error: ${error.message}`);
      setEmail('');
      setPassword('');
    } finally {
      setLoading(false);
    }
  }, [email, password, navigate, onLoginSuccess]);

  const handleForgotPasswordClick = useCallback((e) => {
    e.preventDefault();
    if (email) {
      setForgotPasswordMode(true);
      setResetEmail(email);
      onForgotPassword(email);
    } else {
      setError('Por favor, ingresa tu correo electrónico para restablecer la contraseña');
    }
  }, [email, onForgotPassword]);

  const handleResetPassword = useCallback(async (e) => {
    e.preventDefault();
    if (resetEmail) {
      try {
        await sendPasswordResetEmail(auth, resetEmail);
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
        
        {error && <p className="error-message" dangerouslySetInnerHTML={{ __html: error }} />}
        
        <button type="submit" disabled={loading}>
          {loading ? 'Enviando...' : forgotPasswordMode ? 'ENVIAR CÓDIGO' : 'INICIAR SESIÓN'}
        </button>
        
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
  onForgotPassword: PropTypes.func.isRequired,
  onLoginSuccess: PropTypes.func,
};

export default Login;
