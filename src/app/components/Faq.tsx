'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// 1. Defina o TIPO de um item do FAQ
type FaqItemType = {
  question: string;
  answer: string;
};

// 2. Defina o TIPO das props do componente FaqItem
interface FaqItemProps {
  item: FaqItemType;
  isOpen: boolean;
  onClick: () => void;
}

// 3. Aplique o tipo ao seu array de dados
const faqData: FaqItemType[] = [
  {
    question: "1. O que posso vender?",
    answer: "Você pode vender computadores, notebooks, servidores, monitores, impressoras e outros tipos de material de informática. Entre em contato para avaliarmos."
  },
  {
    question: "2. Como meu material é avaliado?",
    answer: "A avaliação é feita com base no modelo, ano, especificações técnicas e estado de conservação do equipamento. Quanto mais informações você enviar (fotos, vídeos, modelo), mais precisa será a cotação."
  },
  {
    question: "3. Qual a forma de pagamento?",
    answer: "O pagamento é realizado à vista, via PIX ou transferência bancária, no momento da coleta ou após a verificação final do nosso time."
  },
  {
    question: "4. Sou pessoa física, posso vender meu material?",
    answer: "Sim! Compramos tanto de pessoas físicas (CPF) quanto de pessoas jurídicas (CNPJ). O processo é simples e seguro para todos."
  },
  {
    question: "5. Vocês compram equipamentos quebrados?",
    answer: "Não compramos equipamentos quebrados, com telas trincadas ou que não ligam. Focamos em equipamentos que podem ser revisados e revendidos com garantia."
  }
];

// 4. Aplique a interface de props à função
function FaqItem({ item, isOpen, onClick }: FaqItemProps) {
  return (
    <div className="border border-white/10 rounded-2xl bg-black/20 backdrop-blur-md shadow-lg overflow-hidden">
      {/* A Pergunta (botão clicável) */}
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left p-6"
      >
        <span className="text-lg md:text-xl font-semibold text-white">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <ChevronDown className="text-green-400" size={24} />
        </motion.div>
      </button>
      
      {/* A Resposta (painel animado) */}
      <AnimatePresence>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto', y: 0 },
              collapsed: { opacity: 0, height: 0, y: -10 }
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="px-6 pb-6"
          >
            <p className="text-gray-200">{item.answer}</p>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}

// Componente principal do FAQ (sem alteração)
export function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // (Bônus: tipagem para o state)

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="container mx-auto max-w-4xl px-6 py-20 md:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Perguntas <span className="text-green-400">Frequentes</span>
      </h2>
      
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <FaqItem
            key={index}
            item={item}
            isOpen={activeIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </section>
  );
}