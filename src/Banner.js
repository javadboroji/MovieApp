import React from 'react'
import Banner1 from './asset/images/banner2.jpg'
import "./App.css"
export default function Banner() {
    
  return (
    <div className='banner'>
       <a href='#!'> <img src={Banner1} alt='banner' className='banner-image'/></a> 
    </div>
  )
}
