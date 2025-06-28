
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CountdownTimer from '../components/CountdownTimer';
import QuickDetails from '../components/QuickDetails';
import { Link, useLocation } from 'react-router-dom';
const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CountdownTimer />
      <QuickDetails />
      
      {/* Call to Action Section */}
      <div className="py-16 bg-pale-yellow text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-black">
            {/* CUSTOMIZE: Replace with your CTA heading */}
            אנחנו כבר ממש מתרגים לחגוג איתכם!
          </h2>
      
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             
            <Link  to="/rsvp">
  
    <p
         
              className="bg-pale-yellow hover:bg-white text-black px-8 py-3 rounded-full font-medium transition-colors duration-200 hover:scale-105 transform"
            >
             אשר הגעה 
            </p>
</Link>
          
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white text-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-serif mb-2 text-black">
              {/* CUSTOMIZE: Replace with couple's names */}
               <span>Dani & Yara</span>
            </h3>
            <p className="text-black">
              {/* CUSTOMIZE: Replace with your wedding date and location */}
              June 24, 2025 • אולם AZURE נהריה
            </p>
          </div>
          <div className="border-t border-black pt-6">
         
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
