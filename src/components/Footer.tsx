import React from "react";
import { NAV_LINKS, CONTACT_INFO } from "../constants";
import { MessageCircle, Instagram, MapPin, Clock, Mail } from "lucide-react";

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#1C1C1C] text-stone-300 pt-16 pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-stone-800">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span id="footer-brand-name" className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight leading-none">
                Dra. Cláudia Lima
              </span>
              <span id="footer-brand-subtitle" className="text-xs font-sans tracking-widest text-[#C6002B] uppercase font-semibold mt-1.5">
                Odontologia e Estética
              </span>
            </div>
            <p className="text-stone-400 font-sans text-sm sm:text-base leading-relaxed max-w-sm pt-2">
              Excelência técnica, ética e acolhimento para cuidar da saúde, estética e reabilitação do seu sorriso.
            </p>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-serif text-base sm:text-lg text-white font-bold tracking-tight">Navegação</h3>
            <ul className="space-y-2.5 font-sans text-sm" id="footer-nav-list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    id={`footer-nav-link-${link.href.replace("#", "")}`}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-[#C6002B] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-serif text-base sm:text-lg text-white font-bold tracking-tight">Atendimento</h3>
            <ul className="space-y-3 font-sans text-sm" id="footer-contact-list">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 text-[#C6002B] shrink-0 mr-3 mt-0.5" />
                <span className="text-stone-400 leading-relaxed">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-4 h-4 text-[#C6002B] shrink-0 mr-3" />
                <span className="text-stone-400">{CONTACT_INFO.hours}</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 text-[#C6002B] shrink-0 mr-3" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-stone-400 hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center space-x-4 pt-2">
                <a
                  id="footer-social-whatsapp"
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2 rounded-full bg-stone-800 text-stone-300 hover:text-white hover:bg-[#C6002B] transition-all"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4.5 h-4.5" />
                </a>
                <a
                  id="footer-social-instagram"
                  href={`https://instagram.com/${CONTACT_INFO.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2 rounded-full bg-stone-800 text-stone-300 hover:text-white hover:bg-[#C6002B] transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4.5 h-4.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Base Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-stone-500 text-center">
          <div>
            &copy; {new Date().getFullYear()} Dra. Cláudia Lima. Todos os direitos reservados.
          </div>
          <div className="font-medium bg-stone-800/50 text-stone-400 px-3.5 py-1 rounded-full border border-stone-800">
            Desenvolvido por <a href="https://www.bydomarketing.com.br/" target="_blank" rel="noopener noreferrer" className="text-[#C6002B] hover:underline font-semibold">bydo marketing</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
