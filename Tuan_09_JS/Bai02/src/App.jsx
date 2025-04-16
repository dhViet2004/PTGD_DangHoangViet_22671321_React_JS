import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import ThemeToggle from './components/ThemeToggle';
import ShoppingCart from './components/ShoppingCart';
import Auth from './components/Auth';
import Users from './components/Users';
import AdvancedCounter from './components/AdvancedCounter';
import Calculator from './components/Calculator';
import EventManagement from './components/EventManagement';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center mb-8">Redux Toolkit Examples</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Counter />
            <TodoList />
            <ThemeToggle />
            <ShoppingCart />
            <Users />
            <AdvancedCounter />
            <Calculator />
            <div className="md:col-span-2">
              <Auth />
            </div>
            <div className="md:col-span-2">
              <EventManagement />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
