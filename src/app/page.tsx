import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { HowItWorks } from "./components/HowItWorks"; // 1. Importe aqui

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Header Fixo */}
      <Header />

      {/* Seção Hero (ocupa a primeira tela) */}
      <Hero />

      {/* Seção "Quem Somos" (abaixo da primeira tela) */}
      <AboutUs />

      {/* 2. Adicione a nova seção aqui */}
      <HowItWorks />

      {/* Você pode adicionar um Footer simples aqui */}
      <footer className="w-full text-center p-8 text-gray-400 border-t border-white/10">
        ReNewTech © 2025 - Todos os direitos reservados.
      </footer>
    </main>
  );
}