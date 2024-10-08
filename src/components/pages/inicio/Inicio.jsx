
import React from 'react'
import Header from './Header';
import Novedades from './Novedades';
import MenuInicio from './MenuInicio';
import Pedido from './Pedido';
import Comentarios from './hook/Comentarios';
import Chef from './Chef';
import Redes from './Redes';
import Mapa from './mapa/Mapa';
import Footer from './Footer';


const Inicio = () => {
  return (
       <>
       <Header></Header>
       <Novedades></Novedades>
       <MenuInicio></MenuInicio>
       <Pedido></Pedido>
       <Mapa></Mapa>
       <Comentarios></Comentarios>
       <Chef></Chef>
       <Redes></Redes>
       <Footer></Footer>
       </>
  );
};

export default Inicio;

