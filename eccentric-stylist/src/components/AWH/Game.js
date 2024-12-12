import React from "react";

function AWHGame() {
  return (
    <div
      className="max-w-4xl mx-auto py-6 px-4 bg-white bg-opacity-85 text-gray-900 rounded-lg shadow-lg" // Reduced padding
      style={{ zIndex: 2, position: "relative" }}
    >
      {/* Logo Image as Title */}
      <div className="text-center mb-6">
        <img
          src="/images/AWH/awh-logo.png" // Logo image path
          alt="A Winter Haunting Logo"
          className="mx-auto"
          style={{
            maxWidth: "90%", // Controls the width of the logo
            height: "auto",  // Maintains aspect ratio
            maxHeight: "250px", // Increases max height to make the logo bigger
            objectFit: "contain", // Ensures the logo fits within the bounds
          }}
        />
      </div>

      {/* YouTube Video */}
      <section className="mb-10">
        <div className="relative max-w-4xl mx-auto aspect-w-16 aspect-h-9">
          {/* Decorative Frame */}
          <div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              backgroundImage: "url('/images/AWH/awh-frame.png')", // Frame image
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Video */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="w-4/5 h-4/5">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/lomCpoNHyEY"
                title="A Winter Haunting - Official Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Steam Buy Widget */}
      <section className="mb-10 text-center">
        <div
          className="relative"
          style={{
            width: "100%",
            maxWidth: "640px", // You can adjust the size here
            margin: "0 auto",
          }}
        >
          <iframe
            src="https://store.steampowered.com/widget/2790100/"
            width="100%"
            height="200px"
            frameBorder="0"
            style={{
              border: "none",
              overflow: "hidden",
              borderRadius: "10px", // Optional: adds rounded corners to iframe
            }}
            title="A Winter Haunting Buy Widget"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default AWHGame;
