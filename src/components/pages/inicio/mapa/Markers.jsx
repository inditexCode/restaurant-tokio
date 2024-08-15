import React from 'react';
import { Marker, Tooltip } from 'react-leaflet'; // Importa los componentes Marker y Tooltip de react-leaflet
import IconFood from '@mui/icons-material/Dining'; 

const Markers = () => {
  // Array de posiciones para los marcadores en el mapa
  const positions = [
    [41.4093778, 2.1649049], // Coordenadas del marcador
  ];

  return (
    <div>
      {/* Mapea cada posición para crear un marcador en el mapa */}
      {positions.map((position, index) => (
        <Marker key={index} position={position}>
          {/* Tooltip que aparece sobre el marcador */}
          <Tooltip permanent direction="top">
            <b>
              il Napoli <IconFood sx={{ fontSize: 36 }} className='icon-food' /> 
            </b><br />
            Av. Manzana 25 A
          </Tooltip>
        </Marker>
      ))}
    </div>
  );
};

export default Markers;
