import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { HowItWorks } from "./components/HowItWorks"; 
import { Faq } from "./components/Faq"; // 1. IMPORTAR O NOVO COMPONENTE

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Header Fixo */}
      <Header />

      {/* 1. Apresentação (Início) */}
      <Hero />

      {/* 2. Como Vender */}
      <HowItWorks />
      
      {/* 3. Sobre Nós (O que compramos, marcas, etc.) */}
      <AboutUs />

      {/* 4. Perguntas Frequentes (FAQ) */}
      <Faq /> {/* 2. ADICIONAR A SEÇÃO AQUI */}

      {/* Rodapé Simples */}
      <footer className="w-full text-center p-8 text-gray-400 border-t border-white/10">
        NotePago © 2025 - Todos os direitos reservados.
      </footer>
    </main>
  );
}