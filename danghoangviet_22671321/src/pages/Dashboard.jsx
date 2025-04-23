import React from 'react';
import SearchFilter from '../components/SearchFilter';
import ProductList from '../components/ProductList';
import { useProductContext } from '../context/ProductContext';
import { FaBoxOpen, FaSearch } from 'react-icons/fa';

const Dashboard = () => {
  const { products, filteredProducts, searchTerm, categoryFilter } = useProductContext();

  // Tạo tiêu đề hiển thị phù hợp dựa vào bộ lọc hiện tại
  let filteredTitle = "Danh Sách Sản Phẩm";
  if (categoryFilter !== 'Tất cả') {
    filteredTitle = `Sản Phẩm ${categoryFilter}`;
  }
  if (searchTerm) {
    filteredTitle = `Kết Quả Tìm Kiếm${categoryFilter !== 'Tất cả' ? ` - ${categoryFilter}` : ''}`;
  }

  // Hiển thị số lượng sản phẩm
  const productCount = filteredProducts.length;
  const totalCount = products.length;
  const isFiltered = searchTerm || categoryFilter !== 'Tất cả';

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{filteredTitle}</h1>
        <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full flex items-center">
          <FaBoxOpen className="mr-2" />
          <span className="font-medium">
            {isFiltered 
              ? `${productCount} kết quả${productCount !== totalCount ? ` / ${totalCount} sản phẩm` : ''}` 
              : `${totalCount} sản phẩm`}
          </span>
        </div>
      </div>
      
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