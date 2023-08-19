import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { Spinner } from "reactstrap";

function Nutritionnistedash() {
  const user = useSelector((state) => state.user);
  if (!user) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>no user</h1>
        <Spinner
          style={{ width: "3rem", height: "3rem", color: "secondary" }}
          type="grow"
        />
      </div>
    );
  }
  return (
    <div>
       <div>Nutritionniste-dash</div>
         <h1 className="mb-3 ml-4">
        {user.name}
      </h1>
      <h5 className="mb-3 ml-4">{user.email}</h5>
      <img src={user.image} alt="test" style={{width:"300px"}} />
      <Link to="/patient-list">
        Patient List
      </Link><br></br>
      <Link to="/add-video">
        Add video
      </Link><br></br>
      <Link to="/HomeDashboard">
        Liste des rendez-vous
      </Link>
    </div>
  )
}

export default Nutritionnistedash