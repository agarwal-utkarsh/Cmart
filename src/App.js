import React from 'react'
import Users from './components/Users'
import './App.css';
import Product from './components/Product';
import ProductState from './context/ProductState';
import { Routes, Route} from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import AdminShowProducts from './components/AdminShowProducts';
import Home from './components/Home';

import UserRegister from './components/UserRegister';
import Cart from './components/Cart';
import GetOrders from './components/GetOrders';
import Confirm from './components/Confirm';



function App() {

  return (
    <ProductState>
      
      <div className='App'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/admin-login" element={<AdminLogin />} />
          <Route exact path="/user-login" element={<UserLogin />} />
          <Route exact path="/add-products" element={<Product />} />
          <Route exact path="/products" element={<Users />} />
          <Route exact path="/admin-products" element={<AdminShowProducts />} />
          <Route exact path="/products/cart" element={<Cart />} />
          <Route exact path="/user-reg" element={<UserRegister />} />
          <Route exact path="/get-orders" element={<GetOrders />} />
          <Route exact path="/confirm" element={<Confirm />} />
          
        </Routes>
      </div>
    </ProductState>

  );
}

/*
Hey Cody here.
*/
export default App;
