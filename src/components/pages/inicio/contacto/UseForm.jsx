import React, { useState } from 'react';

// Componente customizado para manejar el estado del formulario y su validación
const UseForm = ({ onSubmit }) => {
  // Estado para almacenar los valores del formulario
  const [formState, setFormState] = useState({
    name: '',
    apellido: '',
    email: '',
    asunto: '',
    descripcion: '',
    checkbox: false
  });

  // Estado para almacenar los mensajes de error de validación
  const [errors, setErrors] = useState({});
  // Estado para manejar el estado de envío del formulario
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Desestructuración de los valores del formulario
  const { name, apellido, email, asunto, descripcion, checkbox } = formState;

  // Función que maneja los cambios en los campos del formulario
  const onInputChange = ({ target }) => {
    const { name, value, type, checked } = target;
    if (isSubmitting) return; // Previene cambios en el formulario mientras se está enviando

    // Actualiza el estado del formulario con el nuevo valor
    setFormState({
      ...formState,
      [name]: type === 'checkbox' ? checked : value.trimStart()
    });

    // Limpia el mensaje de error para el campo correspondiente
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Función para validar el formulario
  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validación de cada campo del formulario
    if (!name || !/^[A-Za-z]+$/.test(name)) {
      newErrors.name = 'El campo Nombre es obligatorio y solo debe contener texto.';
      valid = false;
    }
    if (!apellido || !/^[A-Za-z]+$/.test(apellido)) {
      newErrors.apellido = 'El campo Apellido es obligatorio y solo debe contener texto.';
      valid = false;
    }
    if (!email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      newErrors.email = 'El campo Email es obligatorio y debe tener un formato válido @.';
      valid = false;
    }
    if (!asunto || !/^[A-Za-z]+$/.test(asunto)) {
      newErrors.asunto = 'El campo Asunto es obligatorio y solo debe contener texto.';
      valid = false;
    }
    if (!descripcion) {
      newErrors.descripcion = 'El campo Descripcion es obligatorio.';
      valid = false;
    }
    if (!checkbox) {
      newErrors.checkbox = 'Debes aceptar los términos y condiciones.';
      valid = false;
    }

    setErrors(newErrors); // Actualiza los errores en el estado
    return valid; // Retorna si el formulario es válido o no
  };

  // Función que maneja el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    if (validateForm()) { // Valida el formulario
      onSubmit(formState); // Llama a la función onSubmit pasada como prop con el estado del formulario
      setIsSubmitting(true); // Marca que el formulario está en proceso de envío
      setIsSubmitted(true); // Marca que el formulario ha sido enviado
      setFormState({ // Limpia el estado del formulario después de enviar
        name: '',
        apellido: '',
        email: '',
        asunto: '',
        descripcion: '',
        checkbox: false
      });

      setTimeout(() => { // Restaura el estado de envío después de 5 segundos
        setIsSubmitted(false);
        setIsSubmitting(false);
      }, 5000); // Tiempo para ocultar el mensaje de éxito
    }
  };

  // Retorna el estado del formulario y las funciones para ser usadas en el componente que lo consume
  return {
    formState,
    errors,
    isSubmitted,
    isSubmitting,
    onInputChange,
    handleSubmit
  };
};

export default UseForm; 











