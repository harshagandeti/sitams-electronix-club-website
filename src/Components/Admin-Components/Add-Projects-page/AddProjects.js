import React, { useState } from 'react'
import "./AddProjects.scss"
import projectImage from "../Admin-DashBoard-Page/innovation.png"

const AddProjects = () => {
  const [project,setProject]=useState({
    title:"",
    year:"",
    type:"",
  })
  const [file,setFile]=useState("")

  const changeHandler=(e)=>{
    setProject({...project,[e.target.name]:e.target.value})

  }
  const submitHandler=(e)=>{
    e.preventDefault()
console.log(project,file)

    cancelHandler()
    
  }
  const cancelHandler=()=>{
    setProject({
      title:"",
      year:"",
      type:"",
    })
    setFile("")

  }

  
  return (
    <div className="AP-Main-Div">
    <div className="container-box">
    <div className="imgDiv">
    <img className="img" src={projectImage}></img>
    </div>
    
      <div className="container">
      <span className="H1">Add New Projects</span>
      <div className="form">
        <form >
          <label className="label">Enter project title</label>
          <input className="input" type="text" name='title' value={project.title} onChange={changeHandler} placeholder="enter project title"></input>
          <label className="label">Enter passed out year</label>
          <input className="input" type="text"  name='year' maxLength={4} value={project.year}  onChange={changeHandler}  placeholder="enter passed out year"></input>
          <label className="label">Select type of project</label>
          
            <label className="label-radio">  <input className="input-radio" type="radio" name="type" value="final year project" onChange={changeHandler}  ></input>Final year project</label><br/>
            
            <label className="label-radio"><input className="input-radio" type="radio" name="type" value="Mini project"  onChange={changeHandler} ></input>Mini project</label><br/>
           
            <label className="label-radio"> <input className="input-radio" type="radio" name="type" value="Personal project"  onChange={changeHandler} ></input>Personal project</label>
      
          <label className="label">Choose project document</label>
          <input className="input-file" type="file" name='file' onChange={(e)=>{
            setFile(e.target.value)
          }}></input>
          <section className='section'>
                    <button onClick={submitHandler}>Submit</button>
                    <button onClick={cancelHandler}>Cancel</button>
                </section>
        </form>
      </div>
      </div>
    </div></div>
  )
}

export default AddProjects