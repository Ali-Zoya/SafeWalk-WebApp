import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, AlertTriangle } from 'lucide-react';
import EmergencyStats from '../components/EmergencyStats';
import SubscribeSection from '../components/SubscribeSection';
import HeroSection from '../components/HeroSection';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />
      
      <section className="my-12">
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          <Link 
            to="/sos" 
            className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white text-2xl font-bold py-6 px-10 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <AlertTriangle size={32} />
            SOS EMERGENCY
          </Link>
          
          <a 
            href="tel:102" 
            className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white text-2xl font-bold py-6 px-10 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Phone size={32} />
            CALL AMBULANCE
          </a>
        </div>
        
        <EmergencyStats />
      </section>
      
      <section className="my-16 bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Fall Prevention Tips</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Home Safety</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Remove tripping hazards like loose rugs and clutter</li>
              <li>Install grab bars in bathrooms and handrails on stairs</li>
              <li>Ensure adequate lighting, especially on stairs</li>
              <li>Use non-slip mats in bathrooms and kitchen</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Health Precautions</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Have regular vision and hearing checkups</li>
              <li>Review medications with your doctor for side effects</li>
              <li>Stay physically active to maintain strength and balance</li>
              <li>Use assistive devices like canes or walkers if needed</li>
            </ul>
          </div>
        </div>
      </section>
      
      <SubscribeSection />
    </div>
  );
};

export default HomePage;