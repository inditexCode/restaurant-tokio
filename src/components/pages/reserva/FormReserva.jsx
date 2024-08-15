import React, { useState, useMemo } from 'react';
import { HookForm } from './HookForm'; 
import { db } from '../../../iniciosesion/firebase/FirebaseSesion'; 
import { collection, addDoc } from 'firebase/firestore'; 
import emailjs from 'emailjs-com'; 
import Input from './Input'; 
import TimeSelector from './TimeSelector'; 
import Mensaje from './Mensaje'; 

const FormReserva = ({ disabled }) => {
  // Estado inicial del formulario
  const initialForm = {
    name: '',
    apellido: '',
    asunto: '',
    email: '',
    telefono: '',
    fecha: '',
    hora: ''
  };

  // Uso del HookForm para manejar el estado del formulario
  const { formState, setFormState, onInputChange } = HookForm(initialForm);
  const { name, apellido, asunto, email, telefono, fecha, hora } = formState;
  
  // Estados para manejar errores, mensajes de éxito y estado de envío
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Función para validar los datos del formulario
  const validate = () => {
    const newErrors = {};
    // Validaciones de campos individuales
    if (!/^[a-zA-Z][a-zA-Z\s]*$/.test(name.trim())) newErrors.name = 'El nombre debe comenzar con una letra y solo se permiten letras y espacios internos';
    if (!/^[a-zA-Z][a-zA-Z\s]*$/.test(apellido.trim())) newErrors.apellido = 'El apellido debe comenzar con una letra y solo se permiten letras y espacios internos';
    if (!/^[a-zA-Z][a-zA-Z\s]*$/.test(asunto.trim())) newErrors.asunto = 'El asunto debe comenzar con una letra y solo se permiten letras y espacios internos';
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) newErrors.email = 'Correo electrónico no válido';
    if (!/^\d{8,11}$/.test(telefono.trim())) newErrors.telefono = 'El teléfono debe tener entre 8 y 11 dígitos';
    if (!fecha) newErrors.fecha = 'Fecha es requerida';
    if (!hora) newErrors.hora = 'Hora es requerida';
    return newErrors;
  };

  // Función para generar las opciones de hora para el selector
  const generateTimeOptions = () => {
    const times = [];
    const start = new Date('1970-01-01T11:00:00'); // Hora de inicio
    const end = new Date('1970-01-01T23:30:00'); // Hora de fin
    const interval = 30; // Intervalo en minutos

    // Genera las horas en intervalos de 30 minutos
    while (start <= end) {
      const hours = start.getHours().toString().padStart(2, '0');
      const minutes = start.getMinutes().toString().padStart(2, '0');
      times.push(`${hours}:${minutes}`);
      start.setMinutes(start.getMinutes() + interval);
    }

    return times;
  };

  // Memoriza las opciones de hora para evitar cálculos innecesarios
  const timeOptions = useMemo(generateTimeOptions, []);

  // Función para manejar el cambio en el selector de hora
  const handleTimeChange = (e) => {
    setFormState((prevFormState) => ({ ...prevFormState, hora: e.target.value }));
  };

  // Función para enviar el correo electrónico de confirmación
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
        // Aquí puedes manejar la respuesta si es necesario
      })
      .catch((error) => {
        // Aquí puedes manejar el error si es necesario
      });
  };

  // Función para manejar el envío del formulario
  const onSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Establece errores de validación si los hay
    } else {
      setErrors({});
      setIsSubmitting(true);

      try {
        // Agrega la reserva a la colección 'reservas' en Firestore
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

        sendEmail(); // Envía el correo electrónico de confirmación

        setSuccessMessage('Reserva enviada con éxito.');
        setFormState(initialForm); // Reinicia el estado del formulario

        // Oculta el mensaje de éxito después de 5 segundos
        setTimeout(() => {
          setSuccessMessage('');
        }, 5000);

      } catch (error) {
        setErrors({ submit: 'Hubo un error al enviar la reserva. Por favor, inténtalo de nuevo.' });
      } finally {
        setIsSubmitting(false); // Habilita el formulario nuevamente
      }
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        {/* Campos del formulario */}
        <Input name="name" placeholder="Nombre" value={name} onChange={onInputChange} disabled={isSubmitting || disabled} error={errors.name} />
        <Input name="apellido" placeholder="Apellido" value={apellido} onChange={onInputChange} disabled={isSubmitting || disabled} error={errors.apellido} />
        <Input name="asunto" placeholder="Asunto" value={asunto} onChange={onInputChange} disabled={isSubmitting || disabled} error={errors.asunto} />
        <Input name="email" placeholder="Email" type="email" value={email} onChange={onInputChange} disabled={isSubmitting || disabled} error={errors.email} />
        <Input name="telefono" placeholder="Número de teléfono" type="tel" value={telefono} onChange={onInputChange} disabled={isSubmitting || disabled} error={errors.telefono} />
        <Input name="fecha" placeholder="Fecha" type="date" value={fecha} onChange={onInputChange} disabled={isSubmitting || disabled} error={errors.fecha} />

        {/* Selector de hora */}
        <TimeSelector value={hora} onChange={handleTimeChange} disabled={isSubmitting || disabled} options={timeOptions} error={errors.hora} />

        {/* Mensajes de éxito y error */}
        <Mensaje type="success" message={successMessage || ''} />
        <Mensaje type="danger" message={errors.submit || ''} />
        
        {/* Botón para enviar la reserva */}
        <button type="submit" className="btn btn-primary" disabled={isSubmitting || disabled}>
          Enviar Reserva
        </button>
      </form>
    </div>
  );
};

export default FormReserva;




















