import React from "react";
import MapContainer from "./MapContainer";
import { Link } from 'react-router-dom';

const Home = () => {
  const location = {
    latitude: 36.80961225036649, // Replace with the latitude of your desired location
    longitude: 10.130312724378129, // Replace with the longitude of your desired location
  };
  return (
    <div>
            <Link to="/video-list">
        video list
      </Link>
      <h1>My Map</h1>
      <MapContainer location={location} />
    </div>
  );
};

export default Home;
