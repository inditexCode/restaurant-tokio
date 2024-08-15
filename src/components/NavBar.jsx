import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Modal from '../iniciosesion/firebase/Modal';
import Login from '../iniciosesion/firebase/Login';
import Register from '../iniciosesion/firebase/Register';
import { auth } from '../iniciosesion/firebase/FirebaseSesion';
import { signOut } from 'firebase/auth';
import { useAuth } from '../iniciosesion/firebase/AuthProvider';
import './style/NavBar.css'; 
import PersonIcon from '@mui/icons-material/Person';
import ListIcon from '@mui/icons-material/List'; 

const NavBar = () => {
  // Estado para controlar la visibilidad del modal de autenticación
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // Estado para determinar si se debe mostrar el formulario de inicio de sesión o registro
  const [isLogin, setIsLogin] = useState(true);
  // Estado para controlar la visibilidad del menú de navegación desplegable en pantallas pequeñas
  const [isNavOpen, setIsNavOpen] = useState(false);
  // Estado para controlar la visibilidad del menú desplegable de opciones del usuario
  const [showUserOptions, setShowUserOptions] = useState(false);

  // Referencias para manejar clics fuera del menú de navegación y menú de usuario
  const navRef = useRef(null);
  const userOptionsRef = useRef(null);

  // Hook para manejar la navegación programática
  const navigate = useNavigate();

  // Hook que proporciona el estado del usuario autenticado
  const { user } = useAuth();

  // Abre el modal de autenticación
  const openModal = () => setModalIsOpen(true);
  // Cierra el modal de autenticación
  const closeModal = () => setModalIsOpen(false);
  // Alterna entre los formularios de inicio de sesión y registro
  const toggleForm = () => setIsLogin(!isLogin);

  // Maneja el cierre de sesión del usuario
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/'); // Redirige al usuario a la página principal después del cierre de sesión
    } catch (error) {
      // Maneja errores al cerrar sesión
      console.error('Error al cerrar sesión: ', error);
    }
  };

  // Alterna la visibilidad del menú de navegación desplegable
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  // Función que maneja el clic en el botón "Olvidé mi contraseña"
  const handleForgotPasswordClick = (email) => {
    // Aquí se podría manejar la lógica de recuperación de contraseña
  };

  // Hook para manejar el cierre del menú al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) &&
          userOptionsRef.current && !userOptionsRef.current.contains(event.target)) {
        setIsNavOpen(false);
        setShowUserOptions(false); // Cierra el menú desplegable si se hace clic fuera
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
              {user ? (
                <li className="nav-item" ref={userOptionsRef}>
                  <button 
                    className="nav-link btn btn-list" 
                    onClick={() => setShowUserOptions(!showUserOptions)}
                  >
                    <ListIcon style={{ fontSize: '40px', marginRight: '10px' }} />
                  </button>
                  {showUserOptions && (
                    <div className="user-options-dropdown">
                      <NavLink to="/perfil" className="nav-link">Perfil</NavLink>
                      <button className="nav-link btn btn-danger" onClick={handleLogout}>Cerrar sesión</button>
                    </div>
                  )}
                </li>
              ) : (
                <li className="nav-item">
                  <button className="nav-link btn btn-login" onClick={openModal}>
                    <PersonIcon style={{ fontSize: '40px', marginRight: '10px' }} />
                    Iniciar sesión
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal que contiene los formularios de inicio de sesión y registro */}
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


/**Estados (useState):

modalIsOpen: Controla si el modal de autenticación está abierto o cerrado.
isLogin: Determina si se debe mostrar el formulario de inicio de sesión (true) o el de registro (false).
isNavOpen: Controla si el menú de navegación desplegable está abierto o cerrado en pantallas pequeñas.
showUserOptions: Controla la visibilidad del menú desplegable de opciones del usuario.

 */