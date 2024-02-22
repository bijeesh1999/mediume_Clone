// Footer.js
import React from 'react';
import { Container, Typography, Link, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer style={{ marginTop: '2rem', backgroundColor: 'black', color:"white", padding: '2rem 0' }}>
      <Container style={{color:"white"}}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">About Us</Typography>
            <Typography variant="body2" color="textSecondary"style={{color:"white"}}>
              Your description about the website or company.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} style={{color:"white"}}>
            <Typography variant="h6">Quick Links</Typography>
            <Link href="#" color="textSecondary" style={{color:"white"}}>
              Home
            </Link>
            <br />
            {/* Add more links as needed */}
          </Grid>
          <Grid item xs={12} sm={6} md={3} style={{color:"white"}}>
            <Typography variant="h6">Connect with Us</Typography>
            <IconButton style={{color:"white"}}>
              <FacebookIcon />
            </IconButton>
            <IconButton style={{color:"white"}}>
              <TwitterIcon />
            </IconButton>
            <IconButton style={{color:"white"}}>
              <InstagramIcon />
            </IconButton>
            {/* Add more social media icons as needed */}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6"style={{color:"white"}}>Get the App</Typography>
            {/* Add links or buttons related to your mobile app */}
          </Grid>
        </Grid>
        <Typography variant="body2" color="textSecondary" style={{ marginTop: '1rem', color:"white" }}>
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
