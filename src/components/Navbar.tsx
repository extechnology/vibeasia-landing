import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (villaId?: string) => void;
}

export const Navbar = ({ onOpenBooking }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Villas', href: '#villas' },
    { label: 'Wellness & Spa', href: '#wellness' },
    { label: 'Dining', href: '#dining' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08140f]/95 backdrop-blur-md shadow-xl border-b border-[#d4af37]/20 py-3'
          : 'bg-gradient-to-b from-[#08140f]/90 via-[#08140f]/40 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center space-x-3 group shrink-0">
            <img
              src="/logo.png"
              alt="Vibe Asia Logo"
              className="h-11 w-11 sm:h-13 sm:w-13 rounded-full object-cover border border-[#d4af37]/40 shadow-md group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-[0.15em] text-[#fbf9f5] group-hover:text-[#d4af37] transition-colors leading-tight">
                VIBE ASIA
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#c5a880] uppercase -mt-0.5">
                Wayanad • Kerala
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs uppercase tracking-widest font-medium text-[#ded6cb]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#d4af37] transition-colors duration-200 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#d4af37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={() => onOpenBooking()}
              className="px-4 sm:px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#08140f] bg-gradient-to-r from-[#e5c69f] via-[#d4af37] to-[#c5a880] hover:brightness-110 shadow-md hover:shadow-[#d4af37]/20 transition-all flex items-center space-x-1.5 cursor-pointer active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Now</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#f3efea] hover:text-[#d4af37] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07130e]/98 backdrop-blur-2xl border-b border-[#d4af37]/20 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-3 text-sm uppercase tracking-widest text-[#ded6cb]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#d4af37] border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-full text-center text-xs font-semibold uppercase tracking-wider text-[#08140f] bg-gradient-to-r from-[#e5c69f] via-[#d4af37] to-[#c5a880] shadow-md"
            >
              Book Your Stay
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
