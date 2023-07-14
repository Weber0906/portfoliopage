import React from "react";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { PythonOriginal, JavascriptOriginal, Html5Original, Css3Original, DjangoPlain, ReactOriginal, NodejsOriginal, PostgresqlOriginal, ReduxOriginal, ExpressOriginal } from "devicons-react"


export default function Skills() {
    return (
      <Container sx={{width:'100vw', 
                      height:'100vh', 
                      my:'4rem'}}>
      <Box sx={{ fontSize:'h2.fontSize', textAlign:'center'}}> My skills</Box>
      <br/>
      <Box sx={{  display:'flex', 
                  flexWrap:'wrap', 
                  textAlign:'center', 
                  justifyContent:'center', 
                  alignItems:'center'}}>
                   <Card sx={{ width: 170, height: 170, m:'2rem', boxShadow:'3' }}>
                      <CardContent  >
                        <PythonOriginal size={100}/>
                        <Typography  variant="subtitle1" >Python</Typography>
                      </CardContent>
                    </Card>
                
                   <Card sx={{ width: 170, height: 170, m:'2rem', boxShadow:'3' }}>
                      <CardContent >
                        <JavascriptOriginal size={100} />
                        <Typography  variant="subtitle1" >JS</Typography>
                      </CardContent>
                    </Card>
                
                   <Card sx={{ width: 170, height: 170, m:'2rem', boxShadow:'3' }}>
                      <CardContent >
                        <Html5Original size={100}/>
                        <Typography  variant="subtitle1" >HTML 5</Typography>
                      </CardContent>
                    </Card>
                
                   <Card sx={{ width: 170, height: 170, m:'2rem', boxShadow:'3' }}>
                      <CardContent >
                        <Css3Original size={100}/>
                        <Typography  variant="subtitle1" >CSS 3</Typography>
                      </CardContent>
                    </Card>
               
                   <Card sx={{ width: 170, height: 170, m:'2rem', boxShadow:'3' }}>
                      <CardContent >
                        <DjangoPlain size={100}/>
                        <Typography  variant="subtitle1" >Django</Typography>
                      </CardContent>
                    </Card>
               
                   <Card sx={{ width: 170, height: 170, m:'2rem', boxShadow:'3' }}>
                      <CardContent >
                        <ReactOriginal size={100}/>
                        <Typography  variant="subtitle1" >React.js</Typography>
                      </CardContent>
                    </Card>
                
                   <Card sx={{ width: 170, height: 170, m:'2rem', boxShadow:'3' }}>
                      <CardContent >
                        <NodejsOriginal size={100}/>
                        <Typography  variant="subtitle1" >Node.js</Typography>
                      </CardContent>
                    </Card>
                
                   <Card sx={{ width: 170, height: 170, m:'2rem', boxShadow:'3' }}>
                      <CardContent >
                        <PostgresqlOriginal size={100}/>
                        <Typography  variant="subtitle1" >Postgresql</Typography>
                      </CardContent>
                    </Card>
                
                   <Card sx={{ width: 170, height: 170, m:'2rem', boxShadow:'3' }}>
                      <CardContent >
                        <ReduxOriginal size={100}/>
                        <Typography  variant="subtitle1" >Redux</Typography>
                      </CardContent>
                    </Card>
                
                   <Card sx={{ width: 170, height: 170, m:'2rem', boxShadow:'3' }}>
                      <CardContent >
                        <ExpressOriginal size={100}/>
                        <Typography  variant="subtitle1" >Express.js</Typography>
                      </CardContent>
                    </Card>  
        </Box>
      </Container>
    );
  }


