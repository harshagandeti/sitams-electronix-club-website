import React from "react";
import "./Card.scss";
import Profile from "../../../Images/Profile-1.png";
import { Link, Outlet } from "react-router-dom";

import { About, PhD, UG_PG ,Other_Details } from "./Assets/Components";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const FullProfile = () => {
  return (
    <div className="Card-Full">
      <div className="Container">
        <div className="upper-container">
          <div className="img-div">
            <img src={Profile}></img>
          </div>
          <div className="section-right">
            <div className="upper-content">
              <div className="text-div Name">Dr.E.N.Thompson Forum</div>
              <div className="text-div desigination">Professor & HOD</div>
              <div className="text-div dept">ECE,Sitams</div>
            </div>
            <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">About</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">UG & PG</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">PhD & Other</button>
    <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" >Other</button>
  </div>
            </nav>
          </div>
        </div>
        
        <div class="lower-container tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0"><About/></div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0"><UG_PG/></div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0"><PhD/></div>
  <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0"><Other_Details/></div>
</div>
        </div>
      
    </div>
  );
};

export default FullProfile;
