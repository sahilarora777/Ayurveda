import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AppHeader from "./components/header";
import Home from "./components/home";
import Product from "./components/product";
import AppFooter from "./components/footer";
import Layout from "antd/es/layout/layout";
import { Content } from "antd/es/layout/layout";
import About from "./components/about";
import Contact from "./components/contact";
import Banner from "./components/banner";
import Card from "./components/card";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/cart";
import Order from "./components/order";
import Success from './components/success'

function App() {
  const token = localStorage.getItem("usertoken");
  // alert(token)
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <AppHeader />
        <Content style={{ padding: "20px 50px", flex: "1" }}>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order/>}/>
                <Route path="/allproduct" element={<allProduct/>}/>
                <Route path="/success" element={<Success/>}/>
                <Route path="/card" element={<Card/>}/>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/banner" element={<Banner />} />
                <Route path="/product" element={<Product />} />
                <Route path="*" element={<Navigate to="/" />} />
            {token ? (
              <>
                {" "}
               

              </>
            ) : (
              <>
               <Route path="/register" element={<Register/>}/>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}
          </Routes>
        </Content>
        <AppFooter />
      </Layout>
    </Router>
  );
}

export default App;
