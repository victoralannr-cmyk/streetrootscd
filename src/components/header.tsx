
"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#about", label: "Mestres" },
  { href: "#gallery", label: "Clientes" },
  { href: "#pricing", label: "Preços" },
  { href: "#contact", label: "Contato" },
];

const logoUrl = "https://i.postimg.cc/T1pnh9v9/550494427-24780280111639226-1572840491972429960-n-removebg-preview.png";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={logoUrl}
            alt="Street Roots Logo"
            width={160}
            height={60}
            className="object-contain"
          />
        </Link>
        
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
           <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-md shadow-primary/20 transition-transform duration-300 hover:scale-105">
              <Link href="#contact">Agendar Horário</Link>
            </Button>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-card">
              <nav className="grid gap-6 text-lg font-medium mt-16 text-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-md shadow-primary/20">
                  <Link href="#contact">Agendar Horário</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

    