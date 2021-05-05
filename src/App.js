import React from 'react';
import Navbar from './components/NavBar/navbar.js';
import Intro from './components/Intro/intro.js';
import Services from './components/Services/services.js';
import AboutMe from './components/AboutMe/aboutme.js';
import Projects from './components/Projects/projects.js';
import Footer from './components/Footer/footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
