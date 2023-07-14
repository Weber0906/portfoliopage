import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Box, Typography, Button, Container, Card } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Particle from '../Partials/Particles.jsx';

export default function Projects() {
  return (
    <Container sx={{width:'100vw', height:'100vh', mt:'4rem', overflow:'auto'}}>
       <Particle />
    <Box sx={{height:'100%',
                  width:'100%',
                  display:'flex', 
                  flexWrap:'wrap',
                  textAlign:'center', 
                  justifyContent:'center', 
                  alignItems:'center',}}>
        
      <Carousel >
      <Card sx={{width:'90%', height:'auto', boxShadow:3, mt:2}}>
          <Typography>Description: AI.nalyze - stock market analysis with Open AI API. Node.js + React.js.</Typography> 
          <a href='https://ainalyze.onrender.com/'>
              <Button variant="contained" color="primary" sx={{ mb: '1rem'}}>
                Visit webpage
                </Button>
                </a>
        
            <img src='./project1.jpg' alt='project 1'/> 
      </Card>
      <Card sx={{width:'90%', height:'auto', boxShadow:3, mt:2}}>
        <Typography>And cut - stock video bank. Real world project. Coming soon</Typography>
        {/* <a href=''> */}
              <Button variant="contained" color="primary" sx={{ mb: '1rem'}}>
                Visit webpage
                </Button>
                {/* </a> */}
        <img src='./arrivesoon.png' alt='project 2'/> 
      </Card>
      <Card sx={{width:'90%', height:'auto', boxShadow:3, mt:2}}>
        <Typography>Coming Soon</Typography>
        {/* <a href=''> */}
              <Button variant="contained" color="primary" sx={{ mb: '1rem'}}>
                Visit webpage
                </Button>
                {/* </a> */}
        <img src='./arrivesoon.png' alt='project 3'/> 
      </Card>
      
      {/* Add more project slides as needed */}
    </Carousel>  
    </Box>
    </Container>
  );
}


