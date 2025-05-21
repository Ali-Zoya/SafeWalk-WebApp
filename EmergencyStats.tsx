import React from 'react';
import { Clock, Users, AlertTriangle } from 'lucide-react';

const EmergencyStats: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Falls are, Unfortunately, a Common Occurrence</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-red-50 p-6 rounded-lg flex items-center">
          <div className="bg-red-100 rounded-full p-4 mr-4">
            <Clock className="text-red-600" size={32} />
          </div>
          <div>
            <p className="text-xl font-bold text-red-800">Every 11 seconds</p>
            <p className="text-gray-700">an older adult is treated in the emergency room for a fall.</p>
          </div>
        </div>
        
        <div className="bg-red-50 p-6 rounded-lg flex items-center">
          <div className="bg-red-100 rounded-full p-4 mr-4">
            <AlertTriangle className="text-red-600" size={32} />
          </div>
          <div>
            <p className="text-xl font-bold text-red-800">Every 19 minutes</p>
            <p className="text-gray-700">an older adult dies from a fall.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-900 mb-3">Risk Factors</h3>
        <ul className="grid md:grid-cols-2 gap-4">
          <li className="flex items-start">
            <div className="bg-blue-100 rounded-full p-1 mr-2 mt-1">
              <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
            </div>
            <span>Balance and gait problems</span>
          </li>
          <li className="flex items-start">
            <div className="bg-blue-100 rounded-full p-1 mr-2 mt-1">
              <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
            </div>
            <span>Vision problems</span>
          </li>
          <li className="flex items-start">
            <div className="bg-blue-100 rounded-full p-1 mr-2 mt-1">
              <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
            </div>
            <span>Medication side effects</span>
          </li>
          <li className="flex items-start">
            <div className="bg-blue-100 rounded-full p-1 mr-2 mt-1">
              <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
            </div>
            <span>Environmental hazards</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EmergencyStats;