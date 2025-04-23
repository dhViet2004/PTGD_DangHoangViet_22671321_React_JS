import React from 'react';
import { FaBoxOpen, FaLayerGroup, FaFilter } from 'react-icons/fa';
import { useProductContext } from '../context/ProductContext';

const StatsBar = () => {
  const { 
    totalProducts, 
    totalStock, 
    filteredTotalProducts, 
    filteredTotalStock, 
    searchTerm, 
    categoryFilter 
  } = useProductContext();
  
  const isFiltered = searchTerm || categoryFilter !== 'Tất cả';

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex-1 min-w-[170px]">
          <div className="flex items-center">
            <div className="mr-3 p-2 bg-indigo-100 rounded-lg">
              <FaBoxOpen className="text-indigo-600 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">
                Tổng sản phẩm
                {isFiltered ? ' (đã lọc)' : ''}
              </p>
              <p className="text-xl font-bold text-gray-800">
                {isFiltered ? filteredTotalProducts : totalProducts}
                {isFiltered && <span className="text-sm text-gray-500 ml-1">/ {totalProducts}</span>}
              </p>
            </div>
          </div>
        </div>

        <div className="h-10 border-l border-gray-200 hidden sm:block"></div>

        <div className="flex-1 min-w-[170px]">
          <div className="flex items-center">
            <div className="mr-3 p-2 bg-green-100 rounded-lg">
              <FaLayerGroup className="text-green-600 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">
                Tổng tồn kho
                {isFiltered ? ' (đã lọc)' : ''}
              </p>
              <p className="text-xl font-bold text-gray-800">
                {isFiltered ? filteredTotalStock : totalStock}
                {isFiltered && <span className="text-sm text-gray-500 ml-1">/ {totalStock}</span>}
              </p>
            </div>
          </div>
        </div>

        {isFiltered && (
          <div className="flex-none ml-auto">
            <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
              <FaFilter className="text-yellow-500 mr-1" />
              <span className="text-sm text-yellow-700">Đang hiển thị kết quả đã lọc</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsBar;