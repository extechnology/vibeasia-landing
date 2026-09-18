import { useState } from 'react';
import { Calendar, Users, Home, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { RESORT_DATA } from '../data/resortData';

interface HeroProps {
  onCheckAvailability: (bookingParams: {
    checkIn: string;
    checkOut: string;
    guests: number;
    villaId: string;
  }) => void;
}

export const Hero = ({ onCheckAvailability }: HeroProps) => {
  // Default dates: tomorrow and 3 days later
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const departure = new Date(tomorrow);
  departure.setDate(tomorrow.getDate() + 2);

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(formatDate(departure));
  const [guests, setGuests] = useState(2);
  const [selectedVilla, setSelectedVilla] = useState(RESORT_DATA.villas[0].id);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckAvailability({
      checkIn,
      checkOut,
      guests,
      villaId: selectedVilla
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image with Dark Vignette and Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Vibe Asia Resort Wayanad Infinity Pool"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Multilayer gradient for optimal readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08140f] via-[#08140f]/60 to-[#08140f]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08140f]/80 via-transparent to-[#08140f]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#08140f]/40 to-[#08140f]/90" />
      </div>

      {/* Floating subtle glowing ambient particles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mt-6 sm:mt-10">
        {/* Accolade pill */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card border border-[#d4af37]/40 mb-6 shadow-xl backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-[#d4af37]" />
          <span className="text-xs sm:text-sm tracking-wider uppercase text-[#f5e3c3] font-medium">
            Kerala's Most Exquisite Eco-Luxury Sanctuary
          </span>
          <span className="hidden sm:inline text-xs text-[#d4af37]">★ ★ ★ ★ ★</span>
        </div>

        {/* Primary Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-[#fbf9f5] leading-[1.08] mb-6">
          Where Wild Mist <br />
          <span className="font-serif italic gold-gradient-text font-normal">
            Meets Pure Luxury
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#d4ccc0] font-light leading-relaxed mb-10">
          Perched at 2,100 feet in Wayanad's Western Ghats. Private heated infinity pool villas,
          rainforest treehouses, and ancient Ayurvedic healing amidst 40 acres of pristine tea gardens.
        </p>

        {/* Interactive Reservation Bar */}
        <div className="max-w-4xl mx-auto w-full glass-card p-3 sm:p-5 rounded-2xl sm:rounded-3xl border border-[#d4af37]/30 shadow-2xl backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
            {/* Check-In */}
            <div className="bg-[#0b1c15]/80 p-3 rounded-xl border border-white/5 hover:border-[#d4af37]/30 transition-colors">
              <label className="block text-[11px] uppercase tracking-widest text-[#c5a880] mb-1 flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1 text-[#d4af37]" />
                Check-In Date
              </label>
              <input
                type="date"
                value={checkIn}
                min={formatDate(today)}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-white focus:outline-none cursor-pointer"
                required
              />
            </div>

            {/* Check-Out */}
            <div className="bg-[#0b1c15]/80 p-3 rounded-xl border border-white/5 hover:border-[#d4af37]/30 transition-colors">
              <label className="block text-[11px] uppercase tracking-widest text-[#c5a880] mb-1 flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1 text-[#d4af37]" />
                Check-Out Date
              </label>
              <input
                type="date"
                value={checkOut}
                min={checkIn}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-white focus:outline-none cursor-pointer"
                required
              />
            </div>

            {/* Guests & Villa Type */}
            <div className="bg-[#0b1c15]/80 p-3 rounded-xl border border-white/5 hover:border-[#d4af37]/30 transition-colors">
              <label className="block text-[11px] uppercase tracking-widest text-[#c5a880] mb-1 flex items-center">
                <Users className="w-3.5 h-3.5 mr-1 text-[#d4af37]" />
                Guests & Villa
              </label>
              <div className="flex space-x-2">
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="bg-transparent text-xs font-medium text-white focus:outline-none cursor-pointer border-r border-white/10 pr-2"
                >
                  <option value={1} className="bg-[#0b1c15]">1 Guest</option>
                  <option value={2} className="bg-[#0b1c15]">2 Guests</option>
                  <option value={3} className="bg-[#0b1c15]">3 Guests</option>
                  <option value={4} className="bg-[#0b1c15]">4+ Guests</option>
                </select>

                <select
                  value={selectedVilla}
                  onChange={(e) => setSelectedVilla(e.target.value)}
                  className="w-full bg-transparent text-xs font-medium text-[#f5e3c3] focus:outline-none cursor-pointer truncate"
                >
                  {RESORT_DATA.villas.map((v) => (
                    <option key={v.id} value={v.id} className="bg-[#0b1c15]">
                      {v.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit Action */}
            <div className="flex items-center">
              <button
                type="submit"
                className="w-full h-full min-h-[52px] px-5 py-3 rounded-xl font-medium text-sm tracking-wider uppercase text-[#0a1c16] bg-gradient-to-r from-[#e5c69f] via-[#d4af37] to-[#c5a880] hover:brightness-110 shadow-lg hover:shadow-[#d4af37]/20 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Check Rates</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Quick Perks Line */}
          <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 text-xs text-[#b8ab99]">
            <span className="flex items-center">
              <ShieldCheck className="w-3.5 h-3.5 mr-1 text-[#d4af37]" />
              Best Rate Guarantee
            </span>
            <span>•</span>
            <span className="flex items-center">
              <Sparkles className="w-3.5 h-3.5 mr-1 text-[#d4af37]" />
              Complimentary High-Altitude Breakfast
            </span>
            <span>•</span>
            <span className="flex items-center">
              <Home className="w-3.5 h-3.5 mr-1 text-[#d4af37]" />
              Personal Butler Included
            </span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-white/10 pt-8">
          <div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#f5e3c3]">2,100 FT</div>
            <div className="text-xs uppercase tracking-widest text-[#a89b88] mt-1">Highland Altitude</div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#f5e3c3]">40 ACRES</div>
            <div className="text-xs uppercase tracking-widest text-[#a89b88] mt-1">Rainforest & Spices</div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#f5e3c3]">15 VILLAS</div>
            <div className="text-xs uppercase tracking-widest text-[#a89b88] mt-1">Private Heated Pools</div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#f5e3c3]">100%</div>
            <div className="text-xs uppercase tracking-widest text-[#a89b88] mt-1">Eco-Carbon Neutral</div>
          </div>
        </div>
      </div>
    </section>
  );
};
