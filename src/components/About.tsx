import { motion } from "motion/react";
import { IMAGES } from "../constants";

export default function About() {
  return (
    <section id="sobre" className="py-12 md:py-16 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with elegant framing */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
            id="about-image-column"
          >
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-stone-200/50 shadow-md">
              {/* Subtle background frame */}
              <div className="absolute inset-0 bg-[#ECE9E7] mix-blend-multiply opacity-25 pointer-events-none" />
              <img
                id="about-dentist-portrait"
                src={IMAGES.about}
                alt="Dra. Cláudia Lima em retrato de estúdio de camisa bege"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover object-center"
                width={450}
                height={600}
              />
            </div>
          </motion.div>

          {/* Right Column: Editorial Bio */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
            id="about-text-column"
          >
            <div className="space-y-3">
              <h2
                id="about-section-title"
                className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-bold tracking-tight"
              >
                Conheça a Dra. Cláudia Lima
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-5 text-stone-600 font-sans text-base sm:text-lg leading-relaxed" id="about-paragraphs">
              <p>
                Formada em Odontologia pela Universidade de São Paulo (USP), a Dra. Cláudia Lima construiu sua atuação com base na excelência acadêmica, na ética profissional e em um olhar atento às particularidades de cada paciente.
              </p>
              <p>
                Especialista em estética e reabilitação oral, reúne conhecimento técnico, precisão e sensibilidade para planejar tratamentos que favoreçam a beleza, a funcionalidade e a longevidade do sorriso.
              </p>
              <p>
                Com mais de uma década de atuação, acredita que cada paciente precisa ser acolhido de forma individual, com tempo para ser ouvido, compreender as possibilidades de tratamento e participar das decisões sobre o próprio cuidado.
              </p>
            </div>

            {/* Elegant Quote Block */}
            <div
              id="about-quote-box"
              className="border-l-4 border-[#C6002B] pl-5 py-2 bg-[#FAF0EE] rounded-r-2xl"
            >
              <p className="font-serif text-lg sm:text-xl text-[#8F001F] font-bold italic leading-relaxed">
                “Cada sorriso possui uma história. O tratamento deve respeitar quem está por trás dele.”
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
