import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, ArrowRight } from 'lucide-react';

const MembersSection = () => {
  return (
    <section id="members" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl">
            Our{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text">
              Community
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Meet the dedicated individuals who make our Vinayaka Festival possible and the generous sponsors who support our cause.
          </p>
        </div>

        <div className="grid max-w-4xl gap-8 mx-auto md:grid-cols-2">
          {/* Committee Members Card */}
          <div className="relative overflow-hidden transition-all duration-500 transform bg-white shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2">
            {/* Background gradient */}
            <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-blue-500 to-blue-700 group-hover:opacity-100" />
            
            {/* Content */}
            <div className="relative z-10 p-8">
              <div className="flex items-center justify-center w-16 h-16 mb-6 transition-all duration-300 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl group-hover:bg-white/20">
                <Users className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="mb-4 text-2xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-white">
                Committee Members
              </h3>
              
              <p className="mb-8 text-gray-600 transition-colors duration-300 group-hover:text-blue-100">
                Our dedicated team of organizers who work tirelessly to make every Vinayaka Chavithi festival memorable and meaningful.
              </p>

              <div className="mb-8 space-y-3">
                <div className="flex items-center text-gray-600 transition-colors duration-300 group-hover:text-blue-100">
                  <div className="w-2 h-2 mr-3 bg-blue-500 rounded-full group-hover:bg-white" />
                  Organisers
                </div>
                
               
              </div>

              <Link
                to="/committee-members"
                className="inline-flex items-center px-6 py-3 font-semibold text-white transition-all duration-300 transform bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105 group-hover:bg-white group-hover:text-blue-600"
              >
                View Members
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Decorative elements */}
            <div className="absolute w-20 h-20 transition-all duration-500 rounded-full top-4 right-4 bg-blue-500/10 group-hover:scale-150 group-hover:bg-white/10" />
            <div className="absolute w-12 h-12 transition-all duration-500 rounded-full bottom-4 left-4 bg-blue-500/10 group-hover:scale-150 group-hover:bg-white/10" style={{ transitionDelay: '0.1s' }} />
          </div>

          {/* Sponsors Card */}
          <div className="relative overflow-hidden transition-all duration-500 transform bg-white shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2">
            {/* Background gradient */}
            <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-orange-500 to-red-600 group-hover:opacity-100" />
            
            {/* Content */}
            <div className="relative z-10 p-8">
              <div className="flex items-center justify-center w-16 h-16 mb-6 transition-all duration-300 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl group-hover:bg-white/20">
                <Heart className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="mb-4 text-2xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-white">
                Our Sponsors
              </h3>
              
              <p className="mb-8 text-gray-600 transition-colors duration-300 group-hover:text-orange-100">
                Generous  individuals who support our festival and help us create unforgettable celebrations.
              </p>

              <div className="mb-8 space-y-3">
                <div className="flex items-center text-gray-600 transition-colors duration-300 group-hover:text-orange-100">
                  <div className="w-2 h-2 mr-3 bg-orange-500 rounded-full group-hover:bg-white" />
                   Sponsors
                </div>
               
              </div>

              <Link
                to="/sponsors"
                className="inline-flex items-center px-6 py-3 font-semibold text-white transition-all duration-300 transform bg-orange-600 rounded-full hover:bg-orange-700 hover:scale-105 group-hover:bg-white group-hover:text-orange-600"
              >
                View Sponsors
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Decorative elements */}
            <div className="absolute w-20 h-20 transition-all duration-500 rounded-full top-4 right-4 bg-orange-500/10 group-hover:scale-150 group-hover:bg-white/10" />
            <div className="absolute w-12 h-12 transition-all duration-500 rounded-full bottom-4 left-4 bg-orange-500/10 group-hover:scale-150 group-hover:bg-white/10" style={{ transitionDelay: '0.1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembersSection;


