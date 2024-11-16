import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PhotoDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { src, title, description } = location.state || {};

  if (!src) {
    // If no photo data is available, navigate back to the AllPhotos page
    navigate('/photos');
    return null;
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <img src={src} alt={title} className="w-full h-auto object-cover" />
        <div className="p-6 text-white">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-300">{description}</p>
          <button
            onClick={() => navigate('/photos')}
            className="mt-6 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition duration-300"
          >
            Back to Gallery
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetail;
