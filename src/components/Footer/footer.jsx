import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-1'>
        <div className='footer-head'>
            <h1>PineappleExport</h1>
        </div>
        <div className='footer-nav'>
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
        <div className='footer-main'>
            <div className='f1-main'>
                <p>+96 76 000 1234</p>
                <p>+96 76 000 1234</p>
                <p>info@pineappleexport.com</p>
                <p>No 2/a, Kandy road, Dankotuwa</p>
            </div>
            <div className='f2-main'>
                <div className='f2-head'>
                    <h1>Follows Us</h1>
                </div>
                <div className='f2-img'>
                    <a href="#"><img src="/facebook.png" alt=""/></a>
                    <a href="#"><img src="/whatsapp.png" alt=""/></a>
                    <a href="#"><img src="/instagram.png" alt=""/></a>
                    <a href="#"><img src="/youtube.png" alt=""/></a>
                </div>
            </div>
        </div>
        <div className='horizontal'>
        <hr />
        </div>
    </div>
    </div>
  )
}

export default Footer
