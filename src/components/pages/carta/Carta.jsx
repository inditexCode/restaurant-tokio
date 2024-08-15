import React, { useState, useEffect } from 'react';
import Drinks from './Drinks';
import Pizzas from './Pizzas';
import Ensaladas from './Ensaladas';
import Pastas from './Pastas';
import Postres from './Postres';
import Redes from '../inicio/Redes';
import CartIcon from './domicilio/CartIcon';
import ModalCarrito from './domicilio/ModalCarrito';

const Carta = () => {
  // Estado para manejar el carrito de compras
  const [cart, setCart] = useState(() => {
    // Cargar el carrito desde localStorage al iniciar
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : []; // Si hay un carrito guardado, usarlo; de lo contrario, iniciar con un carrito vacío
  });

  // Estado para manejar la visibilidad del modal del carrito
  const [showCartModal, setShowCartModal] = useState(false);

  useEffect(() => {
    // Guardar el carrito en localStorage cada vez que cambia
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Función para agregar un ítem al carrito
  const handleAddToCart = (item) => {
    setCart(prevCart => {
      // Verificar si el ítem ya está en el carrito
      const existingItemIndex = prevCart.findIndex(i => i.title === item.title);
      if (existingItemIndex !== -1) {
        // Si el ítem ya está en el carrito, incrementar la cantidad
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      }
      // Si el ítem no está en el carrito, agregarlo con cantidad 1
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // Función para manejar el clic en el ícono del carrito
  const handleCartIconClick = () => {
    setShowCartModal(true); // Mostrar el modal del carrito
  };

  // Función para manejar el cierre del modal del carrito
  const handleCloseCartModal = () => {
    setShowCartModal(false); // Ocultar el modal del carrito
  };

  // Función para obtener el conteo total de ítems en el carrito
  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0); // Sumar las cantidades de todos los ítems en el carrito
  };

  return (
    <>
      <div className="carta-container">
        {/* Componentes de productos con la función para agregar al carrito */}
        <Pizzas onAddToCart={handleAddToCart} />
        <Pastas onAddToCart={handleAddToCart} />
        <Ensaladas onAddToCart={handleAddToCart} />
        <Postres onAddToCart={handleAddToCart} />
        <Drinks onAddToCart={handleAddToCart} />
      </div>
      <Redes />
      {/* Ícono del carrito con el conteo de ítems */}
      <CartIcon onClick={handleCartIconClick} itemCount={getCartItemCount()} />
      {/* Modal del carrito que se muestra si showCartModal es true */}
      {showCartModal && (
        <ModalCarrito
          cartItems={cart}
          onClose={handleCloseCartModal}
          setCartItems={setCart}
        />
      )}
    </>
  );
};

export default Carta;
