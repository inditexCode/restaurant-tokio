import React from 'react';
import visa from './IconosPagos/visa.png';
import paypal from './IconosPagos/paypal.png';
import efectivo from './IconosPagos/dinero-en-efectivo.png';

const PaymentIcons = ({ handlePaymentClick }) => (
  <div className="payment-icons">
    <a href="https://www.visa.com.co/pague-con-visa/tarjetas/credito.html" target="_blank" rel="noopener noreferrer" onClick={handlePaymentClick('https://www.visa.com.co/pague-con-visa/tarjetas/credito.html')}>
      <img src={visa} alt="Visa" className="payment-icon" />
    </a>
    <a href="https://www.paypal.com/es/business/financial-services/debit-card" target="_blank" rel="noopener noreferrer" onClick={handlePaymentClick('https://www.paypal.com/es/business/financial-services/debit-card')}>
      <img src={paypal} alt="PayPal" className="payment-icon" />
    </a>
    <img 
      src={efectivo} 
      alt="Dinero en Efectivo" 
      className="payment-icon" 
      onClick={handlePaymentClick('', false)} 
    />
  </div>
);

export default PaymentIcons;
