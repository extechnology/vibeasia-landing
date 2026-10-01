import { UtensilsCrossed, Sparkles, Clock, Check, Wine, Coffee } from 'lucide-react';

interface DiningSectionProps {
  onReserveTable: () => void;
}

export const DiningSection = ({ onReserveTable }: DiningSectionProps) => {
  return (
    <section id="dining" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#08140f] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] mb-3">
            <UtensilsCrossed className="w-4 h-4 text-[#d4af37]" />
            <span>Malabar Haute Cuisine</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#fbf9f5] font-normal tracking-tight mb-4">
            Flavors Born From Rain & Spice
          </h2>
          <p className="text-base text-[#bfb4a5] font-light leading-relaxed">
            Wayanad’s spice hills have drawn global traders for millennia. Our culinary masters blend
            fresh coastal Malabar catches, organic plantation spices, and slow clay pot cooking over open woodfires.
          </p>
        </div>

        {/* Feature Hero Card */}
        <div className="relative rounded-3xl overflow-hidden glass-card border border-[#d4af37]/30 shadow-2xl mb-12 group">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
            {/* Image side */}
            <div className="lg:col-span-7 relative min-h-[320px] overflow-hidden">
              <img
                src="/images_real/img6.jpeg"
                alt="Panoramic Observation Terrace Dining overlooking the Lake at Vibe Asia"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-[#08140f] opacity-90" />
            </div>

            {/* Content side */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-[#0a1c15]/90 backdrop-blur-md">
              <div>
                <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Signature Experience</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#fbf9f5] font-medium mb-3">
                  Spice Valley Cliffside Pavilion
                </h3>
                <p className="text-xs text-[#c5a880] flex items-center mb-4">
                  <Clock className="w-3.5 h-3.5 mr-1 text-[#d4af37]" />
                  Breakfast: 7:00 AM – 10:30 AM | Dinner: 7:00 PM – 11:00 PM
                </p>
                <p className="text-sm text-[#bab0a0] font-light leading-relaxed mb-6">
                  Suspended over granite cliffs with panoramic twilight valley views. Savor signature
                  Tellicherry Pepper Crab, slow-simmered Alleppey Meen Curry, freshly baked Kerala Appams,
                  and artisanal desserts infused with local wild honey.
                </p>

                <div className="space-y-2 mb-8">
                  <div className="flex items-center text-xs text-[#cfc4b5]">
                    <Check className="w-3.5 h-3.5 mr-2 text-[#d4af37]" />
                    <span>Open-air starlit terrace with mountain campfire</span>
                  </div>
                  <div className="flex items-center text-xs text-[#cfc4b5]">
                    <Check className="w-3.5 h-3.5 mr-2 text-[#d4af37]" />
                    <span>Catch of the day flown in from Beypore Harbor</span>
                  </div>
                  <div className="flex items-center text-xs text-[#cfc4b5]">
                    <Check className="w-3.5 h-3.5 mr-2 text-[#d4af37]" />
                    <span>Private wine cellar with sommelier pairings</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={onReserveTable}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold text-[#08140f] bg-gradient-to-r from-[#e5c69f] via-[#d4af37] to-[#c5a880] hover:brightness-110 shadow-lg cursor-pointer"
                >
                  Reserve Cliffside Table
                </button>
                <span className="text-xs text-[#a09485]">Complimentary for Resident Guests</span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Dining Venues */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mist Lounge */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 glass-card-hover flex flex-col justify-between overflow-hidden">
            <div>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-5">
                <img
                  src="/images_real/OD2.jpeg"
                  alt="The Mist Lounge & High-Altitude Lake Bar"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08140f]/60 via-transparent to-transparent" />
              </div>

              <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#d4af37] mb-2 font-medium">
                <Coffee className="w-3.5 h-3.5" />
                <span>High-Altitude Tea & Cocktail Bar</span>
              </div>
              <h4 className="font-serif text-2xl text-white font-medium mb-3">
                The Mist Lounge
              </h4>
              <p className="text-sm text-[#bab0a0] font-light leading-relaxed mb-6">
                Sink into leather club armchairs before a crackling fireplace. Sample rare single-estate
                white and orthodox teas harvested from Wayanad slopes, or order cocktails infused with fresh lemongrass,
                cardamom tincture, and artisanal small-batch rums.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-[#11271f] text-xs text-[#e8ded2]">
                  Single-Origin Wayanad Coffee
                </span>
                <span className="px-3 py-1 rounded-full bg-[#11271f] text-xs text-[#e8ded2]">
                  Sunset Live Acoustic
                </span>
                <span className="px-3 py-1 rounded-full bg-[#11271f] text-xs text-[#e8ded2]">
                  Fireplace & Cigar Nook
                </span>
              </div>
            </div>
            <div className="text-xs text-[#c5a880] font-medium pt-2 border-t border-white/5">
              Open Daily: 11:00 AM – Midnight
            </div>
          </div>

          {/* Candlelit Plantation */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 glass-card-hover flex flex-col justify-between overflow-hidden">
            <div>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-5">
                <img
                  src="/images_real/img5_cropped.jpeg"
                  alt="Lakeside Gazebo Private Candlelit Dining"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08140f]/60 via-transparent to-transparent" />
              </div>

              <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#d4af37] mb-2 font-medium">
                <Wine className="w-3.5 h-3.5" />
                <span>Ultra-Private Romance</span>
              </div>
              <h4 className="font-serif text-2xl text-white font-medium mb-3">
                Lakeside Gazebo Candlelit Dinners
              </h4>
              <p className="text-sm text-[#bab0a0] font-light leading-relaxed mb-6">
                An enchanting secluded table set inside our traditional terracotta-tiled lakeside pagoda pavilion,
                surrounded by yellow cassia blossoms and gentle water. A dedicated private chef prepares a personalized
                5-course gastronomic journey accompanied by fine champagne.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-[#11271f] text-xs text-[#e8ded2]">
                  Dedicated Personal Butler
                </span>
                <span className="px-3 py-1 rounded-full bg-[#11271f] text-xs text-[#e8ded2]">
                  5-Course Degustation Menu
                </span>
                <span className="px-3 py-1 rounded-full bg-[#11271f] text-xs text-[#e8ded2]">
                  Traditional Water Pavilion
                </span>
              </div>
            </div>
            <div className="text-xs text-[#c5a880] font-medium pt-2 border-t border-white/5">
              Requires 24-hour advance reservation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
