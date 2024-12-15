import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold">Recipedia</div>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-gray-700 hover:text-gray-900">Home</a></li>
          <li><a href="/recipe" className="text-gray-700 hover:text-gray-900">Recipe</a></li>
          <li><a href="/community" className="text-gray-700 hover:text-gray-900">Community</a></li>
          <li><a href="/about" className="text-gray-700 hover:text-gray-900">About Us</a></li>
        </ul>
        <div className="flex space-x-4">
          <button className="text-gray-700 hover:text-gray-900">Search</button>
          <button className="text-gray-700 hover:text-gray-900">Profile</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
