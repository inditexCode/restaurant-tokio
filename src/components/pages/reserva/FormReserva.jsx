import React, { useState, useMemo } from 'react';
import { HookForm } from './HookForm';
import { db } from './carpetafire/Firebase';
import { collection, addDoc } from 'firebase/firestore';
import emailjs from 'emailjs-com';
import Input from './Input';
import TimeSelector from './TimeSelector';
import Mensaje from './Mensaje';

const FormReserva = ({ disabled }) => {
  const initialForm = {
    name: '',
    apellido: '',
    asunto: '',
    email: '',
    telefono: '',
    fecha: '',
    hora: ''
  };

  const { formState, setFormState, onInputChange } = HookForm(initialForm);
  const { name, apellido, asunto, email, telefono, fecha, hora } = formState;
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!/^[a-zA-Z][a-zA-Z\s]*$/.test(name.trim())) newErrors.name = 'El nombre debe comenzar con una letra y solo se permiten letras y espacios internos';
    if (!/^[a-zA-Z][a-zA-Z\s]*$/.test(apellido.trim())) newErrors.apellido = 'El apellido debe comenzar con una letra y solo se permiten letras y espacios internos';
    if (!/^[a-zA-Z][a-zA-Z\s]*$/.test(asunto.trim())) newErrors.asunto = 'El asunto debe comenzar con una letra y solo se permiten letras y espacios internos';
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) newErrors.email = 'Correo electrónico no válido';
    if (!/^\d{8,11}$/.test(telefono.trim())) newErrors.telefono = 'El teléfono debe tener entre 8 y 11 dígitos';
    if (!fecha) newErrors.fecha = 'Fecha es requerida';
    if (!hora) newErrors.hora = 'Hora es requerida';
    return newErrors;
  };

  const generateTimeOptions = () => {
    const times = [];
    const start = new Date('1970-01-01T11:00:00');
    const end = new Date('1970-01-01T23:30:00');
    const interval = 30; // Intervalo en minutos

    while (start <= end) {
      const hours = start.getHours().toString().padStart(2, '0');
      const minutes = start.getMinutes().toString().padStart(2, '0');
      times.push(`${hours}:${minutes}`);
      start.setMinutes(start.getMinutes() + interval);
    }

    return times;
  };

  const timeOptions = useMemo(generateTimeOptions, []);

  const handleTimeChange = (e) => {
    setFormState((prevFormState) => ({ ...prevFormState, hora: e.target.value }));
  };

  const sendEmail = () => {
    const templateParams = {
      name,
      apellido,
      asunto,
      email,
      telefono,
      fecha,
      hora
    };

    emailjs.send('service_33nf7wq', 'template_kmuw4ri', templateParams, '202e02eHTY_6GZAXa')
      .then((response) => {
        console.log('Email sent successfully', response);
      })
      .catch((error) => {
        console.error('Error sending email', error);
      });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSubmitting(true);

      try {
        await addDoc(collection(db, 'reservas'), {
          name,
          apellido,
          asunto,
          email,
          telefono,
          fecha,
          hora,
          createdAt: new Date()
        });

        sendEmail();

        setSuccessMessage('Reserva enviada con éxito.');
        setFormState(initialForm);

        setTimeout(() => {
          setSuccessMessage('');
        }, 5000);

      } catch (error) {
        console.error('Error al enviar la reserva: ', error);
        setErrors({ submit: 'Hubo un error al enviar la reserva. Por favor, inténtalo de nuevo.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input name="name" placeholder="Nombre" value={name} onChange={onInputChange} disabled={isSubmitting || disabled} error={errors.name} />
        <Input name="apellido" placeholder="Apellido" value={apellido} onChange={onInputChange} disabled={isSubmitting || disabled} error={errors.apellido} />
        <Input name="asunto" placeholder="Asunto" value={asunto} onChange={onInputChange} disabled={isSubmitting || disabled} error={errors.asunto} />
        <Input name="email" placeholder="Email" type="email" value={email} onChange={onInputChange} disabled={isSubmitting || disabled} error={errors.email} />
        <Input name="telefono" placeholder="Número de teléfono" type="tel" value={telefono} onChange={onInputChange} disabled={isSubmitting || disabled} error={errors.telefono} />
        <Input name="fecha" placeholder="Fecha" type="date" value={fecha} onChange={onInputChange} disabled={isSubmitting || disabled} error={errors.fecha} />

        <TimeSelector value={hora} onChange={handleTimeChange} disabled={isSubmitting || disabled} options={timeOptions} error={errors.hora} />

        <Mensaje type="success" message={successMessage || ''} />
        <Mensaje type="danger" message={errors.submit || ''} />
        
        <button type="submit" className="btn btn-primary" disabled={isSubmitting || disabled}>
          Enviar Reserva
        </button>
      </form>
    </div>
  );
};

export default FormReserva;




















