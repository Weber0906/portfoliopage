import React from "react";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import Particle from '../Partials/Particles.jsx';

export default function Skills() {
    return (
      <Container sx={{width:'100vw', height:'100vh', my:'4rem', overflow:'auto'}}>
      <Particle />
      <Box sx={{ fontSize:'h2.fontSize', textAlign:'center'}}> My skills</Box>
      <br/>
      <Box sx={{  display:'flex', 
                  flexWrap:'wrap', 
                  textAlign:'center', 
                  justifyContent:'center', 
                  alignItems:'center'}}>
                   <Card sx={{ width: 180, height: 180, m:'2rem', boxShadow:'3' }}>
                      <CardContent  >
                        <Typography  variant="subtitle1" >Python</Typography>
                        <img className="devicon" src="./python-original.svg" alt="python"/>
                      </CardContent>
                    </Card>
                
                   <Card sx={{ width: 180, height: 180, m:'2rem', boxShadow:'3' }}>
                      <CardContent >
                        <Typography  variant="subtitle1" >JS</Typography>
                        <img className="devicon" src="./javascript-original.svg" alt="js"/>
                      </CardContent>
                    </Card>
                
                   <Card sx={{ width: 180, height: 180, m:'2rem', boxShadow:'3' }}>
                      <CardContent >
                        <Typography  variant="subtitle1" >HTML 5</Typography>
                        <img className="devicon" src="./html5-original.svg" alt="html"/>
                      </CardContent>
                    </Card>
                
                   <Card sx={{ width: 180, height: 180, m:'2rem', boxShadow:'3' }}>
                      <CardContent >
                        <Typography  variant="subtitle1" >CSS 3</Typography>
                        <img className="devicon" src="./css3-original.svg" alt="css"/>
                      </CardContent>
                    </Card>
               
                   <Card sx={{ width: 180, height: 180, m:'2rem', boxShadow:'3' }}>
                      <CardContent >
                        <Typography  variant="subtitle1" >Django</Typography>
                        <img className="devicon" src="./django-plain.svg" alt="django"/>
                      </CardContent>
                    </Card>
               
                   <Card sx={{ width: 180, height: 180, m:'2rem', boxShadow:'3' }}>
                      <CardContent >
                        <Typography  variant="subtitle1" >React.js</Typography>
                        <img className="devicon" src="./react-original.svg" alt="react"/>
                      </CardContent>
                    </Card>
                
                   <Card sx={{ width: 180, height: 180, m:'2rem', boxShadow:'3' }}>
                      <CardContent >
                        <Typography  variant="subtitle1" >Node.js</Typography>
                        <img className="devicon" src="./nodejs-original.svg" alt="node"/>
                      </CardContent>
                    </Card>
                
                   <Card sx={{ width: 180, height: 180, m:'2rem', boxShadow:'3' }}>
                      <CardContent >
                        <Typography  variant="subtitle1" >Postgresql</Typography>
                        <img className="devicon" src="./postgresql-original.svg" alt="postgrsql"/>
                      </CardContent>
                    </Card>
                
                   <Card sx={{ width: 180, height: 180, m:'2rem', boxShadow:'3' }}>
                      <CardContent >
                        <Typography  variant="subtitle1" >Redux</Typography>
                        <img className="devicon" src="./redux-original.svg" alt="redux"/>
                      </CardContent>
                    </Card>
                
                   <Card sx={{ width: 180, height: 180, m:'2rem', boxShadow:'3' }}>
                      <CardContent >
                        <Typography  variant="subtitle1" >Express.js</Typography>
                        <img className="devicon" src="./express-original.svg" alt="express"/>
                      </CardContent>
                    </Card>  
        </Box>
      </Container>
    );
  }


