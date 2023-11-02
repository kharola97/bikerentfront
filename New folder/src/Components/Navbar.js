import React, { useState } from 'react'
import "../Css/Nav.css"
import {Link} from "react-router-dom"
import { BiMenu} from "react-icons/bi";
import { AiOutlineClose} from "react-icons/ai";
const Navbar = () => {
  const [openMenu , setOpenMenu] = useState(false)

  const handleMenu = ()=>{
    console.log("clicked")
    setOpenMenu(!openMenu)
  }
  return (
    
    <div className='nav'>
      <div className='logo-menu-btn'>
        <h2 className='logo'>Explore...!</h2>
        {openMenu ? (<AiOutlineClose className='menu-btn' onClick={handleMenu}/>) :
           (<BiMenu className='menu-btn' onClick={handleMenu}/>)}
           </div>
        <div className={`nav-items ${openMenu ? 'open' : ''}`} onClick={handleMenu}>
            <Link to="/"> <h3>Home</h3> </Link>
            <Link to="/login"> <h3>Login</h3> </Link>           
            <Link to="/register"> <h3>Register</h3> </Link>
            <Link to=""><h3>Contact Us</h3> </Link>
            </div>
        </div>
   
  )
}

export default Navbar