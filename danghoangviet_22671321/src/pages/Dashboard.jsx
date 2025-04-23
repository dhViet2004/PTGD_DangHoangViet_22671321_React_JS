import React from 'react';
import SearchFilter from '../components/SearchFilter';
import ProductList from '../components/ProductList';
import { useProductContext } from '../context/ProductContext';
import { FaBoxOpen, FaSearch } from 'react-icons/fa';

const Dashboard = () => {
  const { products, filteredProducts, searchTerm } = useProductContext();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Danh Sách Sản Phẩm</h1>
        <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full flex items-center">
          <FaBoxOpen className="mr-2" />
          <span className="font-medium">
            {searchTerm 
              ? `${filteredProducts.length} kết quả${filteredProducts.length !== products.length ? ` / ${products.length} sản phẩm` : ''}` 
              : `${products.length} sản phẩm`}
          </span>
        </div>
      </div>
      
      <SearchFilter />
      
      {searchTerm && filteredProducts.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <FaSearch className="mx-auto text-4xl text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Không tìm thấy sản phẩm</h3>
          <p className="text-gray-500">
            Không có sản phẩm nào phù hợp với từ khóa "{searchTerm}"
          </p>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
};

export default Dashboard;