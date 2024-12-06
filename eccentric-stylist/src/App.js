import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Games from './components/Games';
import AWinterHaunting from './components/AWinterHaunting';
import Wiki from './components/Wiki';

// Placeholder components for A Winter Haunting sub-pages
const Developer = () => <h2>Developer Information</h2>;
const Press = () => <h2>Press Information</h2>;
const Media = () => <h2>Media Gallery</h2>;
const GameContact = () => <h2>Game-specific Contact Information</h2>;

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="games" element={<Games />} />
          <Route path="games/a-winter-haunting" element={<AWinterHaunting />}>
            <Route index element={<h2>Game Overview</h2>} />
            <Route path="wiki" element={<Wiki />} />
            <Route path="developer" element={<Developer />} />
            <Route path="press" element={<Press />} />
            <Route path="media" element={<Media />} />
            <Route path="contact" element={<GameContact />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
