import {
  Waves,
  Flower2,
  UtensilsCrossed,
  Plane,
  Sparkles,
  Compass,
  Wifi,
  TreePine
} from 'lucide-react';
import { RESORT_DATA } from '../data/resortData';

export const AmenitiesSection = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Waves: <Waves className="w-6 h-6 text-[#d4af37]" />,
    Flower2: <Flower2 className="w-6 h-6 text-[#d4af37]" />,
    UtensilsCrossed: <UtensilsCrossed className="w-6 h-6 text-[#d4af37]" />,
    Plane: <Plane className="w-6 h-6 text-[#d4af37]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#d4af37]" />,
    Compass: <Compass className="w-6 h-6 text-[#d4af37]" />,
    Wifi: <Wifi className="w-6 h-6 text-[#d4af37]" />,
    TreePine: <TreePine className="w-6 h-6 text-[#d4af37]" />
  };

  return (
    <section id="amenities" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#08140f]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Unmatched Privileges</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#fbf9f5] font-normal tracking-tight mb-4">
            World-Class Resort Amenities
          </h2>
          <p className="text-base text-[#bfb4a5] font-light leading-relaxed">
            Every convenience is tailored to elevate your stay without compromising the peaceful solitude
            of Wayanad's highland biosphere.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESORT_DATA.amenities.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-3xl border border-white/10 glass-card-hover flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#122e22] flex items-center justify-center mb-6 group-hover:bg-[#d4af37] transition-colors duration-300 group-hover:[&_svg]:text-[#08140f]">
                  {iconMap[item.icon] || <Sparkles className="w-6 h-6 text-[#d4af37]" />}
                </div>
                <h3 className="font-serif text-xl text-[#fbf9f5] font-medium mb-2 group-hover:text-[#d4af37] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#a89b88] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#c5a880]">
                <span>Signature Service</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
