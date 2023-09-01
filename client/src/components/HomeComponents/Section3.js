import MapContainer from "../../components/pages/MapContainer";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system'; // Use styled from @mui/system

const MapContainerStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '400px',
  borderRadius: '10px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
}));

const MapTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

function Section3() {
  const location = {
    latitude: 36.80961225036649,
    longitude: 10.130312724378129,
  };

  return (
    <MapContainerStyled>
      <MapTitle variant="h6">
        Location Map
      </MapTitle>
      <MapContainer location={location} />
    </MapContainerStyled>
  );
}

export default Section3;
