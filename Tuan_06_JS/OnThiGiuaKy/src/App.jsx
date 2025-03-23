import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import BookTable from './pages/BookTable'; // Import trang mới
import Footer from './components/Footer';
import { OrderProvider } from './context/OrderContext';

function App() {
  return (
    <div>
      <OrderProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/BookTable" element={<BookTable />} /> {/* Thêm route */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </OrderProvider>
    </div>
  );
}

export default App;