import React from 'react';
import MenuSection from './MenuSection';
import drinksFondo from './img/drinks/drinksfondo.jpg'; 
import drinks1 from './img/drinks/drinks1.jpg'; 
import drinks2 from './img/drinks/drinks2.jpg'; 
import drinks3 from './img/drinks/drinks3.jpg'; 
import drinks4 from './img/drinks/drinks4.jpg'; 
import drinks5 from './img/drinks/drinks5.jpg'; 
import drinks6 from './img/drinks/drinks6.jpg';
import drinks7 from './img/drinks/drinks7.jpg'; 
import drinks8 from './img/drinks/drinks8.jpg'; 
import drinks9 from './img/drinks/drinks9.jpg'; 
import drinks10 from './img/drinks/drinks10.jpg'; 
import CardEsqueleto from './CardEsqueleto';

const drinksData = [
  {
    image: drinks1,
    title: 'COCACOLA',
    description: 'Refrescante bebida de cola.',
    price: 15.85
  },
  {
    image: drinks2,
    title: 'MOJITO',
    description: 'Cóctel clásico de ron, menta y limón.',
    price: 16.00
  },
  {
    image: drinks3,
    title: 'JUGO DE NARANJA',
    description: 'Jugo de naranja fresco y natural.',
    price: 12.50
  },
  {
    image: drinks4,
    title: 'AGUA MINERAL',
    description: 'Agua mineral con gas.',
    price: 8.99
  },
  {
    image: drinks5,
    title: 'CERVEZA ARTESANAL',
    description: 'Cerveza artesanal local.',
    price: 18.00
  },
  {
    image: drinks6,
    title: 'TE VERDE',
    description: 'Té verde refrescante.',
    price: 14.00
  },
  {
    image: drinks7,
    title: 'BEBIDA ENERGÉTICA',
    description: 'Bebida energética para revitalizarte.',
    price: 16.50
  },
  {
    image: drinks8,
    title: 'REFRESCO DE LIMÓN',
    description: 'Refresco de limón burbujeante.',
    price: 13.75
  },
  {
    image: drinks9,
    title: 'BATIDO DE FRESA',
    description: 'Batido de fresa cremoso y delicioso.',
    price: 17.00
  },
  {
    image: drinks10,
    title: 'COCA COLA LIGHT',
    description: 'Coca-Cola sin azúcar.',
    price: 15.85
  },
];

const Drinks = ({ onAddToCart }) => {
  return (
    <div className="menu-section">
      <h2>Bebidas</h2>
      <div className="row">
        {drinksData.map((item, index) => (
          <div className="columna" key={index}>
            <CardEsqueleto
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              onOrderClick={() => onAddToCart(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drinks;
