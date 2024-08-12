// src/cookies/preferences.js
export const getUserPreference = (key) => {
    return document.cookie.split('; ').find(row => row.startsWith(`${key}=`))?.split('=')[1];
  };
  
  export const setUserPreference = (key, value) => {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1); // Expira en 1 año
    document.cookie = `${key}=${value}; expires=${expires.toUTCString()}; path=/`;
  };
  