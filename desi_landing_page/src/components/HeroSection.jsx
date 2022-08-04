import React from 'react'
import {HiArrowSmRight} from 'react-icons/hi'
import '../styles/HeroSection.css'

const HeroSection = () => {
  return (
    <>
    
    <div className='hero_section' >
    <div className='hero_subsection' >
    <h1 className='hero_title' >Afraid to Express your Views..?</h1>
    <button>Join Our Community <HiArrowSmRight className='right_arrow'/></button>
    </div>
    </div>
    </>
  )
}

export default HeroSection