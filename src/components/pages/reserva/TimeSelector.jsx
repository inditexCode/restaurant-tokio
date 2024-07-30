import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const TimeSelector = ({ value, onChange, disabled, options, error }) => (
  <div className="mb-3 d-flex align-items-center position-relative">
    <select
      name="hora"
      className="form-control"
      value={value}
      onChange={onChange}
      disabled={disabled}
      style={{ paddingRight: '40px' }} // Deja espacio para el icono
    >
      <option value="">Selecciona una hora</option>
      {options.map((time) => (
        <option key={time} value={time}>
          {time}
        </option>
      ))}
    </select>
    <AccessTimeIcon
      style={{ fontSize: '1.5rem', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
    />
    {error && <small className="text-danger">{error}</small>}
  </div>
);

export default TimeSelector;
