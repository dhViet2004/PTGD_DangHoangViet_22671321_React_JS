import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useProductContext } from '../context/ProductContext';

const ProductItem = ({ product }) => {
  const { deleteProduct } = useProductContext();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <div className="mt-2 space-y-1">
          <p className="text-xl font-bold text-indigo-600">{formatPrice(product.price)}</p>
          <p className="text-sm">
            <span className="font-medium">Danh mục:</span> 
            <span className="ml-1 px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
              {product.category}
            </span>
          </p>
          <p className="text-sm">
            <span className="font-medium">Tồn kho:</span> 
            <span className={`ml-1 ${product.stock < 10 ? 'text-red-600' : 'text-green-600'}`}>
              {product.stock} sản phẩm
            </span>
          </p>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-2 flex justify-end">
        <button 
          onClick={() => deleteProduct(product.id)}
          className="flex items-center space-x-1 px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          <FaTrash />
          <span>Xoá</span>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;