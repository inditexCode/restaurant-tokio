import React, { useState } from 'react';

// Hook personalizado para manejar el estado del formulario
export const HookForm = (initialForm = {}) => {
  // Estado del formulario, inicializado con el valor de initialForm
  const [formState, setFormState] = useState(initialForm);

  // Función para manejar los cambios en los campos del formulario
  const onInputChange = ({ target }) => {
    const { name, value } = target; // Extrae el nombre y valor del campo
    setFormState({
      ...formState, // Mantiene el estado actual del formulario
      [name]: value // Actualiza el valor del campo específico
    });
  };

  // Retorna el estado del formulario, la función para actualizar el estado, y la función para manejar los cambios de entrada
  return {
    formState,
    setFormState,
    onInputChange
  };
};

export default HookForm; // Exporta la función HookForm como exportación por defecto


/**
 * return: Retorna un objeto que contiene:
    formState: El estado actual del formulario.
    setFormState: La función para actualizar el estado del formulario.
    onInputChange: La función para manejar los cambios en los campos del formulario.
 */
