import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./Components/Context/AuthContext";
import { AdminCheckContextProvider } from "./Components/Context/AdminCheckContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <AdminCheckContextProvider>
        <App />
      </AdminCheckContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

