import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600">
      {/* Animated background bubbles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-white/10 ${
              i % 3 === 0 ? 'animate-float' : i % 3 === 1 ? 'animate-float-delayed' : 'animate-float-slow'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-4xl px-4 mx-auto text-center text-white sm:px-6 lg:px-8">
        {/* Lord Vinayaka image with animation */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            
            <div className="w-40 h-40 p-2 mx-auto rounded-full sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-orange-400 to-red-500 animate-pulse-slow">
              <img
                src="public/images/logo.jpg"
                alt="Lord Vinayaka"
                className="object-cover w-full h-full border-2 rounded-full border-white/30 "
              />
            </div>
            {/* Glowing effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400/30 to-red-500/30 animate-ping" style={{ animationDuration: '3s' }} />
          </div>
        </div>

        <h1 className="mb-6 text-4xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-6xl bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text animate-fade-in-up">
          Siddhi Vinayaka Yuva Samiti
        </h1>
        
        
        <p className="max-w-3xl mx-auto mb-12 text-blue-100 leadingg-relaxed text-l sm:text-xl md:text-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Celebrating the divine presence of Lord Ganesha with devotion, unity, and community spirit. 
          Join us in making this festival a memorable and blessed celebration.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 hover:scale-105 hover:shadow-xl"
          >
            Learn About Us
          </button>
          <button 
            onClick={() => document.getElementById('members')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 transform border rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 hover:scale-105 border-white/30"
          >
            Meet Our Team
          </button>
        </div>

       
      </div>
    </section>
  );
};

export default HeroSection;


