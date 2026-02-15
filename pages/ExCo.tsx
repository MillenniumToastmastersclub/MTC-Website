
import React from 'react';
import { Mail, Linkedin, Award, Shield, User } from 'lucide-react';
import { EXCO_MEMBERS, CLUB_NAME } from '../constants';

const ExCo: React.FC = () => {
  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#772432]/10 text-[#772432] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-4">
            <Award className="w-4 h-4" /> 2025-2026 Leadership Team
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#004165] mb-6">Executive Committee</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            "Leadership is not about being in charge. It is about taking care of those in your charge." 
          </p>
          <div className="w-24 h-1 bg-[#F2DF74] mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {EXCO_MEMBERS.map((member) => (
            <div key={member.id} className="bg-white rounded-3xl overflow-hidden member-card-shadow transition-all duration-500 border border-gray-100 group hover:-translate-y-2">
              {/* Image Container with Leadership Backdrop */}
              <div className="aspect-[4/5] portrait-backdrop relative overflow-hidden">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0"
                />
                
                {/* Role Badge Overlay */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-white/90 backdrop-blur-md p-2 rounded-2xl shadow-lg border border-white/50">
                    <Shield className="w-5 h-5 text-[#772432]" />
                  </div>
                </div>

                {/* Bottom Info Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-xl leading-tight group-hover:text-[#F2DF74] transition-colors">{member.name}</h3>
                  <p className="text-white/70 text-sm font-medium">{member.role}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                  {member.bio}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <div className="flex gap-2">
                    {member.email && (
                      <a 
                        href={`mailto:${member.email}`} 
                        className="p-2.5 bg-gray-50 text-gray-400 rounded-xl hover:bg-[#772432] hover:text-white transition-all shadow-sm"
                        title="Email Contact"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                    <a 
                      href="#" 
                      className="p-2.5 bg-gray-50 text-gray-400 rounded-xl hover:bg-[#004165] hover:text-white transition-all shadow-sm"
                      title="LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 rounded-full border border-gray-100">
                    <User className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Profile</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Recruitment CTA */}
        <div className="mt-24 relative rounded-[3rem] overflow-hidden">
          <div className="absolute inset-0 bg-[#004165]">
             <img 
               src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600" 
               className="w-full h-full object-cover opacity-10" 
               alt="Team Background"
             />
          </div>
          <div className="relative z-10 p-12 md:p-20 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Discover Your Leadership Potential</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg">
              Toastmasters is a laboratory for leadership. Our Executive Committee works together to create the best experience for our members. Interested in helping us lead?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#772432] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#8e2b3c] transition-all shadow-2xl flex items-center justify-center gap-2">
                Join our Leadership Team <Award className="w-5 h-5" />
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all">
                Learn About Club Roles
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExCo;