import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Modal from '../iniciosesion/firebase/Modal';
import Login from '../iniciosesion/firebase/Login';
import Register from '../iniciosesion/firebase/Register';
import { auth } from '../iniciosesion/firebase/FirebaseSesion';
import { signOut } from 'firebase/auth';
import { useAuth } from '../iniciosesion/firebase/AuthProvider';
import './style/NavBar.css'; // Asegúrate de que esta ruta sea correcta

const NavBar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const { user } = useAuth();

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const toggleForm = () => setIsLogin(!isLogin);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión: ', error);
    }
  };

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  // Función para manejar el clic en "Olvidé mi contraseña"
  const handleForgotPasswordClick = (email) => {
    console.log('handleForgotPasswordClick en NavBar con email:', email);
    // Aquí podrías abrir un modal o redirigir al usuario a una página de recuperación de contraseña
  };

  // Cierra el menú al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" ref={navRef}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">il Napoli</Link>
          <button className="navbar-toggler" type="button" onClick={toggleNav}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">INICIO</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/carta" className="nav-link">CARTA</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/especialidades" className="nav-link">ESPECIALIDADES</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/menu" className="nav-link">MENÚ</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/reserva" className="nav-link">RESERVA</NavLink>
              </li>
              {user && (
                <li className="nav-item">
                  <NavLink to="/perfil" className="nav-link">Perfil</NavLink>
                </li>
              )}
              {user ? (
                <li className="nav-item">
                  <button className="nav-link btn btn-danger" onClick={handleLogout}>Cerrar sesión</button>
                </li>
              ) : (
                <li className="nav-item">
                  <button className="nav-link btn btn-primary" onClick={openModal}>Iniciar sesión</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        {isLogin ? (
          <Login onForgotPassword={handleForgotPasswordClick} onLoginSuccess={closeModal} />
        ) : (
          <Register />
        )}
        <button className='boton_registro' onClick={toggleForm}>
          {isLogin ? '¿No tienes una cuenta? Regístrate' : '¿Ya tienes una cuenta? Inicia sesión'}
        </button>
      </Modal>
    </>
  );
};

export default NavBar;
