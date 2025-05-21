import React from 'react';
import { Link } from 'react-router-dom';
import { AlertOctagon } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full hidden md:block">
        <img 
          src="https://images.pexels.com/photos/7551605/pexels-photo-7551605.jpeg" 
          alt="Senior care"
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="md:w-2/3 p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          Senior Emergency Response
        </h1>
        <p className="text-xl text-gray-700 mb-6 md:max-w-xl">
          Quick access to emergency services and medical assistance for seniors. Help is just a button away when you need it most.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/sos"
            className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 text-lg"
          >
            <AlertOctagon size={24} />
            Emergency SOS
          </Link>
          <a 
            href="tel:102"
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 text-lg"
          >
            Call Ambulance: 102/108
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;