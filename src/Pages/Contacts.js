import React from 'react';
import { Box, Button, Card, Typography, Container } from '@mui/material';
import { WhatsApp, Telegram, Phone, Email } from '@mui/icons-material';
import Typewriter from 'typewriter-effect';
import Particle from '../Partials/Particles';

export default function Contacts() {
  
  return (
    <Container sx={{width:'100vw', height:'100vh', my:'4rem', overflow:'auto'}}>
      <Particle />
      <br/>
      <Box sx={{height:'100%',
                  display:'flex',
                  flexWrap:'wrap', 
                  textAlign:'center', 
                  justifyContent:'center', 
                  alignItems:'center'}}>
        <Card sx={{width:'90%', height:'auto', boxShadow:3, fontSize:"4.5rem", backgroundColor:"transparent"}}>
          <Typewriter
        
        onInit={(typewriter) => {
            typewriter
                .typeString("Thank you for visiting my page. Don't hesitate to hire me)")
                .pauseFor(1000)
                .start();
        }}
        />
          </Card>
     
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


