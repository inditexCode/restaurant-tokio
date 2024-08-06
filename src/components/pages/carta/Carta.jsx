import React, { useState } from 'react';
import Drinks from './Drinks';
import Pizzas from './Pizzas';
import Ensaladas from './Ensaladas';
import Pastas from './Pastas';
import Postres from './Postres';
import Redes from '../inicio/Redes';
import CartIcon from './domicilio/CartIcon';
import ModalCarrito from './domicilio/ModalCarrito';

const Carta = () => {
  const [cart, setCart] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);

  const handleAddToCart = (item) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(i => i.title === item.title);
      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const handleCartIconClick = () => {
    setShowCartModal(true);
  };

  const handleCloseCartModal = () => {
    setShowCartModal(false);
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <>
      <div className="carta-container">
        <Pizzas onAddToCart={handleAddToCart} />
        <Pastas onAddToCart={handleAddToCart} />
        <Ensaladas onAddToCart={handleAddToCart} />
        <Postres onAddToCart={handleAddToCart} />
        <Drinks onAddToCart={handleAddToCart} />
      </div>
      <Redes />
      <CartIcon onClick={handleCartIconClick} itemCount={getCartItemCount()} />
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
