import React, { useState, useEffect } from 'react';
import { getCookieConsent, setCookieConsent } from '../cookies/Consent';
import './Banner.css'; 

const Banner = () => {
  // Estado para controlar la visibilidad del banner
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verifica si el consentimiento de cookies ya ha sido dado
    const consent = getCookieConsent();
    if (!consent) {
      // Si no se ha dado consentimiento, mostrar el banner
      setShowBanner(true);
    }
  }, []);

  // Maneja la aceptación de cookies por parte del usuario
  const handleAcceptCookies = () => {
    setCookieConsent(); // Establece el consentimiento de cookies en las cookies del navegador
    setShowBanner(false); // Oculta el banner después de aceptar
  };

  // Maneja el cierre del banner sin aceptar las cookies
  const handleCloseBanner = () => {
    setShowBanner(false); // Oculta el banner
  };

  // No renderiza nada si el banner no debe mostrarse
  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <p>
        Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Al aceptar, estás de acuerdo con el uso de cookies, las cuales nos ayudan a analizar el uso
        del sitio y a mejorar la funcionalidad. Para más detalles, por favor, lee nuestra
        <a href="/PoliticaPrivacidad" target="_blank" rel="noopener noreferrer">Política de Privacidad</a>.
      </p>
      <p>
        Su información, incluidos los Datos personales, se procesa en las oficinas operativas de la Compañía y en cualquier otro lugar donde se encuentren las partes involucradas 
        en el procesamiento. Esto significa que esta información puede ser transferida a, y mantenida en,
        computadoras ubicadas fuera de su estado, provincia, país u otra jurisdicción gubernamental donde las leyes de protección de datos
        pueden diferir de las de su jurisdicción.
      </p>
      <button onClick={handleAcceptCookies}>Aceptar</button>
      <button onClick={handleCloseBanner} className="close-button">Cerrar</button>
    </div>
  );
};

export default Banner;
/**
 * showBanner: Estado que controla si el banner de cookies se debe mostrar. Inicialmente es false.

   useEffect: Hook que se ejecuta cuando el componente se monta. Verifica si el consentimiento de cookies ya ha sido dado.
    Si no se ha dado, el banner se muestra.

   handleAcceptCookies: Función que maneja la aceptación de cookies por parte del usuario. 
   Establece el consentimiento de cookies y oculta el banner.

   handleCloseBanner: Función que maneja el cierre del banner sin aceptar las cookies. Solo oculta el banner.

  if (!showBanner) return null: Condición para no renderizar el banner si showBanner es false.
   Esto previene que el banner se muestre cuando no es necesario.
 * 
 */