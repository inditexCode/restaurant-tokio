import React from 'react';
import CardEsqueleto from './CardEsqueleto';
import './MenuSection.css';

const MenuSection = ({ title, headerImage, items }) => {
  const handleOrderClick = (item) => {
    alert(`Has pedido: ${item.title}`);
    // Aquí puedes agregar la lógica para añadir el item al carrito de compras
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
              onOrderClick={() => handleOrderClick(item)}
            />
          </div>
        ))}
      </div>
      <div className="separador"></div>
    </div>
  );
};

export default MenuSection;

