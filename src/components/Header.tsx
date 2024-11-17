
// // export default Header;
// import React, { useState } from 'react';
// import { Sparkles } from 'lucide-react';

// const Header = () => {
//   const [showGetStarted, setShowGetStarted] = useState(true);

//   const handleLearnMoreClick = () => {
//     // Open LinkedIn profile in a new tab
//     window.open('https://www.instagram.com/akhtar__rihan?igsh=dnYzeWg3dDRwMjls', '_blank'); // Replace with your LinkedIn URL
//     // Optionally, hide the "Get Started" page
//     // setShowGetStarted(false);
//   };

//   return (
//     <header className="relative h-screen flex items-center justify-center overflow-hidden">
//       {/* Background with gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-violet-950/80 via-black to-black" />

//       {/* Background image */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: 'url("https://wallpapers.com/images/hd/dream-art-j8thde6wjwdtmfa2.jpg")',
//           transform: 'scale(1.1)'
//         }}
//       />

//       {/* Content */}
//       <div className="relative z-10 text-center px-4">
//         <div className="flex items-center justify-center mb-6">
//           <Sparkles className="w-12 h-12 text-violet-400 animate-pulse" />
//         </div>
//         <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
//           Unleashing Creativity
//         </h1>
//         <p className="text-xl md:text-2xl text-violet-200 mb-8">
//           in Photos, Videos, and Music
//         </p>
//         <div className="flex items-center justify-center space-x-6">
//           {/* {showGetStarted && (
//             <button className="px-8 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-all duration-300 shadow-[0_0_15px_rgba(124,58,237,0.5)] hover:shadow-[0_0_25px_rgba(124,58,237,0.6)]">
//               Get Started
//             </button>
//           )} */}
//           <button 
//             onClick={handleLearnMoreClick} 
//             className="px-8 py-3 bg-white bg-opacity-20 text-white rounded-lg backdrop-blur-lg hover:bg-white hover:text-violet-950 transition-all duration-300 shadow-lg"
//           >
//             Learn More
//           </button>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="w-6 h-10 rounded-full border-2 border-violet-400/50 flex items-start justify-center p-2">
//           <div className="w-1 h-3 bg-violet-400 rounded-full animate-scroll" />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React from 'react';
import { Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Using react-router-dom for navigation

const Header = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    // Redirect to the about page
    navigate('/about');
  };

  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/80 via-black to-black" />

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://wallpapers.com/images/hd/dream-art-j8thde6wjwdtmfa2.jpg")',
          transform: 'scale(1.1)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="w-12 h-12 text-violet-400 animate-pulse" />
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Unleashing Creativity
        </h1>
        <p className="text-xl md:text-2xl text-violet-200 mb-8">
          in Photos, Videos, and Music
        </p>
        <div className="flex items-center justify-center space-x-6">
          <button
            onClick={handleLearnMoreClick}
            className="px-8 py-3 bg-white bg-opacity-20 text-white rounded-lg backdrop-blur-lg hover:bg-white hover:text-violet-950 transition-all duration-300 shadow-lg"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-violet-400/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-violet-400 rounded-full animate-scroll" />
        </div>
      </div>
    </header>
  );
};

export default Header;
