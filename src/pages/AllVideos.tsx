import React, { useState,useEffect } from 'react';

// Import local video thumbnails
// Import local video thumbnails
import videoThumb1 from '../assets/videos/video1.jpg';
import videoThumb2 from '../assets/videos/video2.jpg';
import videoThumb3 from '../assets/videos/video3.jpg';
import videoThumb4 from '../assets/videos/video4.jpg';
import videoThumb5 from '../assets/videos/video5.jpg';
import videoThumb6 from '../assets/videos/video6.jpg';
import videoThumb7 from '../assets/videos/video7.jpg';
import videoThumb8 from '../assets/videos/video8.jpg';
import videoThumb9 from '../assets/videos/video9.jpg';



import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';
import video3 from '../assets/videos/video3.mp4';
import video4 from '../assets/videos/video4.mp4';
import video5 from '../assets/videos/video5.mp4';
import video6 from '../assets/videos/video6.mp4';
import video7 from '../assets/videos/video7.mp4';
import video8 from '../assets/videos/video8.mp4';
import video9 from '../assets/videos/video9.mp4';



const videos = [
  { thumbnail: videoThumb1, title: 'City of Joy!', duration: '0.07', views: '1.2k', video: video1 },
  { thumbnail: videoThumb2, title: 'Self Realisation', duration: '0.07', views: '1.2k', video: video2 },
  { thumbnail: videoThumb3, title: 'Quite moments', duration: '0.07', views: '1.2k', video: video3 },
  { thumbnail: videoThumb4, title: 'Vellore Diaries', duration: '0.07', views: '1.2k', video: video4 },
  { thumbnail: videoThumb5, title: 'Go with the flow', duration: '0.07', views: '1.2k', video: video5 },
  { thumbnail: videoThumb6, title: 'Life goes on', duration: '0.07', views: '1.2k', video: video6 },
  { thumbnail: videoThumb7, title: 'Still frames', duration: '0.07', views: '1.2k', video: video7 },
  { thumbnail: videoThumb8, title: 'TamskiNilu', duration: '0.07', views: '1.2k', video: video8 },
  { thumbnail: videoThumb9, title: 'TwinCity Aesthetics', duration: '0.07', views: '1.2k', video: video9 }
];


const VideosSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

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
              <div
                className="relative h-full rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedVideo(video.video)} // Set selected video
              >
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
            onClick={handleCloseModal} // Close modal on background click
          >
            <div
              className="relative bg-black rounded-lg overflow-hidden max-w-3xl w-full h-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
            >
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-auto rounded-lg"
              >
                Your browser does not support the video tag.
              </video>
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-lg shadow hover:bg-red-700 transition duration-300"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideosSection;
