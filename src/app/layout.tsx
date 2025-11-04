import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Carrega a fonte (Inter)
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NotePago - Notebooks Usados com Garantia",
  description: "Especialistas em venda e revenda de notebooks usados e revisados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}