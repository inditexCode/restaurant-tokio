import React from 'react';
import InfoUsuario from './InfoUsuario';
import HistorialOrder from './HistorialOrder';
import ComidaPreferida from './ComidaPreferida';


const Perfil = () => {
  return (
    <div>
      <h1>Mi Perfil</h1>
       <InfoUsuario />
       <HistorialOrder />
       <ComidaPreferida />
    </div>
  );
};

export default Perfil;
