import React from 'react';
import { Crown, Star, Heart, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 

const Sponsors = () => {
  const navigate = useNavigate(); 

  const goldSponsors = [
    {
      id: 1,
      name: 'Sai Teja',
      image: 'public/images/sponsors.jpeg',
      description: 'May Ganesh bless every friend who stands by us with joy and unity.',
      icon: Star,
      certificate: 'sai-teja.pdf', 
    },
    {
      id: 2,
      name: 'Sai Chaitanya',
      image: 'public/images/sponsors.jpeg',
      description: 'May Ganesh bless every friend who stands by us with joy and unity.',
      icon: Star,
      certificate: 'sai-chaitanya.pdf',
    },
    {
      id: 3,
      name: 'Harishchandra Prasad',
      image: 'public/images/sponsors.jpeg',
      description: 'May Ganesh bless every friend who stands by us with joy and unity.',
      icon: Star,
      certificate: 'harishchandra-prasad.pdf',
    },
    {
      id: 4,
      name: 'Dhareneeswar Reddy',
      image: 'public/images/sponsors.jpeg',
      description: 'May Ganesh bless every friend who stands by us with joy and unity.',
      icon: Star,
      certificate: 'dhareneeswar-reddy.pdf',
    },
    {
      id: 5,
      name: 'Saharsha Raghuvardhan',
      image: 'public/images/sponsors.jpeg',
      description: 'May Ganesh bless every friend who stands by us with joy and unity.',
      icon: Star,
      certificate: 'saharsha-raghuvardhan.pdf',
    },
    {
      id: 6,
      name: 'K.M.S Manikanta',
      image: 'public/images/sponsors.jpeg',
      description: 'May Ganesh bless every friend who stands by us with joy and unity.',
      icon: Star,
      certificate: 'kms-manikanta.pdf',
    },
    {
      id: 7,
      name: 'Jagadeesh',
      image: 'public/images/sponsors.jpeg',
      description: 'May Ganesh bless every friend who stands by us with joy and unity.',
      icon: Star,
      certificate: 'jagadeesh.pdf',
    },
    {
      id: 8,
      name: 'Balavardhan',
      image: 'public/images/sponsors.jpeg',
      description: 'May Ganesh bless every friend who stands by us with joy and unity.',
      icon: Star,
      certificate: 'balavardhan.pdf',
    },
    {
      id: 9,
      name: 'Madhu',
      image: 'public/images/sponsors.jpeg',
      description: 'May Ganesh bless every friend who stands by us with joy and unity.',
      icon: Star,
      certificate: 'madhu.pdf',
    },
    {
      id: 10,
      name: 'Leela Manohar',
      image: 'public/images/sponsors.jpeg',
      description: 'May Ganesh bless every friend who stands by us with joy and unity.',
      icon: Star,
      certificate: 'leela-manohar.pdf',
    },
    {
      id: 11,
      name: 'Gagan',
      image: 'public/images/sponsors.jpeg',
      description: 'May Ganesh bless every friend who stands by us with joy and unity.',
      icon: Star,
      certificate: 'gagan.pdf',
    },
    {
      id: 12,
      name: 'Yaswanth Reddy',
      image: 'public/images/sponsors.jpeg',
      description: 'May Ganesh bless every friend who stands by us with joy and unity.',
      icon: Star,
      certificate: 'yaswanth-reddy.pdf',
    },
  ];

  const SponsorCard = ({ sponsor, isPlatinum = false, isGold = false }) => {
    const Icon = sponsor.icon;
    let gradientClass = 'from-orange-500 to-red-600';
    let bgClass = 'bg-orange-500/10';
    
    if (isPlatinum) {
      gradientClass = 'from-purple-600 to-blue-600';
      bgClass = 'bg-purple-500/10';
    } else if (isGold) {
      gradientClass = 'from-yellow-500 to-orange-600';
      bgClass = 'bg-yellow-500/10';
    }

    // ✅ Download logic
    const handleDownload = () => {
      if (sponsor.certificate) {
        const link = document.createElement('a');
        link.href = `/certificates/${sponsor.certificate}`;
        link.download = sponsor.certificate;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        alert("Certificate not available");
      }
    };

    return (
      <div className="relative overflow-hidden transition-all duration-500 transform bg-white shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2">
        {/* Background gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        <div className="relative z-10 p-6">
          {/* Sponsor Image */}
          <div className="relative mb-6">
            <img
              src={sponsor.image}
              alt={sponsor.name}
              className="object-cover w-full h-32 mb-4 rounded-lg"
            />
            <div className={`absolute -bottom-2 right-4 w-10 h-10 bg-gradient-to-br ${gradientClass} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Sponsor Info */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-800 transition-colors duration-300 group-hover:text-white">
                {sponsor.name}
              </h3>
            </div>
            
            <p className="mb-4 text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-100">
              {sponsor.description}
            </p>

            {/* Sponsor Details */}
            <div className="mb-6 space-y-2">
              {/* Optional contribution field */}
            </div>

            {/* ✅ Updated Sponsor Tag Button with download logic */}
            <button
              onClick={handleDownload}
              className={`w-full py-2 px-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                isPlatinum 
                  ? 'bg-purple-600 text-white hover:bg-purple-700 group-hover:bg-white group-hover:text-purple-600' :
                isGold
                  ? 'bg-yellow-600 text-white hover:bg-yellow-700 group-hover:bg-white group-hover:text-yellow-600'
                  : 'bg-orange-600 text-white hover:bg-orange-700 group-hover:bg-white group-hover:text-orange-600'
              }`}
            >
              {"Download Certificate"}
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className={`absolute top-4 right-4 w-16 h-16 ${bgClass} rounded-full group-hover:scale-150 group-hover:bg-white/10 transition-all duration-500`} />
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Back to Home */}
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate('/')}
            aria-label="Back to Home"
            className="inline-flex items-center px-4 py-2 text-blue-700 transition-all duration-200 bg-white rounded-full shadow hover:shadow-md hover:bg-blue-50"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 mr-2 rounded-full bg-gradient-to-br from-blue-600 to-orange-600">
              <ArrowLeft className="w-4 h-4 text-white" />
            </span>
            <span className="font-semibold">Back to Home</span>
          </button>
        </div>
        {/* Page Header */}
        <div className="mb-20 text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl">
            Our{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text">
              Sponsors
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-600 text-l">
            We are grateful to our generous sponsors and partners who make our Vinayaka Chavithi 
            celebrations possible through their unwavering support and commitment.
          </p>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {goldSponsors.map((sponsor) => (
              <SponsorCard key={sponsor.id} sponsor={sponsor} isGold={true} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="p-12 mt-20 text-center text-white bg-gradient-to-r from-blue-600 to-orange-600 rounded-2xl">
          <h3 className="mb-4 text-3xl font-bold">Become a Sponsor</h3>
          <p className="mb-8 text-xl opacity-90">
            Join our family of sponsors and help us create unforgettable celebrations for our community
          </p>
          <button 
            onClick={() => navigate('/')} // ✅ Navigate to Home
            className="px-8 py-3 font-semibold text-blue-600 transition-all duration-300 transform bg-white rounded-full shadow-lg hover:bg-gray-100 hover:scale-105"
          >
            Contact Us to Sponsor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
