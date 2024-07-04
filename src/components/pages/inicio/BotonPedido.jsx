import React from 'react'
import './BotonPedido.css'

const BotonPedido = () => {
    const reservaClick = () =>{
        alert('reservada')
    }
  return (
    <div className='contenedor_button_pedido'>
    <button type="button" className='button' onClick={ reservaClick }>RECOGER</button>

    </div>
  )
}

export default BotonPedido
