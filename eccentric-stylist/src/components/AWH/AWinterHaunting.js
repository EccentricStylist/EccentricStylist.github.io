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
      className="min-h-screen w-full"
      style={{
        backgroundColor: "#d9faf8",
        backgroundImage: `url('/images/AWH/awh-background.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative", // Ensure stacking context for z-index
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
            height: "100%",
            zIndex: 0, // Above the background but below content
            pointerEvents: "none", // Allow interactions with content
          }}
        >
          <Snowfall
            snowflakeCount={12}
            images={images}
            radius={[5, 20]} // Randomized radius range
          />
        </div>
      )}

      {/* Sub Navigation Bar */}
      <nav className="bg-gray-900 text-white shadow-lg w-full" style={{ zIndex: 1 }}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8 h-16">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? "border-b-2 border-pink-500 text-white"
                    : "text-gray-400 hover:text-pink-500"
                } inline-flex items-center px-1 pt-1 text-sm font-medium`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="h-full" style={{ zIndex: 1 }}>
        <div className="px-4 py-6 max-w-7xl mx-auto sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AWinterHaunting;
