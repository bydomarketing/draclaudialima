import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Smile,
  Shield,
  Layers,
  Sparkles,
  HeartPulse,
  Activity,
  ChevronDown,
  ChevronUp,
  MessageCircle,
} from "lucide-react";
import { TREATMENTS, CONTACT_INFO } from "../constants";

export default function Treatments() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Map icon strings to Lucide components
  const getIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 text-[#C6002B]";
    switch (iconName) {
      case "Smile":
        return <Smile className={iconClass} />;
      case "Shield":
        return <Shield className={iconClass} />;
      case "Layers":
        return <Layers className={iconClass} />;
      case "Sparkles":
        return <Sparkles className={iconClass} />;
      case "HeartPulse":
        return <HeartPulse className={iconClass} />;
      case "Activity":
        return <Activity className={iconClass} />;
      default:
        return <Smile className={iconClass} />;
    }
  };

  return (
    <section id="tratamentos" className="py-12 md:py-16 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
          <h2
            id="treatments-section-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-bold tracking-tight"
          >
            Procurando por Dentistas em São Paulo?
          </h2>
          <p
            id="treatments-section-subtitle"
            className="text-stone-600 font-sans text-base sm:text-lg leading-relaxed"
          >
            A Dra. Cláudia Lima oferece atendimento odontológico em São Paulo com foco em saúde, estética e bem-estar. Cada tratamento é planejado de forma personalizada, com técnica, cuidado e atenção aos detalhes, para proporcionar mais conforto, segurança e confiança ao sorrir.
          </p>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" id="treatments-grid">
          {TREATMENTS.map((treatment) => {
            const isExpanded = expandedId === treatment.id;
            return (
              <motion.div
                key={treatment.id}
                layout="position"
                id={`treatment-card-${treatment.id}`}
                className={`flex flex-col rounded-2xl border bg-[#F8F6F4] p-6 sm:p-8 transition-all duration-300 relative overflow-hidden ${
                  isExpanded
                    ? "border-[#C6002B] shadow-md ring-1 ring-[#C6002B]/20"
                    : "border-stone-200/50 hover:border-[#C6002B]/30 hover:shadow-sm"
                }`}
              >
                {/* Visual Accent for Expanded Card */}
                {isExpanded && (
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#C6002B]" />
                )}

                <div className="flex-1">
                  {/* Icon Badge */}
                  <div className="inline-flex items-center justify-center p-3.5 bg-white rounded-xl shadow-sm border border-stone-200/20 mb-6">
                    {getIcon(treatment.iconName)}
                  </div>

                  {/* Title */}
                  <h3
                    id={`treatment-title-${treatment.id}`}
                    className="font-serif text-xl sm:text-2xl text-stone-900 font-bold tracking-tight mb-3"
                  >
                    {treatment.title}
                  </h3>

                  {/* Description */}
                  <p
                    id={`treatment-desc-${treatment.id}`}
                    className="text-stone-600 font-sans text-sm sm:text-base leading-relaxed mb-6"
                  >
                    {treatment.description}
                  </p>

                  {/* Expanded Details */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2 pb-6 border-t border-stone-200/60 mt-4 space-y-4">
                          <p className="text-stone-700 font-sans text-xs sm:text-sm leading-relaxed">
                            {treatment.details}
                          </p>
                          <a
                            id={`treatment-expanded-cta-${treatment.id}`}
                            href={CONTACT_INFO.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl text-xs font-sans font-semibold tracking-wider uppercase text-white bg-[#C6002B] hover:bg-[#8F001F] transition-colors"
                          >
                            <MessageCircle className="w-3.5 h-3.5 mr-2" />
                            Agendar Avaliação
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Toggle Button */}
                <button
                  id={`treatment-toggle-${treatment.id}`}
                  onClick={() => toggleExpand(treatment.id)}
                  className="mt-4 inline-flex items-center text-xs font-sans font-bold tracking-wider uppercase text-[#C6002B] hover:text-[#8F001F] transition-colors self-start group/btn"
                >
                  {isExpanded ? (
                    <>
                      Ver menos <ChevronUp className="w-4 h-4 ml-1" />
                    </>
                  ) : (
                    <>
                      Saiba mais <ChevronDown className="w-4 h-4 ml-1 group-hover/btn:translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
