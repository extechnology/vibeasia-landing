import { useState, useEffect } from 'react';

// Concierge WhatsApp: 81379 65858 (India +91)
const WHATSAPP_NUMBER = '918137965858';
const TRIGGER_MESSAGE = 'welcome to vibe asia  how can i help you';

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Gentle fade-in after initial page load
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Briefly show greeting tooltip
      setShowTooltip(true);
      const hideTooltipTimer = setTimeout(() => setShowTooltip(false), 5000);
      return () => clearTimeout(hideTooltipTimer);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(TRIGGER_MESSAGE)}`;

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 flex items-center transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
      style={{ isolation: 'isolate' }}
    >
      {/* Speech / Tooltip Bubble */}
      <div
        className={`hidden sm:flex items-center space-x-2 mr-3 px-3.5 py-2 rounded-2xl bg-[#091712]/95 backdrop-blur-md border border-[#25D366]/40 shadow-xl transition-all duration-300 ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <div className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
        <span className="text-xs text-[#fbf9f5] font-medium tracking-wide">
          Chat with Concierge
        </span>
      </div>

      {/* Main WhatsApp Floating Action Button */}
      <a
        id="vibeasia-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Vibe Asia Concierge on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#4ade80] shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_10px_40px_rgba(37,211,102,0.65)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        title="Chat with Vibe Asia on WhatsApp"
      >
        {/* Ambient Glow / Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none duration-1000" />

        {/* Inner Glass Flare */}
        <span className="absolute inset-0.5 rounded-full bg-gradient-to-b from-white/25 to-transparent pointer-events-none" />

        {/* WhatsApp Official SVG Icon */}
        <svg
          className="w-8 h-8 sm:w-9 sm:h-9 text-white fill-current relative z-10 transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}

export default WhatsAppButton;
