import React from 'react';
import Home from './components/Home'
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Qualification from './components/Qualification';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app font-poppins'>
      <Router>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Projects />
        <Contact />
        <Footer />
      </Router>
    </div>
  )
}

export default App
