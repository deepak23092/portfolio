import React from 'react';
import Home from './components/Home'
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About';

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Home />
        <About />
      </Router>
    </div>
  )
}

export default App
