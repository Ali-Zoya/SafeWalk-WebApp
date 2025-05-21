import React from 'react';
import { AlertCircle, Heart, Activity, Headphones } from 'lucide-react';

const EmergencyInstructions: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-600 text-white p-4">
        <h2 className="text-2xl font-bold flex items-center">
          <AlertCircle className="mr-2" size={24} />
          Precautions to be taken
        </h2>
      </div>
      
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-2 flex items-center">
            <Heart className="mr-2 text-red-600" size={20} />
            Stay Calm and Still:
          </h3>
          <ul className="ml-8 list-disc space-y-2">
            <li><strong className="text-red-700">Don't rush</strong> to get up. Take a moment to assess any pain or injury.</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-2 flex items-center">
            <Activity className="mr-2 text-red-600" size={20} />
            Check for Injuries:
          </h3>
          <ul className="ml-8 list-disc space-y-2">
            <li>Look for signs of <strong className="text-red-700">bleeding, swelling, bruises</strong>, or <strong className="text-red-700">fractures</strong>.</li>
            <li>If there's <strong className="text-red-700">head, neck, or back pain</strong>, do not move the person—call for help.</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">If No Serious Injury:</h3>
          <ul className="ml-8 list-disc space-y-2">
            <li>Roll to one side, then push up slowly to a seated position.</li>
            <li><strong className="text-red-700">Get up slowly using support</strong> (like a chair or wall).</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-2 flex items-center">
            <Headphones className="mr-2 text-red-600" size={20} />
            Call for Help:
          </h3>
          <ul className="ml-8 list-disc space-y-2">
            <li>If you're alone and can't get up, <strong className="text-red-700">try to call for help using a phone</strong> or by banging on something nearby.</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Apply First Aid:</h3>
          <ul className="ml-8 list-disc space-y-2">
            <li>For <strong className="text-red-700">cuts or scrapes</strong>: clean with water and apply <strong className="text-red-700">antiseptic</strong> and a <strong className="text-red-700">bandage</strong>.</li>
            <li>For <strong className="text-red-700">swelling</strong>: apply a <strong className="text-red-700">cold pack</strong> (wrapped in cloth) to the area for 15–20 minutes.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmergencyInstructions;