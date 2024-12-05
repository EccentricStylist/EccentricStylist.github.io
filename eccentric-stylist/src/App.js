import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 px-4 w-full max-w-md mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative bg-white shadow-lg sm:rounded-3xl px-4 py-10 sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Welcome to My GitHub Pages Site</h1>
                <p className="text-sm sm:text-base">This is a simple React website deployed on GitHub Pages.</p>
                <ul className="list-disc space-y-2 pl-5 text-sm sm:text-base">
                  <li>Easy to create</li>
                  <li>Free hosting</li>
                  <li>Customizable</li>
                  <li>Mobile-friendly</li>
                </ul>
                <p className="text-sm sm:text-base">Start editing to make it your own!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;