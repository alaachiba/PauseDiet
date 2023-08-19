import {
  GET_AUTH_USER,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  GET_PATIENTS,
} from "./actionTypes";
import axios from "axios";

export const loginUser = (formData, navigate) => async (dispatch) => {
  try {
    
    const res = await axios.post("/userAuth/login", formData);
    dispatch({
      type: LOGIN_USER,
      payload: res.data,
    });
    
    console.log(res.data.user.role,"hné")
    switch (res.data.user.role) {
      case "patient":
        navigate("/patient-dash");
        break;
      case "nutritionniste":
        navigate("/dashboard");
        break;
      case "secretaire":
        navigate("/secretaire-dash");
        break;
      default:
        navigate("/");
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = (newUser, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/userAuth/register", newUser);
    dispatch({
      type: REGISTER_USER,
      payload: res.data,
    });

    switch (newUser.role) {
      case "patient":
        navigate("/patient-dash");
        break;
      case "nutritionniste":
        navigate("/dashboard");
        break;
      case "secretaire":
        navigate("/secretaire-dash");
        break;
      default:
        navigate("/");
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAuthUser = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/userAuth/user", config);
    dispatch({
      type: GET_AUTH_USER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
};


//fetch patients
export const getpatients=()=> async (dispatch)=>{
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/userAuth/getpatients", config);
    dispatch({
      type: GET_PATIENTS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

//delete user 
export const deleteuser=(id)=> async (dispatch)=>{
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.delete(`/userAuth/${id}`, config);
    dispatch(getpatients());
  } catch (error) {
    console.log(error);
  }
  }
  
//edit user 
  export const editPatient=(id,editedUser)=> async (dispatch)=>{
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    try {
      const res = await axios.put(`/userAuth/edit/${id}`, editedUser, config);
      dispatch(getpatients());
    } catch (error) {
      console.log(error);
    }
}