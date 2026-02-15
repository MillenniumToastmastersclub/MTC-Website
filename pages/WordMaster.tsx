
import React, { useState, useEffect } from 'react';
import { Search, RotateCcw, Volume2, Bookmark, Sparkles, BookOpen, GraduationCap, Quote } from 'lucide-react';
import { getAIWordOfTheDay } from '../services/geminiService';
import { WordOfTheDay } from '../types';
import { PAST_WORDS_ARCHIVE } from '../constants';

const WordMaster: React.FC = () => {
  const [wordData, setWordData] = useState<WordOfTheDay | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const generateNewWord = async () => {
    setLoading(true);
    const data = await getAIWordOfTheDay();
    setWordData(data);
    setLoading(false);
  };

  useEffect(() => {
    generateNewWord();
  }, []);

  const filteredArchive = PAST_WORDS_ARCHIVE.filter(item => 
    item.word.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.meaning.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#772432]/10 text-[#772432] px-4 py-2 rounded-full font-bold text-sm mb-4">
            <Sparkles className="w-4 h-4" /> AI POWERED CORNER
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#004165] mb-4">Word Master Corner</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expand your linguistic horizons for the next meeting. Use the AI to discover something new, or browse our club's rich history of vocabulary.
          </p>
        </div>

        {/* AI Word of the Day Section */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 mb-20 transform transition-all">
          <div className="bg-[#004165] p-8 text-white flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#F2DF74] p-2 rounded-lg">
                <BookOpen className="w-5 h-5 text-[#004165]" />
              </div>
              <div>
                <h2 className="text-xl font-bold uppercase tracking-widest leading-none">Fresh Inspiration</h2>
                <p className="text-xs text-white/60 mt-1">AI-Generated for Meeting Excellence</p>
              </div>
            </div>
            <button 
              onClick={generateNewWord} 
              disabled={loading}
              className="flex items-center gap-2 bg-[#772432] hover:bg-[#8e2b3c] disabled:opacity-50 px-6 py-3 rounded-xl transition-all font-bold text-sm shadow-lg whitespace-nowrap"
            >
              <RotateCcw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} /> Generate Another
            </button>
          </div>
          
          <div className="p-10 md:p-14">
            {loading ? (
              <div className="py-12 flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 border-4 border-[#004165]/10 border-t-[#004165] rounded-full animate-spin"></div>
                <p className="text-[#004165] font-semibold animate-pulse text-lg tracking-wide">Our AI Grammarian is curating a masterpiece...</p>
              </div>
            ) : wordData && (
              <div className="animate-in slide-in-from-bottom-4 duration-500">
                <div className="flex flex-col md:flex-row md:items-end gap-4 mb-10 border-b border-gray-100 pb-10">
                  <div className="flex-1">
                    <h3 className="text-6xl md:text-8xl font-bold text-[#004165] font-['Playfair_Display'] capitalize tracking-tight">{wordData.word}</h3>
                    <div className="flex items-center gap-3 mt-4">
                      <span className="px-3 py-1 bg-[#772432]/10 text-[#772432] rounded-full text-sm font-bold uppercase tracking-wider">{wordData.type}</span>
                      <button className="flex items-center gap-1.5 text-gray-400 hover:text-[#004165] transition-colors text-sm font-medium">
                        <Volume2 className="w-5 h-5" /> Listen
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-[#004165]">
                      <GraduationCap className="w-5 h-5" />
                      <h4 className="font-bold uppercase tracking-[0.2em] text-xs">The Definition</h4>
                    </div>
                    <p className="text-2xl text-gray-700 leading-relaxed font-light italic">
                      "{wordData.meaning}"
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-[#772432]">
                      <Quote className="w-5 h-5" />
                      <h4 className="font-bold uppercase tracking-[0.2em] text-xs">In a Sentence</h4>
                    </div>
                    <ul className="space-y-4">
                      {wordData.examples.map((ex, i) => (
                        <li key={i} className="flex gap-4 p-5 bg-gray-50 rounded-2xl border-l-4 border-[#F2DF74] group hover:bg-white hover:shadow-md transition-all">
                          <span className="text-amber-500 font-black text-lg">0{i+1}</span>
                          <p className="text-gray-600 font-medium">"{ex}"</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Millennium Archive Section */}
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-[#772432] p-2 rounded-lg">
                <Bookmark className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#004165]">The Millennium Archive</h3>
            </div>
            <div className="relative w-full md:w-96 group">
              <input 
                type="text" 
                placeholder="Search past words or meanings..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#004165] shadow-sm transition-all pr-12"
              />
              <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-[#004165] transition-colors" />
            </div>
          </div>

          {filteredArchive.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-[2.5rem] border-2 border-dashed border-gray-200">
              <p className="text-gray-400 text-lg">No words found matching your search. Try another term!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArchive.map((item) => (
                <div key={item.word} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-bold text-[#004165] group-hover:text-[#772432] transition-colors">{item.word}</h4>
                    <span className="text-[10px] font-bold bg-gray-50 text-gray-400 px-2 py-1 rounded uppercase tracking-widest">{item.type}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-4 font-mono font-medium">{item.pronunciation}</p>
                  <p className="text-gray-600 mb-6 flex-grow">{item.meaning}</p>
                  <div className="pt-6 border-t border-gray-50 bg-gray-50/50 -mx-8 px-8 rounded-b-3xl">
                    <p className="text-xs text-[#772432] font-bold uppercase tracking-tighter mb-2">Usage Highlight</p>
                    <p className="text-xs text-gray-500 italic leading-relaxed font-medium">"{item.example}"</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Challenge Banner */}
        <div className="mt-24 bg-[#004165] p-12 rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <Mic2 className="w-64 h-64 -bottom-10 -right-10 absolute rotate-12" />
          </div>
          <h3 className="text-3xl font-bold mb-4">The Grammarian's Challenge</h3>
          <p className="text-white/70 max-w-xl mx-auto mb-8 text-lg">
            A word is a spark. Can you ignite the room by using one of these words in your next evaluation or table topic? Our Grammarian is listening!
          </p>
          <div className="flex justify-center gap-4">
             <div className="px-6 py-2 bg-white/10 rounded-full text-[#F2DF74] text-sm font-bold border border-white/20">
               Earn 5 Club Points
             </div>
             <div className="px-6 py-2 bg-white/10 rounded-full text-[#F2DF74] text-sm font-bold border border-white/20">
               Member Shoutout
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple icon for the banner
const Mic2 = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
);

export default WordMaster;
