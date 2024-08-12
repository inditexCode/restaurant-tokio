// Formulario.jsx

import React from 'react';
import './Formulario.css';

const Formulario = ({ formData, handleInputChange, handleSave, setIsEditing }) => {
  return (
    <form className="formulario" onSubmit={handleSave}>
      {Object.keys(formData).map((key) => (
        <div className="campo-formulario" key={key}>
          <label className="etiqueta-formulario">
            {key.charAt(0).toUpperCase() + key.slice(1)}:
            <input
              className="entrada-formulario"
              type={key === 'fechaNacimiento' ? 'date' : 'text'}
              name={key}
              value={formData[key] || ''}
              onChange={handleInputChange}
            />
          </label>
        </div>
      ))}
      <button className="boton-guardar" type="submit">Guardar</button>
      <button className="boton-cancelar" type="button" onClick={() => setIsEditing(false)}>Cancelar</button>
    </form>
  );
};

export default Formulario;
