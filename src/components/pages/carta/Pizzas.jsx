
import React from 'react';
import MenuSection from './MenuSection';
import pizzaFondo from './img/pizzas/pizzafondo.jpg'; // Imagen de fondo para pizzas
import pizza1 from './img/pizzas/pizza1.jpg'; 
import pizza2 from './img/pizzas/pizza2.jpg'; 
import pizza3 from './img/pizzas/pizza3.jpg'; 
import pizza4 from './img/pizzas/pizza4.jpg'; 
import pizza5 from './img/pizzas/pizza5.jpg'; 
import pizza6 from './img/pizzas/pizza6.jpg'; 
import pizza7 from './img/pizzas/pizza7.jpg'; 
import pizza8 from './img/pizzas/pizza8.jpg'; 

const pizzasData = [
  {
    image: pizza1,
    title: '4 QUESOS',
    description: 'Pizza Cuatro Quesos, una deliciosa mezcla de mozzarella, parmesano, gorgonzola y cheddar sobre una base de salsa de tomate. Un plato cremoso y sabroso que enamora con cada bocado.',
    price: 16.55
  },
  {
    image: pizza2,
    title: 'PIZZA DE LA CASA',
    description: 'Disfruta de nuestra Pizza de la Casa, preparada con una mezcla especial de quesos y cebolla caramelizada. Un sabor único y delicioso que te hará querer repetir',
    price: 16.55
  },
  {
    image: pizza3,
    title: 'PEPPERONI',
    description: 'Nuestra PEPPERONI Hawaiian combina jamón, piña y queso mozzarella sobre una base de salsa de tomate. Un contraste de sabores dulces y salados que encantará a todos.',
    price: 16.55
  },
  {
    image: pizza4,
    title: 'PIZZA CON JAMÓN Y VERDURAS',
    description: 'Prueba nuestra Pizza con Jamón y Verduras, cubierta con jamón cocido, queso mozzarella y una selección de verduras frescas. Un plato delicioso que combina sabor y frescura en cada rebanada.',
    price: 16.55
  },
  {
    image: pizza5,
    title: 'VEGETARIAN',
    description: 'Nuestra Prueba nuestra Pizza Vegetarian, cargada de una variedad de verduras frescas, mozzarella y salsa de tomate. Un opción saludable y llena de sabor.',
    price: 16.55
  },
  {
    image: pizza6,
    title: 'MOZZARELLA',
    description: 'Una combinación perfecta de salsa de tomate y queso mozzarella sobre una base crujiente. Un clásico simple y delicioso que siempre satisface.',
    price: 16.55
  },
  {
    image: pizza7,
    title: 'MARGHERITA',
    description: 'Prueba Margherita Pizza Vegetarian, cargada de una variedad de verduras frescas, mozzarella y salsa de tomate. Un opción saludable y llena de sabor.',
    price: 16.15
  },
  {
    image: pizza8,
    title: 'MIX VEGETALES',
    description: 'Pizza mix vegetales, con una mezcla fresca de vegetales, tomates cherry, albahaca y queso mozzarella. Un plato colorido y delicioso que resalta lo mejor de la huerta en cada bocado.',
    price: 16.55
  },
];

const Pizzas = () => {
  return <MenuSection title="PIZZAS" headerImage={pizzaFondo} items={pizzasData} />;
};

export default Pizzas;
