import React, { useState } from "react";

const AWHMedia = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative flex flex-col justify-center items-center bg-cover bg-center">
      {/* Media Gallery Title */}
      <h2 className="text-4xl font-bold text-black mt-8 mb-4">Media Gallery</h2>

      {/* Frame around the media gallery */}
      <div
        className="relative bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url('/images/AWH/awh-frame-media.png')`, // Set the frame image here
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "80%", // Adjust the width as necessary
          height: "auto",
          padding: "40px", // Adjust padding if needed
          zIndex: 10, // Higher z-index for the frame to be above the gallery
        }}
      >
        {/* Image Container */}
        <div className="max-w-xl mx-auto z-0">
          {" "}
          {/* Lower z-index for the gallery */}
          <img
            src={images[currentIndex]}
            alt={`Media Image ${currentIndex + 1}`}
            className="w-full h-auto rounded-md shadow-lg"
            style={{
              zIndex: 5,
            }}
          />
        </div>

        {/* Arrows at the bottom */}
        <div className="absolute bottom-8 flex items-center justify-center space-x-20 z-0">
          {" "}
          {/* Lower z-index for the arrows */}
          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="text-white rounded-full w-12 h-12 flex items-center justify-center hover:filter hover:brightness-150 hover:saturate-150 transition-all duration-200"
            aria-label="Previous Image"
          >
            <img
              src="/images/AWH/awh-arrow.png" // Arrow image
              alt="Previous"
              className="w-14 h-8 hover:filter hover:brightness-150 hover:saturate-150 mt-40" // Hover effect
            />
          </button>
          {/* Next Button */}
          <button
            onClick={nextImage}
            className="text-white rounded-full w-12 h-12 flex items-center justify-center hover:filter hover:brightness-150 hover:saturate-150 transition-all duration-200"
            aria-label="Next Image"
          >
            <img
              src="/images/AWH/awh-arrow.png" // Arrow image
              alt="Next"
              className="w-14 h-8 transform rotate-180 hover:filter hover:brightness-150 hover:saturate-150 mt-40" // Rotation effect
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AWHMedia;
