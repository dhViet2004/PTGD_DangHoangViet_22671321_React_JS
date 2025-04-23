import React from 'react';
import SearchFilter from '../components/SearchFilter';
import ProductList from '../components/ProductList';
import { useProductContext } from '../context/ProductContext';
import { FaBoxOpen } from 'react-icons/fa';

const Dashboard = () => {
  const { products } = useProductContext();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Danh Sách Sản Phẩm</h1>
        <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full flex items-center">
          <FaBoxOpen className="mr-2" />
          <span className="font-medium">{products.length} sản phẩm</span>
        </div>
      </div>
      
      <SearchFilter />
      <ProductList />
    </div>
  );
};

export default Dashboard;