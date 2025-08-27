import React from 'react';
import { 
  Crown, 
  Users, 
  Heart, 
  Star, 
  Calendar, 
  Award, 
  Camera, 
  BookOpen, 
  Music, 
  Truck, 
  ChefHat, 
  Paintbrush, 
  Laptop 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CommitteeMembers = () => {
  const navigate = useNavigate();
  const executiveMembers = [
    {
      id: 1,
      name: 'Jayadhar',
      role: 'Architect & Idol Creator',
      image: 'assets/images/jay.jpg',
      description: 'Your dedication brings Bappa’s blessings closer to us all.',
      icon: Crown, 
    },
    {
      id: 2,
      name: 'Dheeraj',
      role: 'Treasury & Lead',
      image: 'assets/images/dheeraj.jpg',
      description: 'Your spirit fuels our festive joy, thank you for being there.',
      icon: Award, 
    },
    {
      id: 3,
      name: 'Sai',
      role: 'Chef & Operations Lead',
      image: 'assets/images/sai.jpg',
      description: 'With your care and effort, the festival shines brighter.',
      icon: ChefHat, 
    },
    {
      id: 4,
      name: 'Hemanth Kumar',
      role: 'Priest & Leaf Collector',
      image: 'assets/images/hemanth.jpg',
      description: 'Thanks for lighting up our team with your warmth and help.',
      icon: BookOpen, 
    },
    {
      id: 5,
      name: 'Eswar Pavan Teja',
      role: 'Photography Lead',
      image: 'assets/images/eswar.jpg',
      description: 'Your helping hand is the heart of our celebration',
      icon: Camera, 
    },
    {
      id: 6,
      name: 'Sai Suresh',
      role: 'Logistics & Media Support',
      image: 'assets/images/suresh.jpg',
      description: 'Spreading joy, one smile at a time — thanks for being you!',
      icon: Truck, // Logistics → Truck
    },
    {
      id: 7,
      name: 'Uday Kiran',
      role: 'Creative Lead',
      image: 'assets/images/uday.jpg',
      description: 'Your unwavering support is the true gift of this festival',
      icon: Paintbrush, // Creative → Paintbrush
    },
    {
      id: 8,
      name: 'Raghu',
      role: 'Tech Lead',
      image: 'assets/images/raghu1.jpg',
      description: 'Your unwavering support is the true gift of this festival',
      icon: Laptop, // Tech → Laptop
    },
    {
      id: 9,
      name: 'Karthik',
      role: 'Decoration Lead',
      image: 'assets/images/karthik.jpg',
      description: 'Together, your support turns moments into memories.',
      icon: Star, // Decoration → Star
    },
    {
      id: 10,
      name: 'Sai Subhash',
      role: 'Pooja Dept',
      image: 'assets/images/subhash.jpg',
      description: 'Each act of support adds up to a beautiful celebration.',
      icon: BookOpen, // Pooja → BookOpen
    },
    {
      id: 11,
      name: 'Jaheer',
      role: 'Support Coordinator',
      image: 'assets/images/zaheer.jpg',
      description: 'Grateful for your love, laughter, and loyalty.',
      icon: Heart, // Support → Heart
    },
    {
      id: 12,
      name: 'Harishchandra Prasad',
      role: 'Sound Engineer',
      image: 'assets/images/ashok.jpg',
      description: 'With your love and effort, we make magic happen.',
      icon: Music, // Sound Engineer → Music
    }
  ];

  const MemberCard = ({ member, isExecutive = false }) => {
    const Icon = member.icon;
    return (
      <div className="relative overflow-hidden transition-all duration-500 transform bg-white shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2">
        {/* Background gradient overlay */}
        <div className={`absolute inset-0 ${isExecutive ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-orange-500 to-red-600'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        <div className="relative z-10 p-6">
          {/* Member Image */}
          <div className="relative mb-6">
            <img
              src={member.image}
              alt={member.name}
              className="object-cover w-24 h-24 mx-auto transition-all duration-300 border-4 border-gray-200 rounded-full group-hover:border-white"
            />
            <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 ${isExecutive ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-orange-500 to-red-600'} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Member Info */}
          <div className="text-center">
            <h3 className="mb-2 text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-white">
              {member.name}
            </h3>
            <p className={`text-sm font-semibold mb-3 ${isExecutive ? 'text-blue-600' : 'text-orange-600'} group-hover:text-yellow-300 transition-colors duration-300`}>
              {member.role}
            </p>
            <p className="mb-4 text-gray-600 transition-colors duration-300 group-hover:text-gray-100">
              {member.description}
            </p>

            {/* Role Button */}
            <button className={`w-full py-2 px-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              isExecutive 
                ? 'bg-blue-600 text-white hover:bg-blue-700 group-hover:bg-white group-hover:text-blue-600' 
                : 'bg-orange-600 text-white hover:bg-orange-700 group-hover:bg-white group-hover:text-orange-600'
            }`}>
              {member.role}
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className={`absolute top-4 right-4 w-16 h-16 ${isExecutive ? 'bg-blue-500/10' : 'bg-orange-500/10'} rounded-full group-hover:scale-150 group-hover:bg-white/10 transition-all duration-500`} />
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
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl">
            Committee{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text">
              Members
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-600 text-l">
            Meet the dedicated individuals who make our Vinayaka Chavithi celebrations possible through their 
            unwavering commitment and expertise.
          </p>
        </div>

        {/* Executive Committee */}
        <div className="mb-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {executiveMembers.map((member) => (
              <MemberCard key={member.id} member={member} isExecutive={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitteeMembers;
