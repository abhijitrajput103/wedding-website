import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Company Name */}
          <div className="text-xl font-bold text-rose-600">
            <a href="#home" > Mohit&Anu</a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#events" className="text-gray-700 hover:text-blue-600">Events</a>
            <a href="#gallery" className="text-gray-700 hover:text-blue-600">Gallery</a>
            <a href="#location" className="text-gray-700 hover:text-blue-600">Location</a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden mt-2 flex flex-col space-y-2 animate-fadeIn">
            <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#events" className="text-gray-700 hover:text-blue-600">Events</a>
            <a href="#gallery" className="text-gray-700 hover:text-blue-600">Gallery</a>
            <a href="#location" className="text-gray-700 hover:text-blue-600">Location</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
