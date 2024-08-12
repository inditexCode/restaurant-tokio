// src/components/Banner.jsx
import React, { useState, useEffect } from 'react';
import { getCookieConsent, setCookieConsent } from '../cookies/Consent';
import './Banner.css'; // Importar los estilos del banner

const Banner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    setCookieConsent();
    setShowBanner(false);
  };

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  if (!showBanner) return null; // No renderizar nada si el banner no debe mostrarse

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
