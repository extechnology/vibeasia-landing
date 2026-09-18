import { useState } from 'react';
import { MapPin, Phone, Mail, Compass, Send, Check } from 'lucide-react';
import { RESORT_DATA } from '../data/resortData';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer id="location" className="bg-[#050c09] text-[#e8ded2] relative border-t border-[#d4af37]/20 pt-20 pb-12 overflow-hidden">
      {/* Top Location & Route Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-[#d4af37]/20 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Location Info */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#c5a880]">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Sanctuary Location</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#fbf9f5] font-medium">
                Highlands of Vythiri, Wayanad
              </h3>
              <p className="text-sm text-[#bab0a0] font-light leading-relaxed">
                Tucked into the Western Ghats mountain ridge at 2,100 ft elevation, surrounded by
                ancient shola rainforests and tea plantations. Accessible via scenic mountain ghat roads
                or our private on-site helipad.
              </p>

              {/* Transit Distances */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-[#091510] p-4 rounded-2xl border border-white/5">
                  <span className="text-xs text-[#d4af37] font-semibold block">85 KM</span>
                  <span className="text-xs text-[#cfc4b5] block mt-0.5">Calicut Airport (CCJ)</span>
                  <span className="text-[11px] text-[#8e8274]">2.2 hrs via Churam</span>
                </div>
                <div className="bg-[#091510] p-4 rounded-2xl border border-white/5">
                  <span className="text-xs text-[#d4af37] font-semibold block">95 KM</span>
                  <span className="text-xs text-[#cfc4b5] block mt-0.5">Kannur Airport (CNN)</span>
                  <span className="text-[11px] text-[#8e8274]">2.5 hrs scenic drive</span>
                </div>
                <div className="bg-[#091510] p-4 rounded-2xl border border-white/5">
                  <span className="text-xs text-[#d4af37] font-semibold block">275 KM</span>
                  <span className="text-xs text-[#cfc4b5] block mt-0.5">Bangalore</span>
                  <span className="text-[11px] text-[#8e8274]">Via Bandipur Reserve</span>
                </div>
              </div>

              {/* Direct Concierge Contact */}
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#cfc4b5]">
                <a
                  href={`tel:${RESORT_DATA.phone}`}
                  className="flex items-center hover:text-[#d4af37] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-[#d4af37]" />
                  <span>{RESORT_DATA.phone}</span>
                </a>
                <a
                  href={`mailto:${RESORT_DATA.email}`}
                  className="flex items-center hover:text-[#d4af37] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 mr-1.5 text-[#d4af37]" />
                  <span>{RESORT_DATA.email}</span>
                </a>
              </div>
            </div>

            {/* Right Interactive Coordinates & Helicopter Card */}
            <div className="lg:col-span-6 bg-[#081510] p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#c5a880] uppercase tracking-wider block">GPS Coordinates</span>
                  <span className="font-mono text-sm text-[#f5e3c3] font-medium">11.5528° N, 76.0422° E</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#c5a880] uppercase tracking-wider block">Altitude</span>
                  <span className="font-mono text-sm text-[#f5e3c3] font-medium">2,100 FT (640m)</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0c1f17] border border-[#d4af37]/20 flex items-start space-x-3">
                <Compass className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div className="text-xs text-[#d0c5b5]">
                  <strong className="text-white font-serif text-sm block mb-0.5">Chartered Helipad Arrival</strong>
                  Private helicopter charters landing at Vibe Asia's on-site helipad can be coordinated
                  directly with our Head of Aviation Concierge from Cochin, Calicut, or Bangalore.
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Wayanad+Kerala"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-xl text-xs uppercase tracking-wider font-semibold text-[#08140f] bg-[#f5e3c3] hover:bg-[#d4af37] transition-colors flex items-center justify-center space-x-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open Directions in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="Vibe Asia Logo"
                className="h-12 w-12 rounded-full object-cover border border-[#d4af37]/40 shadow-lg"
              />
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.18em] text-[#fbf9f5] flex items-center">
                  VIBE ASIA
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#d4af37] ml-2"></span>
                </span>
                <span className="text-xs tracking-[0.35em] text-[#c5a880] uppercase -mt-0.5">
                  Resort & Spa • Wayanad
                </span>
              </div>
            </div>
            <p className="text-xs text-[#a89b88] font-light leading-relaxed max-w-sm">
              An architectural homage to Kerala's timeless nature. 40 acres of organic tea,
              cardamom groves, private infinity pool villas, and transformative Ayurvedic healing.
            </p>
            <div className="text-xs text-[#c5a880]">
              Certified Carbon Neutral • Zero Single-Use Plastics
            </div>
          </div>

          {/* Nav Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-4">
              Sanctuaries
            </h4>
            <ul className="space-y-2.5 text-xs text-[#cfc4b5]">
              <li><a href="#villas" className="hover:text-[#d4af37] transition-colors">Celestial Pool Villas</a></li>
              <li><a href="#villas" className="hover:text-[#d4af37] transition-colors">Canopy Treehouse Suites</a></li>
              <li><a href="#villas" className="hover:text-[#d4af37] transition-colors">Banasura Presidential Estate</a></li>
              <li><a href="#villas" className="hover:text-[#d4af37] transition-colors">Cardamom Garden Suites</a></li>
            </ul>
          </div>

          {/* Experiences Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-4">
              Experiences
            </h4>
            <ul className="space-y-2.5 text-xs text-[#cfc4b5]">
              <li><a href="#wellness" className="hover:text-[#d4af37] transition-colors">Veda Ayurvedic Spa</a></li>
              <li><a href="#dining" className="hover:text-[#d4af37] transition-colors">Spice Valley Dining</a></li>
              <li><a href="#experiences" className="hover:text-[#d4af37] transition-colors">Chembra Heart Lake Trek</a></li>
              <li><a href="#experiences" className="hover:text-[#d4af37] transition-colors">Banasura Bamboo Safari</a></li>
            </ul>
          </div>

          {/* Newsletter / Club */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-4">
              Private Guest Circle
            </h4>
            <p className="text-xs text-[#a89b88] mb-4 font-light">
              Receive seasonal private offers, high-altitude tea harvest releases, and wellness retreats.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-[#11291e] border border-[#d4af37]/30 text-xs text-[#f5e3c3] flex items-center">
                <Check className="w-4 h-4 mr-2 text-[#d4af37]" />
                <span>You are on our private guest list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#081510] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-[#8e8274] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold text-[#08140f] bg-gradient-to-r from-[#e5c69f] via-[#d4af37] to-[#c5a880] hover:brightness-110 flex items-center justify-center space-x-1"
                >
                  <span>Subscribe</span>
                  <Send className="w-3 h-3 ml-1" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom micro bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8e8274] space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} Vibe Asia Resort & Spa, Wayanad. All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-[#d4af37] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">Terms of Stay</a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">Sustainability Report</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
