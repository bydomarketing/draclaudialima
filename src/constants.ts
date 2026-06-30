import { Treatment, Differential, ContactInfo } from "./types";
// @ts-ignore
import planningImg from "./assets/images/dra_claudia_planejamento_1782601118968.jpg";
// @ts-ignore
import treatmentGeneralImg from "./assets/images/tratamento_odontologico_1782601132844.jpg";

export const COLORS = {
  primary: "#C6002B", // Vermelho Principal
  primaryDark: "#8F001F", // Vermelho Escuro
  charcoal: "#1C1C1C", // Grafite/Preto
  white: "#FFFFFF",
  offWhite: "#F8F6F4", // Off-white
  lightGrey: "#ECE9E7", // Cinza Claro
  nudeRose: "#FAF0EE", // Nude rosado discreto
};

export const CONTACT_INFO: ContactInfo = {
  phone: "5511939553258", // Fácil de substituir
  phoneFormatted: "(11) 93955-3258",
  email: "contato@draclaudialima.com.br",
  address: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",
  hours: "Segunda a Sexta, das 9h às 19h",
  instagram: "@draclaudialima.odonto",
  whatsappUrl: "https://wa.me/5511939553258?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação.",
};

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

export const IMAGES = {
  hero: "https://res.cloudinary.com/dbnmfl8vm/image/upload/v1782780138/TOPO_2_qsbcr4.png",
  about: "https://res.cloudinary.com/dbnmfl8vm/image/upload/v1782601743/ChatGPT_Image_23_06_2025_22_37_33_dk1hhc.png",
  planning: planningImg,
  treatmentGeneral: treatmentGeneralImg,
  differentials: "https://res.cloudinary.com/dbnmfl8vm/image/upload/v1782779535/Design_sem_nome_1_mpggj7.png",
};

export const TREATMENTS: Treatment[] = [
  {
    id: "proteses",
    title: "Próteses Dentárias",
    description: "Soluções fixas, parciais ou totais para recuperar dentes perdidos, melhorar a mastigação e devolver harmonia ao sorriso.",
    details: "As próteses dentárias são soluções eficazes e personalizadas para pacientes que perderam um ou mais dentes, seja por traumas, cáries extensas ou problemas periodontais. Trabalhamos com diferentes tipos de próteses fixas, parciais e totais cuidadosamente planejadas para devolver a estética e a função mastigatória com naturalidade e conforto. Cada reabilitação é pensada de forma individual, respeitando as particularidades da estrutura óssea, funcionalidade e estética de cada paciente. É indicada para quem busca uma reabilitação oral completa, conforto ao mastigar e um sorriso harmônico.",
    iconName: "Smile",
  },
  {
    id: "implantes",
    title: "Implantes Dentários",
    description: "Uma alternativa segura e duradoura para substituir dentes ausentes com estabilidade, conforto e aparência natural.",
    details: "Os implantes dentários são pinos de titânio inseridos no osso maxilar ou mandibular, que funcionam como raízes artificiais para suportar coroas, próteses ou pontes. São indicados para pacientes que perderam um ou mais dentes e desejam uma solução permanente, com estética e funcionalidade superiores. Além de promoverem uma aparência natural, os implantes ajudam a preservar o osso e a estrutura facial, proporcionando maior segurança e qualidade de vida.",
    iconName: "Shield",
  },
  {
    id: "protocolo",
    title: "Prótese Protocolo",
    description: "Reabilitação fixa sobre implantes para quem deseja recuperar segurança ao sorrir, falar e mastigar.",
    details: "A prótese protocolo é uma excelente opção para quem perdeu todos os dentes de uma arcada e busca uma solução fixa, confortável e com aparência natural. Ela é fixada sobre implantes dentários e proporciona muito mais segurança, estabilidade e funcionalidade em comparação às dentaduras convencionais. Indicada especialmente para pacientes que desejam voltar a sorrir, mastigar e falar com confiança, a prótese protocolo devolve não apenas a estética, mas também a qualidade de vida. Além de funcional, o resultado é harmônico e pensado para valorizar cada traço do seu rosto.",
    iconName: "Layers",
  },
  {
    id: "estetica",
    title: "Estética do Sorriso",
    description: "Restaurações estéticas e clareamento planejados para melhorar forma, cor e harmonia sem perder a naturalidade.",
    details: "As restaurações estéticas são procedimentos voltados à reconstrução de dentes danificados por cáries, fraturas ou desgaste. Utilizando materiais modernos como a resina composta, é possível restaurar o formato e a cor dos dentes com precisão, mantendo a aparência natural e saudável do sorriso. Esse tipo de tratamento é indicado tanto para quem precisa corrigir problemas funcionais, quanto para quem deseja melhorar a estética do sorriso de forma sutil e eficaz. Inclui clareamento dental personalizado para devolver o brilho de forma segura.",
    iconName: "Sparkles",
  },
  {
    id: "canal",
    title: "Tratamento de Canal",
    description: "Tratamento realizado para controlar infecções, aliviar a dor e preservar dentes que poderiam ser perdidos.",
    details: "O tratamento endodôntico, popularmente conhecido como tratamento de canal, é necessário quando a polpa do dente (nervo) está inflamada ou infectada, geralmente por cárie profunda ou trauma. Durante o procedimento, todo o tecido comprometido é removido, o canal é cuidadosamente higienizado e preenchido com material biocompatível. Com a tecnologia atual, esse tratamento tornou-se mais ágil e confortável, preservando a estrutura dentária e eliminando a dor. É indicado para preservar dentes que, de outra forma, precisariam ser extraídos.",
    iconName: "HeartPulse",
  },
  {
    id: "ortodontia",
    title: "Ortodontia Estética",
    description: "Alinhamento dentário com recursos discretos e modernos, respeitando a função, a estética e o estilo de vida do paciente.",
    details: "Muito além de alinhar os dentes, a ortodontia estética transforma o sorriso com discrição, conforto e sofisticação. Utilizando recursos modernos como alinhadores transparentes e aparelhos de perfil delicado, esse tratamento é ideal para quem busca harmonia facial sem abrir mão da estética durante o processo. Cada plano ortodôntico é personalizado, respeitando a anatomia, o estilo de vida e os objetivos individuais de cada paciente. O resultado vai além da estética: melhora a função mastigatória, a saúde bucal e, principalmente, a autoestima.",
    iconName: "Activity",
  },
];

export const DIFFERENTIALS: Differential[] = [
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
  },
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
  },
];
