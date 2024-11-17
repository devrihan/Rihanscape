import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

// Define the track type
type Track = {
  title: string;
  artist: string;
  duration: string;
  cover: string;
  mp3: string;
};

// Tracks array with correct types
const tracks: Track[] = [
  {
    title: "Laare Choote Mashup",
    artist: "Call Band",
    duration: "1.18",
    cover: "https://cdns-images.dzcdn.net/images/cover/38db9d1f4e61e2589947f174e1b501fb/0x1900-000000-80-0-0.jpg",
    mp3: "src/assets/music/track1.mp3",
  },
  {
    title: "O re Piya(Acoustic)",
    artist: "RFAK",
    duration: "1.13",
    cover: "https://i1.sndcdn.com/artworks-kS3flCYoJ1Q7QuTO-CvSDyw-t500x500.jpg",
    mp3: "src/assets/music/track2.mp3",
  },
  {
    title: "90s Mashup",
    artist: "Hemanr and Kishore Kumar",
    duration: "1.22",
    cover: "https://www.beyoung.in/beyoungistan/wp-content/uploads/2021/09/haal-kaisa-hai-janab-ka-1024x709.jpg",
    mp3: "src/assets/music/track3.mp3",
  },
  {
    title: "O re Piya Karaoke",
    artist: "RFAK",
    duration: "1.13",
    cover: "https://c.saavncdn.com/319/O-Re-Piya-Lofi-Hindi-2022-20220808120051-500x500.jpg",
    mp3: "src/assets/music/track4.mp3",
  },
  {
    title: "Jo tu na mila",
    artist: "Asim Azhar",
    duration: "1.13",
    cover: "https://pbs.twimg.com/media/DsIn50_WkAAz6fB.jpg",
    mp3: "src/assets/music/track5.mp3",
  }
];

const AllMusic = () => {
  const [playing, setPlaying] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  const handlePlayPause = (index: number) => {
    if (playing === index) {
      audioRef.current?.pause();
      setPlaying(null);
    } else {
      if (audioRef.current) {
        audioRef.current.src = tracks[index].mp3; // Correctly typed
        audioRef.current.play();
      }
      setPlaying(index);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (event: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current && progressBarRef.current) {
      const progressBarWidth = progressBarRef.current.offsetWidth;
      const clickX = event.nativeEvent.offsetX;
      const newTime = (clickX / progressBarWidth) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black pt-24 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
          All Music
        </h1>

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

                <div className="text-gray-400">{track.duration}</div>
              </div>

              {playing === index && (
                <div
                  ref={progressBarRef}
                  className="relative h-3 bg-violet-900 rounded-full cursor-pointer"
                  onClick={handleSeek}
                >
                  <div
                    className="h-full bg-violet-400 rounded-full transition-all"
                    style={{
                      width: `${(currentTime / duration) * 100}%`,
                    }}
                  />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-violet-600 border-2 border-white shadow-md rounded-full"
                    style={{
                      left: `${(currentTime / duration) * 100}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
    </div>
  );
};

export default AllMusic;
