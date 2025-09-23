import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { Inter, Trade_Winds } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const tradeWinds = Trade_Winds({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-trade-winds",
});

export const metadata: Metadata = {
  title: "Street Roots",
  description:
    "Dois mestres, duas especialidades. Mesmo padrão: excelência de verdade. Agende seu corte com Diego Avelino ou Carlos Davi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${tradeWinds.variable} dark scroll-smooth`}
    >
      <body className="bg-background text-foreground antialiased font-body">
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
