import React from "react";
import { motion } from "motion/react";
import {
  ClipboardCheck,
  Sliders,
  Sparkles,
  GraduationCap,
  Heart,
  HeartHandshake,
} from "lucide-react";
import { IMAGES } from "../constants";

interface DifferentialItem {
  title: string;
  description: string;
  iconName: string;
}

const leftItems: DifferentialItem[] = [
  {
    title: "Avaliação completa e individualizada",
    description: "Um olhar cuidadoso para compreender sua saúde bucal, suas necessidades e seus objetivos.",
    iconName: "ClipboardCheck",
  },
  {
    title: "Planejamento personalizado",
    description: "Cada tratamento é definido considerando função, estética, conforto e as particularidades de cada paciente.",
    iconName: "Sliders",
  },
  {
    title: "Resultados naturais e harmônicos",
    description: "Procedimentos planejados para valorizar o sorriso sem descaracterizar sua expressão.",
    iconName: "Sparkles",
  }
];

const rightItems: DifferentialItem[] = [
  {
    title: "Técnica e atualização profissional",
    description: "Conhecimento, precisão e recursos atuais aplicados de forma responsável em cada etapa.",
    iconName: "GraduationCap",
  },
  {
    title: "Acolhimento durante o atendimento",
    description: "Uma experiência conduzida com escuta, clareza e respeito ao tempo de cada paciente.",
    iconName: "Heart",
  },
  {
    title: "Acompanhamento próximo",
    description: "Orientação antes, durante e depois do tratamento para proporcionar mais segurança e tranquilidade.",
    iconName: "HeartHandshake",
  }
];

export default function Differentials() {
  const getIcon = (iconName: string) => {
    const iconClass = "w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110";
    switch (iconName) {
      case "ClipboardCheck":
        return <ClipboardCheck className={iconClass} />;
      case "Sliders":
        return <Sliders className={iconClass} />;
      case "Sparkles":
        return <Sparkles className={iconClass} />;
      case "GraduationCap":
        return <GraduationCap className={iconClass} />;
      case "Heart":
        return <Heart className={iconClass} />;
      case "HeartHandshake":
        return <HeartHandshake className={iconClass} />;
      default:
        return <Heart className={iconClass} />;
    }
  };

  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-[#F8F6F4] scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 md:mb-24 max-w-4xl mx-auto">
          <h2
            id="differentials-section-title"
            className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-900 font-bold tracking-wider leading-tight uppercase"
          >
            Uma experiência construída com atenção em cada detalhe
          </h2>
          <div className="w-12 h-1 bg-[#C4A468] mx-auto mt-4" />
        </div>

        {/* Desktop Layout: Left, Center Image, Right */}
        <div 
          className="hidden lg:grid lg:grid-cols-12 gap-x-6 items-center max-w-5xl mx-auto relative" 
          id="differentials-desktop-layout"
        >
          {/* Left Column - 3 items */}
          <div className="lg:col-span-4 space-y-12" id="differentials-left-col">
            {leftItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group flex flex-col space-y-2"
                id={`diff-left-item-${idx}`}
              >
                {/* Icon + Title Header Row */}
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#C4A468] group-hover:bg-[#C6002B] flex items-center justify-center shrink-0 shadow-sm transition-all duration-300">
                    {getIcon(item.iconName)}
                  </div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 tracking-wide transition-colors duration-300 group-hover:text-[#C6002B]">
                    {item.title}
                  </h3>
                </div>
                {/* Description below */}
                <p className="font-sans text-stone-600 text-sm leading-relaxed pl-14">
                  {item.description}
                </p>
                {idx < leftItems.length - 1 && (
                  <div className="border-b border-stone-200/50 pt-4 ml-14" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Central Column - Transparent image with elegant subtle background circles */}
          <div className="lg:col-span-4 flex justify-center relative h-[580px]" id="differentials-center-col">
            {/* Elegant glowing halos behind the doctor cutout */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 scale-110">
              <div className="w-[360px] h-[360px] lg:w-[420px] lg:h-[420px] rounded-full border border-[#C4A468]/15 absolute animate-pulse duration-[4000ms]" />
              <div className="w-[420px] h-[420px] lg:w-[480px] lg:h-[480px] rounded-full border border-stone-200/20 absolute" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full h-full flex items-end justify-center relative z-10 overflow-visible"
            >
              <img
                id="differentials-doctor-center-img"
                src={IMAGES.differentials}
                alt="Dra. Cláudia Lima"
                referrerPolicy="no-referrer"
                className="max-w-[320px] lg:max-w-[360px] h-full object-contain object-bottom transition-transform duration-700 hover:scale-[1.03]"
              />
            </motion.div>
          </div>

          {/* Right Column - 3 items */}
          <div className="lg:col-span-4 space-y-12" id="differentials-right-col">
            {rightItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group flex flex-col space-y-2"
                id={`diff-right-item-${idx}`}
              >
                {/* Icon + Title Header Row */}
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#C4A468] group-hover:bg-[#C6002B] flex items-center justify-center shrink-0 shadow-sm transition-all duration-300">
                    {getIcon(item.iconName)}
                  </div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 tracking-wide transition-colors duration-300 group-hover:text-[#C6002B]">
                    {item.title}
                  </h3>
                </div>
                {/* Description below */}
                <p className="font-sans text-stone-600 text-sm leading-relaxed pl-14">
                  {item.description}
                </p>
                {idx < rightItems.length - 1 && (
                  <div className="border-b border-stone-200/50 pt-4 ml-14" />
                )}
              </motion.div>
            ))}
          </div>

        </div>

        {/* Mobile & Tablet Layout */}
        <div className="block lg:hidden space-y-12" id="differentials-mobile-layout">
          {/* Centered Cutout Image of Dra. Cláudia */}
          <div className="flex justify-center relative h-[360px]" id="differentials-mobile-center-image">
            <img
              id="differentials-mobile-doctor-img"
              src={IMAGES.differentials}
              alt="Dra. Cláudia Lima"
              referrerPolicy="no-referrer"
              className="h-full object-contain object-bottom"
            />
          </div>

          {/* 6 items listed beautifully */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10" id="differentials-mobile-grid">
            {[...leftItems, ...rightItems].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-2"
                id={`differential-mobile-item-${idx}`}
              >
                {/* Icon in squircle circle */}
                <div className="w-10 h-10 rounded-lg bg-[#C4A468] text-white flex items-center justify-center mb-3.5 shadow-sm">
                  {getIcon(item.iconName)}
                </div>

                {/* Title */}
                <h3 className="font-serif font-bold text-base text-stone-900 mb-2">
                  {item.title}
                </h3>
                {/* Description */}
                <p className="font-sans text-stone-600 text-sm leading-relaxed max-w-sm mx-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
