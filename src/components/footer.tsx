import Link from "next/link";

export function AppFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col gap-2 sm:flex-row py-6 shrink-0 items-center px-4 md:px-6">
        <p className="text-xs text-foreground/70">
          &copy; {new Date().getFullYear()} Street Roots. Todos os
          direitos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
          >
            Termos de Serviço
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
          >
            Política de Privacidade
          </Link>
        </nav>
      </div>
    </footer>
  );
}
