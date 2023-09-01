import * as React from 'react';
import Portrait from '../../zyro-image.png';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
}));

function Section2() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ margin: "2% 0" }}>
        <Box sx={{ height: 'auto', flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <img src={Portrait} alt="Nothing" sx={{ width: "50%" }} />
            </Grid>
            <Grid item xs={8} container alignItems="center" justifyContent="center">
              <Box sx={{ width: '100%' }}>
                <Stack spacing={2}>
                  <Item><h2>Jihene Jellazi</h2></Item>
                  <Item>
                    <Grid container spacing={2}>
                      <Grid item xs={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CallIcon style={{ fontSize: '36px' }} />
                      </Grid>
                      <Grid item xs={11}>
                        <h3>Call us</h3>
                        <p>+216 51 282 873</p>
                      </Grid>
                    </Grid>
                  </Item>
                  <Item>
                    <Grid container spacing={2}>
                      <Grid item xs={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <EmailIcon style={{ fontSize: '36px' }} />
                      </Grid>
                      <Grid item xs={11}>
                        <h3>Email us</h3>
                        <p>jellazi.jihene@gmail.com</p>
                      </Grid>
                    </Grid>
                  </Item>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Section2;
