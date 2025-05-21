import React from 'react';
import { Heart, Mail, Phone, ExternalLink, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Heart className="text-blue-400 mr-2" size={24} />
              <span className="text-xl font-bold">
                <span className="text-white">MAZT</span>
                <span className="text-blue-400">.com</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              Providing emergency assistance and health resources for seniors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/sos" className="text-gray-400 hover:text-white transition-colors">Emergency SOS</Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Resources</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Emergency Numbers</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="text-red-400 mr-2" size={16} />
                <a href="tel:102" className="text-gray-400 hover:text-white transition-colors">Ambulance: 102/108</a>
              </li>
              <li className="flex items-center">
                <Phone className="text-red-400 mr-2" size={16} />
                <a href="tel:100" className="text-gray-400 hover:text-white transition-colors">Police: 100</a>
              </li>
              <li className="flex items-center">
                <Phone className="text-red-400 mr-2" size={16} />
                <a href="tel:101" className="text-gray-400 hover:text-white transition-colors">Fire: 101</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="text-blue-400 mr-2" size={16} />
                <a href="mailto:info@mazt.com" className="text-gray-400 hover:text-white transition-colors">info@mazt.com</a>
              </li>
              <li className="flex items-center">
                <ExternalLink className="text-blue-400 mr-2" size={16} />
                <a 
                  href="https://forms.gle/your-google-form-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Patient Form
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} MAZT.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;