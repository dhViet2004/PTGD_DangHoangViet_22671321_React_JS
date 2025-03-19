import React, { createContext, useState, useEffect } from 'react';
import dishesData from '../data/menu.json';

export const DishesContext = createContext();

export const DishesProvider = ({ children }) => {
  const [dishes, setDishes] = useState([]);
  const [order, setOrder] = useState([]);
  const [selectedDish, setSelectedDish] = useState(null);

  useEffect(() => {
    setDishes(dishesData);
  }, []);

  const addToOrder = (dish) => {
    setOrder([...order, dish]);
  };

  return (
    <DishesContext.Provider value={{ dishes, order, addToOrder, selectedDish, setSelectedDish }}>
      {children}
    </DishesContext.Provider>
  );
};