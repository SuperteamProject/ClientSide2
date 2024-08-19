// src/components/Navbar.js

import React from 'react';
import logo from '../assets/logo.jpg';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 30px', backgroundColor: 'transparent', color: '#fff' }}>
      <img src={logo} alt="Pizza Logo" style={{ height: '50px' }} />
      <div>
        <a href="#" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Home</a>
        <a href="#" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Products</a>
        <a href="#" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>About</a>
        <a href="#" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Contact</a>
      </div>
      <button style={{ backgroundColor: 'orange', border: 'none', padding: '10px 20px', color: 'white', cursor: 'pointer' }}>Log In</button>
    </nav>
  );
}

export default Navbar;
