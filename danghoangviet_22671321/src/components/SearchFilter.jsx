import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useProductContext } from '../context/ProductContext';

const SearchFilter = () => {
  const { searchTerm, setSearchTerm, categories, categoryFilter, setCategoryFilter } = useProductContext();

  return (
    <div className="mb-8 bg-white p-4 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
        <div className="relative flex-1 mb-4 md:mb-0">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm kiếm sản phẩm..."
            className="pl-10 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex-shrink-0">
          <label className="block text-sm font-medium text-gray-700 mb-1">Lọc theo danh mục:</label>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;