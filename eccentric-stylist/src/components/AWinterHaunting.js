import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function AWinterHaunting() {
  const location = useLocation();

  const navItems = [
    { name: 'Game', path: '/games/a-winter-haunting' },
    { name: 'Wiki', path: '/games/a-winter-haunting/wiki' },
    { name: 'Press', path: '/games/a-winter-haunting/press' },
    { name: 'Media', path: '/games/a-winter-haunting/media' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <nav className="bg-gray-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="text-lg font-semibold hover:text-pink-500">
                Eccentric Stylist
              </Link>
            </div>
            <div className="hidden sm:flex space-x-4">
              <Link to="/" className="hover:text-pink-500">Home</Link>
              <Link to="/contact" className="hover:text-pink-500">Contact</Link>
              <Link to="/about" className="hover:text-pink-500">About</Link>
              <Link to="/games" className="hover:text-pink-500">Games</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Sub Navigation for A Winter Haunting */}
      <nav className="bg-gray-100 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <img
                className="h-8 w-auto"
                src="/a-winter-haunting-banner.png"
                alt="A Winter Haunting"
              />
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`${
                      location.pathname === item.path
                        ? 'border-indigo-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold mb-4">A Winter Haunting</h1>
          <p className="text-lg mb-4">
            Embark on a chilling journey through a snow-covered landscape...
          </p>
          <img
            src="/a-winter-haunting-banner.png"
            alt="A Winter Haunting"
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default AWinterHaunting;