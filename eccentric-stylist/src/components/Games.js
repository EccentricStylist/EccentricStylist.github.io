import React from 'react';
import { Link } from 'react-router-dom';

function Games() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Games</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/games/a-winter-haunting" className="block">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img 
              src="/images/AWH/awh-banner.png" 
              alt="A Winter Haunting - A spooky winter adventure game" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">A Winter Haunting</h2>
              <p className="text-gray-600">Uncover the story behind a vengeful spirit in this atmospheric game.</p>
            </div>
          </div>
        </Link>
        {/* Add more game cards here */}
      </div>
    </div>
  );
}

export default Games;