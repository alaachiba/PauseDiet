
import MapContainer from "../../components/pages/MapContainer"
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Section3 () {
    const location = {
        latitude: 36.80961225036649, // Replace with the latitude of your desired location
        longitude: 10.130312724378129, // Replace with the longitude of your desired location
      };
      return (
        
            
              <MapContainer location={location} />
            
         
       
       
      );
}
export default Section3;