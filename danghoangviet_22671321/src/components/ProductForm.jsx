import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useProductContext } from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const { addProduct, categories } = useProductContext();
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    category: '',
    stock: '',
  });
  const [errors, setErrors] = useState({});

  // Lọc ra các danh mục duy nhất, loại bỏ "Tất cả" từ bộ lọc
  const uniqueCategories = categories.filter(cat => cat !== 'Tất cả');

  const validate = () => {
    const newErrors = {};
    if (!productData.name) newErrors.name = 'Tên sản phẩm không được để trống';
    if (!productData.price) newErrors.price = 'Giá sản phẩm không được để trống';
    else if (isNaN(productData.price) || Number(productData.price) <= 0) 
      newErrors.price = 'Giá phải là số dương';
    if (!productData.category) newErrors.category = 'Danh mục không được để trống';
    if (!productData.stock) newErrors.stock = 'Số lượng tồn kho không được để trống';
    else if (isNaN(productData.stock) || Number(productData.stock) < 0 || !Number.isInteger(Number(productData.stock))) 
      newErrors.stock = 'Số lượng tồn kho phải là số nguyên không âm';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    addProduct({
      ...productData,
      price: Number(productData.price),
      stock: Number(productData.stock),
    });
    
    // Sau khi thêm sản phẩm, chuyển về trang danh sách
    navigate('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Thêm Sản Phẩm Mới</h2>
      <form onSubmit={handleSubmit}>
        {/* Tên sản phẩm */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
            Tên sản phẩm
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={productData.name}
            onChange={handleChange}
            placeholder="Nhập tên sản phẩm"
            className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Giá sản phẩm */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="price">
            Giá sản phẩm (VNĐ)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleChange}
            placeholder="Nhập giá sản phẩm"
            className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.price ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
        </div>

        {/* Danh mục */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="category">
            Danh mục
          </label>
          <div className="flex">
            <select
              id="category"
              name="category"
              value={productData.category}
              onChange={handleChange}
              className={`flex-1 p-3 border rounded-l focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                errors.category ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Chọn danh mục</option>
              {uniqueCategories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Hoặc thêm danh mục mới"
              onChange={(e) => {
                if (e.target.value) {
                  setProductData(prev => ({
                    ...prev,
                    category: e.target.value
                  }));
                }
              }}
              className={`flex-1 p-3 border-t border-b border-r rounded-r focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                errors.category ? 'border-red-500' : 'border-gray-300'
              }`}
            />
          </div>
          {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
        </div>

        {/* Tồn kho */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="stock">
            Tồn kho
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={productData.stock}
            onChange={handleChange}
            placeholder="Nhập số lượng tồn kho"
            className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.stock ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.stock && <p className="text-red-500 text-sm mt-1">{errors.stock}</p>}
        </div>

        {/* Nút thêm sản phẩm */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            <FaPlus />
            <span>Thêm Sản Phẩm</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;