import React, { useState } from 'react'
import "./AboutUs.scss"
import { Line , Circle } from '../Home-Page-Components/Back-Ground-Objects/BackGroundObj'
import SectionHeading from '../Section-Heading/SectionHeading'
import Profile from "../Images/Profile-1.png"
import {FiEdit} from "react-icons/fi"
import StudentSection from "../StudentMembers/StudentSection"

const AboutUs = () => {
    const [isAuth,setIsAuth]=useState(false)
    const editHandler=()=>{

    }
  return (
    <div className='Abtus-Main-Div'>
    <SectionHeading heading='About us' />
   
    <div className='Abt-Containers'>
    <div className='Container'>
    <div className={isAuth?'edit-icon':"disable"} ><FiEdit className='icon'  onClick={editHandler} size={25} color=" rgb(0, 86, 139)" /></div>
 
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
    <p>Dr. K. Gopi is a highly experienced and knowledgeable professor with more than two decades of teaching and research experience in the field of Embedded Systems and Digital Image Processing. He is a reputed scholar and has published 18 research articles in renowned National and International journals. Dr. Gopi is an expert in his field and has a deep understanding of the intricacies of Embedded Systems and Digital Image Processing.

In addition to his expertise, Dr. Gopi is also a student-encouraging professor. He is committed to nurturing and developing the skills and talents of his students, and his teaching methods reflect this commitment. Dr. Gopi is known for his engaging and interactive classroom sessions, where he encourages his students to participate and ask questions. He is always available to help his students and goes above and beyond to provide them with the support and guidance they need to succeed in their academic and professional pursuits. Overall, Dr. K. Gopi is a highly respected and esteemed professor who is dedicated to the growth and development of his students.




.</p>
    </div>
    </div>
    <div className='Container'>
    <div className={isAuth?'edit-icon':"disable"} ><FiEdit className='icon' onClick={editHandler} size={25} color=" rgb(0, 86, 139)" /></div>
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
    <div className={isAuth?'edit-icon':"disable"} ><FiEdit className='icon' onClick={editHandler} size={25} color=" rgb(0, 86, 139)" /></div>
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
        <StudentSection/>
    </div>
    <div className='line'><Line/></div>
    <div className='Circle'><Circle/></div>
    <div className='Circle-1'><Circle/></div>
    </div>
  )
}

export default AboutUs