import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroComponent from '../HeroComponent/HeroComponent'
import './HeroContainer.css'

const HeroContainer = () => {
  return (
    <div className='hero-container' >
    <Navbar/>
    <HeroComponent/>
    </div>
  )
}

export default HeroContainer