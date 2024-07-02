import React, { useState } from 'react';

const UseForm = ({ onSubmit }) => {
  const [formState, setFormState] = useState({
    name: '',
    apellido: '',
    email: '',
    asunto: '',
    descripcion: '',
    checkbox: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { name, apellido, email, asunto, descripcion, checkbox } = formState;

  const onInputChange = ({ target }) => {
    const { name, value, type, checked } = target;
    if (isSubmitting) return; // Prevent input if form is submitting
    setFormState({
      ...formState,
      [name]: type === 'checkbox' ? checked : value.trimStart()
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validación de cada campo
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

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      onSubmit(formState);
      setIsSubmitting(true);
      setIsSubmitted(true);
      setFormState({
        name: '',
        apellido: '',
        email: '',
        asunto: '',
        descripcion: '',
        checkbox: false
      });

      setTimeout(() => {
        setIsSubmitted(false);
        setIsSubmitting(false);
      }, 5000); // Hide success message after 5 seconds
    }
  };

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











