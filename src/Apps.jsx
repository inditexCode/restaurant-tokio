
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Logo from './components/pages/Logo';
import Inicio from './components/pages/inicio/Inicio';
import Especialidades from './components/pages/especialidades/Especialidades';
import Menu from './components/pages/menu/Menu';
import Carta from './components/pages/carta/Carta';
import Reserva from './components/pages/reserva/Reserva';
import Contactos from './components/pages/inicio/contacto/Contactos';


const Apps = () => {
  return (
   <>
   <NavBar></NavBar>
    <Routes>
    <Route path='/' element={ <Logo/> }></Route>
      <Route path='/' element={ <Inicio/> }></Route>
      <Route path='/especialidades' element={ <Especialidades/> }></Route>
      <Route path='/menu' element={ <Menu/> }></Route>
      <Route path='/carta' element={ <Carta/> }></Route>
      <Route path='/reserva' element={ <Reserva/> }></Route>
      <Route path='/*' element={ <Navigate to='/' /> } ></Route>
      <Route path='/contacto' element={ <Contactos/> }></Route>

    </Routes>
   </>
  )
}

export default Apps
