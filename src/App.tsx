import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsEducation from './components/SkillsEducation';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <SkillsEducation />
      </main>
    </div>
  );
}

export default App;
