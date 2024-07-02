
import React from 'react'
import './Especialidades.css'
import Produccion from './Produccion'
import Redes from '../inicio/Redes'

const Especialidades = () => {
  return (
    <div className='container-especialidades'>
      <h3>Disfrute de las especialidades de la casa</h3>
      <Produccion></Produccion>
      <Redes></Redes>
    </div>
  )
}

export default Especialidades
