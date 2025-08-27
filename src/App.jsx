import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Home from './pages/Home.jsx';
import CommitteeMembers from './pages/CommitteeMembers.jsx';
import Sponsors from './pages/Sponsors.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/committee-members" element={<CommitteeMembers />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


