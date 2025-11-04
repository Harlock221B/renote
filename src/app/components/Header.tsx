'use client'; // Necessário para links interativos e state futuro

import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

// Substitua pelo seu número de WhatsApp
const WHATSAPP_NUMBER = "5511999998888";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Vim pelo site e gostaria de mais informações.`;

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 md:p-6">
      <div className="text-2xl font-bold text-white">
        Re<span className="text-green-400">New</span>Tech
      </div>
      
      <Link
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        // Classes do Efeito Glassmorphism
        className="
          flex items-center gap-2 px-4 py-2 
          font-semibold text-white 
          border border-white/20 
          rounded-full 
          shadow-lg
          transition-all duration-300
          bg-white/10 backdrop-blur-lg 
          hover:bg-white/20 
          hover:shadow-xl
          hover:scale-105
        "
      >
        <MessageCircle size={18} />
        Entrar em Contato
      </Link>
    </header>
  );
}