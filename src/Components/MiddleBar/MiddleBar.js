import React from 'react'
import "./MiddleBar.scss"
import Logo from "../Images/Club-Logo/Logo-Light-Dark.png"

const MiddleBar = () => {
  return (
    <div className='Middle-Main-Div'>
    <div className='Logo'>
        <img src={Logo}></img>
    </div>
    <div className='visitor Couter'></div>
    </div>
  )
}

export default MiddleBar