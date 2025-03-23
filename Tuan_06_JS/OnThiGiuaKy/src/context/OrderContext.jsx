import React, { createContext, useState, useEffect } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState(() => {
    const savedOrder = localStorage.getItem('order');
    return savedOrder ? JSON.parse(savedOrder) : [];
  });

  useEffect(() => {
    localStorage.setItem('order', JSON.stringify(order));
    console.log('update localStorage');
  }, [order]);

  const handleAddToOrder = (item) => {
    setOrder((prevOrders) => [...prevOrders, item]);
  };

  const handleRemoveFromOrder = (index) => {
    const confirm = window.confirm('Bạn có chắc chắn muốn xóa món này không?');
    if (confirm) {
      setOrder((prevOrders) => prevOrders.filter((_, i) => i !== index));
    }
  };

  return (
    <OrderContext.Provider value={{ order, handleAddToOrder, handleRemoveFromOrder }}>
      {children}
    </OrderContext.Provider>
  );
};