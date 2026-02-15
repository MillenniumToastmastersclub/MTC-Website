
import React, { useState } from 'react';
import { Download, Share2, Clock, User, Info, Handshake, Sparkles, Check, MapPin } from 'lucide-react';
import { MOCK_AGENDA, CLUB_NAME, MEETING_609_THEME, MEETING_609_WORD, MEETING_609_LOCATION, MEETING_609_DATE } from '../constants';

const Agenda: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const isAgendaEmpty = !MOCK_AGENDA || MOCK_AGENDA.length === 0;
  const hasWordOfTheDay = MEETING_609_WORD && MEETING_609_WORD.word !== "";

  const handleShare = async () => {
    const shareData = {
      title: `${CLUB_NAME} - Joint Meeting #609`,
      text: `Join us for our Joint Meeting with Abu Dhabi Toastmasters on ${MEETING_609_DATE}!`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share failed');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen font-brand">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-sm border border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Handshake className="w-32 h-32 text-[#004165]" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#772432] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">Joint Meeting Collaboration</span>
              <h1 className="text-2xl font-bold text-[#004165] uppercase tracking-widest">Meeting #609</h1>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider flex items-center gap-1">
                <Clock className="w-3 h-3" /> {MEETING_609_DATE} • 7:45 PM
              </p>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {MEETING_609_LOCATION}
              </p>
            </div>
            <div className="flex items-center gap-2 text-[#772432] font-bold mt-2 uppercase text-xs tracking-[0.2em]">
              <Sparkles className="w-4 h-4" />
              <span>Theme: {MEETING_609_THEME}</span>
            </div>
          </div>
          <div className="flex gap-3 relative z-10">
            <button 
              onClick={handleShare}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-brand shadow-md uppercase text-[10px] tracking-widest ${
                copied ? 'bg-emerald-500 text-white' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
              {copied ? 'Link Copied!' : 'Share'}
            </button>
            {!isAgendaEmpty && (
              <button className="hidden sm:flex items-center gap-2 px-6 py-3 bg-[#004165] text-white rounded-xl hover:bg-[#00314d] transition-brand font-bold shadow-md uppercase text-[10px] tracking-widest">
                <Download className="w-5 h-5" /> PDF Agenda
              </button>
            )}
          </div>
        </div>

        {/* Word of the Evening (Only show if exists) */}
        {hasWordOfTheDay && (
          <div className="mb-8 bg-gradient-to-r from-[#004165] to-[#006094] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Sparkles className="w-24 h-24" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4 text-[#F2DF74]">
                <Sparkles className="w-5 h-5" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Word of the Evening</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-end gap-4 mb-4">
                <h2 className="text-4xl font-extrabold uppercase tracking-[0.2em]">{MEETING_609_WORD.word}</h2>
                <span className="text-sm opacity-60 uppercase tracking-widest mb-2 font-bold">({MEETING_609_WORD.type})</span>
              </div>
              <p className="text-lg text-white/90 font-light mb-4 max-w-2xl leading-relaxed">
                {MEETING_609_WORD.meaning}
              </p>
            </div>
          </div>
        )}

        {/* Agenda Content */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 min-h-[400px]">
          <div className="bg-[#772432] px-8 py-4 text-white flex justify-between items-center">
            <span className="font-bold tracking-widest uppercase text-[10px]">Time Schedule</span>
            <span className="font-bold tracking-widest uppercase text-[10px]">Role Details</span>
          </div>
          
          {isAgendaEmpty ? (
            <div className="flex flex-col items-center justify-center p-20 text-center">
              <div className="bg-gray-100 p-6 rounded-full mb-6">
                <Info className="w-12 h-12 text-[#004165]/30" />
              </div>
              <h3 className="text-xl font-bold text-[#004165] mb-2 uppercase tracking-widest">Agenda To Be Shared Soon</h3>
              <p className="text-gray-500 max-w-md text-sm font-light">
                The Executive Committees of Millennium and Abu Dhabi Toastmasters are finalizing the joint roles and speeches. Please check back shortly for the full schedule.
              </p>
              <div className="mt-8 flex gap-3">
                <div className="px-4 py-2 bg-[#004165]/5 text-[#004165] rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Joint Session Collaboration
                </div>
              </div>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {MOCK_AGENDA.map((item) => (
                <div key={item.id} className="p-6 md:px-8 md:py-8 flex flex-col md:flex-row items-start md:items-center hover:bg-gray-50 transition-brand group">
                  <div className="flex items-center gap-4 md:w-1/4 mb-4 md:mb-0">
                    <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-[#004165]/10 group-hover:text-[#004165] transition-brand">
                      <Clock className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-lg text-gray-800 tracking-wider">{item.time}</span>
                  </div>
                  
                  <div className="md:w-1/2 mb-4 md:mb-0">
                    <h4 className="text-base font-bold text-[#004165] mb-1 uppercase tracking-widest">{item.description}</h4>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Joint Session Collaboration</p>
                  </div>
                  
                  <div className="md:w-1/4 flex items-center justify-end gap-3 w-full">
                    <div className="text-right">
                      <p className="font-bold text-gray-900 line-clamp-1 uppercase text-sm tracking-wider">{item.rolePlayer}</p>
                      <p className="text-[10px] text-[#772432] font-extrabold uppercase tracking-tighter">Role Player</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-[#772432]/10 group-hover:text-[#772432] transition-brand">
                      <User className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Agenda;
