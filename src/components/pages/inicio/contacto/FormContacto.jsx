import React, { useRef } from 'react';
import './FormContacto.css';
import UseForm from './UseForm';
import emailjs from '@emailjs/browser'; 

const FormContacto = () => {
  const formRef = useRef();

  const handleFormSubmit = (formData) => {
    console.log('Formulario enviado:', formData);

    if (!formData.name || !formData.apellido || !formData.email || !formData.descripcion) {
      console.log('Error: Campos requeridos faltantes');
      return;
    }

    emailjs.sendForm('service_43h6eea', 'template_k9r7jrr', formRef.current, '202e02eHTY_6GZAXa')
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch(error => {
        console.log('FAILED...', error);
        console.log('Error status:', error.status);
        console.log('Error text:', error.text);
      });
  };

  const { formState, errors, isSubmitted, isSubmitting, onInputChange, handleSubmit } = UseForm({ onSubmit: handleFormSubmit });

  return (
    <div className='form-container'>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            name="name"
            placeholder='Nombre'
            value={formState.name}
            onChange={onInputChange}
            disabled={isSubmitting}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <input
            type="text"
            className={`form-control ${errors.apellido ? 'is-invalid' : ''}`}
            name="apellido"
            placeholder='Apellido'
            value={formState.apellido}
            onChange={onInputChange}
            disabled={isSubmitting}
          />
          {errors.apellido && <div className="invalid-feedback">{errors.apellido}</div>}
        </div>

        <div className="mb-3">
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            name="email"
            placeholder='Email'
            value={formState.email}
            onChange={onInputChange}
            disabled={isSubmitting}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <input
            type="text"
            className={`form-control ${errors.asunto ? 'is-invalid' : ''}`}
            name="asunto"
            placeholder='Asunto'
            value={formState.asunto}
            onChange={onInputChange}
            disabled={isSubmitting}
          />
          {errors.asunto && <div className="invalid-feedback">{errors.asunto}</div>}
        </div>

        <div className="form-3">
          <textarea
            className={`form-control ${errors.descripcion ? 'is-invalid' : ''}`}
            placeholder="Descripción"
            name="descripcion"
            value={formState.descripcion}
            onChange={onInputChange}
            disabled={isSubmitting}
            rows='5'
            cols='50'
          ></textarea>
          {errors.descripcion && <div className="invalid-feedback">{errors.descripcion}</div>}
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className={`form-check-input ${errors.checkbox ? 'is-invalid' : ''}`}
            name="checkbox"
            checked={formState.checkbox}
            onChange={onInputChange}
            disabled={isSubmitting}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Acepto Aviso legal y condiciones legales
          </label>
          {errors.checkbox && <div className="invalid-feedback">{errors.checkbox}</div>}
        </div>

        <button type="submit" className="button-form" disabled={isSubmitting}>Enviar</button>

        {isSubmitted && (
          <div className="alert alert-success mt-3">
            Su formulario se ha enviado exitosamente. En breve nos pondremos en contacto contigo. ¡Muchas gracias!
          </div>
        )}
      </form>
    </div>
  );
};

export default FormContacto;















