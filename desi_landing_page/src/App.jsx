import React, { useState } from 'react'

import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import SideNavbar from './components/SideNavbar'

function App() {
  
  const [navbar, setNavbar] =useState(false)
  const scrollHandler =()=>{
    if(window.scrollY>=70){
      setNavbar(true)
    }
    else setNavbar(false)
  }
  window.addEventListener('scroll', scrollHandler)
  return (
    <div className="App">
      <Navbar navbar={navbar}  />
      <SideNavbar navbar={navbar} />
      <HeroSection/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App
