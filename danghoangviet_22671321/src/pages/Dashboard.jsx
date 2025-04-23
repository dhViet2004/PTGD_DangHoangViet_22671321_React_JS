import React, { useState, useEffect } from 'react';
import SearchFilter from '../components/SearchFilter';
import ProductList from '../components/ProductList';
import { useProductContext } from '../context/ProductContext';
import { FaBoxOpen, FaSearch, FaArrowUp } from 'react-icons/fa';

const Dashboard = ({ showNotification = () => {} }) => {
  const { products, filteredProducts, searchTerm, categoryFilter } = useProductContext();
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  // Theo dõi cuộn trang để hiển thị nút "Lên đầu trang"
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
        <div className="mb-4 lg:mb-0">
          <h1 className="text-3xl font-bold text-gray-800 mb-1">{filteredTitle}</h1>
          <p className="text-gray-500">
            Quản lý danh sách sản phẩm của bạn một cách đơn giản và hiệu quả
          </p>
        </div>
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 px-5 py-3 rounded-full flex items-center shadow-soft">
          <FaBoxOpen className="text-xl mr-2 text-indigo-600" />
          <span className="font-medium">
            {isFiltered 
              ? `${productCount} kết quả${productCount !== totalCount ? ` / ${totalCount} sản phẩm` : ''}` 
              : `${totalCount} sản phẩm`}
          </span>
        </div>
      </div>
      
      <SearchFilter />
      
      <div className="mb-8"></div>
      
      {filteredProducts.length === 0 ? (
        <div className="bg-white p-12 rounded-xl shadow-card text-center animate-fade-in">
          <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaSearch className="text-3xl text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Không tìm thấy sản phẩm</h3>
          <p className="text-gray-500 max-w-md mx-auto">
            {searchTerm 
              ? `Không có sản phẩm nào${categoryFilter !== 'Tất cả' ? ` thuộc danh mục "${categoryFilter}"` : ''} phù hợp với từ khóa "${searchTerm}"` 
              : `Không có sản phẩm nào thuộc danh mục "${categoryFilter}"`}
          </p>
        </div>
      ) : (
        <div className="animate-slide-up">
          <ProductList showNotification={showNotification} />
        </div>
      )}
      
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-all duration-300 animate-fade-in z-30"
          aria-label="Cuộn lên đầu trang"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Dashboard;