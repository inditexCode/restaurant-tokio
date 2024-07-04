
import React from 'react'
import Header from './Header'
import './Menu.css'
import fondo from './img-menu/fondo-menu.jpg';  
import Redes from '../inicio/Redes'
import BotonReserva from '../reserva/BotonReserva';
import BotonPedido from '../inicio/BotonPedido';


const Menu = () => {
  return (
    <div className='contenedor-menu'>
      <img src={ fondo } alt="Imagen de fondo" className='imagen-fondo' />
       <h3>Ven a degustar nuestros Menús especiales</h3>
      <Header></Header>
      <div className="botones">
      <BotonReserva />
      <BotonPedido />
      </div>
      <Redes></Redes>
    </div>
  )
}

export default Menu
