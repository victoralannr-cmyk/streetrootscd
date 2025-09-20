"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#about", label: "Sobre" },
  { href: "#gallery", label: "Galeria" },
  { href: "#contact", label: "Contato" },
];

const logoUrl = "https://i.postimg.cc/vZp2y49k/550494427-24780280111639226-1572840491972429960-n.jpg";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        {/* Left Section */}
        <nav className="hidden gap-6 md:flex">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Center Section (Logo) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={logoUrl}
              alt="Street Roots Logo"
              width={140}
              height={50}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-end space-x-2">
          <nav className="hidden gap-6 md:flex">
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80"
              >
                {link.label}
              </Link>
            ))}
            <Link href="#contact">
              <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity">
                Agendar Agora
              </Button>
            </Link>
          </nav>
          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs">
                <nav className="grid gap-6 text-lg font-medium mt-8">
                  <Link
                    href="/"
                    className="flex items-center justify-center gap-2 text-lg font-semibold"
                  >
                     <Image
                        src={logoUrl}
                        alt="Street Roots Logo"
                        width={140}
                        height={50}
                        className="object-contain"
                      />
                    <span className="sr-only">Street Roots</span>
                  </Link>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
