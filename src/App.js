import React from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Resume/>
      <Contact/>
    </div>
    
  );
}

export default App;
