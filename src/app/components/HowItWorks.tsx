'use client'; // Necessário para animações com Framer Motion

import { motion } from 'framer-motion';
import { Camera, ScanSearch, Check, Truck } from 'lucide-react';

// 1. Defina os passos
const steps = [
  {
    icon: Camera,
    title: "1. Fotografe e Envie",
    description: "Tire fotos ou grave um vídeo do seu notebook. Entre em contato pelo WhatsApp e envie o material para nós."
  },
  {
    icon: ScanSearch,
    title: "2. Avaliação Remota",
    description: "Nossa equipe técnica fará uma avaliação justa com base no modelo, estado de conservação e especificações."
  },
  {
    icon: Check,
    title: "3. Receba a Proposta",
    description: "Em até 24 horas, você recebe uma proposta de compra. Sem compromisso e com a melhor avaliação do mercado."
  },
  {
    icon: Truck,
    title: "4. Pagamento e Coleta",
    description: "Proposta aceita? Combinamos o pagamento (PIX ou TED) e agendamos a coleta gratuita do equipamento."
  }
];

// 2. Variantes da animação (para o efeito em cascata)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Anima cada "filho" (passo) com 0.3s de diferença
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 }, // Começa invisível e 50px à esquerda
  visible: { opacity: 1, x: 0 },   // Termina visível e na posição 0
};

export function HowItWorks() {
  return (
    <section className="container mx-auto max-w-4xl px-6 py-20 md:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Como Vender Seu Notebook?
      </h2>
      <p className="text-lg md:text-xl text-green-200 text-center mb-16 max-w-2xl mx-auto">
        Nosso processo é simples, rápido e 100% transparente.
        Veja como funciona:
      </p>

      {/* Container da Linha do Tempo */}
      <div className="relative">
        
        {/* A Linha Vertical (Mais orgânica/suave) */}
        {/* Em telas de desktop (md:), fica no centro. Em telas mobile, fica à esquerda. */}
        <div className="absolute left-4 md:left-1/2 w-1 h-full bg-green-400/30 rounded-full -translate-x-1/2"></div>

        {/* Container das Animações */}
        <motion.div
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Ativa a animação quando 30% estiver visível
          variants={containerVariants}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={itemVariants} // Anima cada item com esta variante
            >
              {/* O Ponto na Linha do Tempo (com pulsação) */}
              <div className="absolute top-1 left-4 md:left-1/2 -translate-x-1/2 z-10">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* O Card de Conteúdo (Glassmorphism) */}
              {/* Em mobile, fica tudo à direita da linha. Em desktop, alterna. */}
              <div 
                className={`
                  p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl
                  bg-black/20 backdrop-blur-md
                  ml-12 md:ml-0 md:w-5/12
                  
                  /* Lógica para alternar esquerda/direita no desktop */
                  ${index % 2 === 0 
                    ? 'md:mr-auto'          /* Item par: card fica à esquerda */
                    : 'md:ml-auto md:text-right' /* Item ímpar: card fica à direita */
                  }
                `}
              >
                {/* Ícone (só aparece no desktop) */}
                <step.icon className={`hidden md:block w-10 h-10 mb-3 text-green-400 ${index % 2 !== 0 && 'md:ml-auto'}`} />
                
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-200">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}