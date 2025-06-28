
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const RSVP = () => {
  const { toast } = useToast();
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
  body: form
});
    toast({
      title: "RSVP נשלח בהצלחה!",
      description: "התשובה שלך נשמרה בגוגל שיט 🙌",
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
  } catch (error) {
    console.error("Error submitting RSVP:", error);
    toast({
      title: "שגיאה בשליחה",
      description: "לא הצלחנו לשלוח את התשובה. נסה שוב.",
      variant: "destructive",
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
                 שם *
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
                 מאשר הגעה *
                </Label>
                <RadioGroup
                  value={formData.attendance}
                  onValueChange={(value) => handleInputChange('attendance', value)}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes">בטח ניתראה שם</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no">מצטער לא יכול להגיע</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Number of Guests */}
              {formData.attendance === 'yes' && (
                <>
                  <div>
                    <Label htmlFor="guests" className="text-base font-medium text-gray-700">
                  האם אתה בא עם אנשים?

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
      <div className="py-16 bg-pale-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-serif text-black mb-6">
              Email Integration Instructions
            </h2>
            <div className="bg-white rounded-lg p-6 shadow-md text-left border border-pale-yellow">
              <p className="text-black mb-4">
                To connect this RSVP form to your email, you'll need to:
              </p>
              
              <ol className="space-y-3 text-black list-decimal pl-5">
                <li>Set up an email service provider (like EmailJS, SendGrid, or Formspree)</li>
                <li>Get your API keys from the email service</li>
                <li>Update the <code className="bg-pale-yellow px-1 py-0.5 rounded text-black">handleSubmit</code> function in the RSVP.tsx file to send form data to your email</li>
              </ol>
              
              <div className="mt-6 p-4 bg-white rounded border border-pale-yellow">
                <p className="font-medium mb-2 text-black">Example code for email integration:</p>
                <pre className="text-xs overflow-auto p-2 bg-pale-yellow rounded text-black">
{`// Example using EmailJS
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  // CUSTOMIZE: Replace with your EmailJS details
  emailjs.send(
    'YOUR_SERVICE_ID', 
    'YOUR_TEMPLATE_ID',
    {
      to_email: 'your-email@example.com',
      from_name: formData.name,
      from_email: formData.email,
      message: \`
        Attendance: \${formData.attendance}
        Guests: \${formData.guests}
        Guest Names: \${formData.guestNames}
        Dinner Choice: \${formData.dinnerChoice}
        Guest Dinner Choices: \${formData.guestDinnerChoices}
        Dietary Restrictions: \${formData.dietaryRestrictions}
        Message: \${formData.message}
      \`
    }, 
    'YOUR_USER_ID'
  )
  .then(() => {
    toast({
      title: "RSVP Submitted Successfully!",
      description: "Thank you for your response. We can't wait to celebrate with you!",
    });
    // Reset form fields
  })
  .catch((error) => {
    console.error('Error sending RSVP:', error);
    toast({
      title: "Error Submitting RSVP",
      description: "There was a problem submitting your RSVP. Please try again.",
      variant: "destructive",
    });
  });
};`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Important Information */}
      <div className="py-16 bg-pale-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-serif text-black mb-6">
              Important Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-white rounded-lg p-6 shadow-md border border-pale-yellow">
                <h3 className="text-lg font-semibold text-black mb-3">RSVP Deadline</h3>
                <p className="text-black">
                  {/* CUSTOMIZE: Replace with your RSVP deadline */}
                  {/* Example: Please respond by May 15, 2026 so we can finalize our headcount with the caterer and venue. */}
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border border-pale-yellow">
                <h3 className="text-lg font-semibold text-black mb-3">Questions?</h3>
                <p className="text-black">
                  {/* CUSTOMIZE: Replace with your contact information */}
                  {/* Example: If you have any questions about the wedding or need to make changes to your RSVP, please contact us at couple@example.com. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
