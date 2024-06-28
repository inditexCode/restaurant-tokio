import React from 'react'
import { Marker , Tooltip} from 'react-leaflet'
import IconFood from '@mui/icons-material/Dining';


const Markers = () => {
  const positions = [
    [41.4093778, 2.1649049],
  ]
  return (
    <div>
        {positions.map((position, index) => (
          <Marker key={ index } position={ position }>
             <Tooltip permanent direction="top">
                  <b>La tagliatela <IconFood sx={{ fontSize: 36 }} className='icon-food'/> </b><br /> Av. Manzana 25 A
             </Tooltip>
          </Marker>
        ))}
    </div>
  )
}

export default Markers
