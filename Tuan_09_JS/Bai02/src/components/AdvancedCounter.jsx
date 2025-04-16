import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementAdvanced, decrementAdvanced, reset, setStep, incrementByAmount } from '../store';

const AdvancedCounter = () => {
  const dispatch = useDispatch();
  const { value, step } = useSelector((state) => state.advancedCounter);
  const [customAmount, setCustomAmount] = useState('');

  const handleIncrementByAmount = () => {
    const amount = parseInt(customAmount);
    if (!isNaN(amount)) {
      dispatch(incrementByAmount(amount));
      setCustomAmount('');
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Advanced Counter</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={() => dispatch(decrementAdvanced())}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Decrement
          </button>
          <span className="text-3xl font-bold">{value}</span>
          <button
            onClick={() => dispatch(incrementAdvanced())}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Increment
          </button>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={() => dispatch(reset())}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Reset
          </button>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium">Step:</label>
            <input
              type="number"
              value={step}
              onChange={(e) => dispatch(setStep(parseInt(e.target.value) || 1))}
              className="w-20 px-2 py-1 border rounded"
              min="1"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="number"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              placeholder="Enter amount"
              className="flex-1 px-2 py-1 border rounded"
            />
            <button
              onClick={handleIncrementByAmount}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Amount
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedCounter; 