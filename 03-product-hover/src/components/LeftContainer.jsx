import React from 'react'
import shoeImage from '../assets/images/nike_blue_shoe.png'

const LeftContainer = ({setTransform, transform}) => {
  return (
    <div onMouseEnter={()=>{
      setTransform(true)
    }} onMouseLeave={()=>{
      setTransform(false)
    }} className={transform?'left_container_after':'left_container_before'} >
        <img className='image' src={shoeImage} alt='nike shoe' />
    </div>
  )
}

export default LeftContainer