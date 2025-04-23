import React, { createContext, useContext, useReducer, useEffect } from 'react';

const ProductContext = createContext();

// Khóa lưu trữ trong localStorage
const STORAGE_KEY = 'product_management_data';

// Dữ liệu mẫu ban đầu - chỉ dùng nếu không có dữ liệu trong localStorage
const sampleProducts = [
  { id: 1, name: 'Điện thoại Samsung Galaxy S21', price: 18000000, category: 'Công nghệ', stock: 15 },
  { id: 2, name: 'Laptop Dell XPS 13', price: 30000000, category: 'Công nghệ', stock: 8 },
  { id: 3, name: 'Tai nghe Apple AirPods Pro', price: 5000000, category: 'Công nghệ', stock: 25 },
  { id: 4, name: 'Áo thun nam cổ tròn', price: 250000, category: 'Thời trang', stock: 50 },
  { id: 5, name: 'Váy liền thân dáng suông', price: 450000, category: 'Thời trang', stock: 30 },
  { id: 6, name: 'Nồi cơm điện đa năng', price: 1200000, category: 'Gia dụng', stock: 20 },
  { id: 7, name: 'Máy hút bụi không dây', price: 2500000, category: 'Gia dụng', stock: 10 },
  { id: 8, name: 'Sách kỹ năng sống', price: 120000, category: 'Sách & Văn phòng phẩm', stock: 45 },
];

// Lấy dữ liệu từ localStorage hoặc sử dụng dữ liệu mẫu nếu không có
const loadInitialState = () => {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      console.log('Đã tải dữ liệu từ localStorage:', parsedData.products.length, 'sản phẩm');
      return parsedData;
    }
  } catch (error) {
    console.error('Lỗi khi tải dữ liệu từ localStorage:', error);
  }
  
  // Nếu không có dữ liệu hoặc có lỗi, trả về state mặc định
  return {
    products: sampleProducts,
    searchTerm: '',
    categoryFilter: 'Tất cả',
  };
};

const initialState = loadInitialState();

const productReducer = (state, action) => {
  let newState;
  
  switch (action.type) {
    case 'ADD_PRODUCT':
      newState = {
        ...state,
        products: [...state.products, { ...action.payload, id: Date.now() }],
      };
      break;
      
    case 'DELETE_PRODUCT':
      newState = {
        ...state,
        products: state.products.filter(product => product.id !== action.payload),
      };
      break;
      
    case 'SET_SEARCH_TERM':
      newState = {
        ...state,
        searchTerm: action.payload,
      };
      break;
      
    case 'SET_CATEGORY_FILTER':
      newState = {
        ...state,
        categoryFilter: action.payload,
      };
      break;
      
    default:
      return state;
  }
  
  // Lưu state mới vào localStorage (chỉ khi thay đổi products)
  if (action.type === 'ADD_PRODUCT' || action.type === 'DELETE_PRODUCT') {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
      console.log('Đã lưu dữ liệu vào localStorage:', newState.products.length, 'sản phẩm');
    } catch (error) {
      console.error('Lỗi khi lưu dữ liệu vào localStorage:', error);
    }
  }
  
  return newState;
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  // Lọc sản phẩm theo tên và danh mục
  const filteredProducts = state.products
    .filter(product => 
      product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
    .filter(product => 
      state.categoryFilter === 'Tất cả' ? true : product.category === state.categoryFilter
    );

  // Lấy tất cả các danh mục từ danh sách sản phẩm và thêm "Tất cả" vào đầu
  const categories = ['Tất cả', ...new Set(state.products.map(product => product.category))];

  // Các hàm thay đổi dữ liệu
  const addProduct = (product) => {
    dispatch({ type: 'ADD_PRODUCT', payload: product });
  };

  const deleteProduct = (id) => {
    dispatch({ type: 'DELETE_PRODUCT', payload: id });
  };

  const setSearchTerm = (term) => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: term });
  };

  const setCategoryFilter = (category) => {
    dispatch({ type: 'SET_CATEGORY_FILTER', payload: category });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        filteredProducts,
        categories,
        searchTerm: state.searchTerm,
        categoryFilter: state.categoryFilter,
        addProduct,
        deleteProduct,
        setSearchTerm,
        setCategoryFilter
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);