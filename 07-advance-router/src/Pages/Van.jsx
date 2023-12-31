import {useState, useEffect} from 'react'
import vanLarge from '../assets/cream-van-large.svg'
import '.././styles/Van.css'
import VanOptions from '../Components/VanOptions'

const Van = (props) => {
    console.log(props)
  return (
    <div className='van-container' >
    <p className='clear-filter' >← Back to all vans</p>
    <img src={vanLarge} alt='single van' width={500} height={500} />
    <VanOptions type={'Simple'} />
    </div>
  )
}

export default Van