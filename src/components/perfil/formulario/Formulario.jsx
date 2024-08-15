import React from 'react';
import './Formulario.css';

const Formulario = ({ formData, handleInputChange, handleSave, setIsEditing }) => {
  return (
    <form className="formulario" onSubmit={handleSave}>
      {/* Itera sobre las claves del objeto formData para crear un campo de entrada para cada propiedad */}
      {Object.keys(formData).map((key) => (
        <div className="campo-formulario" key={key}>
          <label className="etiqueta-formulario">
            {/* Capitaliza la primera letra de la clave y la utiliza como etiqueta */}
            {key.charAt(0).toUpperCase() + key.slice(1)}:
            <input
              className="entrada-formulario"
              type={key === 'fechaNacimiento' ? 'date' : 'text'} // Usa el tipo 'date' para la fecha de nacimiento y 'text' para otros campos
              name={key} // Nombre del campo que se corresponde con las claves de formData
              value={formData[key] || ''} // Valor del campo de entrada
              onChange={handleInputChange} // Llama a handleInputChange cuando el valor del campo cambia
            />
          </label>
        </div>
      ))}
      {/* Botón para guardar los cambios */}
      <button className="boton-guardar" type="submit">Guardar</button>
      {/* Botón para cancelar la edición y salir del modo edición */}
      <button className="boton-cancelar" type="button" onClick={() => setIsEditing(false)}>Cancelar</button>
    </form>
  );
};

export default Formulario;

/**
 * Props:

   formData: Un objeto que contiene los datos del formulario, con claves que corresponden a los nombres de los campos.
   handleInputChange: Función que se llama cada vez que un campo del formulario cambia. Actualiza el estado del formulario.
   handleSave: Función que se llama cuando se envía el formulario (botón "Guardar"). Se encarga de guardar los datos.
   setIsEditing: Función que se llama para cambiar el estado de edición. Se utiliza para salir del modo edición (botón "Cancelar").
 * 
 */