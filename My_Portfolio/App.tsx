
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import SkillMatrix from './components/SkillMatrix';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <SkillMatrix />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
