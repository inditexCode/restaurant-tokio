import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Modal from '../iniciosesion/firebase/Modal'; // Asegúrate de la ruta correcta
import Login from '../iniciosesion/firebase/Login'; // Ajusta la ruta si es necesario
import Register from '../iniciosesion/firebase/Register'; // Ajusta la ruta si es necesario
import { auth } from '../iniciosesion/firebase/FirebaseSesion'; // Importa auth
import { signOut } from 'firebase/auth'; // Importa signOut
import { useAuth } from '../iniciosesion/firebase/AuthProvider'; // Importa useAuth
import './style/NavBar.css'; // Asegúrate de que esta es la ruta correcta

const NavBar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const { user } = useAuth(); // Usa el hook useAuth para obtener el usuario

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const toggleForm = () => setIsLogin(!isLogin);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('Sesión cerrada');
      window.location.href = '/'; // Redirecciona a la página de inicio
    } catch (error) {
      console.error('Error al cerrar sesión: ', error);
    }
  };

  return (
    <>
      <div className="contenedor">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link to='/' className="navbar-brand">Logo</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to='/' className="nav-link">INICIO</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/carta' className="nav-link">CARTA</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/especialidades' className="nav-link">ESPECIALIDADES</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/menu' className="nav-link">MENÚ</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/reserva' className="nav-link">RESERVA</NavLink>
                </li>
                {user && (
                  <li className="nav-item">
                    <NavLink to='/perfil' className="nav-link">Perfil</NavLink>
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
      </div>

      {/* Modal de inicio de sesión */}
      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <h2>{isLogin ? 'Iniciar sesión' : 'Registrarse'}</h2>
        {isLogin ? <Login onSuccess={closeModal} /> : <Register />}
        <button className='boton_registro' onClick={toggleForm}>
          {isLogin ? '¿No tienes una cuenta? Regístrate' : '¿Ya tienes una cuenta? Inicia sesión'}
        </button>
      </Modal>
    </>
  );
};

export default NavBar;

