'use client'; 

import { useState } from 'react'; // Importar useState
import { Laptop, Menu, X } from 'lucide-react'; // Importar ícones Menu e X
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'; // Importar para animação do menu

// Definir os links de navegação
const navLinks = [
  { name: "Início", href: "#inicio" },
  { name: "Como Vender", href: "#vender" },
  { name: "Sobre Nós", href: "#sobre" },
];

export function Header() {
  // Estado para controlar o menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 md:p-6 
                       bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 
                       border-b border-white/10">
      
      {/* --- LOGO --- */}
      <Link href="/" className="flex items-center gap-2 text-white z-50" onClick={() => setIsMobileMenuOpen(false)}>
        <Laptop size={32} className="text-green-400" />
        <span className="text-2xl font-bold">
          Note<span className="text-green-400">Pago</span>
        </span>
      </Link>
      
      {/* --- NAVEGAÇÃO DESKTOP --- */}
      <nav className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-lg font-medium text-gray-200 transition-colors hover:text-white"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* --- BOTÃO DO MENU MOBILE --- */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="flex md:hidden z-50 text-white"
        aria-label="Abrir menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* --- MENU MOBILE (OVERLAY ANIMADO) --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center
                       bg-gradient-to-b from-[#001a4d] to-[#004d40] 
                       space-y-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-3xl font-bold text-white transition-colors hover:text-green-400"
                onClick={() => setIsMobileMenuOpen(false)} // Fecha o menu ao clicar
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}