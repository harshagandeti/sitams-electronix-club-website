import React, { useState } from "react";
import "./ECE_Dept.scss";
import LandingVideo from "./AboutUs.27be4369.mp4";
import AboutDept from "./About-Dept/AboutDept";
import Labs from "./Labs/Labs";
import FacultyProfile from "./Faculty-Profiles/FacultyProfile";

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
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  About-ECE
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Labs
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Faculty-Profiles
                </button>
              </li>
            </ul>
          </div>
        </div>
      
      <div className="outlet-div">
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabindex="0"
          >
            <AboutDept />
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabindex="0"
          >
            <Labs />
          </div>
          <div
            class="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
            tabindex="0"
          >
            <FacultyProfile />
          </div>
          <div
            class="tab-pane fade"
            id="pills-disabled"
            role="tabpanel"
            aria-labelledby="pills-disabled-tab"
            tabindex="0"
          >
            ...
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECE_Dept;
