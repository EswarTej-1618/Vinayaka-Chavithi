import React from 'react';
import HeroSection from '../components/HeroSection.jsx';
import AboutSection from '../components/AboutSection.jsx';
import MembersSection from '../components/MembersSection.jsx';
import ContactSection from '../components/ContactSection.jsx';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <MembersSection />
      <ContactSection />
    </main>
  );
};

export default Home;


