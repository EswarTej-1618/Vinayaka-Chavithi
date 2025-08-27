import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 1234567891',
      link: 'tel:+911234567891'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'siddhivinayakayuvasamiti@gmail.com',
      link: 'siddhivinayakayuvasamiti@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: 'Boys Hostel',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', href: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, name: 'Instagram', href: '#', color: 'hover:text-pink-600' },
    { icon: Twitter, name: 'Twitter', href: '#', color: 'hover:text-blue-400' },
    { icon: Youtube, name: 'YouTube', href: '#', color: 'hover:text-red-600' }
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden text-white bg-gradient-to-br from-gray-900 to-blue-900">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-32 h-32 bg-orange-500 rounded-full top-20 left-20 animate-pulse" />
        <div className="absolute w-40 h-40 bg-blue-500 rounded-full bottom-20 right-20 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-60 h-60 bg-gradient-to-r from-orange-500 to-red-500 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Get In{' '}
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text">
              Touch
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            Have questions about our event? Want to  sponsor? We'd love to hear from you!
          </p>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left side - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-transform duration-300 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 group-hover:scale-110">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-white">{item.title}</h3>
                      <a 
                        href={item.link}
                        className="text-lg text-gray-300 transition-colors duration-300 hover:text-orange-400"
                      >
                        {item.details}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Media Links */}
            <div className="pt-8 border-t border-gray-700">
              <h3 className="mb-6 text-2xl font-semibold text-center lg:text-left">Follow Us</h3>
              <div className="flex justify-center space-x-6 lg:justify-start">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:bg-gray-700`}
                      aria-label={social.name}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="p-8 border bg-white/10 backdrop-blur-md rounded-2xl border-white/20">
            <h3 className="mb-6 text-2xl font-semibold text-center">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-300">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 text-white placeholder-gray-400 transition-all duration-300 border rounded-lg bg-white/10 border-white/20 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-300">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 text-white placeholder-gray-400 transition-all duration-300 border rounded-lg bg-white/10 border-white/20 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 text-white placeholder-gray-400 transition-all duration-300 border rounded-lg bg-white/10 border-white/20 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 text-white placeholder-gray-400 transition-all duration-300 border rounded-lg resize-none bg-white/10 border-white/20 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your message here..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 hover:scale-105 hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


