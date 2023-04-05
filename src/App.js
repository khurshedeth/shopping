import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import CartItem from "./Components/CartItem";
import Product from "./Components/Product";
import Sidebar from "./Components/SideBar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <div className=" overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails/>} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
