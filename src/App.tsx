import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Awards from './components/Awards';
import Extracurricular from './components/Extracurricular';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Awards />
      <Extracurricular />
      <Contact />
      <footer className="bg-white py-8">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Nicholas Carson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;