import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function IdentificationSection() {
  const situations = [
    "Dificuldade ou desconforto para mastigar",
    "Dentes ausentes ou próteses que causam incômodo",
    "Dor, sensibilidade ou desconforto persistente",
    "Restaurações antigas, dentes fraturados ou desgastados",
    "Dentes desalinhados ou insatisfação com a aparência do sorriso",
    "Insegurança para sorrir, falar ou aparecer em fotografias",
  ];

  return (
    <section id="identificacao" className="pt-4 pb-12 md:pt-6 md:pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-10">
          <h2
            id="id-section-title"
            className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-900 font-bold tracking-tight max-w-2xl mx-auto leading-tight"
          >
            Alguma dessas situações faz parte da sua rotina?
          </h2>
        </div>

        {/* List items - 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10" id="id-situations-grid">
          {situations.map((situation, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex items-start p-4 sm:p-5 rounded-2xl bg-[#F8F6F4] border border-stone-200/30 hover:border-[#C6002B]/20 transition-all duration-300 group"
              id={`situation-card-${idx}`}
            >
              <CheckCircle2 className="w-5 h-5 text-[#C6002B] shrink-0 mt-0.5 mr-3.5 group-hover:scale-110 transition-transform" />
              <span className="text-stone-700 font-sans text-sm sm:text-base leading-relaxed">
                {situation}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Conclusion Paragraph */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center max-w-2xl mx-auto p-6 rounded-2xl bg-[#FAF0EE] border border-[#C6002B]/10"
          id="id-section-conclusion"
        >
          <p className="text-stone-800 font-sans text-sm sm:text-base font-medium leading-relaxed">
            Uma avaliação cuidadosa permite compreender a origem do problema e indicar o tratamento mais adequado para o seu caso.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
