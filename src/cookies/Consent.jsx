
// Obtiene el valor del consentimiento de cookies almacenado en las cookies del navegador
export const getCookieConsent = () => {
  // Divide las cookies en un array y busca la cookie que comienza con 'cookieConsent='
  // Luego, obtiene el valor de la cookie
  return document.cookie.split('; ').find(row => row.startsWith('cookieConsent='))?.split('=')[1];
};

// Establece el consentimiento de cookies en las cookies del navegador
export const setCookieConsent = () => {
  const expires = new Date();
  // Establece la fecha de expiración de la cookie a 1 año a partir de ahora
  expires.setFullYear(expires.getFullYear() + 1);
  // Crea o actualiza la cookie 'cookieConsent' con el valor 'true' y la fecha de expiración
  document.cookie = `cookieConsent=true; expires=${expires.toUTCString()}; path=/`;
};
