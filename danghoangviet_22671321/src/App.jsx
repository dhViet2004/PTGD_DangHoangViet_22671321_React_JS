import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import AddProduct from './pages/AddProduct';
import Notification from './components/Notification';
import { ProductProvider } from './context/ProductContext';

function App() {
  const [notification, setNotification] = useState(null);

  const showNotification = (type, message) => {
    setNotification({ type, message });
  };

  const hideNotification = () => {
    setNotification(null);
  };

  return (
    <ProductProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <div className="container mx-auto px-4 py-6">
            <Routes>
              <Route 
                path="/" 
                element={<Dashboard showNotification={showNotification} />} 
              />
              <Route 
                path="/add" 
                element={<AddProduct showNotification={showNotification} />} 
              />
            </Routes>
          </div>
          
          {notification && (
            <Notification 
              type={notification.type} 
              message={notification.message} 
              onClose={hideNotification}
            />
          )}
        </div>
      </Router>
    </ProductProvider>
  );
}

export default App;