import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 text-white bg-gray-900 border-t border-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-3">
          {/* Logo and Name */}
          <div className="flex items-center justify-center space-x-3 md:justify-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600">
              <span className="text-xl font-bold text-white">🕉</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text">
                Siddhi Vinayaka Yuva Samithi
              </h3>
              <p className="text-sm text-gray-400">Celebrating Vinayaka Chavithi - 2025</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="flex items-center justify-center text-gray-400">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" /> for our community
            </p>
            <p className="mt-1 text-sm text-gray-500">
              © {new Date().getFullYear()} Siddhi Vinayaka Yuva Samiti. All rights reserved.
            </p>
          </div>

          {/* Additional Info */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              Building bridges through devotion
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Unity • Faith • Celebration
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


