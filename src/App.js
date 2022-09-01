import React from 'react'
import Users from './components/Users'
import UserCart from './components/UserCart'
import './App.css';
import Product from './components/Product';
import ProductState from './context/ProductState';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState } from 'react'
import EachCartItem from './components/EachCartItem';
import CheckOut from './components/CheckOut';



function App() {

const [recCart , setCart] = useState([]);

const [ checko , setCheck ] = useState([])



  return (
    <ProductState>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route exact path="/add-products" element={<Product />} />
          <Route exact path="/products" element={<Users />} />
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
