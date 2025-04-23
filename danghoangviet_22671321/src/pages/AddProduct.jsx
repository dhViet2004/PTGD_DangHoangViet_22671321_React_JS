import React from 'react';
import ProductForm from '../components/ProductForm';

const AddProduct = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Thêm Sản Phẩm Mới</h1>
      <ProductForm />
    </div>
  );
};

export default AddProduct;