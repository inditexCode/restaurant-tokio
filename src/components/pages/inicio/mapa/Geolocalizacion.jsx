import React, { useState } from 'react'
import { Marker,Tooltip, useMapEvents } from 'react-leaflet'
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const Geolocalizacion = () => {

    const [posicion, setPosicion] = useState(null)

    const map = useMapEvents({
        click() 
        { map.locate() 
          },
          locationfound(e){
            setPosicion(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        }
    })
    
  return posicion === null ? null : (
    <Marker position={ posicion }>
     <Tooltip permanent direction="top"><b>Usted se encuentra aquí <FmdGoodIcon /> </b></Tooltip>
    </Marker>
  )
}

export default Geolocalizacion
