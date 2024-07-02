import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignuup from './pages/LoginSignuup';
import Shop from './pages/Shop';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assests/banner_mens.png'
import women_banner from './components/Assests/banner_women.png'
import kid_banner from './components/Assests/banner_kids.png'

import ShopCategory from './pages/ShopCategory';

function App() {
  return (
    <div>
<BrowserRouter>
<Navbar/>




<Routes>

  <Route path='/' element={<Shop/>}/>
  

  <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
  <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />}/>
  <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />}/>

  <Route path="product" element={<Product/>}>
  <Route path=':productId' element={<Product/>}/>
  </Route>

  <Route path='/cart' element={<Cart/>}/>
  <Route path='/login' element={<LoginSignuup/>}/>


</Routes>
<Footer/>
</BrowserRouter>


    
    </div>
  );
}

export default App;
