import React from 'react';
import SearchFilter from '../components/SearchFilter';
import ProductList from '../components/ProductList';
import StatsBar from '../components/StatsBar';
import { useProductContext } from '../context/ProductContext';
import { FaSearch } from 'react-icons/fa';

const Dashboard = () => {
  const { filteredProducts, searchTerm, categoryFilter } = useProductContext();

  // Tạo tiêu đề hiển thị phù hợp dựa vào bộ lọc hiện tại
  let filteredTitle = "Danh Sách Sản Phẩm";
  if (categoryFilter !== 'Tất cả') {
    filteredTitle = `Sản Phẩm ${categoryFilter}`;
  }
  if (searchTerm) {
    filteredTitle = `Kết Quả Tìm Kiếm${categoryFilter !== 'Tất cả' ? ` - ${categoryFilter}` : ''}`;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">{filteredTitle}</h1>
      
      <StatsBar />
      
      <SearchFilter />
      
      {filteredProducts.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <FaSearch className="mx-auto text-4xl text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Không tìm thấy sản phẩm</h3>
          <p className="text-gray-500">
            {searchTerm 
              ? `Không có sản phẩm nào${categoryFilter !== 'Tất cả' ? ` thuộc danh mục "${categoryFilter}"` : ''} phù hợp với từ khóa "${searchTerm}"` 
              : `Không có sản phẩm nào thuộc danh mục "${categoryFilter}"`}
          </p>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
};

export default Dashboard;