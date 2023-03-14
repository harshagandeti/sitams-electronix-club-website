import React from 'react'
import "./AboutUs.scss"
import { Line , Circle } from '../Home-Page-Components/Back-Ground-Objects/BackGroundObj'
import SectionHeading from '../Section-Heading/SectionHeading'
import Profile from "../Images/Profile-1.png"

const AboutUs = () => {
  return (
    <div className='Abtus-Main-Div'>
    <SectionHeading heading='About us' />
   
    <div className='Abt-Containers'>
    <div className='Container'>
    <div className='header'>
        <div className='profile-img'>
            <img src={Profile}></img>
        </div>
        <div className='profile-details'>
            <span className='profile-name'>Dr. E.N. Thompson Forum</span>
            <span className='profile-role'> Principal , Sitams</span>
            <span className='profile-'></span>
        </div>
    </div>
    <div className='content'>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    </div>
    <div className='Container'>
    <div className='header'>
        <div className='profile-img'>
            <img src={Profile}></img>
        </div>
        <div className='profile-details'>
            <span className='profile-name'>Dr. E.N. Thompson Forum</span>
            <span className='profile-role'> Principal , Sitams</span>
            <span className='profile-'></span>
        </div>
    </div>
    <div className='content'>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    </div>
    <div className='Container'>
    <div className='header'>
        <div className='profile-img'>
            <img src={Profile}></img>
        </div>
        <div className='profile-details'>
            <span className='profile-name'>Dr. E.N. Thompson Forum</span>
            <span className='profile-role'> Principal , Sitams</span>
            <span className='profile-'></span>
        </div>
    </div>
    <div className='content'>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    </div>
    {/* <div className='Container'>
    <div className='header'>
        <div className='profile-img'>
            <img src={Profile}></img>
        </div>
        <div className='profile-details'>
            <span className='profile-name'>Dr. E.N. Thompson Forum</span>
            <span className='profile-role'> Principal , Sitams</span>
            <span className='profile-'></span>
        </div>
    </div>
    <div className='content'>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    </div> */}
   

    </div>

    <div className='Board'>
        <SectionHeading heading="Board Members" center/>
    </div>
    <div className='line'><Line/></div>
    <div className='Circle'><Circle/></div>
    <div className='Circle-1'><Circle/></div>
    </div>
  )
}

export default AboutUs