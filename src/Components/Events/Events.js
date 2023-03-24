import React from 'react'
import SectionHeading from "../Section-Heading/SectionHeading"
import "./Events.scss"
import {MdPlace} from "react-icons/md"
import {IoMdTimer} from "react-icons/io"
import{BsDoorOpen} from "react-icons/bs"

const Events = () => {

    const registerHandler=()=>{
    }
  return (
    <div className='Events-Main-Div'>
    <SectionHeading heading="Upcoming-Events"/>
    <div className='Events-section'>
        <div className='Event-card'>
        <div className='Event-date'><span>June</span><h1>13</h1></div>
        <div className='box'>
        <div className='box-content'>
            <h4 className='title'>Don't judge each day by the harvest you reap but by the seeds that you plant.</h4>
            <div className='content-below'>
                <div><IoMdTimer/><p>Time :</p> 10:30</div>
                <div><BsDoorOpen/><p>Room :</p> 416</div>
                <div><MdPlace/> <p>Venue:</p> Admin Block</div>
            </div>
        </div>
        <div className='box-button'>
       <a href='https://www.linkedin.com/in/harsha-gandeti/' className='btn-1'>Register</a> 
        <button className='btn-2'>More</button>
        </div>
        </div>

        </div>
    </div>

    
    </div>
  )
}

export default Events