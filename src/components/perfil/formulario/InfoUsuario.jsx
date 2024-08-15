import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../iniciosesion/firebase/AuthProvider';
import Formulario from './Formulario';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../iniciosesion/firebase/FirebaseSesion';
import './InfoUsuario.css';

const InfoUsuario = () => {
  // Obtiene el usuario autenticado, el estado de carga y la función para actualizar el usuario desde el contexto de autenticación
  const { user, loading, updateUser } = useAuth();

  // Estado que controla si el formulario está en modo edición
  const [isEditing, setIsEditing] = useState(false);

  // Estado para almacenar los datos del formulario del usuario
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    telefono: ''
  });

  // Hook que se ejecuta cuando el componente se monta o el usuario cambia
  useEffect(() => {
    if (user) {
      const fetchUserData = async () => {
        try {
          // Obtiene la referencia al documento del usuario en Firestore
          const userRef = doc(db, 'users', user.uid);
          const userSnap = await getDoc(userRef);

          // Si el documento existe, actualiza el estado con los datos del usuario
          if (userSnap.exists()) {
            setFormData(userSnap.data());
          }
        } catch (error) {
          // Maneja errores al obtener los datos del usuario
          console.error('Error fetching user data:', error);
        }
      };

      fetchUserData();
    }
  }, [user]);

  // Muestra un mensaje de carga mientras los datos del usuario se están cargando
  if (loading) return <p className="cargando">Cargando...</p>;

  // Redirige al usuario a la página de inicio de sesión si no está autenticado
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Maneja el cambio en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Maneja el guardado de los datos del formulario
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      // Actualiza los datos del usuario en Firestore
      await updateUser(formData);
      setIsEditing(false); // Sale del modo edición después de guardar
    } catch (error) {
      // Maneja errores al actualizar el perfil
      console.error('Error actualizando el perfil:', error);
    }
  };

  return (
    <div className="info-usuario">
      {isEditing ? (
        // Muestra el formulario de edición si está en modo edición
        <Formulario 
          formData={formData} 
          handleInputChange={handleInputChange} 
          handleSave={handleSave} 
          setIsEditing={setIsEditing} 
        />
      ) : (
        <div className="informacion">
          {/* Muestra la información del usuario cuando no está en modo edición */}
          <p>Nombre: <span className="info-dato">{formData.nombre || ''}</span></p>
          <p>Apellido: <span className="info-dato">{formData.apellido || ''}</span></p>
          <p>Fecha de Nacimiento: <span className="info-dato">{formData.fechaNacimiento || ''}</span></p>
          <p>Teléfono: <span className="info-dato">{formData.telefono || ''}</span></p>
          <p>Email: <span className="info-dato">{user.email}</span></p>
          <button className="boton-editar" onClick={() => setIsEditing(true)}>Editar Perfil</button>
        </div>
      )}
    </div>
  );
};

export default InfoUsuario;
