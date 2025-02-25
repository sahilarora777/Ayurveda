import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer
      style={{
        background: "#eb2f9636",
        padding: "40px 80px",
        borderTop: "2px solid #ddd",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* COMPANY */}
        <div style={columnStyle}>
          <h3 style={headingStyle}>COMPANY</h3>
          <p><Link to="/about" style={linkStyle}>About</Link></p>
          <p><Link to="/careers" style={linkStyle}>Careers</Link></p>
          <p><Link to="/brand" style={linkStyle}>Brand Center</Link></p>
          <p><Link to="/blog" style={linkStyle}>Blog</Link></p>
        </div>

        {/* HELP CENTER */}
        <div style={columnStyle}>
          <h3 style={headingStyle}>HELP CENTER</h3>
          <p><a href="https://discord.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Discord Server</a></p>
          <p><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Twitter</a></p>
          <p><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Facebook</a></p>
          <p><Link to="/contact" style={linkStyle}>Contact Us</Link></p>
        </div>

        {/* LEGAL */}
        <div style={columnStyle}>
          <h3 style={headingStyle}>LEGAL</h3>
          <p><Link to="/privacy" style={linkStyle}>Privacy Policy</Link></p>
          <p><Link to="/licensing" style={linkStyle}>Licensing</Link></p>
          <p><Link to="/terms" style={linkStyle}>Terms & Conditions</Link></p>
        </div>

        {/* DOWNLOAD */}
       </div>
    </Footer>
  );
};

const columnStyle = {
  minWidth: "150px",
};

const headingStyle = {
  color: "#222",
  marginBottom: "10px",
  fontSize: "25px",
  fontWeight: "bold",
};

const linkStyle = {
  textDecoration: "none",
  color: "#555",
  fontSize: "20px",
};

export default AppFooter;
