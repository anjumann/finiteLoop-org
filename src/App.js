import React from 'react';
import './index.css';
import Home from './Components/Home';
import { Routes, Route, Navigate } from "react-router-dom";

import Events from './Components/Events';
import Team from './Components/Team';
import About from './Components/About';
import Navbar from './Components/BasicComponents/Navbar';
import Footer from './Components/BasicComponents/Footer';

function App() {
  return (
    <div className="App bg-gradient-to-r from-black to-gray-900">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/events" element={<Events />}></Route>
        <Route exact path="/gallery" element={<Events />}></Route>
        <Route exact path="/team" element={<Team />}></Route>
        <Route exact path="/contact" element={<Events />}></Route>


      </Routes>

      <Footer />
    </div>
  );
}

export default App;
