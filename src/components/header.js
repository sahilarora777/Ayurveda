import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "antd/dist/reset.css";
import { Layout, Menu } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import logo from "../assets/logo.png";

const { Header } = Layout;

const AppHeader = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("usertoken");

  const handleLogout = () => {
    localStorage.removeItem("usertoken"); // Clear the token on logout
    navigate("/login"); // Redirect to home or login page after logging out
    window.location.reload()
  };

  return (
    <Header
      style={{
        background: "#eb2f963b",
        padding: "15px 50px",
        display: "flex",
        alignItems: "center",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        height: "100px",
      }}
    >
      {/* Logo Section */}
      <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
        <img
          src={logo}
          alt="Ayurvedas Logo"
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            marginRight: "10px",
            border: "2px solid #136a2f",
          }}
        />
        <h2 style={{ margin: 0, color: "#136a2f", fontWeight: "bold", fontSize: "22px" }}>Ayurveda</h2>
      </Link>

      {/* Navigation Menu */}
      <Menu
        mode="horizontal"
        style={{
          marginLeft: "auto",
          background: "transparent",
          border: "none",
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        <Menu.Item key="home">
          <Link to="/" style={{ color: "#136a2f" }}>Home</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about" style={{ color: "#136a2f" }}>About</Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link to="/contact" style={{ color: "#136a2f" }}>Contact</Link>
        </Menu.Item>
        
        {!token ? (
          <Menu.Item key="login">
            <Link to="/login" style={{ color: "#136a2f" }}>Login</Link>
          </Menu.Item>
        ) : (
          <Menu.Item key="logout" onClick={handleLogout} style={{ color: "#136a2f" }}>
            Logout
          </Menu.Item>
        )}
        

        <Menu.Item key="cart">
          <Link to="/cart">
            <ShoppingCartOutlined style={{ fontSize: "20px" }} /> Products (0)
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
