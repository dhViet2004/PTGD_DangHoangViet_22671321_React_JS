import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBox, FaPlus, FaHome, FaSearch } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Thêm sự kiện lắng nghe scroll để thay đổi header khi cuộn
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Xác định route đang active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-3' : 'bg-gradient-to-r from-indigo-600 to-indigo-800 py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold transition-colors duration-300">
            <FaBox className={`text-2xl ${scrolled ? 'text-indigo-600' : 'text-white'}`} />
            <span className={`${scrolled ? 'text-gray-800' : 'text-white'}`}>Quản Lý Sản Phẩm</span>
          </Link>
          <nav className="flex items-center space-x-2">
            <Link 
              to="/" 
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/') 
                  ? (scrolled ? 'bg-indigo-100 text-indigo-700' : 'bg-white/20 text-white') 
                  : (scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10')
              }`}
            >
              <FaHome />
              <span className="hidden sm:inline">Trang chủ</span>
            </Link>
            
            <Link 
              to="/search" 
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/search') 
                  ? (scrolled ? 'bg-indigo-100 text-indigo-700' : 'bg-white/20 text-white') 
                  : (scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10')
              }`}
            >
              <FaSearch />
              <span className="hidden sm:inline">Tìm kiếm</span>
            </Link>
            
            <Link 
              to="/add" 
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 font-semibold ${
                isActive('/add') 
                  ? 'bg-white text-indigo-700' 
                  : (scrolled ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-white text-indigo-700 hover:bg-gray-100')
              }`}
            >
              <FaPlus />
              <span>Thêm sản phẩm</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;