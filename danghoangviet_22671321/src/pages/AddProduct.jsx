import React from 'react';
import ProductForm from '../components/ProductForm';

const AddProduct = ({ showNotification }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Thêm Sản Phẩm Mới</h1>
      <ProductForm showNotification={showNotification} />
    </div>
  );
};

export default AddProduct;