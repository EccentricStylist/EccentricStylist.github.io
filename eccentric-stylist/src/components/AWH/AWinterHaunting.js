import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Snowfall from "react-snowfall";

function AWinterHaunting() {
  const location = useLocation();
  const [images, setImages] = useState([]);

  const navItems = [
    { name: "Game", path: "/games/a-winter-haunting" },
    { name: "Wiki", path: "/games/a-winter-haunting/wiki" },
    { name: "Press", path: "/games/a-winter-haunting/press" },
    { name: "Media", path: "/games/a-winter-haunting/media" },
  ];

  useEffect(() => {
    const snowflake1 = new Image();
    snowflake1.src = "/images/AWH/cooling-icon.png";

    const snowflake2 = new Image();
    snowflake2.src = "/images/AWH/snowflake-icon.png";

    snowflake1.onload = () => setImages((prev) => [...prev, snowflake1]);
    snowflake2.onload = () => setImages((prev) => [...prev, snowflake2]);

    snowflake1.onerror = () => console.error("Failed to load Snowflake 1.");
    snowflake2.onerror = () => console.error("Failed to load Snowflake 2.");
  }, []);

  return (
    <div
      className="flex flex-col min-h-screen w-full"
      style={{
        backgroundColor: "#d9faf8",
        backgroundImage: `url('/images/AWH/awh-background.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative", // Ensure proper stacking context for snowfall
      }}
    >
      {/* Snowfall Layer */}
      {images.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "auto",  // Ensure it stretches with the content
            minHeight: "100%", // Ensure it covers the entire page
            zIndex: 0, // Behind content but above the background
            pointerEvents: "none", // Allow interactions with content
          }}
        >
          <Snowfall
            snowflakeCount={25}  // Increase the number for better coverage
            images={images}
            radius={[5, 20]}  // Randomized radius range
            speed={[0.5, 2]}  // Adjust the speed of the snowflakes
          />
        </div>
      )}

      {/* Sub Navigation Bar */}
      <nav
        className="bg-gray-900 text-white shadow-lg w-full"
        style={{ zIndex: 10 }}  // Ensure the nav is above the snowfall
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8 h-16">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? "border-b-2 border-blue-300 text-white"  // Change active color to light blue
                    : "text-gray-400 hover:text-blue-300"    // Change hover color to light blue
                } inline-flex items-center px-1 pt-1 text-sm font-medium`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div
        className="flex-grow"
        style={{
          zIndex: 10,  // Ensure content is above the snowfall
        }}
      >
        <div className="px-4 py-6 max-w-7xl mx-auto sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <footer
        className="w-full text-center text-white py-8 flex-shrink-0"
        style={{
          backgroundImage: `url('/images/AWH/footer-background.png')`, // Footer background image
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "150px", // Ensure a minimum height for the footer
          zIndex: 20,  // Ensure the footer is above other elements
          overflow: "visible", // Allow background image overflow to be visible
        }}
      >
        <p className="text-sm font-medium mt-2">© 2024 Eccentric Stylist</p>
      </footer>
    </div>
  );
}

export default AWinterHaunting;
