
import React from 'react'
import './Footer.css'
 import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="container-footer">
    <footer className="footer">
    <nav className='navegacion-footer'>
        <div className='link-footer'><Link to="/especialidades">ESPECIALIDADES</Link></div>
        <div className='link-footer'><Link to="/menu">MENU</Link></div>
        <div className='link-footer'><Link to="/carta">CARTA</Link></div>
        <div className='link-footer'><Link to="/reserva">RESERVA</Link></div> 
        <div className='link-footer'><Link to="/contacto">CONTACTO</Link></div> 
    </nav>
    <div className="derechos-reservados">
          &copy; 2024 Derechos Reservados
        </div>
  </footer>
  </div>
  )
}

export default Footer
