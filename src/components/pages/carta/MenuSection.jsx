import React from 'react';
import CardEsqueleto from './CardEsqueleto';
import './MenuSection.css';

const MenuSection = ({ title, headerImage, items, onAddToCart }) => {
  const handleAddToCart = (item) => {
    // Verificar si `onAddToCart` es una función
    if (typeof onAddToCart === 'function') {
      onAddToCart(item);
    } else {
      console.error('onAddToCart no es una función');
    }
  };

  return (
    <div className="container">
      <div className="contenedor_cabecera">
        <img src={headerImage} alt="fondo" className="cabecera-imagen" />
        <h2 className="titulo_cabecera">{title}</h2>
      </div>
      <div className="row">
        {items.map((item, index) => (
          <div className="columna" key={index}>
            <CardEsqueleto
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price || 0} // Valor predeterminado
              onOrderClick={() => handleAddToCart(item)}
            />
          </div>
        ))}
      </div>
      <div className="separador"></div>
    </div>
  );
};

export default MenuSection;
