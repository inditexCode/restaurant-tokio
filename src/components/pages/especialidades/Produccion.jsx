import React from 'react'
import fondo from './img/fondo-prod.jpg';  
import canelones from './img/canelones.jpg';  
import cappelleti from './img/cappelleti.jpg';  
import tortellini from './img/tortellini.jpg';  
import lasagna from './img/lasagna.jpg';  
import ravioli from './img/ravioli.jpg'; 
import gnocchi from './img/gnocchi.jpg';  
import './Produccion.css'
import Texto from './Texto';

const pastas = [
  { src: canelones, alt: 'canelones', name: 'Canelones' },
  { src: cappelleti, alt: 'cappelleti', name: 'Cappelleti' },
  { src: tortellini, alt: 'tortellini', name: 'Tortellini' },
  { src: lasagna, alt: 'lasagna', name: 'Lasagna' },
  { src: ravioli, alt: 'ravioli', name: 'Ravioli' },
  { src: gnocchi, alt: 'gnocchi', name: 'Gnocchi' }
];

const Produccion = () => {
  const renderPastaImages = () => {
    return pastas.map((pasta, index) => (
      <div className="pasta-item" key={index}>
        <img src={pasta.src} alt={pasta.alt} />
        <h5>{pasta.name}</h5>
      </div>
    ));
  }

  return (
    <div className='container-produccion'>
      <div className="container-info">
        <div className="img">
          <img src={fondo} alt="fondo" />
        </div>
        <div className="img-pasta">
          {renderPastaImages()}
        </div>
        <Texto></Texto>

      </div>

      <div className="container-texto">
      </div>
    </div>
  )
}

export default Produccion


