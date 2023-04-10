import React, { useState } from "react";
import "./SocialMedia.scss";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../Images/Club-Logo/Logo-Color.png"

export default function SocialMedia() {
  const [click, setClick] = useState(false);
  const [open, close] = useState(false);
  const toggle = () => {
    setClick(click=> !click)
  };
  let toggleClass= click ? "active" :null
  return (
    <div className="Social-Main">
      {" "}
      <div className="profile">
        <div className="content">
          <div className="text" onClick={toggle}>
            <h5 className="h5">Follow</h5>
            <h6 className="h6">sitams</h6>
          </div>
          <div className={`btn ${toggleClass}`} onClick={toggle}>

            <span></span>
          </div>
        </div>
        <div className={click ? "box open" : "box"}>
          <a>
            <FaFacebookF />
          </a>
          <a>
            <FaInstagram />
          </a>
          <a>
            <FaLinkedinIn />
          </a>
        </div>
        <div className="photo"  >
          <img  src={logo} />
        </div>
      </div>
      
    </div>
  );
}
