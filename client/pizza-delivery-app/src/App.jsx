import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}
