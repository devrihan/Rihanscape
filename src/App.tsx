import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AllPhotos from './pages/AllPhotos';
import PhotoDetail from './components/PhotoDetail'; // Import the PhotoDetail component
import AllVideos from './pages/AllVideos';
import AllMusic from './pages/AllMusic';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<AllPhotos />} />
          <Route path="/photo" element={<PhotoDetail />} /> {/* New PhotoDetail route */}
          <Route path="/videos" element={<AllVideos />} />
          <Route path="/music" element={<AllMusic />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
