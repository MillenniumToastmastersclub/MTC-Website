
import React from 'react';
import { Camera, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { GALLERY_IMAGES, SOCIAL_LINKS } from '../constants';

const Gallery: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#004165]/10 text-[#004165] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-4">
            <Camera className="w-4 h-4" /> Moments of Excellence
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#004165] mb-4">Club Gallery</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Glimpses into our vibrant meetings, contests, and milestone celebrations at Millennium Toastmasters Club, Abu Dhabi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {GALLERY_IMAGES.map((src, index) => (
            <div 
              key={index} 
              className="group relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img 
                src={src} 
                alt={`Club Meeting Photo ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#004165]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <ImageIcon className="w-4 h-4 text-[#F2DF74]" /> Meeting #607 • Club Contest
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media CTA */}
        <div className="mt-20 bg-[#772432] rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
            <Camera className="w-40 h-40" />
          </div>
          <h2 className="text-3xl font-bold mb-6">See More on Our Socials</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-10">
            We regularly post updates, speech highlights, and member achievements on our Instagram and Facebook pages. Follow us to stay connected!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={SOCIAL_LINKS.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-[#772432] px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              Instagram Feed <ExternalLink className="w-4 h-4" />
            </a>
            <a 
              href={SOCIAL_LINKS.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
            >
              Facebook Photos <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
