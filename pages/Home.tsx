import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, ArrowRight, Mic, ShieldCheck, Zap, Heart, Sparkles, Handshake, MapPin } from 'lucide-react';
import { TESTIMONIALS, MEETING_609_THEME, MEETING_609_WORD, MEETING_609_LOCATION, MEETING_609_DATE, TMI_LOGO_URL } from '../constants';

const Home: React.FC = () => {
  const hasWordOfTheDay = MEETING_609_WORD && MEETING_609_WORD.word !== "";

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-[#004165]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#004165] to-[#004165]/40 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1920&h=1080" 
            alt="Professional Public Speaking" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-4 bg-white px-6 py-3 rounded-full border border-white/20 w-fit shadow-2xl">
              <img src={TMI_LOGO_URL} alt="TMI Logo" className="h-10 w-auto" />
              <div className="w-px h-6 bg-gray-200"></div>
              <span className="text-[#004165] font-bold uppercase text-[10px] tracking-[0.3em]">Official Club #6664</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight uppercase tracking-wide">
              Millennium Toastmasters Club <span className="text-[#F2DF74]">— Abu Dhabi</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-4 uppercase tracking-widest">
              "Where Leaders Are Made"
            </p>
            <p className="text-lg text-white/80 mb-10 max-w-2xl font-light">
              Unlock your potential in public speaking and leadership. Join our next <strong>Joint Meeting</strong> with Abu Dhabi Toastmasters Club.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-[#772432] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#8e2b3c] transition-brand flex items-center justify-center gap-2 group shadow-xl uppercase tracking-wider"
              >
                Attend as Guest <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/agenda" 
                className="bg-white text-[#004165] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-brand flex items-center justify-center shadow-xl uppercase tracking-wider"
              >
                View Agenda
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Joint Meeting Highlight */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#004165] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="p-12 md:w-2/3 text-white relative border-l-8 border-[#F2DF74]">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Handshake className="w-48 h-48 text-[#F2DF74]" />
              </div>
              <span className="inline-block bg-[#772432] text-white px-4 py-1 rounded-full text-xs font-bold mb-4 relative z-10 uppercase tracking-widest">JOINT MEETING #609</span>
              <h3 className="text-3xl font-bold mb-2 relative z-10 uppercase tracking-widest">Millennium & Abu Dhabi Toastmasters</h3>
              <p className="text-[#F2DF74] mb-8 flex items-center gap-2 relative z-10 uppercase text-xs tracking-widest font-bold">
                <Calendar className="w-4 h-4" /> {MEETING_609_DATE} • 7:45 PM
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 relative z-10">
                <div>
                  <h5 className="text-[#F2DF74] font-bold uppercase text-[10px] tracking-0.2em mb-2 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Theme
                  </h5>
                  <p className="text-2xl font-bold uppercase tracking-widest">{MEETING_609_THEME}</p>
                </div>
                <div>
                  <h5 className="text-[#F2DF74] font-bold uppercase text-[10px] tracking-0.2em mb-2 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> Joint Venue
                  </h5>
                  <p className="text-lg font-semibold uppercase tracking-widest">Define Training Centre</p>
                  <p className="text-[10px] text-white/50 mt-1 uppercase tracking-wider leading-relaxed">Nissan Showroom Bldg, Najda St, Abu Dhabi</p>
                </div>
              </div>

              {hasWordOfTheDay && (
                <div className="mb-8 relative z-10 border-t border-white/10 pt-6">
                   <h5 className="text-[#F2DF74] font-bold uppercase text-[10px] tracking-0.2em mb-2">Word of the Day</h5>
                   <p className="text-xl font-bold uppercase tracking-widest">{MEETING_609_WORD.word}</p>
                   <p className="text-xs text-white/50 italic mt-1 font-light italic">"{MEETING_609_WORD.meaning}"</p>
                </div>
              )}
              
              <Link to="/agenda" className="inline-flex items-center gap-2 text-[#F2DF74] font-bold hover:underline relative z-10 uppercase text-xs tracking-widest">
                Agenda Status <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="md:w-1/3 bg-[#772432] p-12 flex flex-col justify-center items-center text-center">
              <Users className="w-16 h-16 text-white/30 mb-4" />
              <h4 className="text-2xl font-bold text-white mb-2 uppercase tracking-widest">Joint Meeting</h4>
              <p className="text-white/80 mb-6 text-sm font-light leading-relaxed">Experience the synergy of two leading Abu Dhabi clubs coming together for an exceptional educational session at a special joint venue.</p>
              <Link 
                to="/contact" 
                className="w-full py-4 bg-white text-[#772432] font-bold rounded-xl hover:bg-gray-100 transition-brand shadow-lg uppercase tracking-widest text-sm"
              >
                Register as Guest
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#004165] mb-8 uppercase tracking-widest">Empowering You To Speak, Lead, and Succeed</h2>
              <div className="space-y-6 text-gray-600 text-lg">
                <p>
                  Toastmasters International is a worldwide nonprofit educational organization that empowers individuals to become more effective communicators and leaders.
                </p>
                <p>
                  At Millennium Toastmasters Club, we offer a safe, encouraging environment to practice public speaking. Join us and discover your potential.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#004165]/10 p-3 rounded-lg text-[#004165]">
                    <Mic className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#004165] uppercase text-sm tracking-widest">Public Speaking</h4>
                    <p className="text-sm">Overcome anxiety and find your unique voice.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#772432]/10 p-3 rounded-lg text-[#772432]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#772432] uppercase text-sm tracking-widest">Leadership</h4>
                    <p className="text-sm">Take on club roles and lead project teams.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800&h=800" 
                  alt="Toastmasters Meeting Atmosphere" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Summary */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#004165] mb-4 uppercase tracking-widest">Member Success Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-white border border-gray-100 p-8 rounded-3xl shadow-lg relative group hover:-translate-y-2 transition-brand">
                <div className="flex items-center gap-4 mb-6">
                  <div className="portrait-backdrop w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img src={testimonial.photo} alt={testimonial.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#004165] uppercase text-xs tracking-widest">{testimonial.name}</h4>
                    <p className="text-[10px] text-[#772432] font-bold uppercase tracking-[0.1em]">{testimonial.roleInClub}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic text-sm leading-relaxed font-light">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;