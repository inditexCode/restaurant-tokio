import React, { useEffect, useState } from 'react';
import { useAuth } from '../../iniciosesion/firebase/AuthProvider';

const HistorialOrder = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      // Simular la obtención del historial de pedidos desde una base de datos o API.
      // Aquí tendrías tu lógica real para obtener los datos.
      setOrders([
        { id: 1, date: '2023-08-01', total: 29.99 },
        { id: 2, date: '2023-07-28', total: 15.49 },
        { id: 3, date: '2023-07-22', total: 45.00 }
      ]);
    }
  }, [user]);

  return (
    <div>
      <h2>Historial de Pedidos</h2>
      {orders.length === 0 ? (
        <p>No has realizado pedidos aún.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              Pedido #{order.id} - Fecha: {order.date} - Total: ${order.total}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HistorialOrder;
