import React from 'react';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import './CartIcon.css'; // Importa el CSS

const CartIcon = ({ onClick, itemCount }) => {
  return (
    <div className="cart-icon-container" onClick={onClick}>
      <DeliveryDiningIcon className="MuiSvgIcon-root" />
      {itemCount > 0 && <div className="cart-counter">{itemCount}</div>}
    </div>
  );
};

export default CartIcon;
