import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div className="flex items-center py-4 px-2">
                <Link to="/" className="font-semibold text-gray-500 text-lg">Eccentric Stylist</Link>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <Link to="/" className="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300">Home</Link>
                <Link to="/contact" className="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300">Contact</Link>
                <Link to="/about" className="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300">About</Link>
                <Link to="/games" className="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300">Games</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-6xl mx-auto mt-6 px-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

