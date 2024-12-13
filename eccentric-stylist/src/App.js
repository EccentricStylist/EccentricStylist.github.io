import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Change BrowserRouter to HashRouter
import Layout from './components/Layout';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Press from './components/AWH/Press'
import Games from './components/Games';
import AWinterHaunting from './components/AWH/AWinterHaunting';
import AWHWiki from './components/AWH/Wiki'; 
import AWHGame from './components/AWH/Game'; 

// Placeholder components for A Winter Haunting sub-pages
// const Press = () => <h2>Press Information</h2>;
const Media = () => <h2>Media Gallery</h2>;
const GameContact = () => <h2>Game-specific Contact Information</h2>;

function App() {
  return (
    <Router basename="/"> {/* HashRouter doesn't need basename */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="games" element={<Games />} />
          <Route path="games/a-winter-haunting" element={<AWinterHaunting />}>
            <Route index element={<AWHGame />} />
            <Route path="wiki" element={<AWHWiki />} />
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
