import React, { useState, useEffect } from "react";
import "./AddProjects.scss";
import projectImage from "../Admin-DashBoard-Page/innovation.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// firebase config &libraries
import { db, Storage } from "../../Api/Config";
import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
const AddProjects = () => {
  const [project, setProject] = useState({
    title: "",
    year: "",
    type: "",
  });
  const [file, setFile] = useState(null);
  const [Progress, setProgress] = useState(null);

  const changeHandler = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const uploadFile = () => {

      const name = new Date().getTime() + file.name;
      const storageRef = ref(Storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("upload file is pause");
              break;

            case "running":
              console.log("upload file is runing");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setProject((prev) => ({ ...prev, fileUrl: downloadUrl }));
          console.log("Project", downloadUrl);
        })
      );
    };

  }, [file]);
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submit:", project,file);
    try {
      const docRef = await addDoc(collection(db, "NewProject"), {
        project,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    cancelHandler();
  };
  const cancelHandler = () => {
    setProject({
      title: "",
      year: "",
      type: "",
    });
    setFile("");
  };

  return (
    <div className="AP-Main-Div">
      <div className="container-box">
        <div className="imgDiv">
          <img className="img" src={projectImage}></img>
        </div>

        <div className="container">
          <span className="H1">Add New Projects</span>
          <div className="form">
            <form>
              <label className="label">Enter project title</label>
              <input
                className="input"
                type="text"
                name="title"
                value={project.title}
                onChange={changeHandler}
                placeholder="enter project title"
              ></input>
              <label className="label">Enter passed out year</label>
              <input
                className="input"
                type="text"
                name="year"
                maxLength={4}
                value={project.year}
                onChange={changeHandler}
                placeholder="enter passed out year"
              ></input>
              <label className="label">Select type of project</label>

              <label className="label-radio">
                {" "}
                <input
                  className="input-radio"
                  type="radio"
                  name="type"
                  value="final year project"
                  onChange={changeHandler}
                ></input>
                Final year project
              </label>
              <br />

              <label className="label-radio">
                <input
                  className="input-radio"
                  type="radio"
                  name="type"
                  value="Mini project"
                  onChange={changeHandler}
                ></input>
                Mini project
              </label>
              <br />

              <label className="label-radio">
                {" "}
                <input
                  className="input-radio"
                  type="radio"
                  name="type"
                  value="Personal project"
                  onChange={changeHandler}
                ></input>
                Personal project
              </label>

              <label className="label">Choose project document</label>
              <input
                className="input-file"
                type="file"
                name="file"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              ></input>
              <section className="section">
                <button onClick={submitHandler}>Submit</button>
                <button onClick={cancelHandler}>Cancel</button>
              </section>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProjects;
