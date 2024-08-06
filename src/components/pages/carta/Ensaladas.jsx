import React from 'react';
import MenuSection from './MenuSection';
import ensaladaFondo from './img/ensaladas/ensaladafondo.jpg'; 
import ensalada1 from './img/ensaladas/ensalada1.jpg'; 
import ensalada2 from './img/ensaladas/ensalada2.jpg'; 
import ensalada3 from './img/ensaladas/ensalada3.jpg'; 
import ensalada4 from './img/ensaladas/ensalada4.jpg'; 
import ensalada5 from './img/ensaladas/ensalada5.jpg'; 
import ensalada6 from './img/ensaladas/ensalada6.jpg'; 
import CardEsqueleto from './CardEsqueleto';

const ensaladasData = [
  {
    image: ensalada1,
    title: 'ENSALADA DE LA HUERTA',
    description: 'Ensalada fresca con una mezcla de vegetales y aderezo ligero.',
    price: 9.45
  },
  {
    image: ensalada2,
    title: 'ENSALADA CEASAR',
    description: 'Lechuga romana, croutones y aderezo César con parmesano.',
    price: 10.55
  },
  {
    image: ensalada3,
    title: 'ENSALADA GRIEGA',
    description: 'Tomates, pepinos, aceitunas, queso feta y aderezo griego.',
    price: 11.00
  },
  {
    image: ensalada4,
    title: 'ENSALADA TEMPLADA DE POLLO',
    description: 'Pollo a la parrilla sobre una cama de hojas verdes y aderezo balsámico.',
    price: 12.45
  },
  {
    image: ensalada5,
    title: 'ENSALADA DE QUINOA',
    description: 'Quinoa con vegetales asados y aderezo de limón.',
    price: 12.75
  },
  {
    image: ensalada6,
    title: 'ENSALADA VEGANA',
    description: 'Mezcla de vegetales frescos con aderezo de aguacate.',
    price: 13.00
  },
];

const Ensaladas = ({ onAddToCart }) => {
  return (
    <div className="menu-section">
      <h2>Ensaladas</h2>
      <div className="row">
        {ensaladasData.map((item, index) => (
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

export default Ensaladas;
