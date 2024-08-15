import React, { useEffect, useRef, useState } from 'react';
import './ModalCarrito.css';
import FormularioCliente from './FormularioCliente';

const ModalCarrito = ({ cartItems, onClose, setCartItems }) => {
  // Referencia al modal para manejar clics fuera del modal
  const modalRef = useRef(null);

  // Estado local para manejar los artículos en el carrito
  const [items, setItems] = useState(cartItems);

  // Actualiza el estado local cuando cambian los cartItems
  useEffect(() => {
    setItems(cartItems);
  }, [cartItems]);

  // Maneja el aumento de la cantidad de un artículo
  const handleIncreaseQuantity = (index) => {
    const newItems = [...items];
    newItems[index].quantity += 1;
    setItems(newItems);
    setCartItems(newItems); // Actualiza el carrito en el componente principal
  };

  // Maneja la disminución de la cantidad de un artículo
  const handleDecreaseQuantity = (index) => {
    const newItems = [...items];
    if (newItems[index].quantity > 1) {
      newItems[index].quantity -= 1;
      setItems(newItems);
      setCartItems(newItems); // Actualiza el carrito en el componente principal
    }
  };

  // Maneja la eliminación de un artículo del carrito
  const handleRemoveItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    setCartItems(newItems); // Actualiza el carrito en el componente principal
  };

  // Calcula el precio total de los artículos en el carrito
  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Maneja el clic en el método de pago, vacía el carrito y cierra el modal después de 3 segundos
  const handlePaymentMethodClick = () => {
    setItems([]);
    setCartItems([]); // Vacía el carrito en el componente principal

    // Cierra el modal después de 3 segundos
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  // Cierra el modal si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className="modal-carrito">
      <div className="modal-content-carrito" ref={modalRef}>
        <span className="cerrar_carrito" onClick={onClose}>X</span>
        <h2>Pedidos a Domicilio</h2>
        {items.length === 0 ? (
          <p>El carrito está vacío.</p> // Mensaje cuando el carrito está vacío
        ) : (
          <ul className="contenedor-item">
            {items.map((item, index) => (
              <li key={index} className="item">
                <img src={item.image} alt={item.title} className="item-img" />
                <div className="item-title">{item.title}</div>
                <div className="item-price">${item.price.toFixed(2)}</div>
                <button onClick={() => handleDecreaseQuantity(index)} className="quantity-btn">-</button>
                <span className="item-quantity">{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(index)} className="quantity-btn">+</button>
                <div className="item-total">Total: ${(item.price * item.quantity).toFixed(2)}</div>
                <button onClick={() => handleRemoveItem(index)} className="remove-btn">Eliminar</button>
              </li>
            ))}
          </ul>
        )}
        <div className="total">
          <strong>Total a pagar: ${getTotalPrice().toFixed(2)}</strong>
        </div>
        <FormularioCliente itemsInCart={items.length} onPaymentMethodClick={handlePaymentMethodClick} />
      </div>
    </div>
  );
};

export default ModalCarrito;
