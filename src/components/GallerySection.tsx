import { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';

interface GalleryItem {
  id: string;
  src: string;
  fullSrc?: string;
  title: string;
  category: 'lake' | 'suites' | 'outdoors';
  categoryLabel: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'od1',
    src: '/images_real/OD1.jpeg',
    fullSrc: '/images_real/OD1.jpeg',
    title: 'Panoramic Banasura Lake & Misty Ghats',
    category: 'lake',
    categoryLabel: 'Lake & Scenery',
    description: 'Breathtaking 180-degree view of emerald reservoir waters, forested islands, and billowing Western Ghats clouds.'
  },
  {
    id: 'img4',
    src: '/images_real/img4.jpeg',
    fullSrc: '/images_real/img4.jpeg',
    title: 'Celestial Lakeview Suite & Private Balcony',
    category: 'suites',
    categoryLabel: 'Luxury Suites',
    description: 'Floor-to-ceiling glass patio doors opening directly to the private observation balcony with panoramic water vistas.'
  },
  {
    id: 'img5',
    src: '/images_real/img5_4x3.jpeg',
    fullSrc: '/images_real/img5_cropped.jpeg',
    title: 'Traditional Lakeside Pagoda Pavilion',
    category: 'outdoors',
    categoryLabel: 'Outdoors & Pavilion',
    description: 'Waterfront pagoda with traditional terracotta tile roof and wooden railings, nestled amidst golden yellow blossoms.'
  },
  {
    id: 'img7',
    src: '/images_real/img7.jpeg',
    fullSrc: '/images_real/img7.jpeg',
    title: 'Presidential Lakefront Master Bedroom',
    category: 'suites',
    categoryLabel: 'Luxury Suites',
    description: 'Expansive master sanctuary with timber-framed windows, luxury silk bedding, and wrap-around lake balcony access.'
  },
  {
    id: 'img6',
    src: '/images_real/img6.jpeg',
    fullSrc: '/images_real/img6.jpeg',
    title: 'Highland Observation Terrace & Lake Deck',
    category: 'outdoors',
    categoryLabel: 'Outdoors & Pavilion',
    description: 'Panoramic open-air viewing deck overlooking the green amphitheater slope, resort cottages, and tranquil lake waters.'
  },
  {
    id: 'od5',
    src: '/images_real/OD5.jpeg',
    fullSrc: '/images_real/OD5.jpeg',
    title: 'Resort Waterfront Estate & Cottages',
    category: 'lake',
    categoryLabel: 'Lake & Scenery',
    description: 'The resort’s tiered architectural cottages and paved driveways nestled along the hillside directly above the lake.'
  },
  {
    id: 'img2',
    src: '/images_real/img2.jpeg',
    fullSrc: '/images_real/img2.jpeg',
    title: 'Cardamom Ridge Executive Suite Lounge',
    category: 'suites',
    categoryLabel: 'Luxury Suites',
    description: 'Modern leather sofa lounge, custom teak wardrobe, and ambient multi-hue cove ceiling illumination.'
  },
  {
    id: 'img3',
    src: '/images_real/img3.jpeg',
    fullSrc: '/images_real/img3.jpeg',
    title: 'Canopy Suite Natural Stone Wall & AC',
    category: 'suites',
    categoryLabel: 'Luxury Suites',
    description: 'Featuring rustic stone masonry accent wall, plush white linens with burgundy silk runners, and whisper-quiet climate control.'
  },
  {
    id: 'od2',
    src: '/images_real/OD2.jpeg',
    fullSrc: '/images_real/OD2.jpeg',
    title: 'Elevated Lakefront Cottages & Green Island',
    category: 'lake',
    categoryLabel: 'Lake & Scenery',
    description: 'Clear elevated view showing the scenic resort villas, manicured lawns, and the lush circular island in Banasura Sagar.'
  },
  {
    id: 'od4',
    src: '/images_real/OD4.jpeg',
    fullSrc: '/images_real/OD4.jpeg',
    title: 'Western Ghats Peaks & Ridge Silhouette',
    category: 'lake',
    categoryLabel: 'Lake & Scenery',
    description: 'The dramatic mountain ridgelines of Wayanad rising behind the calm blue waters and tropical rainforest banks.'
  },
  {
    id: 'od3',
    src: '/images_real/OD3.jpeg',
    fullSrc: '/images_real/OD3.jpeg',
    title: 'Banasura Sagar Waterway & Island Horizon',
    category: 'lake',
    categoryLabel: 'Lake & Scenery',
    description: 'Sunlit waters and verdant islands where gentle breezes and tropical bird songs create an atmosphere of stillness.'
  },
  {
    id: 'img1',
    src: '/images_real/img1_4x3.jpeg',
    fullSrc: '/images_real/img1.jpeg',
    title: 'Executive Suite Ambiance & Modern Comfort',
    category: 'suites',
    categoryLabel: 'Luxury Suites',
    description: 'A spacious perspective of the suite living area, king bed, smart entertainment, and calming LED lighting.'
  },
  {
    id: 'img8',
    src: '/images_real/img8_4x3.jpeg',
    fullSrc: '/images_real/img8.jpeg',
    title: 'Warm Amber Deluxe Suite & Window Silks',
    category: 'suites',
    categoryLabel: 'Luxury Suites',
    description: 'Elegantly styled in warm gold and deep chocolate drapery, providing a cozy and private sanctuary after a day of exploration.'
  }
];

