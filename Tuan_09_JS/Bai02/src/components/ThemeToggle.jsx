import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store';

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <div className={`p-6 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <h2 className="text-2xl font-bold mb-4">Theme Toggle</h2>
      <button
        onClick={() => dispatch(toggleTheme())}
        className={`px-4 py-2 rounded ${
          theme === 'dark'
            ? 'bg-gray-700 text-white hover:bg-gray-600'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default ThemeToggle; 