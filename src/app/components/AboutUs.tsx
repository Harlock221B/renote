'use client'; // Necessário para Framer Motion

import { motion } from 'framer-motion';

export function AboutUs() {
  return (
    <motion.section 
      className="container mx-auto max-w-4xl px-6 py-20 md:py-32"
      
      // Define a animação de entrada ao rolar
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} // Anima apenas uma vez
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="
        bg-black/20 
        backdrop-blur-md 
        p-8 md:p-12 
        rounded-3xl 
        border border-white/10 
        shadow-2xl
      ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Quem <span className="text-green-400">Somos</span>
        </h2>
        
        <div className="space-y-4 text-gray-200 text-lg text-left md:text-center">
          <p>
            A ReNewTech nasceu da paixão por tecnologia e sustentabilidade. 
            Acreditamos que um notebook de alta qualidade não precisa ser novo 
            para ser incrível.
          </p>
          <p>
            Nossa missão é dar uma nova vida a dispositivos usados, 
            passando por um rigoroso processo de revisão e testes, 
            garantindo que você receba um produto confiável, potente 
            e com preço justo. Comprando conosco, você economiza e 
            ainda ajuda o meio ambiente.
          </p>
        </div>
      </div>
    </motion.section>
  );
}