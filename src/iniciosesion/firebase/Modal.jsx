import React, { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  // Maneja el clic fuera del contenido modal para cerrar el modal
  const handleOutsideClick = useCallback((e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose(); // Cierra el modal si se hace clic fuera del contenido
    }
  }, [onClose]);

  // Añade y elimina el event listener para cerrar el modal con clics fuera del modal
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen, handleOutsideClick]);

  // Si el modal no está abierto, no se renderiza nada
  if (!isOpen) return null;

  // Renderiza el modal usando un portal para agregarlo al body del documento
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
