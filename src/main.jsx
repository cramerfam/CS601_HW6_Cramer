import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './inventoryList.css';
import Header from './components/header.jsx';
import InventoryList from './components/InventoryList.jsx';
import Footer from './components/footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div id='container'>
      <Header />
      <InventoryList />
      <Footer />
    </div>
  </StrictMode>
)
