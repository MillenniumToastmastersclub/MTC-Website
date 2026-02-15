import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { TMI_LOGO_URL } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Agenda', path: '/agenda' },
    { name: 'Minutes', path: '/minutes' },
    { name: 'Executive Committee', path: '/exco' },
    { name: 'Word Master', path: '/word-master' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-[#004165] text-white sticky top-0 z-50 shadow-lg border-b border-[#F2DF74]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-6 group">
            <div className="flex items-center gap-4 bg-white/10 px-4 py-2 rounded-xl border border-white/10 hover:bg-white/20 transition-brand">
              <img src={TMI_LOGO_URL} alt="TMI Official Logo" className="h-10 w-auto object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight uppercase tracking-wider group-hover:text-[#F2DF74] transition-colors">Millennium</span>
              <span className="text-sm font-light opacity-80 uppercase tracking-widest">Toastmasters Club</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="px-3 py-2 rounded-md text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#772432] hover:text-[#F2DF74] transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-[#772432] focus:outline-none transition-brand"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-[#004165] border-t border-[#F2DF74]/20">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#772432] hover:text-[#F2DF74] transition-brand"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;