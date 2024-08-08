import React, { useState, useEffect } from 'react';
import { useAuth } from '../../iniciosesion/firebase/AuthProvider';

const InfoUsuario = () => {
  const { user, userData, loading, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nombre: userData?.nombre || '',
    apellido: userData?.apellido || '',
    fechaNacimiento: userData?.fechaNacimiento || '',
    telefono: userData?.telefono || '',
    foto: userData?.foto || ''
  });

  useEffect(() => {
    if (userData) {
      setFormData({
        nombre: userData.nombre,
        apellido: userData.apellido,
        fechaNacimiento: userData.fechaNacimiento,
        telefono: userData.telefono,
        foto: userData.foto
      });
    }
  }, [userData]);

  if (loading) return <p>Cargando...</p>;

  if (!user) return <p>No has iniciado sesión</p>;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, foto: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await updateUser(formData);
      setIsEditing(false);
    } catch (error) {
      console.error('Error actualizando el perfil: ', error);
    }
  };

  return (
    <div>
      <h2>Información Personal</h2>
      {isEditing ? (
        <form onSubmit={handleSave}>
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Apellido:
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Fecha de Nacimiento:
            <input
              type="date"
              name="fechaNacimiento"
              value={formData.fechaNacimiento}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Teléfono:
            <input
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Foto de Perfil:
            <input
              type="file"
              name="foto"
              onChange={handleFileChange}
            />
            {formData.foto && <img src={formData.foto} alt="Foto de Perfil" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />}
          </label>
          <button type="submit">Guardar</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancelar</button>
        </form>
      ) : (
        <>
          <p>Nombre: {userData?.nombre}</p>
          <p>Apellido: {userData?.apellido}</p>
          <p>Fecha de Nacimiento: {userData?.fechaNacimiento}</p>
          <p>Teléfono: {userData?.telefono}</p>
          <p>Email: {user.email}</p>
          {userData?.foto && <img src={userData.foto} alt="Foto de Perfil" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />}
          <button onClick={() => setIsEditing(true)}>Editar Perfil</button>
        </>
      )}
    </div>
  );
};

export default InfoUsuario;
