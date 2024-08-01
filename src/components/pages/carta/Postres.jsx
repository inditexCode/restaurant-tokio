

import React from 'react';
import MenuSection from './MenuSection';
import postreFondo from './img/postres/postrefondo.jpg'; // Imagen de fondo para pizzas
import postre1 from './img/postres/postre1.jpg'; 
import postre2 from './img/postres/postre2.jpg'; 
import postre3 from './img/postres/postre3.jpg'; 
import postre4 from './img/postres/postre4.jpg'; 
import postre5 from './img/postres/postre5.jpg'; 
import postre6 from './img/postres/postre6.jpg'; 
import cafe from './img/postres/cafe.jpg'; 


const postreData = [
  {
    image: postre1,
    title: 'ENSALADA DE LA HUERTA',
    description: 'Disfruta de la frescura en cada bocado con nuestra ensalada de la huerta casera. Cultivamos nuestras propias verduras para ofrecerte una mezcla crujiente y sabrosa de lechugas, tomates, pepinos y zanahorias. Un deleite directo del jardín a tu mesa.',
    price: 6.65
  },
  {
    image: postre2,
    title: 'HELADO CREMA Y FRUTILLA',
    description: 'Disfruta la combinación perfecta con nuestro helado de crema y frutilla. La cremosidad se mezcla con frescas frutillas, creando un balance ideal de dulzura y acidez. Un clásico reconfortante que deleita en cada bocado.',
    price: 6.65
  },
  {
    image: postre3,
    title: 'TORTA ARÁNDANOS MIXTOS',
    description: 'Nuestro pastel de arándanos mixtos es una obra maestra de sabores. La masa esponjosa se complementa con una mezcla de arándanos frescos y dulces. Perfecto para cualquier ocasión, este pastel es un festín para los sentidos.',
    price: 6.65
  },
  {
    image: postre4,
    title: 'HELADO CREMA Y CHOCOLATE',
    description: 'Sumérgete en el placer indulgente con nuestro helado de chocolate. Cremoso y decadente, está hecho con el mejor cacao para ofrecerte una experiencia rica y satisfactoria. Ideal para los amantes del chocolate, cada cucharada es pura delicia."',
    price: 6.65
  },
  {
    image: postre5,
    title: 'HELADO CREMA Y MORA',
    description: 'Refresca tus sentidos con nuestro helado de crema y mora. La suavidad de la crema se combina con la frescura de las mora, creando una mezcla deliciosa y vibrante. Ideal para el verano, es un postre que te enamorará.',
    price: 6.65
  },
  {
    image: postre6,
    title: 'TORTA DE CHOCOLATE',
    description: 'Deléitate con nuestro exquisito pastel de chocolate. Rico y húmedo, está hecho con el mejor chocolate para un sabor intenso y profundo. Perfecto para los amantes del chocolate, cada bocado es una experiencia deliciosa y memorable.',
    price: 6.65
  },
  {
    image: cafe,
    title: 'CAFÉ ARTESANAL',
    description: 'Dale un toque especial a tu día con nuestro café artesanal. Elaborado con granos seleccionados de las mejores cosechas, cada taza ofrece un sabor profundo y aromático. Perfecto para los amantes del café, este elixir es una delicia que despertará tus sentidos y te llenará de energía.',
    price: 3.15
  },
];

const Postres = () => {
  return <MenuSection title="POSTRES" headerImage={postreFondo} items={postreData} />;
};

export default Postres;
