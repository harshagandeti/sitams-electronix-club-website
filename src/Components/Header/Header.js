import React from 'react'
import "./Header.scss"
import Logo from "../Images/Club-Logo/Logo-Color.png"

const Header = () => {
  return (
    <div className='headerConatiner'>
        <div className='logoDiv'>
        <img src={Logo}></img>
        </div>
        <div className='clubName'>
        <span className='H1'>Sitams Electroni<span className='X'>X</span> Club</span>
        <span className='clgName'>Sreenivasa Institute Of Technology and Management Studies</span>
        </div>
    </div>
  )
}

export default Header