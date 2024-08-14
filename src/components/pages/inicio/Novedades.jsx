import React from 'react'
import './Novedades.css'; 
import imgpizzaLibre from './video-img/pizza-horno.jpg';  
import huerta from './video-img/huertas.jpg';  
import GrassIcon from '@mui/icons-material/Grass';
import IconFood from '@mui/icons-material/Dining';
import BotonReserva from '../reserva/BotonReserva';





const Novedades = () => {

  

  return (
    <>
      <div className="container">
        <div className="cabecera-novedades">
          <h6>NOVEDADES</h6>
          <h4>Nuevo en il Napoli</h4>
        </div>
        <div className="body-novedades">
          <div className="card">
            <img src={ imgpizzaLibre } className="card-img-top" alt="imagen-pizza" />
            <div className="card-body">
              <h5 className="card-title"><IconFood sx={{ fontSize: 36 }} className='icon-food'/> TODOS LOS MIÉRCOLES TENEDOR LIBRE</h5>
              <span><p>¡ VENÍ A DISFRUTAR DE NUESTRAS VARIEDADES DE PIZZAS. SIN LIMITES !</p></span>
              <p className="card-text">
                Descubre una experiencia única cada miércoles en il Napoli: ¡Día de Pizzas Libres! 
                Sumérgete en un festín de sabores con nuestra selección exclusiva de pizzas artesanales,
                 donde cada bocado es una obra maestra de la cocina italiana. Desde clásicas margaritas
                  hasta extravagantes combinaciones gourmet, cada pizza está preparada con ingredientes frescos y auténticos.
                   Únete a nosotros y disfruta de una velada inolvidable de camaradería y sabor.
                 ¡Reserva tu mesa ahora y déjate cautivar por el encanto de nuestras pizzas libres!
                 </p>
                 <BotonReserva></BotonReserva>
            </div>
          </div>
          <div className="card">
            <img src={ huerta } className="card-img-top" alt="imagen-huerta" />
            <div className="card-body">
              <h5 className="card-title"><GrassIcon sx={{ fontSize: 36 }} className='icon-grass'/> ¡ SOMOS VERDE !</h5>
              <span><p className='frase'>¡ ESTÁ EN NUESTRAS MANOS HACER UN MUNDO MEJOR !</p></span>
                           <p className="card-text">
                           En nuestro restaurante, creemos en la importancia de ofrecer alimentos frescos, saludables y sostenibles.
                            Por eso, todos nuestros productos provienen de nuestra propia huerta orgánica, cultivada con amor y respeto por la naturaleza.
                             te contamos cómo producimos estos ingredientes de calidad y los beneficios que aportan a tu salud y al medio ambiente.
                             Nuestra huerta orgánica se encuentra en un entorno natural, libre de pesticidas y químicos nocivos. Utilizamos métodos de cultivo sostenible que respetan el ciclo natural de las plantas y promueven la biodiversidad
                             Nuestro compromiso no termina en la huerta. Una vez cosechados, nuestros productos se transportan directamente a nuestra cocina, donde nuestros chefs los transforman en deliciosos platos que reflejan la frescura y calidad de los ingredientes. 
                             Este proceso de la huerta a la mesa garantiza que cada platillo que servimos esté lleno de nutrientes y sabor, y que esté alineado con nuestra filosofía de sostenibilidad y salud.
                            Te invitamos a disfrutar de una experiencia gastronómica única en nuestro restaurante, donde cada plato es una celebración de los beneficios de la agricultura orgánica y el compromiso con la salud y el bienestar de nuestros clientes y el planeta.
                             </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Novedades

