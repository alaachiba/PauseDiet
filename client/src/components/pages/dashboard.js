import React ,{useEffect}from "react";
import { useSelector } from "react-redux";
import { Spinner } from "reactstrap";
import {useNavigate} from "react-router-dom"

const Dashboard = () => {
  useEffect(()=>{
    user.role === "secretaire" ?
    navigate("/secretaire-dash"):
    user.role === "patient" ? navigate("/patient-dash") :
    navigate("/Nutritionniste-dash")
  },[])
  const user = useSelector((state) => state.user);
  console.log(user,"ttt")
  const navigate=useNavigate()

  if (!user) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Spinner
          style={{ width: "3rem", height: "3rem", color: "secondary" }}
          type="grow"
        />
      </div>
    );
  }

  return (
    <div>
      {user.role === "secretaire" ?
      navigate("/secretaire-dash"):
      user.role === "patient" ? navigate("/patient-dash") :(
        <>
         <div>Nutritionniste-dash</div>
         <h1 className="mb-3 ml-4">
        {user.name}
      </h1>
      <h5 className="mb-3 ml-4">{user.email}</h5>
        </>
      )
   
  }
     
    </div>
  );
};

export default Dashboard;
