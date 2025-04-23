import React from 'react';

const CategoryBadge = ({ category }) => {
  // Màu sắc khác nhau cho các danh mục khác nhau
  const getCategoryStyles = (category) => {
    switch (category) {
      case 'Công nghệ':
        return 'bg-blue-100 text-blue-800';
      case 'Thời trang':
        return 'bg-pink-100 text-pink-800';
      case 'Gia dụng':
        return 'bg-amber-100 text-amber-800';
      case 'Sách & Văn phòng phẩm':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-indigo-100 text-indigo-800';
    }
  };

  return (
    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryStyles(category)}`}>
      {category}
    </span>
  );
};

export default CategoryBadge;