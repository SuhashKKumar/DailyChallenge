import React, { useState } from 'react'

const SizeButtons = () => {
    const sizes=['36','38','40','42','44']

  return (
    <div className='' >
    <h3 className='size_buttons_container' >SIZES</h3>
        {
            sizes.map((size, index)=>{
              return  <button key={index} className='button secondary_button' >{size}</button>
            })
        }
                
    </div>
  )
}

export default SizeButtons