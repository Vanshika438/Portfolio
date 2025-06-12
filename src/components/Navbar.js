import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar=()=>{
  return (
    <nav className="navbar">
      <div className="logo">
        <p>Vanshika<span>Sharma</span></p>
      </div>
      <div>
        <a href='#Home'>Home</a>
        <a href='#About'>About</a>
        <a href='#Resume'>Resume</a>
        <a href='#Projects'>Projects</a>
        <a href='#Conatct'>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
