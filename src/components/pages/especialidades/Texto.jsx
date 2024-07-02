import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Texto.css'

const items = [
    {title:'Pesto rosso panna', descripcion:'Crema, tomate seco, piñones, queso y nueces.'},
    {title:'Vera Napoletana', descripcion:'Salsa de tomate, Mozzarella, albahaca, pesto y aceite Alioli'},
    {title:'Tartufo al parmigiano', descripcion:'Trufa negra, Parmigiano y huevo frito'},
    {title:'Bolognese', descripcion:'Bolognese'},
    {title:'Ragú antico', descripcion:'Longaniza casera, stracciatella de burrata, champigñones'},
    {title:'Arrabibiata', descripcion:'Tomate, salami, picante de Calabria, cebolla, ajo y albahaca'},
    {title:'Marbonara', descripcion:'Carbonara, con cola de langostino y panceta italiana0'},
    {title:'Casalinga', descripcion:'Longaniza casera, tomate, quesos, albahaca, aceite'},
    {title:'Pesto', descripcion:'Albahaca, piñones y Grana Padano'},
    {title:'Calabrese', descripcion:'Tomate confitado, Grana y cebolla'},
    {title:'Peperoni e gamberi', descripcion:'Ajo, aceite, cola de langostino'},
    {title:'Rustica', descripcion:'Bacon, aceituno negras, tomate'},
]

const Texto = () => {
    const navigate = useNavigate();
    const reservaClick = () => {
        navigate('/reserva')
    }
    const renderItem = () =>{
        return items.map((item, index) => (
        <div className='item-salsa' key={index}>
            <li>
                <h6> {item.title} </h6>
                <p> {item.descripcion} </p>
            </li>
        </div>
        ))
    }
  return (
    <div className='container-texto'>
        <h3>Elija su salsa</h3>
      <ul>
        <div className="li-texto">
         { renderItem() }
        </div>
      </ul>
      <button type="button"
       className='button'
       onClick={ reservaClick }
       >RESERVAR</button>

    </div>

  )
}

export default Texto
