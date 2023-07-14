import React, { useState, useEffect } from 'react';
import { Typography, Box, Button, Container, Card } from '@mui/material';
import Typewriter from 'typewriter-effect';


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
    <Container sx={{width:'100vw', height:'100vh', my:'4rem', overflow:'auto'}}>
      
        <Box sx={{height:'100%',
                  display:'flex',
                  flexWrap:'wrap', 
                  textAlign:'center', 
                  justifyContent:'center', 
                  alignItems:'center'}}>
          <Card sx={{width:'90%', height:'auto', boxShadow:3, mt:2, fontSize:"6rem"}}>
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