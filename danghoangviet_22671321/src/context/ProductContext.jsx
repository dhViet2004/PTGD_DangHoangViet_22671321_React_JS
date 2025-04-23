import React, { createContext, useContext, useReducer, useEffect } from 'react';

const ProductContext = createContext();

const initialState = {
  products: JSON.parse(localStorage.getItem('products')) || [
    { id: 1, name: 'Điện thoại Samsung Galaxy S21', price: 18000000, category: 'Công nghệ', stock: 15 },
    { id: 2, name: 'Laptop Dell XPS 13', price: 30000000, category: 'Công nghệ', stock: 8 },
    { id: 3, name: 'Tai nghe Apple AirPods Pro', price: 5000000, category: 'Công nghệ', stock: 25 },
    { id: 4, name: 'Áo thun nam cổ tròn', price: 250000, category: 'Thời trang', stock: 50 },
    { id: 5, name: 'Váy liền thân dáng suông', price: 450000, category: 'Thời trang', stock: 30 },
    { id: 6, name: 'Nồi cơm điện đa năng', price: 1200000, category: 'Gia dụng', stock: 20 },
    { id: 7, name: 'Máy hút bụi không dây', price: 2500000, category: 'Gia dụng', stock: 10 },
  ],
  searchTerm: '',
  categoryFilter: 'Tất cả',
};

const productReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, { ...action.payload, id: Date.now() }],
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload),
      };
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      };
    case 'SET_CATEGORY_FILTER':
      return {
        ...state,
        categoryFilter: action.payload,
      };
    default:
      return state;
  }
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(state.products));
  }, [state.products]);

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
  
  // Tính toán tổng số sản phẩm và tổng tồn kho
  const totalProducts = state.products.length;
  const totalStock = state.products.reduce((total, product) => total + product.stock, 0);

  // Tính toán tổng số lượng và tồn kho cho sản phẩm đã lọc
  const filteredTotalProducts = filteredProducts.length;
  const filteredTotalStock = filteredProducts.reduce((total, product) => total + product.stock, 0);

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
        setCategoryFilter,
        totalProducts,
        totalStock,
        filteredTotalProducts,
        filteredTotalStock
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);