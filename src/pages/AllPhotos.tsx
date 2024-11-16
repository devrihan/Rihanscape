import React from 'react';
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

// Photo metadata array
const photos = [
  { src: photo1, title: 'Sunrise in the Mountains', description: 'A breathtaking view of the sunrise over the peaks.' },
  { src: photo2, title: 'Calm Forest', description: 'The serene beauty of the forest in the morning mist.' },
  { src: photo3, title: 'City Lights', description: 'A stunning capture of city lights at night.' },
  { src: photo4, title: 'Ocean Horizon', description: 'The endless view of the ocean meeting the sky.' },
  { src: photo5, title: 'Desert Mirage', description: 'The golden sands of the desert under the blazing sun.' },
  { src: photo6, title: 'Starry Night', description: 'A mesmerizing view of the star-studded sky.' },
  { src: photo7, title: 'Majestic Waterfall', description: 'The powerful and serene beauty of a waterfall.' },
  { src: photo8, title: 'Snowy Peaks', description: 'A stunning landscape of snow-covered mountain tops.' },
  { src: photo9, title: 'Golden Sunset', description: 'The warm hues of the sunset casting light on the waves.' },
  { src: photo10, title: 'Dense Jungle', description: 'A glimpse into the lush green jungle.' },
  { src: photo11, title: 'Rolling Hills', description: 'Beautiful green hills stretching into the horizon.' },
  { src: photo12, title: 'Lakeside Serenity', description: 'A calm and peaceful lake surrounded by trees.' },
  { src: photo13, title: 'Cityscape', description: 'A panoramic view of the bustling city skyline.' },
  { src: photo14, title: 'Flower Garden', description: 'An array of colorful flowers blooming in a garden.' },
  { src: photo15, title: 'Frozen Lake', description: 'A lake frozen in winter, reflecting the clear sky.' },
  { src: photo16, title: 'Rocky Coastline', description: 'Waves crashing against rugged rocks on the shore.' },
  { src: photo17, title: 'Rainy Day', description: 'Raindrops falling on a window, blurring the view outside.' },
  { src: photo18, title: 'Countryside Road', description: 'A peaceful road cutting through lush countryside.' },
];

const AllPhotos = () => {
  const navigate = useNavigate();

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
