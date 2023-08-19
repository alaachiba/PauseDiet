import axios from "axios";
import { GET_RDVS } from "./actionTypes";



    export const addRdv=(newRdv, navigate)=>(dispatch)=>{
        axios.post("/rdv/addRdv",newRdv)
        .then((res)=>dispatch(getRdvs()))
        .catch((err)=>console.log(err));
        navigate("HomeDashboard")
    ;}
  

      export const getRdvs=()=> async (dispatch)=>{
        try {
          const res = await axios.get("/rdv/getrdvs");
          dispatch({
            type: GET_RDVS,
            payload: res.data,
          });
        } catch (error) {
          console.log(error);
        }
      };