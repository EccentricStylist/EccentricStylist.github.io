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
    // <div className="min-h-screen w-full bg-white">
    <div
    className="min-h-screen w-full"
    style={{ backgroundColor: '#d9faf8',
        backgroundImage: `url('/images/awh-background.png')`, 
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover" 
     }}
  >
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
                    ? 'border-b-2 border-pink-500 text-white'
                    : 'text-gray-400 hover:text-pink-500'
                } inline-flex items-center px-1 pt-1 text-sm font-medium`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="w-full">
        <div className="px-4 py-6 max-w-7xl mx-auto sm:px-6 lg:px-8">
          {/* <h1 className="text-3xl font-bold mb-4">A Winter Haunting</h1>
          <p className="text-lg mb-4">
            Embark on a chilling journey through a snow-covered landscape...
          </p> */}
          {/* <img
            src="/images/awh-logo.png"
            alt="A Winter Haunting"
            className="mx-auto rounded-lg shadow-lg"
          /> */}
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default AWinterHaunting;
