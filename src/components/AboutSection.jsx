import React from 'react';
import { Heart, Users, Calendar, Award } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: 'Devotional Spirit',
      description: 'Celebrating Lord Ganesha with pure devotion and traditional rituals'
    },
    {
      icon: Users,
      title: 'Community Unity',
      description: 'Bringing together people from all walks of life in celebration'
    },
  
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="public/images/vinayaka.jpg"
                alt="Lord Vinayaka"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              {/* Decorative elements */}
              <div className="absolute w-24 h-24 rounded-full -top-6 -left-6 bg-gradient-to-br from-orange-400 to-red-500 opacity-20 animate-pulse" />
              <div className="absolute w-32 h-32 rounded-full -bottom-6 -right-6 bg-gradient-to-br from-blue-400 to-blue-600 opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl">
                About Our{' '}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text">
                  Committee
                </span>
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                The Vinayaka Chavithi Committee is a dedicated group of devotees committed to celebrating 
                the divine presence of Lord Ganesha.
              </p>
             <p className="mb-6 text-lg font-semibold leading-relaxed text-transparent bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text">
  Matti tho pratimanu chesi <br />
  Akulu pulu tho alankarana chesi <br />
  Neeti tho nimajjanam chesi <br />
  Ganesudu ante bomma kadu, Prakruti <br />
  Ide sanatana dharama goppatanam
</p>

              
             
            </div>

            {/* Features grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="p-6 transition-all duration-300 transform bg-white border border-gray-100 shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-blue-500 to-orange-500">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>

         
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


