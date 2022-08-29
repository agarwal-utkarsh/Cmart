import React from 'react'
import Users from './components/Users'
import './App.css';
import Product from './components/Product';
import ProductState from './context/ProductState';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import AdminShowProducts from './components/AdminShowProducts';
import { Button } from '@mui/material';


function App() {
  return (
    <ProductState>
      
      <div className='App'>
        {/* <Navbar /> */}
      
        <Routes>
          <Route exact path="/admin-login" element={<AdminLogin />} />
          <Route exact path="/user-login" element={<UserLogin />} />
          <Route exact path="/add-products" element={<Product />} />
          <Route exact path="/products" element={<Users />} />
          <Route exact path="/admin-products" element={<AdminShowProducts />} />
        </Routes>
      </div>
    </ProductState>

  );
}

export default App;
