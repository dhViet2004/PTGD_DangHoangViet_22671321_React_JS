import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import AddProduct from './pages/AddProduct';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <ProductProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <div className="container mx-auto px-4 py-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/add" element={<AddProduct />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ProductProvider>
  );
}

export default App;