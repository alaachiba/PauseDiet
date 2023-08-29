import React from "react";
import MapContainer from "../../components/pages/MapContainer"

function NutritionnisteHome() {
    const location = {
        latitude: 36.80961225036649, // Replace with the latitude of your desired location
        longitude: 10.130312724378129, // Replace with the longitude of your desired location
      };
      return (
        <div>
          <h1>My Map</h1>
          <MapContainer location={location} />
        </div>
      );
}
export default NutritionnisteHome;