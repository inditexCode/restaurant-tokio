import PropTypes from 'prop-types';
import React from 'react';

const Mensaje = ({ type, message }) => {
  if (!message) return null; // No renderiza nada si no hay mensaje

  return (
    <div className={`alert alert-${type}`}>
      {message}
    </div>
  );
};

Mensaje.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string, // Hacer que message no sea requerido
};

export default Mensaje;


