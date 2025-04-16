import { createStore } from 'redux';

const initialState = {
  num1: 0,
  num2: 0,
  result: 0,
  operation: 'add'
};

const calculatorReducer = (state = initialState, action) => {
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

const store = createStore(calculatorReducer);

export default store; 