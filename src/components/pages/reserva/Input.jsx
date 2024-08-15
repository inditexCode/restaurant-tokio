import React from 'react';

const Input = ({ name, placeholder, type = 'text', value, onChange, disabled, error }) => (
  <div className="mb-3">
    <input
      // Define el tipo de input, por defecto es 'text'
      type={type}
      className="form-control" 
      name={name} // Nombre del input, útil para formularios y manejo de datos
      placeholder={placeholder} 
      value={value} // Valor actual del input, se controla desde el estado del componente padre
      onChange={onChange} // Función que se llama cuando el valor del input cambia
      disabled={disabled} // Desactiva el campo si es true
    />
    {/* Muestra un mensaje de error si se proporciona */}
    {error && <small className="text-danger">{error}</small>}
  </div>
);

export default Input;
