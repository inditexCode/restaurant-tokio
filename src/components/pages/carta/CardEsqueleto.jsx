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

CardEsqueleto.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onOrderClick: PropTypes.func.isRequired,
};

export default CardEsqueleto;





