import React from 'react';
import { useEffect } from 'react';
const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="flex flex-col items-center">
        <div className="loader border-t-transparent border-4 border-indigo-600 border-solid rounded-full w-16 h-16 animate-spin mb-4"></div>
        <p className="text-lg text-gray-700">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default Loading;
