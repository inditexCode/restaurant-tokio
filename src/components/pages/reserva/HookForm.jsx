import React, { useState } from 'react';

export const HookForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value 
    });
  };

  return {
    formState,
    setFormState,
    onInputChange
  };
};
export default HookForm; // Exportar por defecto la función HookForm




