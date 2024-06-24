
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Inicio from './components/pages/Inicio'
import Especialidades from './components/pages/Especialidades'
import Menu from './components/pages/Menu'
import Carta from './components/pages/Carta'
import Reserva from './components/pages/Reserva'
import Logo from './components/pages/Logo'

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
    </Routes>
   </>
  )
}

export default Apps
