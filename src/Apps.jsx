import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Logo from './components/pages/Logo';
import Inicio from './components/pages/inicio/Inicio';
import Especialidades from './components/pages/especialidades/Especialidades';
import Menu from './components/pages/menu/Menu';
import Carta from './components/pages/carta/Carta';
import Reserva from './components/pages/reserva/Reserva';
import Contactos from './components/pages/inicio/contacto/Contactos';
import Login from './iniciosesion/firebase/Login'; // Ruta al componente de Login
import Register from './iniciosesion/firebase/Register'; // Ruta al componente de Register
import UserProfile from './components/perfil/Perfil'; // Ruta al componente de UserProfile
import ResetPassword from './iniciosesion/firebase/ResetPassword'; // Importar el componente de restablecimiento de contraseña
import { useAuth } from './iniciosesion/firebase/AuthProvider'; // Ruta al AuthProvider

const Apps = () => {
  const { user } = useAuth();

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Logo />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/especialidades' element={<Especialidades />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/carta' element={<Carta />} />
        <Route path='/reserva' element={<Reserva />} />
        <Route path='/contacto' element={<Contactos />} />
        <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
        <Route path='/register' element={!user ? <Register /> : <Navigate to='/' />} />
        <Route path='/perfil' element={user ? <UserProfile /> : <Navigate to='/login' />} />
        <Route path='/reset-password' element={<ResetPassword />} /> {/* Ruta para restablecer la contraseña */}
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
};

export default Apps;

