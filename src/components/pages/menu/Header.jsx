import React from 'react';
import './Header.css';
import salami from './img-menu/salami.jpg';  
import ensalada from './img-menu/ensalada.jpg';  
import milanesa from './img-menu/milanesa.jpg';  
import risotto from './img-menu/risotto.jpg';  
import gourmet from './img-menu/gourmet.jpg';  

const items = [
    {src: salami, alt:'salami', name : 'Antipasta Italiano - Proscuito, Salami, Jamón, Copa', p:'El Antipasto Italiano es un deleite para los amantes de la cocina italiana. Con Prosciutto, Salami y Jamón Coppa, esta selección de embutidos ofrece una experiencia gastronómica auténtica y llena de sabores intensos y aromáticos que capturan la esencia de la cocina italiana en cada bocado.',},
     {src: ensalada, alt:'ensalada', name : 'Ensalada Cesar', p:'Hay clásicos que nunca fallan. Por eso, la ensalada césar no puede faltar en este listado de ensaladas italianas. Lechuga, pollo braseado, queso Grana Padano, tomate reposado y grisini. ¡Buenísima! Y como colofón final, la mítica salsa césar o puedes variar esta receta con salsa yozu, aceite y vinagre o reducción de Módena.'},
    {src: milanesa, alt:'milanesa', name : 'Milanesa a la Napolitana', p:'La milanesa napolitana o milanesa a la napolitana es un plato que consiste en una milanesa generalmente de carna vacuna al horno y recubierta de manera similar a una pizza, cuyo origen se encuentra en Argentina y no en Italia, como frecuentemente se suele pensar. De hecho, el origen del término proviene del restaurante Nápoli, de Jorge La Grotta, que fue quien sirvió este plato por primera vez en la década de los 40.'},
    {src: risotto, alt:'risotto', name : 'Risotto', p:'El “risotto” es uno de los platos de la cocina italiana más conocidos y apreciados internacionalmente. En Italia el risotto se suele servir como primer plato, como alternativa a la pasta o a los platos de cuchara, pero no hay ningún inconveniente si quieres prepararlo como plato único para tu familia.'},
    {src: gourmet, alt:'gourmet', name : 'Menú Gourmet', p:'Es un plato de la especialidad de la casa, ingredientes, continuamos con vegetales ahumados, con quinoas y salsas especiales de la casa, incluimos frutas exóticas para que la mezcla de sabores sean una sensación única'},
]

const Header = () => {
    const imagenes = () => {
        return items.map((item, index) => (
            <div className="item" key={index}>
                <img src={item.src} alt={item.alt} className="item-image" />
                <div className="item-text">
                    <h4 className="item-title">{item.name}</h4>
                    <p className="item-description">{item.p}</p>
                </div>
            </div>
        ));
    }

    return (
        <div className='header-container'>
            {imagenes()}
        </div>
    )
}

export default Header;

