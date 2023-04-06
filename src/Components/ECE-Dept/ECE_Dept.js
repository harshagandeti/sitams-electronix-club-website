import React, { useState } from "react";
import "./ECE_Dept.scss";
import LandingVideo from "./AboutUs.27be4369.mp4";
import AboutDept from "./About-Dept/AboutDept";
import Labs from "./Labs/Labs";
import FacultyProfile from "./Faculty-Profiles/FacultyProfile";
import FooterECE from "./FooterECE/FooterECE";

const ECE_Dept = () => {
  const [heading, setHeading] = useState("About-ECE");
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
            <span>{heading}</span>

          
        </div>
        <div className="right-nav">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                  onClick={()=>setHeading("About-ECE")}
                >
                  About-ECE
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                  onClick={()=>setHeading("Labs")}
                >
                  Labs
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                  onClick={()=>setHeading("Faculty-Profiles")}
                >
                  Faculty-Profiles
                </button>
              </li>
            </ul>
          </div>
        </div>
      
      <div className="outlet-div">
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
           
          >
            <AboutDept />
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            
          >
            <Labs />
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
            
          >
            <FacultyProfile />
          </div>
          <div
            className="tab-pane fade"
            id="pills-disabled"
            role="tabpanel"
            aria-labelledby="pills-disabled-tab"
           
          >
            ...
          </div>
        </div>
      </div>
      <FooterECE/>
    </div>
  );
};

export default ECE_Dept;
