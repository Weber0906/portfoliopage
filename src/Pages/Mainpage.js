import React, { useState, useEffect } from 'react';
import { Typography, Box, Button, Container, Card } from '@mui/material';

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
        onComplete();
      }
    }, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, [text, currentIndex, delay, onComplete]);

  return <Typography variant="h2" align="center">{displayText}</Typography>;
}

function Mainpage() {
  const [showSecondText, setShowSecondText] = useState(false);
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [typingCompleteCount, setTypingCompleteCount] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSecondText(true);
    }, 100 * 'Hi, I\'m Nikolas Weber'.length);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleTypingComplete = () => {
    setTypingCompleteCount((prevCount) => prevCount + 1);
  };

  // useEffect(() => {
  //   if (typingCompleteCount === 2) {
  //     setShowDownloadButton(true);
  //   }
  // }, [typingCompleteCount]);

  // const handleDownloadClick = () => {
  //   const downloadUrl = '../Nikolas_Weber_CV.pdf'; // Path to the document in the public folder
  //   const link = document.createElement('a');
  //   link.href = downloadUrl;
  //   link.download = 'Nikolas_Weber_CV.pdf';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  //   console.log('CV Downloaded');
  // };


  return (
    <Container sx={{width:'100vw', height:'100vh', my:'4rem', overflow:'auto'}}>
      
        <Box sx={{height:'100%',
                  display:'flex',
                  flexWrap:'wrap', 
                  textAlign:'center', 
                  justifyContent:'center', 
                  alignItems:'center'}}>
          <Card sx={{width:'90%', height:'auto', boxShadow:3, mt:2}}>
            <TypewriterText text="Hi, I'm Nikolas Weber" delay={100} onComplete={handleTypingComplete} />
            {showSecondText && (
            <TypewriterText text="full-stack developer" delay={100} onComplete={handleTypingComplete} />
            )}
            {/* {showDownloadButton && (
            <Button variant="contained" color="primary" onClick={handleDownloadClick} sx={{mt:2, mb:2}}>
              Download a CV
            </Button>
          )} */}
          </Card>
        </Box>
    </Container>  
  );
}

export default Mainpage