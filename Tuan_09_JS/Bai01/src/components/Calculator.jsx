import React from 'react';
import { FaPlus, FaMinus, FaTimes, FaDivide } from 'react-icons/fa';

const Calculator = ({ num1, num2, result, onNum1Change, onNum2Change, onCalculate, operation, stateManagement }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="space-y-4">
        <div className="text-center mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-indigo-100 text-indigo-800">
            {stateManagement}
          </span>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">First Number</label>
          <input
            type="number"
            value={num1}
            onChange={onNum1Change}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div className="flex justify-center">
          {operation === 'add' && <FaPlus className="text-2xl text-indigo-600" />}
          {operation === 'subtract' && <FaMinus className="text-2xl text-indigo-600" />}
          {operation === 'multiply' && <FaTimes className="text-2xl text-indigo-600" />}
          {operation === 'divide' && <FaDivide className="text-2xl text-indigo-600" />}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Second Number</label>
          <input
            type="number"
            value={num2}
            onChange={onNum2Change}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <button
          onClick={onCalculate}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Calculate
        </button>

        <div className="mt-4 p-4 bg-gray-50 rounded-md">
          <h3 className="text-lg font-medium text-gray-900">Result</h3>
          <p className="mt-1 text-3xl font-bold text-indigo-600">{result}</p>
        </div>

        <div className="mt-4 p-4 bg-gray-50 rounded-md text-sm text-gray-600">
          <h3 className="font-medium mb-2">How it works:</h3>
          {stateManagement === 'useReducer' && (
            <p>This calculator uses React's useReducer hook to manage state locally within the component.</p>
          )}
          {stateManagement === 'Redux' && (
            <p>This calculator uses Redux to manage state globally across the application.</p>
          )}
          {stateManagement === 'Redux Toolkit' && (
            <p>This calculator uses Redux Toolkit, which provides a more concise way to write Redux logic.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator; 