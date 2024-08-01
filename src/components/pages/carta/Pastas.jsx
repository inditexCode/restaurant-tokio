import React from 'react';
import MenuSection from './MenuSection';
import pastafondo from './img/pastas/pastafondo.jpg';
import fideoImage from './img/pastas/fideos.jpg'; 
import tallarines from './img/pastas/tallarines.jpg'; 
import tortelini from './img/pastas/tortelini.jpg'; 
import rigatoni from './img/pastas/rigatoni.jpg'; 
import gnnochi from './img/pastas/gnnochi.jpg'; 
import ravioli from './img/pastas/ravioli.jpg';

const pastasData = [
  {
    image: fideoImage,
    title: 'PENNE AL POMODORO',
    description: 'Nuestro Penne al Pomodoro es una celebración de los sabores auténticos de Italia. Esta clásica pasta se elabora con penne perfectamente cocido y una rica salsa de tomate, hecha con tomates frescos, ajo, cebolla y un toque de aceite de oliva virgen extra.',
    price: 14.99
  },
  {
    image: tallarines,
    title: 'SPAGHETTI CARBONARA',
    description: 'Disfruta de nuestro Spaghetti Carbonara, un plato clásico italiano preparado con espaguetis, panceta, huevos frescos, queso Pecorino Romano y pimienta negra. Una combinación perfecta de sabores cremosos y salados que te hará desear más.',
    price: 14.99
  },
  {
    image: tortelini,
    title: 'TORTELLINI AL POMODORO',
    description: 'Nuestro Tortellini al Pomodoro combina tortellini relleno con una salsa pomodoro fresca hecha con tomates maduros, ajo, albahaca y aceite de oliva. Un plato delicioso y clásico que destaca por su sabor suave y auténtico.',
    price: 14.99
  },
  {
    image: rigatoni,
    title: 'RIGATONI',
    description: 'Prueba nuestro Rigatoni con Salsa de la Casa, una receta clásica de pasta rigatoni con una salsa especial hecha con tomates, ajo, cebolla y hierbas frescas. Un plato delicioso que combina sabores tradicionales y auténticos en cada bocado.',
    price: 14.99
  },
  {
    image: gnnochi,
    title: 'GNNOCHI',
    description: 'Nuestro Gnocchi con Salsa de Albahaca está hecho con suaves y esponjosos gnocchi y una fresca y aromática salsa de albahaca. Preparado con albahaca, ajo, piñones y aceite de oliva, este plato es la definición de comida reconfortante y deliciosa.',
    price: 14.99
  },
  {
    image: ravioli,
    title: 'RAVIOLI A LA BOLOÑESA',
    description: 'Disfruta de nuestro Ravioli a la Boloñesa, una pasta de ravioli rellena combinada con una rica salsa boloñesa de carne, cocinada a fuego lento con tomates, zanahorias, apio y vino tinto. Un plato sabroso y reconfortante perfecto para cualquier ocasión.',
    price: 14.99
  },
];

const Pastas = () => {
  return <MenuSection title="PASTAS" headerImage={pastafondo} items={pastasData} />;
};

export default Pastas;





