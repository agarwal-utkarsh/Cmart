import React from 'react'
import Users from './components/Users'
import UserCart from './components/UserCart'
import './App.css';
import Product from './components/Product';
import ProductState from './context/ProductState';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import AdminShowProducts from './components/AdminShowProducts';
import { Button } from '@mui/material';
import Home from './components/Home';
import Supplier from './components/Supplier';
import { useState } from 'react'
import EachCartItem from './components/EachCartItem';
import CheckOut from './components/CheckOut';
import GetUsers from './components/GetUsers';



function App() {

const [recCart , setCart] = useState([]);

const [ checko , setCheck ] = useState([])



  return (
    <ProductState>
      
      <div className='App'>
        {/* <Navbar /> */}
      
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/admin-login" element={<AdminLogin />} />
          <Route exact path="/user-login" element={<UserLogin />} />
          <Route exact path="/add-products" element={<Product />} />
          <Route exact path="/order-supplier" element={<Supplier />} />
          <Route exact path="/products" element={<Users />} />
          <Route exact path="/get-users" element={<GetUsers />} />
          <Route exact path="/admin-products" element={<AdminShowProducts />} />
          <Route exact path="/products/cart" element={<UserCart />} />
          
          
        </Routes>
      </div>
    </ProductState>

  );
}

/*
Hey Cody here.
*/
export default App;
