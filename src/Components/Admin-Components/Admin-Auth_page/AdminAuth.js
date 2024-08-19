import React, { useContext, useState } from "react";
import "./AdminAuth.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Password } from 'primereact/password';
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../../Context/AuthContext";
import AdminAbout from "../Admin-About/AdminAbout";
import { AdminCheckContext } from "../../Context/AdminCheckContext";
const AdminAuth = (props) => {
  const usenavigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {dispatch}=useContext(AuthContext)
  const {dispatcher}=useContext(AdminCheckContext)

  // for table (project-page) delete funnction
  const [isAuth,setIsAuth]=useState(false)
  const submitHandler = (e) => {
    e.preventDefault();
    Validation();
    LoginProcess();
    setUsername("");
    setPassword("");
  };

  const LoginProcess = () => {
    if (username.length !== 0 && password.length !== 0) {
      const authCheck= signInWithEmailAndPassword(auth,username,password) .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        dispatch({type:"LOGIN",payload:user})
        dispatcher({type:"LOGIN",payload:true})
        toast.success("Login Successfully",{
          position:toast.POSITION.TOP_CENTER,
          theme:"colored"
        })
        setIsAuth(true)
        usenavigate("/admin-dash-board");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsAuth(false)
        toast.error("Please enter valid username or Password", {
          position: toast.POSITION.TOP_CENTER,
          theme:"colored"
        });
      });

    }
  };
  const Validation = () => {
    if (username === "" || username === null) {
      toast.warning("Please enter username ", {
        position: toast.POSITION.TOP_CENTER,
        theme:"colored"
      });
    }
    if (password === "" || password === null) {
      toast.warning("Please enter password ", {
        position: toast.POSITION.TOP_CENTER,
        theme:"colored"
      });
    }
  };
  return (
    <div className="mainDiv">
      <div className="container">
        <div className="heading">
          <span>Admin Login</span>
        </div>
        <div className="Form">
          <form onSubmit={submitHandler}>
            <label className="Label">Admin Username</label>
            <input
              className="input"
              type="email"
              placeholder="Admin Username"
              name="username"
              value={username}
              autoComplete="off"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>
            <label className="Label">Password</label>
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAuth;
