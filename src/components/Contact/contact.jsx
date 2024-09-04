import React from 'react';
import './Contact.scss'

const Contact = () => {
  return (
    <div className='contact-1'>
    <div className="contactus-wrapper">
      <div className="topic-2">
        <hr />
        <h1><span>CONTACT</span> US</h1>
        <hr />
      </div>
    <div className='mai'>
    <div className='info-1'>
      <div className='topi'>
        <h1>GET IN TOUCH</h1>
      </div>
      
      <div className='info'>
        <div className='info-img'>
          <img src="email.png" alt="email" />
        </div>
        <div className='info-details'>
          <h2>EMAIL</h2>
          <p>info@pineappleexport.com</p>
        </div>
      </div>
      <div className='info'>
        <div className='info-img'>
          <img src="gps.png" alt="location" />
        </div>
        <div className='info-details'>
          <h2>ADDRESS</h2>
          <p>No 2/a, Kandy road, Dankotuwa</p>
        </div>
      </div>
      <div className='info'>
        <div className='info-img'>
          <img src="whatsapp (1).png" alt="whatsapp" />
        </div>
        <div className='info-details'>
          <h2>WHATSAPP</h2>
          <p>+96 76 000 1234</p>
        </div>
      </div>
      <div className='info'>
        <div className='info-img'>
          <img src="telephone.png" alt="telephone" />
        </div>
        <div className='info-details'>
          <h2>CALL US</h2>
          <p>+96 76 000 1234</p>
        </div>
      </div>
    </div>
    

    <div class="info-2">
    <form>
        <div class="form-group-1">
          <div className='name-1'>
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" />
          </div>
          <div className='name-2'>
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" />
          </div>
        </div>
        <div class="form-group-1">
          <div className='name-1'>
            <label htmlFor="pineappleType">Pineapple Type</label>
            <input type="text" id="pineappleType" name="pineappleType" />
          </div>
          <div className='name-2'>
            <label htmlFor="noOfKilos">No Of Kilos</label>
            <input type="text" id="noOfKilos" name="noOfKilos" />
          </div>
        </div>
        <div className='form-group-2'>
          <div className="for-details">
            <label htmlFor="country">Country</label>
            <input type="text" id="country" name="country" />
          </div>
          <div className="for-details">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="for-details">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="6"></textarea>
          </div>
          <div className="for-details-1">
            <button type="submit" className="submit-btn">SEND MASSEAGE</button>
          </div>
        </div>
    </form>
  </div>
  </div>
    </div>
  </div>
  );
};

export default Contact;
