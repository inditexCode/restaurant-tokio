import React from 'react'
import './Contacto.css'
import FormContacto from './FormContacto'
import imagen from './img/fondo-images.jpg'
import Redes from '../Redes'

const Contactos = () => {
  return (
    <>
     <div className="conteiner-contacto">
         <img className='imagen-contacto' src={ imagen  } alt="Fondo imagen" />
         <p>FORMULARIO DE CONTACTO:</p>
         <h4>Envíanos tus comentarios usando el siguiente formulario</h4>
       <div className="formulario">
         <FormContacto/>
       </div>
    </div>
     <Redes></Redes>

    </>
    
  )
}

export default Contactos

