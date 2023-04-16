import React from "react";
import './App.css';
import Header from "./component/layout/header/Header.jsx"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Footer from "./component/layout/footer/Footer"
import Home from "./component/home/Home.jsx"
import ProductDetails from "./component/product/ProductDetails.jsx"
import LogIn from "./component/LogIn/LogIn";
import SignUp from "./component/SignUp/SignUp";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/product/:id" element={<ProductDetails />}/>
        <Route exact path="/login" element={<LogIn />}/>
        <Route exact path="/signup" element={<SignUp />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
