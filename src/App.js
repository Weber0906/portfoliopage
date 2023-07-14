import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Partials/Navbar';
import Mainpage from './Pages/Mainpage'; 
import './App.css'; // Update the CSS import to reflect the new file name
import Projects from './Pages/Projects';
// import Skills from './Pages/Skills';
import Contacts from './Pages/Contacts';
// import Particle from './Partials/Particles.jsx';


function App() {
  
  return (
      <Router>
          {/* <Particle /> */}
          <Navbar />
        <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/skills" element={<Skills />} /> */}
            <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
  );
}

export default App;
