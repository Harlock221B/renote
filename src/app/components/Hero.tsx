'use client'; // Necessário para usar Framer Motion

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center p-6 pt-32 md:pt-24">
      {/* Container para centralizar o conteúdo */}
      <motion.div
        className="flex flex-col items-center gap-6"
        // Animação de entrada (fade-in e slide-up)
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white"
          // Animação com delay para o H1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        >
          Seu próximo notebook está aqui.
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-green-200 max-w-2xl"
          // Animação com delay para o parágrafo
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
        >
          Qualidade, garantia e o melhor preço em notebooks usados.
          <br />
          Revitalizamos a tecnologia para você.
        </motion.p>
      </motion.div>
    </section>
  );
}