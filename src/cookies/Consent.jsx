// src/cookies/consent.js
export const getCookieConsent = () => {
    return document.cookie.split('; ').find(row => row.startsWith('cookieConsent='))?.split('=')[1];
  };
  
  export const setCookieConsent = () => {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1); // Expira en 1 año
    document.cookie = `cookieConsent=true; expires=${expires.toUTCString()}; path=/`;
  };
  