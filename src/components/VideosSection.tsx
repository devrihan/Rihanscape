import React from 'react';

// Import local video thumbnails
import videoThumb1 from '../assets/videos/video1.jpg';


// Optional: Import actual video files if needed
import video1 from '../assets/videos/video1.mp4';


const videos = [
  { thumbnail: videoThumb1, title: 'Pondi', duration: '0.07', views: '1.2k', video: video1 }
];

const VideosSection = () => {
  return (
    <section id="videos" className="min-h-screen bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Video Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative flex-none w-full aspect-video group"
            >
              <div className="relative h-full rounded-xl overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 flex items-center justify-center rounded-full bg-violet-600/90 text-white transform transition-all duration-300 group-hover:scale-110 group-hover:bg-violet-600 shadow-[0_0_25px_rgba(124,58,237,0.5)]">
                      ▶
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-300">
                      {video.duration} • {video.views} views
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
