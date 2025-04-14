import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const CheffiyNavbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/Logo.png" 
              alt="Cheffiy Logo"
              className="h-10 w-auto" // Điều chỉnh kích thước tại đây
            />
          </div>

          {/* Search bar */}
          <div className="flex-1 mx-4 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="What would you like to cook?"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
              />
              <FiSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/what-to-cook" className="text-gray-700 hover:text-red-500 transition-colors whitespace-nowrap">
              What to cook
            </Link>
            <Link to="/recipes" className="text-gray-700 hover:text-red-500 transition-colors whitespace-nowrap">
              Recipes
            </Link>
            <Link to="/ingredients" className="text-gray-700 hover:text-red-500 transition-colors whitespace-nowrap">
              Ingredients
            </Link>
            <Link to="/occasions" className="text-gray-700 hover:text-red-500 transition-colors whitespace-nowrap">
              Occasions
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-red-500 transition-colors whitespace-nowrap">
              About Us
            </Link>
          </div>

          {/* Auth buttons */}
          <div className="flex space-x-2 ml-4">
            <button className="px-3 py-1 text-sm border border-pink-500 text-pink-500 rounded-full hover:bg-red-50 transition-colors whitespace-nowrap">
              Login
            </button>
            <button className="px-3 py-1 text-sm bg-pink-500 text-white rounded-full hover:bg-red-600 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Mobile navigation (hidden on desktop) */}
        <div className="md:hidden mt-4">
          <div className="flex overflow-x-auto space-x-4 pb-2">
            <Link to="/what-to-cook" className="text-gray-700 hover:text-red-500 transition-colors whitespace-nowrap">
              What to cook
            </Link>
            <Link to="/recipes" className="text-gray-700 hover:text-red-500 transition-colors whitespace-nowrap">
              Recipes
            </Link>
            <Link to="/ingredients" className="text-gray-700 hover:text-red-500 transition-colors whitespace-nowrap">
              Ingredients
            </Link>
            <Link to="/occasions" className="text-gray-700 hover:text-red-500 transition-colors whitespace-nowrap">
              Occasions
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-red-500 transition-colors whitespace-nowrap">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CheffiyNavbar;