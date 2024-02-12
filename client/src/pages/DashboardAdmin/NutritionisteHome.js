import React from "react";
import { useSelector } from "react-redux";

function NutritionnisteHome() {
  const user = useSelector((state) => state.user);

  // Define inline styles
  const containerStyle = {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    maxWidth: "400px",
    margin: "0 auto",
  };

  const headingStyle = {
    fontSize: "24px",
    color: "#333",
    marginBottom: "10px",
  };

  const descriptionStyle = {
    fontSize: "16px",
    color: "#666",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome, {user.name}</h1>
      <p style={descriptionStyle}>
        This is your personalized dashboard as a nutritionist.
      </p>
    </div>
  );
}

export default NutritionnisteHome;