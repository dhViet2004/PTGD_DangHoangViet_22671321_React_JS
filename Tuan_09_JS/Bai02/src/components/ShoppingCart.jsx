import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from '../store';

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Products</h3>
        <div className="space-y-2">
          {products.map((product) => (
            <div key={product.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <span>{product.name} - ${product.price}</span>
              <button
                onClick={() => dispatch(addItem(product))}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Cart Items</h3>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <div className="space-y-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span>{item.name}</span>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: parseInt(e.target.value) || 0 }))}
                    className="w-16 px-2 py-1 border rounded"
                    min="1"
                  />
                  <span>${item.price * item.quantity}</span>
                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between">
          <span className="font-semibold">Total Items:</span>
          <span>{totalQuantity}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Total Price:</span>
          <span>${totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart; 