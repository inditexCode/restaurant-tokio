import React from 'react';
import InfoUsuario from './formulario/InfoUsuario';
import MenuInicio from '../pages/inicio/MenuInicio';
import Redes from '../pages/inicio/Redes';
import './Perfil.css';

const Perfil = () => {
  return (
    <div className='perfil-page'>
            <h1>INFORMACIÒN PERSONAL</h1>
      <InfoUsuario />
      <MenuInicio />
      <Redes />
    </div>
  );
};

export default Perfil;

