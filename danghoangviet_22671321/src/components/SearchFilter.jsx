import React, { useState, useEffect } from 'react';
import { FaSearch, FaTimes, FaFilter } from 'react-icons/fa';
import { useProductContext } from '../context/ProductContext';

const SearchFilter = () => {
  const { searchTerm, setSearchTerm, categories, categoryFilter, setCategoryFilter } = useProductContext();
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  // Sử dụng useEffect để tạo debounce cho tìm kiếm
  useEffect(() => {
    const timerId = setTimeout(() => {
      setSearchTerm(localSearchTerm);
    }, 300);

    return () => clearTimeout(timerId);
  }, [localSearchTerm, setSearchTerm]);

  const handleSearchChange = (e) => {
    setLocalSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setLocalSearchTerm('');
    setSearchTerm('');
  };

  // Xử lý khi thay đổi danh mục
  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  return (
    <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Tìm kiếm & Lọc</h2>
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* Ô tìm kiếm */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          
          <input
            type="text"
            value={localSearchTerm}
            onChange={handleSearchChange}
            placeholder="Tìm kiếm sản phẩm theo tên..."
            className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            aria-label="Tìm kiếm sản phẩm"
          />
          
          {localSearchTerm && (
            <button
              onClick={handleClearSearch}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              aria-label="Xóa tìm kiếm"
            >
              <FaTimes />
            </button>
          )}
        </div>

        {/* Dropdown lọc theo danh mục */}
        <div className="min-w-[200px]">
          <div className="flex items-center mb-1">
            <FaFilter className="text-gray-500 mr-1" />
            <label className="text-sm font-medium text-gray-700">Lọc theo danh mục:</label>
          </div>
          <div className="relative">
            <select
              value={categoryFilter}
              onChange={handleCategoryChange}
              className="w-full p-2 pl-3 pr-8 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              aria-label="Lọc theo danh mục"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Thông tin tìm kiếm và lọc hiện tại */}
      <div className="mt-4 flex flex-wrap gap-2">
        {searchTerm && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-800">
            <span className="mr-1">Từ khóa:</span>
            <span className="font-medium">{searchTerm}</span>
            <button 
              onClick={handleClearSearch} 
              className="ml-1 text-indigo-600 hover:text-indigo-800"
              aria-label="Xóa từ khóa tìm kiếm"
            >
              <FaTimes />
            </button>
          </span>
        )}
        
        {categoryFilter !== 'Tất cả' && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">
            <span className="mr-1">Danh mục:</span>
            <span className="font-medium">{categoryFilter}</span>
            <button 
              onClick={() => setCategoryFilter('Tất cả')} 
              className="ml-1 text-teal-600 hover:text-teal-800"
              aria-label="Xóa bộ lọc danh mục"
            >
              <FaTimes />
            </button>
          </span>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;