import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getAuthUser } from "../../redux/actions";

const PrivateRoute =  ({ children }) => {
  useEffect(()=>{getAuthUser()},[])
  const user =  useSelector((state) => state.user);
  console.log(user && user, "roooo");
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
