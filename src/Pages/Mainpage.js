import React from 'react';
import { Box, Button, Container, Card } from '@mui/material';
import Typewriter from 'typewriter-effect';
import Particle from '../Partials/Particles.jsx';

  const handleDownloadClick = () => {
    const downloadUrl = '../Nikolas_Weber_CV.pdf'; // Path to the document in the public folder
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Nikolas_Weber_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log('CV Downloaded');
  };

function Mainpage() {
  return (
    <Container sx={{width:'100vw', height:'100vh', overflow:'auto'}}>
       <Particle />
        <Box sx={{height:'100%',
                  display:'flex',
                  flexWrap:'wrap', 
                  textAlign:'center', 
                  justifyContent:'center', 
                  alignItems:'center'}}>
          <Card id="mainpagetext" sx={{width:'90%', height:'auto', boxShadow:3, fontSize:"4.5rem", backgroundColor:"transparent"}}>
                  <Typewriter
        
                      onInit={(typewriter) => {
                          typewriter
                              .typeString("Hi! I'm Nikolas Weber, full-snack developer.")
                              .pauseFor(1000)
                              .deleteChars(16)
                              .typeString("stack developer.")
                              .start();
                      }}
                      />
            {/* {showDownloadButton && ( */}
            <Button variant="contained" color="primary" onClick={handleDownloadClick} sx={{mt:2, mb:2}}>
              Download a CV
            </Button>
          {/* // )} */}
          </Card>
        </Box>
    </Container>  
  );
}

export default Mainpage