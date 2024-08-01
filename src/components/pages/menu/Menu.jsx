
import React from 'react'
import Header from './Header'
import './Menu.css'
import fondo from './img-menu/fondo-menu.jpg';  
import Redes from '../inicio/Redes'
import BotonReserva from '../reserva/BotonReserva';


const Menu = () => {
  return (
    <div className='contenedor-menu'>
      <img src={ fondo } alt="Imagen de fondo" className='imagen-fondo' />
       <h3>Menús especiales precio único de $10.95</h3>
      <Header></Header>
      <div className="botones">
      <BotonReserva />
      </div>
      <Redes></Redes>
    </div>
  )
}

export default Menu
