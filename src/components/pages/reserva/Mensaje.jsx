import PropTypes from 'prop-types'; // Importa PropTypes para la validación de propiedades
import React from 'react';

const Mensaje = ({ type, message }) => {
  // Si no hay mensaje, no renderiza nada
  if (!message) return null;

  return (
    // Renderiza un div con una clase basada en el tipo de mensaje
    // Las clases de Bootstrap (o de un sistema similar) se usan para estilos de alerta
    <div className={`alert alert-${type}`}>
      {message} {/* Muestra el mensaje */}
    </div>
  );
};

// Validación de las propiedades del componente
Mensaje.propTypes = {
  type: PropTypes.string.isRequired, // `type` es obligatorio y debe ser una cadena
  message: PropTypes.string, // `message` es opcional y debe ser una cadena
};

export default Mensaje;


