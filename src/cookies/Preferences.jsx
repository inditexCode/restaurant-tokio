
// Obtiene el valor de una preferencia del usuario almacenada en las cookies
export const getUserPreference = (key) => {
  // Busca en las cookies una fila que empiece con la clave proporcionada
  // y extrae el valor asociado a esa clave
  return document.cookie.split('; ').find(row => row.startsWith(`${key}=`))?.split('=')[1];
};

// Establece una preferencia del usuario en las cookies
export const setUserPreference = (key, value) => {
  const expires = new Date();
  // Establece la fecha de expiración para dentro de 1 año
  expires.setFullYear(expires.getFullYear() + 1);
  // Configura la cookie con la clave, el valor y la fecha de expiración
  document.cookie = `${key}=${value}; expires=${expires.toUTCString()}; path=/`;
};

/**
 * getUserPreference(key):
   Propósito: Recupera el valor de una preferencia del usuario a partir de las cookies.   
   Funcionamiento: Busca una cookie que comience con la clave proporcionada (key), 
   y devuelve el valor asociado a esa clave. Si la cookie no existe, devuelve undefined.
 * 
 */