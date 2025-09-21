import Link from "next/link";
import Image from "next/image";

const logoUrl =
  "https://i.postimg.cc/T1pnh9v9/550494427-24780280111639226-1572840491972429960-n-removebg-preview.png";

type Barbers = {
    name: string;
    title: string;
    location: string;
    phone: string;
    instagram: string;
}[];

export function AppFooter({ barbers }: { barbers: Barbers }) {
  return (
    <footer className="w-full border-t bg-card/50 pt-12 pb-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-4">
             <Link href="/" className="flex justify-center items-center space-x-2">
                <Image
                  src={logoUrl}
                  alt="Street Roots Logo"
                  width={180}
                  height={70}
                  className="object-contain"
                />
              </Link>
            <p className="max-w-xs text-foreground/70">
              Dois mestres, um padrão: excelência de verdade.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-xs text-foreground/50">
          <p>
            &copy; {new Date().getFullYear()} Street Roots. Dois mestres, um padrão: excelência de verdade.
          </p>
        </div>
      </div>
    </footer>
  );
}
