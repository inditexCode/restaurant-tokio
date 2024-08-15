import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const TimeSelector = ({ value, onChange, disabled, options, error }) => (
  <div className="mb-3 d-flex align-items-center position-relative">
    {/* Campo de selección de hora */}
    <select
      name="hora"
      className="form-control"
      value={value} // Valor actual seleccionado en el campo de selección
      onChange={onChange} // Función que se llama cuando cambia la selección
      disabled={disabled} // Desactiva el campo si disabled es true
      style={{ paddingRight: '40px' }} // Añade espacio adicional para el icono
    >
      <option value="">Selecciona una hora</option>
      {/* Mapea sobre las opciones y crea un elemento <option> para cada hora */}
      {options.map((time) => (
        <option key={time} value={time}>
          {time}
        </option>
      ))}
    </select>
    {/* Icono de reloj para indicar la selección de hora */}
    <AccessTimeIcon
      style={{ fontSize: '1.5rem', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
    />
    {/* Mensaje de error si se proporciona */}
    {error && <small className="text-danger">{error}</small>}
  </div>
);

export default TimeSelector;
