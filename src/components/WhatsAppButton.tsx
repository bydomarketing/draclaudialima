import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "../constants";

export default function WhatsAppButton() {
  return (
    <a
      id="floating-whatsapp-button"
      href={CONTACT_INFO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-115 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-300 group"
      aria-label="Agendar consulta via WhatsApp"
    >
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping group-hover:animate-none pointer-events-none" />
      
      <MessageCircle className="w-7 h-7 relative z-10" />
    </a>
  );
}
