import React from 'react'
import "./AddProjects.scss"
import projectImage from "../Admin-DashBoard-Page/innovation.png"

const AddProjects = () => {
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
          <input className="input" type="text" placeholder="enter project title"></input>
          <label className="label">Enter passed out year</label>
          <input className="input" type="text" placeholder="enter passed out year"></input>
          <label className="label">Select type of project</label>
          
            <label className="label-radio">  <input className="input-radio" type="radio" name="typeOfProject" value="finalyearproject"></input>Final year project</label><br/>
            
            <label className="label-radio"><input className="input-radio" type="radio" name="typeOfProject" value="miniproject"></input>Mini project</label><br/>
           
            <label className="label-radio"> <input className="input-radio" type="radio" name="typeOfProject" value="personalproject"></input>Personal project</label>
      
          <label className="label">Choose project document</label>
          <input className="input-file" type="file"></input>
          <button>Add Project</button>
        </form>
      </div>
      </div>
    </div></div>
  )
}

export default AddProjects