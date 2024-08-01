
import React from 'react';
import MenuSection from './MenuSection';
import ensaladaFondo from './img/ensaladas/ensaladafondo.jpg'; // Imagen de fondo para pizzas
import ensalada1 from './img/ensaladas/ensalada1.jpg'; 
import ensalada2 from './img/ensaladas/ensalada2.jpg'; 
import ensalada3 from './img/ensaladas/ensalada3.jpg'; 
import ensalada4 from './img/ensaladas/ensalada4.jpg'; 
import ensalada5 from './img/ensaladas/ensalada5.jpg'; 
import ensalada6 from './img/ensaladas/ensalada6.jpg'; 

const ensaladaData = [
  {
    image: ensalada1,
    title: 'ENSALADA DE LA HUERTA',
    description: 'Disfruta de la frescura en cada bocado con nuestra ensalada de la huerta casera. Cultivamos nuestras propias verduras para ofrecerte una mezcla crujiente y sabrosa de lechugas, tomates, pepinos y zanahorias. Un deleite directo del jardín a tu mesa.',
    price: 9.45,
  },
  {
    image: ensalada2,
    title: 'ENSALADA ORGÁNICA',
    description: 'Descubre el sabor puro y auténtico de nuestra ensalada orgánica gourmet. Utilizamos ingredientes 100% orgánicos, seleccionados cuidadosamente para brindarte una experiencia culinaria saludable y deliciosa. Desde espinacas tiernas hasta aguacates cremosos, cada ingrediente es una celebración de la naturaleza.',
    price: 11.25,
  },
  {
    image: ensalada3,
    title: 'ENSALADA MEDITERRÁNEA',
    description: 'Lleva tu paladar de viaje con nuestra ensalada mediterránea, una combinación vibrante de aceitunas, tomates cherry, pepinos y queso feta. Aliñada con aceite de oliva virgen extra y hierbas frescas, esta ensalada es perfecta para quienes buscan un toque fresco y lleno de sabor.',
    price: 9.85,
  },
  {
    image: ensalada4,
    title: 'ENSALADA CÉSAR CLÁSICA',
    description: 'Revive la elegancia de lo tradicional con nuestra ensalada César clásica. Con hojas de lechuga romana crujiente, crocantes crutones y queso parmesano rallado, todo mezclado con un aderezo César cremoso. Un clásico atemporal que nunca pasa de moda."',
     price: 8.55,  
  },
  {
    image: ensalada5,
    title: 'ENSALADA TROPICAL',
    description: 'Dale un toque exótico a tu mesa con nuestra ensalada tropical. Piña fresca, mango jugoso y rodajas de pepino se unen en una mezcla refrescante y vibrante. Perfecta para los días calurosos, esta ensalada es un festín de sabores tropicales que te transportará a una isla paradisíaca.',
     price: 9.98,  
  },
  {
    image: ensalada6,
    title: 'ENSALADA MIX',
    description: 'Una combinación perfecta, tomates cherry, pepinos y queso feta Con hojas de lechuga romana crujiente, crocantes crutones y queso parmesano, una mezcla refrescante y vibrante. Perfecta para los días calurosos, esta ensalada es un festín de sabores  ',
     price: 9.25,  
  },
];

const Ensaladas = () => {
  return <MenuSection title="ENSALADAS" headerImage={ensaladaFondo} items={ensaladaData} />;
};

export default Ensaladas;
