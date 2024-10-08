import React from 'react';
import { useNavigate } from 'react-router-dom';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining'; 
import takeAway from './video-img/take-away.jpg';
import './Pedido.css';

// Componente que muestra el contenido de una tarjeta
const CardContent = ({ subtitle, title, mainTitle, description, items, buttonText, imageSrc, onButtonClick }) => {
  return (
    <div className="contenedor">
      <div className="contenedor_hijo">
        <div className="contenedor_texto">
          <h6>{ subtitle }</h6>
          <h4>{ title }</h4>
          <h2>{ mainTitle }</h2>
          <p>{ description }</p>
          <ul className='listas'>
            {items.map((item, index) => (
              <li key={ index }>
                <span>{ item.boldText }</span> {item.text}
              </li>
            ))}
          </ul>
          <div className="button-container">
            <button onClick={onButtonClick} className="order-button">
              <DeliveryDiningIcon />
              {buttonText}
            </button>
          </div>
        </div>
        <img className='img_card' src={ imageSrc } alt="recoger" />
      </div>
    </div>
  );
};

// Componente Pedido
const Pedido = () => {
  const navigate = useNavigate(); // Hook para la navegación programática

  const cardData = {
    subtitle: "EN LA TAGLIATELLA NO TENÉS QUE ESPERAR",
    title: "TAKE AWAY",
    mainTitle: "HACÉ TU PEDIDO ONLINE Y TE AHORRAS DE LAS LARGAS ESPERAS",
    description: "Hacé tu pedido.! Uno de los mayores beneficios es el ahorro de tiempo. Al hacer tu pedido en línea, puedes evitar largas esperas en el restaurante. Simplemente realizas tu pedido con anticipación y lo recoges cuando esté listo, permitiéndote aprovechar mejor tu tiempo.",
    items: [
      { boldText: "COMPRUEBA TU DIRECCIÓN", text: "a través de nuestra web" },
      { boldText: "HACÉ TU PEDIDO", text: "añade todos los platos favoritos y estarán listos en pocos minutos" },
      { boldText: "DISFRÚTALO", text: "compártelo dónde y con quien quieras" }
    ],
    imageSrc: takeAway
  };

  // Maneja el clic del botón, redirige a la página de la carta
  const handleButtonClick = () => {
    navigate('/carta'); // Redirige a la página de la carta usando react-router
  };

  return (
    <CardContent 
      {...cardData} 
      buttonText="HAZ TU PEDIDO"
      onButtonClick={handleButtonClick} // Redirige a la página de la carta al hacer clic
    />
  );
}

export default Pedido;



