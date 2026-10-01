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
    { label: 'Gallery', href: '#gallery' },
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
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* WhatsApp Direct Chat */}
            <a
              href={`https://wa.me/918137965858?text=${encodeURIComponent('welcome to vibe asia  how can i help you')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              title="Chat with Concierge on WhatsApp (+91 81379 65858)"
              className="p-2 sm:px-3 sm:py-2 rounded-full text-white bg-[#25D366]/15 hover:bg-[#25D366] hover:text-[#08140f] border border-[#25D366]/40 transition-all duration-300 flex items-center space-x-1.5 shadow-sm active:scale-95"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="hidden xl:inline text-[11px] font-semibold tracking-wider uppercase">WhatsApp</span>
            </a>

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

          <div className="pt-2 space-y-2.5">
            <a
              href={`https://wa.me/918137965858?text=${encodeURIComponent('welcome to vibe asia  how can i help you')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-full text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366] hover:text-[#08140f] flex items-center justify-center space-x-2 transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>

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
