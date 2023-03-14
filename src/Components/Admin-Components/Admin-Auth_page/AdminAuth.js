import React, { useState } from "react";
import "./AdminAuth.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../index";

const AdminAuth = (props) => {
  const usenavigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // for table (project-page) delete funnction

  const [isAuth,setIsAuth]=useState(true)

  const data = {
    username: "Admin@sitams",
    password: "Admin@sitams",
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    // if (Validation()) {
    //     ///implentation
    //     // console.log('proceed');
    //     fetch("http://localhost:4040/data/" + username).then((res) => {
    //         return res.json();
    //     }).then((resp) => {
    //         //console.log(resp)
    //         if (Object.keys(resp).length === 0) {
    //             toast.error('Please Enter valid username');
    //         } else {
    //             if (resp.password === password) {
    //                 toast.success('Success');
    //                 sessionStorage.setItem('username',username);
    //                 sessionStorage.setItem('userrole',resp.role);
    //                 usenavigate('/')
    //             }else{
    //                 toast.error('Please Enter valid credentials');
    //             }
    //         }
    //     }).catch((err) => {
    //         toast.error('Login Failed due to :' + err.message);
    //     });
    // }

    Validation();
    LoginProcess();

    setUsername("");
    setPassword("");
  };

  const LoginProcess = () => {
    if (username.length != 0 && password.length != 0) {
      //user name verification
      if (data.username === username && data.password === password) {
        toast.success("Login Successfully",{
          position:toast.POSITION.TOP_CENTER,
          theme:"colored"
        })
        setIsAuth(false)

        sessionStorage.setItem("username",username)
        sessionStorage.setItem("password",password)
        usenavigate("/admin-dash-board");

      } else {
        setIsAuth(true)
        toast.error("Please enter valid username or Password", {
          position: toast.POSITION.TOP_CENTER,
          theme:"colored"
         
        });
      }

      //password verification
      // if (data.password === password) {
      //   // useNavigate("/")
      // } else {
      //   toast.error("Please enter valid password", {
      //     position: toast.POSITION.TOP_CENTER,
      //   });
        
      // }




      // toast.success("Login Successfully",{
      //   position:toast.POSITION.TOP_CENTER
      // })
      // usenavigate("/");
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
            ></input>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAuth;
