import React, { useState } from "react";
import "./AdminAuth.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Password } from 'primereact/password';
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

const AdminAuth = (props) => {
  const usenavigate = useNavigate();
  const [username, setUsername] = useState("Admin@sitams");
  const [password, setPassword] = useState("Admin@sitams");

  // for table (project-page) delete funnction

  const [isAuth,setIsAuth]=useState(false)

  const data = {
    username: "Admin@sitams",
    password: "Admin@sitams",
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);


    Validation();
    LoginProcess();
    props.sendProps(isAuth)

    setUsername("");
    setPassword("");
  };

  const LoginProcess = () => {
    if (username.length !== 0 && password.length !== 0) {
      //user name verification
      if (data.username === username && data.password === password) {
        toast.success("Login Successfully",{
          position:toast.POSITION.TOP_CENTER,
          theme:"colored"
        })
        setIsAuth(true)

        sessionStorage.setItem("username",username)
        sessionStorage.setItem("password",password)
        usenavigate("/admin-dash-board");

      } else {
        setIsAuth(false)
        toast.error("Please enter valid username or Password", {
          position: toast.POSITION.TOP_CENTER,
          theme:"colored"
         
        });
      }

  
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