export const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Highlights (13)' },
    { id: 'lake', label: 'Banasura Lake & Scenery' },
    { id: 'suites', label: 'Rooms & Luxury Suites' },
    { id: 'outdoors', label: 'Lakeside Pagoda & Terraces' }
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  const openLightbox = (item: GalleryItem) => {
    const idx = GALLERY_ITEMS.findIndex(g => g.id === item.id);
    setActiveLightboxIndex(idx);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  const currentItem = activeLightboxIndex !== null ? GALLERY_ITEMS[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#08140f] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] mb-3">
            <Camera className="w-4 h-4 text-[#d4af37]" />
            <span>Visual Chronicles</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#fbf9f5] font-normal tracking-tight mb-4">
            Moments at Vibe Asia
          </h2>
          <p className="text-base text-[#bfb4a5] font-light leading-relaxed">
            Immerse yourself in authentic views of our private sanctuary. From panoramic lake horizons and
            sunlit islands to bespoke balcony suites and traditional waterfront pagodas.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#d4af37] text-[#08140f] font-semibold shadow-lg shadow-[#d4af37]/20 scale-105'
                    : 'glass-card text-[#d2c8bb] hover:border-[#d4af37]/40 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid: Uniform 4:3 Ratio for all cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group glass-card rounded-3xl overflow-hidden border border-white/10 glass-card-hover cursor-pointer flex flex-col transition-all duration-300 hover:border-[#d4af37]/40"
            >
              {/* Image Frame - 100% uniform 4:3 across all items */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#07140e]">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08140f] via-transparent to-transparent opacity-75 group-hover:opacity-55 transition-opacity" />

                {/* Category Pill */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-medium tracking-wider uppercase bg-[#08140f]/85 backdrop-blur-md text-[#d4af37] border border-white/10 flex items-center shadow-md">
                    <Sparkles className="w-3 h-3 mr-1 text-[#d4af37]" />
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Maximize Icon on Hover */}
                <div className="absolute top-3.5 right-3.5 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm shadow-md">
                  <Maximize2 className="w-3.5 h-3.5 text-[#d4af37]" />
                </div>

                {/* Bottom title overlaid inside image */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h4 className="font-serif text-lg sm:text-xl text-white font-medium group-hover:text-[#d4af37] transition-colors leading-snug drop-shadow-md">
                    {item.title}
                  </h4>
                </div>
              </div>

              {/* Card Caption Bar - Compact & consistent, no stretching */}
              <div className="px-4 py-3 bg-[#0a1c15]/90 flex items-center justify-between border-t border-white/5">
                <p className="text-xs text-[#a09485] font-light line-clamp-1 flex-1 pr-2">
                  {item.description}
                </p>
                <span className="text-[11px] text-[#d4af37] font-semibold shrink-0 uppercase tracking-wider group-hover:underline">
                  View Full
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div
          onClick={() => setActiveLightboxIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-lg animate-in fade-in duration-200"
        >
          {/* Close button */}
          <button
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-[#d4af37] transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Navigation Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/70 hover:bg-[#d4af37] text-white hover:text-[#08140f] transition-all cursor-pointer backdrop-blur-sm shadow-xl"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/70 hover:bg-[#d4af37] text-white hover:text-[#08140f] transition-all cursor-pointer backdrop-blur-sm shadow-xl"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full max-h-[92vh] flex flex-col glass-card rounded-3xl overflow-hidden border border-[#d4af37]/30 shadow-2xl relative"
          >
            <div className="relative flex-1 flex items-center justify-center bg-black/80 overflow-hidden min-h-[300px] sm:min-h-[500px]">
              <img
                src={currentItem.fullSrc || currentItem.src}
                alt={currentItem.title}
                className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>

            {/* Bottom details bar */}
            <div className="p-4 sm:p-5 bg-[#08140f] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                    {currentItem.categoryLabel}
                  </span>
                  <span className="text-xs text-[#8e8274]">•</span>
                  <span className="text-xs text-[#a09485]">
                    {activeLightboxIndex! + 1} of {GALLERY_ITEMS.length}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-medium">
                  {currentItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#bab0a0] font-light mt-0.5">
                  {currentItem.description}
                </p>
              </div>

              {/* Action buttons inside lightbox */}
              <div className="flex items-center space-x-2 shrink-0">
                <a
                  href="#villas"
                  onClick={() => setActiveLightboxIndex(null)}
                  className="px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold text-[#08140f] bg-gradient-to-r from-[#e5c69f] via-[#d4af37] to-[#c5a880] hover:brightness-110 shadow-md cursor-pointer"
                >
                  Reserve Stay
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
