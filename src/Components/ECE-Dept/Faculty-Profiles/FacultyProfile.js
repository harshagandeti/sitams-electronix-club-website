import React, { useState, useEffect, useContext } from "react";
import "./FacultyProfile.scss";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth, db } from "../../../Config";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { AdminCheckContext } from "../../Context/AdminCheckContext";

const FacultyProfile = () => {
  const [getData, setGetData] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const Navigate = useNavigate();
  const { AdminCheck } = useContext(AdminCheckContext);
  console.log("authAdmin", AdminCheck);

  useEffect(() => {
    const profileSnapshots = onSnapshot(
      collection(db, "NewFaculty"),
      (Snapshots) => {
        const filterData = Snapshots.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setGetData(filterData);
        console.log("filterdata:", filterData);
        console.log("Profiles", getData);
      },
      (error) => console.log(error)
    );
    return () => profileSnapshots();
  }, []);

  const DeleteHandler = async (ID) => {
    const { id } = ID;
    console.log(" id : ", id);
    console.log(ID);
    const eventDeleteDoc = doc(db, "NewFaculty", id);
    await deleteDoc(eventDeleteDoc);
    toast.warning("Profile deleted successfully", {
      position: toast.POSITION.TOP_CENTER,
      theme: "colored",
    });
  };
  return (
    <div className="Main-Div">
      {getData &&
        getData.map((item, index) => {
          const { id } = item;
          return (
            <div className="Card-Main-Div" key={item.id}>
              <div className="Upper-Container">
                <div className="img-div">
                  <img src={item.about.imgUrl}></img>
                </div>
              </div>
              <div className="lower-container">
                <div className="lower-content">
                  <div className="Name-Div">
                    <h4 className="Name">{item.about.name}</h4>
                  </div>

                  <h5 className="Desigination">{item.about.designation}</h5>
                  <h5 className="clg">Sitams</h5>
                </div>
              </div>
              <div className="Btn-div">
                <button
                  onClick={() =>
                    Navigate("/faculty-full-profile", { state: item.id })
                  }
                  className="btn btn-primary"
                >
                  View Profile
                </button>
                {AdminCheck && (
                  <button
                    className={AdminCheck ? "btn btn-info" : "disable"}
                    onClick={() =>
                      Navigate("/admin-update-faculty", { state: item.id })
                    }
                  >
                    <FaEdit />
                  </button>
                )}
                {AdminCheck && (
                  <button
                    className={AdminCheck ? "btn btn-warning" : "disable"}
                    onClick={() => {
                      DeleteHandler({ id });
                    }}
                  >
                    <RiDeleteBin6Line />
                  </button>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default FacultyProfile;
