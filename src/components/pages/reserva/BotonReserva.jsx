
import React from 'react'
import { useNavigate } from 'react-router-dom';
import './BotonReserva.css'


const BotonReserva = () => {
    const navigate = useNavigate();
    const reservaClick = () => {
        navigate('/reserva')
    }

  return (
    <div className='container-button'>
        <button type="button"
       className='button'
       onClick={ reservaClick }
       >RESERVAR</button>
    </div>
  )
}

export default BotonReserva
