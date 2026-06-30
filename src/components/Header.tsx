import React, { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, CONTACT_INFO } from "../constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of fixed header
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
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-stone-50/95 backdrop-blur-md shadow-md py-2.5 border-b border-stone-200/50"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleLinkClick(e, "#inicio")}
            className="flex flex-col group"
            id="header-logo-link"
          >
            <span
              id="header-brand-name"
              className="font-serif text-lg sm:text-xl font-bold text-stone-900 tracking-tight leading-none group-hover:text-[#C6002B] transition-colors"
            >
              Dra. Cláudia Lima
            </span>
            <span
              id="header-brand-subtitle"
              className="text-[10px] sm:text-xs font-sans tracking-widest text-[#C6002B] uppercase font-medium mt-1"
            >
              Odontologia e Estética
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                id={`nav-link-${link.href.replace("#", "")}`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-sans font-medium text-stone-600 hover:text-[#C6002B] transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C6002B] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <a
              id="header-cta-button"
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-sans font-semibold tracking-wider uppercase text-white bg-[#C6002B] hover:bg-[#8F001F] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <MessageCircle className="w-3.5 h-3.5 mr-2" />
              Agendar avaliação
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-700 hover:text-[#C6002B] p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu-drawer"
        className={`md:hidden absolute top-full left-0 right-0 bg-stone-50 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 space-y-4 flex flex-col">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              id={`mobile-nav-link-${link.href.replace("#", "")}`}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-base font-sans font-medium text-stone-700 hover:text-[#C6002B] py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            id="mobile-header-cta-button"
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-sans font-semibold tracking-wider uppercase text-white bg-[#C6002B] hover:bg-[#8F001F] transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Agendar avaliação
          </a>
        </div>
      </div>
    </header>
  );
}
