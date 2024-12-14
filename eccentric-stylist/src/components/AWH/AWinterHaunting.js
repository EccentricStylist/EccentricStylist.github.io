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
        position: "relative",
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
            height: "auto",
            minHeight: "100%",
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <Snowfall
            snowflakeCount={25}
            images={images}
            radius={[5, 20]}
            speed={[0.5, 2]}
          />
        </div>
      )}

      {/* Sub Navigation Bar */}
      <nav
        className="bg-gray-900 text-white shadow-lg w-full"
        style={{ zIndex: 10 }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8 h-16">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? "border-b-2 border-blue-300 text-white"
                    : "text-gray-400 hover:text-blue-300"
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
          zIndex: 10,
        }}
      >
        <div className="px-4 py-6 max-w-7xl mx-auto sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <footer
        className="w-full text-white py-8 flex-shrink-0"
        style={{
          backgroundImage: `url('/images/AWH/footer-background.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "150px",
          zIndex: 20,
          overflow: "visible",
        }}
      >
        <div className="flex justify-center items-center space-x-8 w-full">
          {/* Copyright Text as a Link */}
          <a
            href="https://impress.games/press-kit/eccentric-stylist"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black border-2 border-black py-2 px-6 rounded-lg hover:bg-opacity-90 transition-all"
            style={{
              backgroundImage: "url('/path-to-your-cloud-image.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "black",
            }}
          >
            Contact
          </a>

          {/* Press Kit Button */}
          <a
            href="https://impress.games/press-kit/eccentric-stylist/a-winter-haunting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black border-2 border-black py-2 px-6 rounded-lg hover:bg-opacity-90 transition-all"
            style={{
              backgroundImage: "url('/path-to-your-cloud-image.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "black",
            }}
          >
            Press Kit
          </a>
        </div>
        <div className="flex justify-center items-center space-x-8 w-full mt-4">
          <h3 className="text-black">© 2024 Eccentric Stylist</h3>
        </div>
      </footer>
    </div>
  );
}

export default AWinterHaunting;
