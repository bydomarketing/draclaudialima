import React from "react";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { CONTACT_INFO, IMAGES } from "../constants";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-stone-100"
    >
      {/* Background Image - Occupies the entire section, edge-to-edge */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src={IMAGES.hero}
          alt="Consultório Dra. Cláudia Lima"
          className="w-full h-full object-cover object-[80%_center] sm:object-right md:object-right"
          referrerPolicy="no-referrer"
        />
        {/* Subtle high-quality overlay gradient for text legibility on smaller viewports */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F6F4]/90 via-[#F8F6F4]/60 to-[#F8F6F4]/10 md:from-[#F8F6F4]/75 md:via-[#F8F6F4]/40 md:to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content Area - Framed elegantly on the left side of the image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center space-y-5 sm:space-y-8 max-w-[80%] sm:max-w-xl md:max-w-2xl"
          id="hero-content-wrapper"
        >
          <div className="space-y-2.5">
            <div className="inline-flex items-center space-x-2">
              <span className="w-8 h-[1px] bg-[#C6002B]" />
              <span
                id="hero-badge"
                className="text-[10px] sm:text-sm font-sans tracking-widest text-[#C6002B] uppercase font-semibold"
              >
                Dra. Cláudia Lima - Dentista em São Paulo
              </span>
            </div>
            <h1
              id="hero-title"
              className="font-serif text-[25px] sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-[#C6002B] font-bold leading-[1.15] tracking-tight"
            >
              Recupere seu sorriso e volte a viver com mais confiança.
            </h1>
          </div>

          <p
            id="hero-description"
            className="text-stone-600 font-sans text-sm sm:text-lg leading-relaxed max-w-md md:max-w-xl"
          >
            Atendimento odontológico personalizado para cuidar da saúde, da função e da estética do seu sorriso com segurança, conforto e naturalidade.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
