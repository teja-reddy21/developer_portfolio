import React, { useState } from 'react'
import "./navbar.css";
import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
const Navbar = () => {

  const [menu,setOpenMenu]=useState(false);
  const [showMenu,setShowMenu]=useState(true);
  return (
    <nav className='nav_head'>
        <span className='heading'>Portfolio</span>
        <ul className={menu ? "content show" : "content hide"}>
          
          <a href='#about'>
            <li>
              About
            </li>
            </a>
            <a href='#experience'>
            <li>
              Experience
              </li>
              </a>
             <a href='#projects'>
            <li>
              Projects
              </li>
              </a>
             <a href='#contact'>
            <li>
              Contact
              </li>
              </a>
        </ul>
        {showMenu ? (
          <RiMenu2Line className='icon' onClick={()=>{setOpenMenu(!menu); setShowMenu(!showMenu)}} />
        ): <RiCloseLine />}
    </nav>
  )
}

export default Navbar
