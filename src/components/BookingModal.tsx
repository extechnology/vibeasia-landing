import { useState, useId } from 'react';
import { X, Calendar, Users, Home, Check, Sparkles, ShieldCheck, MessageSquare, ArrowRight } from 'lucide-react';
import { RESORT_DATA } from '../data/resortData';

export interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVillaId?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: number;
}

export const BookingModal = ({
  isOpen,
  onClose,
  initialVillaId,
  initialCheckIn,
  initialCheckOut,
  initialGuests = 2
}: BookingModalProps) => {
  const nameInputId = useId();
  const emailInputId = useId();
  const phoneInputId = useId();
  const requestsInputId = useId();

  // Dates
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const defaultDeparture = new Date(tomorrow);
  defaultDeparture.setDate(tomorrow.getDate() + 2);

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [selectedVillaId, setSelectedVillaId] = useState(initialVillaId || RESORT_DATA.villas[0].id);
  const [checkIn, setCheckIn] = useState(initialCheckIn || formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(initialCheckOut || formatDate(defaultDeparture));
  const [guests, setGuests] = useState(initialGuests);
  const [rooms, setRooms] = useState(1);

  // Add-ons
  const [airportTransfer, setAirportTransfer] = useState(false);
  const [candlelightDinner, setCandlelightDinner] = useState(false);
  const [coupleSpa, setCoupleSpa] = useState(false);

  // Guest details
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  // Confirmation state
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const currentVilla = RESORT_DATA.villas.find(v => v.id === selectedVillaId) || RESORT_DATA.villas[0];

  // Calculate nights
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const diffTime = Math.abs(d2.getTime() - d1.getTime());
  const calculatedNights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  // Cost
  const baseCost = currentVilla.pricePerNight * calculatedNights * rooms;
  const transferCost = airportTransfer ? 7500 : 0;
  const dinnerCost = candlelightDinner ? 6500 : 0;
  const spaCost = coupleSpa ? 9000 : 0;
  const addOnsTotal = transferCost + dinnerCost + spaCost;
  const subTotal = baseCost + addOnsTotal;
  const gstTax = Math.round(subTotal * 0.18);
  const grandTotal = subTotal + gstTax;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `VA-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsConfirmed(true);
  };

  const handleResetAndClose = () => {
    setIsConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      <div className="glass-card max-w-4xl w-full rounded-3xl overflow-hidden border border-[#d4af37]/40 shadow-2xl relative max-h-[92vh] flex flex-col bg-[#07130e]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#0b1c15]">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span className="font-serif text-xl sm:text-2xl text-white font-medium">
              Reserve Your Sanctuary
            </span>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-full bg-white/5 text-[#c5a880] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {isConfirmed ? (
            /* Confirmation View */
            <div className="py-8 text-center max-w-md mx-auto space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-[#16382a] border-2 border-[#d4af37] flex items-center justify-center mx-auto text-[#d4af37]">
                <Check className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                  Reservation Guaranteed
                </span>
                <h3 className="font-serif text-3xl text-[#fbf9f5] font-medium mt-1 mb-2">
                  Welcome to Vibe Asia
                </h3>
                <p className="text-sm text-[#bab0a0] font-light">
                  Your mountain escape has been provisionally reserved. Our Head Concierge has dispatched your itinerary.
                </p>
              </div>

              <div className="bg-[#0b1c15] p-5 rounded-2xl border border-white/10 text-left space-y-2.5 text-xs text-[#cfc4b5]">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[#8e8274]">Booking Reference:</span>
                  <span className="font-mono text-[#d4af37] font-bold">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8e8274]">Sanctuary:</span>
                  <span className="text-white font-medium">{currentVilla.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8e8274]">Stay Dates:</span>
                  <span>{checkIn} to {checkOut} ({calculatedNights} Nights)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8e8274]">Guest:</span>
                  <span>{guestName} ({guests} Guests)</span>
                </div>
                <div className="flex justify-between border-t border-white/5 pt-2">
                  <span className="text-[#8e8274]">Total Amount:</span>
                  <span className="font-serif text-sm font-bold text-[#f5e3c3]">
                    ₹{grandTotal.toLocaleString('en-IN')} (incl. GST)
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={`https://wa.me/919447182900?text=Hello%20Vibe%20Asia%2C%20I%20have%20confirmed%20reservation%20${bookingRef}%20for%20${currentVilla.name}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-semibold text-[#08140f] bg-[#25D366] hover:brightness-110 flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect with Concierge on WhatsApp</span>
                </a>

                <button
                  onClick={handleResetAndClose}
                  className="w-full py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-medium text-[#c5a880] border border-[#d4af37]/30 hover:bg-white/5"
                >
                  Return to Resort Page
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleBookingSubmit} className="space-y-8">
              {/* Step 1: Villa & Dates */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#c5a880] mb-4 font-semibold flex items-center">
                  <Home className="w-3.5 h-3.5 mr-1.5 text-[#d4af37]" />
                  1. Select Accommodation & Itinerary
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {/* Villa Selector */}
                  <div className="sm:col-span-2 bg-[#0b1c15] p-3 rounded-2xl border border-white/10">
                    <label className="block text-[11px] uppercase tracking-wider text-[#a09485] mb-1">
                      Sanctuary Type
                    </label>
                    <select
                      value={selectedVillaId}
                      onChange={(e) => setSelectedVillaId(e.target.value)}
                      className="w-full bg-transparent text-sm font-serif font-medium text-[#f5e3c3] focus:outline-none cursor-pointer"
                    >
                      {RESORT_DATA.villas.map((v) => (
                        <option key={v.id} value={v.id} className="bg-[#0b1c15]">
                          {v.name} (₹{v.pricePerNight.toLocaleString('en-IN')}/nt)
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Check-in */}
                  <div className="bg-[#0b1c15] p-3 rounded-2xl border border-white/10">
                    <label className="block text-[11px] uppercase tracking-wider text-[#a09485] mb-1 flex items-center">
                      <Calendar className="w-3 h-3 mr-1 text-[#d4af37]" />
                      Check-In
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      min={formatDate(today)}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-transparent text-xs text-white focus:outline-none cursor-pointer"
                      required
                    />
                  </div>

                  {/* Check-out */}
                  <div className="bg-[#0b1c15] p-3 rounded-2xl border border-white/10">
                    <label className="block text-[11px] uppercase tracking-wider text-[#a09485] mb-1 flex items-center">
                      <Calendar className="w-3 h-3 mr-1 text-[#d4af37]" />
                      Check-Out
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      min={checkIn}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-transparent text-xs text-white focus:outline-none cursor-pointer"
                      required
                    />
                  </div>
                </div>

                {/* Guests and Rooms */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
                  <div className="bg-[#0b1c15] p-3 rounded-2xl border border-white/10">
                    <label className="block text-[11px] uppercase tracking-wider text-[#a09485] mb-1 flex items-center">
                      <Users className="w-3 h-3 mr-1 text-[#d4af37]" />
                      Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-transparent text-xs text-white focus:outline-none cursor-pointer"
                    >
                      <option value={1} className="bg-[#0b1c15]">1 Guest</option>
                      <option value={2} className="bg-[#0b1c15]">2 Guests</option>
                      <option value={3} className="bg-[#0b1c15]">3 Guests</option>
                      <option value={4} className="bg-[#0b1c15]">4 Guests</option>
                      <option value={6} className="bg-[#0b1c15]">6+ Guests</option>
                    </select>
                  </div>

                  <div className="bg-[#0b1c15] p-3 rounded-2xl border border-white/10">
                    <label className="block text-[11px] uppercase tracking-wider text-[#a09485] mb-1">
                      Villas Count
                    </label>
                    <select
                      value={rooms}
                      onChange={(e) => setRooms(Number(e.target.value))}
                      className="w-full bg-transparent text-xs text-white focus:outline-none cursor-pointer"
                    >
                      <option value={1} className="bg-[#0b1c15]">1 Villa</option>
                      <option value={2} className="bg-[#0b1c15]">2 Villas</option>
                      <option value={3} className="bg-[#0b1c15]">3 Villas</option>
                    </select>
                  </div>

                  <div className="col-span-2 bg-[#0d221a] p-3 rounded-2xl border border-[#d4af37]/20 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#a09485] block">
                        Duration of Stay
                      </span>
                      <strong className="font-serif text-base text-[#f5e3c3]">
                        {calculatedNights} {calculatedNights === 1 ? 'Night' : 'Nights'}
                      </strong>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] text-[#c5a880] block">Complimentary</span>
                      <span className="text-xs text-white font-medium">Daily High-Altitude Breakfast</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Luxury Add-ons */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#c5a880] mb-4 font-semibold flex items-center">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#d4af37]" />
                  2. Curated Bespoke Add-Ons
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                    airportTransfer ? 'bg-[#112d21] border-[#d4af37]' : 'bg-[#0b1c15] border-white/10'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-xs font-semibold text-[#fbf9f5] block">
                          Calicut Airport Chauffeur
                        </span>
                        <span className="text-[11px] text-[#a09485] block mt-0.5">
                          Mercedes / Vellfire private transfer
                        </span>
                      </div>
                      <input
                        type="checkbox"
                        checked={airportTransfer}
                        onChange={(e) => setAirportTransfer(e.target.checked)}
                        className="accent-[#d4af37] w-4 h-4 cursor-pointer mt-0.5"
                      />
                    </div>
                    <span className="text-xs font-serif font-bold text-[#f5e3c3] mt-3">
                      + ₹7,500
                    </span>
                  </label>

                  <label className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                    candlelightDinner ? 'bg-[#112d21] border-[#d4af37]' : 'bg-[#0b1c15] border-white/10'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-xs font-semibold text-[#fbf9f5] block">
                          Candlelight 5-Course Dinner
                        </span>
                        <span className="text-[11px] text-[#a09485] block mt-0.5">
                          Private plantation table for two
                        </span>
                      </div>
                      <input
                        type="checkbox"
                        checked={candlelightDinner}
                        onChange={(e) => setCandlelightDinner(e.target.checked)}
                        className="accent-[#d4af37] w-4 h-4 cursor-pointer mt-0.5"
                      />
                    </div>
                    <span className="text-xs font-serif font-bold text-[#f5e3c3] mt-3">
                      + ₹6,500
                    </span>
                  </label>

                  <label className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                    coupleSpa ? 'bg-[#112d21] border-[#d4af37]' : 'bg-[#0b1c15] border-white/10'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-xs font-semibold text-[#fbf9f5] block">
                          Royal Couple Abhyangam
                        </span>
                        <span className="text-[11px] text-[#a09485] block mt-0.5">
                          75 min herbal rejuvenation
                        </span>
                      </div>
                      <input
                        type="checkbox"
                        checked={coupleSpa}
                        onChange={(e) => setCoupleSpa(e.target.checked)}
                        className="accent-[#d4af37] w-4 h-4 cursor-pointer mt-0.5"
                      />
                    </div>
                    <span className="text-xs font-serif font-bold text-[#f5e3c3] mt-3">
                      + ₹9,000
                    </span>
                  </label>
                </div>
              </div>

              {/* Step 3: Guest Details */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#c5a880] mb-4 font-semibold flex items-center">
                  <Users className="w-3.5 h-3.5 mr-1.5 text-[#d4af37]" />
                  3. Primary Guest Information
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-[#0b1c15] p-3 rounded-2xl border border-white/10">
                    <label htmlFor={nameInputId} className="block text-[11px] uppercase tracking-wider text-[#a09485] mb-1">
                      Full Name *
                    </label>
                    <input
                      id={nameInputId}
                      type="text"
                      required
                      placeholder="e.g. Maya Nair"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full bg-transparent text-xs text-white focus:outline-none placeholder:text-white/20"
                    />
                  </div>

                  <div className="bg-[#0b1c15] p-3 rounded-2xl border border-white/10">
                    <label htmlFor={emailInputId} className="block text-[11px] uppercase tracking-wider text-[#a09485] mb-1">
                      Email Address *
                    </label>
                    <input
                      id={emailInputId}
                      type="email"
                      required
                      placeholder="maya@example.com"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      className="w-full bg-transparent text-xs text-white focus:outline-none placeholder:text-white/20"
                    />
                  </div>

                  <div className="bg-[#0b1c15] p-3 rounded-2xl border border-white/10">
                    <label htmlFor={phoneInputId} className="block text-[11px] uppercase tracking-wider text-[#a09485] mb-1">
                      WhatsApp Phone *
                    </label>
                    <input
                      id={phoneInputId}
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="w-full bg-transparent text-xs text-white focus:outline-none placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div className="mt-3 bg-[#0b1c15] p-3 rounded-2xl border border-white/10">
                  <label htmlFor={requestsInputId} className="block text-[11px] uppercase tracking-wider text-[#a09485] mb-1">
                    Special Inquiries / Anniversary / Dietary Preferences
                  </label>
                  <input
                    id={requestsInputId}
                    type="text"
                    placeholder="e.g. Honeymoon villa decor, pure vegetarian dining, late arrival"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full bg-transparent text-xs text-white focus:outline-none placeholder:text-white/20"
                  />
                </div>
              </div>

              {/* Price Breakdown and CTA */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#091812] -mx-6 -mb-6 p-6 sm:p-8">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="text-xs text-[#a09485]">
                    {currentVilla.name} × {calculatedNights} {calculatedNights === 1 ? 'Night' : 'Nights'}
                    {addOnsTotal > 0 && ` + Add-ons (₹${addOnsTotal.toLocaleString('en-IN')})`}
                  </div>
                  <div className="flex items-baseline space-x-2">
                    <span className="font-serif text-3xl font-bold text-[#f5e3c3]">
                      ₹{grandTotal.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-[#8e8274]">total incl. 18% GST</span>
                  </div>
                  <div className="text-[11px] text-[#c5a880] flex items-center justify-center sm:justify-start">
                    <ShieldCheck className="w-3 h-3 mr-1 text-[#d4af37]" />
                    <span>Free cancellation up to 7 days before arrival</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs uppercase tracking-wider font-semibold text-[#08140f] bg-gradient-to-r from-[#e5c69f] via-[#d4af37] to-[#c5a880] hover:brightness-110 shadow-xl shadow-[#d4af37]/20 flex items-center justify-center space-x-2 cursor-pointer transition-all"
                >
                  <span>Confirm Reservation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
