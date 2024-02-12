import {
  REGISTER_USER,
  LOGIN_USER,
  GET_AUTH_USER,
  LOGOUT_USER,
  GET_PATIENTS,
  GET_RDVS,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_USER_SUCCESS,
  SET_USER_IMAGE,
} from "./actionTypes";

const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  msg: null,
  rdvss: [],
  error: null,
  image: null,
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
      return {
        ...state,
        patients: payload.users,
        msg: payload.msg,
      };
    case GET_RDVS:
      return {
        ...state,
        rdvss: payload.rdvs,
        msg: payload.msg,
      };
    case FETCH_USER_SUCCESS:
      return { ...state, user: payload, error: null };
    case FETCH_USER_FAILURE:
      return { ...state, user: null, error: payload };
    case UPDATE_USER_SUCCESS:
      return { ...state, user: payload, error: null };
    case UPDATE_USER_FAILURE:
      return { ...state, error: payload };
    case SET_USER_IMAGE:
      // Update the state with the received image URL
      return {
        ...state,
        image: payload,
      };
    default:
      return state;
  }
};
export default authReducer;
