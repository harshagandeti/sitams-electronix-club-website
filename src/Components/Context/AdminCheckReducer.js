const AdminCheckReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN": {
        return {
            AdminCheck:action.payload
        };
      }
      case "LOGOUT": {
        return {
            AdminCheck: false,
        };
      }
      default:
        return state;
    }
  };
  
  export default AdminCheckReducer;