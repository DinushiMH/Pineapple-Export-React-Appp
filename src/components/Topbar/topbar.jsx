import React from 'react'
import './Topbar.scss'

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbar-1'>
            <div className="number">
                <h3>info@pineappleexport.com</h3>
                <span className='separetor'>|</span>
                <h3>+94 76 000 1234</h3>
            </div>
            <div className="social">
                <a href="#"><img src="/facebook.png" alt=""/></a>
                <a href="#"><img src="/whatsapp.png" alt=""/></a>
                <a href="#"><img src="/instagram.png" alt=""/></a>
                <a href="#"><img src="/youtube.png" alt=""/></a>
            </div>
      </div>
    </div>
  )
}

export default Topbar
