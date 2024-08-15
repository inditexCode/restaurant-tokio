import { MapContainer, TileLayer } from 'react-leaflet'; // Importa los componentes MapContainer y TileLayer de react-leaflet
import 'leaflet/dist/leaflet.css'; // Importa los estilos CSS de Leaflet
import './Mapa.css'; 
import Markers from './Markers'; // Importa el componente Markers que contiene los marcadores del mapa
import Geolocalizacion from './Geolocalizacion'; // Importa el componente Geolocalizacion para la geolocalización del usuario

// Coordenadas para el centro del mapa
const position = [41.4093778, 2.1649049];

// URL base para los tile del mapa (OpenStreetMap)
const urlBase = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

// Atributo de atribución para los tile de OpenStreetMap
const atributo = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const Mapa = () => {
  return (
    <div className="container_mapa"> {/* Contenedor principal para el mapa */}
      <div className="container_flex"> {/* Contenedor para alinear el mapa */}
        {/* Mapa de Leaflet */}
        <MapContainer center={position} zoom={13}> {/* Configura el contenedor del mapa con el centro y el nivel de zoom */}
          <TileLayer url={urlBase} attribution={atributo} /> {/* Capa de tiles para el mapa con URL base y atribución */}
          <Markers /> {/* Componente que añade los marcadores al mapa */}
          <Geolocalizacion /> {/* Componente para permitir la geolocalización del usuario */}
        </MapContainer>
      </div>
    </div>
  );
};

export default Mapa; // Exporta el componente Mapa

/**
 * MapContainer y TileLayer son componentes de react-leaflet que se utilizan para renderizar el mapa y sus capas de tiles.
   leaflet/dist/leaflet.css proporciona los estilos predeterminados necesarios para que Leaflet funcione correctamente.
 */