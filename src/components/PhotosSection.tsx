import React from 'react';
import { Upload, Filter } from 'lucide-react';

const photos = [
  'https://drive.google.com/file/d/1RhtWrFd7MUa299Zby7K6U2-OxpZDIrS-/view',
  'https://images.unsplash.com/photo-1707343848552-893e05dca4d1?q=80&w=2940',
  'https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?q=80&w=2940',
  'https://images.unsplash.com/photo-1682686580024-580519d4b2d2?q=80&w=2940',
  'https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=2940',
  'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2940',
];

const PhotosSection = () => {
  return (
    <section id="photos" className="min-h-screen bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-0">
            Photo Gallery
          </h2>
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-all duration-300 shadow-[0_0_15px_rgba(124,58,237,0.5)] hover:shadow-[0_0_25px_rgba(124,58,237,0.6)]">
              <Upload size={20} />
              <span>Upload Photos</span>
            </button>
            <button className="flex items-center space-x-2 px-6 py-3 border border-violet-400/30 text-violet-300 rounded-lg hover:bg-violet-950/50 transition-all duration-300">
              <Filter size={20} />
              <span>Filter</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl bg-violet-950/20"
            >
              <img
                src={photo}
                alt={`Gallery item ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-lg font-semibold">Photo Title</h3>
                  <p className="text-gray-300 text-sm">Category • Date</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotosSection;