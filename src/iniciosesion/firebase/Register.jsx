import React, { useState } from 'react';
import './Register.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './FirebaseSesion';
import { doc, setDoc } from 'firebase/firestore';

const Register = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    telefono: ''
  });
  // Estado para almacenar errores
  const [error, setError] = useState('');
  // Estado para manejar el estado de carga 
  const [loading, setLoading] = useState(false);

  // Función para validar el formato del email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return re.test(email);
  };

  // Función para validar la contraseña
  const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  // Maneja los cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para manejar el registro de usuario
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validar email
    if (!validateEmail(formData.email)) {
      setError('Email no válido');
      setLoading(false);
      return;
    }

    // Validar contraseña
    if (!validatePassword(formData.password)) {
      setError('La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.');
      setLoading(false);
      return;
    }

    // Validar confirmación de contraseña
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      setLoading(false);
      return;
    }

    try {
      // Crear usuario con email y contraseña en Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // Guardar información adicional del usuario en Firestore
      await setDoc(doc(db, 'users', user.uid), {
        nombre: formData.nombre,
        apellido: formData.apellido,
        fechaNacimiento: formData.fechaNacimiento,
        telefono: formData.telefono,
        email: formData.email
      });

      // Limpiar el formulario después del registro exitoso
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        telefono: ''
      });

      // Limpiar el error
      setError('');
    } catch (error) {
      // Manejar errores durante el registro
      setError(error.message);
    } finally {
      // Finalizar el estado de carga
      setLoading(false);
    }
  };

  return (
    <div className='container_register'>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
          placeholder="Nombre"
          required
        />
        <input
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleInputChange}
          placeholder="Apellido"
          required
        />
        <input
          type="date"
          name="fechaNacimiento"
          value={formData.fechaNacimiento}
          onChange={handleInputChange}
          placeholder="Fecha de Nacimiento"
          required
        />
        <input
          type="text"
          name="telefono"
          value={formData.telefono}
          onChange={handleInputChange}
          placeholder="Teléfono"
          required
        />
        <div className="input-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
            title="El email debe tener un formato válido (ejemplo@dominio.com)."
          />
          <p className="input-requirements">
            El email debe contener un formato válido, por ejemplo, <b>ejemplo@dominio.com</b>.
          </p>
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Contraseña"
            required
            pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
            title="La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial."
          />
        </div>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          placeholder="Confirmar Contraseña"
          required
        />
        <p className="input-requirements">
          La contraseña debe tener al menos <b>8 caracteres</b>, una <b>letra mayúscula</b>, una <b>letra minúscula</b>, un <b>número</b> y un <b>carácter especial</b> (por ejemplo, @, $, !, %, *, ?, &).
        </p>
        <button type="submit" disabled={loading}>
          {loading ? 'Registrando...' : 'Registrar'}
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Register;
