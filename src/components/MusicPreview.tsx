import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Pause, Volume2, ArrowRight } from 'lucide-react';

// Import MP3 files from the assets/music folder
import track1 from '../assets/music/track1.mp3';
import track2 from '../assets/music/track2.mp3';

const tracks = [
  {
    title: 'Laare Choote Mashup',
    artist: 'Call Band',
    duration: '1:18',
    cover: 'https://cdns-images.dzcdn.net/images/cover/38db9d1f4e61e2589947f174e1b501fb/0x1900-000000-80-0-0.jpg',
    src: track1,  // MP3 file path
  },
  {
    title: 'O re Piya(Acoustic)',
    artist: 'Rahat Fateh Ali Khan',
    duration: '1:13',
    cover: 'https://i1.sndcdn.com/artworks-kS3flCYoJ1Q7QuTO-CvSDyw-t500x500.jpg',
    src: track2,  // MP3 file path
  },
];

const MusicPreview = () => {
  const navigate = useNavigate();
  const [playing, setPlaying] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState<number[]>(new Array(tracks.length).fill(0));
  const [duration, setDuration] = useState<number[]>(new Array(tracks.length).fill(0));
  const [isSeeking, setIsSeeking] = useState<boolean>(false); // To handle seeking behavior

  const audioRefs = useRef<(HTMLAudioElement | null)[]>(new Array(tracks.length).fill(null));
  const progressBarRefs = useRef<(HTMLDivElement | null)[]>(new Array(tracks.length).fill(null));

  const handlePlayPause = (index: number) => {
    if (playing === index) {
      audioRefs.current[index]?.pause();
      setPlaying(null);
    } else {
      if (audioRefs.current[index]) {
        audioRefs.current[index]!.src = tracks[index].src;
        audioRefs.current[index]!.play();
      }
      setPlaying(index);
    }
  };

  const handleTimeUpdate = (index: number) => {
    if (audioRefs.current[index] && !isSeeking) {
      const updatedCurrentTime = [...currentTime];
      updatedCurrentTime[index] = audioRefs.current[index]!.currentTime;
      setCurrentTime(updatedCurrentTime);
    }
  };

  const handleLoadedMetadata = (index: number) => {
    if (audioRefs.current[index]) {
      const updatedDuration = [...duration];
      updatedDuration[index] = audioRefs.current[index]!.duration;
      setDuration(updatedDuration);
    }
  };

  const handleSeek = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (audioRefs.current[index] && progressBarRefs.current[index]) {
      const progressBarWidth = progressBarRefs.current[index]!.offsetWidth;
      const clickX = event.nativeEvent.offsetX;
      const newTime = (clickX / progressBarWidth) * duration[index];
      audioRefs.current[index]!.currentTime = newTime;
      const updatedCurrentTime = [...currentTime];
      updatedCurrentTime[index] = newTime;
      setCurrentTime(updatedCurrentTime);
    }
  };

  const handleSeekStart = () => setIsSeeking(true);
  const handleSeekEnd = () => setIsSeeking(false);

  useEffect(() => {
    return () => {
      audioRefs.current.forEach((audioRef) => {
        if (audioRef) audioRef.pause();
      });
    };
  }, []);

  useEffect(() => {
    // Reset currentTime for all songs when playing changes
    if (playing === null) {
      setCurrentTime(new Array(tracks.length).fill(0));
    }
  }, [playing]);

  return (
    <section id="music" className="min-h-screen bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Music Covers
        </h2>

        <div className="space-y-6 mb-12">
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
                    onClick={() => handlePlayPause(index)}
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

              {/* Interactive Progress Bar */}
              <div
                ref={(el) => (progressBarRefs.current[index] = el)}
                className="w-full bg-violet-900 rounded-full h-3 mt-4 relative cursor-pointer"
                onClick={(event) => handleSeek(event, index)}
                onMouseDown={handleSeekStart}
                onMouseUp={handleSeekEnd}
                onMouseLeave={handleSeekEnd}
              >
                {/* Progress Track */}
                <div
                  className="h-full bg-violet-400 rounded-full"
                  style={{
                    width: `${(currentTime[index] / duration[index]) * 100}%`,
                  }}
                />

                {/* Progress Bead/Knob */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-violet-600 border-2 border-white shadow-md rounded-full"
                  style={{
                    left: `${(currentTime[index] / duration[index]) * 100}%`,
                    transform: `translate(-50%, -50%)`,
                  }}
                />
              </div>


              {/* Audio player with event handlers */}
              <audio
                ref={(el) => (audioRefs.current[index] = el)}
                onTimeUpdate={() => handleTimeUpdate(index)}
                onLoadedMetadata={() => handleLoadedMetadata(index)}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => navigate('/music')}
            className="group flex items-center space-x-2 px-8 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-all duration-300 shadow-[0_0_15px_rgba(124,58,237,0.5)] hover:shadow-[0_0_25px_rgba(124,58,237,0.6)]"
          >
            <span>Explore All Music</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MusicPreview;
