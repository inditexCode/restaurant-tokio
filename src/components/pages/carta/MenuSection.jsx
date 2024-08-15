import React, { useState } from 'react';
import CardEsqueleto from './CardEsqueleto'; // Importa el componente de tarjeta
import './MenuSection.css'; // Importa los estilos CSS para esta sección

const MenuSection = ({ title, headerImage, items, onAddToCart }) => {
  // Estado para manejar el mensaje de error
  const [error, setError] = useState(null);

  // Función para manejar la acción de agregar al carrito
  const handleAddToCart = (item) => {
    // Verifica si onAddToCart es una función antes de llamarla
    if (typeof onAddToCart === 'function') {
      onAddToCart(item); // Llama a la función onAddToCart con el item seleccionado
      setError(null); // Limpia el mensaje de error si la función es válida
    } else {
      setError('No se pudo agregar el artículo al carrito. Inténtelo de nuevo más tarde.'); // Establece un mensaje de error
    }
  };

  return (
    <div className="container"> 
      <div className="contenedor_cabecera"> 
        <img src={headerImage} alt="fondo" className="cabecera-imagen" /> 
        <h2 className="titulo_cabecera">{title}</h2> 
      </div>
      <div className="row">
        {items.map((item, index) => (
          <div className="columna" key={index}> {/* Columna para cada tarjeta */}
            <CardEsqueleto
              image={item.image} 
              title={item.title} 
              description={item.description} 
              price={item.price || 0}
              onOrderClick={() => handleAddToCart(item)} // Función para manejar el clic en la tarjeta
            />
          </div>
        ))}
      </div>
      <div className="separador"></div> 

      {/* Muestra el mensaje de error si existe */}
      {error && (
        <div className="alert alert-danger mt-3">
          {error}
        </div>
      )}
    </div>
  );
};

export default MenuSection;
