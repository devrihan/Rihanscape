
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { Music, Image, Video, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('photos');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Link to Home */}
          <div className="flex items-center">
            <Link to="/" className="px-8 py-3 bg-white bg-opacity-20 text-white rounded-lg backdrop-blur-lg hover:bg-white hover:text-violet-950 transition-all duration-300 shadow-lg">
            Rihanscape
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8 ">
              {[{ id: 'photos', icon: Image, label: 'Photos', to: '/photos' },
                { id: 'videos', icon: Video, label: 'Videos', to: '/videos' },
                { id: 'music', icon: Music, label: 'Music', to: '/music' }]
                .map(({ id, icon: Icon, label, to }) => (
                  <Link
                    key={id}
                    to={to}
                    onClick={() => handleLinkClick(id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300
                      ${activeSection === id 
                        ? 'text-violet-400 bg-violet-950/50 shadow-[0_0_15px_rgba(167,139,250,0.3)]' 
                        : 'text-gray-300 hover:text-violet-400 hover:bg-violet-950/30'}`}
                  >
                    <Icon size={18} />
                    <span>{label}</span>
                  </Link>
                ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-violet-400 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[{ id: 'photos', icon: Image, label: 'Photos', to: '/photos' },
              { id: 'videos', icon: Video, label: 'Videos', to: '/videos' },
              { id: 'music', icon: Music, label: 'Music', to: '/music' }]
              .map(({ id, icon: Icon, label, to }) => (
                <Link
                  key={id}
                  to={to}
                  onClick={() => handleLinkClick(id)}
                  className={`flex items-center space-x-2 w-full px-4 py-3 rounded-lg transition-all duration-300
                    ${activeSection === id 
                      ? 'text-violet-400 bg-violet-950/50 shadow-[0_0_15px_rgba(167,139,250,0.3)]' 
                      : 'text-gray-300 hover:text-violet-400 hover:bg-violet-950/30'}`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </Link>
              ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
