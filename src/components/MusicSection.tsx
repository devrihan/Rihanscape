import React from 'react';
import { Upload, Play, Pause, Volume2 } from 'lucide-react';

const tracks = [
  {
    title: 'Neon Dreams',
    artist: 'Violet Wave',
    duration: '3:45',
    cover: 'https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=2940',
  },
  {
    title: 'Midnight Echo',
    artist: 'Dark Pulse',
    duration: '4:20',
    cover: 'https://images.unsplash.com/photo-1707343848552-893e05dca4d1?q=80&w=2940',
  },
  {
    title: 'Crystal Silence',
    artist: 'Echo Valley',
    duration: '3:55',
    cover: 'https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?q=80&w=2940',
  },
];

const MusicSection = () => {
  const [playing, setPlaying] = React.useState<number | null>(null);

  return (
    <section id="music" className="min-h-screen bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-0">
            Music Covers
          </h2>
          <button className="flex items-center space-x-2 px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-all duration-300 shadow-[0_0_15px_rgba(124,58,237,0.5)] hover:shadow-[0_0_25px_rgba(124,58,237,0.6)]">
            <Upload size={20} />
            <span>Upload Music</span>
          </button>
        </div>

        <div className="space-y-6">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="group relative bg-violet-950/20 rounded-xl overflow-hidden hover:bg-violet-950/30 transition-all duration-300"
            >
              <div className="flex items-center p-4">
                <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                  <img
                    src={track.cover}
                    alt={track.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() => setPlaying(playing === index ? null : index)}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-all duration-300"
                  >
                    {playing === index ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white ml-1" />
                    )}
                  </button>
                </div>
                
                <div className="ml-6 flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                    {track.title}
                  </h3>
                  <p className="text-gray-400">{track.artist}</p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="hidden md:flex items-center space-x-2">
                    <Volume2 className="w-5 h-5 text-violet-400" />
                    <div className="w-24 h-1 bg-violet-900 rounded-full">
                      <div className="w-3/4 h-full bg-violet-400 rounded-full" />
                    </div>
                  </div>
                  <span className="text-gray-400">{track.duration}</span>
                </div>
              </div>

              {playing === index && (
                <div className="h-1 bg-violet-900">
                  <div className="h-full bg-violet-400 w-1/3 animate-progress" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;