import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/footer";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Bread King | Sua Jornada pelo Sabor Autêntico",
  description:
    "Explore a qualidade artesanal da The Bread King. Delicie-se com nossos produtos cuidadosamente preparados para proporcionar experiências únicas. Descubra o verdadeiro significado do sabor autêntico em cada pedaço.",
  keywords: [
    "Pão Artesanal",
    "Panificação",
    "Produtos Frescos",
    "Sabor Único",
    "Delícias da Padaria",
    "The Bread King",
    "Experiência Gourmet",
    "Culinária Artesanal",
    "Sabor Autêntico",
    "Qualidade Premium",
    "Gastronomia",
    "Receitas Tradicionais",
    "Pães Especiais",
    "Confeitaria",
    "Cesta de Café da Manhã",
    "Padaria Local",
    "Pão Integral",
    "Pão de Centeio",
    "Bolos Artesanais",
    "Croissants",
    "Biscoitos Frescos",
    "Café da Manhã Delicioso",
    "Sabores Exclusivos",
    "Comida Feita com Amor",
    "Tradição na Panificação",
    "Chef de Padaria",
    "Cesta Gourmet",
    "Alimentos de Qualidade",
    "Pães Especiais",
    "Sobremesas Artesanais",
    "Sabor Inigualável",
    "Confeitaria Fina",
    "Pão Multigrãos",
    "Pão de Nozes",
    "Croissants de Chocolate",
    "Produtos Feitos à Mão",
    "Bakery",
    "Arte Culinária",
    "Pão de Azeitona",
    "Bolos Personalizados",
    "Sobremesas Exclusivas",
    "Cesta de Presente Gourmet",
    "Padaria Local",
    "Receitas de Família",
    "Pão sem Glúten",
    "Bolos Decorados",
    "Culinária Exclusiva",
    "Pães Especiais da Semana",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} bg-[#F5F5F0]`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
