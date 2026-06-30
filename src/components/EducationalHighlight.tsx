import { motion } from "motion/react";
import { MessageCircle, AlertTriangle } from "lucide-react";
import { CONTACT_INFO, IMAGES } from "../constants";

export default function EducationalHighlight() {
  return (
    <section id="educativo-destaque" className="py-8 md:py-12 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Rounded Layout Box */}
        <div className="bg-[#1C1C1C] rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-stretch border border-stone-800">
          
          {/* Left Column: Educational Copy & Dark Charcoal Theme */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6 text-white relative"
            id="educational-text-block"
          >
            {/* Background elements */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#C6002B]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4">
              <h2
                id="educational-title"
                className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-tight leading-snug"
              >
                A perda de um dente afeta mais do que a aparência.
              </h2>
            </div>

            <p
              id="educational-desc"
              className="text-stone-300 font-sans text-sm sm:text-base leading-relaxed"
            >
              Dentes ausentes podem comprometer a mastigação, provocar movimentações dentárias, alterar o equilíbrio da mordida e contribuir para a perda de estrutura óssea. A avaliação profissional ajuda a identificar a solução mais adequada para recuperar função, conforto e segurança.
            </p>

            {/* CTA */}
            <div className="pt-2">
              <a
                id="educational-cta-button"
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-sans font-semibold tracking-wider uppercase text-white bg-[#C6002B] hover:bg-[#8F001F] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4 mr-2.5" />
                Conversar sobre meu caso
              </a>
            </div>
          </motion.div>

          {/* Right Column: Stunning Macro Photograph */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative min-h-[300px] sm:min-h-[350px] lg:min-h-none"
            id="educational-image-block"
          >
            <img
              id="educational-macro-image"
              src={IMAGES.treatmentGeneral}
              alt="Close-up de sorriso radiante e saudável"
              referrerPolicy="no-referrer"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center"
              width={500}
              height={500}
            />
            {/* Soft gradient overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#1C1C1C] via-[#1C1C1C]/10 to-transparent opacity-60 lg:opacity-40" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
