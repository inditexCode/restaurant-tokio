import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../iniciosesion/firebase/AuthProvider';
import Formulario from './Formulario';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../iniciosesion/firebase/FirebaseSesion';
import './InfoUsuario.css';

const InfoUsuario = () => {
  const { user, loading, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    telefono: ''
  });

  useEffect(() => {
    if (user) {
      const fetchUserData = async () => {
        try {
          const userRef = doc(db, 'users', user.uid);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            setFormData(userSnap.data());
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchUserData();
    }
  }, [user]);

  if (loading) return <p className="cargando">Cargando...</p>;

  if (!user) {
    return <Navigate to="/login" />;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await updateUser(formData);
      setIsEditing(false);
    } catch (error) {
      console.error('Error actualizando el perfil:', error);
    }
  };

  return (
    <div className="info-usuario">
      {isEditing ? (
        <Formulario formData={formData} handleInputChange={handleInputChange} handleSave={handleSave} setIsEditing={setIsEditing} />
      ) : (
        <div className="informacion">
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
