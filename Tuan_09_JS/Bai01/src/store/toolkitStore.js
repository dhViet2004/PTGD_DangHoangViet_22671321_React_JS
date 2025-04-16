import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  num1: 0,
  num2: 0,
  result: 0,
  operation: 'add'
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setNum1: (state, action) => {
      state.num1 = Number(action.payload);
    },
    setNum2: (state, action) => {
      state.num2 = Number(action.payload);
    },
    setOperation: (state, action) => {
      state.operation = action.payload;
    },
    calculate: (state) => {
      switch (state.operation) {
        case 'add':
          state.result = state.num1 + state.num2;
          break;
        case 'subtract':
          state.result = state.num1 - state.num2;
          break;
        case 'multiply':
          state.result = state.num1 * state.num2;
          break;
        case 'divide':
          state.result = state.num2 !== 0 ? state.num1 / state.num2 : 'Error: Division by zero';
          break;
        default:
          state.result = 0;
      }
    }
  }
});

export const { setNum1, setNum2, setOperation, calculate } = calculatorSlice.actions;

const store = configureStore({
  reducer: calculatorSlice.reducer
});

export default store; 