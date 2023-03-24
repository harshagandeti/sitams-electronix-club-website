import React, { useState } from "react";
import "./NavBar.scss";
import { Link, useNavigate} from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { FaRegTimesCircle } from "react-icons/fa";
import { toast } from "react-toastify";

const NavBar = () => {
  const Navigate=useNavigate()
  const [clicked, setClicked] = useState(true);
  const openClick = () => {
    setClicked({ clicked: !clicked });
  };
  const closeClick = () => {
    setClicked(false);
  };

  const LoginHandler = () => {
    const username = sessionStorage.getItem("username");
    const password = sessionStorage.getItem("password");
    const data = {
      username: "Admin@sitams",
      password: "Admin@sitams",
    };
   
    if (data.username === username && data.password === password) {
      Navigate("/admin-dash-board");
    } else {
      Navigate("/admin-auth");
      toast.error("This page only can acces to Admin",{
        position:toast.POSITION.TOP_CENTER ,
        theme:"colored"
      })
    }
  };
  return (
    <nav className="navBarMainDiv">
      <div id="Mobile" className="Mobile">
        {clicked ? (
          <TfiMenu
            className="menuIcon"
            onClick={closeClick}
            color="white"
            size={30}
          />
        ) : (
          <FaRegTimesCircle
            onClick={openClick}
            size={30}
            className="closeIcon"
            color="red"
          />
        )}
      </div>

      <div id="navbar" className={clicked ? "#navbar close" : "navbar"}>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about-us">
          About us
        </Link>
        <Link className="link" to="/gallery">
          Gallery
        </Link>
        <Link className="link" to="/projects">
          Projects
        </Link>
        <Link className="link" to="/domain-page">
          Domains
        </Link>
        <Link className="link" to="/events">
          Events
        </Link>
        <Link className="link" to="/ece-dept">
          ECE Dept
        </Link>
      </div>
      <div className="navBarRight">
        <button onClick={LoginHandler}>Admin</button>
      </div>
    </nav>
  );
};

export default NavBar;
