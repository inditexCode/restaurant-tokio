
import React, { useState, useEffect } from 'react';
import FormInputs from './FormInputs';
import PaymentIcons from './PaymentIcons';
import './FormularioCliente.css';

const FormularioCliente = ({ itemsInCart, onPaymentMethodClick, resetForm }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    calle: '',
    codigoPostal: '',
    telefono: ''
  });

  const [errors, setErrors] = useState({});
  const [formComplete, setFormComplete] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const isComplete = Object.values(formData).every(value => value.trim() !== '');
    setFormComplete(isComplete);
  }, [formData]);

  useEffect(() => {
    if (resetForm) {
      setFormData({
        nombre: '',
        apellido: '',
        calle: '',
        codigoPostal: '',
        telefono: ''
      });
      setErrors({});
    }
  }, [resetForm]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    let newErrors = { ...errors };

    if (name === 'codigoPostal' || name === 'telefono') {
      if (/^\d*$/.test(value)) {
        newErrors[name] = '';
      } else {
        newErrors[name] = 'Solo se permiten números';
      }
    } else if (name === 'nombre' || name === 'apellido') {
      if (/^[A-Za-z ]*$/.test(value)) {
        newErrors[name] = '';
      } else {
        newErrors[name] = 'Solo se permiten letras';
      }
    } else {
      if (/^[A-Za-z0-9 ]*$/.test(value)) {
        newErrors[name] = '';
      } else {
        newErrors[name] = 'Solo se permiten letras y números';
      }
    }

    setFormData({
      ...formData,
      [name]: value
    });

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del cliente:', formData);
  };

  const handlePaymentClick = (url, isExternal = true) => (e) => {
    e.preventDefault();
    if (formComplete) {
      onPaymentMethodClick(); // Limpiar el carrito y el formulario
      setTimeout(() => {
        if (isExternal) {
          window.open(url, '_blank'); // Abrir en una nueva pestaña
        } else {
          window.location.href = url; // Redirigir en la misma pestaña
        }
      }, 0); // El tiempo es opcional; puede ajustarlo si es necesario
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <>
      {showError && <p className="error-message">Por favor, complete el formulario antes de seleccionar un método de pago.</p>}
      <form className="formulario-cliente" onSubmit={handleSubmit}>
        <FormInputs
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          itemsInCart={itemsInCart}
        />
      </form>
      <PaymentIcons handlePaymentClick={handlePaymentClick} />
    </>
  );
};

export default FormularioCliente;
