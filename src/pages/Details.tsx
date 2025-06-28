import React from 'react';
import Navbar from '../components/Navbar';
import { MapPin, Clock, Car, Hotel, UtensilsCrossed, Gift, Music, Calendar } from 'lucide-react';

const Details = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-black mb-6">
            Wedding Details
          </h1>
          <p className="text-xl text-black max-w-2xl mx-auto leading-relaxed">
            {/* CUSTOMIZE: Replace with your wedding details introduction */}
            We're excited to share all the details you need for our special day. Please read through the information below to help plan your attendance.
          </p>
        </div>
      </div>

      {/* Schedule Section - Improved layout */}
      <div className="py-16 bg-pale-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">
              Wedding Day Schedule
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              {/* CUSTOMIZE: Add a brief intro about your schedule */}
              Here is a rough time frame of what to expect on the day of our wedding.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-white h-full"></div>
              
              {/* Timeline items */}
              <div className="space-y-10">
                <div className="relative flex items-center md:justify-between">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-pale-yellow shadow-md z-10"></div>
                  
                  <div className="ml-12 md:ml-0 md:w-5/12 md:pr-8 md:text-right">
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-black mb-2">
                        {/* CUSTOMIZE: Event name */}
                        קבל פנים
                      </h3>
                      <div className="flex items-center justify-end gap-2 mb-3 text-black">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">
                          {/* CUSTOMIZE: Time */}
                          6:00 PM - 6:30 PM
                        </span>
                      </div>
                   
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center md:justify-between">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-pale-yellow shadow-md z-10"></div>
                  
                  <div className="ml-12 md:ml-auto md:w-5/12 md:pl-8 md:text-left">
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-black mb-2">
                        {/* CUSTOMIZE: Event name */}
                       חופה
                      </h3>
                      <div className="flex items-center gap-2 mb-3 text-black">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">
                          {/* CUSTOMIZE: Time */}
                          6:30 PM - 7:30 PM
                        </span>
                      </div>
                  
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center md:justify-between">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-pale-yellow shadow-md z-10"></div>
                  
                  <div className="ml-12 md:ml-0 md:w-5/12 md:pr-8 md:text-right">
                 
                  </div>
                </div>

                <div className="relative flex items-center md:justify-between">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-pale-yellow shadow-md z-10"></div>
                  
                  <div className="ml-12 md:ml-auto md:w-5/12 md:pl-8 md:text-left">
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-black mb-2">
                        {/* CUSTOMIZE: Event name */}
                        אוכל
                      </h3>
                      <div className="flex items-center gap-2 mb-3 text-black">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">
                          {/* CUSTOMIZE: Time */}
                          7:45 PM - 8:30 PM
                        </span>
                      </div>
                      <p className="text-black">
                        {/* CUSTOMIZE: Description */}
                      
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center md:justify-between">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-pale-yellow shadow-md z-10"></div>
                  
                  <div className="ml-12 md:ml-0 md:w-5/12 md:pr-8 md:text-right">
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-black mb-2">
                        {/* CUSTOMIZE: Event name */}
                        First Dance
                      </h3>
                      <div className="flex items-center justify-end gap-2 mb-3 text-black">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">
                          {/* CUSTOMIZE: Time */}
                          8:30 PM
                        </span>
                      </div>
                      <p className="text-black">
                        {/* CUSTOMIZE: Description */}
                        We will share our first dance as a married couple.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center md:justify-between">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-pale-yellow shadow-md z-10"></div>
                  
                  <div className="ml-12 md:ml-auto md:w-5/12 md:pl-8 md:text-left">
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-black mb-2">
                        {/* CUSTOMIZE: Event name */}
                     ריקודים
                      </h3>
                      <div className="flex items-center gap-2 mb-3 text-black">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">
                          {/* CUSTOMIZE: Time */}
                          8:30 PM - 11:00 PM
                        </span>
                      </div>
                      <p className="text-black">
                        {/* CUSTOMIZE: Description */}
                        Dance the night away with us! We better see you out on the dance floor at all times, because this is a party!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Venue Information */}
  

      {/* Accommodations */}
   

      {/* Travel Information */}
   

      {/* Additional Information */}
    
    </div>
  );
};

export default Details;
