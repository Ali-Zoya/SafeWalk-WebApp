import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

const SubscribeSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }
    
    // Simulate subscription
    setStatus('success');
    setMessage('Thank you for subscribing!');
    setEmail('');
    
    // Reset the form after 3 seconds
    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 3000);
  };
  
  return (
    <section className="bg-blue-600 text-white rounded-xl p-8 md:p-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Informed</h2>
        <p className="text-xl mb-8">
          Subscribe to receive updates on emergency services, fall prevention tips, and senior health resources.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <div className="relative flex-grow">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 pl-10 pr-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
        
        {status === 'success' && (
          <div className="mt-4 flex items-center justify-center text-green-200">
            <CheckCircle size={20} className="mr-2" />
            <span>{message}</span>
          </div>
        )}
        
        {status === 'error' && (
          <div className="mt-4 flex items-center justify-center text-red-200">
            <AlertCircle size={20} className="mr-2" />
            <span>{message}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default SubscribeSection;