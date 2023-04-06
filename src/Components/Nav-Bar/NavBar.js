import React, { useState } from "react";
import "./NavBar.scss";
import { Link, useNavigate} from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { FaRegTimesCircle } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { toast } from "react-toastify";

const NavBar = () => {
  const [clicked, setClicked] = useState(true);
  const Navigate = useNavigate();
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
      toast.error("This page only can acces to Admin", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
      });
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
        <Link className="link" onClick={()=>{setClicked(true)}} to="/">
          Home
        </Link>
        <Link  className="link" onClick={()=>{setClicked(true)}} to="/about-us">
          About us
        </Link>
        <Link className="link" onClick={()=>{setClicked(true)}} to="/gallery">
          Gallery
        </Link>
        <Link className="link" onClick={()=>{setClicked(true)}} to="/projects">
          Projects
        </Link>
        <Link className="link" onClick={()=>{setClicked(true)}} to="/domain-page">
          Domains
        </Link>
        <Link className="link" onClick={()=>{setClicked(true)}} to="/events">
          Events
        </Link>
        <Link className="link" onClick={()=>{setClicked(true)}} to="/ece-dept">
          ECE Dept
        </Link>
      </div>
      <div className="navBarRight">
      <Link className="button" onClick={LoginHandler} to="/admin-auth">
        <RiAdminLine />
        <span>Admin</span>
      </Link>
      </div>
    </nav>
  );
};

export default NavBar;
