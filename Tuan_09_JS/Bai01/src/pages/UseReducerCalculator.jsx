import React, { useReducer } from 'react';
import Calculator from '../components/Calculator';

const initialState = {
  num1: 0,
  num2: 0,
  result: 0,
  operation: 'add'
};

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NUM1':
      return { ...state, num1: Number(action.payload) };
    case 'SET_NUM2':
      return { ...state, num2: Number(action.payload) };
    case 'SET_OPERATION':
      return { ...state, operation: action.payload };
    case 'CALCULATE': {
      let result;
      switch (state.operation) {
        case 'add':
          result = state.num1 + state.num2;
          break;
        case 'subtract':
          result = state.num1 - state.num2;
          break;
        case 'multiply':
          result = state.num1 * state.num2;
          break;
        case 'divide':
          result = state.num2 !== 0 ? state.num1 / state.num2 : 'Error: Division by zero';
          break;
        default:
          result = 0;
      }
      return { ...state, result };
    }
    default:
      return state;
  }
};

const UseReducerCalculator = () => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

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
        <h1 className="text-3xl font-bold text-center mb-8">Calculator using useReducer</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <button
            onClick={() => dispatch({ type: 'SET_OPERATION', payload: 'add' })}
            className={`px-4 py-2 rounded-md ${state.operation === 'add' ? 'bg-indigo-600 text-white' : 'bg-white'}`}
          >
            Addition
          </button>
          <button
            onClick={() => dispatch({ type: 'SET_OPERATION', payload: 'subtract' })}
            className={`px-4 py-2 rounded-md ${state.operation === 'subtract' ? 'bg-indigo-600 text-white' : 'bg-white'}`}
          >
            Subtraction
          </button>
          <button
            onClick={() => dispatch({ type: 'SET_OPERATION', payload: 'multiply' })}
            className={`px-4 py-2 rounded-md ${state.operation === 'multiply' ? 'bg-indigo-600 text-white' : 'bg-white'}`}
          >
            Multiplication
          </button>
          <button
            onClick={() => dispatch({ type: 'SET_OPERATION', payload: 'divide' })}
            className={`px-4 py-2 rounded-md ${state.operation === 'divide' ? 'bg-indigo-600 text-white' : 'bg-white'}`}
          >
            Division
          </button>
        </div>
        <Calculator
          num1={state.num1}
          num2={state.num2}
          result={state.result}
          onNum1Change={handleNum1Change}
          onNum2Change={handleNum2Change}
          onCalculate={handleCalculate}
          operation={state.operation}
          stateManagement="useReducer"
        />
      </div>
    </div>
  );
};

export default UseReducerCalculator; 