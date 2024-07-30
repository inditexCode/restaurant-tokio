import React from 'react';
import FormReserva from './FormReserva';
import './Reserva.css';
import Redes from '../inicio/Redes';

const Reserva = () => {
  return (
    <>
      <div className="reserva-container">
        <div className="texto">
          <p>
            Completa el formulario con tus datos, verifica que los datos estén correctos, <br /> envía el formulario y recibirás una confirmación
            en tu email.
          </p>        
          </div>

        <div className="reserva-content">
          <FormReserva />
        </div>
      </div>
      <Redes />
    </>
  );
};

export default Reserva;



