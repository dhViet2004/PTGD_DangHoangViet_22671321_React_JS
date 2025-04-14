// components/Header.jsx
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Header = () => {
  return (
    <header 
      className="relative h-[800px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/images/backgroundBanner.png')" }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content - now aligned to left */}
      <div className="relative z-10 text-white px-8 md:px-16 lg:px-24 w-full max-w-3xl">
        {/* Recipe of the Day Label - now left-aligned */}
        <div className="text-left mb-4">
          <span className="bg-yellow-500 text-black text-sm font-semibold py-1 px-3 rounded">
            Recipe of the Day
          </span>
        </div>

        {/* Main Title - left-aligned */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-left">Salad Caprese</h1>

        {/* Description - left-aligned */}
        <p className="text-lg md:text-xl mb-6 text-left">
          Classic Italian Salad Caprese—ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.
        </p>

        {/* CTA Button - left-aligned */}
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full flex items-center gap-2 transition-colors text-left">
          View now
          <FaArrowRight className="text-xl" />
        </button>
      </div>
    </header>
  );
};

export default Header;