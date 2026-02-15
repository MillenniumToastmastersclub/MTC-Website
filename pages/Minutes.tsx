
import React from 'react';
import { FileText, Calendar, User, Award, Quote, Star, Settings, Trophy, ListChecks } from 'lucide-react';
import { MEETING_MINUTES } from '../constants';

const Minutes: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#004165]/10 text-[#004165] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-4">
            <FileText className="w-4 h-4" /> Club Records
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#004165] mb-4 uppercase tracking-widest">Minutes of Meeting</h1>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">
            Browse through our past sessions to relive the highlights, award winners, and the wisdom shared by our members.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {MEETING_MINUTES.map((meeting) => (
            <div key={meeting.id} className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-brand group">
              <div className="flex flex-col lg:flex-row">
                {/* Side Date Bar */}
                <div className="bg-[#004165] lg:w-56 p-10 text-white flex flex-col justify-center items-center text-center relative overflow-hidden shrink-0">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#F2DF74] opacity-50"></div>
                  <span className="text-5xl font-extrabold mb-1 tracking-tighter">#{meeting.meetingNumber}</span>
                  <span className="text-[10px] font-bold opacity-60 uppercase tracking-[0.3em]">Meeting</span>
                  <div className="mt-6 pt-6 border-t border-white/10 w-full">
                    <Calendar className="w-4 h-4 mx-auto mb-2 text-[#F2DF74]" />
                    <span className="text-xs font-bold uppercase tracking-wider">{meeting.date}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 md:p-12">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
                    <div>
                      <h2 className="text-3xl font-bold text-[#004165] mb-3 uppercase tracking-wider">{meeting.theme}</h2>
                      <div className="flex flex-wrap gap-3">
                        <span className="px-3 py-1 bg-[#772432]/10 text-[#772432] rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 border border-[#772432]/5">
                          <User className="w-3.5 h-3.5" /> TME: {meeting.tme}
                        </span>
                        {meeting.wordOfTheDay && meeting.wordOfTheDay !== 'N/A' && (
                          <span className="px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 border border-amber-100">
                            <Quote className="w-3.5 h-3.5" /> Word: {meeting.wordOfTheDay}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-10 text-lg font-light italic border-l-4 border-[#F2DF74] pl-6 py-2 bg-gray-50/50 rounded-r-2xl">
                    "{meeting.summary}"
                  </p>

                  {/* Agenda Highlights */}
                  {meeting.agendaSummary && meeting.agendaSummary.length > 0 && (
                    <div className="mb-10 bg-gray-50/80 rounded-3xl p-6 border border-gray-100">
                      <div className="flex items-center gap-2 mb-4 text-[#004165]">
                        <ListChecks className="w-4 h-4" />
                        <h4 className="font-bold text-xs uppercase tracking-[0.2em]">Agenda Highlights</h4>
                      </div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                        {meeting.agendaSummary.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-gray-500 font-light">
                            <span className="text-[#772432] font-bold mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Contest Winners (Specific to Contest Meetings) */}
                  {meeting.contestWinners && meeting.contestWinners.length > 0 && (
                    <div className="mb-10">
                      <div className="flex items-center gap-2 mb-6 text-[#772432]">
                        <Trophy className="w-5 h-5" />
                        <h4 className="font-bold text-xs uppercase tracking-[0.2em]">Official Contest Results</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {meeting.contestWinners.map((contest, idx) => (
                          <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                            <h5 className="font-bold text-[#004165] text-sm uppercase tracking-wider mb-4 border-b border-gray-50 pb-2">{contest.contestName}</h5>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest flex items-center gap-1"><Star className="w-3 h-3 fill-current" /> 1st Place</span>
                                <span className="text-sm font-bold text-gray-800">{contest.first}</span>
                              </div>
                              <div className="flex justify-between items-center opacity-70">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">2nd Place</span>
                                <span className="text-sm font-medium text-gray-600">{contest.second}</span>
                              </div>
                              <div className="flex justify-between items-center opacity-70">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">3rd Place</span>
                                <span className="text-sm font-medium text-gray-600">{contest.third}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Standard Awards */}
                  {!meeting.contestWinners && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 border-t border-gray-50">
                      {meeting.bestSpeaker && (
                        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 group/award">
                          <div className="bg-amber-100 p-3 rounded-xl group-hover/award:bg-amber-200 transition-colors">
                            <Award className="w-5 h-5 text-amber-600" />
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Best Speaker</p>
                            <p className="text-sm font-bold text-[#004165] uppercase tracking-wide">{meeting.bestSpeaker}</p>
                          </div>
                        </div>
                      )}
                      {meeting.bestEvaluator && (
                        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 group/award">
                          <div className="bg-[#004165]/10 p-3 rounded-xl group-hover/award:bg-[#004165]/20 transition-colors">
                            <Star className="w-5 h-5 text-[#004165]" />
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Best Evaluator</p>
                            <p className="text-sm font-bold text-[#004165] uppercase tracking-wide">{meeting.bestEvaluator}</p>
                          </div>
                        </div>
                      )}
                      {meeting.bestTableTopic && (
                        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 group/award">
                          <div className="bg-[#772432]/10 p-3 rounded-xl group-hover/award:bg-[#772432]/20 transition-colors">
                            <Mic2 className="w-5 h-5 text-[#772432]" />
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Best Table Topic</p>
                            <p className="text-sm font-bold text-[#004165] uppercase tracking-wide">{meeting.bestTableTopic}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Milestone Banner */}
        <div className="mt-24 bg-[#772432] p-16 rounded-[3.5rem] text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <Award className="w-96 h-96 -bottom-20 -right-20 absolute rotate-12" />
          </div>
          <h3 className="text-4xl font-bold mb-6 uppercase tracking-widest">A Legacy of Excellence</h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-xl font-light leading-relaxed">
            Every minute recorded is a testament to the growth of our community. We celebrate every speaker, every evaluator, and every leader who steps onto our stage.
          </p>
        </div>
      </div>
    </div>
  );
};

// Internal Mic icon
const Mic2 = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
);

export default Minutes;
