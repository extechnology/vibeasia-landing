import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VillasSection } from './components/VillasSection';
import { WellnessSection } from './components/WellnessSection';
import { DiningSection } from './components/DiningSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingParams, setBookingParams] = useState<{
    villaId?: string;
    checkIn?: string;
    checkOut?: string;
    guests?: number;
  }>({});

  const handleOpenBooking = (villaId?: string) => {
    setBookingParams(prev => ({ ...prev, villaId: villaId || prev.villaId }));
    setIsBookingOpen(true);
  };

  const handleCheckAvailability = (params: {
    checkIn: string;
    checkOut: string;
    guests: number;
    villaId: string;
  }) => {
    setBookingParams(params);
    setIsBookingOpen(true);
  };

  const handleBookSpa = (_treatmentTitle?: string) => {
    setIsBookingOpen(true);
  };

  const handleReserveTable = () => {
    setIsBookingOpen(true);
  };

  const handleInquireExperience = (_expTitle: string) => {
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#08140f] text-[#fbf9f5] font-sans selection:bg-[#d4af37] selection:text-[#08140f]">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Section with Interactive Reservation Bar */}
      <main>
        <Hero onCheckAvailability={handleCheckAvailability} />

        {/* Accommodations / Villas Section */}
        <VillasSection onReserveVilla={handleOpenBooking} />

        {/* Ayurvedic Spa & Wellness */}
        <WellnessSection onBookSpa={handleBookSpa} />

        {/* Cliffside Dining & Malabar Haute Cuisine */}
        <DiningSection onReserveTable={handleReserveTable} />

        {/* Curated Wayanad Expeditions */}
        <ExperiencesSection onInquireExperience={handleInquireExperience} />

        {/* Resort Amenities Bento Grid */}
        <AmenitiesSection />

        {/* Guest Chronicles / Testimonials */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer & Location Guide */}
      <Footer />

      {/* Booking & Price Estimator Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialVillaId={bookingParams.villaId}
        initialCheckIn={bookingParams.checkIn}
        initialCheckOut={bookingParams.checkOut}
        initialGuests={bookingParams.guests}
      />
    </div>
  );
}

export default App;
