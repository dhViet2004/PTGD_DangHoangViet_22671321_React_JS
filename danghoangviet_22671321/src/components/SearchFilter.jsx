import React from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useProductContext } from '../context/ProductContext';

const SearchFilter = () => {
  const { searchTerm, setSearchTerm, categories, categoryFilter, setCategoryFilter } = useProductContext();

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
        <div className="relative flex-1 mb-4 md:mb-0">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm kiếm sản phẩm theo tên..."
            className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            aria-label="Tìm kiếm sản phẩm"
          />
          
          {searchTerm && (
            <button
              onClick={handleClearSearch}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              aria-label="Xóa tìm kiếm"
            >
              <FaTimes />
            </button>
          )}
        </div>

        <div className="flex-shrink-0">
          <label className="block text-sm font-medium text-gray-700 mb-1">Lọc theo danh mục:</label>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {searchTerm && (
        <div className="mt-4 text-sm">
          <p className="text-indigo-600">
            Đang tìm kiếm: <span className="font-semibold">"{searchTerm}"</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchFilter;