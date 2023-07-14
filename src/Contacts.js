import React, { useState, useEffect } from 'react';
import { Box, Button, Card, Typography, Container } from '@mui/material';
import { WhatsApp, Telegram, Phone, Email } from '@mui/icons-material';


function TypewriterText({ text, delay, onComplete }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId);
        
      }
    }, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, [text, currentIndex, delay, onComplete]);

  return <Typography variant="h2" align="center">{displayText}</Typography>;
}

export default function Contacts() {
  
  return (
    <Container sx={{width:'100vw', 
                      height:'100vh', 
                      my:'4rem'}}>
      <br/>
          <Box>
            <TypewriterText text="Thank you for viewing my portfolio page - don't hesitate to contact and hire me!" delay={100}/>
          </Box>
          <Box sx={{width:'100%', 
                  height:'80%',
                  display:'flex', 
                  flexWrap:'wrap', 
                  textAlign:'center', 
                  justifyContent:'center', 
                  alignItems:'center'}} >
            <Card sx={{m:'1rem', width:170, height:170, boxShadow:'3'}}>
                <Typography  variant="subtitle1" >Call me</Typography>
                <br/>
                <a href="tel:+972534458353">
                <Button variant="contained" color="primary"> Phone
                <Phone fontSize='large' />
                </Button>
                </a>
            </Card>
            <Card sx={{m:'1rem', width:170, height:170, boxShadow:'3' }}>
                <Typography  variant="subtitle1" >Start a chat</Typography>
                <br/>
                <a href="https://wa.me/+972534458353">
                <Button variant="contained" color="primary"> WhatsApp
                <WhatsApp fontSize='large' />
                </Button>
                </a>
              </Card>
              <Card sx={{m:'1rem', width:170, height:170, boxShadow:'3'}}>
                <Typography  variant="subtitle1" >Start a chat</Typography>
                <br/>
                <a href="https://t.me/Weber0906">
                <Button variant="contained" color="primary"> Telegram
                <Telegram fontSize='large' />
                </Button>
                </a>
              </Card>
              <Card sx={{m:'1rem', width:170, height:170, boxShadow:'3'}}>
                <Typography  variant="subtitle1" >Mail me</Typography>
                <br/>
                <a href='mailto:nikolas.weber0906@gmail.com?subject=Hello&body=Hi%20there'>
                <Button variant="contained" color="primary"> Email
                <Email fontSize='large' />
                </Button>
                </a>
              </Card>
          </Box>
          
    </Container>
  )
}


