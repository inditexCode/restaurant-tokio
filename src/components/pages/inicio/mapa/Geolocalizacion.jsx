import React, { useState } from 'react'; // Importa React y useState para el manejo del estado
import { Marker, Tooltip, useMapEvents } from 'react-leaflet'; // Importa los componentes Marker, Tooltip y useMapEvents de react-leaflet
import FmdGoodIcon from '@mui/icons-material/FmdGood'; // Importa el ícono de ubicación desde Material UI

const Geolocalizacion = () => {

    // Estado para almacenar la posición actual del usuario
    const [posicion, setPosicion] = useState(null);

    // Hook para manejar eventos del mapa
    const map = useMapEvents({
        click() {
            // Al hacer clic en el mapa, solicita la ubicación del usuario
            map.locate();
        },
        locationfound(e) {
            // Cuando se encuentra la ubicación del usuario, actualiza el estado y centra el mapa en la ubicación
            setPosicion(e.latlng); // Actualiza la posición con las coordenadas encontradas
            map.flyTo(e.latlng, map.getZoom()); // Centra el mapa en la ubicación encontrada
        }
    });

    // Renderiza un marcador con un tooltip si se ha encontrado una ubicación
    return posicion === null ? null : (
        <Marker position={posicion}> {/* Marca la posición en el mapa */}
            <Tooltip permanent direction="top">
                <b>Usted se encuentra aquí <FmdGoodIcon /> </b> {/* Tooltip con el ícono de ubicación */}
            </Tooltip>
        </Marker>
    );
};

export default Geolocalizacion; // Exporta el componente Geolocalizacion
