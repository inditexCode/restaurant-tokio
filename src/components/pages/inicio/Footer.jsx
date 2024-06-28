
import React from 'react'
import './Footer.css'
 import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="container-footer">
    <footer className="footer">
    <nav className='navegacion-footer'>
        <div className='link-footer'><Link to="/especialidades">Especialidades</Link></div>
        <div className='link-footer'><Link to="/menu">Menu</Link></div>
        <div className='link-footer'><Link to="/carta">Carta</Link></div>
        <div className='link-footer'><Link to="/reserva">Reserva</Link></div> 
    </nav>
    <div className="derechos-reservados">
          &copy; 2024 Derechos Reservados
        </div>
  </footer>
  </div>
  )
}

export default Footer
