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
import Avatar from "react-avatar-editor";

import "primereact/resources/primereact.min.css";

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

  const submitHandler = (e) => {
    e.prventDefault();

    console.log(profileImage.files[0]);
  };
  // avatar

  return (
    <div className="Abt-Main-Div">
      <SectionHeading heading="Update-About us" />

      <div className="Abt-Containers">
        <div className="Container">
          <div className="header">
            <div className="profile-img">
              <img
                src={Profile}
                onClick={() => {
                  setVisible(true);
                }}
              ></img>
            </div>
            <Dialog
              id="dailog"
              style={{ width: "25vw" }}
              visible={visible}
              footer={footerContent}
              header={() => <p>Choose Profile Pic</p>}
              onHide={() => setVisible(false)}
            >
              <form onSubmit={submitHandler}>
                <input
                  id="input-file"
                  type="file"
                  name="profileImage"
                  onChange={(e) => {
                    setProfileImage(e.target.files[0]);
                  }}
                ></input>
              </form>
            </Dialog>
            <div className="profile-details">
              <div className="Name p-inputgroup">
                <span className="p-inputgroup-addon">Name</span>
                <input
                  className="input-Text"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Dr. E.N. Thompson Forum"
                />
              </div>
              <div className="Name p-inputgroup">
                <span className="p-inputgroup-addon">Role</span>
                <input
                  className="input-Text"
                  type="text"
                  value={roleText}
                  onChange={(e) => setRoleText(e.target.value)}
                  placeholder="Principal , Sitams"
                />
              </div>
            </div>
          </div>
          <div className="content">
            <InputTextarea
              id="inputArea"
              autoResize
              placeholder="Description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={8}
              cols={65}
            />
            <button>Update </button>
          </div>
        </div>
        <div className="Container">
          <div className="header">
            <div className="profile-img">
              <img src={Profile}></img>
            </div>
            <div className="profile-details">
              <span className="profile-name">Dr. E.N. Thompson Forum</span>
              <span className="profile-role"> Principal , Sitams</span>
              <span className="profile-"></span>
            </div>
          </div>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
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
