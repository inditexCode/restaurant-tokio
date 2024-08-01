


import React from 'react';
import MenuSection from './MenuSection';
import drinksFondo from './img/drinks/drinksfondo.jpg'; // Imagen de fondo para pizzas
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


const drinksData = [
  {
    image: drinks1,
    title: 'COCACOLA',
    description: 'Refrescante sabor',
    price: 15.85
  },
  {
    image: drinks2,
    title: 'MOJITO',
    description: 'Refresca tu día con un clásico mojito: ron, menta, lima y soda. Perfecto para cualquier ocasión.',
    price: 15.85
  },
  {
    image: drinks3,
    title: 'COSMOPOLITAN',
    description: 'Un cosmopolitan elegante: vodka, triple sec, arándano y lima. Perfecto para una noche especial.',
    price: 15.85
  },
  {
    image: drinks4,
    title: 'CAHIPIRINHA',
    description: 'Prueba una auténtica caipirinha brasileña con cachaça, lima y azúcar. Sencillo y delicioso',
    price: 15.85
  },
  {
    image: drinks5,
    title: 'CERVEZA',
    description: 'Deliciosa cerveza artesanal',
    price: 15.85
  },
  {
    image: drinks6,
    title: 'MARGARITA',
    description: 'Disfruta una margarita clásica con tequila, triple sec y jugo de limón. Ideal para una tarde soleada.',
    price: 15.85
  },
  {
    image: drinks7,
    title: 'MARTINI',
    description: 'Un martini clásico: gin y vermut seco, decorado con una aceituna. Puro estilo y elegancia',
    price: 15.85
  },
  {
    image: drinks8,
    title: 'NEGRONI',
    description: 'Disfruta un negroni clásico: gin, vermut y Campari. Un aperitivo amargo y sofisticado.',
    price: 14.50
  },
  {
    image: drinks9,
    title: 'DAIQUIRÍ',
    description: 'Refréscate con un daiquiri: ron, jugo de limón y azúcar. Simple y deliciosamente cítrico.',
    price: 14.50
  },
  {
    image: drinks10,
    title: 'AGUA MINERAL',
    description: 'Agua mineral de manantial',
    price: 14.50
  },
];

const Drinks = () => {
  return <MenuSection title="DRINKS" headerImage={drinksFondo} items={drinksData} />;
};

export default Drinks;
