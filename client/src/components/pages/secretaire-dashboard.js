import React from "react";
import { useSelector } from "react-redux";
import { Spinner } from "reactstrap";

const Secretaire = () => {
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
        <h1>Secretaire</h1>
      <h1 className="mb-3 ml-4">
        {user.name}
      </h1>
      <h5 className="mb-3 ml-4">{user.email}</h5>
    </div>
  );
};

export default Secretaire;
