import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "../constants";

export default function FinalCTA() {
  return (
    <section id="contato" className="py-12 md:py-16 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#FAF0EE] border border-[#C6002B]/10 overflow-hidden px-6 py-12 sm:p-16 text-center space-y-6 sm:space-y-8 shadow-sm">
          {/* Subtle floral/geometric ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-[#C6002B]/5 blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 relative z-10"
          >
            <h2
              id="final-cta-title"
              className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-900 font-bold tracking-tight max-w-2xl mx-auto leading-tight"
            >
              Seu novo sorriso começa com uma avaliação cuidadosa.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            id="final-cta-desc"
            className="text-stone-600 font-sans text-base sm:text-lg leading-relaxed max-w-xl mx-auto relative z-10"
          >
            Agende um atendimento e descubra quais possibilidades podem contribuir para a saúde, a função e a harmonia do seu sorriso.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="pt-2 relative z-10"
          >
            <a
              id="final-cta-button"
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4.5 rounded-full text-sm font-sans font-semibold tracking-wider uppercase text-white bg-[#C6002B] hover:bg-[#8F001F] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4.5 h-4.5 mr-2.5" />
              Agendar minha avaliação
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
