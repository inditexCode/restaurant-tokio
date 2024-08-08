import React, { useEffect, useRef, useState } from 'react';
import './ModalCarrito.css';
import FormularioCliente from './FormularioCliente';

const ModalCarrito = ({ cartItems, onClose, setCartItems }) => {
  const modalRef = useRef(null);
  const [items, setItems] = useState(cartItems);
  const [resetForm, setResetForm] = useState(false);

  useEffect(() => {
    setItems(cartItems);
  }, [cartItems]);

  const handleIncreaseQuantity = (index) => {
    const newItems = [...items];
    newItems[index].quantity += 1;
    setItems(newItems);
    setCartItems(newItems);
  };

  const handleDecreaseQuantity = (index) => {
    const newItems = [...items];
    if (newItems[index].quantity > 1) {
      newItems[index].quantity -= 1;
      setItems(newItems);
      setCartItems(newItems);
    }
  };

  const handleRemoveItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    setCartItems(newItems);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePaymentMethodClick = () => {
    setItems([]);
    setCartItems([]);
    setResetForm(true);
    setTimeout(() => setResetForm(false), 0); // Para asegurar que el estado se actualice antes de limpiar el formulario
  };

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
          <p>El carrito está vacío.</p>
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
        <FormularioCliente itemsInCart={items.length} onPaymentMethodClick={handlePaymentMethodClick} resetForm={resetForm} />
      </div>
    </div>
  );
};

export default ModalCarrito;