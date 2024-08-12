// src/cookies/auth.js
export const getAuthToken = () => {
    return document.cookie.split('; ').find(row => row.startsWith('authToken='))?.split('=')[1];
  };
  
  export const setAuthToken = (token) => {
    document.cookie = `authToken=${token}; path=/; secure; HttpOnly`;
  };
  
  export const clearAuthToken = () => {
    document.cookie = `authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };
  