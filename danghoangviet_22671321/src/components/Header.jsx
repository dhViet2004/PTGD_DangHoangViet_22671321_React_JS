import React from 'react';
import { Link } from 'react-router-dom';
import { FaBox, FaPlus } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
            <FaBox className="text-2xl" />
            <span>Quản Lý Sản Phẩm</span>
          </Link>
          <nav className="flex space-x-4">
            <Link 
              to="/" 
              className="flex items-center px-3 py-2 rounded hover:bg-indigo-500 transition-colors"
            >
              Danh sách
            </Link>
            <Link 
              to="/add" 
              className="flex items-center space-x-1 px-3 py-2 bg-white text-indigo-600 font-semibold rounded hover:bg-gray-100 transition-colors"
            >
              <FaPlus /> <span>Thêm sản phẩm</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;