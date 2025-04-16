import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Counter Slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 }
  }
});

// Todo Slice
const todoSlice = createSlice({
  name: 'todos',
  initialState: { items: [] },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: Date.now(),
        text: action.payload,
        completed: false
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find(todo => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    }
  }
});

// Theme Slice
const themeSlice = createSlice({
  name: 'theme',
  initialState: { value: 'light' },
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === 'light' ? 'dark' : 'light';
    }
  }
});

// Cart Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) item.quantity = quantity;
    }
  }
});

// Auth Slice
const authSlice = createSlice({
  name: 'auth',
  initialState: { 
    user: null,
    isLoggedIn: false
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
    setUserInfo: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    }
  }
});

// Users Slice with Async Thunk
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

// Advanced Counter Slice
const advancedCounterSlice = createSlice({
  name: 'advancedCounter',
  initialState: { value: 0, step: 1 },
  reducers: {
    increment: (state) => { state.value += state.step },
    decrement: (state) => { state.value -= state.step },
    reset: (state) => { state.value = 0 },
    setStep: (state, action) => { state.step = action.payload },
    incrementByAmount: (state, action) => { state.value += action.payload }
  }
});

// Calculator Slice
const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    formData: {
      weight: '',
      height: '',
      income: '',
      taxRate: ''
    },
    results: {
      bmi: null,
      tax: null
    }
  },
  reducers: {
    updateInput: (state, action) => {
      const { field, value } = action.payload;
      state.formData[field] = value;
    },
    calculateResult: (state) => {
      // BMI Calculation
      if (state.formData.weight && state.formData.height) {
        const weight = parseFloat(state.formData.weight);
        const height = parseFloat(state.formData.height) / 100; // Convert cm to m
        state.results.bmi = (weight / (height * height)).toFixed(2);
      }

      // Tax Calculation
      if (state.formData.income && state.formData.taxRate) {
        const income = parseFloat(state.formData.income);
        const taxRate = parseFloat(state.formData.taxRate) / 100;
        state.results.tax = (income * taxRate).toFixed(2);
      }
    }
  }
});

// Event Management Slice
const eventSlice = createSlice({
  name: 'events',
  initialState: {
    items: []
  },
  reducers: {
    addEvent: (state, action) => {
      state.items.push({
        id: Date.now(),
        ...action.payload
      });
    },
    editEvent: (state, action) => {
      const index = state.items.findIndex(event => event.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...action.payload };
      }
    },
    deleteEvent: (state, action) => {
      state.items = state.items.filter(event => event.id !== action.payload);
    }
  }
});

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todos: todoSlice.reducer,
    theme: themeSlice.reducer,
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
    users: usersSlice.reducer,
    advancedCounter: advancedCounterSlice.reducer,
    calculator: calculatorSlice.reducer,
    events: eventSlice.reducer
  }
});

// Export actions
export const { increment, decrement } = counterSlice.actions;
export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export const { toggleTheme } = themeSlice.actions;
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export const { login, logout, setUserInfo } = authSlice.actions;
export const { increment: incrementAdvanced, decrement: decrementAdvanced, reset, setStep, incrementByAmount } = advancedCounterSlice.actions;
export const { updateInput, calculateResult } = calculatorSlice.actions;
export const { addEvent, editEvent, deleteEvent } = eventSlice.actions; 