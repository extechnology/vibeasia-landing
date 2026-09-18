import { Compass, Sparkles, Clock, MapPin, ArrowRight } from 'lucide-react';
import { RESORT_DATA } from '../data/resortData';

interface ExperiencesSectionProps {
  onInquireExperience: (expTitle: string) => void;
}

export const ExperiencesSection = ({ onInquireExperience }: ExperiencesSectionProps) => {
  return (
    <section id="experiences" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#06100c]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] mb-3">
            <Compass className="w-4 h-4 text-[#d4af37]" />
            <span>Untamed Wayanad</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#fbf9f5] font-normal tracking-tight mb-4">
            Curated Expeditions & Rituals
          </h2>
          <p className="text-base text-[#bfb4a5] font-light leading-relaxed">
            From the mystical heart-shaped lake of Chembra Peak to secret bamboo waterways and private
            plantation trails, allow our resident naturalists to reveal Wayanad's hidden wonders.
          </p>
        </div>

        {/* Feature Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden glass-card border border-[#d4af37]/30 shadow-2xl mb-12 group">
          <div className="relative aspect-[21/9] min-h-[360px]">
            <img
              src="/images/plantation-walk.jpg"
              alt="Guided tea plantation walk at Vibe Asia Resort Wayanad"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06100c] via-[#06100c]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06100c]/80 via-transparent to-transparent" />

            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 max-w-xl">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#d4af37] text-[#08140f] inline-block mb-3">
                Signature Morning Ritual
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl text-[#fbf9f5] font-medium mb-2">
                The Heritage Tea & Cardamom Trail
              </h3>
              <p className="text-xs sm:text-sm text-[#d4ccc0] font-light mb-4 line-clamp-2 sm:line-clamp-none">
                Wander through rolling green hills wrapped in morning mist with our senior botanist.
                Pluck tender tea leaves, learn the alchemy of spice curing, and savor freshly steeped estate tea.
              </p>
              <button
                onClick={() => onInquireExperience("Heritage Tea & Cardamom Trail")}
                className="px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold text-[#08140f] bg-gradient-to-r from-[#e5c69f] via-[#d4af37] to-[#c5a880] hover:brightness-110 flex items-center space-x-2 cursor-pointer shadow-lg"
              >
                <span>Reserve Morning Trail</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESORT_DATA.experiences.slice(1).map((exp) => (
            <div
              key={exp.id}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 glass-card-hover flex flex-col justify-between group"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c15] via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-medium tracking-wider uppercase bg-[#08140f]/80 backdrop-blur-md text-[#d4af37] border border-white/10">
                    {exp.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 text-xs text-[#a09485] mb-2">
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 text-[#d4af37]" />
                      {exp.duration}
                    </span>
                    {exp.difficulty && (
                      <span className="flex items-center">
                        <MapPin className="w-3.5 h-3.5 mr-1 text-[#d4af37]" />
                        {exp.difficulty}
                      </span>
                    )}
                  </div>
                  <h4 className="font-serif text-xl text-[#fbf9f5] font-medium mb-1 group-hover:text-[#d4af37] transition-colors">
                    {exp.title}
                  </h4>
                  <p className="text-xs text-[#c5a880] mb-3">
                    {exp.subtitle}
                  </p>
                  <p className="text-xs text-[#b8ab99] font-light leading-relaxed mb-6">
                    {exp.description}
                  </p>
                </div>

                <button
                  onClick={() => onInquireExperience(exp.title)}
                  className="w-full py-2.5 rounded-xl text-xs uppercase tracking-wider font-medium text-[#f5e3c3] border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all flex items-center justify-center space-x-1 cursor-pointer"
                >
                  <Sparkles className="w-3 h-3 text-[#d4af37]" />
                  <span>Book Expedition</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
