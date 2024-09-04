import React from 'react'
import './Background.scss'
import image1 from '../../Assets/Assets/image1.png'
import image2 from '../../Assets/Assets/image2.png'
import image3 from '../../Assets/Assets/image3.png'

const Background = ({heroCount}) => {
  
  if(heroCount===0)
  {
    return <img src={image1} className='background'/>
  }
  else if(heroCount===1)
  {
    return <img src={image2} className='background'/>
  }
  else if(heroCount===2)
    {
      return <img src={image3} className='background'/>
    }
}

export default Background
