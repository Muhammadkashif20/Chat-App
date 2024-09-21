import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 text-gray-800">
      <div className="flex flex-col items-center space-y-6">
        {/* 404 Title */}
        <h1 className="text-8xl font-bold tracking-wide">404</h1>

        {/* Subtext */}
        <p className="text-xl">Oops! The page you're looking for doesn't exist.</p>

        {/* Button with Subtle Hover Effect */}
        <a
          href="/"
          className="inline-block px-8 py-3 bg-indigo-600 text-white font-medium rounded-md transition-transform transform hover:scale-105 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
