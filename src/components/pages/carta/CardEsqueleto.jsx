import React from 'react';
import PropTypes from 'prop-types';
import './CardEsqueleto.css';

const CardEsqueleto = ({ image, title, description, price, onOrderClick }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-price">${price}</p>
        <button className="btn btn-primary mt-auto" onClick={onOrderClick}>
          PEDIR A DOMICILIO
        </button>
      </div>
    </div>
  );
};

// Definición de los tipos de las props que el componente espera recibir
CardEsqueleto.propTypes = {
  image: PropTypes.string.isRequired, // URL de la imagen del producto
  title: PropTypes.string.isRequired, // Título del producto
  description: PropTypes.string.isRequired, // Descripción del producto
  price: PropTypes.number.isRequired, // Precio del producto
  onOrderClick: PropTypes.func.isRequired, // Función que se ejecuta al hacer clic en el botón
};

export default CardEsqueleto;





