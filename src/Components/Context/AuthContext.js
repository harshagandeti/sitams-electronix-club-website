import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  authAdmin: sessionStorage.getItem("user")|| null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

useEffect(()=>{
    sessionStorage.setItem("user",state.authAdmin)
},[state.authAdmin])

  return (
    <AuthContext.Provider value={{ authAdmin: state.authAdmin, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
