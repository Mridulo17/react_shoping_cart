
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Navigation from './components/Navigation'
import Products from './pages/ProductsPage'
import Cart from './pages/Cart'
import Product from './components/Product'
import SingleProduct from './pages/SingleProduct'
import { CartContext } from './CartContext'
import { useEffect, useState } from 'react'

function App() {

  const [cart, setCart] = useState({});

  useEffect(() => {
    const cart = window.localStorage.getItem('cart');
  }, []);

  useEffect(() => {
    const cart = window.localStorage.setItem('cart, JSON.stringify(cart)');
  }, [cart]);

  return (
    <BrowserRouter>
    <CartContext.Provider value={{ cart, setCart }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  )
}

export default App
