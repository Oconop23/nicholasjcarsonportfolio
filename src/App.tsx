import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Education from './components/Education';
import Experience from './components/Experience';
import Awards from './components/Awards';
import Extracurricular from './components/Extracurricular';
import Contact from './components/Contact';

function MainContent() {
  return (
    <>
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
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;