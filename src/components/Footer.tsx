import React from 'react';
import { Music2, Video, Image } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-violet-950">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-violet-400 font-bold text-xl mb-2">Rihanscape</h3>
            <p className="text-gray-400 max-w-md">
              Unleashing creativity through my photos, videos, and music.
            </p>
          </div>

          <div className="flex space-x-6">
            {[
              { icon: Music2, href: '/music', label: 'Music' },
              { icon: Video, href: '/videos', label: 'Video' },
              { icon: Image, href: '/photos', label: 'Photo' },
            ].map(({ icon: Icon, href, label }, index) => (
              <a
                key={index}
                href={href}
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-violet-400/30 text-violet-400 hover:bg-violet-950/50 hover:text-violet-300 hover:border-violet-400/50 transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-violet-950/50 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>&copy; Made with love @rihandev</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
