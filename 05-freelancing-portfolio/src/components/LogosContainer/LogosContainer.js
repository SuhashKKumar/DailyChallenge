import React from 'react'
import './LogosContainer.css'
import { Logos } from '../../lib/Logos'

const LogosContainer = () => {
  return (
    <div className='logo-container' >
    {
      Logos.map(({id, imageURL, altText})=>{
       return <img width={'200px'} key={id} src={imageURL} alt={altText} />
      })
    }
    </div>
  )
}

export default LogosContainer