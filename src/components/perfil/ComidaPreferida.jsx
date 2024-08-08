import React, { useEffect, useState } from 'react';
import { useAuth } from '../../iniciosesion/firebase/AuthProvider';

const ComidaPreferida = () => {
  const { user, userData, updateUser } = useAuth();
  const [preferences, setPreferences] = useState(userData?.preferences || []);
  const [newPreference, setNewPreference] = useState('');

  useEffect(() => {
    if (userData) {
      setPreferences(userData.preferences || []);
    }
  }, [userData]);

  const handleAddPreference = () => {
    if (newPreference.trim() === '') return;
    const updatedPreferences = [...preferences, newPreference.trim()];
    setPreferences(updatedPreferences);
    updateUser({ preferences: updatedPreferences });
    setNewPreference('');
  };

  return (
    <div>
      <h2>Preferencias de Comida</h2>
      <ul>
        {preferences.map((preference, index) => (
          <li key={index}>{preference}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Añadir preferencia"
        value={newPreference}
        onChange={(e) => setNewPreference(e.target.value)}
      />
      <button onClick={handleAddPreference}>Añadir</button>
    </div>
  );
};

export default ComidaPreferida;
