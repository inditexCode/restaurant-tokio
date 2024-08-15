
import React from 'react'
import { useNavigate } from 'react-router-dom'; 
import './BotonReserva.css' 

const BotonReserva = () => {
    // Inicializa el hook useNavigate para permitir la navegación programática
    const navigate = useNavigate();
    
    // Función para manejar el clic en el botón, redirige a la página de reserva
    const reservaClick = () => {
        navigate('/reserva');
    }

    return (
        <div className='container-button'>
            <button 
                type="button" 
                className='button' 
                onClick={reservaClick} 
            >
                RESERVAR
            </button>
        </div>
    )
}

export default BotonReserva;
