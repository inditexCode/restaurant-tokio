import React from 'react';
import MenuSection from './MenuSection';
import pastafondo from './img/pastas/pastafondo.jpg';
import fideoImage from './img/pastas/fideos.jpg'; 
import tallarines from './img/pastas/tallarines.jpg'; 
import tortelini from './img/pastas/tortelini.jpg'; 
import rigatoni from './img/pastas/rigatoni.jpg'; 
import gnnochi from './img/pastas/gnnochi.jpg'; 
import ravioli from './img/pastas/ravioli.jpg'; 
import CardEsqueleto from './CardEsqueleto';

const pastasData = [
  {
    image: fideoImage,
    title: 'PENNE AL POMODORO',
    description: 'Penne con salsa de tomate fresca, albahaca y queso parmesano. Un plato clásico y sabroso.',
    price: 14.99
  },
  {
    image: tallarines,
    title: 'SPAGHETTI CARBONARA',
    description: 'Spaghetti con salsa carbonara cremosa hecha con panceta, huevo y queso parmesano.',
    price: 14.99
  },
  {
    image: tortelini,
    title: 'TORTELLINI AL RAGÚ',
    description: 'Tortellini relleno de carne, servido con una salsa rústica de ragú.',
    price: 16.49
  },
  {
    image: rigatoni,
    title: 'RIGATONI ALLA NORMA',
    description: 'Rigatoni con berenjenas, tomate y ricotta salata. Un plato típico siciliano.',
    price: 15.50
  },
  {
    image: gnnochi,
    title: 'GNOCCHI SORRENTINA',
    description: 'Ñoquis en salsa de tomate con mozzarella fundida, al horno.',
    price: 15.75
  },
  {
    image: ravioli,
    title: 'RAVIOLI DE ESPINACAS',
    description: 'Ravioli relleno de espinacas y ricotta en salsa de mantequilla y salvia.',
    price: 16.20
  },
];

const Pastas = ({ onAddToCart }) => {
  return (
    <div className="menu-section">
      <h2>Pastas</h2>
      <div className="row">
        {pastasData.map((item, index) => (
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

export default Pastas;



