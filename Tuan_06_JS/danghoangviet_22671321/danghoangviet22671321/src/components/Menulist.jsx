import React, { useState } from 'react';
import dishes from '../data/menu.json';
import './Menulist.css';
const Content = () => {
  const [order, setOrder] = useState([]);

  const addToOrder = (dish) => {
    setOrder([...order, dish]);
  };

  return (
    <div className="content">
      {dishes.map(dish => (
        <div key={dish.id} className="dish">
          <img src={dish.image} alt={dish.name} />
          <h3>{dish.name}</h3>
          <p>{dish.price}</p>
          <p>{dish.description}</p>
          <button onClick={() => addToOrder(dish)}>Add to Order</button>
        </div>
      ))}
      <div className="order-list">
        <h2>Order List</h2>
        {order.map((dish, index) => (
          <div key={index} className="order-item">
            <p>{dish.name} - {dish.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;