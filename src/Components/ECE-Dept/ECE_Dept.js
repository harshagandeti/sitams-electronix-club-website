import React, { useState } from "react";
import "./ECE_Dept.scss"
import LandingVideo from "./AboutUs.27be4369.mp4";
import { Link ,Outlet} from "react-router-dom";

const ECE_Dept = () => {
  const [heading,setHeading]=useState("About-ECE")
  return (
    <div className="ECE-Main-Div">
      <div className="Video-Div">
        <video className="video" autoPlay loop muted>
          <source type="video/mp4" src={LandingVideo} />
        </video>
        <div className="back-ground"></div>
        <div className="dept-name">
          <span>Dept of</span>
          <span>Electronics & </span>
          <span>Communication Engineering</span>
        </div>
      </div>
      <div className="nav-middle">
        <div className="left-nav">
          <div className="left">
          <span>{heading}</span>
          <hr></hr>
           
          </div>
        </div>
        <div className="right-nav">
        <div className="right"> 
          <Link to="about-ece-dept" className="Link" onClick={()=>{setHeading("About-ECE")}}>About-ECE</Link>
            <Link to="labs" className="Link" onClick={()=>{setHeading("Labs")}}>Labs</Link>
          <Link to="faculty-profiles" className="Link" onClick={()=>{setHeading("Faculty Profiles")}}>Faculty Profiles</Link>
          </div>
        </div>
        
      </div>
      <div className="outlet-div">
        <Outlet/>
      </div>
    </div>
  );
};

export default ECE_Dept;
