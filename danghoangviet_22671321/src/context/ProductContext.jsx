import React, { createContext, useContext, useReducer, useEffect } from 'react';

const ProductContext = createContext();

const initialState = {
  products: JSON.parse(localStorage.getItem('products')) || [
    { id: 1, name: 'Điện thoại Samsung Galaxy S21', price: 18000000, category: 'Điện thoại', stock: 15 },
    { id: 2, name: 'Máy tính xách tay Dell XPS 13', price: 30000000, category: 'Laptop', stock: 8 },
    { id: 3, name: 'Tai nghe Apple AirPods Pro', price: 5000000, category: 'Phụ kiện', stock: 25 },
    { id: 4, name: 'Đồng hồ thông minh Apple Watch', price: 9500000, category: 'Thiết bị đeo', stock: 12 },
    { id: 5, name: 'iPad Pro 12.9', price: 25000000, category: 'Máy tính bảng', stock: 7 },
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

  const filteredProducts = state.products
    .filter(product => 
      product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
    .filter(product => 
      state.categoryFilter === 'Tất cả' ? true : product.category === state.categoryFilter
    );

  const categories = ['Tất cả', ...new Set(state.products.map(product => product.category))];

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