import { MapContainer, TileLayer,  } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Mapa.css'
import Markers from './Markers';
import Geolocalizacion from './Geolocalizacion';

const position = [41.4093778,2.1649049 ]
const urlBase = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const atributo = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

const Mapa = () => {
  return <div className="container_mapa"> 
  <div className="container_flex">
         <MapContainer center={ position } zoom={ 13 }>
             <TileLayer url={ urlBase } attribution={ atributo }/>
             <Markers/>
             <Geolocalizacion />
          </MapContainer>
          
          </div>
   </div>
}

export default Mapa;
