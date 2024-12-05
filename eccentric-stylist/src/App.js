import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Games from './components/Games';
import AWinterHaunting from './components/AWinterHaunting';

function App() {
  return (
    <Router basename="/eccentric-stylist">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="games" element={<Games />} />
          <Route path="games/a-winter-haunting" element={<AWinterHaunting />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;