import React from 'react';
import Home from '../components/Home'; // Adjust path if necessary
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import NavBar from '../components/NavBar';
import Experience from '../components/Experience'
import Certificates from '../components/Certificates';
const HomePage = () => {
  return (
    <>
    <NavBar />
    <div id="home" className="space-y-12 "> {/* Adds vertical space between components */}
      <div className="mb-12 mt-10"> {/* Margin bottom for Home component */}
        <Home />
      </div>
      <div id="about" className="mb-12 mt-20"> {/* Margin bottom for About component */}
        <About />
      </div>
      <div id="Experience" className="mb-12 mt-20"> {/* Margin bottom for Experience component */}
        <Experience />
      </div>
      <div id="certificates" className="mb-12 mt-20"> {/* Margin bottom for Experience component */}
        <Certificates />
      </div>

      <div  id="projects" className="mb-12 mt-10"> {/* Margin bottom for Projects component */}
        <Projects />
      </div>
      <div id="contact" className="mb-12 mt-10"> {/* Margin bottom for Contact component */}
        <Contact />
      </div>
    </div>
    </>
  );
};

export default HomePage;
