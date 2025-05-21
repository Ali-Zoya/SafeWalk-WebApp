import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Heart, Home, Search, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Heart className="text-blue-600 mr-2" size={28} />
            <span className="text-2xl font-bold">
              <span className="text-gray-900">MAZT</span>
              <span className="text-blue-600">.com</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-lg font-medium text-gray-700 hover:text-blue-600 flex items-center">
              <Home size={20} className="mr-1" />
              Home
            </Link>
            <Link to="/sos" className="text-lg font-medium text-red-600 hover:text-red-800 flex items-center">
              SOS
            </Link>
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition-colors"
            >
              Subscribe
            </button>
          </nav>
          
          {/* Search */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
            <Search size={20} className="text-gray-500" />
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-transparent border-none outline-none ml-2 w-36 text-gray-700"
            />
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg rounded-b-lg">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-lg font-medium text-gray-700 hover:text-blue-600 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home size={20} className="mr-2" />
                Home
              </Link>
              <Link 
                to="/sos" 
                className="text-lg font-medium text-red-600 hover:text-red-800 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                SOS Emergency
              </Link>
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
              
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 mt-4">
                <Search size={20} className="text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="bg-transparent border-none outline-none ml-2 w-full text-gray-700"
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;