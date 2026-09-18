import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { RESORT_DATA } from '../data/resortData';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#08140f]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] mb-3">
            <HelpCircle className="w-4 h-4 text-[#d4af37]" />
            <span>Essential Inquiries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#fbf9f5] font-normal tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#bfb4a5] font-light leading-relaxed">
            Everything you need to know about planning your luxury mountain retreat at Vibe Asia.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {RESORT_DATA.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-serif text-lg sm:text-xl text-[#fbf9f5] font-medium">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#122b20] flex items-center justify-center shrink-0 text-[#d4af37] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#d4af37] text-[#08140f]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#cfc4b5] font-light leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
