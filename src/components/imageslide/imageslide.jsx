import React from 'react'
import { useEffect, useState } from 'react';
import { data } from './data';

const imageslide = () => {
    const [activeImg,setActiveImg] = useState(0);
    const handlePrev =() =>{ 
      if(activeImg <=0){
        setActiveImg(data.length - 1)
      }else{
      setActiveImg(activeImg - 1)
    }
  }
  useEffect(() =>{
    setTimeout(() =>{
      handleNext();
    },3000);
  
  
  },[activeImg])
    const handleNext =() => {
      setActiveImg((activeImg + 1) % data.length)
    }
    return (
      <>
      <div className='carousel'>
        <button onClick={handlePrev}>Prev</button>
        {
          data.map((item,i)=>{
            return (
              <img className={activeImg === i ? "block img" : "hide"} src={item.url} arl={item.alt} title={item.alt} key={item.id}/>
            )
          })
        }
      <button onClick={handleNext}>Next</button>  
      </div>
      </>
    );
}

export default imageslide
