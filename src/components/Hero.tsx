
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/MeNMar.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-wide">
            {/* CUSTOMIZE: Replace with couple's names */}
            Dani <span className="text-pale-blue">&</span> Yara
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 opacity-90">
            {/* CUSTOMIZE: Replace with your wedding tagline */}
          לכל המשפחה והחברים אנחנו מזמינים אתכם לחגוג את היום הגדול שלנו !
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="flex items-center gap-3 text-lg">
              <Calendar className="w-6 h-6 text-pale-blue" />
              {/* CUSTOMIZE: Replace with your wedding date */}
              <span>יולי 24, 2025</span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <MapPin className="w-6 h-6 text-pale-blue" />
              {/* CUSTOMIZE: Replace with your venue name and location */}
              <span>אולם AZURE נהריה </span>
            </div>
          </div>

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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
