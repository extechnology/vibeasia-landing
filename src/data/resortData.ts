export interface Villa {
  id: string;
  name: string;
  category: 'pool-villa' | 'treehouse' | 'suite' | 'mansion';
  tagline: string;
  description: string;
  image: string;
  size: string;
  occupancy: string;
  bed: string;
  features: string[];
  pricePerNight: number;
  highlightBadge?: string;
}

export interface SpaTreatment {
  id: string;
  title: string;
  sanskritName: string;
  duration: string;
  description: string;
  benefits: string[];
  price: number;
}

export interface DiningVenue {
  id: string;
  name: string;
  type: string;
  hours: string;
  description: string;
  highlights: string[];
  image: string;
}

export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  difficulty?: string;
  description: string;
  image: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  guestName: string;
  location: string;
  stayType: string;
  rating: number;
  comment: string;
  date: string;
}

export const RESORT_DATA = {
  name: "Vibe Asia",
  subname: "Resort & Spa • Wayanad",
  location: "Vythiri, Wayanad Hills, Kerala 673576, India",
  elevation: "2,100 ft above sea level",
  temperature: "21°C • Misty Breeze",
  phone: "+91 4936 288 900",
  whatsapp: "+91 9447 182 900",
  email: "reservations@vibeasiawayanad.com",
  checkIn: "2:00 PM",
  checkOut: "11:00 AM",

  villas: [
    {
      id: "celestial-pool-villa",
      name: "The Celestial Infinity Pool Villa",
      category: "pool-villa",
      tagline: "Panoramic mountain sunrise with private heated infinity plunge pool",
      description: "Perched along the ridge, each Celestial Villa boasts a private temperature-controlled infinity pool that merges seamlessly with the misty valleys. Crafted with indigenous teak wood and Italian marble with floor-to-ceiling glass.",
      image: "/images/pool-villa.jpg",
      size: "1,450 sq.ft",
      occupancy: "2 Adults + 1 Child",
      bed: "Custom Emperor Teak Bed",
      features: [
        "Private heated infinity pool (24ft)",
        "Panoramic mist & tea estate view",
        "Personal estate butler service",
        "Outdoor stone rain shower & sun deck",
        "Complimentary high-altitude tea bar"
      ],
      pricePerNight: 28500,
      highlightBadge: "Most Requested"
    },
    {
      id: "canopy-treehouse",
      name: "Canopy Luxury Treehouse Pavilion",
      category: "treehouse",
      tagline: "Suspended 45 feet above ground in ancient rainforest canopy",
      description: "An architectural marvel cradled by giant cedar and rosewood trees. Features an outdoor cedar hot tub, wrap-around timber balcony, and ambient forest acoustic acoustics for complete immersion in nature.",
      image: "/images/treehouse.jpg",
      size: "1,150 sq.ft",
      occupancy: "2 Adults (Couples Sanctuary)",
      bed: "Floating King Bed",
      features: [
        "Outdoor hydrotherapy heated jacuzzi",
        "Bird's-eye valley & canopy vistas",
        "Private timber cantilevered deck",
        "Artisanal French press & Wayanad beans",
        "Glass-enclosed luxury shower"
      ],
      pricePerNight: 24000,
      highlightBadge: "Honeymoon Favorite"
    },
    {
      id: "banasura-mansion",
      name: "Banasura Two-Bedroom Presidential Mansion",
      category: "mansion",
      tagline: "Ultra-private sprawling estate for families and dignitaries",
      description: "Set on its own private spur with 360-degree vistas of Banasura peak and rolling tea gardens. Features a 38-foot private lap pool, dedicated chef's dining pavilion, private lawn, and dual master suites.",
      image: "/images/hero.jpg",
      size: "2,850 sq.ft",
      occupancy: "4 Adults + 2 Children",
      bed: "Two Master Suites (2 King Beds)",
      features: [
        "38-foot private infinity lap pool",
        "Dedicated private chef on request",
        "Private landscaped tea garden lawn",
        "Bespoke cellar & mixologist service",
        "Complimentary Calicut Airport chauffeur"
      ],
      pricePerNight: 54000,
      highlightBadge: "Signature Estate"
    },
    {
      id: "spice-plantation-suite",
      name: "Cardamom Ridge Garden Suite",
      category: "suite",
      tagline: "Ground-level haven bordered by fragrant cardamom and vanilla groves",
      description: "Immerse yourself in botanical aromas. Featuring a private stone courtyard, deep sunken copper soaking bath, and direct pathway winding into the resort's 40-acre organic spice estate.",
      image: "/images/ayurveda-spa.jpg",
      size: "950 sq.ft",
      occupancy: "2 Adults",
      bed: "Handcrafted Teak King Bed",
      features: [
        "Private botanical stone courtyard",
        "Hand-hammered copper soaking tub",
        "Private patio with plantation vistas",
        "Organic herbal bath rituals",
        "Fresh harvest tea ceremony daily"
      ],
      pricePerNight: 19500
    }
  ] as Villa[],

  spaTreatments: [
    {
      id: "abhyangam",
      title: "Royal Kerala Abhyangam",
      sanskritName: "अभ्यङ्गम् • Full Body Rejuvenation",
      duration: "75 Minutes",
      description: "A synchronized, therapeutic warm medicated herbal oil massage using authentic Dhanwantharam oils to detoxify cellular tissue and melt deep tension.",
      benefits: ["Restores vitality", "Stimulates lymphatic drainage", "Relieves muscle soreness"],
      price: 4800
    },
    {
      id: "shirodhara",
      title: "Divine Shirodhara Stream",
      sanskritName: "शिरोधारा • Mind Awakening",
      duration: "60 Minutes",
      description: "A continuous rhythmic pouring of warm medicated herbal oils over the forehead's 'Third Eye' center, inducing profound meditative tranquility and restorative sleep.",
      benefits: ["Deep mental relaxation", "Cures insomnia & stress", "Calms central nervous system"],
      price: 5200
    },
    {
      id: "elakizhi",
      title: "Elakizhi Herbal Poultice Therapy",
      sanskritName: "इलाकिषि • Herbal Leaf Compress",
      duration: "75 Minutes",
      description: "Warm linen boluses filled with fresh medicinal herbal leaves and spices, fried in therapeutic oils and rhythmically patted across energy pathways.",
      benefits: ["Relieves joint stiffness", "Enhances peripheral circulation", "Alleviates chronic backache"],
      price: 4900
    },
    {
      id: "forest-sound-bath",
      title: "Rainforest Sound Healing & Yoga",
      sanskritName: "नाद योग • Sacred Resonance",
      duration: "60 Minutes",
      description: "Conducted at sunrise on the open cedar deck with Tibetan singing bowls, brass gongs, and breathwork amidst the natural chorus of tropical birds and mist.",
      benefits: ["Chakra alignment", "Emotional release", "Breath expansion"],
      price: 3200
    }
  ] as SpaTreatment[],

  diningVenues: [
    {
      id: "spice-valley",
      name: "Spice Valley",
      type: "Cliffside Fine Dining & Malabar Gastronomy",
      hours: "Breakfast: 7:00 AM - 10:30 AM | Dinner: 7:00 PM - 11:00 PM",
      description: "Perched high on the granite cliff, Spice Valley celebrates the centuries-old spice trade of Wayanad. Relish fresh catch from the Arabian Sea paired with hand-harvested black pepper, coconut milk, and fragrant tellicherry spices.",
      highlights: ["Open-air starlit terrace", "Malabar Seafood Symphony", "Farm-to-fork organic ingredients", "Sommelier-curated international wines"],
      image: "/images/dining.jpg"
    },
    {
      id: "the-mist-lounge",
      name: "The Mist Lounge & High-Altitude Bar",
      type: "Artisanal Cocktails & Rare Estate Teas",
      hours: "11:00 AM - Midnight",
      description: "Overlooking the infinity pool and sweeping Western Ghats valleys. Specializing in botanical cocktails infused with resort-grown lemongrass, star anise, wild honey, and afternoon high tea.",
      highlights: ["Single-origin Wayanad coffee cupping", "Botanical mixology cocktails", "Sunset acoustic sessions", "Fireplace lounge"],
      image: "/images/hero.jpg"
    },
    {
      id: "canopy-candlelight",
      name: "Bespoke Plantation Candlelit Dinners",
      type: "Private Romantic Dining Experience",
      hours: "Available on Reservation (7:30 PM - 10:30 PM)",
      description: "An intimate table set amidst the fragrant cardamom shrubs under a canopy of fairy lights and glowing lanterns. Features a personal chef and bespoke 5-course degustation menu.",
      highlights: ["Dedicated private butler", "5-course tailor-made menu", "Champagne under the stars", "Acoustic instrumental music"],
      image: "/images/dining.jpg"
    }
  ] as DiningVenue[],

  experiences: [
    {
      id: "tea-estate-walk",
      title: "Private Tea & Cardamom Trail",
      subtitle: "Guided by our Resident Naturalist",
      duration: "2 Hours • Morning",
      description: "Wander through rolling green tea hills, pluck two leaves and a bud, uncover secret wild pepper vines, and conclude with an authentic sensory tea tasting session.",
      image: "/images/plantation-walk.jpg",
      tag: "Botanical Exploration"
    },
    {
      id: "chembra-peak-trek",
      title: "Chembra Peak & Heart Lake Trek",
      subtitle: "Highest Peak in Wayanad (2,100m)",
      duration: "4.5 Hours • Early Morning",
      difficulty: "Moderate",
      description: "Embark on an exhilarating sunrise trek through misty shola forests to reach the legendary perennial heart-shaped lake, surrounded by rare endemic orchids and mountain mist.",
      image: "/images/hero.jpg",
      tag: "Mountain Adventure"
    },
    {
      id: "bamboo-rafting",
      title: "Banasura Bamboo Rafting",
      subtitle: "Tranquil Waterway Safari",
      duration: "3 Hours • Sunset",
      description: "Drift gently on handcrafted bamboo rafts across the calm blue waters of Banasura Sagar, taking in panoramic vistas of the Western Ghats mountain shadows.",
      image: "/images/plantation-walk.jpg",
      tag: "Serene Wilderness"
    },
    {
      id: "night-campfire",
      title: "Highland Campfire & Stargazing",
      subtitle: "Under Western Ghats Constellations",
      duration: "Evening • 8:00 PM onwards",
      description: "Gather around crackling cedar wood fires on the observation deck. Enjoy live acoustic melodies, roasted local chestnuts, and deep-sky telescope observations.",
      image: "/images/dining.jpg",
      tag: "Evening Magic"
    }
  ] as Experience[],

  amenities: [
    {
      icon: "Waves",
      title: "360° Heated Infinity Pool",
      description: "Dramatically perched over the mist valley with submerged loungers and poolside refreshment service."
    },
    {
      icon: "Flower2",
      title: "Veda Ayurvedic Spa",
      description: "Authentic Vaidya consultations, healing herbal baths, and holistic panchakarma therapies."
    },
    {
      icon: "UtensilsCrossed",
      title: "2 Signature Restaurants",
      description: "Organic farm-to-table dining, Malabar gourmet delicacies, and cliffside romantic terraces."
    },
    {
      icon: "Plane",
      title: "Private Helipad Access",
      description: "Direct aerial arrival transfers available from Calicut, Kochi, and Bangalore."
    },
    {
      icon: "Sparkles",
      title: "24-Hour Estate Butler",
      description: "Personalized itinerary planning, in-villa dining, and seamless concierge assistance."
    },
    {
      icon: "Compass",
      title: "Guided Nature Expeditions",
      description: "Complimentary daily guided bird watching, plantation trails, and sunrise yoga sessions."
    },
    {
      icon: "Wifi",
      title: "High-Speed Starlink Wifi",
      description: "Flawless ultra-fast connectivity across the entire 40-acre rainforest property."
    },
    {
      icon: "TreePine",
      title: "Eco-Carbon Neutral Estate",
      description: "100% solar rainwater harvesting, zero single-use plastic, and endemic forest conservation."
    }
  ],

  testimonials: [
    {
      id: "1",
      guestName: "Vikram & Ananya Malhotra",
      location: "Mumbai, India",
      stayType: "Celestial Pool Villa Stay",
      rating: 5,
      comment: "Waking up to the mist rolling over our private infinity pool was pure poetry. The silence, the scents of wild cardamom, and the hospitality of the Vibe Asia team made this our all-time favorite escape in India.",
      date: "February 2026"
    },
    {
      id: "2",
      guestName: "Julian & Sophie Von Berg",
      location: "Munich, Germany",
      stayType: "Canopy Treehouse Villa",
      rating: 5,
      comment: "The treehouse experience is world-class. You are literally floating in the clouds! The Ayurvedic Shirodhara at Veda Spa wiped away 6 months of corporate stress. An absolute 10/10 masterpiece.",
      date: "January 2026"
    },
    {
      id: "3",
      guestName: "Dr. Arvind Swaminathan",
      location: "Bangalore, India",
      stayType: "Banasura Presidential Mansion",
      rating: 5,
      comment: "We booked the Presidential Mansion for a family celebration. The private chef, heated pool, and bespoke Chembra trek arrangement were flawless. Vibe Asia sets a new benchmark for Kerala luxury.",
      date: "March 2026"
    }
  ] as Testimonial[],

  faqs: [
    {
      q: "What is the best time of year to visit Vibe Asia Wayanad?",
      a: "Wayanad is a year-round paradise. October to March offers crisp, cool mountain mornings (18°C–24°C) with ethereal morning mist. June to September is the magical monsoon season, where lush rainforest waterfalls and tea gardens are at their most vibrant."
    },
    {
      q: "How do we reach the resort from the nearest airports?",
      a: "Calicut International Airport (CCJ) is approximately 85 km (2 hours scenic drive through the Ghats). Kannur International Airport (CNN) is 95 km away. Bangalore is approximately a 5.5 hour drive (275 km). We provide private luxury chauffeur pick-up in Mercedes and Toyota Vellfire vehicles upon request, as well as chartered helicopter transfers to our on-site helipad."
    },
    {
      q: "Are the private villa plunge pools temperature-controlled?",
      a: "Yes, all private pools in our Celestial Infinity Pool Villas and Banasura Presidential Mansion are equipped with eco-friendly solar heat pumps, maintaining a soothing 28°C–30°C temperature throughout the day and evening."
    },
    {
      q: "Can you accommodate custom dietary and Ayurvedic meal plans?",
      a: "Absolutely. Our Executive Chef collaborates directly with our resident Ayurvedic doctor to customize pure sattvic meals, gluten-free, vegan, Jain, and special dietary requirements without ever compromising on flavor or elegance."
    }
  ]
};
