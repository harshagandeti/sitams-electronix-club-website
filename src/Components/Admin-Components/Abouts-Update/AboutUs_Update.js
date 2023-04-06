import React, { useState } from "react";
import "./AboutUs_Update.scss";
import {
  Line,
  Circle,
} from "../../Home-Page-Components/Back-Ground-Objects/BackGroundObj";
import SectionHeading from "../../Section-Heading/SectionHeading";
import Profile from "../../Images/Profile-1.png";
import { InputTextarea } from "primereact/inputtextarea";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import "primereact/resources/primereact.min.css";

//firebase config & libraries
import { db } from "../../Api/Config";
import { collection, addDoc } from "firebase/firestore";

const AboutUs_Update = () => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [roleText, setRoleText] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  // img button or Dailog
  const [visible, setVisible] = useState(false);
  const footerContent = (
    <div>
      <Button
        label="No"
        icon="pi pi-times"
        onClick={() => setVisible(false)}
        className="p-button-text"
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        onClick={() => setVisible(false)}
        autoFocus
      />
    </div>
  );

  const submitHandler = async (e) => {
    e.prventDefault();
    if (profileImage === null) {
      setVisible(true);
      return
    }
    try {
      const docRef = await addDoc(collection(db, "AboutFaculty"), {
        description,
        name,
        roleText,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    console.log(name,roleText,description)

    cancelHandler();
  };
  const cancelHandler = () => {
    setDescription("");
    setName("");
    setName("");
    setRoleText("");
  };
  return (
    <div className="Abt-Main-Div">
      <SectionHeading heading="Update-About us" />

      <div className="Abt-Containers">
        <div className="Container">
          <form onSubmit={submitHandler}>
            <section className="header">
              <section className="profile-img">
                <img
                  src={Profile}
                  onClick={() => {
                    setVisible(true);
                  }}
                ></img>
              </section>
              <Dialog
                id="dailog"
                style={{ width: "25vw" }}
                visible={visible}
                footer={footerContent}
                header={() => <p>Choose Profile Pic</p>}
                onHide={() => setVisible(false)}
              >
                <input
                  id="input-file"
                  type="file"
                  name="profileImage"
                  onChange={(e) => {
                    setProfileImage(e.target.files[0]);
                  }}
                ></input>
              </Dialog>
              <section className="profile-details">
                <section className="Name p-inputgroup">
                  <label className="p-inputgroup-addon">Name</label>
                  <input
                    className="input-Text"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Dr. E.N. Thompson Forum"
                  />
                </section>
                <section className="Name p-inputgroup">
                  <label className="p-inputgroup-addon">Role</label>
                  <input
                    className="input-Text"
                    type="text"
                    value={roleText}
                    onChange={(e) => setRoleText(e.target.value)}
                    placeholder="Principal , Sitams"
                  />
                </section>
              </section>
            </section>
            <section className="content">
              <InputTextarea
                id="inputArea"
                autoResize
                placeholder="Description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={8}
                cols={65}
              />
              <button onSubmit={submitHandler}>Update </button>
            </section>
          </form>
        </div>
      </div>
      <div className="line">
        <Line />
      </div>
      <div className="Circle">
        <Circle />
      </div>
    </div>
  );
};

export default AboutUs_Update;
