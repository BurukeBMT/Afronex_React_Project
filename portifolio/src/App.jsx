import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Testimonial from './Testimonial';
import Contact from './Contact';
import './App.css'

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonial />
      <Contact />
    </main>
  );
}

export default App;
