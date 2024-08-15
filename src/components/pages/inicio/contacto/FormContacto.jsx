import React, { useRef, useState, useEffect } from 'react';
import './FormContacto.css';
import UseForm from './UseForm';
import emailjs from '@emailjs/browser'; 

const FormContacto = () => {
  // Referencia al formulario para enviarlo con EmailJS
  const formRef = useRef();

  // Estado para manejar los mensajes de éxito y error
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null); // 'success' o 'error'

  // Función que maneja el envío del formulario
  const handleFormSubmit = (formData) => {
    // Verifica si hay campos requeridos que faltan
    if (!formData.name || !formData.apellido || !formData.email || !formData.descripcion) {
      setMessage('Error: Campos requeridos faltantes');
      setMessageType('error');
      return;
    }

    // Envía el formulario usando EmailJS
    emailjs.sendForm('service_43h6eea', 'template_kmuw4ri', formRef.current, '202e02eHTY_6GZAXa')
      .then(response => {
        // Muestra un mensaje de éxito si el envío es exitoso
        setMessage('¡Formulario enviado exitosamente!');
        setMessageType('success');
      })
      .catch(error => {
        // Muestra un mensaje de error si el envío falla
        setMessage('Error al enviar el formulario. Por favor, inténtelo de nuevo más tarde.');
        setMessageType('error');
      });
  };

  // Usa el hook personalizado UseForm para manejar el estado y la validación del formulario
  const { formState, errors, isSubmitted, isSubmitting, onInputChange, handleSubmit } = UseForm({ onSubmit: handleFormSubmit });

  // Efecto para ocultar el mensaje de éxito después de 5 segundos
  useEffect(() => {
    if (messageType === 'success') {
      const timer = setTimeout(() => {
        setMessage(null); // Oculta el mensaje después de 5 segundos
      }, 5000);

      // Limpia el temporizador si el componente se desmonta
      return () => clearTimeout(timer);
    }
  }, [messageType]);

  return (
    <div className='form-container'>
      <form ref={formRef} onSubmit={handleSubmit}>
        {/* Campo para el nombre */}
        <div className="mb-3">
          <input
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            name="name"
            placeholder='Nombre'
            value={formState.name}
            onChange={onInputChange}
            disabled={isSubmitting} // Deshabilita el campo mientras se envía el formulario
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        {/* Campo para el apellido */}
        <div className="mb-3">
          <input
            type="text"
            className={`form-control ${errors.apellido ? 'is-invalid' : ''}`}
            name="apellido"
            placeholder='Apellido'
            value={formState.apellido}
            onChange={onInputChange}
            disabled={isSubmitting} // Deshabilita el campo mientras se envía el formulario
          />
          {errors.apellido && <div className="invalid-feedback">{errors.apellido}</div>}
        </div>

        {/* Campo para el email */}
        <div className="mb-3">
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            name="email"
            placeholder='Email'
            value={formState.email}
            onChange={onInputChange}
            disabled={isSubmitting} // Deshabilita el campo mientras se envía el formulario
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        {/* Campo para el asunto */}
        <div className="mb-3">
          <input
            type="text"
            className={`form-control ${errors.asunto ? 'is-invalid' : ''}`}
            name="asunto"
            placeholder='Asunto'
            value={formState.asunto}
            onChange={onInputChange}
            disabled={isSubmitting} // Deshabilita el campo mientras se envía el formulario
          />
          {errors.asunto && <div className="invalid-feedback">{errors.asunto}</div>}
        </div>

        {/* Campo para la descripción */}
        <div className="form-3">
          <textarea
            className={`form-control ${errors.descripcion ? 'is-invalid' : ''}`}
            placeholder="Descripción"
            name="descripcion"
            value={formState.descripcion}
            onChange={onInputChange}
            disabled={isSubmitting} // Deshabilita el campo mientras se envía el formulario
            rows='5'
            cols='50'
          ></textarea>
          {errors.descripcion && <div className="invalid-feedback">{errors.descripcion}</div>}
        </div>

        {/* Checkbox para aceptar términos y condiciones */}
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className={`form-check-input ${errors.checkbox ? 'is-invalid' : ''}`}
            name="checkbox"
            checked={formState.checkbox}
            onChange={onInputChange}
            disabled={isSubmitting} // Deshabilita el campo mientras se envía el formulario
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Acepto Aviso legal y condiciones legales
          </label>
          {errors.checkbox && <div className="invalid-feedback">{errors.checkbox}</div>}
        </div>

        {/* Botón de envío del formulario */}
        <button type="submit" className="button-form" disabled={isSubmitting}>Enviar</button>

        {/* Mensaje de estado */}
        {message && (
          <div className={`alert mt-3 ${messageType === 'success' ? 'alert-success' : 'alert-danger'}`}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default FormContacto;















