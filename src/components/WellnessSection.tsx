import { useState } from 'react';
import { Flower2, Clock, Check, Calendar, ArrowRight } from 'lucide-react';
import { RESORT_DATA, type SpaTreatment } from '../data/resortData';

interface WellnessSectionProps {
  onBookSpa: (treatmentTitle?: string) => void;
}

export const WellnessSection = ({ onBookSpa }: WellnessSectionProps) => {
  const [activeTreatment, setActiveTreatment] = useState<SpaTreatment>(RESORT_DATA.spaTreatments[0]);

  return (
    <section id="wellness" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#06100c] overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] mb-3">
            <Flower2 className="w-4 h-4 text-[#d4af37]" />
            <span>Ayurvedic Rejuvenation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#fbf9f5] font-normal tracking-tight mb-4">
            The Veda Spa Sanctuary
          </h2>
          <p className="text-base text-[#bfb4a5] font-light leading-relaxed">
            Kerala is the cradle of Ayurveda. At Veda Spa, ancient healing therapies are tailored by our
            resident Ayurvedic Vaidya, utilizing cold-pressed medicinal oils harvested directly from our 40-acre estate.
          </p>
        </div>

        {/* Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Image Banner with highlights */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden glass-card border border-[#d4af37]/30 shadow-2xl aspect-[4/3] group">
              <img
                src="/images/ayurveda-spa.jpg"
                alt="Kerala Ayurvedic Spa Sanctuary at Vibe Asia"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06100c] via-transparent to-transparent opacity-70" />

              {/* Float badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-2xl border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#d4af37] uppercase tracking-wider font-semibold">
                      Authentic Panchakarma
                    </span>
                    <h4 className="font-serif text-lg text-white font-medium">
                      Open-Air Forest Treatment Pavilions
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#c5a880] block">Pure Organic Oils</span>
                    <span className="text-[11px] text-[#8e8274]">Resident Vaidya On-site</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick 3 Pillar Cards */}
            <div className="grid grid-cols-3 gap-3 mt-4 text-center">
              <div className="glass-card p-3 rounded-2xl border border-white/5">
                <div className="font-serif text-lg text-[#f5e3c3] font-bold">5,000+ Yrs</div>
                <div className="text-[11px] uppercase tracking-wider text-[#a09485] mt-0.5">Vedic Tradition</div>
              </div>
              <div className="glass-card p-3 rounded-2xl border border-white/5">
                <div className="font-serif text-lg text-[#f5e3c3] font-bold">100%</div>
                <div className="text-[11px] uppercase tracking-wider text-[#a09485] mt-0.5">Herbals & Oils</div>
              </div>
              <div className="glass-card p-3 rounded-2xl border border-white/5">
                <div className="font-serif text-lg text-[#f5e3c3] font-bold">Daily</div>
                <div className="text-[11px] uppercase tracking-wider text-[#a09485] mt-0.5">Forest Yoga</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Treatment Selector */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold mb-2">
              Featured Signature Therapies
            </h3>

            {/* Treatment Selector Tabs */}
            <div className="space-y-3">
              {RESORT_DATA.spaTreatments.map((treatment) => {
                const isSelected = activeTreatment.id === treatment.id;
                return (
                  <div
                    key={treatment.id}
                    onClick={() => setActiveTreatment(treatment)}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#0f281e] border-[#d4af37] shadow-xl shadow-[#d4af37]/10'
                        : 'glass-card border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-serif text-lg sm:text-xl text-[#fbf9f5] font-medium">
                            {treatment.title}
                          </h4>
                          {isSelected && (
                            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                          )}
                        </div>
                        <p className="text-xs text-[#c5a880] mt-0.5">
                          {treatment.sanskritName}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="font-serif text-base font-bold text-[#f5e3c3]">
                          ₹{treatment.price.toLocaleString('en-IN')}
                        </span>
                        <div className="flex items-center justify-end text-[11px] text-[#a09485] mt-0.5">
                          <Clock className="w-3 h-3 mr-1 text-[#d4af37]" />
                          <span>{treatment.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Expand details for selected item */}
                    {isSelected && (
                      <div className="mt-4 pt-3 border-t border-white/10 text-xs text-[#cfc4b5] animate-in fade-in duration-300">
                        <p className="font-light leading-relaxed mb-3">
                          {treatment.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {treatment.benefits.map((b, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-md bg-[#163b2d] text-[#e8ded2] text-[11px] flex items-center"
                            >
                              <Check className="w-3 h-3 mr-1 text-[#d4af37]" />
                              {b}
                            </span>
                          ))}
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onBookSpa(treatment.title);
                          }}
                          className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold text-[#08140f] bg-gradient-to-r from-[#e5c69f] via-[#d4af37] to-[#c5a880] hover:brightness-110 flex items-center justify-center space-x-1 cursor-pointer"
                        >
                          <Calendar className="w-3.5 h-3.5 mr-1" />
                          <span>Book Appointment With Vaidya</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
