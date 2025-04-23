import React from 'react';
import ProductItem from './ProductItem';
import { useProductContext } from '../context/ProductContext';
import { FaExclamationTriangle } from 'react-icons/fa';

const ProductList = ({ showNotification }) => {
  const { filteredProducts } = useProductContext();

  if (filteredProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-10 bg-white rounded-lg shadow-md">
        <FaExclamationTriangle className="text-5xl text-yellow-500 mb-4" />
        <p className="text-lg text-gray-600">Không tìm thấy sản phẩm nào</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductItem 
          key={product.id} 
          product={product} 
          showNotification={showNotification} 
        />
      ))}
    </div>
  );
};

export default ProductList;