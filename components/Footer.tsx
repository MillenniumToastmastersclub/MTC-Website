import React from 'react';
import { Mail, MapPin, Phone, Linkedin, Instagram, Facebook, ExternalLink } from 'lucide-react';
import { CLUB_NAME, CLUB_LOCATION, MEETING_TIME, CONTACT_EMAIL, CONTACT_PHONE, SOCIAL_LINKS, TMI_LINKS, TMI_LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#004165] text-white pt-20 pb-10 border-t-4 border-[#772432]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 w-fit">
              <img src={TMI_LOGO_URL} alt="TMI Official Logo" className="h-12 w-auto" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 uppercase tracking-widest text-[#F2DF74]">{CLUB_NAME}</h3>
              <p className="text-xs opacity-80 leading-relaxed font-light uppercase tracking-widest">
                "Where Leaders Are Made"
              </p>
            </div>
            <p className="text-sm opacity-70 leading-relaxed font-light">
              We provide a supportive and positive learning experience in which members are empowered to develop communication and leadership skills.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-bold mb-6 uppercase tracking-[0.3em] border-b border-white/10 pb-2">Quick Links</h3>
            <ul className="space-y-3 text-[10px] opacity-80 uppercase tracking-widest">
              <li>
                <a href={TMI_LINKS.howItWorks} target="_blank" rel="noopener noreferrer" className="hover:text-[#F2DF74] transition-brand flex items-center gap-2 group">
                  How it works <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href={TMI_LINKS.pathways} target="_blank" rel="noopener noreferrer" className="hover:text-[#F2DF74] transition-brand flex items-center gap-2 group">
                  Membership pathways <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href={TMI_LINKS.resources} target="_blank" rel="noopener noreferrer" className="hover:text-[#F2DF74] transition-brand flex items-center gap-2 group">
                  Resources <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href={TMI_LINKS.faq} target="_blank" rel="noopener noreferrer" className="hover:text-[#F2DF74] transition-brand flex items-center gap-2 group">
                  FAQ <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold mb-6 uppercase tracking-[0.3em] border-b border-white/10 pb-2">Visit Us</h3>
            <div className="flex items-start space-x-3 text-xs opacity-80">
              <MapPin className="w-5 h-5 text-[#F2DF74] shrink-0" />
              <span className="font-light leading-relaxed">{CLUB_LOCATION}</span>
            </div>
            <div className="flex items-start space-x-3 text-xs opacity-80">
              <Phone className="w-5 h-5 text-[#F2DF74] shrink-0" />
              <span className="font-light">{CONTACT_PHONE}</span>
            </div>
            <div className="flex items-start space-x-3 text-xs opacity-80">
              <Mail className="w-5 h-5 text-[#F2DF74] shrink-0" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[#F2DF74] transition-brand font-light">{CONTACT_EMAIL}</a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold mb-6 uppercase tracking-[0.3em] border-b border-white/10 pb-2">Connect</h3>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="bg-[#772432] p-3 rounded-full hover:bg-[#F2DF74] hover:text-[#772432] transition-brand shadow-lg">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="bg-[#772432] p-3 rounded-full hover:bg-[#F2DF74] hover:text-[#772432] transition-brand shadow-lg">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="bg-[#772432] p-3 rounded-full hover:bg-[#F2DF74] hover:text-[#772432] transition-brand shadow-lg">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-80 italic font-light">
                Meetings: {MEETING_TIME}
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 text-center">
          <p className="text-[10px] opacity-40 uppercase tracking-[0.3em] font-light leading-relaxed max-w-3xl mx-auto">
            © {new Date().getFullYear()} {CLUB_NAME}. The names "Toastmasters International," "Toastmasters," and the Toastmasters International emblem are trademarks of Toastmasters International registered in the United States, Canada, and many other countries. Each Toastmasters club is a separate legal entity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;