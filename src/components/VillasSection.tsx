import { useState } from 'react';
import { Bed, Users, Maximize2, Sparkles, Check, ArrowRight, X, Waves } from 'lucide-react';
import { RESORT_DATA, type Villa } from '../data/resortData';

interface VillasSectionProps {
  onReserveVilla: (villaId: string) => void;
}

export const VillasSection = ({ onReserveVilla }: VillasSectionProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedVillaDetail, setSelectedVillaDetail] = useState<Villa | null>(null);

  const categories = [
    { id: 'all', label: 'All Sanctuaries' },
    { id: 'pool-villa', label: 'Infinity Pool Villas' },
    { id: 'treehouse', label: 'Rainforest Treehouses' },
    { id: 'mansion', label: 'Presidential Estates' }
  ];

  const filteredVillas = activeCategory === 'all'
    ? RESORT_DATA.villas
    : RESORT_DATA.villas.filter(v => v.category === activeCategory);

  return (
    <section id="villas" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#08140f]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#16382a]/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Private Sanctuaries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#fbf9f5] font-normal tracking-tight mb-4">
            Curated Living Amidst The Mist
          </h2>
          <p className="text-base text-[#bfb4a5] font-light leading-relaxed">
            Each villa is architected to bring the dramatic wilderness of Wayanad inside.
            Bespoke Kerala teak craftsmanship, floor-to-ceiling panoramic glass, and secluded heated pools.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#d4af37] text-[#08140f] font-semibold shadow-lg shadow-[#d4af37]/20 scale-105'
                    : 'glass-card text-[#d2c8bb] hover:border-[#d4af37]/40 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Villas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredVillas.map((villa) => (
            <div
              key={villa.id}
              className="glass-card rounded-3xl overflow-hidden group glass-card-hover flex flex-col border border-white/10"
            >
              {/* Image with zoom and badge */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={villa.image}
                  alt={villa.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c15] via-transparent to-transparent opacity-80" />

                {/* Highlight Badge */}
                {villa.highlightBadge && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#d4af37] text-[#08140f] shadow-lg flex items-center">
                      <Sparkles className="w-3 h-3 mr-1" />
                      {villa.highlightBadge}
                    </span>
                  </div>
                )}

                {/* Nightly price overlay */}
                <div className="absolute bottom-4 right-4 bg-[#08140f]/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10">
                  <span className="text-xs text-[#a09485]">From</span>{' '}
                  <span className="font-serif text-lg font-bold text-[#f5e3c3]">
                    ₹{villa.pricePerNight.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[11px] text-[#a09485]"> / night</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#fbf9f5] font-medium group-hover:text-[#d4af37] transition-colors mb-2">
                    {villa.name}
                  </h3>
                  <p className="text-xs italic text-[#c5a880] mb-4">
                    {villa.tagline}
                  </p>
                  <p className="text-sm text-[#bab0a0] font-light leading-relaxed mb-6 line-clamp-2">
                    {villa.description}
                  </p>

                  {/* Specs Bar */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 text-xs text-[#d2c8bb] mb-6">
                    <div className="flex items-center space-x-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{villa.size}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{villa.occupancy}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Bed className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span className="truncate">{villa.bed}</span>
                    </div>
                  </div>

                  {/* Feature Bullets */}
                  <ul className="space-y-2 mb-8">
                    {villa.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center text-xs text-[#b8ab99]">
                        <Check className="w-3.5 h-3.5 mr-2 text-[#d4af37] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center space-x-3 pt-2">
                  <button
                    onClick={() => setSelectedVillaDetail(villa)}
                    className="flex-1 py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-medium text-[#f5e3c3] border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all text-center cursor-pointer"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onReserveVilla(villa.id)}
                    className="flex-1 py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-semibold text-[#08140f] bg-gradient-to-r from-[#e5c69f] via-[#d4af37] to-[#c5a880] hover:brightness-110 shadow-md transition-all flex items-center justify-center space-x-1 cursor-pointer"
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Villa Quick Detail Modal */}
      {selectedVillaDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-card max-w-2xl w-full rounded-3xl overflow-hidden border border-[#d4af37]/40 shadow-2xl relative max-h-[90vh] flex flex-col">
            {/* Close Button */}
            <button
              onClick={() => setSelectedVillaDetail(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:text-[#d4af37] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/9] shrink-0">
              <img
                src={selectedVillaDetail.image}
                alt={selectedVillaDetail.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1c16] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                  {selectedVillaDetail.category.replace('-', ' ')}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                  {selectedVillaDetail.name}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <p className="text-sm text-[#d0c5b5] font-light leading-relaxed">
                {selectedVillaDetail.description}
              </p>

              <div className="grid grid-cols-3 gap-3 p-4 bg-[#0a1b14] rounded-2xl border border-white/5 text-center text-xs">
                <div>
                  <span className="text-[#a09485] block">Villa Size</span>
                  <strong className="text-[#f5e3c3] font-serif text-base block mt-0.5">{selectedVillaDetail.size}</strong>
                </div>
                <div>
                  <span className="text-[#a09485] block">Occupancy</span>
                  <strong className="text-[#f5e3c3] font-serif text-base block mt-0.5">{selectedVillaDetail.occupancy}</strong>
                </div>
                <div>
                  <span className="text-[#a09485] block">Bedding</span>
                  <strong className="text-[#f5e3c3] font-serif text-base block mt-0.5">{selectedVillaDetail.bed}</strong>
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#c5a880] mb-3 font-semibold flex items-center">
                  <Waves className="w-3.5 h-3.5 mr-1.5 text-[#d4af37]" />
                  Villa Inclusions & Luxury Privileges
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedVillaDetail.features.map((f, i) => (
                    <li key={i} className="flex items-start text-xs text-[#cfc4b5]">
                      <Check className="w-3.5 h-3.5 mr-2 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#a09485]">Nightly Rate</div>
                  <div className="font-serif text-2xl font-bold text-[#f5e3c3]">
                    ₹{selectedVillaDetail.pricePerNight.toLocaleString('en-IN')}{' '}
                    <span className="text-xs font-normal text-[#a09485]">/ night + taxes</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    const id = selectedVillaDetail.id;
                    setSelectedVillaDetail(null);
                    onReserveVilla(id);
                  }}
                  className="px-6 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold text-[#08140f] bg-gradient-to-r from-[#e5c69f] via-[#d4af37] to-[#c5a880] hover:brightness-110 shadow-lg cursor-pointer"
                >
                  Book This Sanctuary
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
