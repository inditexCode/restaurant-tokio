import React from 'react';
import './PoliticaPrivacidad.css'; // Importa el archivo CSS para los estilos

const PoliticaPrivacidad = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Política de Privacidad</h1>
      <p className="privacy-update-date">Última actualización: 12 de agosto de 2024</p>

      <p className="privacy-text">
        Esta Política de Privacidad describe Nuestras políticas y procedimientos sobre la recopilación, el uso y la
        divulgación de Su información cuando utiliza el Servicio y le informa sobre Sus derechos de privacidad y cómo
        la ley lo protege.
      </p>
      <p className="privacy-text">
        Utilizamos sus datos personales para proporcionar y mejorar el Servicio. Al utilizar el Servicio, Usted acepta
        la recopilación y el uso de información de acuerdo con esta Política de Privacidad. Esta Política de Privacidad
        ha sido creada con la ayuda del Generador de Políticas de Privacidad.
      </p>

      <h2 className="privacy-subtitle">Interpretación y definiciones</h2>
      <h3 className="privacy-subsection-title">Interpretación</h3>
      <p className="privacy-text">
        Las palabras cuyas letras iniciales se escriben en mayúscula tienen significados definidos bajo las siguientes
        condiciones. Las siguientes definiciones tendrán el mismo significado independientemente de que aparezcan en
        singular o en plural.
      </p>

      <h3 className="privacy-subsection-title">Definiciones</h3>
      <ul className="privacy-list">
        <li className="privacy-list-item">
          <strong>Cuenta:</strong> se refiere a una cuenta única creada para que Usted acceda a nuestro Servicio o a
          partes de nuestro Servicio.
        </li>
        {/* Continúa con las demás definiciones aquí */}
      </ul>

      {/* Continúa con el resto de tu política de privacidad */}
      <h2 className="privacy-subtitle">Recopilación y uso de sus datos personales</h2>
      <h3 className="privacy-subsection-title">Tipos de datos recopilados</h3>
      <p className="privacy-text">
        {/* Aquí sigue la descripción de los datos recopilados */}
      </p>

      {/* Sección de contacto */}
      <div className="privacy-contact">
        <h2 className="privacy-subtitle">Contacto</h2>
        <p className="privacy-text">
          Si tiene alguna pregunta sobre esta Política de Privacidad, puede contactarnos por correo electrónico:
        </p>
        <a href="mailto:pruebatokio69@gmail.com" className="privacy-email">
          pruebatokio69@gmail.com
        </a>
      </div>
    </div>
  );
};

export default PoliticaPrivacidad;
