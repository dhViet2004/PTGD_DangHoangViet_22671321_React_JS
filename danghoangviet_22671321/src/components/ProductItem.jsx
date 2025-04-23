import React, { useState } from 'react';
import { FaTrash, FaExclamationCircle } from 'react-icons/fa';
import { useProductContext } from '../context/ProductContext';

const ProductItem = ({ product }) => {
  const { deleteProduct } = useProductContext();
  const [showConfirm, setShowConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const handleDeleteClick = () => {
    setShowConfirm(true);
  };

  const handleCancelDelete = () => {
    setShowConfirm(false);
  };

  const handleConfirmDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      deleteProduct(product.id);
    }, 300);
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
      isDeleting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
    }`}>
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
        {!showConfirm ? (
          <button 
            onClick={handleDeleteClick}
            className="flex items-center space-x-1 px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            <FaTrash />
            <span>Xoá</span>
          </button>
        ) : (
          <div className="flex items-center space-x-2">
            <p className="text-sm text-gray-600 flex items-center">
              <FaExclamationCircle className="text-yellow-500 mr-1" />
              <span>Xác nhận xoá?</span>
            </p>
            <button 
              onClick={handleCancelDelete}
              className="px-2 py-1 text-xs bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition-colors"
            >
              Huỷ
            </button>
            <button 
              onClick={handleConfirmDelete}
              className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Xoá
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;