import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
    <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
    <p className="text-gray-600 mb-6 max-w-md">
      The page you are looking for does not exist.
    </p>
    <Link
      to="/"
      className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      aria-label="Go to Home Page"
    >
      Go to Home
    </Link>
  </div>
);

export default NotFound;
