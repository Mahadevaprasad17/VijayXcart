import React from 'react';

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="#home" className="logo">VijayXcart</a>
      <div className="links">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#footer">Contact</a>
      </div>
    </nav>
  );
}
