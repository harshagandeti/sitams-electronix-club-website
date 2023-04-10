const AuthReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN": {
        return {
            authAdmin:action.payload
        };
      }
      case "LOGOUT": {
        return {
            authAdmin: null,
        };
      }
      default:
        return state;
    }
  };
  
  export default AuthReducer;