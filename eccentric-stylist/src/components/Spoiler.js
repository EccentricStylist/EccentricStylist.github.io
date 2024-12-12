import React, { useState } from "react";

function Spoiler({ text }) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <span
      onClick={() => setIsRevealed((prev) => !prev)} // Toggle on tap/click
      onMouseEnter={() => setIsRevealed(true)} // Reveal on hover
      onMouseLeave={() => setIsRevealed(false)} // Hide on mouse leave
      className={`cursor-pointer transition-all duration-300 ${
        isRevealed ? "text-black" : "text-transparent bg-black"
      }`}
      style={{
        borderRadius: "4px",
        padding: "0 4px",
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </span>
  );
}

export default Spoiler; // Ensure this line is present
