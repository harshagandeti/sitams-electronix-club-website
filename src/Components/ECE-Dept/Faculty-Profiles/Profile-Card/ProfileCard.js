import React, { useState } from "react";
import "./ProfileCard.scss";
import Profile from "../../../Images/Profile-1.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



const Card = (img, name) => {
const [isAuth,setIsAuth]=useState(false)

  return (
    <div className="Card-Main-Div">
      <div className="Upper-Container">
        <div className="img-div">
          <img src={Profile}></img>
        </div>
      </div>
      <div className="lower-container">
        <div className="lower-content">
          <div className="Name-Div">
            <h4 className="Name">Dr.E.N.Thompson Forum</h4>
          </div>

          <h5 className="Desigination">Desigination</h5>
          <h5 className="clg">college</h5>
        </div>
      </div>
      <div className="Btn-div">
      <button type="button" className={isAuth ?"btn btn-warning":"disable"}>Delete</button>
      <Link to="/faculty-full-profile">
     
      <button className="btn btn-primary">View Profile</button>
      
      </Link>
      </div>
    </div>
  );
};

export default Card;
