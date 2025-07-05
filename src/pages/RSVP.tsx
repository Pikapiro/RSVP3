import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';import
 { Link, useLocation } from 'react-router-dom';

const RSVP = () => {
  const { toast } = useToast();
const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: '',
    guests: '1',
    guestNames: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value);
      });

      await fetch("https://script.google.com/macros/s/AKfycbzyZdgh3fHJ9m5vGfNJHU3sq8SmHC-C3jFnHZwtQnZIctxY016snQW_A0RnFioL5C0EdA/exec", {
        method: "POST",
        body: form,
      });

      toast({
        title: "🎉 נשלח בהצלחה!",
        description: "תודה שאישרתם הגעה 🙏",
        duration: 6000,
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        attendance: '',
        guests: '1',
        guestNames: '',
        message: '',
      });

    setTimeout(() => {
        <Link  to="/rsvp">
 
</Link>
}, 2000);
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      toast({
        title: "🎉 נשלח בהצלחה!",
        description: "תודה שאישרתם הגעה 🙏",
        duration: 6000,
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-black mb-6">
            RSVP
          </h1>
          <p className="text-xl text-black max-w-2xl mx-auto leading-relaxed">
            {/* CUSTOMIZE: Replace with your RSVP introduction */}
            {/* Example: We're so excited to celebrate with you! Please let us know if you'll be joining us 
            for our special day by [RSVP Deadline Date]. */}
          </p>
        </div>
      </div>

      {/* RSVP Form */}
      <div className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-pale-yellow rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-base font-medium text-gray-700">
                  שם מלא *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="mt-1"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-base font-medium text-gray-700">
                  Email  *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-1"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-base font-medium text-gray-700">
                 מספר פלאפון
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="mt-1"
                />
              </div>

              {/* Attendance */}
              <div>
                <Label className="text-base font-medium text-gray-700 mb-3 block">
                 מאשר/ת הגעה *
                </Label>
                <RadioGroup
                  value={formData.attendance}
                  onValueChange={(value) => handleInputChange('attendance', value)}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="מגיע" id="yes" />
                    <Label htmlFor="yes">בטח נתראה שם</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="לא מגיע">מצטער לא יכול/ה להגיע</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Number of Guests */}
              {formData.attendance === 'מגיע' && (
                <>
                  <div>
                    <Label htmlFor="guests" className="text-base font-medium text-gray-700">
                  אנא ציין כמה אנשים יגיעו (כולל אותך)

                    </Label>
                    <select
                      id="guests"
                      value={formData.guests}
                      onChange={(e) => handleInputChange('guests', e.target.value)}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-pale-yellow focus:outline-none focus:ring-pale-blue"
                    >
                      {/* CUSTOMIZE: Adjust the number of guests allowed */}
                      {[1, 2, 3, 4].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>

                  {/* Guest Names */}
                  {parseInt(formData.guests) > 1 && (
                    <div>
                      <Label htmlFor="guestNames" className="text-base font-medium text-gray-700">
                      כמה
                      </Label>
                      <Textarea
                        id="guestNames"
                        value={formData.guestNames}
                        onChange={(e) => handleInputChange('guestNames', e.target.value)}
                        placeholder="Please list the names of your additional guests"
                        className="mt-1"
                      />
                    </div>
                  )}

              
                
                </>
              )}

              {/* Message */}
          
              {/* Submit Button */}
              <div className="pt-6">
                <Button 
                
                  type="submit" 
                  className="w-full bg-pale-yellow hover:bg-white hover:border-pale-yellow border border-pale-yellow text-black py-3 text-lg font-medium"
                  disabled={!formData.name || !formData.email || !formData.attendance}
                >
                שלח
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Email Integration Instructions */}


      {/* Important Information */}
  
    </div>
  );
};

export default RSVP;
