'use client'; 

import { motion } from 'framer-motion';
import Link from 'next/link';
import { IoLogoWhatsapp } from 'react-icons/io5';

// --- Constantes do WhatsApp (sem alteração) ---
const WHATSAPP_NUMBER = "5519984229260";
const WHATSAPP_MESSAGE_BUY = "Olá! Gostaria de fazer um orçamento para um determinado tipo de aparelho.";
const WHATSAPP_LINK_BUY = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE_BUY)}`;

export function Hero() {
  return (
    <section 
      id="inicio" 
      className="min-h-screen grid md:grid-cols-2 items-center justify-center p-6 pt-32 md:pt-24"
    >
      
      {/* --- COLUNA DE TEXTO (Esquerda) --- */}
      <motion.div
        // 1. ATUALIZAÇÃO DO ALINHAMENTO
        // Em vez de 'md:items-start', usamos 'md:items-center' e 'md:justify-center'
        // Isso centraliza o bloco de texto dentro da coluna da esquerda.
        className="flex flex-col items-center md:justify-center gap-6" 
        
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.h1 
          // 2. ATUALIZAÇÃO DO ALINHAMENTO DO TEXTO
          // O texto dentro do bloco agora também será alinhado ao centro (ou esquerda, se preferir)
          // Vamos manter centralizado para um visual mais simétrico
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        >
          Seu próximo notebook está aqui.
        </motion.h1
        >
        
        <motion.p 
          className="text-lg md:text-xl text-green-200 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
        >
          Qualidade, garantia e o melhor preço em notebooks usados.
          <br />
          Venda o seu equipamento antigo ou compre um revisado hoje mesmo.
        </motion.p>

        {/* --- BOTÃO --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }} 
        >
          <Link
            href={WHATSAPP_LINK_BUY}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center gap-3 px-8 py-4 
              text-lg font-bold text-black 
              bg-green-400 
              rounded-full shadow-lg w-64
              transition-all duration-300
              hover:bg-green-300 hover:shadow-xl hover:scale-105
            "
          >
            <IoLogoWhatsapp size={24} />
            Solicitar Cotação
          </Link>
        </motion.div>
      </motion.div>

      {/* --- COLUNA VISUAL "ORGÂNICA" (Direita) --- */}
      <div className="relative h-full w-full hidden md:flex items-center justify-center">
        
        {/* Blob 1 (Verde) */}
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-green-500/10 rounded-full backdrop-blur-md opacity-50"
          animate={{
            x: [0, 20, 0, -10, 0],
            y: [0, -15, 20, 0, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        
        {/* Blob 2 (Azul) */}
        <motion.div
          className="absolute bottom-20 left-10 w-56 h-56 bg-blue-500/10 rounded-full backdrop-blur-md opacity-60"
          animate={{
            x: [0, -10, 0, 20, 0],
            y: [0, 30, -10, 0, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

    </section>
  );
}