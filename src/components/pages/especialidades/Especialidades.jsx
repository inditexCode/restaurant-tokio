
import React from 'react'
import './Especialidades.css'
import Produccion from './Produccion'
import Redes from '../inicio/Redes'
import BotonReserva from '../reserva/BotonReserva'

const Especialidades = () => {
  return (
    <div className='container-especialidades'>
      <h3>Disfrute de las especialidades de la casa en nuestro restaurante</h3>
      <Produccion></Produccion>
      <div className="container_botones">
        <BotonReserva />
      </div>
      <Redes></Redes>
    </div>
  )
}

export default Especialidades
