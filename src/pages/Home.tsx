import React from 'react';
import Header from '../components/Header';
import PhotosPreview from '../components/PhotosPreview';
import VideosPreview from '../components/VideosPreview';
import MusicPreview from '../components/MusicPreview';

const Home = () => {
  return (
    <>
      <Header />
      <PhotosPreview />
      <VideosPreview />
      <MusicPreview />
    </>
  );
};

export default Home;