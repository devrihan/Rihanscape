
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Import local photo assets
import photo1 from '../assets/images/photo1.jpg';
import photo2 from '../assets/images/photo2.jpg';
import photo3 from '../assets/images/photo3.jpg';
import photo4 from '../assets/images/photo4.jpg';
import photo5 from '../assets/images/photo5.jpg';
import photo6 from '../assets/images/photo6.jpg';
import photo7 from '../assets/images/photo7.jpg';
import photo8 from '../assets/images/photo8.jpg';
import photo9 from '../assets/images/photo9.jpg';
import photo10 from '../assets/images/photo10.jpg';
import photo11 from '../assets/images/photo11.jpg';
import photo12 from '../assets/images/photo12.jpg';
import photo13 from '../assets/images/photo13.jpg';
import photo14 from '../assets/images/photo14.jpg';
import photo15 from '../assets/images/photo15.jpg';
import photo16 from '../assets/images/photo16.jpg';
import photo17 from '../assets/images/photo17.jpg';
import photo18 from '../assets/images/photo18.jpg';
import photo19 from '../assets/images/photo19.jpg';
import photo20 from '../assets/images/photo20.jpg';
import photo21 from '../assets/images/photo21.jpg';
import photo22 from '../assets/images/photo22.jpg';

// Photo metadata array
const photos = [
  { src: photo1, title: 'Laughing Buddha', description: 'Joy is the simplest form of gratitude.' },
  { src: photo2, title: 'Silhouette of Solitude', description: 'Even the crow finds beauty in the fading sun.' },
  { src: photo3, title: 'Drift of Dreams', description: 'A boat journey mirrors life' },
  { src: photo4, title: 'Voice of the Soul', description: 'A great singer doesn’t just perform; they touch hearts and echo emotions' },
  { src: photo5, title: 'Golden Horizon', description: 'Every sunset is a whisper of hope for a new dawn.' },
  { src: photo6, title: 'Light of Enlightenment', description: 'Peace comes from within. Do not seek it without.' },
  { src: photo7, title: 'A Reflection in Ink', description: 'In every line, a piece of my story unfolds.' },
  { src: photo8, title: 'The Light within', description: 'Hope is the spark that ignites the courage to move forward' },
  { src: photo9, title: 'Radiant Shield', description: 'Even in the darkest of times, a new wave of light guides the way' },
  { src: photo10, title: 'Whispers of Life', description: 'Like a leaf, life grows, changes, and finds beauty in every season' },
  { src: photo11, title: 'Shadow of the Dark Side', description: 'Even in the light, the darkness finds its place.' },
  { src: photo12, title: 'Strings of Expression', description: 'The guitar sings what words cannot express' },
  { src: photo13, title: 'Wings of Imagination', description: 'A book opens the mind, and an airplane takes it to new heights.' },
  { src: photo14, title: 'Sizzle of Creativity', description: 'In the pan, simple ingredients transform into a masterpiece' },
  { src: photo15, title: 'Through My Lens', description: 'Capturing moments, one click at a time.' },
  { src: photo16, title: 'Power of Knowledge', description: 'A hand that holds a book holds the key to endless worlds' },
  { src: photo17, title: 'Chasing the Horizon', description: 'In the fading light, we find the strength to move forward' },
  { src: photo18, title: 'Silent Glow', description: 'The moon whispers secrets to those who listen in the quiet night.' },
  { src: photo19, title: 'Captured Moments', description: ' I freeze time and tell untold stories.' },
  { src: photo20, title: 'Harbor of Dreams', description: 'The shore whispers to the boat, calling it to sail once more.' },
  { src: photo21, title: 'The Silent Wait', description: 'A fisherman knows that patience is as important as the catch' },
  { src: photo22, title: 'Anchored in Tranquility', description: 'A boat at the shore waits for the call of the open sea.' }
];

const AllPhotos = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  // Navigate to photo detail page
  const handlePhotoClick = (photo: { src: string; title: string; description: string }) => {
    navigate('/photo', { state: photo });
  };

  return (
    <div className="min-h-screen bg-black pt-24 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">All Photos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl bg-violet-950/20 cursor-pointer"
              onClick={() => handlePhotoClick(photo)}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-lg font-semibold">{photo.title}</h3>
                  <p className="text-gray-300 text-sm">{photo.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPhotos;
