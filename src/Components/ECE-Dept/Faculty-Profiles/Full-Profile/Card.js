import React, { useEffect, useState } from "react";
import "./Card.scss";
import Profile from "../../../Images/Profile-1.png";
import { Link, Outlet, useLocation } from "react-router-dom";

import { About, PhD_, UG_PG, Other_Details } from "./Assets/Components";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import { db } from "../../../../Config";
import { collection, getDoc, doc,onSnapshot } from "firebase/firestore";

const FullProfile = () => {
  // const [id, setId] = useState("");
  const [profile, setProfile] = useState({});
  const location = useLocation();
  const id = location.state;
  console.log("id:", id);

  // useEffect(() => {
  //   const profileSnapshots = onSnapshot(
  //     collection(db, "NewFaculty"),
  //     (Snapshots) => {
  //       const filterData = Snapshots.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       }));
  //       setProfile(filterData);
  //       console.log("filterdata:", filterData);
  //     },
  //     (error) => console.log(error)
  //   );
  //   return () => profileSnapshots();
  // }, []);

  useEffect(() => {
    const getSingleProfile = async () => {
      const docRef = doc(db, "NewFaculty", id);
      const docSnap = await getDoc(docRef);
     setProfile({...docSnap.data()})
     console.log(profile)
    }
  getSingleProfile();
  },);

  const { about } = profile;

  return (
    <div className="Card-Full">
      {profile ? (
        <div className="Container">
          <div className="upper-container">
            <div className="img-div">
              <img src={Profile}></img>
            </div>
            <div className="section-right">
              <div className="upper-content">
                <div className="text-div Name">{about.name}</div>
                <div className="text-div desigination">Professor & HOD</div>
                <div className="text-div dept">ECE,Sitams</div>
              </div>
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    About
                  </button>
                  <button
                    className="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    UG & PG
                  </button>
                  <button
                    className="nav-link"
                    id="nav-contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-contact"
                    type="button"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    PhD & Other
                  </button>
                  <button
                    className="nav-link"
                    id="nav-disabled-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-disabled"
                    type="button"
                    role="tab"
                    aria-controls="nav-disabled"
                    aria-selected="false"
                  >
                    Other
                  </button>
                </div>
              </nav>
            </div>
          </div>

          <div className="lower-container tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <About />
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <UG_PG />
            </div>
            <div
              className="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <PhD_ />
            </div>
            <div
              className="tab-pane fade"
              id="nav-disabled"
              role="tabpanel"
              aria-labelledby="nav-disabled-tab"
            >
              <Other_Details />
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default FullProfile;
