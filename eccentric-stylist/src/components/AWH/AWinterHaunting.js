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
    snowflake1.src = "/images/AWH/cooling-con.png";

    const snowflake2 = new Image();
    snowflake2.src = "/images/AWH/snowflake-icon.png";

    console.log("Starting to load images...");

    snowflake1.onload = () => {
      console.log("Snowflake 1 loaded successfully.");
      setImages((prev) => [...prev, snowflake1]);
    };

    snowflake2.onload = () => {
      console.log("Snowflake 2 loaded successfully.");
      setImages((prev) => [...prev, snowflake2]);
    };

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
      }}
    >
      {console.log("Images array:", images)}

      {/* Render Snowfall only if images are loaded */}
      {images.length > 0 && (
        <Snowfall
          snowflakeCount={25}
          images={images}
          radius={[5, 20]} // Randomized radius range (10px to 30px)
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
      )}

      {/* Sub Navigation Bar */}
      <nav className="bg-gray-900 text-white shadow-lg w-full">
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
      <div className="h-full">
        <div className="px-4 py-6 max-w-7xl mx-auto sm:px-6 lg:px-8">
          {/* Content Goes Here */}
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default AWinterHaunting;
