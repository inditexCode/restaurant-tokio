import React, { useEffect } from 'react';
import Drinks from './Drinks';
import Pizzas from './Pizzas';
import Ensaladas from './Ensaladas';
import Pastas from './Pastas';
import Postres from './Postres';
import Redes from '../inicio/Redes';

const Carta = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      <div>
        <div id="pastas"><Pastas /></div>
        <div id="pizzas"><Pizzas /></div>
        <div id="ensaladas"><Ensaladas /></div>
        <div id="postres"><Postres /></div>
        <div id="drinks"><Drinks /></div>
      </div>
      <Redes />
    </>
  );
}

export default Carta;




