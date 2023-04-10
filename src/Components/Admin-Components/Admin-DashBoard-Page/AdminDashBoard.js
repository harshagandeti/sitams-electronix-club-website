import React, { useState ,useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminDashBoard.scss";
import AdminImage from "./adminImage.png";
import EventImage from "./conference.png";
import ProjectImage from "./innovation.png";
import GalleryImage from "./picture.png";
import AboutUsImage from "./profile_1.png";
import random from "./icons8-photo-gallery-94.png";
import { toast } from "react-toastify";
import { Ripple } from 'primereact/ripple';
import { AuthContext } from "../../Context/AuthContext";
import { AdminCheckContext } from "../../Context/AdminCheckContext";

const AdminDashBoard = (props) => {

    // for table (project-page) delete funnction
const [data,setData]=useState(false)

  const {dispatch}=useContext(AuthContext)
  const {dispatcher}=useContext(AdminCheckContext)
  const Navigate = useNavigate();

  const logoutHandler = () => {
    sessionStorage.clear();
    dispatch({type:"LOGOUT",playload:null})
    dispatcher({type:"LOGOUT",payload:true})


    toast.success("Logout successfully",{
      position:toast.POSITION.TOP_CENTER,
      theme:"colored"
    })
    setData(true)
    props.sendProps(data)
    Navigate("/")
    
  };
  return (
    <div className="ADBMainDiv">
      <div className="headerContainer">
        <div className="headerLeft">
          <img className="adminLogo" src={AdminImage}></img>
        </div>
        <div className="headerRight">
          <div className="H1">Hello !</div>
          <div className="H2">Welcome to Admin Dash Board</div>
        </div>
      </div>
      <button onClick={logoutHandler}>Logout</button>
      <div className="MainDiv">
        <div className="mainLeft">harsha</div>
        <div className="mainRight">
          <Link className="link" to="/admin-add-gallery-img">
            <div className="Buttons">
              <img className="img" src={GalleryImage}></img>
              <span>Add Images To Gallery</span>
            </div>
          </Link>
          <Link className="link" to="/admin-add-project">
            <div className="Buttons">
              <img className="img" src={ProjectImage}></img>
              <span>Add New Projects</span>
            </div>
          </Link>
          <Link className="link" to="/admin-about-us">
          <div className="Buttons">
            <img className="img" src={AboutUsImage}></img>
            <span>Update About Us</span>
            <Ripple/>

          </div>
          </Link>
          <Link className="link" to="/admin-add-faculty">
          <div className="Buttons">
            <img className="img" src={EventImage}></img>
            <span>Add Faculty Profile</span>
          </div>
          </Link>
          <Link className="link" to="/admin-add-events">
          <div className="Buttons">
            <img className="img" src={EventImage}></img>
            <span>Add Events</span>
          </div>
          </Link>
          <div className="Buttons">
            <img className="img" src={EventImage}></img>
            <span>Add Events</span>
            <Ripple/>
          </div>
          {/* <div className='Buttons'></div> */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
