import React from 'react'
import "./navbar.css";

const Navbar = () => {

  
  return (
      <nav className="navbar">
      <h2 className='logo1 hide-on-mobile'>Teja</h2>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      </nav>
  )
}

export default Navbar


