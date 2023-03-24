import React, { useState } from 'react'
import "./AddEvents.scss"
import SectionHeading from '../../Section-Heading/SectionHeading'

const AddEvents = () => {
    const [event,setEvent]=useState({
        name:"",
        room:"",
        block:"",
        date:"",
        time:"",
        register_Link:"",
    })

    const {  name,
    room,
    block,
    date,
    time,
    register_Link,}=event
    const changeHandler=(e)=>{
setEvent({...event,[e.target.name]:e.target.value})
    }
     const submitHandler=(e)=>{
    e.preventDefault()
    console.log(event)

    // cancel handler for clear form after submit
    cancelHandler()
    }
    const cancelHandler=()=>{
        setEvent({
            name:"",
            room:"",
            block:"",
            date:"",
            time:"",
            register_Link:"",
        })
  
    }
  return (
    <div className='Add-Events-Main-Div'>
        <SectionHeading heading="Add-Events"/>
        <div className='container'>
            <form>
                <label>Enter Event Name</label>
                <input type='text' name='name' value={name} onChange={changeHandler} placeholder='event name'></input>
                <label>Enter Event Room No</label>
                <input type='text' name="room" value={room} onChange={changeHandler}  placeholder='event Room No'></input>
                <label>Enter Event Venue-Block</label>
                <input type='text' name='block' value={block} onChange={changeHandler}  placeholder='event venu block'></input>
                <label>Event Date</label>
                <input type='date' name='date' value={date} onChange={changeHandler}  placeholder='event name'></input>
                <label> Event Time</label>
                <input type='time' name='time' value={time} onChange={changeHandler}  placeholder='event name'></input>
                <label>Registration Google Form Link</label>
                <input type='text' name='register_Link' value={register_Link} onChange={changeHandler}  placeholder='Paste here .........'></input>
                <section className='section'>
                    <button onClick={submitHandler}>Submit</button>
                    <button onClick={cancelHandler}>Cancel</button>
                </section>
            </form>
        </div>
    </div>
  )
}

export default AddEvents