import React from 'react';
import './App.css'; // Ensure this file exists and Tailwind is included
import Background from './templates/background';
import Navbar from './templates/navbar';
import Menu from './templates/menu'
import Hero from './templates/hero'


function App() {
  return (
    <div className="relative z-0">
      <Background />
      <div className="relative z-10 mx-8">
        {/* Navbar */}
        <Navbar />
        {/* Hero */}
        <Hero />
        {/* Quicklinks */}
        <div className="mt-20">
          <div className="text-4xl text-copy text-center">Don't want to scroll?</div>
          <Menu />
        </div>
        {/* About Me */}
        <div className='mt-64'>
          <div className='text-4xl text-copy text-center'>About Me</div>
        </div>
      </div>
    </div>
  );
}

export default App;
