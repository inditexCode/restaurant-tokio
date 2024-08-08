// src/Login.jsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './FirebaseSesion';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return re.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Inicio de sesión exitoso');
      onLoginSuccess(); // Cierra el modal
      navigate('/perfil');
    } catch (error) {
      console.error("Error al iniciar sesión:", error.code, error.message);
      setError(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSendResetEmail = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setIsEmailValid(false);
      setError('Email no válido');
      setMessage('');
      setTimeout(() => {
        setError('');
        setIsEmailValid(true);
      }, 3000);
      return;
    }

    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Se ha enviado un correo electrónico para restablecer tu contraseña. Revisa tu correo para obtener el enlace de restablecimiento.');
      setError('');
      setEmail(''); // Limpia el input de email
    } catch (error) {
      console.error("Error al enviar el correo de restablecimiento:", error.message);
      setError(`Error: ${error.message}`);
      setMessage('');
    } finally {
      setLoading(false);
      setTimeout(() => {
        setMessage('');
      }, 3000); // Limpia el mensaje después de 3 segundos
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          className="input_login"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        {!isEmailValid && <p className="error-message">{error}</p>}
        
        <input
          type="password"
          className="input_login"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
          pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
          title="La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial."
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Iniciando sesión...' : 'INICIAR SESIÓN'}
        </button>
        
        <p className="mensaje_login">
          ¿Has olvidado tu contraseña? Haz clic en el botón y te enviaremos un código al email para restablecer tu contraseña.
        </p>
        
        <button 
          className='reset_password' 
          onClick={handleSendResetEmail}
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'ENVIAR CÓDIGO PARA RESTABLECER LA CONTRASEÑA'}
        </button>
      </form>
    </div>
  );
};

export default Login;
