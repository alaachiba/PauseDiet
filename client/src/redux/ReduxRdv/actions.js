import axios from "axios";
import { ADD_RDV } from "./actionTypes";



    export const addRdv = (newRdv) => async (dispatch) => {
      try {
        const res = await axios.post("/rdv/addRdv", newRdv);
        dispatch({
          type: ADD_RDV,
          payload: res.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
