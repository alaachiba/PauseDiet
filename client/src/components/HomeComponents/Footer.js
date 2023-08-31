import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    textAlign: 'center',
  }));
function Footer () {
    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="100%">
            <Box sx={{ bgcolor: '#F5F5F5', height: '100px' }} >
                    <Grid container spacing={2}>
                        <Grid item xs={4} container  marginTop="20px" justifyContent="center" alignItems="center" >
                            <InstagramIcon />
                        </Grid>
                        <Grid item xs={4} container marginTop="20px" justifyContent="center" alignItems="center" >
                            <FacebookIcon />
                        </Grid>
                        <Grid item xs={4} container marginTop="20px" justifyContent="center" alignItems="center" >
                            <LinkedInIcon />
                        </Grid>
                    </Grid>
     
            </Box>
        </Container>
      </React.Fragment>
    ); 

}
export default Footer ;