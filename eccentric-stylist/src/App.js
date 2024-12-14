import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Press from "./components/AWH/Press";
import Games from "./components/Games";
import AWinterHaunting from "./components/AWH/AWinterHaunting";
import AWHWiki from "./components/AWH/Wiki";
import AWHGame from "./components/AWH/Game";
import AWHMedia from "./components/AWH/Media"; // Import the AWHMedia component

// Placeholder components for A Winter Haunting sub-pages
// const Press = () => <h2>Press Information</h2>;
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
            <Route index element={<AWHGame />} />
            <Route path="wiki" element={<AWHWiki />} />
            <Route path="press" element={<Press />} />
            {/* Define the Media route */}
            <Route 
              path="media" 
              element={
                <AWHMedia
                  images={[
                    "/images/AWH/screenshot-1.png",
                    "/images/AWH/screenshot-2.png",
                    "/images/AWH/screenshot-3.png",
                    "/images/AWH/screenshot-4.png",
                    "/images/AWH/screenshot-5.png",
                    "/images/AWH/screenshot-6.png",
                    "/images/AWH/screenshot-7.png",
                    "/images/AWH/screenshot-8.png",
                    "/images/AWH/screenshot-9.png",
                    "/images/AWH/screenshot-10.png",
                    "/images/AWH/screenshot-11.png",
                    "/images/AWH/screenshot-12.png",
                  ]}
                />
              } 
            />
            <Route path="contact" element={<GameContact />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
