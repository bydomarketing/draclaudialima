import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "../constants";

export default function TransitionSection() {
  return (
    <section id="transicao-cuidado" className="py-12 md:py-16 bg-[#F8F6F4] relative overflow-hidden">
      {/* Grid background motif for subtle editorial feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1C1C1C_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2
            id="transition-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-bold leading-tight tracking-tight max-w-5xl mx-auto"
          >
            O cuidado certo pode transformar <br className="hidden sm:inline" />a forma como você sorri, mastiga e vive.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          id="transition-text"
          className="text-stone-600 font-sans text-base sm:text-lg leading-relaxed max-w-5xl mx-auto"
        >
          A avaliação odontológica analisa a saúde bucal, a função mastigatória e a estética do sorriso para identificar o tratamento mais indicado para cada paciente. Com um planejamento personalizado, a Dra. Cláudia Lima realiza procedimentos como implantes dentários, próteses, restaurações estéticas, tratamento de canal e ortodontia, buscando recuperar conforto, segurança e naturalidade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="pt-2"
        >
          <a
            id="transition-cta"
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-sans font-semibold tracking-wider uppercase text-white bg-[#C6002B] hover:bg-[#8F001F] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 mr-2.5" />
            Agendar uma avaliação
          </a>
        </motion.div>
      </div>
    </section>
  );
}
