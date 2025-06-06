import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Calculator from '../components/Calculator';

const ReduxCalculator = () => {
  const { num1, num2, result, operation } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleNum1Change = (e) => {
    dispatch({ type: 'SET_NUM1', payload: e.target.value });
  };

  const handleNum2Change = (e) => {
    dispatch({ type: 'SET_NUM2', payload: e.target.value });
  };

  const handleCalculate = () => {
    dispatch({ type: 'CALCULATE' });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Calculator using Redux</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <button
            onClick={() => dispatch({ type: 'SET_OPERATION', payload: 'add' })}
            className={`px-4 py-2 rounded-md ${operation === 'add' ? 'bg-indigo-600 text-white' : 'bg-white'}`}
          >
            Addition
          </button>
          <button
            onClick={() => dispatch({ type: 'SET_OPERATION', payload: 'subtract' })}
            className={`px-4 py-2 rounded-md ${operation === 'subtract' ? 'bg-indigo-600 text-white' : 'bg-white'}`}
          >
            Subtraction
          </button>
          <button
            onClick={() => dispatch({ type: 'SET_OPERATION', payload: 'multiply' })}
            className={`px-4 py-2 rounded-md ${operation === 'multiply' ? 'bg-indigo-600 text-white' : 'bg-white'}`}
          >
            Multiplication
          </button>
          <button
            onClick={() => dispatch({ type: 'SET_OPERATION', payload: 'divide' })}
            className={`px-4 py-2 rounded-md ${operation === 'divide' ? 'bg-indigo-600 text-white' : 'bg-white'}`}
          >
            Division
          </button>
        </div>
        <Calculator
          num1={num1}
          num2={num2}
          result={result}
          onNum1Change={handleNum1Change}
          onNum2Change={handleNum2Change}
          onCalculate={handleCalculate}
          operation={operation}
          stateManagement="Redux"
        />
      </div>
    </div>
  );
};

export default ReduxCalculator; 