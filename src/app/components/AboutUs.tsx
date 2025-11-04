'use client'; 

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Link from 'next/link';
import { 
  Laptop, Monitor, Printer, Server, 
  Cable, Power, BatteryCharging, Recycle 
} from 'lucide-react';
import { 
  IoLogoWhatsapp 
} from 'react-icons/io5';
import { 
  SiDell, SiLenovo, SiAsus // Lista de marcas corrigida
} from 'react-icons/si'; 

// --- Lista de Itens (Atualizada por você) ---
const itemsWeBuy = [
  { icon: Laptop, name: "Computadores" },
  { icon: Monitor, name: "Monitores" },
  // { icon: Printer, name: "Impressoras" },
  // { icon: Server, name: "Servidores" },
  { icon: Cable, name: "Cabos" },
  // { icon: Power, name: "Fontes" },
  // { icon: BatteryCharging, name: "Nobreaks" }
];

// --- Lista de Marcas (Corrigida e Atualizada) ---
const brands = [
  { icon: SiDell, name: "Dell" },
  { icon: SiLenovo, name: "Lenovo" },
  { icon: SiAsus, name: "Asus" },
];

// --- Constantes do WhatsApp para Venda (C2B) ---
const WHATSAPP_NUMBER = "5519984229260"; 
const WHATSAPP_MESSAGE_SELL = "Olá! Tenho um equipamento usado (notebook, etc.) e gostaria de vendê-lo. Como funciona?";
const WHATSAPP_LINK_SELL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE_SELL)}`;

// --- Variantes de Animação ---
const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const gridItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  },
};

const logoVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function AboutUs() {
  return (
    <motion.section 
      id="sobre"
      className="container mx-auto max-w-6xl px-6 py-20 md:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      
      {/* ----- PARTE 1: Nossa Missão ----- */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nossa <span className="text-green-400">Missão</span>
          </h2>
          <div className="space-y-4 text-gray-200 text-lg">
            <p>
              A NotePago nasceu da paixão por tecnologia e sustentabilidade. 
              Acreditamos que um notebook de alta qualidade não precisa ser novo 
              para ser incrível.
            </p>
            <p>
              Nossa missão é dar uma nova vida a dispositivos usados, 
              passando por um rigoroso processo de revisão, garantindo que você 
              receba um produto confiável, potente e com preço justo.
            </p>
          </div>
        </div>
        
        <motion.div 
          className="flex items-center justify-center min-h-[300px]
                     bg-black/20 backdrop-blur-md 
                     rounded-3xl border border-white/10 shadow-2xl p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Recycle size={120} className="text-green-400 opacity-30" />
        </motion.div>
      </div>

      {/* ----- PARTE 2: O que Compramos? ----- */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mt-24 mb-16">
        O que <span className="text-green-400">Compramos?</span>
      </h2>
      
      <motion.div 
        // ==============================================
        // --- CORREÇÃO APLICADA AQUI ---
        // ==============================================
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6"
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {itemsWeBuy.map((item) => (
          <motion.div 
            key={item.name} 
            variants={gridItemVariants}
            className="flex flex-col items-center justify-center text-center p-6
                       bg-black/20 backdrop-blur-md 
                       rounded-2xl border border-white/10 shadow-xl
                       min-h-[160px]
                       transition-all duration-300 hover:bg-black/30"
          >
            <item.icon className="w-10 h-10 md:w-12 md:h-12 text-green-400" />
            <h3 className="mt-4 font-bold text-md md:text-lg">{item.name}</h3>
          </motion.div>
        ))}
      </motion.div>

      {/* ----- PARTE 3: Marcas que Compramos ----- */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mt-24 mb-16">
        Fabricantes que <span className="text-green-400">Compramos</span>
      </h2>

      <motion.div 
        className="flex flex-wrap justify-center items-center gap-x-12 md:gap-x-16 gap-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={gridContainerVariants}
      >
        {brands.map((brand) => (
          <motion.div 
            key={brand.name}
            variants={logoVariants}
            title={brand.name}
            className="text-gray-400 transition-all duration-300 hover:text-white hover:scale-110"
          >
            <brand.icon size={70} />
          </motion.div>
        ))}
      </motion.div>

      {/* ----- PARTE 4: CTA para Venda (C2B) ----- */}
      <motion.div
        className="text-center p-8 md:p-12 mt-24
                   bg-black/20 backdrop-blur-md 
                   rounded-3xl border border-white/10 shadow-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold uppercase">
          Converta seu equipamento antigo
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-4">
          Em Dinheiro!
        </h3>
        <p className="max-w-3xl mx-auto text-lg text-gray-200 mb-8">
          Tem um notebook, monitor ou outro equipamento parado? Avaliamos seu
          item de forma justa e rápida. Vender seu usado é fácil, seguro
          e ajuda o meio ambiente. Veja como é fácil!
        </p>

        <Link
          href={WHATSAPP_LINK_SELL}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-3 px-8 py-4
            text-lg font-bold text-black
            bg-green-400
            rounded-full
            shadow-lg
            transition-all duration-300
            hover:bg-green-300
            hover:shadow-xl
            hover:scale-105
          "
        >
          <IoLogoWhatsapp size={24} />
          Quero Vender Meu Equipamento
        </Link>
      </motion.div>

    </motion.section>
  );
}