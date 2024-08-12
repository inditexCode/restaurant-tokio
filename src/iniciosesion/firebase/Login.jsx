import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './FirebaseSesion';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onForgotPassword, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Si hay un mensaje de error, establecer un temporizador para que desaparezca en 5 segundos
    if (error) {
      const timer = setTimeout(() => {
        setError('');
      }, 5000);
      // Limpiar el temporizador si el componente se desmonta o si se cambia el estado
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Limpiar el mensaje de error al intentar iniciar sesión

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Inicio de sesión exitoso');
      
      setEmail('');
      setPassword('');
      
      if (onLoginSuccess) {
        onLoginSuccess(); // Llama a la función de éxito
      }
      
      navigate('/perfil');
    } catch (error) {
      console.error("Error al iniciar sesión:", error.code, error.message);
      
      // Manejo específico para los errores
      if (error.code === 'auth/user-not-found') {
        setError('ERROR: el usuario no existe. <a href="/register" class="create-account-link">Cree una cuenta</a>.');
      } else if (error.code === 'auth/wrong-password') {
        setError('ERROR: contraseña incorrecta. <a href="/register" class="create-account-link">Cree una cuenta</a>.');
      } else if (error.code === 'auth/invalid-credential') {
        setError('ERROR: de usuario. Por favor, verifique su información de inicio de sesión.');
      } else {
        setError(`Error: ${error.message}`);
      }
      
      // Limpiar el formulario después de un error
      setEmail('');
      setPassword('');
    } finally {
      setLoading(false);
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
        
        <input
          type="password"
          className="input_login"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
        />
        
        {error && <p className="error-message" dangerouslySetInnerHTML={{ __html: error }} />}
        
        <button type="submit" disabled={loading}>
          {loading ? 'Iniciando sesión...' : 'INICIAR SESIÓN'}
        </button>
        
        <p className="mensaje_login">
          ¿Has olvidado tu contraseña? Haz clic en el botón y te enviaremos un código al email para restablecer tu contraseña.
        </p>
        
        <button 
          className='reset_password' 
          onClick={onForgotPassword}
          disabled={loading}
        >
          ENVIAR CÓDIGO PARA RESTABLECER LA CONTRASEÑA
        </button>
      </form>
    </div>
  );
};

export default Login;
