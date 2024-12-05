import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function Layout() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  // Check if the current page is "A Winter Haunting"
  const isAWinterHaunting = location.pathname.startsWith('/games/a-winter-haunting');

  return (
    <div className={`${isAWinterHaunting ? 'bg-white' : 'bg-gray-900'} min-h-screen text-gray-300`}>
      {/* Top Navigation Bar: Render only if not on "A Winter Haunting" */}
      {!isAWinterHaunting && (
        <nav className="bg-gray-800 shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              {/* Logo Section */}
              <div className="flex items-center">
                <Link
                  to="/"
                  className="font-semibold text-gray-300 text-lg hover:text-pink-500 transition duration-300"
                >
                  Eccentric Stylist
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-4">
                <Link
                  to="/"
                  className="py-2 px-4 text-gray-300 hover:text-pink-500 transition duration-300"
                >
                  Home
                </Link>
                <Link
                  to="/contact"
                  className="py-2 px-4 text-gray-300 hover:text-pink-500 transition duration-300"
                >
                  Contact
                </Link>
                <Link
                  to="/about"
                  className="py-2 px-4 text-gray-300 hover:text-pink-500 transition duration-300"
                >
                  About
                </Link>
                <Link
                  to="/games"
                  className="py-2 px-4 text-gray-300 hover:text-pink-500 transition duration-300"
                >
                  Games
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  type="button"
                  className="text-gray-300 hover:text-pink-500 focus:outline-none"
                  onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {/* Hamburger Icon */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    {isMobileMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-gray-800 border-t border-gray-700">
              <Link
                to="/"
                className="block py-2 px-4 text-gray-300 hover:bg-pink-500 hover:text-white transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/contact"
                className="block py-2 px-4 text-gray-300 hover:bg-pink-500 hover:text-white transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/about"
                className="block py-2 px-4 text-gray-300 hover:bg-pink-500 hover:text-white transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/games"
                className="block py-2 px-4 text-gray-300 hover:bg-pink-500 hover:text-white transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Games
              </Link>
            </div>
          )}
        </nav>
      )}

      {/* Main Content */}
      <main className="max-w-6xl mx-auto mt-6 px-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
