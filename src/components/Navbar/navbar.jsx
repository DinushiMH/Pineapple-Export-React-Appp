import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav">
    <div className='nav_wrapper'>
        <div className='logo'>
            <a href="#"><img src="/logo111.png" alt=""/></a>
        </div>
        <ul>
          <Link to="/" style={{textDecoration:"none"}}>
           <li>HOME</li>
          </Link>
          <Link to="/services" style={{textDecoration:"none"}}>
           <li>OUR SERVICES</li>
          </Link>
          <Link to="/contactus" style={{textDecoration:"none"}}>
           <li>CONTACT US</li>
          </Link>
          <Link to="/gallery" style={{textDecoration:"none"}}>
           <li>GALLERY</li>
          </Link>
          <Link to="/aboutus" style={{textDecoration:"none"}}>
           <li>ABOUT US</li>
          </Link>
        </ul>
    </div>
    </div>
  )
}

export default Navbar
