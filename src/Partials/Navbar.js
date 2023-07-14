import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { LinkedIn, GitHub } from '@mui/icons-material';

export default function Navbar() {
    const [isDrawerOpen, setDrawerOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setDrawerOpen(!isDrawerOpen);
    };
  
    return (
      <AppBar position="fixed" sx={{ justifyContent: 'flex start'}}>
        
        
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <div>
        <a href="https://www.linkedin.com/in/nikolas-weber-tlv/" target="_blank" rel="noopener noreferrer">
        <LinkedIn fontSize="large" style={{ color: '#fff' }} />
      </a>
      <a href="https://github.com/Weber0906" target="_blank" rel="noopener noreferrer">
        <GitHub fontSize="large" style={{ color: '#fff' }} />
      </a>
        </div>
          <Typography sx={{ display: { xs:'none', sm: 'none', md: 'block' } }}variant="h6" component="div">
            <Button color="inherit" component={Link} to="/">HOME</Button>
            <Button color="inherit" component={Link} to="/projects">PROJECTS</Button>
            {/* <Button color="inherit" component={Link} to="/skills">SKILLS</Button> */}
            <Button color="inherit" component={Link} to="/contacts">CONTACTS</Button>
          </Typography>
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerToggle}>
            <List>
              <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
                <ListItemText primary="HOME" />
              </ListItem>
              <ListItem button component={Link} to="/projects" onClick={handleDrawerToggle}>
                <ListItemText primary="PROJECTS" />
              </ListItem>
              <ListItem button component={Link} to="/skills" onClick={handleDrawerToggle}>
                <ListItemText primary="SKILLS" />
              </ListItem>
              <ListItem button component={Link} to="/contacts" onClick={handleDrawerToggle}>
                <ListItemText primary="CONTACTS" />
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
    );
  }
  
