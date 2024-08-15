
/**
 * Obtiene el token de autenticación de las cookies.
 * @returns {string | undefined} El token de autenticación si existe, de lo contrario `undefined`.
 */
export const getAuthToken = () => {
  // Obtiene el valor del cookie 'authToken' si existe
  return document.cookie.split('; ').find(row => row.startsWith('authToken='))?.split('=')[1];
};

/**
* Establece el token de autenticación en las cookies.
* @param {string} token - El token de autenticación que se quiere almacenar.
*/
export const setAuthToken = (token) => {
  // Establece el cookie 'authToken' con el valor del token
  document.cookie = `authToken=${token}; path=/; secure; HttpOnly`;
};

/**
* Elimina el token de autenticación de las cookies.
*/
export const clearAuthToken = () => {
  // Elimina el cookie 'authToken' estableciendo su fecha de expiración en el pasado
  document.cookie = `authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

/**
 * getAuthToken: Función que obtiene el token de autenticación almacenado en las cookies. Si el cookie authToken no está presente, devuelve undefined.

   setAuthToken: Función que establece un token de autenticación en las cookies. El cookie se configura con los atributos path=/, secure, y HttpOnly:

  path=/ asegura que el cookie esté disponible en todo el sitio.
  secure indica que el cookie solo debe enviarse a través de conexiones seguras (HTTPS).
  HttpOnly previene que el cookie sea accesible a través de JavaScript en el navegador, protegiéndolo de ciertos tipos de ataques.
  clearAuthToken: Función que elimina el token de autenticación de las cookies. 
  Esto se realiza estableciendo el cookie con una fecha de expiración en el pasado.
 * 
 */