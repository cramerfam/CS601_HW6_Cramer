import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './inventoryList.css';
import Header from './components/header.jsx';
import InventoryList from './components/InventoryList.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import Footer from './components/footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div id='container'>
        <Header />
        <Routes>
          <Route path="/" element={<InventoryList />} />
          <Route path="/product/:sku" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
)
