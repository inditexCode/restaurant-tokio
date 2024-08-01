import React from 'react';
import './MenuInicio.css';
import pizza from './video-img/pizza.1.jpg';
import pastas from './video-img/pastas.jpg';
import ensaladas from './video-img/ensaladas.jpg';
import postres from './video-img/postres.jpg';
import drinks from './video-img/drinks.jpg';

const menuItems = [
  { title: 'pizzas', imagen: pizza, link: '/carta#pizzas' },
  { title: 'pastas', imagen: pastas, link: '/carta#pastas' },
  { title: 'ensaladas', imagen: ensaladas, link: '/carta#ensaladas' },
  { title: 'postres', imagen: postres, link: '/carta#postres' },
  { title: 'drinks', imagen: drinks, link: '/carta#drinks' }
];

const MenuItem = ({ title, image, link }) => (
  <li className='menu-item'>
    <a href={link} className='menu-link'>
      <img src={image} alt={title} className='menu-image'/>
      <div className='menu-overlay'>
        <p className='menu-title'>{title}</p>
      </div>
    </a>
  </li>
);

const MenuInicio = () => {
  return (
    <div className='menu-container'>
      <h5>DESCUBRE LO MEJOR DE NUESTRA CARTA</h5>
      <ul className='menu-list'>
        {menuItems.map((item, index) => (
          <MenuItem key={index} title={item.title} image={item.imagen} link={item.link} />
        ))}
      </ul>
    </div>
  );
}

export default MenuInicio;



