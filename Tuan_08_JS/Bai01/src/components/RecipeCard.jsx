// components/RecipeCard.jsx
import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const RecipeCard = ({ title, img, author, description, isEditorPick = false }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
      {/* Image */}
      <div className="relative">
        <img src={img} alt={title} className="w-full h-48 object-cover" />
        {/* Play Icon Overlay for Video Recipes */}
        {!isEditorPick && (
          <div className="absolute top-2 right-2 bg-white p-2 rounded-full">
            <FaPlayCircle className="text-pink-500 text-xl" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        {isEditorPick && (
          <>
            <p className="text-sm text-gray-600 mb-2">{description}</p>
            <p className="text-sm text-gray-500 font-medium">{author}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;