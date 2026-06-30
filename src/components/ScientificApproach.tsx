import { motion } from "motion/react";
import { MessageCircle, Check } from "lucide-react";
import { CONTACT_INFO, IMAGES } from "../constants";

export default function ScientificApproach() {
  const points = [
    "Análise completa da saúde bucal e periodontal",
    "Estudo estético e funcional das proporções faciais",
    "Planejamento digital individualizado e previsível",
  ];

  return (
    <section id="planejamento-cientifico" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
            id="scientific-text-column"
          >
            <div className="space-y-3">
              <h2
                id="scientific-title"
                className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-bold tracking-tight leading-tight"
              >
                Planejamento preciso para resultados naturais e duradouros
              </h2>
            </div>

            <div className="space-y-4 text-stone-600 font-sans text-base sm:text-lg leading-relaxed">
              <p>
                Um bom resultado começa muito antes do procedimento. Por isso, cada plano de tratamento considera a saúde bucal, a anatomia, a função mastigatória, a estética e os objetivos individuais do paciente.
              </p>
              <p>
                Essa visão integrada permite indicar soluções mais seguras, coerentes e adequadas para cada momento, garantindo que o seu sorriso seja não apenas bonito, mas perfeitamente funcional e duradouro.
              </p>
            </div>

            {/* Structured checklist points */}
            <ul className="space-y-3.5 pt-2" id="scientific-points-list">
              {points.map((point, index) => (
                <li key={index} className="flex items-start text-stone-700 font-sans text-sm sm:text-base font-medium">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#FAF0EE] text-[#C6002B] shrink-0 mr-3 mt-0.5">
                    <Check className="w-3.5 h-3.5 font-bold" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            {/* Call to action */}
            <div className="pt-2">
              <a
                id="scientific-cta-button"
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-sans font-semibold tracking-wider uppercase text-white bg-[#C6002B] hover:bg-[#8F001F] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 mr-2.5" />
                Quero avaliar meu sorriso
              </a>
            </div>
          </motion.div>

          {/* Right Column: Single Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
            id="scientific-image-container"
          >
            <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden border border-stone-200/50 shadow-md group">
              <img
                src={IMAGES.planning}
                alt="Planejamento digital detalhado"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 bg-[#C6002B]/90 backdrop-blur-sm px-3.5 py-1 rounded text-xs text-white font-sans font-bold tracking-wider uppercase shadow-sm">
                Planejamento
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
