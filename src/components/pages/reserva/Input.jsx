import React from 'react';

const Input = ({ name, placeholder, type = 'text', value, onChange, disabled, error }) => (
  <div className="mb-3">
    <input
      type={type}
      className="form-control"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
    {error && <small className="text-danger">{error}</small>}
  </div>
);

export default Input;