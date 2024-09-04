import React from 'react';
import './Products.scss';

const Products = () => {
  return (
    <div className='products-1'>
    <div className='products1-wrapper'>
      <div className='topic'>
        <hr/>
        <h1><span>OUR</span> PRODUCTS</h1>
        <hr/>
      </div>
    <div className='main-box'>
      <div className='box'>
        <div className='box-image'>
          <img src="/pineapple.png" alt="Pineapple" />
        </div>
        <div className='content'>
          <h1>Grade 1</h1>
          <h3>Weight more than 1 kg</h3>
        </div>
      </div>
      <div className='box'>
        <div className='box-image'>
         <img src="/pineapple.png" alt="Pineapple" />
        </div>
        <div className='content'>
          <h1>Grade 2</h1>
          <h3>Weight more than 1 kg</h3>
        </div>
      </div>
      <div className='box'>
        <div className='box-image'>
          <a href="#"><img src="/pineapple.png" alt="Pineapple" /></a>
        </div>
        <div className='content'>
          <h1>Grade 3 </h1>
          <h3>Weight more than 1 kg</h3>
        </div>
      </div>
      <div className='box'>
        <div className='box-image'>
          <a href="#"><img src="/pineapple.png" alt="Pineapple" /></a>
        </div>
        <div className='content'>
          <h1>Baby Pineapple</h1>
          <h3>Weight more than 1 kg</h3>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Products;

