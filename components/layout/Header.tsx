import React from 'react';

const Header: React.FC = () => {
  const accommodationTypes = [
    'Rooms',
    'Mansion',
    'Countryside',
    'Villa',
    'Apartment',
    'Lodge',
    'Chalet'
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        {/* Top row with logo and auth buttons */}
        <div className="flex justify-between items-center mb-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">ALX Listing</h1>
          </div>

          {/* Auth buttons */}
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              Sign In
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Sign Up
            </button>
          </div>
        </div>

        {/* Search bar */}
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for properties..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Accommodation types */}
        <div className="flex flex-wrap gap-2">
          {accommodationTypes.map((type) => (
            <button
              key={type}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-full hover:bg-gray-100 hover:text-gray-800 transition-colors"
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;