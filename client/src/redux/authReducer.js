import {
  REGISTER_USER,
  LOGIN_USER,
  GET_AUTH_USER,
  LOGOUT_USER,
  GET_PATIENTS,
  GET_RDVS,
} from "./actionTypes";

const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  msg: null,
  rdvss: [], 
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        user: payload.user,
        msg: payload.msg,
      };
    case LOGIN_USER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        user: payload.user,
        msg: payload.msg,
      };
    case GET_AUTH_USER:
      return {
        ...state,
        user: payload.user,
        msg: payload.msg,
      };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
      };
      case GET_PATIENTS:
        return{
            ...state,
            patients:payload.users,
            msg: payload.msg,
        };
        case GET_RDVS:
          return {
            ...state,
            rdvss: payload.rdvs,
            msg: payload.msg,
          };
    default:
      return state;
  }
};
export default authReducer;
