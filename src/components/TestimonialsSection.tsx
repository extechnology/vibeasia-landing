import { Star, Sparkles, Quote } from 'lucide-react';
import { RESORT_DATA } from '../data/resortData';

export const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#06100c] overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Guest Chronicles</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#fbf9f5] font-normal tracking-tight mb-4">
            Cherished Memories In The Clouds
          </h2>
          <p className="text-base text-[#bfb4a5] font-light leading-relaxed">
            Read reflections from travelers who have made Vibe Asia their private sanctuary in the Western Ghats.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {RESORT_DATA.testimonials.map((t) => (
            <div
              key={t.id}
              className="glass-card p-8 rounded-3xl border border-white/10 glass-card-hover flex flex-col justify-between relative"
            >
              <Quote className="w-10 h-10 text-[#d4af37]/20 absolute top-6 right-6" />

              <div>
                {/* Stars */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>

                <p className="text-sm text-[#d4ccc0] font-light leading-relaxed mb-6 italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="font-serif text-lg text-[#fbf9f5] font-medium">
                  {t.guestName}
                </div>
                <div className="flex items-center justify-between text-xs text-[#c5a880] mt-0.5">
                  <span>{t.location}</span>
                  <span className="text-[#8e8274]">{t.stayType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Accolades Strip */}
        <div className="border-t border-b border-white/10 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block">
              Condé Nast Traveler
            </span>
            <span className="text-xs text-[#a09485]">Asia's Best Eco Luxury 2026</span>
          </div>
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block">
              World Luxury Hotel Awards
            </span>
            <span className="text-xs text-[#a09485]">Best Mountain Resort Winner</span>
          </div>
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block">
              Green Globe Certified
            </span>
            <span className="text-xs text-[#a09485]">100% Sustainable Bio-Reserve</span>
          </div>
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block">
              TripAdvisor Travelers' Choice
            </span>
            <span className="text-xs text-[#a09485]">Top 1% Luxury Worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};
