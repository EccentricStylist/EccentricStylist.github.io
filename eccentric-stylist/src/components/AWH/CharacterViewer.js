import React, { useState } from "react";
import { characters } from "./Variables"; // Import the `characters` array
import Spoiler from '../Spoiler'

function CharacterViewer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % characters.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + characters.length) % characters.length
    );
  };

  const currentCharacter = characters[currentIndex];

  // Helper to check for spoilers
  const renderTextWithSpoilers = (text) => {
    if (text.startsWith("*") && text.endsWith("*")) {
      return <Spoiler text={text.slice(1, -1)} />; // Remove *s and render as spoiler
    }
    return text;
  };

  return (
    <section
      className="relative bg-cover bg-center text-gray-800 rounded-lg overflow-hidden"
      style={{
        backgroundImage: `url('/images/AWH/awh-char-back.png')`, // Background image
        height: "100vh", // Adjust height as needed
      }}
    >
      {/* Arrows */}
      <button
        onClick={handlePrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 z-10"
        aria-label="Previous Character"
      >
        {"<"}
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 z-10"
        aria-label="Next Character"
      >
        {">"}
      </button>

      {/* Character Display */}
      <div className="p-6 flex items-center space-x-6 h-full justify-center mx-auto max-w-5xl">
        {/* Character Image */}
        <img
          src={currentCharacter.image}
          alt={currentCharacter.name}
          className="w-48 h-auto rounded-lg flex-shrink-0"
        />

        {/* Character Details */}
        <div className="max-w-[60%] text-left">
          {/* Character Name */}
          <h1 className="text-4xl font-bold mb-4 text-center">
            {currentCharacter.name}
          </h1>

          {/* Relatives */}
          <h2 className="text-xl font-semibold mb-2">Relatives:</h2>
          <ul className="list-none space-y-1 text-lg">
            {currentCharacter.relatives.map((relative, index) => (
              <li key={index} className="flex items-center">
                <span className="text-black mr-2">❄</span>
                {renderTextWithSpoilers(relative)}
              </li>
            ))}
          </ul>

          {/* Friends */}
          <h2 className="text-xl font-semibold mt-4">Allies:</h2>
          <ul className="list-none space-y-1 text-lg">
            {currentCharacter.friends.map((friend, index) => (
              <li key={index} className="flex items-center">
                <span className="text-black mr-2">★</span>
                {renderTextWithSpoilers(friend)}
              </li>
            ))}
          </ul>

          {/* Enemies */}
          <h2 className="text-xl font-semibold mt-4">Enemies:</h2>
          <ul className="list-none space-y-1 text-lg">
            {currentCharacter.enemies.map((enemy, index) => (
              <li key={index} className="flex items-center">
                <span className="text-black mr-2">▲</span>
                {renderTextWithSpoilers(enemy)}
              </li>
            ))}
          </ul>

          {/* Alignment */}
          <h2 className="text-xl font-semibold mt-4">Alignment:</h2>
          <p className="text-lg">{currentCharacter.alignment}</p>

          {/* Strengths */}
          <h2 className="text-xl font-semibold mt-4">Strengths:</h2>
          <p className="text-lg">{currentCharacter.strengths}</p>

          {/* Weaknesses */}
          <h2 className="text-xl font-semibold mt-4">Weaknesses:</h2>
          <p className="text-lg">{currentCharacter.weaknesses}</p>

          {/* Description */}
          <h2 className="text-xl font-semibold mt-4">Information:</h2>
          <p className="text-md">{currentCharacter.description}</p>
        </div>
      </div>
    </section>
  );
}

export default CharacterViewer;
