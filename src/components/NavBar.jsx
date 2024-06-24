
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style/NavBar.css'; // Esta es la ruta correcta para importar el CSS

const NavBar = () => {
  return (
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link  to='/' className="navbar-brand" href="#">Logo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to='/' className="nav-link" >Inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/carta' className="nav-link" >Carta</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/especialidades' className="nav-link" >Especialidades</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/menu' className="nav-link">Menú grupal</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/reserva' className="nav-link">Reserva</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
)}

export default NavBar
