
import React, { useState } from 'react';
import { Mail, MapPin, Phone, MessageSquare, Send, Globe, Car, CheckCircle, ExternalLink, Navigation, Instagram, Facebook, Linkedin, Share2, Check, Info } from 'lucide-react';
import { CLUB_NAME, CLUB_LOCATION, MEETING_TIME, CONTACT_EMAIL, CONTACT_PHONE, GOOGLE_MAPS_URL, SOCIAL_LINKS, MEETING_609_LOCATION, MEETING_609_DATE } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleShare = async () => {
    const shareData = {
      title: CLUB_NAME,
      text: `Check out our Millennium Toastmasters Club website! Join us in Abu Dhabi for leadership and speaking growth.`,
      url: window.location.origin,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share failed');
      }
    } else {
      navigator.clipboard.writeText(window.location.origin);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="py-20 bg-gray-50 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Special Joint Meeting Notice */}
        <div className="mb-12 bg-[#F2DF74]/20 border-l-8 border-[#F2DF74] p-8 rounded-r-3xl shadow-sm">
          <div className="flex items-start gap-4">
            <Info className="w-8 h-8 text-[#004165] shrink-0" />
            <div>
              <h4 className="text-[#004165] font-bold uppercase tracking-widest mb-1">Upcoming Joint Meeting Venue Notice</h4>
              <p className="text-gray-700 font-medium leading-relaxed">
                Please note: For the upcoming Joint Meeting on <strong>{MEETING_609_DATE}</strong>, the venue is <strong>{MEETING_609_LOCATION}</strong>.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Info */}
          <div>
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-4xl font-bold text-[#004165] uppercase tracking-wider">Visit Our Club</h1>
              <button 
                onClick={handleShare}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md ${
                  copied ? 'bg-emerald-500 text-white' : 'bg-[#004165] text-white hover:bg-[#00314d]'
                }`}
              >
                {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                {copied ? 'Link Copied' : 'Share Website'}
              </button>
            </div>
            <p className="text-lg text-gray-600 mb-12 font-light">
              We meet regularly at our permanent location in Abu Dhabi. Guests are always welcome to experience our supportive environment firsthand.
            </p>

            <div className="space-y-8">
              {/* Permanent Address Card */}
              <div className="flex items-start gap-6 group">
                <div className="bg-[#772432]/10 p-4 rounded-2xl group-hover:bg-[#772432] group-hover:text-white transition-all shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#004165] uppercase tracking-wide">Permanent Venue</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">{CLUB_LOCATION}</p>
                  <a 
                    href={GOOGLE_MAPS_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-[#772432] font-bold mt-2 hover:underline uppercase tracking-widest"
                  >
                    Get Directions <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Parking Info Card */}
              <div className="flex items-start gap-6 group">
                <div className="bg-[#A9B2B1]/20 p-4 rounded-2xl group-hover:bg-[#A9B2B1] group-hover:text-white transition-all shadow-sm">
                  <Car className="w-6 h-6 text-gray-600 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#004165] uppercase tracking-wide">Parking Instructions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Members and guests visiting Khalifa Street can park at the <strong>WTC Mall car parking</strong>. 
                  </p>
                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-1 font-light italic">
                    <Navigation className="w-3 h-3" /> The venue is just a 5-10 minute walk from the mall.
                  </p>
                </div>
              </div>

              {/* Meeting Time Card */}
              <div className="flex items-start gap-6 group">
                <div className="bg-[#004165]/10 p-4 rounded-2xl group-hover:bg-[#004165] group-hover:text-white transition-all shadow-sm">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#004165] uppercase tracking-wide">Meeting Time</h3>
                  <p className="text-gray-600 font-medium">{MEETING_TIME}</p>
                  <p className="text-sm text-gray-500 mt-1 italic font-light">Regular alternate Thursdays.</p>
                </div>
              </div>

              {/* Contact Info Card */}
              <div className="flex items-start gap-6 group">
                <div className="bg-emerald-100 p-4 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                  <Phone className="w-6 h-6 text-emerald-600 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#004165] uppercase tracking-wide">Direct Contact</h3>
                  <div className="flex flex-col space-y-1 mt-2">
                    <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="text-[#004165] font-bold hover:underline transition-colors">{CONTACT_PHONE}</a>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#772432] font-bold hover:underline transition-colors">{CONTACT_EMAIL}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connect */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="text-xl font-bold text-[#004165] mb-6 uppercase tracking-widest">Join Our Community</h3>
              <div className="flex flex-wrap gap-4">
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:bg-[#004165] hover:text-white rounded-xl transition-all font-bold shadow-sm uppercase text-[10px] tracking-widest">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:bg-gradient-to-tr hover:from-orange-500 hover:to-purple-500 hover:text-white rounded-xl transition-all font-bold shadow-sm uppercase text-[10px] tracking-widest">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:bg-[#1877F2] hover:text-white rounded-xl transition-all font-bold shadow-sm uppercase text-[10px] tracking-widest">
                  <Facebook className="w-4 h-4" /> Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Guest Registration Form */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in zoom-in-95 duration-500">
                <CheckCircle className="w-20 h-20 text-emerald-500 mb-6" />
                <h2 className="text-3xl font-bold text-[#004165] mb-4 uppercase tracking-widest">Registration Sent!</h2>
                <p className="text-gray-500 max-w-sm mb-8 font-light">
                  Thank you for registering. Your details have been sent to our membership team. We look forward to meeting you!
                </p>
                <button onClick={() => setSubmitted(false)} className="text-[#004165] font-bold hover:underline uppercase tracking-widest text-xs">Register another guest</button>
              </div>
            ) : (
              <>
                <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                  <Send className="w-32 h-32 text-[#004165]" />
                </div>
                
                <h2 className="text-3xl font-bold text-[#004165] mb-2 uppercase tracking-widest">Guest Registration</h2>
                <p className="text-gray-500 mb-8 font-light">Planning to attend a meeting? Let us know and we'll save you a seat!</p>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">First Name</label>
                      <input required type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#004165] focus:outline-none transition-all placeholder:text-gray-300" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Last Name</label>
                      <input required type="text" placeholder="Your Surname" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#004165] focus:outline-none transition-all placeholder:text-gray-300" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Email Address</label>
                    <input required type="email" placeholder="email@example.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#004165] focus:outline-none transition-all placeholder:text-gray-300" />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Mobile Number</label>
                    <input required type="tel" placeholder="+971 50 123 4567" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#004165] focus:outline-none transition-all placeholder:text-gray-300" />
                  </div>

                  <button type="submit" className="w-full bg-[#772432] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#8e2b3c] transition-all shadow-xl flex items-center justify-center gap-3 uppercase tracking-widest">
                    Submit Registration <Send className="w-5 h-5" />
                  </button>
                  <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest font-light">Join the ranks of Millennium leaders</p>
                </form>
              </>
            )}
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-20 group">
          <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-[#004165] uppercase tracking-widest">Club Map</h2>
              <p className="text-gray-500 font-light mt-1 uppercase text-xs tracking-wider">Permanent Venue: Khalifa Street, Abu Dhabi</p>
            </div>
            <a 
              href={GOOGLE_MAPS_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#004165] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-[#00314d] transition-colors shadow-lg uppercase text-xs tracking-widest"
            >
              Open in Google Maps <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="h-[500px] w-full bg-gray-200 rounded-[2.5rem] overflow-hidden relative shadow-2xl border border-gray-100 ring-4 ring-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.9839352069415!2d54.3571169!3d24.4883401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e666999999999%3A0x6666666666666666!2sMediclinic%20Al%20Noor%20Hospital!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.3] contrast-[1.1]"
              title="Club Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
