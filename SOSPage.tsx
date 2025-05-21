import React from 'react';
import { Phone, ClipboardList } from 'lucide-react';
import EmergencyInstructions from '../components/EmergencyInstructions';

const SOSPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-8 rounded">
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-2">EMERGENCY SOS</h1>
          <p className="text-xl text-red-800">Quick action can save lives. Follow these steps:</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <a 
            href="tel:102" 
            className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white text-2xl font-bold py-6 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Phone size={32} />
            CALL AMBULANCE: 102/108
          </a>
          
          <a 
            href="https://forms.gle/your-google-form-link" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white text-2xl font-bold py-6 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <ClipboardList size={32} />
            FILL PATIENT DETAILS
          </a>
        </div>
        
        <EmergencyInstructions />
        
        <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Remember</h2>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li>Stay on the line with emergency services</li>
            <li>Provide clear information about the location</li>
            <li>If possible, send someone to meet the ambulance</li>
            <li>Do not move the person if head, neck, or back injury is suspected</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SOSPage;