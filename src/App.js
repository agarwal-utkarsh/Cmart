import React from 'react'
import Users from './components/Users'
import './App.css';
import Product from './components/Product';
import ProductState from './context/ProductState';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <ProductState>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route exact path="/add-products" element={<Product />} />
          <Route exact path="/products" element={<Users />} />
        </Routes>
      </div>
    </ProductState>

  );
}

export default App;
