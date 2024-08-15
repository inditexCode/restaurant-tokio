import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from './FirebaseSesion'; 
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

// Contexto para la autenticación
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Estado para el usuario actual
  const [user, setUser] = useState(null);
  // Estado para los datos del usuario
  const [userData, setUserData] = useState(null);
  // Estado para el estado de carga
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listener para cambios en el estado de autenticación
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user); // Actualiza el estado del usuario
      if (user) {
        // Obtiene los datos del usuario desde Firestore
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUserData(userSnap.data()); // Actualiza los datos del usuario
        }
      } else {
        setUserData(null); // No hay datos del usuario si no está autenticado
      }
      setLoading(false); // Cambia el estado de carga a falso
    });

    // Limpieza del listener al desmontar el componente
    return () => unsubscribe();
  }, []);

  // Función para actualizar los datos del usuario
  const updateUser = async (data) => {
    if (user) {
      const userRef = doc(db, 'users', user.uid);
      try {
        await setDoc(userRef, data, { merge: true }); // Actualiza los datos del usuario en Firestore

        // Verifica la actualización
        const updatedSnap = await getDoc(userRef);
        if (updatedSnap.exists()) {
          setUserData(updatedSnap.data()); // Actualiza los datos del usuario
        }
      } catch (error) {
        // Manejo de errores
        console.error('Error updating user data:', error);
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, userData, loading, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar el contexto de autenticación
export const useAuth = () => useContext(AuthContext);
