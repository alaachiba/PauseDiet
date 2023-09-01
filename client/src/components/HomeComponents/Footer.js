import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterContainer = styled(Container)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    padding: '20px 0',
    color: theme.palette.text.primary, // Change to your desired text color
    textAlign: 'center',
  }));
  

const SocialIconLink = styled('a')({
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    color: '#FFC107', // Change this to your desired hover color
  },
});

function Footer() {
  const instagramUrl = 'https://www.instagram.com/pausediet/';
  const facebookUrl = 'https://www.facebook.com/Pausediet/';
  const linkedinUrl = 'https://tn.linkedin.com/in/jihene-jellazi-65785a180';

  return (
    <React.Fragment>
      <CssBaseline />
      <FooterContainer maxWidth="100%">
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={4}>
            <SocialIconLink href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <InstagramIcon fontSize="large" />
            </SocialIconLink>
          </Grid>
          <Grid item xs={4}>
            <SocialIconLink href={facebookUrl} target="_blank" rel="noopener noreferrer">
              <FacebookIcon fontSize="large" />
            </SocialIconLink>
          </Grid>
          <Grid item xs={4}>
            <SocialIconLink href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon fontSize="large" />
            </SocialIconLink>
          </Grid>
        </Grid>
      </FooterContainer>
    </React.Fragment>
  );
}

export default Footer;
