import React from 'react';
import MenuSection from './MenuSection';
import postreFondo from './img/postres/postrefondo.jpg'; 
import postre1 from './img/postres/postre1.jpg'; 
import postre2 from './img/postres/postre2.jpg'; 
import postre3 from './img/postres/postre3.jpg'; 
import postre4 from './img/postres/postre4.jpg'; 
import postre5 from './img/postres/postre5.jpg'; 
import postre6 from './img/postres/postre6.jpg'; 
import cafe from './img/postres/cafe.jpg'; 
import CardEsqueleto from './CardEsqueleto';

const postresData = [
  {
    image: postre1,
    title: 'TIRAMISÚ',
    description: 'Postre clásico italiano con café, mascarpone y cacao.',
    price: 7.95
  },
  {
    image: postre2,
    title: 'CHEESECAKE',
    description: 'Cheesecake con salsa de frutas del bosque.',
    price: 8.50
  },
  {
    image: postre3,
    title: 'MOUSSE DE CHOCOLATE',
    description: 'Mousse de chocolate suave y cremosa.',
    price: 7.75
  },
  {
    image: postre4,
    title: 'HELADO ARTESANAL',
    description: 'Helado hecho en casa con sabores variados.',
    price: 6.90
  },
  {
    image: postre5,
    title: 'PUDDING DE VAINILLA',
    description: 'Pudding de vainilla con caramelo.',
    price: 6.50
  },
  {
    image: postre6,
    title: 'CUPCAKES VARIADOS',
    description: 'Cupcakes variados con glaseado dulce.',
    price: 5.95
  },
  {
    image: cafe,
    title: 'CAFÉ EXPRESO',
    description: 'Café expreso fuerte y aromático.',
    price: 3.00
  },
];

const Postres = ({ onAddToCart }) => {
  return (
    <div className="menu-section">
      <h2>Postres</h2>
      <div className="row">
        {postresData.map((item, index) => (
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

export default Postres;
