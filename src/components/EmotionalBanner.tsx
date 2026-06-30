import React from "react";
import { motion } from "motion/react";

export default function EmotionalBanner() {
  const text = "“Cuidar do sorriso também é recuperar conforto, segurança e qualidade de vida.”";
  const tickerText = `${text} \u00A0\u00A0\u00A0\u00A0•\u00A0\u00A0\u00A0\u00A0 ${text} \u00A0\u00A0\u00A0\u00A0•\u00A0\u00A0\u00A0\u00A0 ${text} \u00A0\u00A0\u00A0\u00A0•\u00A0\u00A0\u00A0\u00A0`;

  return (
    <section 
      id="banner-acolhimento" 
      className="bg-[#C6002B] relative overflow-hidden py-4 sm:py-5 border-y border-[#C6002B] selection:bg-white/25 selection:text-white"
    >
      <div className="flex overflow-hidden whitespace-nowrap">
        <motion.div
          animate={{ x: [0, "-33.33%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
          className="flex space-x-8 text-white font-serif text-base sm:text-lg md:text-xl font-semibold tracking-wide"
        >
          <span>{tickerText}</span>
          <span>{tickerText}</span>
          <span>{tickerText}</span>
        </motion.div>
      </div>
    </section>
  );
}

