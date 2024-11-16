import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, ArrowRight } from 'lucide-react';

// Import video thumbnails
import video1 from '../assets/videos/video1.jpg';

const VideosPreview = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollPosRef = useRef(0);
  const intervalRef = useRef<number>();

  const videoThumbnails = [video1];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const container = containerRef.current;
    if (!scrollContainer || !container) return;

    // Clone videos for smooth infinite scroll
    const originalVideos = container.children;
    [...originalVideos].forEach(video => {
      const clone = video.cloneNode(true) as HTMLElement;
      container.appendChild(clone);
    });

    const scroll = () => {
      if (!scrollContainer || !container) return;

      scrollPosRef.current += 0.5; // Adjust speed here
      scrollContainer.scrollLeft = scrollPosRef.current;

      // Reset scroll position when reaching half of the content
      if (scrollPosRef.current >= container.clientWidth / 2) {
        scrollPosRef.current = 0;
        scrollContainer.scrollLeft = 0;
      }
    };

    intervalRef.current = window.setInterval(scroll, 16); // ~60fps for smooth animation

    const handleMouseEnter = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };

    const handleMouseLeave = () => {
      scrollPosRef.current = scrollContainer.scrollLeft;
      intervalRef.current = window.setInterval(scroll, 16);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="videos" className="min-h-screen bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Video Gallery
        </h2>

        <div className="relative mb-12">
          <div ref={scrollRef} className="flex overflow-x-hidden">
            <div ref={containerRef} className="flex space-x-6">
              {videoThumbnails.map((video, index) => (
                <div
                  key={index}
                  className="relative flex-none w-full md:w-[600px] aspect-video group"
                >
                  <div className="relative h-full rounded-xl overflow-hidden">
                    <img
                      src={video}
                      alt={`Video thumbnail ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-16 h-16 flex items-center justify-center rounded-full bg-violet-600/90 text-white transform transition-all duration-300 group-hover:scale-110 group-hover:bg-violet-600 shadow-[0_0_25px_rgba(124,58,237,0.5)]">
                          <Play size={32} className="ml-1" />
                        </button>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white text-xl font-semibold mb-2">
                          Video Title {index + 1}
                        </h3>
                        <p className="text-gray-300">Duration • Views</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => navigate('/videos')}
            className="group flex items-center space-x-2 px-8 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-all duration-300 shadow-[0_0_15px_rgba(124,58,237,0.5)] hover:shadow-[0_0_25px_rgba(124,58,237,0.6)]"
          >
            <span>Explore All Videos</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideosPreview;
